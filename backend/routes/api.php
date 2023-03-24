<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UsersController;

Route::group(['prefix' => 'v0.0.1'], function(){
  Route::group(['prefix' => 'auth'], function () {
      Route::post('login',[AuthController::class, 'login']);  
      Route::post('logout',[AuthController::class, 'logout']);
      Route::post('refresh',[AuthController::class, 'refresh']);
  });


  Route::group(['middleware' => 'auth:api'], function(){
    Route::post('add_details',[UsersController::class, 'addUserDetails']); 

      });

  Route::post('register',[AuthController::class,'register']);

});



