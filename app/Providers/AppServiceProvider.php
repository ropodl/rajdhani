<?php

namespace App\Providers;

use App\Models\Advertisement;
use App\Models\AdvertisementPageLayout;
use App\Models\Category;
use App\Models\Province;
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

        view()->composer(['frontend/layouts/header'], function($view){
            $headerAds = AdvertisementPageLayout::orderBy('order', 'asc')->with(['advertisement', 'advertisement.advertisementLayout'])->whereHas('layoutPages', function($query){
                    $query->where('code','header_section');
            })->get()->groupBy('advertisement.advertisementLayout.code');
            $provinces = Province::get();
            $headerCats = Category::isActive()->displayOnMenu()->limit(11)->orderBy('sort','asc')->get()->sortBy('sort');
            $underCats = Category::isActive()->underNews()->orderBy('sort','asc')->limit(10)->get();

            $view->with(['headerAds' => $headerAds,'provinces' => $provinces, 'headerCats' => $headerCats,  'underCats' => $underCats]);
        });

        view()->composer(['frontend/index'], function($view){
            $advertisements = AdvertisementPageLayout::orderBy('order', 'asc')->with(['advertisement', 'advertisement.advertisementLayout'])->whereHas('layoutPages', function($query){
                $query->where('code','home_page');
            })->get()->groupBy('advertisement.advertisementLayout.code');
            $popUpAdv = Advertisement::latest()->whereHas('layoutPages', function($query){
                $query->where('code','popup_section');
            })->first();

        //    dd($popUpAdv);
            $view->with(['advertisements' => $advertisements, 'popUpAdv' => $popUpAdv]);
        });

        view()->composer(['frontend/news_detail'], function($view){
            $detailAdvs = AdvertisementPageLayout::orderBy('order', 'asc')->with(['advertisement', 'advertisement.advertisementLayout'])->whereHas('layoutPages', function($query){
                $query->where('code','detail_page');
            })->get()->groupBy('advertisement.advertisementLayout.code');
//            dd($detailAdvs);
            $view->with(['detailAdvs' => $detailAdvs]);
        });

        view()->composer(['frontend/layouts/footer'], function($view){
            $footerCategories = Category::has('news')->isActive()->where('show_on_footer', 1)->get();
            $view->with(['footerCategories' => $footerCategories]);
        });
    }
}
