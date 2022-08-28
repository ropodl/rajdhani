@extends('backend.layouts.app')
@section('content')
<!-- <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" /> -->
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <span class="text-uppercase page-subtitle">News Page</span>
            <h3 class="page-title">Add New News</h3>
        </div>
    </div>
    <!-- End Page Header -->
    <form class="add-new-post" action="{{isset($news)?route('news.update', $news):route('news.store')}}" method="post" enctype="multipart/form-data">
        <div class="row">
            <div class="col-lg-9 col-md-12">
                <!-- Add New Post Form -->
                <div class="card card-small mb-3">
                    <div class="card-body">
                        @csrf
                        @if(isset($news))
                            @method('PATCH')
                        @endif
                        <input type="hidden" name="news_image" value="{{ isset($news)?$news->news_image:'' }}" />
                        <div class="row col-md-12 mb-5">
                            <div class="col-md-4">
                                <label>News Image</label>
                            </div>
                            <div class="col-md-7 card p-3">
                                <img class="{{isset($news)?'d-block':'d-none'}} m-auto" id="news_image" src="{{isset($news) ? $news->media[0]->getFullUrl() :''}}" width="150px" height="150px"/>
                                <input class="form-control mt-2" type="file" id="mediaFile" name="news_image"/>
                                @if($errors->first('news_image'))
                                    <div class="text text-danger">
                                        * {{$errors->first('news_image')}}
                                    </div>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 p-0 pl-3">
                            <label>Select Category <span class="required">*</span></label>
                            <div class="mt-2">
                                <select class="form-control form-control-lg mb-3 category"  name="categories[]" id="category_id" multiple>
                                    <option value="">Select Category</option>
                                    @foreach($categories as $c)
                                        <option value="{{ $c->id }}" @isset($news)@if($c->id == $news->category->id) selected @endif @endisset>{{ $c->name }}</option>
                                    @endforeach
                                </select>
                                @if($errors->first('categories'))
                                    <div class="text text-danger">
                                        * {{$errors->first('categories')}}
                                    </div>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 p-0 pl-3">
                            <label>Title <span class="required">*</span> </label>
                            <input class="form-control form-control-lg mb-3" id="title" type="text" name="title" value="{{old('title')?old('title'):(isset($news)?$news->title:'')}}" placeholder="Your News Title">
                            @if($errors->first('title'))
                                <div class="text text-danger">
                                    {{$errors->first('title')}}
                                </div>
                            @endif
                        </div>

                        <!-- <div class="col-md-12 col-sm-12 p-0 pl-3">
                            <label>Slug <span class="required">*</span> </label>
                            <input class="form-control form-control-lg mb-3" id="slug" type="text" name="slug" value="{{old('slug')?old('slug'):(isset($news)?$news->slug:'')}}" placeholder="Your News Slug">
                            @if($errors->first('slug'))
                                <div class="text text-danger">
                                    {{$errors->first('slug')}}
                                </div>
                            @endif
                        </div> -->
                        <div class="col-md-12 col-sm-12 p-0 pl-3">
                            <label>Select Province</label>
                            <div class="mt-2">
                                <select class="form-control form-control-lg mb-3"  name="province_id">
                                    <option value="">Select Provience</option>
                                    @foreach($provinces as $province)
                                        <option value="{{ $province->id }}" @isset($news)@if($province->id == $news->province_id) selected @endif @endisset>{{ $province->name }}</option>
                                    @endforeach
                                </select>
                                @if($errors->first('province_id'))
                                    <div class="text text-danger">
                                        * {{$errors->first('province_id')}}
                                    </div>
                                @endif
                            </div>
                        </div>

                        <div class="col-md-12 col-sm-12 p-0 pl-3">
                            <label for="message">Description</label>
                            <textarea id="mytextarea" name="description">{!! isset($news)?$news->description:(old('description') ?? '') !!}</textarea>
                            @if($errors->first('description'))
                                <div class="text text-danger">
                                    *{{$errors->first('description')}}
                                </div>
                            @endif
                        </div><br>
                        
                        <div class="col-md-12 col-sm-12 p-0 pl-3">
                            <label>Author </label>
                            <input class="form-control form-control-lg mb-3" id="author" type="text" name="author" value="{{old('author')?old('author'):(isset($news)?$news->author:'')}}" placeholder="Your News Author Name">
                        </div>
                        <br>
                        <div class="col-md-12 col-sm-12 p-0 pl-3">
                            <label>Related News</label>
                            <div>
                                <select data-placeholder="Select Related News" class="js-example-basic-multiple form-control form-control-lg mb-3" id="related_news" name="related_news[]" multiple>
                                    @isset($news)
                                        @foreach($newses as $k => $new)
                                            @php
                                                $nId = $news->pluckRelatedNewsIds();
                                            @endphp
                                            <option value="{{ $new->id }}" {{ !!in_array($new->id, $nId->toArray())? 'selected' :'' }}>{{ $new->title }}</option>
                                        @endforeach
                                    @endisset

                                </select>
                            </div>
                        </div>

                        <div class="col-md-12 col-sm-12 p-0 pl-3">
                            <label>Tags</label>
                            <div>
                                <select data-placeholder="Select Tags" class="js-example-placeholder-multiple form-control form-control-lg mb-3" id="tags" name="tags[]" multiple>
                                        @foreach($tags as $k => $tag)
                                            @isset($news)
                                                @php
                                                    $nId = $news->tags->pluck('id');
                                                @endphp
                                            @endisset
                                            <option value="{{ $tag->id }}" @isset($news){{ !!in_array($tag->id, $nId->toArray())? 'selected' :'' }}@endisset>{{ $tag->name }}</option>
                                        @endforeach
                                </select>
                            </div>
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
                                               value="1" {{ (isset($news) && $news->status == 1) || old('status') ? 'checked' : ''}}>
                                        <label class="custom-control-label" for="customSwitch">Is Active</label>
                                    </div>
                                </span>
                            </li>

                            <li class="list-group-item p-3">
                                 <span class="d-flex">
                                    <div class="custom-control">
                                        <input type="hidden" name="is_main_news" value="0">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch1" name="is_main_news"
                                               value="1" {{ (isset($news) && $news->is_main_news == 1) || old('is_main_news') ? 'checked' : ''}}>
                                        <label class="custom-control-label" for="customSwitch1">Is Main News</label>
                                    </div>
                                </span>
                            </li>

                            <li class="list-group-item p-3">
                                <span class="d-flex">
                                    <div class="custom-control">
                                        <input type="hidden" name="is_photo_feature" value="0">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch3" name="is_photo_feature"
                                            value="1" {{ (isset($news) && $news->is_photo_feature == 1) || old('is_photo_feature') ? 'checked' : ''}}>
                                        <label class="custom-control-label" for="customSwitch3">Is Photo Feature</label>
                                    </div>
                                </span>
                            </li>

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

@endsection
@push('js')
<!-- <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script> -->

<!-- <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script> -->

<script type="text/javascript">
        
        //Slug
        
        $(document).ready(function() {
            $("#title").keyup(function(){
                var Text = $(this).val();
                Text = Text.toLowerCase();
                Text = Text.replace(/ /g,'-').replace(/[-]+/g, '-').replace(/,/g,'').replace(/[']+/g,'').replace(/["]+/g,'').replace(/[?]+/g,'');
                $("#slug").val(Text);
            });
    
            //Image
            $('#mediaFile').on('change',function(){
                $('#news_image').removeClass('d-none').addClass('d-block');
                $('#news_image').attr('src',window.URL.createObjectURL(this.files[0]));
            });
            $('.category').select2();
            $(".js-example-placeholder-multiple").select2({
                tags:true
            });
            
            //tags
        });

    </script>
    
@endpush