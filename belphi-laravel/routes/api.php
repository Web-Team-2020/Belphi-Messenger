<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/signup', [UserController::class, 'postSignUp']);

Route::post('/signin', [UserController::class, 'postSignIn']);

Route::post('/info/{id}', [UserController::class, 'postGetInfo']);

Route::post('/update/user/name', [UserController::class, 'postUpdateName']);

Route::post('/update/user/email', [UserController::class, 'postUpdateEmail']);

Route::post('/update/user/phone', [UserController::class, 'postUpdatePhone']);

Route::post('/update/user/bio', [UserController::class, 'postUpdateBio']);

Route::post('/update/user/id', [UserController::class, 'postUpdateID']);
