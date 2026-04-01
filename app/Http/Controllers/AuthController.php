<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;
use kornrunner\Ethereum\Address;
use kornrunner\Keccak;
use StephenHill\Base58;

class AuthController extends Controller
{
    public function index()
    {
        return redirect()->route('login');
    }

    public function register()
    {
        if (Auth::check()) {
            return redirect()->route('dashboard');
        }

        return Inertia::render('Auth/Register');
    }

    public function registerPost(Request $request)
    {
        $request->validate([
            'email' => 'required_without:phone|nullable|email|unique:users,email',
            'phone' => 'required_without:email|nullable|unique:users,phone',
            'password' => 'required|min:6|same:confirmPassword',
            'confirmPassword' => 'required|min:6',
            'invitationCode' => 'nullable|exists:users,invitation_code',
        ]);

        $user = null;
        DB::transaction(function () use ($request, &$user) {
            $referredBy = User::where('invitation_code', $request->invitationCode)->first();

            $user = User::create([
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'phone' => $request->phone,
                'invitation_code' => Str::random(5),
                'referred_by' => $referredBy->id ?? null,
            ]);

            // generate address evm
            $evmInit = new Address();
            $pubKey = $evmInit->getPublicKey();
            $user->wallet()->create([
                'private_key' => $evmInit->getPrivateKey(),
                'public_key'  => $pubKey,
                'address'     => '0x' . $evmInit->get(),
            ]);

            //generate tron address
            $hash = Keccak::hash(hex2bin($pubKey), 256);
            $tronHex = '41' . substr($hash, -40);
            $checkSum = substr(hash('sha256', hash('sha256', hex2bin($tronHex), true)), 0, 8);
            $base58 = new Base58();
            $tronAddress = $base58->encode(hex2bin($tronHex . $checkSum));

            $user->wallet()->create([
                'private_key' => $evmInit->getPrivateKey(),
                'public_key'  => $pubKey,
                'address'     => $tronAddress,
            ]);
        });

        Auth::login($user);

        return redirect()->route('dashboard');
    }

    public function login()
    {
        if (Auth::check()) {
            return redirect()->route('dashboard');
        }
        
        return Inertia::render('Auth/Login');
    }

    public function loginPost(Request $request)
    {
        $request->validate([
            'email' => 'required_without:phone|nullable|email|exists:users,email',
            'phone' => 'required_without:email|nullable|exists:users,phone',
            'password' => 'required|min:6',
        ]);

        $user = User::where('email', $request->email)->orWhere('phone', $request->phone)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return redirect()->back()->with('error', 'Invalid credentials');
        }

        Auth::login($user);

        return redirect()->route('dashboard');
    }

    public function logout()
    {
        Auth::logout();
        return redirect()->route('login');
    }
}
