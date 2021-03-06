<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateUsersTable2 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('infoid')->unique()->nullable();
            $table->string('name');
            $table->string('password');
            $table->text('bio')->nullable();
            $table->string('email')->unique();
            $table->string('phone')->unique();
            $table->boolean('verified')->default(false);
            $table->smallInteger('reports')->default(0);
            $table->timestamps();
            $table->rememberToken();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');

    }
}
