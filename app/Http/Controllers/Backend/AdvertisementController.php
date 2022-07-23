<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\AdvertisementRequest;
use App\Models\Advertisement;
use App\Models\AdvertisementLayout;
use App\Models\AdvertisementPageLayout;
use App\Models\LayoutPage;
use Illuminate\Http\Request;

class AdvertisementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $advertisements = Advertisement::all();
        return view('backend.advertisement.index', compact('advertisements'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $adLayouts = AdvertisementLayout::all();
        $layoutPages = LayoutPage::all();
        return view('backend.advertisement.create', compact('adLayouts', 'layoutPages'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AdvertisementRequest $request)
    {
        $advertisement = Advertisement::create($request->all());
        $advertisement->syncAdvertisementPageLayout();
        if ($request->file('advertisement_image')){
            $advertisement->addMedia($request->file('advertisement_image'))->toMediaCollection();
        }
        return redirect()->route('advertisement.layout')->withMsg('Your Advertisement has been successfully created.');
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
    public function edit(Advertisement $advertisement)
    {
        $adLayouts = AdvertisementLayout::all();
        $layoutPages = LayoutPage::all();
        return view('backend.advertisement.create', compact('adLayouts', 'advertisement', 'layoutPages'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Advertisement $advertisement)
    {
        if ($request->hasFile('advertisement_image')){
            $advertisement->deleteMedia($advertisement->getMedia()[0]);
            $advertisement->addMedia($request->file('advertisement_image'))->toMediaCollection();
        }
        $advertisement->update($request->all());
        $advertisement->syncAdvertisementPageLayout();
        return redirect()->route('advertisement.index')->withMsg('Your Advertisement has been successfully updated.');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Advertisement $advertisement)
    {
        if ($advertisement->hasMedia()){
            $advertisement->deleteMedia($advertisement->getMedia()[0]);
        }
        $advertisement->delete();
        $advertisement->advertisementPageLayouts()->delete();

        return redirect()->route('advertisement.index')->withMsg('Your Advertisement has been deleted updated.');
    }

    public function layout(){
        $layouts = AdvertisementLayout::all();
        return view('backend.advertisement.layout', compact('layouts'));
    }

    public function layoutPage(){
        $layoutPages = LayoutPage::all();
        return view('backend.advertisement.layout_page', compact('layoutPages'));
    }

//    public function sortAdv(LayoutPage $layoutPage){
//        $advertisementPageLayouts = AdvertisementPageLayout::where('advertisement_page_layout_id', $layoutPage->id)->with('advertisement')->orderBy('order', 'asc')->get();
//        return view('backend.advertisement.sort_advertisement', compact('advertisementPageLayouts', 'layoutPage'));
//    }
//
//    public function sortStore(){
//        dd("ok");
//        $advertisementPageLayout = AdvertisementPageLayout::where('advertisement_page_layout_id', $layoutPage->id)->first();
//        dd($advertisementPageLayout);
//        if($request->has('sort')){
//            foreach($request->sort as $key => $bookId){
//                $groupBook->where('book_id', $bookId)->update(['sort' => $key + 1]);
//            }
//        }
//        $request->session()->flash('success_message', 'Units sorted Successfully.');
//        return redirect()->back();
//    }
}
