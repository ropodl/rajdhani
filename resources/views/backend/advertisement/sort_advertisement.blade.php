@extends('backend.layouts.app')
@section('styles')
    <link href="{{asset('backend/plugins/drag-and-drop/dragula/dragula.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('backend/plugins/drag-and-drop/dragula/example.css')}}" rel="stylesheet" type="text/css" />
    <style>
        .adv-img img {
            height: 100px!important;
            width: 250px!important;
            border-radius: 0!important;
            object-fit: contain;
        }
    </style>
@endsection

@section('content')
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <span class="text-uppercase page-subtitle">Advertisement Page</span>
            <h3 class="page-title">Add New Advertisement</h3>
        </div>
    </div>
    <!-- End Page Header -->
    <form class="add-new-post" action="{{route('advertisement.sort.store', $layoutPage)}}" method="post" enctype="multipart/form-data">
        @csrf
        <div class="row">
            <div class="col-lg-9 col-md-12">
                <!-- Add New Post Form -->
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            <div class="widget-content widget-content-area">
                                @foreach($ads as $title => $advertisements)
                                    <div class='parent ex-{{ $loop->iteration }}'>
                                        <div class="row">
                                                <div class="col-sm-12">
                                                    <h2>{{ \Str::headline($title) }}</h2>
                                                    <div id="{{ $loop->iteration == 1?'left-defaults':'left-events'}}" class='dragula'>
                                                        @foreach($advertisements as $key => $adv)
                                                        <div class="media  d-md-flex d-block text-sm-left text-center">
                                                            <input type="hidden" name="sort[]" value="{{$adv->id}}">
                                                            <div class="media-body">
                                                                <div class="d-xl-flex d-block justify-content-between">
                                                                    <div class="">
                                                                        <h6 class="">{{$adv->title}}</h6>
                                                                    </div>
                                                                    <div class="adv-img">
                                                                        <img src="{{$adv->image}}" alt="">
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        @endforeach
                                                    </div>
                                                </div>

                                        </div>
                                    </div>
                                @endforeach

                            </div>

                        </div>
                <!-- / Add New Post Form -->
            </div>
            <div class="col-lg-3 col-md-12">
                <!-- Post Overview -->
                <div class='card card-small mb-3'>
                    <div class="card-header border-bottom">
                        <h6 class="m-0">Actions</h6>
                    </div>
                    <div class='card-body p-0'>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex px-3">
                                <button type="submit" id="draft" class="btn btn-sm btn-outline-accent" name="status" value="draft">
                                    <i class="material-icons">save</i> Save Draft
                                </button>
                                <button type="submit" class="btn btn-sm btn-accent ml-auto">
                                    <i class="material-icons">file_copy</i> Publish
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- / Post Overview -->
            </div>
        </div>
    </form>
    <script src="{{asset('backend/plugins/drag-and-drop/dragula/dragula.min.js')}}"></script>
    <script src="{{asset('backend/plugins/drag-and-drop/dragula/custom-dragula.js')}}"></script>
@endsection
