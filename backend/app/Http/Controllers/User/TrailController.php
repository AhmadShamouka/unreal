<?php


namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Trail;
use Illuminate\Database\QueryException;

class TrailController extends Controller
{
    public function updateTrail(Request $updateRequest)
    {   
        try {
            if (Auth::check()) {
                $user = Auth::user();
                
                $updateRequest->validate([
                    'id' => 'required|integer',
                ]);

                $id = $updateRequest->id;
                $trail = Trail::find($id);

                
                if ($trail && $trail->user_id === $user->id) {
                    
                    $trail->update([
                        'choosen' => 1,
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
                    ],404);
                }
            } else {
                return response()->json([
                    'status' => 'failed',
                    'message' => 'User not authenticated',
                ],401);
            }
        } catch (QueryException $e) {
            return response()->json([
                'status' => 'failed',
                'message' => 'Database error: ' . $e->getMessage(),
            ],500);
        }
    }
}