<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\News;
use Database\Seeders\NewsSeeder;
use Illuminate\Http\Request;

class MainNewsSettingController extends Controller
{
    public function setting(){
        $news = News::isActive()->where('is_main_news', 0)->latest()->orderBy('id', 'desc')->get();
        $mainNews = News::isMainNews()->get();
       return view('backend.settings.main_news_setting', compact('mainNews', 'news'));
    }

    public function destroy($id){
        $mainNews = News::find($id);
        $mainNews->update(['is_main_news' => 0]);
        return redirect()->back()->withMsg('News has been removed from Main News.');
    }

    public function store(Request $request){
        $mNews =  News::whereId($request->news_id)->first();
        $mNews->update(['is_main_news' => 1]);
        return redirect()->route('setting.main_news')->withMsg('News has been Added successfully.');
    }
}
