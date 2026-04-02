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
        Schema::create('investments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->integer('plan_id')->nullable();
            $table->string('transaction_id')->nullable();
            $table->decimal('amount',28,8);
            $table->decimal('charge',28,8)->default(0);
            $table->decimal('final_amount',28,8);
            $table->timestamp('next_payment_date')->nullable();
            $table->decimal('interest_amount', 28,8)->nullable();
            $table->integer('pay_count')->nullable();
            $table->integer('payment_status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('investments');
    }
};
