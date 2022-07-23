<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Page;
use App\Models\Group;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function aboutus(){
        $aboutus = Page::where('name', 'about-us')->where('status', 1)->firstOrFail();
        return view('frontend.aboutus', compact('aboutus'));
    }

    public function privacy(){
        $privacy = Page::where('name', 'privacy-policy')->where('status', 1)->firstOrFail();
          return view('frontend.privacy', compact('privacy'));
    }
}
