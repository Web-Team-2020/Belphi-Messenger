<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{

    public function postSignUp(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => ['required', 'unique:users', 'max:15'],
            'name' => ['required', 'max:20'],
            'password' => ['required', 'min:4'],
            'bio' => ['max:255'],
            'email' => ['email', 'required', 'unique:users'],
            'phone' => ['numeric', 'required', 'unique:users'],
        ]);
        if ($validator->fails()) {
            $result = ['result' => 'Failure',
                'errors' => $validator->errors(),
                'message' => 'Please check data or complete necessary fields'];

            $response = response()->json($result)->setStatusCode(400, 'Bad request.');
        } else {
            $user = new User();
            $user->id = $request['id'];
            $user->name = $request['name'];
            $user->password = bcrypt($request['password']);
            $user->bio = $request['bio'];
            $user->email = $request['email'];
            $user->phone = $request['phone'];

            $user->save();

            $result = ['result' => 'OK',
                'message' => 'The user ' . $request['name'] . ' has been created !'];

            $response = response()->json($result)->setStatusCode(200, 'Success');
        }


        return $response;

    }

    public function postSignIn(Request $request)
    {
        if (Auth::attempt(['email' => $request['email'], 'password' => $request['password']])) {
            $result = ['result' => 'Logged in',
                'message' => 'The user has been logged in !!'];

            $response = response()->json($result)->setStatusCode(200, 'Success');
        } else {
            $result = ['result' => 'Failure',
                'message' => 'The email/password combination is empty or not valid !'];

            $response = response()->json($result)->setStatusCode(401, 'Unauthorized');
        }
        return $response;
    }
}
