<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ControllerUser;

Route::post('/signup', [ControllerUser::class, 'signup']);
