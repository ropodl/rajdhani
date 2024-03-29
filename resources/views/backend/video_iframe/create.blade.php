@extends('backend.layouts.app')
@section('content')
<!-- Page Header -->
<div class="page-header row no-gutters py-4">
	<div class="col-12 col-sm-4 text-center text-sm-left mb-0">
		<span class="text-uppercase page-subtitle">Settings</span>
		<h3 class="page-title">Social Media Links</h3>
	</div>
</div>
<!-- End Page Header -->

<form class="row m-0 add-new-post" action="{{route('video_iframe.store')}}" method="POST" enctype="multipart/form-data">
{{-- <div class="row"> --}}
	<div class="col-lg-9 col-md-12">
		<!-- Add New Post Form -->
		<div class="card card-small mb-3">
			<div class="card-body">
                @csrf
                @if(isset($edit))
                    @method('POST')
                <input type="hidden" name="id" value="{{$edit->id}}" />
                @endif
                <div class="row">
                    <div class="col-md-12 col-sm-12 p-2 pl-3">
                        <label for="iframe">Video Iframe Link</label>
                        <textarea class="form-control form-control-lg mb-1" id="iframe" type="text" name="iframe" placeholder="Your video iframe link">{{old('iframe')}}</textarea>
                        @if($errors->first('iframe'))
                            <div class="text text-danger">
                                {{$errors->first('iframe')}}
                            </div>
                        @endif
                    </div>
                    <div class="col-md-12 col-sm-12 p-2 pl-3">
                        <label for="sort">Sort</label>
                        <input class="form-control form-control-lg mb-1" id="sort" type="text" name="sort" value="{{old('sort')}}" placeholder="Sort Video">
                        @if($errors->first('sort'))
                            <div class="text text-danger">
                                {{$errors->first('sort')}}
                            </div>
                        @endif
                    </div>
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
							<strong class="mr-1">Status:</strong>@if(isset($edit))<span class="text text-success" >Created </span>@else <span class="text text-danger" >Not Created</span> @endif
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
@endsection
