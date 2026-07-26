<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'home')->name('home');
Route::inertia('/about', 'about')->name('about');
Route::inertia('/services', 'services/index')->name('services');
Route::inertia('/services/{slug}', 'services/show')->name('services.show');
Route::inertia('/packages', 'packages/index')->name('packages');
Route::inertia('/packages/{slug}', 'packages/show')->name('packages.show');
Route::inertia('/partners', 'partners/index')->name('partners');
Route::inertia('/partners/{slug}', 'partners/show')->name('partners.show');
Route::inertia('/weddings', 'weddings/index')->name('weddings');
Route::inertia('/weddings/{slug}', 'weddings/show')->name('weddings.show');
Route::inertia('/gallery', 'gallery')->name('gallery');
Route::inertia('/contact', 'contact')->name('contact');

Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthenticatedSessionController::class, 'create'])->name('login');
    Route::post('/login', [AuthenticatedSessionController::class, 'store'])->name('login.store');
    Route::get('/register', [RegisteredUserController::class, 'create'])->name('register');
    Route::post('/register', [RegisteredUserController::class, 'store'])->name('register.store');
});

Route::middleware('auth')->group(function () {
    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
    Route::inertia('/ai-blueprint', 'ai-blueprint')->name('ai-blueprint');
});
