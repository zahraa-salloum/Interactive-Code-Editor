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
}
