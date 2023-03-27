<?php
namespace App\Http\Controllers;
use App\Models\Code;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class CodesController extends Controller
{
    public function storeCode(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'code'=>'required|string|max:4294967295',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ], 401);
        }
        try {
            $user = Auth::user();
            $code = Code::create([
                'user_id' => $user->id,
                'code' => $request->input('code')
            ]);
            return response()->json([
                'status' => 200,
                'message' => 'Your Code is saved successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'message' => 'Error adding code: ' . $e->getMessage()
            ], 500);
        } 
    }
    
    public function getCodeByAuth(){
        $user = Auth::user();
        if (!$user) {
            return response()->json([
                'status' => 401,
                'message' => 'Unauthorized'
            ], 401);
        }
        $codes = Code::where('user_id', $user->id)->get(); // fetch all codes for user
        if (!$codes->count()) { // check if there are no codes for the user
            return response()->json([
                'status' => 404,
                'message' => 'No code found for this user'
            ], 404);
        }
        return response()->json([
            'status' => 200,
            'message' => $codes
        ], 200);
    }
}
