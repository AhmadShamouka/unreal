<?php

namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Database\QueryException;
class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'string',
        ]);
        $credentials = $request->only('email', 'password');

        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }
   
        $user = Auth::user();
        return response()->json([
                'status' => 'success',
                'user' => $user,
                'authorisation' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ]);
  
    }
          
    public function get_user(){
        try {
            $user = Auth::user();
            
            if (!$user) {
                return response()->json([
                    'status' => 'failed',
                    'message' => 'User not authenticated',
                ], 401);
            }
            $user = Auth::user();
            return response()->json([
                'user' => $user,
            ]);
        }
            catch (QueryException $e) {
                return response()->json([
                    'status' => 'failed',
                    'message' => 'Database error: ' . $e->getMessage(),
                ]);
            }
    }
    public function register(Request $request)
    {
        $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'string|min:6',
            'age'=>'nullable',
            'country' => 'string',
            'sex' => 'string'
        ]);
    
     
        if (User::where('email', $request->email)->exists()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Email is already registered',
            ], 400);
        }
    else{
        $user = User::create([
            'username' => $request->username,
            'admin' => $request->input('admin', 0),
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'age' => $request->age,
            'country' => $request->country,
            'sex' => $request->sex,
        ]);
    }
        $token = Auth::login($user);
    
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $user,
            'authorization' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }
    
    
    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'status' => 'success',
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }
    public function updateProfile(Request $request)
    {
        try {
            $user = Auth::user();
            
            if (!$user) {
                return response()->json([
                    'status' => 'failed',
                    'message' => 'User not authenticated',
                ], 401);
            }
    
            $request->validate([
                'password' => 'required|string|min:6',
                'age' => 'required|integer',
                'country' => 'required|string',
                'sex' => 'required|string'
            ]);
    
            $user->password = Hash::make($request->password);
            $user->age = $request->age;
            $user->country = $request->country;
            $user->sex = $request->sex;
            $user->save();
    
            return response()->json([
                'status' => 'success',
                'message' => 'User profile updated successfully',
                'user' => $user,
            ]);
        } catch (QueryException $e) {
            return response()->json([
                'status' => 'failed',
                'message' => 'Database error: ' . $e->getMessage(),
            ]);
        }
    }
    
}