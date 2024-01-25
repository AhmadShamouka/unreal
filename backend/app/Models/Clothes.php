<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\softDeletes;

class Clothes extends Model
{
    use HasFactory;
    use softDeletes;
    protected $fillable = [
        'name',
        'price',
        'image',
        'user_id',
        'category_id',
        'brand_id'        ];
}