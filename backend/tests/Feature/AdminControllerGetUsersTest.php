<?php
namespace Tests\Feature;

use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;


class AdminControllerGetUsersTest extends TestCase
{
    public function testUserLoginAndFetchUsers()
    {
     
        $response = $this->postJson('/api/login', [
            'email' =>'admin@admin.com',
            'password' => 'password123',
        ]);

        
        $response->assertStatus(200);

        $token = $response['authorisation']['token'];


        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->getJson('/api/admin/getusers');

    
        $response->assertStatus(200);

      
    }
}