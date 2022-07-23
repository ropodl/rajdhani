<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;

class SiteSetting extends Model implements HasMedia
{
    use HasFactory, HasMediaTrait;
    protected $table = "site_settings";
    protected $fillable = [
        'name',
        'executive_manager',
         'editor',
         'executive_manager',
         'editor',
         'executive_editor',
         'registration_no',
         'address',
         'phone1',
         'phone2',
         'email',
         'map_iframe',
         'description',
         'advertisement1',
         'advertisement2',
         'advertisement3',
         'maintenance_mode',
    ];

    public function getLogoAttribute(){
        return $this->hasMedia() ? $this->getMedia()[0]->getFullUrl() : '';
    }
    public function getLogoWithTextAttribute(){
        return $this->hasMedia('logo_with_text') ? $this->getMedia('logo_with_text')[0]->getFullUrl() : '';
    }
}
