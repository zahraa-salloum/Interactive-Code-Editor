<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;

Route::post('/signup', [UsersController::class, 'signup']);
