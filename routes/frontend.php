<?php

use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use App\Models\News;

Route::get('/migrate', function(){
    $data = News::get();
    collect($data)->each(function($news){
        $news->categories()->sync([$news->category_id]);
    });
});
Route::get('/', 'HomeController@index')->name('frontend.index');

Route::get('/contactus', 'ContactController@index')->name('frontend.contactus');

//Pages
Route::get('/aboutus', 'PageController@aboutus')->name('frontend.aboutus');
Route::get('/terms-conditions', 'PageController@privacy')->name('frontend.privacy');

Route::get('/province/{slug}', 'NewsController@provinceNews')->name('frontend.province_news');

Route::get('/category/{slug}', 'NewsController@categoryNews')->name('frontend.category_news');

Route::get('/search', 'SearchController@search')->name('frontend.search');

Route::get('news/{news}', 'NewsController@newsDetail')->name('frontend.news.detail');
Route::get('/{slug}', 'NewsController@oldSlugUrlRedirectToNews')->name('frontend.news.detail.slug');

//ContactUs
Route::post('contactus/store', 'ContactController@store')->name('frontend.contactus.store');

Route::get('/media/{encrypt}', function($encrypt){
    $url = Crypt::decrypt($encrypt);
    $path = Storage::disk('media')->path($url);

    $file = File::get($path);

    $type = File::mimeType($path);
    $response = Response::make($file, 200);

    $response->header("Content-Type", $type);
    return $response;
});
