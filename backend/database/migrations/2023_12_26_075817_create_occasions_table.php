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
            $table->string('style');
            $table->string('season');
            $table->string('budget_range');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');            
            $table->timestamps();
            $table->softDeletes();
      
        });
    }

  
    public function down(): void
    {
        Schema::dropIfExists('occasions');
    }
};