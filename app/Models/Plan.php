<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    protected $guarded = [];

    public function getName()
    {
        return $this->plan_name;
    }

    public function getImage()
    {
        return asset('images/plans/' . $this->image);
    }

    public function getPrice()
    {
        return $this->amount;
    }

    public function getDailyIncome()
    {
        return $this->amount * $this->return_interest / 100;
    }

    public function getTotalIncome()
    {
        return $this->daily_income * $this->how_many_time;
    }

    public function getDuration()
    {
        return $this->how_many_time;
    }

    public function time()
    {
        return $this->belongsTo(Time::class, 'time_id');
    }
}
