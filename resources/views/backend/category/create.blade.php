@extends('backend.layouts.app')
@section('content')
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <span class="text-uppercase page-subtitle">Category Page</span>
            <h3 class="page-title">Add New Category</h3>
        </div>
    </div>
    <!-- End Page Header -->
    <form class="add-new-post" action="{{isset($category)?route('category.update', $category):route('category.store')}}" method="post" enctype="multipart/form-data">
        <div class="row">
            <div class="col-lg-9 col-md-12">
                <!-- Add New Post Form -->
                <div class="card card-small mb-3">
                    <div class="card-body">
                        @csrf
                        @if(isset($category))
                            @method('PATCH')
                        @endif
{{--                        <input type="hidden" name="category_image" value="{{ isset($category)?$category->category_image:'empty' }}" />--}}
{{--                        <div class="row col-md-12 mb-5">--}}
{{--                            <div class="col-md-4">--}}
{{--                                <label>Category Image<span class="required">*</span></label>--}}
{{--                            </div>--}}
{{--                            <div class="col-md-7 card p-3">--}}
{{--                                <img class="{{isset($category)?'d-block':'d-none'}} m-auto" id="category_image" src="{{isset($category) ? $category->media[0]->getFullUrl() :''}}" width="150px" height="150px"/>--}}
{{--                                <input class="form-control mt-2" type="file" id="mediaFile" name="category_image"/>--}}
{{--                                @if($errors->first('category_image'))--}}
{{--                                    <div class="text text-danger">--}}
{{--                                        * {{$errors->first('category_image')}}--}}
{{--                                    </div>--}}
{{--                                @endif--}}
{{--                            </div>--}}
{{--                        </div>--}}
                        <div class="col-md-12 col-sm-12 p-0 pl-3">
                            <label>Name <span class="required">*</span> </label>
                            <input class="form-control form-control-lg mb-3" id="name" type="text" name="name" value="{{old('name')?old('name'):(isset($category)?$category->name:'')}}" placeholder="Your Category Name">
                            @if($errors->first('name'))
                                <div class="text text-danger">
                                    {{$errors->first('name')}}
                                </div>
                            @endif
                        </div>

                        <div class="col-md-12 col-sm-12 p-0 pl-3">
                            <label>Slug <span class="required">*</span> </label>
                            <input class="form-control form-control-lg mb-3" id="slug" type="text" name="slug" value="{{old('slug')?old('slug'):(isset($category)?$category->slug:'')}}" placeholder="Your category Slug">
                            @if($errors->first('slug'))
                                <div class="text text-danger">
                                    {{$errors->first('slug')}}
                                </div>
                            @endif
                        </div>

                        <div class="col-md-12 col-sm-12 p-0 pl-3">
                            <label>Sort <span class="required">*</span> </label>
                            <input class="form-control form-control-lg mb-3" id="sort" type="number" name="sort" value="{{old('sort')?old('sort'):(isset($category)?$category->sort:'')}}" placeholder="Your Category Sort">
                            @if($errors->first('sort'))
                                <div class="text text-danger">
                                    {{$errors->first('sort')}}
                                </div>
                            @endif
                        </div>
                        <div class="col-md-12 col-sm-12 p-0 pl-3">
                            <label for="message">Description<span class="required">*</span> </label>
                            <textarea id="mytextarea" name="description">{!! isset($category)?$category->description:(old('description') ?? '') !!}</textarea>
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
                                               value="1" {{ (isset($category) && $category->status == 1) || old('status') ? 'checked' : ''}}>
                                        <label class="custom-control-label" for="customSwitch">Is Active</label>
                                    </div>
                                </span>
                            </li>
                            <li class="list-group-item p-3">
                                <span class="d-flex">
                                   <div class="custom-control">
                                       <input type="hidden" name="show_on_menu" value="0">
                                       <input type="checkbox" class="custom-control-input" id="show_on_menu" name="show_on_menu"
                                              value="1" {{ (isset($category) && $category->show_on_menu == 1) || old('show_on_menu') ? 'checked' : ''}}>
                                       <label class="custom-control-label" for="show_on_menu">Show on Menu</label>
                                   </div>
                               </span>
                           </li>
                            <li class="list-group-item p-3">
                                 <span class="d-flex">
                                    <div class="custom-control">
                                        <input type="hidden" name="show_on_homepage" value="0">
                                        <input type="checkbox" class="custom-control-input" id="show_on_homepage" name="show_on_homepage"
                                               value="1" {{ (isset($category) && $category->show_on_homepage == 1) || old('show_on_homepage') ? 'checked' : ''}}>
                                        <label class="custom-control-label" for="show_on_homepage">Show On Homepage</label>
                                    </div>
                                </span>
                            </li>
                            <li class="list-group-item p-3">
                                 <span class="d-flex">
                                    <div class="custom-control">
                                        <input type="hidden" name="show_on_footer" value="0">
                                        <input type="checkbox" class="custom-control-input" id="show_on_footer" name="show_on_footer"
                                               value="1" {{ (isset($category) && $category->show_on_footer == 1) || old('show_on_footer') ? 'checked' : ''}}>
                                        <label class="custom-control-label" for="show_on_footer">Show On Footer</label>
                                    </div>
                                </span>
                            </li>
                            <li class="list-group-item p-3">
                                 <span class="d-flex">
                                    <div class="custom-control">
                                        <input type="hidden" name="under_news" value="0">
                                        <input type="checkbox" class="custom-control-input" id="under_news" name="under_news"
                                               value="1" {{ (isset($category) && $category->under_news == 1) || old('under_news') ? 'checked' : ''}}>
                                        <label class="custom-control-label" for="under_news">Display under News Category</label>
                                    </div>
                                </span>
                            </li>
                            <li class="list-group-item d-flex px-3">
{{--                                @if(isset($category))--}}
{{--                                    <button type="submit" id="update" class="btn btn-sm btn-accent ml-auto" name="status" value="save">--}}
{{--                                        <i class="material-icons">file_copy</i> {{$category->status=='Saved'?'Update':'Save'}}--}}
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
        $(document).ready(function() {
            $('.js-example-basic-multiple').select2();
        });

        $("#name").keyup(function(){
            var Text = $(this).val();
            Text = Text.toLowerCase();
            Text = Text.replace(/ /g,'-').replace(/[-]+/g, '-').replace(/,/g,'').replace(/[?]+/g,'');
            $("#slug").val(Text);
        });

        //Under News and Show On Menu
        $('#show_on_menu').click(function (){
            var underNews = $('#under_news').is(':checked');
           if(underNews === true){
               $('#show_on_menu').prop('checked', false); // Unchecks it
           }
        })
        $('#under_news').click(function (){
            var underNews = $('#show_on_menu').is(':checked');
            if(underNews === true){
                $('#under_news').prop('checked', false); // Unchecks it
            }
        })
    </script>
@endsection
