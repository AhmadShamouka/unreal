<?php

namespace App\Http\Controllers;

use App\Models\Occasion;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');
    }

    public function getUser()
    {
    
    if(Auth::Check()){
        $getall = User::all();
        return response()->json([
            'status' => 'success',
            'response' => $getall,
        ]);
    }
    return response()->json([
        'status' => 'failed',
        'response' =>"Not Signed In",
    ]);
    }

    public function getOneUser(Request $request){
        if (Auth::check()) {
          
            $user = User::find($request->id);
    

            if ($user) {
                return response()->json([
                    'status' => 'success',
                    'response' => $user,
                ]);
            } else {
                return response()->json([
                    'status' => 'failed',
                    'response' => 'User not found',
                ], 404); 
            }
        }

    }
}