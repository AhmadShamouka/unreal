<?php
namespace Tests\Feature;

use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class AuthControllerLoginTest extends TestCase
{
    public function testUserLogin()
    {
      
        $user = User::where('email', 'shamoukaahmad@gmail.com')->first();
        $this->assertNotNull($user, 'User not found.');

        $password = '123123';

        $response = $this->postJson('/api/login', [
            'email' => 'shamoukaahmad@gmail.com',
            'password' => $password, 
        ]);

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'user',
            'authorisation' => [
                'token',
                'type',
            ],
        ]);
    }
}