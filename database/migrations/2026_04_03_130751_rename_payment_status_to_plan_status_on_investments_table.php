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
        Schema::table('investments', function (Blueprint $table) {
            $table->dropColumn('payment_status');
        });
        
        Schema::table('investments', function (Blueprint $table) {
            $table->enum('plan_status', ['running', 'completed'])->default('running')->after('pay_count');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('investments', function (Blueprint $table) {
            $table->dropColumn('plan_status');
        });
        
        Schema::table('investments', function (Blueprint $table) {
            $table->integer('payment_status')->nullable()->after('pay_count');
        });
    }
};
