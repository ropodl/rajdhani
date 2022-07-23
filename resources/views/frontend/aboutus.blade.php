@extends('frontend.layouts.app')
@section('content')
<section class="about-section">
   <div class="container">
      <div class="row">
         <div class="col-md-9">
            <div class="about-us-part">
               <h4>{{$aboutus->title}}</h4>
               <p>{!!strip_tags($aboutus->description,'') !!}</p>

            </div>
         </div>
      </div>
   </div>
</section>
@endsection
