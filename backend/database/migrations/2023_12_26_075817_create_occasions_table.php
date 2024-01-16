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
        Schema::create('occasions', function (Blueprint $table) {
            $table->id();
            $table->string('occasion_type');
            $table->enum('style',['formal','casual','stylish']);
            $table->boolean('hijab')->default(false);
            $table->enum('season',['autumn ','spring','summer ','winter']);
            $table->enum('budget_range',['low','medium','high']);
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');            
            $table->timestamps();
        });
    }

  
    public function down(): void
    {
        Schema::dropIfExists('occasions');
    }
};