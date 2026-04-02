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
        Schema::create('plans', function (Blueprint $table) {
            $table->id();
            $table->string('plan_name')->unique();
            $table->TinyInteger('amount_type')->nullable();
            $table->decimal('amount')->nullable();
            $table->decimal('return_interest')->nullable();
            $table->string('interest_status')->nullable();
            $table->TinyInteger('return_for')->nullable();
            $table->Integer('how_many_time')->nullable();
            $table->string('every_time')->nullable();
            $table->TinyInteger('capital_back')->nullable();
            $table->TinyInteger('status')->default(1);
            $table->Integer('invest_limit');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plans');
    }
};
