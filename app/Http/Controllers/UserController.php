<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('Dashboard', [
            'message' => "Our ge the sustainable investors!",
            'banner' => 'banner.webp',
            'plans' => [
                [
                    'id' => 1,
                    'name' => 'Plan 1',
                    'price' => 100,
                    'daily_income' => 10,
                    'total_income' => 1000,
                    'duration' => 100,
                ],
                [
                    'id' => 2,
                    'name' => 'Plan 2',
                    'price' => 200,
                    'daily_income' => 20,
                    'total_income' => 2000,
                    'duration' => 100,
                ],
                [
                    'id' => 3,
                    'name' => 'Plan 3',
                    'price' => 300,
                    'daily_income' => 30,
                    'total_income' => 3000,
                    'duration' => 100,
                ],
            ],
        ]);
    }

    public function task()
    {
        return Inertia::render('Task');
    }

    public function team()
    {
        return Inertia::render('Team', [
            'invite_code' => '123456',
            'link_refferal' => 'https://oliempire.com/register?ref=123456',
            'team_size' => 10,
            'team_recharge' => 100,
            'team_withdrawal' => 100,
            'new_team' => 0,
            'first_recharge' => 1,
            'first_withdrawal' => 1,
            'teams' => [
                [
                    'id' => 1,
                    'account' => 'rus.***********com',
                    'recharge_amount' => 10,
                    'recharge_rebate' => 1.38,
                    'task_rebate' => 100,
                    'join_time' => '10/02/2026 13:18:57'
                ]
            ]
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
            'recharge_amount' => 0,
        ]);
    }


    public function selectRecharge()
    {
        return Inertia::render('Account/SelectRecharge');
    }

    public function recharge($network)
    {
        $evmAddress  = '0xdC5f255f2bc90877423A2260F70d358683190bDe';
        $tronAddress = 'TNAz2KUV2NayzR3XwVRgdQa28J2GP4XmHS';

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
        return Inertia::render('Account/Withdraw');
    }

    public function balance()
    {
        return Inertia::render('Account/Balance');
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
