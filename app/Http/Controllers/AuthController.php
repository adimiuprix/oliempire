<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class AuthController extends Controller
{
    public function index()
    {
        return redirect()->route('login');
    }

    public function register()
    {
        return Inertia::render('Auth/Register');
    }

    public function login()
    {
        return Inertia::render('Auth/Login');
    }
}
