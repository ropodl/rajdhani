@extends('frontend.layouts.app')
@section('meta')
    @include('frontend.components.meta',['title' => $siteSetting->name ])
@endsection

@section('content')
@if(!empty($advertisements['xl_ad']) || !empty($advertisements['sm_ad']))
    @php
        $firstXlAdv = $advertisements['xl_ad'][0]->advertisement ?? '';
        $secondXlAdv = $advertisements['xl_ad'][1]->advertisement ?? '';
        $firstSmAdv = $advertisements['sm_ad'][0]->advertisement ?? '';
        $secondSmAdv = $advertisements['sm_ad'][1]->advertisement ?? '';
         $thirdSmAdv = $advertisements['sm_ad'][2]->advertisement ?? '';
        $fourthSmAdv = $advertisements['sm_ad'][3]->advertisement ?? '';
    @endphp
@endif

<!-- Main News -->

@if(!$mainNews->isEmpty())
    <section class="top-news-section">
        <div class="container">
                <div class="row">
                    @forelse($mainNews as $mNews)
                        <div class="col-md-12 mt-5">
                            <div class="top-news">
                                <h2>
                                    <a href="{{ route('frontend.news.detail', $mNews)}}">{{$mNews->title}}</a>
                                </h2>
                                <div class="author">
                                    <div>
                                        <h5>{{$siteSetting->name}}</h5>
                                    </div>
                                    <div>
                                        <span><i class="fa fa-history"></i> {{ $mNews->formated_post_date }}</span>
                                    </div>
                                </div>
                                <a href="{{ route('frontend.news.detail', $mNews)}}" rel="noopener noreferrer">
                                    <img loading="lazy" src="{{$mNews->image}}" class="w-100" alt="">
                                </a>
                                <p>{!! str_limit(strip_tags($mNews->description,''), 500 ,'...') !!}</p>
                            </div>
                        </div>
                    @empty
                        @include('frontend.components.no_news')
                    @endforelse
                </div>
        </div>
    </section>
    @endif

