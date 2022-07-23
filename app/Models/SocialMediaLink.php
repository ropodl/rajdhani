<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SocialMediaLink extends Model
{
    use HasFactory;
    protected $fillable = [ 'facebook_link', 'instagram_link', 'youtube_link', 'twitter_link', 'linkedin_link'];
}
