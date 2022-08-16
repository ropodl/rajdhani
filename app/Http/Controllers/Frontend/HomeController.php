<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Group;
use App\Models\News;
use App\Models\Province;
use App\Models\VideoIframe;

class HomeController extends Controller
{
    public function index(){
        $mainNews = News::isMainNews()->get();
        $photoFeatures = News::isPhotoFeatures()->get();
        $latestNews = News::isActive()->isNotMainNews()->latest()->limit(5)->get();
        // return $latestNews;
        $trendingNews = News::isTrending()->isActive()->latest()->take(6)->get();
        $categoryWiseNews = Category::has('news','>=', 4)->where('show_on_homepage', 1)->with('news')->orderBy('sort','asc')->get();
        $provinceWiseNews = News::has('province')->isActive()->limit(8)->get();
        $provinces = Province::get();
        $videos = VideoIframe::limit(8)->orderBy('sort','asc')->get();
        // $newsCategoryNews = Category::has('news')->where('under_news', 1)->with(['news' => function($query){
        //     $query->latest();
        // }],'news.media')->get()->pluck('news')->collapse()->take(8);
        $newsCategoryNews = News::latest()->limit(8)->with('media')->whereHas('category', function($query){
            $query->underNews();
            $query->isActive();
        })->isActive()->get();
        return view('frontend.index', compact('latestNews','categoryWiseNews', 'trendingNews', 'mainNews','provinces','provinceWiseNews','newsCategoryNews','photoFeatures','videos'));
    }
}
