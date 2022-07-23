<?php

namespace App\Models;

use App\Http\Requests\Backend\AdvertisementPageLayoutRequest;
use http\Env\Request;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;

class Advertisement extends Model implements HasMedia
{
    use HasFactory,  HasMediaTrait;
    protected $fillable = ['title', 'url','advertisement_layout_id'];

    protected $appends = ['image'];

    public function getImageAttribute($value){
        return $this->hasMedia() ? $this->getMedia()[0]->getFullUrl() : '';
    }

        public function advertisementLayout(){
        return $this->belongsTo(AdvertisementLayout::class);
    }

    public function advertisementPageLayouts()
    {
        return $this->hasMany(AdvertisementPageLayout::class);
    }

    public function layoutPages()
    {
        return $this->belongsToMany( LayoutPage::class,AdvertisementPageLayout::class,'advertisement_id','layout_page_id');
    }

    public function syncAdvertisementPageLayout()
    {
        $advertisementPageLayoutIds = [];
        if (request()->has('layout_pages')) {
            collect(request()->layout_pages)->each(function ($layout) use (&$advertisementPageLayoutIds) {
                $advertisementPageLayoutIds[] = new AdvertisementPageLayout(['layout_page_id' => $layout]);
            });
            $this->AdvertisementPageLayouts()->delete();
            $this->AdvertisementPageLayouts()->saveMany($advertisementPageLayoutIds);
        } else {
            $advertisementPageLayoutIds = [];
            $this->AdvertisementPageLayouts()->delete();
            $this->AdvertisementPageLayouts()->saveMany($advertisementPageLayoutIds);
        }

    }

    public function pluckAdvertisementLayoutPageIds()
    {
        $this->load('advertisementPageLayouts.advertisement');
        if ($this->has('advertisementPageLayouts')) {
            return $this->advertisementPageLayouts->pluck('layout_page_id');
        }
        return null;
    }

}
