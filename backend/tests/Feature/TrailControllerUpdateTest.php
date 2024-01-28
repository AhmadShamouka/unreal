<?php
namespace Tests\Feature;

use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Occasion;

class TrailControllerUpdateTest extends TestCase
{
    public function testCreateOccasion()
    {
                  $response = $this->postJson('/api/login', [
                    'email' => 'shamoukaahmad@gmail.com',
                    'password' => '123123',
                ]);
        
                $response->assertStatus(200);
             
                $token = $response['authorisation']['token'];
                $formData = [
                    'id'=>1
                ];
                   
                $response = $this->withHeaders([
                    'Authorization' => 'Bearer ' . $token,
                ])->postJson('/api/update-trail',$formData);
        
        $response->assertStatus(200);
      
    }
}