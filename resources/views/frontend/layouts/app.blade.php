<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    {{-- @include('frontend.scripts.css')
    @yield('styles') --}}
    @yield('meta')
    {{-- <title>{{ $siteSetting->name }}</title> --}}
    <link rel="icon" type="image/x-icon" href="{{ $siteSetting->logo }}">
    {{-- <script type='text/javascript'
        src='https://platform-api.sharethis.com/js/sharethis.js#property=60794599181bcb00113f8a4f&product=inline-share-buttons'
        async='async'></script> --}}
    <!-- Global site tag (gtag.js) - Google Analytics -->
    {{-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-KRSHM8QWGN"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-KRSHM8QWGN');
    </script>
    <!-- End of Google Analytics --> --}}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vuetify@3.2.4/dist/vuetify.min.css">
    <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap&family=Rajdhani:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    @vite(['resources/js/app.js', 'resources/sass/frontend.scss'])
</head>

<body>
    <!-- {{-- @dd($popUpAdv) --}} -->
    @if (!empty($popUpAdv))
        @include('frontend.advertisement.popup')
    @endif
    {{-- <!-- @include('frontend.layouts.topbar') --> --}}
    <div id="app">
        <v-app>
            @include('frontend.layouts.header')
            <v-main class="pa-0">
                @yield('content')
            </v-main>
            @include('frontend.layouts.footer')
        </v-app>
    </div>
    {{-- @yield('content') --}}
    {{-- <div class="go-to-top">
        <i class="fa fa-arrow-up"></i>
    </div> --}}
    {{-- @include('frontend.scripts.js')
    @yield('js')
    @stack('inlinejs') --}}
    {{-- <script src="/build/registerSW.js" defer></script> --}}
</body>

</html>
