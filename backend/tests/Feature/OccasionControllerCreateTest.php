<?php
namespace Tests\Feature;

use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Occasion;

class OccasionControllerCreateTest extends TestCase
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
                    'occasion_type' => 'party',
                    'style' => 'casual',
                    'season' => 'winter',
                    'budget_range'=>'low',
            
                ];
                   
                $response = $this->withHeaders([
                    'Authorization' => 'Bearer ' . $token,
                ])->postJson('/api/occasion',$formData);
        
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'message',
            'occasion',
            'openai',
            'suggested_link',
        ]);
    }
}