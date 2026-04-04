<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TransferController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        return inertia('Account/TransferProfit', [
            'balance' => $user->balance,
            'profit_balance' => $user->profit_balance,
        ]);
    }

    public function transfer(Request $request)
    {
        $request->validate([
            'amount' => 'required|numeric|min:0.01',
        ]);

        $user = Auth::user();
        $amount = round((float) $request->amount, 2);

        if ($amount > $user->profit_balance) {
            return back()->with('error', 'Insufficient profit balance.');
        }

        DB::transaction(function () use ($user, $amount) {
            $user->decrement('profit_balance', $amount);
            $user->increment('balance', $amount);
        });

        return back()->with('success', 'Successfully transferred $' . number_format($amount, 2) . ' to your main balance.');
    }
}
