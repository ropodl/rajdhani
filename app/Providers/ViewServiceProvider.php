<?php

namespace App\Providers;

use App\Models\Category;
use App\Models\Group;
use App\Models\SiteSetting;
use App\Models\SocialMediaLink;
use App\Models\Tag;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class ViewServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
         View::composer('*', function ($view) {
             $siteSetting = SiteSetting::firstOrFail();
             $media = SocialMediaLink::firstOrFail();
             $tags = Tag::all();
             $view->with('siteSetting', $siteSetting);
             $view->with('media', $media);
             $view->with('tags', $tags);
         });
    }
}
