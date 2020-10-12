<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function postSignUp(Request $request){
        $user = new User();
        $user->$request['id'];
        $user->$request['name'];
        $user->$request['bio'];
        $user->$request['email'];
        $user->$request['phone'];

        $user->save();

        return redirect()->back();
    }

    public function postSignIn(Request $request){

    }
}
