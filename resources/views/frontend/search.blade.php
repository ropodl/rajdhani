@extends('frontend.layouts.app')
@section('content')
    <searchpage></searchpage>
    {{-- {{ !$searchNews->isEmpty() }} --}}
    <section class="sc-news2 pb-4 mt-4">
        <div class="container">
            @if (!$searchNews->isEmpty())
                <div class="row">
                    @foreach ($searchNews as $new)
                        <div class="col-md-6 mb-md-0 mb-3">
                            <div class="mb-md-3 mb-2 pb-md-3 pb-2 border-bottom">
                                <div class="row">
                                    <div class="col-md-4">
                                        <a href="{{ route('frontend.news.detail', $new) }}"><img src="{{ $new->image }}"
                                                alt="" class="news-img-ss"></a>
                                    </div>
                                    <div class="col-md-8">
                                        <a href="{{ route('frontend.news.detail', $new) }}" class="news-title">
                                            <h3>{{ $new->title }}</h3>
                                        </a>
                                        <div class="news-detail-small-th">
                                            <p>{!! str_limit(strip_tags($new->description, ''), 200, '...') !!}</p>
                                        </div>
                                        {{--                                        <span><a href="" class="read-more ml-2">Read More  <i --}}
                                        {{--                                                    class="fa fa-angle-double-right"></i></a></span> --}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            @else
                @include('frontend.components.no_search_news')
            @endif
            <div class="mt-3">
                {{ $searchNews->links() }}
            </div>
        </div>
    </section>
@endsection
