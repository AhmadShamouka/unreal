<?php
namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;

use App\Models\Clothes;
use App\Models\Trail;
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

                $imageName = $user->id . '_' . time() . '_' . $request->file('image')->getClientOriginalName();

                
                
                $ARtryOn=Trail::create([
                    'user_id'=>$user->id,
                    'clothes_id'=>$clothesItem->id,
                ]);
                return response()->json([
                    'status' => 'success',
                    'message' => 'Created successfully',
                    'clothes_item' => $clothesItem,
                    'Trails' =>$ARtryOn
                ]);


            }
            
            return response()->json([
                'status' => 'failed',
                'message' => 'You need permission',
            ]);
        } catch (QueryException $e) {
            
            return response()->json([
                'status' => 'failed',
                'message' => 'Database error: ' . $e->getMessage(),
            ]);
        } catch (\Exception $e) {
          
            return response()->json([
                'status' => 'failed',
                'message' => 'An error occurred: ' . $e->getMessage(),
            ]);
        }
    }
}