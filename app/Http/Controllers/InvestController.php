<?php

namespace App\Http\Controllers;

use App\Models\Investment;
use App\Models\Plan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class InvestController extends Controller
{
    public function order(Request $request)
    {
        $request->validate([
            'plan_id' => 'required|exists:plans,id',
        ]);

        $plan = Plan::findOrFail($request->plan_id);
        $user = Auth::user();

        if ($user->balance < $plan->amount) {
            return back()->with('error', 'Insufficient balance');
        }

        // Set next_payment_date to now() so that the user can immediately crawl for the first profit
        $next_payment_date = now();

        DB::transaction(function () use ($user, $plan, $next_payment_date) {
            $user->decrement('balance', $plan->amount);

            $trx = strtoupper(Str::random(10));

            Investment::create([
                'user_id' => $user->id,
                'plan_id' => $plan->id,
                'transaction_id' => $trx,
                'amount' => $plan->amount,
                'charge' => 0,
                'final_amount' => $plan->amount,
                'next_payment_date' => $next_payment_date,
                'interest_amount' => 0,
                'pay_count' => 0,
                'plan_status' => 'running',
            ]);
        });

        return back()->with('success', 'Investment successful');
    }

    public function crawl(Request $request)
    {
        $user = Auth::user();
        $now = now();
        $investmentId = $request->investment_id;

        // Get active investments that are due for payment
        $query = Investment::with('plan')
            ->where('user_id', $user->id)
            ->where('plan_status', 'running')
            ->where('next_payment_date', '<=', $now);

        if ($investmentId) {
            $query->where('id', $investmentId);
        }

        $investments = $query->get();

        if ($investments->isEmpty()) {
            return back()->with('error', 'No tasks available at the moment. Please wait for the next cycle.');
        }

        $totalProfit = 0;
        $count = 0;

        DB::transaction(function () use ($investments, $user, &$totalProfit, &$count) {
            foreach ($investments as $inv) {
                $plan = $inv->plan;

                // Stop if investment duration ended
                if ($inv->pay_count >= $plan->how_many_time) {
                    continue;
                }

                $profit = ($inv->amount * $plan->interest_amount) / 100;
                $totalProfit += $profit;

                $inv->increment('pay_count');
                $inv->increment('interest_amount', $profit);

                // Mark as completed if limit reached
                if ($inv->pay_count >= $plan->how_many_time) {
                    $inv->plan_status = 'completed';
                }

                // Get interval hours
                $time = $plan->time;
                $inv->next_payment_date = $inv->next_payment_date->addHours($time ? (int)$time->time : 24);
                $inv->save();

                $count++;
            }

            if ($totalProfit > 0) {
                $user->increment('profit_balance', $totalProfit);
            }
        });

        if ($count > 0) {
            return back()->with('success', "Success! You have completed $count tasks and earned $" . number_format($totalProfit, 2));
        }

        return back()->with('error', 'All your active tasks have been completed for this cycle.');
    }
}
