<section class="trending-section pt-3">
 <div class="container">
    <div class="trending-part">
       <span>Trending</span>
       <ul>
           @foreach($tags as $tag)
            <li><a href="{{route('frontend.search',['tag' => $tag->name])}}">#{{$tag->name}}</a></li>
           @endforeach
       </ul>
    </div>
 </div>
</section>
