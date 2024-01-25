<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\softDeletes;
class Trail extends Model
{   
    use softDeletes;
    protected $fillable = ['choosen', 'user_id', 'clothes_id'];


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function clothes(): BelongsTo
    {
        return $this->belongsTo(Clothes::class);
    }
}