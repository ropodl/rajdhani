<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Group;
use App\Models\News;
use App\Models\Province;
use Illuminate\Http\Request;
use Str;
class NewsController extends Controller
{
    public function provinceNews($slug)
    {
        // $slug = str_replace( '-',' ', $slug);
        $province = Province::where('name', $slug)->firstOrfail();
        $news = News::isActive()->where('province_id', $province->id)->paginate(11);
        $title = $province->name;
        return view('frontend.category_news', compact('title', 'news'));
    }

    public function categoryNews($slug)
    {
        $category = Category::whereSlug($slug)->with('news')->firstOrFail();
        $news  = $category->news()->paginate(11);
        $title = $category->name;
        return view('frontend.category_news', compact('title', 'news'));
    }

    public function newsDetail(News $news){
        $latestNews = News::isActive()->take(6)->get();
        $trendingNews = News::isTrending()->take(6)->get();
        $categories = $news->categories->plucK('id');
        $relatedNews = News::latest()->limit(8)->whereHas('categories', function($query) use($categories){
            $query->whereIn('category_id', $categories);
        })->get();
        // $news = News::isActive()->whereSlug($slug)->firstOrFail();
        $news->load(['relatedNews','media']);
        return view('frontend.news_detail', compact('news', 'latestNews', 'trendingNews','relatedNews'));
    }

    public function oldSlugUrlRedirectToNews($slug){
        $news = News::isActive()->whereSlug($slug)->firstOrFail();
        return redirect()->route('frontend.news.detail', $news);
    }

}
