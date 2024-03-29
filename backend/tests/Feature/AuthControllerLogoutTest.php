<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AuthControllerLogoutTest extends TestCase
{
   
   public function testUserLogout(){
   $response=$this->postJson('/api/login',[
       'email'=>'shamoukaahmad@gmail.com',
       'password'=>'123123',
   ]);

   $token=$response->json('authorisation.token');
   $response->assertStatus(200);
   $this->assertNotNull($token);

   $logoutResponse=$this->withHeaders([
    'Authorization'=>'Bearer '. $token,
   ])->postJson('/api/logout');

   $logoutResponse->assertStatus(200);
  
   }

}