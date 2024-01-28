<?php

use App\Http\Controllers\User\ClothesController;
use App\Http\Controllers\User\OccasionController;
use App\Http\Controllers\User\TrailController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\AuthController;
use App\Http\Controllers\Admin\AdminController;


Route::middleware(['admin:api'])->group(function () {
    Route::get('/admin/getusers', [AdminController::class, 'getUser']);
    Route::post('/admin/getsingleuser', [AdminController::class, 'getOneUser']);

    Route::get('/admin/getoccasions', [AdminController::class, 'getOccasions']);
    Route::post('/admin/getsingleoccasion', [AdminController::class, 'getOneOccasion']);

    Route::get('/admin/getclothes', [AdminController::class, 'getClothes']);
    Route::post('/admin/getsingleitem', [AdminController::class, 'getOneItem']);

    Route::get('/admin/gettrails', [AdminController::class, 'getTrails']);
    Route::post('/admin/getsingletrail', [AdminController::class, 'getOneTrail']);
});
Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
    Route::get('user', 'get_user');
});


Route::controller(OccasionController::class)->group(function () {
    Route::post('occasion', 'createOccasion');
});
Route::controller(ClothesController::class)->group(function () {
    Route::post('add-clothes', 'createItem');
});
Route::controller(TrailController::class)->group(function () {
    Route::post('update-trail', 'updateTrail');
});