<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TrailController extends Controller
{
    function updateTrail(Request $request){
        try {
            if (Auth::check()) {
                $user = Auth::user();
                $trail=Trail::get($user->user_id);
                $request->validate([
                    'choosen' => 'required',
                ]);
            }
            } catch (QueryException $e) {
              
                return response()->json([
                    'status' => 'failed',
                    'message' => 'Database error: ' . $e->getMessage(),
                ]);

    }
}