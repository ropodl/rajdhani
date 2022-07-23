<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\SiteSetting;
use App\Http\Requests\Backend\SiteSettingRequest;
use Illuminate\Http\Request;

class SiteSettingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $edit = SiteSetting::first();
        return view('backend.settings.site', compact('edit'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SiteSettingRequest $request){
        $edit = SiteSetting::first();
        if ($edit){
            $edit->update($request->all());

        }else{
            $edit =  SiteSetting::create($request->all());

        }
        if ($request->hasFile('logo')){
            if($edit->hasMedia())
                $edit->deleteMedia($edit->getMedia()[0]);

            $edit->addMedia($request->file('logo'))->toMediaCollection();
        }
        if ($request->hasFile('logo_with_text')){
            if($edit->hasMedia('logo_with_text')){
                $edit->deleteMedia($edit->getMedia('logo_with_text')[0]);
            }
            $edit->addMedia($request->file('logo_with_text'))->toMediaCollection('logo_with_text');
        }
        return redirect()->route('site-setting.index')->withMsg('Site Setting has been created successfully');

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
    public function edit($edit)
    {
        dd($edit);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
