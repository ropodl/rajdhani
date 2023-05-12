<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdvertisementPageLayout extends Model
{
    use HasFactory;
    protected $table = 'advertisement_page_layouts';
    protected $fillable = ['advertisement_id', 'layout_page_id', 'order'];

    public function advertisement()
    {
        return $this->belongsTo(Advertisement::class, 'advertisement_id', 'id');
    }

    //    public function advertisementLayout(){
    //        return $this->belongsTo(AdvertisementLayout::class);
    //    }

    public function layoutPages()
    {
        return $this->hasMany(LayoutPage::class, 'id', 'layout_page_id');
    }
}
