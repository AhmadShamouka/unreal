<?php

namespace App\Http\Controllers;

use App\Models\Occasion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\QueryException;

class OccasionController extends Controller
{
    public function createOccasion(Request $request)
    {
        try {
            if (Auth::check()) {
                $user = Auth::user();
                $request->validate([
                    'occasion_type' => 'required',
                    'style' => 'required',
                    'hijab' => 'required|boolean',
                    'season' => 'required',
                    'budget_range' => 'required',
                ]);

                $occasion = Occasion::create([
                    'occasion_type' => $request->occasion_type,
                    'style' => $request->style,
                    'hijab' => $request->hijab,
                    'season' => $request->season,
                    'budget_range' => $request->budget_range,
                    'user_id' => $user->id,
                ]);

                return response()->json([
                    'status' => 'success',
                    'message' => 'Occasion created successfully',
                    'occasion' => $occasion,
                ]);
            }

            return response()->json([
                'status' => 'failed',
                'message' => 'You need permission',
            ]);
        } catch (QueryException $e) {
            // Handle database-related errors
            return response()->json([
                'status' => 'failed',
                'message' => 'Database error: ' . $e->getMessage(),
            ]);
        } catch (\Exception $e) {
            // Handle other general errors
            return response()->json([
                'status' => 'failed',
                'message' => 'An error occurred: ' . $e->getMessage(),
            ]);
        }
    }
}