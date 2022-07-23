<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\Models\Media;

class News extends Model implements HasMedia
{
    use HasFactory, HasMediaTrait;

    protected $fillable = [
        'category_id',
        'title', 'slug',
        'province_id',
        'description',
        'status',
        'is_trending',
        'is_main_news'
    ];
    protected $appends = ['image'];

    public function registerMediaConversions(Media $media = null)
    {
        $this->addMediaConversion('thumb')
              ->width(368)
              ->height(232)
              ->sharpen(10);
    }

    public function getImageAttribute($value)
    {
        // dd($this->getMedia()[0]->getAvailableUrl(['small', 'medium', 'large']));
        return $this->hasMedia() ? $this->getMedia()[0]->getFullUrl() : '';

        // Storage::buildTemporaryUrlsUsing()
    }

    public function getSmallImageAttribute($value)
    {
        // dd($this->getMedia()[0]->getAvailableUrl(['small', 'medium', 'large']));
        return $this->hasMedia('thumb') ? $this->getMedia('thumb')[0]->getFullUrl() : $this->image;

        // Storage::buildTemporaryUrlsUsing()
    }

    public function getFormatedPostDateAttribute(){
        return $this->created_at->diffForHumans();
    }

    public function scopeIsTrending($query){
        return $query->where('is_trending', 1)->orderBy('id', 'desc');
    }
    public function scopeIsMainNews($query){
        return $query->where('is_main_news', 1)->where('status', 1)->orderBy('id', 'desc')->take(3);
    }
    public function scopeIsNotMainNews($query){
        return $query->where('is_main_news', 0);
    }

    public function scopeIsActive($query)
    {
        return $query->where('status', 1)->orderBy('id', 'desc');
    }

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function relatedNews()
    {
        return $this->hasMany(RelatedNews::class);
    }

    public function province()
    {
        return $this->belongsTo(Province::class);
    }

    public function syncRelatedNews()
    {
        $relatedIds = [];
        if (request()->has('related_news')) {
            collect(request()->related_news)->each(function ($related) use (&$relatedIds) {
                $relatedIds[] = new RelatedNews(['related_news_id' => $related]);
            });
            $this->RelatedNews()->delete();
            $this->RelatedNews()->saveMany($relatedIds);
        } else {
            $relatedIds = [];
            $this->RelatedNews()->delete();
            $this->RelatedNews()->saveMany($relatedIds);
        }

    }

    public function pluckRelatedNewsIds()
    {
        $this->load('relatedNews.news');
        if ($this->has('relatedNews')) {
            return $this->relatedNews->pluck('related_news_id');
        }
        return null;
    }

    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }
}
