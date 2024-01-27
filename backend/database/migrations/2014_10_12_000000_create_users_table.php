<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->tinyInteger('admin')->default(0);
            $table->string('username');
            $table->string('email')->unique();
            $table->string('password')->nullable();
            $table->string('country')->nullable();
            $table->string('sex')->nullable();
            $table->integer('age')->nullable();
            $table->softDeletes();
      
            $table->timestamps();
         
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};