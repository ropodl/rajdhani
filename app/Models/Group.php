<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    use HasFactory;
    protected $fillable = ['title','slug','position', 'status', 'show_on_menu', 'show_on_footer', 'is_featured', 'show_on_homepage', 'is_trending'];

    public function isActive() {
        return Group::where('status', 1);
    }

    public function categories(){
        return $this->belongsToMany(Category::class,GroupCategory::class,'group_id','category_id');
    }

    public function news(){
        return $this->hasManyThrough(News::class, GroupCategory::class,'id','id');
    }

    public function groupCategories(){
        return $this->hasMany(GroupCategory::class);
    }

    public function scopeForHomePage($query){
        return $query->where('show_on_homepage', 1);
    }

}
