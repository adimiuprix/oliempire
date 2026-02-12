<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

Route::get('/', [AuthController::class, 'index'])->name('home');
Route::get('/login', [AuthController::class, 'login'])->name('login');
Route::get('/register', [AuthController::class, 'register'])->name('register');
Route::get('/dashboard', [UserController::class, 'dashboard'])->name('dashboard');
Route::get('/task', [UserController::class, 'task'])->name('task');
Route::get('/team', [UserController::class, 'team'])->name('team');
Route::get('/vip', [UserController::class, 'vip'])->name('vip');
Route::get('/mine', [UserController::class, 'mine'])->name('mine');

Route::get('/account/recharge', [UserController::class, 'recharge'])->name('account.recharge');
