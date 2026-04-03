<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\InvestController;

Route::get('/', [AuthController::class, 'index'])->name('home');

Route::get('/login', [AuthController::class, 'login'])->name('login');
Route::get('/register', [AuthController::class, 'register'])->name('register');

Route::post('/login', [AuthController::class, 'loginPost'])->name('login.post');
Route::post('/register', [AuthController::class, 'registerPost'])->name('register.post');

Route::get('/account/signout', [AuthController::class, 'logout'])->name('account.signout');

Route::get('/dashboard', [UserController::class, 'dashboard'])->name('dashboard');
Route::get('/task', [UserController::class, 'task'])->name('task');
Route::get('/team', [UserController::class, 'team'])->name('team');
Route::get('/vip', [UserController::class, 'vip'])->name('vip');
Route::get('/mine', [UserController::class, 'mine'])->name('mine');
Route::get('/company', [UserController::class, 'company'])->name('company');
Route::get('/article', [UserController::class, 'article'])->name('article');

Route::get('/account/select-recharge', [UserController::class, 'selectRecharge'])->name('account.select-recharge');
Route::get('/account/recharge/{network}', [UserController::class, 'recharge'])->name('account.recharge');
Route::get('/account/withdraw', [UserController::class, 'withdraw'])->name('account.withdraw');
Route::get('/account/balance', [UserController::class, 'balance'])->name('account.balance');
Route::get('/account/change-password', [UserController::class, 'changePassword'])->name('account.change-password');
Route::get('/account/finance', [UserController::class, 'finance'])->name('account.finance');

Route::post('/order', [InvestController::class, 'order'])->name('order');