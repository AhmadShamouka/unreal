<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Trail;
use Illuminate\Database\QueryException;

class TrailController extends Controller
{
    public function updateTrail(Request $request)
    {
        try {
            if (Auth::check()) {
                $user = Auth::user();
              
                $trail = $user->trail;

                if ($trail) {
                    $request->validate([
                        'choosen' => 'required',
                    ]);

                    $trail->update([
                        'choosen' => $request->choosen,
                    ]);

                    return response()->json([
                        'status' => 'success',
                        'message' => 'Trail updated successfully',
                        'trail' => $trail,
                    ]);
                } else {
                    return response()->json([
                        'status' => 'failed',
                        'message' => 'Trail not found for the authenticated user',
                    ]);
                }
            } else {
                return response()->json([
                    'status' => 'failed',
                    'message' => 'User not authenticated',
                ]);
            }
        } catch (QueryException $e) {
            return response()->json([
                'status' => 'failed',
                'message' => 'Database error: ' . $e->getMessage(),
            ]);
        }
    }
}