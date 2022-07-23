<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\CategoryRequest;
use App\Models\Category;
use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::latest()->get();
        return view('backend.category.index', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.category.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoryRequest $request)
    {
        //$request['slug'] = Str::slug($request->name . '-');
        $category = Category::create($request->all());
//        if ($request->file('category_image')){
//            $category->addMedia($request->file('category_image'))->toMediaCollection();
//        }
        return redirect()->route('category.index')->withMsg('Your Category has been successfully created.');
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
    public function edit(Category $category)
    {
        return view('backend.category.create', compact('category'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CategoryRequest $request, Category $category)
    {
        //$request['slug'] = Str::slug($request->name . '-');
//        if ($request->hasFile('category_image')){
//            $category->deleteMedia($category->getMedia()[0]);
//            $category->addMedia($request->file('category_image'))->toMediaCollection();
//        }
        $category->update($request->all());
        return redirect()->route('category.index')->withMsg('Your Category has been successfully updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $category->delete();
//        if ($category->hasMedia()){
//            $category->deleteMedia($category->getMedia()[0]);
//        }
        return redirect()->route('category.index')->withMsg('Your Category has been successfully deleted.');
    }

    public function news(Request $request){
        $categoryNews = News::where('category_id', $request['cid'])->get();
        $ht = "<option value=''> Select Related News</option>";
        foreach ($categoryNews as $news) {
            $ht .= "<option value='$news->id'>$news->title</option>";
        }
        return $ht;
//        return $categoryNews;
    }
}
