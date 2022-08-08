<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VideoIframe extends Model
{
    use HasFactory;

    protected $fillable = ["iframe","sort","status"];
}
