@extends('frontend.layouts.app')
@section('content')
    @if(!empty($privacy))
    <section class="terms-section">
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                    <div class="terms">
                        <h4>{{$privacy->title}}</h4>
                        <p>{!!strip_tags($privacy->description,'') !!}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    @endif
@endsection
