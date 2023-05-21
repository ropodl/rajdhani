<?php

namespace App\Providers;

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
            $media = SocialMediaLink::firstOrFail()->select(
                "facebook_link",
                "instagram_link",
                "youtube_link",
                "twitter_link",
                "linkedin_link"
            );
            $tags = Tag::select('name')->get();
            $view->with('siteSetting', $siteSetting);
            $view->with('media', $media);
            $view->with('tags', $tags);
        });
    }
}
