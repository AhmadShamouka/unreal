<?php
namespace Tests\Feature;

use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;


class AdminControllerGetTrailsTest extends TestCase
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
        ])->getJson('/api/admin/gettrails');

    
        $response->assertStatus(200);

      
    }
}