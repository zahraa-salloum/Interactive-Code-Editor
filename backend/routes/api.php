<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
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
        Route::get('/send_message', [MessagesController::class, "sendMessage"]);
        Route::post('/store_code', [CodesController::class, "storeCode"]);
        Route::get('/get_code/{user_id}', [CodesController::class, "getCodeById"]);
        
      });

      Route::post('register',[AuthController::class,'register']);

});



