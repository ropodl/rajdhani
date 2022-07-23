@extends('backend.layouts.app')
@section('content')
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <span class="text-uppercase page-subtitle">Settings</span>
            <h3 class="page-title">Site Setting</h3>
        </div>
    </div>
    <!-- End Page Header -->

    <form class="row m-0 add-new-post" action="{{route('site-setting.store')}}" method="POST"
          enctype="multipart/form-data">
        {{-- <div class="row"> --}}
        <div class="col-lg-9 col-md-12">
            <!-- Add New Post Form -->
            <div class="card card-small mb-3">
                <div class="card-body">
                    @csrf
                    @if(isset($edit))
                        @method('POST')
                        <input type="hidden" name="id" value="{{$edit->id}}"/>
                    @endif
                    <div class="col-md-12 col-sm-12 p-0 pl-3">
                        <div class="row col-md-12 mb-5">
                            <div class="col-md-4">
                                <label>Logo Image<span class="required">*</span></label>
                            </div>
                            <div class="col-md-7 card p-3">
                                <img class="{{isset($edit)?'d-block':''}} m-auto" id="logo"
                                     src="{{isset($edit) ? $edit->logo : ''}}"
                                     width="150px" height="150px"/>
                                <input class="form-control mt-2" type="file" id="mediaFile" name="logo"/>
                                @if($errors->first('logo'))
                                    <div class="text text-danger">
                                        * {{$errors->first('logo')}}
                                    </div>
                                @endif
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-sm-12 p-0 pl-3">
                        <div class="row col-md-12 mb-5">
                            <div class="col-md-4">
                                <label>Logo Image With Text<span class="required">*</span></label>
                            </div>
                            <div class="col-md-7 card p-3">
                                <img class="{{isset($edit)?'d-block':''}} m-auto" id="logoWithText"
                                     src="{{isset($edit) ? $edit->logo_with_text : ''}}"
                                     width="150px" height="150px"/>
                                <input class="form-control mt-2" type="file" id="mediaFileWithText" name="logo_with_text"/>
                                @if($errors->first('logo_with_text'))
                                    <div class="text text-danger">
                                        * {{$errors->first('logo_with_text')}}
                                    </div>
                                @endif
                            </div>
                        </div>
                    </div>
                    <div class="row pr-3">
                        <div class="col-md-6 col-sm-6 p-0 pl-3">
                            <label for="name" class="">Name <span class="required">*</span> </label>
                            <input class="form-control form-control-lg mb-1" id="name" type="text" name="name"
                                   value="{{old('name')?old('name'):(isset($edit)?$edit->name:'')}}"
                                   placeholder="Input Name">
                            @if($errors->first('name'))
                                <div class="text text-danger ">
                                    {{$errors->first('name')}}
                                </div>
                            @endif
                        </div>
                        <div class="col-md-6 col-sm-6 p-0 pl-3">
                            <label for="executive_manager" class="">Executive Manager </label>
                            <input class="form-control form-control-lg mb1" id="executive_manager" type="text"
                                   name="executive_manager"
                                   value="{{old('executive_manager')?old('executive_manager'):(isset($edit)?$edit->executive_manager:'')}}"
                                   placeholder="Input Executive Manager">
                            @if($errors->first('executive_manager'))
                                <div class="text text-danger">
                                    {{$errors->first('executive_manager')}}
                                </div>
                            @endif
                        </div>
                        <div class="col-md-6 col-sm-6 p-0 pl-3">
                            <label for="editor" class="">Editor </label>
                            <input class="form-control form-control-lg mb1" id="editor" type="text" name="editor"
                                   value="{{old('editor')?old('editor'):(isset($edit)?$edit->editor:'')}}"
                                   placeholder="Input Editor">
                            @if($errors->first('editor'))
                                <div class="text text-danger">
                                    {{$errors->first('editor')}}
                                </div>
                            @endif
                        </div>
                        <div class="col-md-6 col-sm-6 p-0 pl-3">
                            <label for="executive_editor" class=""> Executive Editor</label>
                            <input class="form-control form-control-lg mb1" id="executive_editor" type="text"
                                   name="executive_editor"
                                   value="{{old('executive_editor')?old('executive_editor'):(isset($edit)?$edit->executive_editor:'')}}"
                                   placeholder="Input Executive Editor">
                            @if($errors->first('executive_editor'))
                                <div class="text text-danger">
                                    {{$errors->first('executive_editor')}}
                                </div>
                            @endif
                        </div>
                        <div class="col-md-6 col-sm-6 p-0 pl-3">
                            <label for="registration_no" class=""> Registration Number<span class="required">*</span>
                            </label>
                            <input class="form-control form-control-lg mb1" id="registration_no" type="text"
                                   name="registration_no"
                                   value="{{old('registration_no')?old('registration_no'):(isset($edit)?$edit->registration_no:'')}}"
                                   placeholder="Input Registration Number">
                            @if($errors->first('registration_no'))
                                <div class="text text-danger">
                                    {{$errors->first('registration_no')}}
                                </div>
                            @endif
                        </div>
                        <div class="col-md-6 col-sm-6 p-0 pl-3">
                            <label for="address" class=""> Address<span class="required">*</span> </label>
                            <input class="form-control form-control-lg mb1" id="address" type="text" name="address"
                                   value="{{old('address')?old('address'):(isset($edit)?$edit->address:'')}}"
                                   placeholder="Input Address">
                            @if($errors->first('address'))
                                <div class="text text-danger">
                                    {{$errors->first('address')}}
                                </div>
                            @endif
                        </div>
                    </div>
                    <div class="row pr-3">
                        <div class="col-md-6 col-sm-6 p-0 pl-3">
                            <label for="phone1">Phone Number <span class="required">*</span> </label>
                            <input class="form-control form-control-lg mb-1" id="phone1" type="text" name="phone1"
                                   value="{{old('phone1')?old('phone1'):(isset($edit)?$edit->phone1:'')}}"
                                   placeholder="Your phone number">
                            @if($errors->first('phone1'))
                                <div class="text text-danger">
                                    {{$errors->first('phone1')}}
                                </div>
                            @endif
                        </div>
                        <div class="col-md-6 col-sm-6 p-0 pl-3">
                            <label for="phone2">Phone Number (alternative) </label>
                            <input class="form-control form-control-lg mb-1" id="phone2" type="text" name="phone2"
                                   value="{{old('phone2')?old('phone2'):(isset($edit)?$edit->phone2:'')}}"
                                   placeholder="Your phone number (alternative).">
                            @if($errors->first('phone2'))
                                <div class="text text-danger">
                                    {{$errors->first('phone2')}}
                                </div>
                            @endif
                        </div>
                    </div>
                    <div class="row pr-3">
                        <div class="col-md-6 col-sm-6 p-0 pl-3">
                            <label for=email>Email Address <span class="required">*</span> </label>
                            <input class="form-control form-control-lg mb-1 " id="email" type="text" name="email"
                                   value="{{old('email')?old('email'):(isset($edit)?$edit->email:'')}}"
                                   placeholder="Your email address">
                            @if($errors->first('email'))
                                <div class="text text-danger">
                                    {{$errors->first('email')}}
                                </div>
                            @endif
                        </div>
                    </div>
                    <div class="col-md-12 col-sm-12 p-0 pl-3">
                        <label>Map Iframe Location </label>
                        @if($errors->first('map_iframe'))
                            <div class="text text-danger">
                                *{{$errors->first('map_iframe')}}
                            </div>
                        @endif
                        <textarea class="form-control" rows="4"
                                  name="map_iframe">{!! isset($edit)?$edit->map_iframe:(old('map_iframe') ?? '') !!}</textarea>
                    </div>

                    <br>
                    <div class="col-md-12 col-sm-12 p-0 pl-3">
                        <label>Description<span class="required">*</span> </label>
                        @if($errors->first('description'))
                            <div class="text text-danger">
                                *{{$errors->first('description')}}
                            </div>
                        @endif
                        <textarea id="mytextarea"
                                  name="description">{!! isset($edit)?$edit->description:(old('description') ?? '') !!}</textarea>
                    </div>
                </div>
            </div>
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
						<span class="d-flex mb-2">
							<i class="material-icons mr-1">flag</i>
							<strong class="mr-1">Status:</strong>@if(isset($edit))<span class="text text-success">Created </span>@else
                                <span class="text text-danger">Not Created</span> @endif
						</span>
                        </li>
                        <li class="list-group-item d-flex px-3">
                            @if(isset($edit))
                                <button type="submit" id="update" class="btn btn-sm btn-accent ml-auto">
                                    <i class="material-icons">file_copy</i> Update
                                </button>
                            @else
                                <button type="submit" id="save" class="btn btn-sm btn-accent ml-auto">
                                    <i class="material-icons">file_copy</i> Publish
                                </button>
                            @endif
                        </li>
                    </ul>
                </div>
            </div>
            <!-- / Post Overview -->
        </div>
    </form>
    {{-- </div> --}}

    <script type="text/javascript">
        $('#mediaFile').on('change', function () {
            $('#logo').removeClass('d-none').addClass('d-block');
            $('#logo').attr('src', window.URL.createObjectURL(this.files[0]));
        });
        $('#mediaFileWithText').on('change', function () {
            $('#logoWithText').removeClass('d-none').addClass('d-block');
            $('#logoWithText').attr('src', window.URL.createObjectURL(this.files[0]));
        });
        // $(function() {
        // 	$('#save').on('click', function(e) {
        // 		e.preventDefault();
        // 		$('form').submit();
        // 	})
        // 	$('#update').on('click', function(e) {
        // 		e.preventDefault()
        // 		$('form').submit();

        // 	});
        // });
    </script>

@endsection
