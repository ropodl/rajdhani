<section class="no-result-section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="no-result">
                    <!-- <img src="{{asset('frontend/img/search.png')}}" alt=""> -->
                    <div style="font-size:140px;">🤔</div>
                    <h4>Search result for - {{$search}}</h4>
                    <p>No results found. Please try again with a different keyword.</p>
                    <div class="text-center">
                        <form class="form-inline d-block" action="{{route('frontend.search')}}" method="get">
                            @csrf
                            <input class="form-control mr-sm-2" name="search" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
