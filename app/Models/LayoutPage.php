<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LayoutPage extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'code'];

    public function advertisementPageLayouts(){
        return $this->hasMany(AdvertisementPageLayout::class,'layout_page_id', 'id');
    }

    public function advertisements(){
        return $this->belongsToMany(Advertisement::class, 'advertisement_page_layouts');
    }
}
