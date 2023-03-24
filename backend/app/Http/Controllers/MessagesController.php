<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;
use Illuminate\Support\Facades\Validator;

class MessagesController extends Controller
{
    public function getMessages(Request $request){
        $validator = Validator::make($request->all(), [
            'receiver_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'failed',
                'message' => $validator->errors()
            ], 401);
        }
    }
}
