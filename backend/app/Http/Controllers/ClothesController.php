<?php

namespace App\Http\Controllers;

use App\Models\Clothes;
use App\Models\Artryon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\QueryException;

class ClothesController extends Controller
{
    public function createItem(Request $request)
    {
        try {
            if (Auth::check()) {
                $user = Auth::user();
                $request->validate([
                    'name' => 'required',
                    'price' => 'required|numeric|min:0',
                    'image' => 'required|file',
                ]);

                $imageName = $user->id . '_' . time() . '_' . $request->file('image')->getClientOriginalName();

                $clothesItem = Clothes::create([
                    'name' => $request->name,
                    'price' => $request->price,
                    'image' => $imageName,
                    'brand_id' => $request->brand_id,
                    'category_id' => $request->category_id,
                    'user_id' => $user->id,
                ]);

                $request->file('image')->storeAs('public/images/', $imageName);

                
                $ARtryOn=Artryon::create([
                    'user_id'=>$user->id,
                    'clothes_id'=>$clothesItem->id,
                ]);
                return response()->json([
                    'status' => 'success',
                    'message' => 'Created successfully',
                    'clothes_item' => $clothesItem,$ARtryOn
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