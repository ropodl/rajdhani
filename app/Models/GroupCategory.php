<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GroupCategory extends Model
{
    use HasFactory;
    protected $table = 'group_categories';
    protected $fillable = ['group_id', 'category_id'];

    public function group(){
        return $this->belongsTo(Group::class);
    }
    public function category(){
        return $this->belongsTo(Category::class);
    }

}
