<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class MessagesController extends Controller
{
    public function getAllMessages(Request $request){

        $sender_id = Auth::id();
        $query = Message::where('sender_id',$sender_id)->get();
        if($query) {
            return response()->json([
                'status' => 'success',
                'data' => $query
            ]);
        }
        return response()->json(['message' => "No messages"]);
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
