<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    protected $guarded = [];

    protected $hidden = [
        'plan_name', 'amount', 'return_interest', 'interest_status', 
        'return_for', 'how_many_time', 'every_time', 'capital_back', 
        'status', 'created_at', 'updated_at'
    ];

    protected $appends = ['name', 'price', 'daily_income', 'total_income', 'duration'];

    public function getNameAttribute()
    {
        return $this->plan_name;
    }

    public function getPriceAttribute()
    {
        return $this->amount;
    }

    public function getDailyIncomeAttribute()
    {
        return $this->amount * $this->return_interest / 100;
    }

    public function getTotalIncomeAttribute()
    {
        return $this->daily_income * $this->how_many_time;
    }

    public function getDurationAttribute()
    {
        return $this->how_many_time;
    }
}
