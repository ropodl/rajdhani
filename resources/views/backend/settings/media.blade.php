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

<form class="row m-0 add-new-post" action="{{route('social_media_link.store')}}" method="POST" enctype="multipart/form-data">
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
                    <div class="col-md-6 col-sm-6 p-0 pl-3">
                        <label for="facebook_link">Facebook Link</label>
                        <input class="form-control form-control-lg mb-1" id="facebook_link" type="text" name="facebook_link" value="{{old('facebook_link')?old('facebook_link'):(isset($edit)?$edit->facebook_link:'')}}" placeholder="Your facebook link">
                        @if($errors->first('facebook_link'))
                            <div class="text text-danger">
                                {{$errors->first('facebook_link')}}
                            </div>
                        @endif
                    </div>
                    <div class="col-md-6 col-sm-6 p-0 pl-3">
                        <label for="youtube_link">Youtube Link</label>
                        <input class="form-control form-control-lg mb-1" id="youtube_link" type="text" name="youtube_link" value="{{old('youtube_link')?old('youtube_link'):(isset($edit)?$edit->youtube_link:'')}}" placeholder="Your youtube link">
                        @if($errors->first('youtube_link'))
                            <div class="text text-danger">
                                {{$errors->first('youtube_link')}}
                            </div>
                        @endif
                    </div>
                    <div class="col-md-6 col-sm-6 p-0 pl-3">
                        <label for="twitter_link">Twitter Link </label>
                        <input class="form-control form-control-lg mb-1" id="twitter_link" type="text" name="twitter_link" value="{{old('twitter_link')?old('twitter_link'):(isset($edit)?$edit->twitter_link:'')}}" placeholder="Your youtube link">
                        @if($errors->first('twitter_link'))
                            <div class="text text-danger">
                                {{$errors->first('twitter_link')}}
                            </div>
                        @endif
                    </div>
                    <div class="col-md-6 col-sm-6 p-0 pl-3">
                        <label for="linkedin_link">Linkedin Link</label>
                        <input class="form-control form-control-lg mb-1" id="linkedin_link" type="text" name="linkedin_link" value="{{old('linkedin_link')?old('linkedin_link'):(isset($edit)?$edit->linkedin_link:'')}}" placeholder="Your linkedin link">
                        @if($errors->first('linkedin_link'))
                            <div class="text text-danger">
                                {{$errors->first('linkedin_link')}}
                            </div>
                        @endif
                    </div>
                    <div class="col-md-6 col-sm-6 p-0 pl-3">
                        <label for="instagram_link">Instagram Link </label>
                        <input class="form-control form-control-lg mb-1" id="instagram_link" type="text" name="instagram_link" value="{{old('instagram_link')?old('instagram_link'):(isset($edit)?$edit->instagram_link:'')}}" placeholder="Your instagram link">
                        @if($errors->first('instagram_link'))
                            <div class="text text-danger">
                                {{$errors->first('instagram_link')}}
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
