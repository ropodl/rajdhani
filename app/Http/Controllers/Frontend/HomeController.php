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
                $mainNews = News::isMainNews()->get();
                $photoFeatures = News::isPhotoFeatures()->latest()->limit(4)->get();
                $latestNews = News::isActive()->isNotMainNews()->latest()->limit(5)->select('id', 'title', 'slug')->get();
                // return $latestNews;
                $trendingNews = News::isTrending()->isActive()->latest()->take(6)->select('id', 'title', 'slug')->get();
                $categoryWiseNews = Category::has('news', '>=', 4)->latest()->where('show_on_homepage', 1)->with(
                        ['news' => function ($query) {
                                $query->select('news.id', 'title', 'slug', 'news.created_at');
                        }]
                )->orderBy('sort', 'asc')->get();
                $provinceWiseNews = News::has('province')->latest()->isActive()->limit(6)->select('id', 'title', 'slug')->get();
                dd(json_encode($provinceWiseNews));
                $provinces = Province::get();
                $videos = VideoIframe::limit(8)->orderBy('sort', 'asc')->select('iframe')->get();
                // $newsCategoryNews = Category::has('news')->where('under_news', 1)->with(['news' => function($query){
                //     $query->latest();
                // }],'news.media')->get()->pluck('news')->collapse()->take(8);
                $newsCategoryNews = News::latest()->limit(8)->with('media')->whereHas('category', function ($query) {
                        $query->underNews();
                        $query->isActive();
                })->isActive()->select('id', 'title', 'slug')->get();
                dd($newsCategoryNews);
                return view('frontend.index', compact('latestNews', 'categoryWiseNews', 'trendingNews', 'mainNews', 'provinces', 'provinceWiseNews', 'newsCategoryNews', 'photoFeatures', 'videos'));
        }
}
