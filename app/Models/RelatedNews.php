<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RelatedNews extends Model
{
    use HasFactory;
    protected $table = 'related_news';
    protected $fillable = ['related_news_id'];

    function news()
    {
        return $this->belongsTo(News::class, 'related_news_id', 'id');
    }
}
