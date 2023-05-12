<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\News;
use App\Models\Province;
use App\Models\VideoIframe;

class HomeController extends Controller
{
        public function index()
        {
                $mainNews = News::isActive()->isMainNews()->get();
                $photoFeatures = News::isActive()->isPhotoFeatures()->latest()->limit(4)->select('id', 'title')->get();
                $latestNews = News::isActive()->isNotMainNews()->latest()->limit(5)->select('id', 'title')->get();
                $trendingNews = News::isActive()->isTrending()->latest()->take(6)->select('id', 'title', 'slug')->get();
                $categoryWiseNews = Category::where('show_on_homepage', 1)->has('news', '>=', 4)->with('news', function ($query) {
                        $query->select('news.id', 'title', 'slug', 'news.created_at');
                })->orderBy('sort', 'asc')->get();
                $provinceWiseNews = News::has('province')->isActive()->limit(6)->select('id', 'title')->with('province')->get();
                $provinces = Province::select('name')->get();
                $videos = VideoIframe::limit(8)->orderBy('sort', 'asc')->select('iframe')->get();
                return view('frontend.index', compact('latestNews', 'categoryWiseNews', 'trendingNews', 'mainNews', 'provinces', 'provinceWiseNews', 'photoFeatures', 'videos'));
        }
}
// $newsCategoryNews = Category::has('news')->where('under_news', 1)->with(['news' => function($query){
//     $query->latest();
// }],'news.media')->get()->pluck('news')->collapse()->take(8);
// $newsCategoryNews = News::latest()->limit(8)->with('media')->whereHas('category', function ($query) {
//         $query->underNews();
//         $query->isActive();
// })->isActive()->select('id', 'title', 'slug')->get();
// 'newsCategoryNews',