<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::group(['namespace' => 'App\Http\Controllers\Backend', 'middleware' => 'auth'],function(){
    Route::get('/', function () {
        return view('backend.dashboard');
    });

    Route::get('profile', function () {
        return view('auth.profile');
    })->name('profile');

    Route::get('/logout', function () {
        Session::flush();
        return redirect()->route('login');
    })->name('admin.logout');

    Route::get('dashboard', function () {
        return view('backend.dashboard');
    })->name('dashboard');

    Route::post('/maintenance','AuthController@maintenanceMode')->name('maintenance');

    Route::post('update-profile','AuthController@updateProfile')->name('auth.update-profile');

    Route::resource('site-setting', 'SiteSettingController');
    Route::resource('social_media_link', 'SocialMediaLinkController');
    Route::resource('video_iframe', 'VideoIframeController');

    Route::resource('category', 'CategoryController');

    Route::resource('news', 'NewsController');

    Route::resource('group', 'GroupController');

    Route::resource('page', 'PageController');

    Route::resource('province', 'ProvinceController');

    Route::resource('contactus', 'ContactController');

    Route::resource('tag', 'TagController');

    Route::resource('advertisement', 'AdvertisementController');

    // Route::get('advertisement-layout','AdvertisementController@layout')->name('advertisement.layout');
    Route::get('layout-page','AdvertisementController@layoutPage')->name('advertisement.layout_page');
    Route::get('main-news','MainNewsSettingController@setting')->name('setting.main_news');
    Route::delete('main-news/{id}/delete', 'MainNewsSettingController@destroy')->name('main_news.delete');
    Route::post('main_news/store', 'MainNewsSettingController@store')->name('main_news.store');



    Route::get('advertisement-layout/{layoutPage}/advertisements', 'AdvertisementSortController@sortAdv')->name('advertisement.sort');
    Route::post('advertisement-layout/{layoutPage}/advertisement/sort', 'AdvertisementSortController@sortAdvertisementStore')->name('advertisement.sort.store');
    Route::delete('advertisement-layout/{layoutPage}/advertisement/{id}/delete', 'GroupBookController@destroy')->name('advertisement_page_layout.destroy');



    Route::post('category/news','CategoryController@news')->name('category.news');


});

Auth::routes(['register' => false]);

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::post('change-password', 'App\Http\Controllers\Auth\ConfirmPasswordController@changePassword')->name('auth.change-password');