<!-- Latest News -->

    @if(count($latestNews) > 0)
        @php $firstNews = $latestNews[0]; @endphp
        <section class="top-part-section mt-3">
            <div class="container">
                <div class="row mt-4">
                    <div class="col-md-9">
                        <div class="row">
                            <div class="col-md-7">
                                <div class="single-main-news">
                                    <a href="{{ route('frontend.news.detail', $firstNews ) }}">
                                        <img loading="lazy" src="{{$firstNews->image}}" alt="image">
                                    </a>
                                    <div class="news-content">
                                        <h3>
                                            <a href="{{ route('frontend.news.detail', $firstNews ) }}">{{$firstNews->title}}</a>
                                        </h3>
                                        <span><i class="fa fa-history"></i> {{ $firstNews->formated_post_date }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="news-list">
                                    <ul>
                                        @foreach($latestNews as $news)
                                            @if(!$loop->first)
                                                <li>
                                                    <div class="media">
                                                    <a href="{{  route('frontend.news.detail', $news ) }}">
                                                        <img loading="lazy" class="mr-3" src="{{$news->image}}" alt="">
                                                    </a>
                                                        <div class="media-body align-self-center">
                                                            <h5 class="mt-0">
                                                                <a href="{{  route('frontend.news.detail', $news ) }}">
                                                                    {{$news->title}}
                                                                </a>
                                                            </h5>
                                                            <span><i class="fa fa-history"></i> {{ $news->formated_post_date }}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            @endif
                                        @endforeach
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="ads-part">
                            @if(!empty($firstSmAdv))
                                @include('frontend.advertisement.sm_ad', ['url' => $firstSmAdv->url, 'image' => $firstSmAdv->image])
                            @endif
                        </div>
                                <div class="ads-part mt-2">
                            @if(!empty($secondSmAdv))
                                @include('frontend.advertisement.sm_ad', ['url' => $secondSmAdv->url, 'image' => $secondSmAdv->image])
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </section>

    @endif

<!-- End Latest News -->

    <section class="gif-section">
        <div class="container">
            <div class="row">
                @if(!empty($firstXlAdv))
                    @include('frontend.advertisement.xl_ad', ['url' => $firstXlAdv->url, 'image' => $firstXlAdv->image])
                @endif
            </div>
        </div>
    </section>


    @if(!$categoryWiseNews->isEmpty())
        <section class="business-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12">
                        <div class="section-title d-flex justify-content-between">
                            <a href="{{route('frontend.category_news', $categoryWiseNews[0]->slug)}}"
                               class="head">{{$categoryWiseNews[0]->name}}</a>
                            <a href="{{route('frontend.category_news', $categoryWiseNews[0]->slug)}}"
                               class="all">सबै</a>
                        </div>
                        <div class="row">
                            <div class="col-md-7">
                                <div class="business-popular-news">
                                    <div class="popular-news-image banner-image">
                                        <a href="{{route('frontend.news.detail', $categoryWiseNews[0]->news[0])}}">
                                            <img loading="lazy"
                                                 src="{{$categoryWiseNews[0]->news[0]->image}}"
                                                 alt="image">
                                        </a>
                                    </div>
                                    <div class="popular-news-content">
                                        <h3>
                                            <a href="{{route('frontend.news.detail', $categoryWiseNews[0]->news[0])}}">{{$categoryWiseNews[0]->news[0]->title}}</a>
                                        </h3>
                                        <p style="display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;overflow: hidden;">{!! str_limit($categoryWiseNews[0]->news[0]->description, 200,'...') !!}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="news-list-1 mt-4">
                                    <ul>
                                        @foreach($categoryWiseNews[0]->news->take(5) as $news)
                                            @if(!$loop->first)
                                                <li>
                                                    <div class="media">
                                                    <a href="{{route('frontend.news.detail', $news)}}">
                                                                    <img loading="lazy" class="mr-3" src="{{$news->small_image}}"
                                                                    alt="image">
                                                                    <div class="media-body align-self-center">
                                                                        <h5 class="mt-0">
                                                                            {{$news->title}}
                                                                        </a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </li>
                                            @endif
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-4 col-md-12">
                        <div class="tab-part">
                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home"
                                       role="tab" aria-controls="pills-home" aria-selected="true">ताजा </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"
                                       role="tab" aria-controls="pills-profile" aria-selected="false">लोकप्रिय</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                                     aria-labelledby="pills-home-tab">
                                    <div class="news-list-1 mt-4">
                                        <ul>
                                            @foreach($latestNews->take(6) as $news)
                                                <li>
                                                    <div class="media">
                                                    <a href="{{route('frontend.news.detail', $news)}}">
                                                        <img loading="lazy" class="mr-3" src="{{$news->image}}"
                                                             alt="image">
                                                            </a>
                                                        <div class="media-body align-self-center">
                                                            <h5 class="mt-0">
                                                                <a href="{{route('frontend.news.detail', $news)}}">
                                                                    {{$news->title}}
                                                                </a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </li>
                                            @endforeach
                                        </ul>
                                    </div>
                                </div>
                                @if(!empty($trendingNews))
                                    <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                                         aria-labelledby="pills-profile-tab">
                                        <div class="news-list-1 mt-4">
                                            <ul>
                                                @foreach($trendingNews as $news)
                                                    <li>
                                                        <div class="media">
                                                        <a href="{{route('frontend.news.detail', $news)}}">
                                                            <img loading="lazy" class="mr-3" src="{{$news->image}}"
                                                                 alt="image">
                                                                </a>
                                                            <div class="media-body align-self-center">
                                                                <h5 class="mt-0">
                                                                    <a href="{{route('frontend.news.detail', $news)}}">
                                                                        {{$news->title}}
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                @endforeach

                                            </ul>
                                        </div>
                                    </div>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    @endif

    @if(count($categoryWiseNews) > 1)
    @php $secondNews = $categoryWiseNews[1]; @endphp
    <section class="popular-section mt-3">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-title d-flex justify-content-between">
                        <a href="#" class="head">{{ $secondNews->name }}</a>
                        <a href="#" class="all">सबै</a>
                    </div>
                    <div class="row">
                        @foreach($secondNews->news->take(8) as $news)
                        <div class="col-md-3">
                            <div class="most-popular-news">
                                <div class="popular-news-image">
                                    <a href="{{ route('frontend.news.detail', $news) }}">
                                        <img loading="lazy" src="{{ $news->image }}" alt="image">
                                    </a>
                                </div>
                                <div class="popular-news-content">
                                    <h3>
                                    <a href="{{ route('frontend.news.detail', $news) }}">{{$news->title}}</a>
                                    </h3>
                                    {{-- <span><a href="{{ route('frontend.news.detail', $news->slug) }}" class="read-more">Read More  <i class="fa fa-angle-double-right"></i></a></span> --}}
                                </div>
                            </div>

                        </div>
                        @endforeach
                    </div>
                </div>

            </div>
        </div>
    </section>
    @endif
    <section class="gif-section">
        <div class="container">
            <div class="row">
                @if(!empty($secondXlAdv))
                    @include('frontend.advertisement.xl_ad', ['url' => $secondXlAdv->url, 'image' => $secondXlAdv->image])
                @endif
            </div>
        </div>
    </section>
    @if(!$provinceWiseNews->isEmpty())
        <section class="pradesh-section mt-3">
            <div class="container">
                <div class="section-title">
                    <a href="#" class="head">प्रदेश समाचार </a>
                    <ul class="nav nav-pills pradesh-li" id="pills-tab" role="tablist">
                        @foreach($provinces as $key => $province)
                            <li class="nav-item">
                                <a class="nav-link" href="{{route('frontend.province_news', $province->slug )}}">
                                    {{$province->name}}
                                </a>
                            </li>
                        @endforeach
                    </ul>
                </div>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade active show"
                         role="tabpanel" aria-labelledby="{{$news->id}}-tab">
                        <div class="row">
                            <div class="col-lg-8 col-md-12 col-sm-12">
                                <div class="single-main-news">
                                    <a href="{{route('frontend.news.detail', $provinceWiseNews[0])}}">
                                        <img loading="lazy" src="{{$provinceWiseNews[0]->image}}" alt="image">
                                    </a>
                                    <div class="news-content">
                                        <h3>
                                            <a href="{{route('frontend.news.detail', $provinceWiseNews[0])}}">{{$provinceWiseNews[0]->title}}</a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12 col-sm-12">
                                <div class="news-list">
                                    <ul>
                                        @foreach($latestNews as $news)
                                            @if(!$loop->first)
                                                <li>
                                                    <div class="media">
                                                    <a href="{{ route('frontend.news.detail', $news )}}">
                                                        <img loading="lazy" class="mr-3" src="{{$news->small_image}}" alt="">
                                                    </a>
                                                        <div class="media-body align-self-center">
                                                            <h5 class="mt-0">
                                                                <a href="{{ route('frontend.news.detail', $news )}}">
                                                                    {{$news->title}}
                                                                </a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </li>
                                            @endif
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    @endif


    @if(!empty($firstXlAdv))
        <section class="gif-section">
            <div class="container">
                <div class="row">
                        {{-- @php $ad = $advertisements['xl_ad'][1]->advertisement ?? ''; @endphp --}}
                        @include('frontend.advertisement.xl_ad', ['url' => $firstXlAdv->url, 'image' => $firstXlAdv->image])
                </div>
            </div>
        </section>
    @endif

    @if(count($categoryWiseNews) > 2)
    <section class="popular-section mt-3">
        <div class="container">
            @foreach($categoryWiseNews as $key => $category)
            @if($key > 1)
            <div class="row">
                <div class="col-md-12">
                    <div class="section-title d-flex justify-content-between">
                        <a href="#" class="head">{{ $category->name }}</a>
                        <a href="#" class="all">सबै</a>
                    </div>
                    <div class="row">
                        @foreach($category->news->take(8) as $news)
                        <div class="col-md-3">
                            <div class="most-popular-news">
                                <div class="popular-news-image">
                                    <a href="{{ route('frontend.news.detail', $news) }}">
                                        <img loading="lazy" src="{{ $news->image }}" alt="image">
                                    </a>
                                </div>
                                <div class="popular-news-content">
                                    <h3>
                                    <a href="{{ route('frontend.news.detail', $news) }}">{{$news->title}}</a>
                                    </h3>
                                    {{-- <span><a href="{{ route('frontend.news.detail', $news->slug) }}" class="read-more">Read More  <i class="fa fa-angle-double-right"></i></a></span> --}}
                                </div>
                            </div>

                        </div>
                        @endforeach
                    </div>
                </div>

            </div>
            @endif
            @endforeach
        </div>
    </section>
    @endif

    <!-- News Category News -->
    @if(!$newsCategoryNews->isEmpty())
    <section class="popular-section mt-3">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-title d-flex justify-content-between">
                        <a href="#" class="head">अन्य समाचार</a>
                        <a href="#" class="all">सबै</a>
                    </div>
                    <div class="row">
                        @foreach($newsCategoryNews as $news)
                        <div class="col-md-3">
                            <div class="most-popular-news">
                                <div class="popular-news-image">
                                    <a href="{{ route('frontend.news.detail', $news) }}">
                                        <img loading="lazy" src="{{ $news->image }}" alt="image">
                                    </a>
                                </div>
                                <div class="popular-news-content">
                                    <h3>
                                    <a href="{{ route('frontend.news.detail', $news) }}">{{$news->title}}</a>
                                    </h3>
                                    {{-- <span><a href="{{ route('frontend.news.detail', $news->slug) }}" class="read-more">Read More  <i class="fa fa-angle-double-right"></i></a></span> --}}
                                </div>
                            </div>

                        </div>
                        @endforeach
                    </div>
                </div>

            </div>
        </div>
    </section>
    @endif
    <!-- End of News Category News -->


    {{-- <section class="video-section mt-4">
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                    <div class="section-title d-flex justify-content-between">
                        <a href="#" class="head">भिडियो</a>
                    </div>
                    <div class="video-slider owl-carousel owl-theme" id="slider">
                        <div class="item">
                            <div class="video">
                                <iframe width="100%" height="300" src="https://www.youtube.com/embed/M4fJtHKtXEQ"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="item">
                            <div class="video">
                                <iframe width="100%" height="300" src="https://www.youtube.com/embed/D0UnqGm_miA"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="item">
                            <div class="video">
                                <iframe width="100%" height="300" src="https://www.youtube.com/watch?v=M4fJtHKtXEQ"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="item">
                            <div class="video">
                                <iframe width="100%" height="300" src="https://www.youtube.com/embed/D0UnqGm_miA"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="item">
                            <div class="video">
                                <iframe width="100%" height="300" src="https://www.youtube.com/embed/D0UnqGm_miA"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="ads-part">
                        @if(!empty($thirdSmAdv))
                            @include('frontend.advertisement.sm_ad', ['url' => $thirdSmAdv->url, 'image' => $thirdSmAdv->image])
                        @endif
                    </div>
                    <div class="ads-part mt-2">
                        @if(!empty($fourthSmAdv))
                            @include('frontend.advertisement.sm_ad', ['url' => $fourthSmAdv->url, 'image' => $fourthSmAdv->image])
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </section> --}}
@endsection
