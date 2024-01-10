<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin:api', ['except' => ['login', 'register']]);
    }

    public function getUser()
    {
        $getall = User::all();
        return response()->json([
            'status' => 'success',
            'response' => $getall,
        ]);
    }
}