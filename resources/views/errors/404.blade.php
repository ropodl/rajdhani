{{-- @extends('errors::minimal') --}}
@extends('frontend.layouts.app')
@section('content')
{{-- <style>
    .no-news-section{
        height: calc(100vh - 100%);
        min-height: calc(100vh - 545px);
        display: flex;
    }
</style> --}}
<section class="no-news-section">
    <div class="container align-self-center">
        <div class="row">
            <div class="no-news ">
                <img src="{{asset('frontend/img/news.png')}}" alt="">
                <h5>Invalid News Request</h5>
            </div>
        </div>
    </div>
</section>
@endsection
