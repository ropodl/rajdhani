<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Province extends Model
{
    use HasFactory;
    protected $fillable = ['name'];

    public function news(){
        return $this->belongsTo(News::class);
    }

    public function getSlugAttribute(){
        return $this->name;
    }
}
