<?php

test('registration screen can be rendered', function () {
    $this->get(route('register'))->assertOk();
});

test('new users can register', function () {
    $this->post(route('register.store'), [
        'name' => 'Alya Putri',
        'email' => 'alya@example.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ])
        ->assertRedirect(route('ai-blueprint'));

    $this->assertAuthenticated();
});
