<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdvertisementLayout extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'code'];

    public function advertisements(){
        return $this->hasMany(Advertisement::class);
    }
//    public function advertisementPageLayouts(){
//        return $this->hasMany(AdvertisementPageLayout::class);
//    }
}
