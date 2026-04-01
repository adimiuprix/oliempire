<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\User;

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

        $referredBy = User::where('invitation_code', $request->invitationCode)->first();

        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone,
            'invitation_code' => Str::random(5),
            'referred_by' => $referredBy->id ?? null,
        ]);

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
