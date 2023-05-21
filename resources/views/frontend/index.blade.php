@extends('frontend.layouts.app')
@section('meta')
    @include('frontend.components.meta', ['title' => $siteSetting->name])
@endsection

@section('content')
    <home :mainnews="{{ json_encode($mainNews) }}" :latest="{{ $latestNews }}"
        :trending="{{ json_encode($trendingNews) }}" :provinces="{{ $provinces }}"
        :provincenews="{{ json_encode($provinceWiseNews) }}" :photos="{{ $photoFeatures }}" :videos="{{ $videos }}"
        :catnews="{{ json_encode($categoryWiseNews) }}" :advertisements="{{ $advertisements }}">
    </home>
@endsection
