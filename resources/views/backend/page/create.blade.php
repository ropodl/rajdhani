@extends('backend.layouts.app')
@section('content')
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <span class="text-uppercase page-subtitle">Page Section</span>
            <h3 class="page-title">Add New Page</h3>
        </div>
    </div>
    <!-- End Page Header -->
    <form class="add-new-post" action="{{isset($page)?route('page.update', $page):route('page.store')}}" method="post" enctype="multipart/form-data">
        <div class="row">
            <div class="col-lg-9 col-md-12">
                <!-- Add New Post Form -->
                <div class="card card-small mb-3">
                    <div class="card-body">
                        @csrf
                        @if(isset($page))
                            @method('PATCH')
                        @endif
                        <div class="col-md-12 col-sm-12 p-0 pl-3">
                            <label>Name <span class="required">*</span> </label>
                            <input class="form-control form-control-lg mb-3" id="name" type="text" name="name" value="{{old('name')?old('name'):(isset($page)?$page->name:'')}}" placeholder="Your Page Name (eg. about-us)">
                            @if($errors->first('name'))
                                <div class="text text-danger">
                                    {{$errors->first('name')}}
                                </div>
                            @endif
                        </div>
                        <div class="col-md-12 col-sm-12 p-0 pl-3">
                            <label>Title <span class="required">*</span> </label>
                            <input class="form-control form-control-lg mb-3" id="title" type="text" name="title" value="{{old('title')?old('title'):(isset($page)?$page->title:'')}}" placeholder="Your Page Title (eg. About Us)">
                            @if($errors->first('title'))
                                <div class="text text-danger">
                                    {{$errors->first('title')}}
                                </div>
                            @endif
                        </div>
                        <div class="col-md-12 col-sm-12 p-0 pl-3">
                            <label>URL</label>
                            <input class="form-control form-control-lg mb-3" id="url" type="text" name="url" value="{{old('url')?old('url'):(isset($page)?$page->url:'')}}" placeholder="Your Page URL">
                            @if($errors->first('url'))
                                <div class="text text-danger">
                                    {{$errors->first('url')}}
                                </div>
                            @endif
                        </div>
                        <div class="col-md-12 col-sm-12 p-0 pl-3">
                            <label for="message">Description<span class="required">*</span> </label>
                            <textarea id="mytextarea" name="description">{!! isset($page)?$page->description:(old('description') ?? '') !!}</textarea>
                            @if($errors->first('description'))
                                <div class="text text-danger">
                                    *{{$errors->first('description')}}
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
                            <li class="list-group-item p-3">
                                 <span class="d-flex">
                                    <div class="custom-control">
                                        <input type="hidden" name="status" value="0">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch" name="status"
                                               value="1" {{ (isset($page) && $page->status == 1) || old('status') ? 'checked' : ''}}>
                                        <label class="custom-control-label" for="customSwitch">Is Active</label>
                                    </div>
                                </span>
                            </li>

                            <li class="list-group-item d-flex px-3">
{{--                                @if(isset($page))--}}
{{--                                    <button type="submit" id="update" class="btn btn-sm btn-accent ml-auto" name="status" value="save">--}}
{{--                                        <i class="material-icons">file_copy</i> {{$page->status=='Saved'?'Update':'Save'}}--}}
{{--                                    </button>--}}
{{--                                @else--}}
                                    <button type="submit" id="draft" class="btn btn-sm btn-outline-accent" name="status" value="draft">
                                        <i class="material-icons">save</i> Save Draft
                                    </button>
                                    <button type="submit" class="btn btn-sm btn-accent ml-auto">
                                        <i class="material-icons">file_copy</i> Publish
                                    </button>
{{--                                @endif--}}
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- / Post Overview -->
            </div>
        </div>
    </form>
@endsection
