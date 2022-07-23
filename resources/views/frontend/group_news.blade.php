@extends('frontend.layouts.app')
@section('content')
    <section class="sc-news2 pb-4">
        <div class="container">
                @if(!$news->isEmpty())
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-title d-flex justify-content-between mt-4">
                                <a href="{{route('frontend.group_news', $group->slug)}}" class="head">{{ $group->title }}</a>
                                <div class="d-flex ml-auto">
                                @foreach($group->categories->take(4) as $category)
                                <div class="mr-2">
                                    <a href="{{route('frontend.category_news',$category->slug)}}" class="all">{{$category->name}}</a>
                                </div>
                                @endforeach
                                </div>
    {{--                            <a href="{{route('frontend.category_news',$category->slug)}}" class="all">सबै</a>--}}
                            </div>
                        </div>

                        @foreach($news as $new)
                            @if( $loop->first)
                                <div class="col-md-12">
                                    <div class="single-main-news">
                                        <a href="{{route('frontend.news.detail', $new)}}">
                                            <img src="{{$new->image}}" alt="image"
                                                 class="inner-list-big-image">
                                        </a>
                                        <div class="news-content">
                                            <h3>
                                                <a href="{{route('frontend.news.detail', $new)}}">{{$new->title}}</a>
                                            </h3>
                                            {{--                            <span><a href="" class="read-more">Read More  <i class="fa fa-angle-double-right"></i></a></span>--}}
                                        </div>
                                    </div>
                                </div>
                            @else
                            <div class="col-md-6 mb-md-0 mb-3">
                                <div class="mb-md-3 mb-2 pb-md-3 pb-2 border-bottom">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <a href="{{route('frontend.news.detail', $new)}}"><img src="{{$new->image}}" alt="" class="news-img-ss"></a>
                                        </div>
                                        <div class="col-md-8">
                                            <a href="{{route('frontend.news.detail', $new)}}" class="news-title">
                                                <h3>{{$new->title}}</h3>
                                            </a>
                                            <div class="news-detail-small-th">
                                                <p>{!! str_limit(strip_tags($new->description,''), 200 ,'...') !!}</p>
                                            </div>
                                            {{--                                        <span><a href="" class="read-more ml-2">Read More  <i--}}
                                            {{--                                                    class="fa fa-angle-double-right"></i></a></span>--}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            @endif
                        @endforeach
                    </div>
                    <div class="mt-3">
                        {{$news->links()}}
                    </div>
                @endif
        </div>
    </section>

@endsection
