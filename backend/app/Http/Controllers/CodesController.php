<?php
namespace App\Http\Controllers;
use App\Models\Code;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CodesController extends Controller
{
    public function storeCode(Request $request){
        $validator = Validator::make($request->all(),[
            'user_id'=>'required|exists:users,id',
            'code'=>'required|string|max:4294967295',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ], 401);
        }

        try {
            $code = Code::create($validator->validated());

            return response()->json([
                'status' => 200,
                'message' => 'Code added successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'message' => 'Error adding code: ' . $e->getMessage()
            ], 500);
        } 
    }

    public function getCodeById($user_id){
        $validator = Validator::make(['user_id' => $user_id], [
            'user_id' => 'required|exists:users,id',
        ]);

        if($validator -> fails()){
            return response()->json([
                'status' => 401,
                'message' => $validator -> error()
            ], 401);
        }

        $code = Code::where('user_id', $user_id) -> first();

        if(!$code){
            return response()->json([
                'status' => 404,
                'message' => 'No code found under this user id'
            ], 404);
        }

        return response()-> json([
            'status'=> 200,
            'message'=> $code->code
        ], 200);
    }
}
