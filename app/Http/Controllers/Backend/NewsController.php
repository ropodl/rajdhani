<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\NewsRequest;
use App\Models\Category;
use App\Models\News;
use App\Models\Province;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $news = News::with('category')->latest()->get();
        return view('backend.news.index', compact('news'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $tags = Tag::all();
        $categories = Category::isActive()->get();
        $provinces = Province::all();
        $newses = News::isActive()->get();
        return view('backend.news.create', compact('tags', 'categories', 'newses', 'provinces'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(NewsRequest $request)
    {
        $news = News::create($request->all());
        $news->tags()->sync($request->tags);
        $news->syncRelatedNews();

        if ($request->hasFile('news_image')) {
            $news->addMedia($request->file('news_image'))->withResponsiveImages()->toMediaCollection();
        }
        return redirect()->route('news.index')->withMsg('Your News has been successfully created.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(News $news)
    {
        $tags = Tag::all();
        $newses = News::isActive()->whereNotIn('id', [$news->id])->where('category_id', $news->category_id)->get();
        $provinces = Province::all();
        $categories = Category::isActive()->get();
        return view('backend.news.create', compact('tags', 'news', 'categories', 'newses', 'provinces'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, News $news)
    {
        if ($request->hasFile('news_image')) {
            $news->deleteMedia($news->getMedia()[0]);
            $news->addMedia($request->file('news_image'))->toMediaCollection();
        }
        $news->update($request->all());
        $news->syncRelatedNews();

        $news->tags()->sync($request->tags);

        return redirect()->route('news.index')->withMsg('Your News has been successfully updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(News $news)
    {
        if ($news->hasMedia()) {
            $news->deleteMedia($news->getMedia()[0]);
        }
        $news->delete();
        $news->relatedNews()->delete();
        return redirect()->route('news.index')->withMsg('Your News has been successfully deleted.');
    }
}
