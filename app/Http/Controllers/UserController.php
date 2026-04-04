<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Plan;
use App\Models\Investment;
use Inertia\Inertia;

class UserController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('Dashboard', [
            'message' => "Our ge the sustainable investors!",
            'banner' => 'banner.webp',
            'plans' => Plan::whereStatus(1)->get()->map(function ($plan) {
                return [
                    'id' => $plan->id,
                    'name' => $plan->getName(),
                    'image' => $plan->getImage(),
                    'price' => $plan->getPrice(),
                    'daily_income' => $plan->getDailyIncome(),
                    'total_income' => $plan->getTotalIncome(),
                    'duration' => $plan->getDuration(),
                ];
            }),
        ]);
    }

    public function task()
    {
        $user = Auth::user();
        $now = now();
        $investments = Investment::with('plan')->where('user_id', $user->id)->latest()->get();

        $completedCount = 0;
        $inProgressCount = 0;

        $mappedInvestments = $investments->map(function ($investment) use (&$completedCount, &$inProgressCount, $now) {
            $plan = $investment->plan;
            $isCompleted = ($investment->pay_count >= $plan->how_many_time);

            if ($isCompleted) {
                $completedCount++;
            } else {
                $inProgressCount++;
            }

            $isReady = ($investment->next_payment_date <= $now && !$isCompleted);

            return [
                'id' => $investment->id,
                'plan_name' => $plan->plan_name,
                'image' => $plan->getImage(),
                'price' => $investment->amount,
                'income' => $plan->getTotalIncome(),
                'status' => $investment->plan_status,
                'is_completed' => $isCompleted,
                'is_ready' => $isReady,
                'next_payment_date' => $investment->next_payment_date,
            ];
        });

        return Inertia::render('Task', [
            'balance' => $user->balance,
            'profit_balance' => $user->profit_balance,
            'all_count' => $investments->count(),
            'completed_count' => $completedCount,
            'in_progress_count' => $inProgressCount,
            'investments' => $mappedInvestments,
        ]);
    }

    public function team()
    {
        $user = Auth::user()->load('referrals');

        return Inertia::render('Team', [
            'invite_code' => $user->invitation_code,
            'link_refferal' => url('/register?ref=' . $user->invitation_code),
            'team_size' => $user->referrals->count(),
            'team_recharge' => 0,
            'team_withdrawal' => 0,
            'new_team' => $user->referrals->where('created_at', '>=', now()->subDays(7))->count(),
            'first_recharge' => 0,
            'first_withdrawal' => 0,
            'teams' => $user->referrals->map(fn($ref) => [
                'id' => $ref->id,
                'account' => str($ref->username())->mask('*', 3, -4)->value(),
                'recharge_amount' => 0,
                'recharge_rebate' => 0,
                'task_rebate' => 0,
                'join_time' => $ref->created_at->format('d/m/Y H:i:s')
            ])->values(),
        ]);
    }

    public function vip()
    {
        return Inertia::render('Vip');
    }

    public function mine()
    {
        return Inertia::render('Mine', [
            'username' => Auth::user()->username(),
            'balance' => Auth::user()->balance,
            'profit_balance' => Auth::user()->profit_balance,
            'recharge_amount' => 0,
        ]);
    }


    public function selectRecharge()
    {
        return Inertia::render('Account/SelectRecharge');
    }

    public function recharge($network)
    {
        $wallet = Auth::user()->wallet;
        $evmAddress  = $wallet->eth_address;
        $tronAddress = $wallet->tron_address;

        $evmNetworks = [
            'BEP20-USDT', 'BNB', 'BEP20-USDC', 'POLYGON-USDC', 'POLYGON-USDT', 'ETH-USDC', 'ETH-USDT'
        ];

        $address = in_array($network, $evmNetworks) ? $evmAddress : $tronAddress;

        return Inertia::render('Account/Recharge', [
            'network' => $network,
            'address' => $address,
        ]);
    }

    public function withdraw()
    {
        return Inertia::render('Account/Withdraw', [
            'balance' => Auth::user()->balance,
            'profit_balance' => Auth::user()->profit_balance,
        ]);
    }

    public function balance()
    {
        return Inertia::render('Account/Balance', [
            'balance' => Auth::user()->balance,
            'profit_balance' => Auth::user()->profit_balance,
        ]);
    }

    public function changePassword()
    {
        return Inertia::render('Account/ChangePassword');
    }

    public function company()
    {
        return Inertia::render('Account/Company');
    }

    public function article()
    {
        return Inertia::render('Account/Article');
    }

    public function finance()
    {
        return Inertia::render('Account/Finance');
    }
}
