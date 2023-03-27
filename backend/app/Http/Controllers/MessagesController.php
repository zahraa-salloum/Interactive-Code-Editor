<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Message;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class MessagesController extends Controller
{
    public function getAllMessages(Request $request){

        $user_id = Auth::id();
        $query = User::join('messages','users.id', '=','messages.sender_id')->where('sender_id',$user_id)->orWhere('receiver_id',$user_id)->get('*','id as users.id');
        
    

        if($query) {
            return response()->json([
                'status' => 'success',
                'data' => $query
            ]);
        }
        return response()->json(['message' => "No messages"]);
    }

    public function searchMessages(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'failed',
                'message' => $validator->errors()
            ], 401);
        }
        $user_id= Auth::id();
        $query = User::leftjoin('messages',function($join) {
            $join->on('users.id', '=', 'messages.sender_id')
                 ->orOn('users.id', '=', 'messages.receiver_id');
        })->where('first_name','like','%'.$request->name.'%')->where('last_name','like','%'.$request->name.'%')->get();
        if($query){
            return response()->json([
                'status' => 'success',
                'data' => $query
            ]);
        }
        return response()->json(['message' => "No users"]);
    }
  

    function sendMessage(Request $request){
        $sender_id = Auth::user()->id;
        
        $new_message = new Message;
        $new_message->message_content = $request->message_content;
        $new_message->sender_id = $sender_id;
        $new_message->receiver_id = $request->receiver_id;
        $new_message->save();

        return response()->json([
            "success" => true
        ]);
    } 
        
    function getMessages(Request $request){
        $sender_id = Auth::user()->id;
        $receiver_id = $request->receiver_id;
        $messages = Message::where('sender_id', $sender_id)->where('receiver_id', $receiver_id)->orWhere('receiver_id', $sender_id)->where('sender_id', $receiver_id)->get();
    
        return response()->json([
            "messages" => $messages
        ]);
    }
    
}
