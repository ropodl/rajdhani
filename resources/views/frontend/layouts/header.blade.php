@if (!empty($headerAds['l_ad']))
    @php
        $firstHeaderAdv = $headerAds['l_ad'][0]->advertisement ?? '';
    @endphp
@endif
<topbar date="{{ nepalidate(now()) }}" :socials="{{ json_encode($media) }}"></topbar>
<midbar></midbar>
<navbar :provinces="{{ json_encode($provinces) }}" :categories="{{ json_encode($headerCats) }}"
    :tags="{{ json_encode($tags) }}"></navbar>
<!-- topbar -->
{{-- <section class="topbar">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <ul class="social-links">
                    <li><a href="{{ $media->facebook_link }}" target="_blank"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="{{ $media->instagram_link }}" target="_blank"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="{{ $media->youtube_link }}" target="_blank"><i class="fa fa-youtube-play"></i></a></li>
                    <li><a href="{{ $media->twitter_link }}" target="_blank"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="{{ $media->linkedin_link }}" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
            <div class="col-sm-hidden col-md-6">
                <div class="d-flex">
                    <ul class="info-text">
                        <li>Email: Rajdhanipress1@gmail.com</li>
                        <li>Phone No.: 01-444444,01-5555555 </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section> --}}

<!-- middle logo section -->
{{-- <section class="sc-logo">
    <div class="container">
        <div class="row my-2">
            <div class="col-md-4">
                <a href="{{ route('frontend.index') }}"><img class="logo-image" src="{{ $siteSetting->logo_with_text }}"
                        alt="" class="sc-logo__img"></a>
                <span></span>
                <div class="time">
                    <span>{{ nepalidate(now()) }}</span>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <div class="d-flex justify-content-center align-items-center h-100">
                    @if ($headerAds)
                        <a class="info-image" href="{{ $headerAds->advertisement->url }}">
                            <img class="img-fluid" src="{{ $headerAds->advertisement->image }}" alt=""
                                srcset="">
                        </a>
                    @endif
                </div>
            </div> --}}
{{-- comment --}}
{{-- <div class="col-md-8"> --}}
{{--                    @if (!empty($firstHeaderAdv)) --}}
{{--                        @include('frontend.advertisement.l_ad', ['url' => $firstHeaderAdv->url, 'image' => $firstHeaderAdv->image]) --}}
{{--                    @endif --}}
{{--                </div>
        </div>
    </div>
</section>
{{-- <header>
    <nav id="navigation4" class="container container-fluid navigation">
        <div class="nav-header">
            <a class="nav-brand" href="index.php">
                <img src="{{ asset('frontend/img/ch/lo.png') }}" alt="logo" id="main_logo" class="img-fluid">
            </a>
            <ul class="home m-0">
                <li>
                    <a class="text-white" href="/">
                        <i class="fa fa-home" style="font-size:34px;"></i>
                    </a>
                </li>
            </ul>
            <div class="nav-toggle"></div>
        </div>
        <div class="nav-search d-flex">
            <div class="search-icon"><i class="fa fa-search" data-toggle="modal" data-target="#searchmodal"></i>
            </div>
        </div>
        <div class="nav-menus-wrapper">
            <span class="image-menu">
                <img src="{{ $siteSetting->logo }}" alt="">
            </span>
            <ul class="nav-menu align-to-left">
                <li>
                    <a href="{{ route('frontend.index') }}">
                        <i class="fa fa-home"></i>
                    </a>
                </li>
                @foreach ($headerCats as $category)
                    @if ($category->sort == 0)
                        <li>
                            <a href="{{ route('frontend.category_news', $category->slug) }}">{{ $category->name }}</a>
                        </li>
                    @endif
                @endforeach
                <li>
                    <!-- <a href="#">समाचार</a> -->
                    <!-- <ul class="nav-dropdown">
                        @foreach ($underCats as $cat)
<li>
                            <a href="{{ route('frontend.category_news', $cat->slug) }}">{{ $cat->name }}</a>
                        </li>
@endforeach
                    </ul> -->
                </li>
                <li>
                    <a href="#">प्रदेश</a>
                    <ul class="nav-dropdown">
                        @foreach ($provinces as $province)
                            <li>
                                <a
                                    href="{{ route('frontend.province_news', $province->slug) }}">{{ $province->name }}</a>
                            </li>
                        @endforeach
                    </ul>
                </li>
                @foreach ($headerCats as $category)
                    @if ($category->sort < 6)
                        <li>
                            <a href="{{ route('frontend.category_news', $category->slug) }}">{{ $category->name }}</a>
                        </li>
                    @endif
                @endforeach
                <li>
                    <a href="#">अर्थ</a>
                    <ul class="nav-dropdown">
                        @foreach ($underCats as $cat)
                            <li>
                                <a href="{{ route('frontend.province_news', $cat->slug) }}">{{ $cat->name }}</a>
                            </li>
                        @endforeach
                    </ul>
                </li>

                @foreach ($headerCats as $category)
                    @if ($category->sort > 5)
                        <li>
                            <a href="{{ route('frontend.category_news', $category->slug) }}">{{ $category->name }}</a>
                        </li>
                    @endif
                @endforeach
            </ul>
        </div>
    </nav>
</header> --}}
