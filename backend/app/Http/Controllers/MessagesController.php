<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;
use Auth;

class MessagesController extends Controller
{

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
        
    
    
}
