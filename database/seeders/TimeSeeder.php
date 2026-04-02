<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TimeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('times')->insert([
            'name' => 'Hour',
            'time' => '1',
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('times')->insert([
            'name' => 'Day',
            'time' => '24',
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('times')->insert([
            'name' => 'week',
            'time' => '168',
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('times')->insert([
            'name' => 'Month',
            'time' => '720',
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('times')->insert([
            'name' => '3 Month',
            'time' => '2166',
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('times')->insert([
            'name' => '6 Month',
            'time' => '4320',
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('times')->insert([
            'name' => 'year',
            'time' => '8760',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
