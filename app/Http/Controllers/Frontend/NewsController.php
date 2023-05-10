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
        $news = News::isActive()->select('id', 'title')->where('province_id', $province->id)->paginate(10);
        $title = $province->name;
        // dd($news);
        return view('frontend.category_news', compact('title', 'news'));
    }

    public function categoryNews($slug)
    {
        $category = Category::whereSlug($slug)->with('news')->firstOrFail();
        $news  = $category->news()->paginate(10);
        $title = $category->name;
        return view('frontend.category_news', compact('title', 'news'));
    }

    public function newsDetail(News $news)
    {
        $latestNews = News::isActive()->latest()->take(5)->get();
        $trendingNews = News::isTrending()->latest()->take(5)->get();
        $relatedNews = News::latest()->limit(8)->where('category_id', $news->category_id)->where('id', '!=', $news->id)->get();
        // $news = News::isActive()->whereSlug($slug)->firstOrFail();
        $news->load(['relatedNews', 'media']);
        return view('frontend.news_detail', compact('news', 'latestNews', 'trendingNews', 'relatedNews'));
    }

    public function oldSlugUrlRedirectToNews($slug)
    {
        $news = News::isActive()->whereSlug($slug)->firstOrFail();
        return redirect()->route('frontend.news.detail', $news);
    }
}
