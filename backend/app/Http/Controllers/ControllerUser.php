<?php

namespace App\Http\Controllers;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ControllerUser extends Controller
{
    public function signup(Request $request){
        $validator = Validator::make($request-> all(),[
            'first_name'=>'required|max:255',
            'last_name'=>'required|max:255',
            'email'=>'required|email|max:255|unique:users,email',
            'password'=>'required|min:8|max:255|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/',
            'user_type_id'=>'required|exists:type,id',
        ]);
        if($validator->fails()){
            return response() -> json([
                'status'=>400,
                'message'=>$validator->errors()
            ],400);
        }
        $user = User::create([
            'first_name'=>$request->first_name,
            'last_name'=>$request->last_name,
            'email'=>$request->email,
            'password'=>bcrypt($request->password),
            'user_type_id'=>$request->user_type_id,
        ]);

        return response() -> json([
            'status'=>201,
            'user_id'=>$user->id,
            'message'=> 'User created successfully'
        ],201);
    }
}
