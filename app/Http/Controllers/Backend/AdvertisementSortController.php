<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\AdvertisementPageLayout;
use App\Models\LayoutPage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdvertisementSortController extends Controller
{
    public function sortAdv(LayoutPage $layoutPage){
        $layoutPage->load('advertisements.advertisementLayout');
        $ads = collect($layoutPage->advertisements)->groupBy('advertisementLayout.code');
        return view('backend.advertisement.sort_advertisement', compact('ads', 'layoutPage'));
    }

    public function sortAdvertisementStore(Request $request, LayoutPage $layoutPage){
        if($request->has('sort')){
            try{
                DB::beginTransaction();
                AdvertisementPageLayout::where('layout_page_id', $layoutPage->id)->delete();
                foreach($request->sort as $key => $AdId){
                    $sorts[] = new AdvertisementPageLayout([
                        'advertisement_id' => $AdId,
                        'layout_page_id' => $layoutPage->id,
                        'order' => $key + 1
                    ]);
                }
                $layoutPage->advertisementPageLayouts()->saveMany($sorts);
                DB::commit();
                return redirect()->back()->withMsg('Your Advertisements has been sorted successfully.');
            }catch(\Exception $e){
                DB::rollback();
                dd($e->getMessage());
            }
        }
    }
}
