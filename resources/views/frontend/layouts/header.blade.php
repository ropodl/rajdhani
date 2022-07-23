@if(!empty($headerAds['l_ad']))
    @php
        $firstHeaderAdv = $headerAds['l_ad'][0]->advertisement ?? '';
    @endphp
@endif

    <section class="sc-logo my-3">
        <div class="container">
            <div class="row d-flex">
                <div class="col-md-4">
                    <a href="{{route('frontend.index')}}"><img class="logo-image"
                            src="{{ $siteSetting->logo_with_text }}"
                            alt="" class="sc-logo__img"></a>
                            <span></span>
                    <div class="time">
                        <span>{{ nepalidate(now()) }}</span>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="d-flex">
                        <a class="info-image" href="#">
                            <img class="img-fluid" src="https://www.onlinekhabar.com/wp-content/uploads/2022/02/0DC4CFA3-FFBA-4FFB-857E-B484FDA10DAD.gif" alt="" srcset="">
                        </a>
                    </div>
                </div>
{{--                <div class="col-md-8">--}}
{{--                    @if(!empty($firstHeaderAdv))--}}
{{--                        @include('frontend.advertisement.l_ad', ['url' => $firstHeaderAdv->url, 'image' => $firstHeaderAdv->image])--}}
{{--                    @endif--}}
{{--                </div>--}}
            </div>
        </div>
    </section>
<header>
    <nav id="navigation4" class="container container-fluid navigation">
        <div class="nav-header">
            <a class="nav-brand" href="index.php"><img src="{{asset ('frontend/img/ch/lo.png') }}" alt="logo"
                                                       id="main_logo" class="img-fluid"></a>
            <div class="nav-toggle"></div>
        </div>
        <div class="nav-search d-flex">
            <div class="search-icon"><i class="fa fa-search" data-toggle="modal" data-target="#searchmodal"></i></div>
        </div>
        <div class="nav-menus-wrapper">
            <span class="image-menu">
                <img src="{{$siteSetting->logo}}" alt="">
             </span>
            <ul class="nav-menu align-to-left">
                <li>
                    <a href="{{route('frontend.index')}}">होमपेज</a>
                </li>
                @foreach($headerCats as $category)
                @if($category->sort == 0)
                    <li>
                        <a href="{{ route('frontend.category_news' , $category->slug)}}">{{$category->name}}</a>
                    </li>
                @endif
                @endforeach
                <li>
                    <a href="#">समाचार</a>
                    <ul class="nav-dropdown">
                        @foreach($underCats as $cat)
                        <li>
                            <a href="{{route('frontend.category_news', $cat->slug)}}">{{$cat->name}}</a>
                        </li>
                        @endforeach
                    </ul>
                </li>
                <li>
                    <a href="#">प्रदेश</a>
                    <ul class="nav-dropdown">
                        @foreach($provinces as $province)
                        <li>
                            <a href="{{route('frontend.province_news', $province->slug )}}">{{$province->name}}</a>
                        </li>
                        @endforeach
                    </ul>
                </li>
                @foreach($headerCats as $category)
                @if($category->sort > 0)
                    <li>
                        <a href="{{ route('frontend.category_news' , $category->slug)}}">{{$category->name}}</a>
                    </li>
                @endif
                @endforeach
            </ul>
        </div>
    </nav>
</header>
