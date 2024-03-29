<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Clothes;
use App\Models\Occasion;
use App\Models\Trail;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');
    }

    public function getUsers()
    {
        if (Auth::Check()) {
            $getall = User::all();
            $usersCount = User::count();
            return response()->json([
                'status' => 'success',
                'response' => $getall,
                'count' => $usersCount
            ]);
        }
        return response()->json([
            'status' => 'failed',
            'response' => "Not Signed In",
        ]);
    }

    public function getOneUser(Request $request)
    {
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
        return response()->json([
            'status' => 'failed',
            'message' => "User not authenticated",
        ], 401);
    }

    public function getOccasions()
    {
        if (Auth::Check()) {
            $getallOccasions = Occasion::all();
            $occasionsCount = Occasion::count();
            $occasion_Type_Counts = Occasion::select('occasion_type', \DB::raw('COUNT(*) as count'))
                ->groupBy('occasion_type')
                ->get();
            $occasion_style_Counts = Occasion::select('style', \DB::raw('COUNT(*) as count'))
                ->groupBy('style')
                ->get();
            return response()->json([
                'status' => 'success',
                'response' => $getallOccasions,
                'count' => $occasionsCount,
                'occasion_Type_Counts' => $occasion_Type_Counts,
                'occasion_style_Counts' => $occasion_style_Counts
            ]);
        }
        return response()->json([
            'status' => 'failed',
            'response' => "Not Signed In",
        ]);
    }

    public function getOneOccasion(Request $request)
    {
        if (Auth::check()) {
            $user = Occasion::find($request->id);
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
        return response()->json([
            'status' => 'failed',
            'message' => "User not authenticated",
        ], 401);
    }

    public function destroy(Request $request)
    
    {   
        if (Auth::check()) {
        $user = User::find($request->id);
        if($user){
        $user->delete();

        
        return response()->json([
            'status' => 'success',
            'response' => "Deleted Succesfully",
        ]);
        }else{
            return response()->json([
                'status' => 'failed',
                'response' => "User not found",
            ]);
        }
        }else{
        return response()->json([
            'status' => 'failed',
            'message' => "User not authenticated",
        ], 401);
    }
}




    public function getClothes()
    {
        if (Auth::Check()) {
            $getallClothes = Clothes::all();
            $clothessCount = Clothes::count();
            return response()->json([
                'status' => 'success',
                'response' => $getallClothes,
                'count' => $clothessCount
            ]);
        }
        return response()->json([
            'status' => 'failed',
            'response' => "Not Signed In",
        ]);
    }

    public function getOneItem(Request $request)
    {
        if (Auth::check()) {
            $getSingleItem = Clothes::find($request->id);
            if ($getSingleItem) {
                return response()->json([
                    'status' => 'success',
                    'response' => $getSingleItem,
                ]);
            } else {
                return response()->json([
                    'status' => 'failed',
                    'response' => 'User not found',
                ], 404);
            }
        }
        return response()->json([
            'status' => 'failed',
            'message' => "User not authenticated",
        ], 401);
    }

    public function getTrails()
    {
        if (Auth::Check()) {
            $getallTrails = Trail::all();
            $trailsCount = Trail::count();
            $getChosenTrails = Trail::where('choosen', 1)->get();
            return response()->json([
                'status' => 'success',
                'response' => $getallTrails,
                'count' => $trailsCount,
                'choosenTrails' => $getChosenTrails
            ]);
        }
        return response()->json([
            'status' => 'failed',
            'response' => "Not Signed In",
        ]);
    }

    public function getOneTrail(Request $request)
    {
        if (Auth::check()) {
            $getSingleTrail = Trail::find($request->id);
            if ($getSingleTrail) {
                return response()->json([
                    'status' => 'success',
                    'response' => $getSingleTrail,
                ]);
            } else {
                return response()->json([
                    'status' => 'failed',
                    'response' => 'User not found',
                ], 404);
            }
        }
        return response()->json([
            'status' => 'failed',
            'message' => "User not authenticated",
        ], 401);
    }
}