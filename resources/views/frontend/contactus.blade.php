@extends('frontend.layouts.app')
@section('content')
    <section class="contact-section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="map-part">
                        <iframe src="{{$siteSetting->map_iframe}}" width="100%" height="450" style="border:0;"
                                allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="contact-news">
                        <div class="address mb-3">
                            <h3>ठेगाना</h3>
                            <h4>{{$siteSetting->address}}</h4>
                        </div>
                        <div class="address mb-3">
                            <h3>सम्पर्क</h3>
                            {{--                  <h4>News Section: +977-98********</h4>--}}
                            <h4>Account Section: {{$siteSetting->phone1}}</h4>
                            <h4>Sales & Marketing: {{$siteSetting->phone2}}</h4>
                            {{--                  <h4>Telephone Section: +977-98********</h4>--}}
                        </div>
                        <div class="address">
                            <h3>इमेल</h3>
                            <h4>{{$siteSetting->email}}</h4>
                            {{--                  <h4>info@bishwashnews.com</h4>--}}
                            {{--                  <h4>news@bishwashnews.com</h4>--}}
                            {{--                  <h4>account@bishwashnews.com</h4>--}}
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="contact-form">
                        @if (Session::has('success'))
                            <div class="alert alert-success text-center alert-dismissible fade-show">
                                <button type="button" class="close" data-dismiss="alert">&times;</button>
                                {{Session('success')}}
                            </div>
                        @endif
                        <form action="{{route('frontend.contactus.store')}}" method="POST">
                            @csrf
                            @method('POST')
                            <div class="form-group">
                                <label for="fname">Full Name</label>
                                <input type="text" class="form-control" id="name" name="name"
                                       placeholder="Enter Full Name">
                                @error('name')
                                <div class="text-danger">
                                    **{{$message}}
                                </div>
                                @enderror
                            </div>
                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input type="email" class="form-control" id="email" name="email"
                                       placeholder="Enter email">
                                @error('email')
                                <div class="text-danger">
                                    **{{$message}}
                                </div>
                                @enderror
                            </div>
                            <div class="form-group">
                                <label for="subject">Subject</label>
                                <input type="text" class="form-control" id="subject" name="subject"
                                       placeholder="Enter Subject">
                                @error('subject')
                                <div class="text-danger">
                                    **{{$message}}
                                </div>
                                @enderror
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea class="form-control" id="description" name="description" rows="3"></textarea>
                                @error('description')
                                <div class="text-danger">
                                    **{{$message}}
                                </div>
                                @enderror
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
