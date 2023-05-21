@extends('frontend.layouts.app')
@section('content')
    <searchpage :result="{{ json_encode($searchNews) }}" :search="{{ json_encode($search) }}"
        :param="{{ json_encode($searchParam) }}">
    </searchpage>
@endsection
