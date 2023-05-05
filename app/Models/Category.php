<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\InteractsWithMedia;

class Category extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;
    protected $fillable = ['name', 'slug', 'description', 'status', 'show_on_menu', 'sort', 'show_on_homepage', 'show_on_footer', 'under_news'];
    protected $casts = [
        'sort' => 'integer',
    ];

    public function scopeIsActive($query)
    {
        return $query->where('status', 1);
    }
    public function scopeDisplayOnMenu($query)
    {
        return $query->where('show_on_menu', 1);
    }
    public function scopeUnderNews($query)
    {
        return $query->where('under_news', 1);
    }
    public function news()
    {
        return $this->hasMany(News::class)->isActive()->latest();
    }

    public function group()
    {
        return $this->belongsTo(Group::class);
    }

    public function groupCategories()
    {
        return $this->hasMany(GroupCategory::class);
    }
}
