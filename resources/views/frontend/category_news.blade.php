@extends('frontend.layouts.app')
@section('meta')
    @component('frontend.components.meta', [
        'title' => $title,
        // 'description' => $title,
        'image' => 'https://rajdhanipress.com/media/83/logo-removebg-preview.png',
        'url' => request()->url(),
    ])
    @endcomponent()
@endsection
@section('content')
    <categorynews :news="{{ json_encode($news) }}" :title="{{ json_encode($title) }}"></categorynews>
@endsection
