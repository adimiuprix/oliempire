<?php

namespace Database\Seeders;

use App\Models\Plan;
use Illuminate\Database\Seeder;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Plan::create([
            'plan_name' => 'Bronze',
            'image' => 'bronze.png',
            'amount' => 100,
            'return_interest' => 1,
            'interest_status' => '1',
            'return_for' => 1,
            'how_many_time' => 30,
            'time_id' => 2, // Day
            'capital_back' => 1,
            'status' => 1,
            'invest_limit' => 10,
        ]);

        Plan::create([
            'plan_name' => 'Silver',
            'image' => 'silver.png',
            'amount' => 500,
            'return_interest' => 2,
            'interest_status' => '1',
            'return_for' => 1,
            'how_many_time' => 30,
            'time_id' => 2, // Day
            'capital_back' => 1,
            'status' => 1,
            'invest_limit' => 5,
        ]);
        
        Plan::create([
            'plan_name' => 'Gold',
            'image' => 'gold.png',
            'amount' => 1000,
            'return_interest' => 3,
            'interest_status' => '1',
            'return_for' => 1,
            'how_many_time' => 30,
            'time_id' => 2, // Day
            'capital_back' => 1,
            'status' => 1,
            'invest_limit' => 3,
        ]);

    }
}
