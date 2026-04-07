<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Models\Withdraw;
use Illuminate\Support\Facades\Log;

class WithdrawController extends Controller
{
    public function paymentProcess(Request $request)
    {
        $request->validate([
            'amount' => 'required|numeric|min:10',
            'wallet_address' => 'required',
            'password' => 'required',
            'method' => 'required',
        ]);

        Log::info($request->all());

        $user = Auth::user();

        if ($user->balance < $request->amount) {
            return back()->with('error', 'Insufficient balance');
        }

        $user->decrement('balance', $request->amount);

        $trx = strtoupper(Str::random(10));

        Withdraw::create([
            'user_id' => $user->id,
            'amount' => $request->amount,
            'trx' => $trx,
            'status' => 'pending',
        ]);

        return back()->with('success', 'Withdrawal request has been submitted');
    }
}
