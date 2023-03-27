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
        $profile_pic = $request->profile_pic_encoded;  // your base64 encoded
        list($type, $profile_pic) = explode(';', $profile_pic);
        list(, $type) = explode(':', $type);
        list(, $profile_pic) = explode(',', $profile_pic);
        $profile_pic = str_replace(' ', '+', $profile_pic);
        $image = base64_decode($profile_pic);
        $extension = strtolower(explode('/', $type)[1]);
        $profile_pic_name = time() . '-' .$id . '.' . $extension;
        Storage::disk('public')->put('images/'. $profile_pic_name,$image);        

              
            $detail->picture = 'http://127.0.0.1:8000/storage/images/'. $profile_pic_name;
            // $detail->picture = $request -> picture;
            $detail->bio = $request->bio;
            $detail->user_id = $id;
            $detail->save();
    
            return response()->json([
                "success" => true
            ]);
        }
    
    function getUsers(Request $request){
        $all = User::leftjoin('details','details.user_id','=','users.id')->select('*', 'users.id as id')->where('user_type_id',2)->get();
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

    function filter(Request $request){
        $query = User::leftJoin('details', 'details.user_id', '=', 'users.id')->select('*', 'users.id as id')->where('user_type_id', 2);
    
        if ($request->has('name')) {
            $name = $request->input('name');
            $query->where(function ($q) use ($name) {
                $q->where('first_name', 'LIKE', '%'.$name.'%')
                    ->orWhere('last_name', 'LIKE', '%'.$name.'%');
            });
        }
    
        $users = $query->get();
        return response()->json([
            'status' => 200,
            'users' => $users
        ]);
    }
    
}

