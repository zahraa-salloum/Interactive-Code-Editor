<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\CodesController;
use App\Http\Controllers\MessagesController;


Route::group(['prefix' => 'v0.0.1'], function(){
  Route::group(['prefix' => 'auth'], function () {
    Route::post('login',[AuthController::class, 'login']);  
      Route::post('logout',[AuthController::class, 'logout']);
      Route::post('refresh',[AuthController::class, 'refresh']);
  });

      Route::group(['middleware' => 'auth:api'], function(){
        Route::get('/get_messages', [MessagesController::class, "getMessages"]);
        Route::post('/send_message', [MessagesController::class, "sendMessage"]);
        Route::get('/get_all_messages',[MessagesController::class,"getAllMessages"]);
        Route::post('/store_code', [CodesController::class, "storeCode"]);
        Route::get('/get_code/{user_id}', [CodesController::class, "getCodeById"]);
        Route::post('add_details/{add?}',[UsersController::class, 'addUserDetails']); 
        Route::get('/get_all_users',[UsersController::class,'getUsers']);
        Route::post('/search_messages',[MessagesController::class,"searchMessages"]);
      });

      Route::post('register',[AuthController::class,'register']);
      
      });




