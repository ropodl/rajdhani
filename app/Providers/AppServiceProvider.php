<?php

namespace App\Providers;

use App\Models\Advertisement;
use App\Models\AdvertisementPageLayout;
use App\Models\Category;
use App\Models\Province;
use App\Models\SocialMediaLink;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
        Paginator::defaultView('frontend.components.pagination');

        view()->composer(['frontend/layouts/header'], function ($view) {
            $headerAds = AdvertisementPageLayout::orderBy('order', 'asc')->with(['advertisement', 'advertisement.advertisementLayout'])->whereHas('layoutPages', function ($query) {
                $query->where('code', 'header_section');
            })->whereHas('advertisement.advertisementLayout', function ($query) {
                $query->where('code', 'l_ad');
            })->first();
            $provinces = Province::select('name')->get();
            $headerCats = Category::isActive()
                ->displayOnMenu()
                ->limit(11)
                ->orderBy('sort', 'asc')
                ->get();
            $underCats = Category::isActive()->underNews()->orderBy('sort', 'asc')->limit(10)->get();

            $view->with(['headerAds' => $headerAds, 'provinces' => $provinces, 'headerCats' => $headerCats,  'underCats' => $underCats]);
        });

        view()->composer(['frontend/index'], function ($view) {
            $advertisements = AdvertisementPageLayout::whereHas('layoutPages', function ($query) {
                $query->where('code', 'home_page');
            })
                ->orderBy('order', 'asc')
                ->select('advertisement_id', 'layout_page_id', 'order')
                ->get()
                ->groupBy('advertisement.advertisementLayout.code');

            $popUpAdv = Advertisement::latest()
                ->whereHas('layoutPages', function ($query) {
                    $query->where('code', 'popup_section');
                })
                ->first();

            $view->with([
                'advertisements' => $advertisements,
                'popUpAdv' => $popUpAdv,
            ]);
        });

        view()->composer(['frontend/news_detail'], function ($view) {
            $detailAdvs = AdvertisementPageLayout::orderBy('order', 'asc')->with(['advertisement', 'advertisement.advertisementLayout'])->whereHas('layoutPages', function ($query) {
                $query->where('code', 'detail_page');
            })->get()->groupBy('advertisement.advertisementLayout.code');
            $view->with(['detailAdvs' => $detailAdvs]);
        });

        view()->composer(['frontend/layouts/footer'], function ($view) {
            // $footerCategories = Category::has('news')->isActive()->where('show_on_footer', 1)->get();
            $socials = SocialMediaLink::get();
            $view->with([
                'socials' => $socials
            ]);
            // , 'footerCategories' => $footerCategories]
        });
    }
}
