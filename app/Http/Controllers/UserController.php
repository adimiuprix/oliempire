<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('Dashboard');
    }

    public function task()
    {
        return Inertia::render('Task');
    }

    public function team()
    {
        return Inertia::render('Team');
    }

    public function vip()
    {
        return Inertia::render('Vip');
    }

    public function mine()
    {
        return Inertia::render('Mine');
    }

    public function recharge()
    {
        return Inertia::render('Account/Recharge');
    }
}
