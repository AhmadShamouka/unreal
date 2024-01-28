<?php
namespace Tests\Feature;

use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;


class AdminControllerGetSingleOccasionsTest extends TestCase
{
    public function testUserLoginAndFetchUsers()
    {
     
        $response = $this->postJson('/api/login', [
            'email' =>'admin@admin.com',
            'password' => 'password123',
        ]);

        
        $response->assertStatus(200);

        $token = $response['authorisation']['token'];

        $formData=['id'=>'1'];

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->postJson('/api/admin/getsingleoccasion',$formData);

    
        $response->assertStatus(200);

      
    }
}