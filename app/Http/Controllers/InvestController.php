<?php

namespace App\Http\Controllers;

use App\Models\Investment;
use App\Models\Plan;
use App\Models\Time;
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

        // We find the Time record by its name (stored in 'every_time')
        $time = Time::where('name', $plan->every_time)->first();
        $next_payment_date = now()->addHours($time ? (int)$time->time : 24);

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
                'interest_amount' => null,
                'pay_count' => 0,
                'payment_status' => 1,
            ]);
        });

        return back()->with('success', 'Investment successful');
    }
}
