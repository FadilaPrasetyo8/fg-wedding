<?php

use App\Models\User;

test('login screen can be rendered', function () {
    $this->get(route('login'))->assertOk();
});

test('users can authenticate using the login screen', function () {
    $user = User::factory()->create();

    $this->post(route('login.store'), [
        'email' => $user->email,
        'password' => 'password',
    ])
        ->assertRedirect(route('ai-blueprint'));

    $this->assertAuthenticated();
});

test('users cannot authenticate with invalid password', function () {
    $user = User::factory()->create();

    $this->post(route('login.store'), [
        'email' => $user->email,
        'password' => 'wrong-password',
    ]);

    $this->assertGuest();
});

test('users can logout', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post(route('logout'))
        ->assertRedirect(route('home'));

    $this->assertGuest();
});

test('guests cannot visit ai blueprint', function () {
    $this->get(route('ai-blueprint'))
        ->assertRedirect(route('login'));
});

test('authenticated users can visit ai blueprint', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get(route('ai-blueprint'))
        ->assertOk();
});
