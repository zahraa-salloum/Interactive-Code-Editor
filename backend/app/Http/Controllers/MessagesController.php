<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class MessagesController extends Controller
{
    public function getMessages(Request $request){
        // $validator = Validator::make($request->all(), [
        //     'receiver_id' => 'required'
        // ]);

        // if ($validator->fails()) {
        //     return response()->json([
        //         'status' => 'failed',
        //         'message' => $validator->errors()
        //     ], 401);
        // }

        $sender_id = Auth::id();
        $query = Message::where('sender_id',$sender_id)->get();
        dd($query);
    }
}
