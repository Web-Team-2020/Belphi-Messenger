<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function postSignUp(Request $request)
    {
        $validatedData = $request->validate([
            'id' => ['required', 'unique:users', 'max:15'],
            'name' => ['required', 'max:20'],
            'password' => ['required', 'min:4'],
            'bio' => ['max:255'],
            'email' => ['email', 'required', 'unique:users'],
            'phone' => ['numeric', 'required', 'unique:users'],
        ]);

        $user = new User();
        $user->$request['id'];
        $user->$request['name'];
        $user->bcrypt($request['password']);
        $user->$request['bio'];
        $user->$request['email'];
        $user->$request['phone'];

        $user->save();

        $result = ['result' => 'OK',
            'message' => 'The user '.$request['name'].' has been created !'];

        $response = \Response::json($result)->setStatusCode(200, 'Success');

        return $response;

    }

    public function postSignIn(Request $request)
    {

    }
}
