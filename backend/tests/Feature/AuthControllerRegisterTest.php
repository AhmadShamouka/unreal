<?php
namespace Tests\Feature;

use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class AuthControllerRegisterTest extends TestCase
{
    public function testCreateOccasion()
    {
              
                $formData = [
                    'username' => 'ahmad',
                    'email' => 'a-shamouka@gmail.com',
                    'password' => '70938737',
                    'age'=>'25',
                    'country'=>'Lebanon',
                    'sex'=>'male'
                ];
                   
                $response = $this->postJson('/api/register',$formData);
        
        $response->assertStatus(200);
 
    }
}