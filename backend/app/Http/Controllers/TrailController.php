<?php


namespace App\Http\Controllers;

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


                if ($trail) {
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