@php $description = ($description ??  strip_tags($siteSetting->description)).' Developed by Softmahal Technologies https://softmahal.com , Raju Poudel Laravel Developer https://rajupoudel.com.np'; @endphp
<meta name="title" content="{{ $title ?? 'Bishwash Khabar'}}">
<meta name="description" content="{{ $description }}">

@php
    $metas=['og', 'twitter'];
    $properties = [
    'type' => 'website',
    'card' => 'summary_large_image',
    'url'=> $url ?? 'https://bishwashkhabar.com/',
    'title' => $title ,
    'description' => $description,
    'image' => $image ?? $siteSetting->logo
    ];
@endphp
@foreach($metas as $meta )
    <!--{{$meta}}-->
    @foreach($properties as $property => $content)
        <meta property="{{$meta}}:{{$property}}" content="{{ $content}}">
    @endforeach

@endforeach
