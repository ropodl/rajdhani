@extends('backend.layouts.app')
@section('content')
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <span class="text-uppercase page-subtitle">Advertisement Page</span>
            <h3 class="page-title">Add New Advertisement</h3>
        </div>
    </div>
    <!-- End Page Header -->
    <form class="add-new-post" action="{{isset($advertisement)?route('advertisement.update', $advertisement):route('advertisement.store')}}" method="post" enctype="multipart/form-data">
        <div class="row">
            <div class="col-lg-9 col-md-12">
                <!-- Add New Post Form -->
                <div class="card card-small mb-3">
                    <div class="card-body">
                        @csrf
                        @if(isset($advertisement))
                            @method('PATCH')
                        @endif
                        <input type="hidden" name="advertisement_image" value="{{ isset($advertisement)?$advertisement->image:'empty' }}" />
                        <div class="row col-md-12 mb-5">
                            <div class="col-md-4">
                                <label>Advertisement Image<span class="required">*</span></label>
                            </div>
                            <div class="col-md-7 card p-3">
                                <img class="{{isset($advertisement)?'d-block':'d-none'}} m-auto img-fluid" id="advertisement_image" src="{{isset($advertisement) ? $advertisement->image :''}}" width="150px" height="150px"/>
                                <input class="form-control mt-2" type="file" id="mediaFile" name="advertisement_image"/>
                                @if($errors->first('advertisement_image'))
                                    <div class="text text-danger">
                                        * {{$errors->first('advertisement_image')}}
                                    </div>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 p-0 pl-3">
                            <label>Select Advertisement Layout <span class="required">*</span></label>
                            <div class="mt-2">
                                <select class="form-control form-control-lg mb-3"  name="advertisement_layout_id" id="advertisement_layout_id">
                                    <option value="">Select Advertisement Layout</option>
                                    @foreach($adLayouts as $adLayout)
                                        <option value="{{ $adLayout->id }}" @isset($advertisement)@if($adLayout->id == $advertisement->advertisementLayout->id) selected @endif @endisset>{{ $adLayout->title .' ('. \Str::headline($adLayout->code) .')'}}</option>
                                    @endforeach
                                </select>
                                @if($errors->first('advertisement_layout_id'))
                                    <div class="text text-danger">
                                        * {{$errors->first('advertisement_layout_id')}}
                                    </div>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 p-0 pl-3">
                            <label>Layout Pages</label>
                            <div>
                                <select data-placeholder="Select Page Layout" class="js-example-basic-multiple form-control form-control-lg mb-3" id="layout_pages" name="layout_pages[]" multiple>
                                    @foreach($layoutPages as $k => $layout)
                                        @isset($advertisement)
                                            @php
                                                    $nId = $advertisement->pluckAdvertisementLayoutPageIds();
                                            @endphp
                                        @endisset
                                        <option value="{{ $layout->id }}" @isset($advertisement) {{ !!in_array($layout->id, $nId->toArray())? 'selected' :'' }} @endisset>{{ $layout->name }}</option>
                                    @endforeach

                                </select>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 p-0 pl-3">
                            <label>Title</label>
                            <input class="form-control form-control-lg mb-3" id="title" type="text" name="title" value="{{old('title')?old('title'):(isset($advertisement)?$advertisement->title:'')}}" placeholder="Your Advertisement Title">
                            @if($errors->first('title'))
                                <div class="text text-danger">
                                    {{$errors->first('title')}}
                                </div>
                            @endif
                        </div>

                        <div class="col-md-12 col-sm-12 p-0 pl-3">
                            <label>Url <span class="required">*</span> </label>
                            <input class="form-control form-control-lg mb-3" id="url" type="text" name="url" value="{{old('url')?old('url'):(isset($advertisement)?$advertisement->url:'')}}" placeholder="Your advertisement Url">
                            @if($errors->first('url'))
                                <div class="text text-danger">
                                    {{$errors->first('url')}}
                                </div>
                            @endif
                        </div>
{{--                        <div class="col-md-12 col-sm-12 p-0 pl-3">--}}
{{--                            <label>Order <span class="required">*</span> </label>--}}
{{--                            <input class="form-control form-control-lg mb-3" id="order" type="text" name="order" value="{{old('order')?old('order'):(isset($advertisement)?$advertisement->order:'')}}" placeholder="Your Advertisement Order">--}}
{{--                            @if($errors->first('order'))--}}
{{--                                <div class="text text-danger">--}}
{{--                                    {{$errors->first('order')}}--}}
{{--                                </div>--}}
{{--                            @endif--}}
{{--                        </div>--}}
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
{{--                                @if(isset($advertisement))--}}
{{--                                    <button type="submit" id="update" class="btn btn-sm btn-accent ml-auto" name="status" value="save">--}}
{{--                                        <i class="material-icons">file_copy</i> {{$advertisement->status=='Saved'?'Update':'Save'}}--}}
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
    <script type="text/javascript">
        //Image
        $('#mediaFile').on('change',function(){
            $('#advertisement_image').removeClass('d-none').addClass('d-block');
            $('#advertisement_image').attr('src',window.URL.createObjectURL(this.files[0]));
        });

        //LayoutPage
        $(document).ready(function() {
            $('.js-example-basic-multiple').select2();
        });


    </script>
@endsection
