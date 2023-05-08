<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search(Request $request){
        $searchNews = News::latest();
        $search = $request->search;

        if($request->has('tag')){
            $searchNews->whereHas('tags', function($query) use($request){
                $query->where('name', $request->tag);
            });
        }
        if($request->has('search')){
            $searchNews->where('title','like', '%'.$search. '%');
        }
        $searchNews = $searchNews->paginate(10);
        return view('frontend.search', compact('searchNews', 'search'));
    }
}
