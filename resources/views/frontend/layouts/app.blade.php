<!DOCTYPE html>
<html lang="en">
   <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        @include('frontend.scripts.css')
        @yield('styles')
        @yield('meta')
        <title>{{$siteSetting->name}}</title>
        <link rel="icon" type="image/x-icon" href="{{ $siteSetting->logo }}">
       <script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=6230668fcedc410013fe5f17&product=inline-share-buttons' async='async'></script>

       <!-- Global site tag (gtag.js) - Google Analytics -->
       <script async src="https://www.googletagmanager.com/gtag/js?id=UA-222905304-1"></script>
       <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-222905304-1');
       </script>
   </head>
   <body>
       {{-- @dd($popUpAdv) --}}
   @if(!empty($popUpAdv))
    @include('frontend.advertisement.popup')
   @endif
   @include('frontend.layouts.header')
   {{-- @include('frontend.layouts.topbar') --}}
        @yield('content')

       @include('frontend.layouts.footer')

       <div class="go-up"><i class="fa fa-chevron-up"></i></div>
   </body>
    @include('frontend.scripts.js')
    @yield('js')
</html>
