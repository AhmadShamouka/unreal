<?php

use App\Http\Controllers\ClothesController;
use App\Http\Controllers\OccasionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');

});


Route::controller(OccasionController::class)->group(function () {
    Route::post('occasion', 'createOccasion');
});
Route::controller(ClothesController::class)->group(function () {
    Route::post('add-clothes', 'createItem');
});
Route::middleware(['auth:api'])->group(function () {
    Route::get('/admin/getUser', [AdminController::class, 'getUser']);
});