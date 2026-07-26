<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::inertia('/login', 'auth/login')->name('login');
Route::inertia('/register', 'auth/register')->name('register');

// Alias yang sering dipakai
Route::redirect('/auth/login', '/login');
Route::redirect('/auth/register', '/register');
