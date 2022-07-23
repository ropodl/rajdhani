<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactRequest;
use Illuminate\Http\Request;
use App\Models\ContactUs;
use App\Models\Group;

class ContactController extends Controller
{
    public function index(){
        return view('frontend.contactus');
    }

    public function store(ContactRequest $request){
       ContactUs::create($request->all());
       return redirect()->back()->with('success','Your contact has been saved successfully');
    }

    
}

