<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactUs extends Model
{
    protected $table = 'contactus';
    protected $fillable = ['name','email','subject','description'];
    use HasFactory;
}
