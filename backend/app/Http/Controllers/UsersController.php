<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Detail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UsersController extends Controller
{
    function addUserDetails(Request $request,$add=null){
        $id = Auth::id();
        if($add == "add"){
            $detail = new Detail;
        }else{
            $detail = Detail::where('user_id',$id)->first();
        }
        // $extension = $request->image_extension;
        // $profile_pic = $request->profile_pic_encoded;  // your base64 encoded
        // $profile_pic = str_replace('data:image/'.$extension.';base64,', '', $profile_pic);
        // $profile_pic = str_replace(' ', '+', $profile_pic);
        // $image = base64_decode($profile_pic);
        // $profile_pic_name = time() . '-' .$user->first_name . '.' . $extension;
        // Storage::disk('public')->put('images/'. $profile_pic_name,$image);

            
            $detail->bio = $request->bio;
            // $detail->profile_pic = 'http://127.0.0.1:8000/storage/images/'. $profile_pic_name;
            $detail->picture = $request -> picture;
            $detail->user_id = $id;
            $detail->save();
    
            return response()->json([
                "success" => true
            ]);
        }
    
    function getUsers(Request $request){
        $all = User::leftjoin('details','details.user_id','=','users.id')->where('user_type_id',2)->get();
        return response()->json([
            'status' => 200,
            'users' => $all
        ]);
       }
    
    function getUser(Request $request){
        $id = Auth::user()->id;
        $user= User::find($id);
        return response()->json([
            'status' => 200,
            'user' => $user
        ]);
    }
}

