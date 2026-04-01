<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Wallet extends Model
{
    protected $fillable = [
        'user_id',
        'private_key',
        'public_key',
        'eth_address',
        'tron_address',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
