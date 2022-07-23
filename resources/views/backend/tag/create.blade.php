@extends('backend.layouts.app')
@section('styles')
    <link rel="stylesheet" type="text/css" href="{{asset('backend/plugins/amsify.suggestags.css')}}">
    <style>
        span.fa.fa-times.amsify-remove-tag:hover {
            color: red;
        }
    </style>
@endsection
@section('content')
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <span class="text-uppercase page-subtitle">Tag Page</span>
            <h3 class="page-title">Add New Tag</h3>
        </div>
    </div>
    <!-- End Page Header -->
    <form class="add-new-post" action="{{route('tag.store')}}" method="post" enctype="multipart/form-data">
        <div class="row">
            <div class="col-lg-9 col-md-12">
                <!-- Add New Post Form -->
                <div class="card card-small mb-3">
                    <div class="card-body">
                        @csrf
                        <div class="col-md-12 col-sm-12 p-0 pl-3">
                            <label>Name <span class="required">*</span> <span> (Please insert , after each tag names.)</span> </label>
                            <input class="form-control form-control-lg mb-3" id="tags" type="text" name="name" value="{{old('name')?old('name'):''}}" placeholder="Your Tag Names">
                            @if($errors->first('name'))
                                <div class="text text-danger">
                                    {{$errors->first('name')}}
                                </div>
                            @endif
                        </div>
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
    <script type="text/javascript" src="{{asset('backend/plugins/jquery.amsify.suggestags.js')}}"></script>

    <script type="text/javascript">
        $('#tags').amsifySuggestags({
        });
    </script>
@endsection
