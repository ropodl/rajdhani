@php $description = ($description ??  strip_tags($siteSetting->description)).'Nepal’s online news portal'; @endphp
<meta name="title" content="{{ $title . '-Rajdhani Press' ?? 'Rajdhani Press' }}">
<meta name="description" content="{{ $description }}">
<title>{{ $title . '-Rajdhani Press' ?? 'Rajdhani Press' }}</title>

@php
    $metas = ['og', 'twitter'];
    $properties = [
        'type' => 'website',
        'card' => 'summary_large_image',
        'url' => $url ?? 'https://rajdhanipress.com/',
        'title' => $title,
        'description' => $description,
        'image' => $image ?? $siteSetting->logo,
    ];
@endphp
@foreach ($metas as $meta)
    <!--{{ $meta }}-->
    @foreach ($properties as $property => $content)
        <meta property="{{ $meta }}:{{ $property }}" content="{{ $content }}">
    @endforeach
@endforeach
