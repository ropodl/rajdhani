@extends('frontend.layouts.app')
@if (!empty($detailAdvs['xl_ad']) || !empty($detailAdvs['sm_ad']))
    @php
        $firstLAdv = $detailAdvs['xl_ad'][0]->advertisement ?? '';
        $secondLAdv = $detailAdvs['xl_ad'][1]->advertisement ?? '';
        $thirdLAdv = $detailAdvs['xl_ad'][2]->advertisement ?? '';
        $firstSmAdv = $detailAdvs['sm_ad'][0]->advertisement ?? '';
        $secondSmAdv = $detailAdvs['sm_ad'][1]->advertisement ?? '';
        $thirdSmAdv = $detailAdvs['sm_ad'][2]->advertisement ?? '';
        $fourthSmAdv = $detailAdvs['sm_ad'][3]->advertisement ?? '';
    @endphp
@endif
@section('meta')
    @component('frontend.components.meta', [
        'title' => $news->title,
        'description' => strip_tags($news->description, ''),
        'image' => $news->image,
        'url' => request()->url(),
    ])
    @endcomponent()
@endsection
{{-- <!-- @section('styles') -->
<!-- @endsection --> --}}
@section('content')
    {{-- {{ dd(URL::full()) }} --}}
    <newsdetail :currentnews="{{ json_encode($news) }}" :currentnewsdate="{{ json_encode(nepalidate($news->created_at)) }}"
        :latest="{{ json_encode($latestNews) }}" :trending="{{ json_encode($trendingNews) }}"
        :related="{{ json_encode($relatedNews) }}" :advertisements="{{ json_encode($detailAdvs) }}">
    </newsdetail>
    {{-- @if (!empty($news))
        <section class="home-news mt-3">
            <div class="container">
                <div class="row detail-row">
                    <div class="col-md-8">
                        <div class="news-box px-md-3 px-2 py-md-4 bg-white mb-3">
                            <div class="banner-image">
                                <img src="{{ $news->image }}" alt="">
                                <h6 class="news-detail-title"> {{ $news->title }}</h6>
                                <small class="mb-3">{{ nepalidate($news->created_at) }}</small><br>
                                @if (!empty($news->author))
                                    <small class="mb-3">{{ $news->author }}</small>
                                @endif
                            </div>
                            <div class="sharethis-inline-share-buttons mb-3 mt-3"></div>

                            <div class="news-short-detail-f">
                                <?php $descriptions = explode('</p>', $news->description);
                                $i = 0; ?>
                                @foreach ($descriptions as $key => $paragraph)
                                    @if ($key % 2 == 0)
                                        <?php $lgAd = $detailAdvs['xl_ad'][$i]->advertisement ?? ''; ?>
                                        @if (!empty($lgAd))
                                            @include('frontend.advertisement.l_ad', [
                                                'url' => $lgAd->url,
                                                'image' => $lgAd->image,
                                            ])
                                            @php $i++ ; @endphp
                                        @endif
                                    @endif
                                    {!! $paragraph !!}</p>
                                @endforeach
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        @if (!empty($firstSmAdv))
                            <div class=" bg-white news-taja">
                                @include('frontend.advertisement.sm_ad', [
                                    'url' => $firstSmAdv->url,
                                    'image' => $firstSmAdv->image,
                                ])
                            </div>
                        @endif
                        <div class="tab-part mt-3">
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
                                            @foreach ($latestNews as $lnews)
                                                <li>
                                                    <div class="media">
                                                        <a href="{{ route('frontend.news.detail', $lnews) }}">
                                                            <img class="mr-3" src="{{ $lnews->image }}" alt="image">
                                                        </a>
                                                        <div class="media-body align-self-center">
                                                            <h5 class="mt-0"><a
                                                                    href="{{ route('frontend.news.detail', $lnews) }}">{{ $lnews->title }}</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </li>
                                            @endforeach
                                        </ul>
                                    </div>
                                </div>
                                @if (!empty($trendingNews))
                                    <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                                        aria-labelledby="pills-profile-tab">
                                        <div class="news-list-1 mt-4">
                                            <ul>
                                                @foreach ($trendingNews as $tnews)
                                                    <li>
                                                        <div class="media">
                                                            <a href="{{ route('frontend.news.detail', $tnews) }}">
                                                                <img loading="lazy" class="mr-3"
                                                                    src="{{ $tnews->image }}" alt="image">
                                                            </a>
                                                            <div class="media-body align-self-center">
                                                                <h5 class="mt-0">
                                                                    <a
                                                                        href="{{ route('frontend.news.detail', $tnews) }}">{{ $tnews->title }}</a>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                @endforeach
                                            </ul>
                                        </div>
                                    </div>
                                @endif
                                @if (!empty($secondSmAdv))
                                    <div class=" bg-white p-md-3 p-2 news-taja">
                                        @include('frontend.advertisement.sm_ad', [
                                            'url' => $secondSmAdv->url,
                                            'image' => $secondSmAdv->image,
                                        ])
                                    </div>
                                @endif
                                @if (!empty($thirdSmAdv))
                                    <div class=" bg-white p-md-3 p-2 news-taja">
                                        @include('frontend.advertiseNo News Were Availablement.sm_ad', [
                                            'url' => $thirdSmAdv->url,
                                            'image' => $thirdSmAdv->image,
                                        ])
                                    </div>
                                @endif
                                @if (!empty($fourthSmAdv))
                                    <div class=" bg-white p-md-3 p-2 news-taja">
                                        @include('frontend.advertisement.sm_ad', [
                                            'url' => $fourthSmAdv->url,
                                            'image' => $fourthSmAdv->image,
                                        ])
                                    </div>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rajniti pt-3 pb-3">
                    <div class="category-title">
                        <span>
                            <a>
                                सम्बन्धित खबर
                            </a>
                        </span>
                        @if (!$news->relatedNews->isEmpty())
                            <a>सबै</a>
                        @endif
                    </div>
                    <div class="row">
                        @forelse($relatedNews as $related)
                            <div class="col-md-3 mb-3">
                                <div class="news-main">
                                    <a href="{{ route('frontend.news.detail', $related) }}"><img
                                            src="{{ $related->image }}" alt="" class="news-img-ss"></a>
                                    <a href="{{ route('frontend.news.detail', $related) }}" class="news-title">
                                        <h6>{{ $related->title }}</h6>
                                    </a>
                                </div>
                            </div>
                        @empty
                            @include('frontend.components.no_news')
                        @endforelse
                    </div>
                </div>
            </div>
        </section>
    @endif --}}
@endsection
