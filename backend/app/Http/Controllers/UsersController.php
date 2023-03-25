<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Detail;
use Illuminate\Support\Facades\Storage;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UsersController extends Controller
{
    function addUserDetails(Request $request,$id,$id_detail){
        if($id_detail == "add"){
            $detail = new Detail;
        }else{
            $detail = Detail::find($id_detail);
        }
        $user = User::find($id); 
        $extension = $request->image_extension;
        $profile_pic = $request->profile_pic_encoded;  // your base64 encoded
        $profile_pic = str_replace('data:image/'.$extension.';base64,', '', $profile_pic);
        $profile_pic = str_replace(' ', '+', $profile_pic);
        $image = base64_decode($profile_pic);
        $profile_pic_name = time() . '-' .$user->first_name . '.' . $extension;
        Storage::disk('public')->put('images/'. $profile_pic_name,$image);

            
            $detail->bio = $request->bio;
            $detail->profile_pic = 'http://127.0.0.1:8000/storage/images/'. $profile_pic_name;
            $detail->user_id = $user->id;
            $detail->save();
    
            return response()->json([
                "success" => true
            ]);
        }
    
    function getUsers(Request $request){
        $all = User::all();
        return response()->json([
            'status' => 200,
            'data' => $all
        ]);}
}

