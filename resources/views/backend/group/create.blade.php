@extends('backend.layouts.app')
@section('content')
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <span class="text-uppercase page-subtitle">Group Page</span>
            <h3 class="page-title">Add New Group</h3>
        </div>
    </div>
    <!-- End Page Header -->
    <form class="add-new-post" action="{{isset($group)?route('group.update', $group):route('group.store')}}" method="post" enctype="multipart/form-data">
        <div class="row">
            <div class="col-lg-9 col-md-12">
                <!-- Add New Post Form -->
                <div class="card card-small mb-3">
                    <div class="card-body">
                        @csrf
                        @if(isset($group))
                            @method('PATCH')
                        @endif

                        <div class="col-md-12 col-sm-12 p-0 pl-3">
                            <label>Title <span class="required">*</span> </label>
                            <input class="form-control form-control-lg mb-3" id="title" type="text" name="title" value="{{old('title')?old('title'):(isset($group)?$group->title:'')}}" placeholder="Your News Title">
                            @if($errors->first('title'))
                                <div class="text text-danger">
                                    {{$errors->first('title')}}
                                </div>
                            @endif
                        </div>

                        <div class="col-md-12 col-sm-12 p-0 pl-3">
                            <label>Slug <span class="required">*</span> </label>
                            <input class="form-control form-control-lg mb-3" id="slug" type="text" name="slug" value="{{old('slug')?old('slug'):(isset($group)?$group->slug:'')}}" placeholder="Your News Slug">
                            @if($errors->first('slug'))
                                <div class="text text-danger">
                                    {{$errors->first('slug')}}
                                </div>
                            @endif
                        </div>

                        <div class="col-md-12 col-sm-12 p-0 pl-3">
                            <label>Select Category <span class="required">*</span> </label>
                            <div class="mt-2">
                                <select data-placeholder="Select Related Categories" class="js-example-basic-multiple form-control form-control-lg mb-3"  name="category_id[]" multiple>
                                    @foreach($categories as $k => $category)
                                        @isset($group)
                                            @php
                                                $nId = \App\Models\GroupCategory::where('group_id', $group->id)->pluck('category_id');
                                            @endphp
                                        @endisset
                                        <option value="{{ $category->id }}" @isset($group) {{ !!in_array($category->id, $nId->toArray())? 'selected' :'' }} @endisset>{{ $category->name }}</option>
                                    @endforeach
                                </select>
                                @if($errors->first('category_id'))
                                    <div class="text text-danger">
                                        {{$errors->first('category_id')}}
                                    </div>
                                @endif
                            </div>
                        </div>

                        <div class="col-md-12 col-sm-12 p-0 pl-3">
                            <label>Position</label>
                            <input class="form-control form-control-lg mb-3" id="position" type="number" name="position" value="{{old('position')?old('position'):(isset($group)?$group->position:'')}}" placeholder="Your News Position">
                            @if($errors->first('position'))
                                <div class="text text-danger">
                                    {{$errors->first('position')}}
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
                                               value="1" {{ (isset($group) && $group->status == 1) || old('status') ? 'checked' : ''}}>
                                        <label class="custom-control-label" for="customSwitch">Is Active</label>
                                    </div>
                                </span>
                            </li>
                            <li class="list-group-item p-3">
                                 <span class="d-flex">
                                    <div class="custom-control">
                                        <input type="hidden" name="show_on_menu" value="0">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch1" name="show_on_menu"
                                               value="1" {{ (isset($group) && $group->show_on_menu == 1) || old('show_on_menu') ? 'checked' : ''}}>
                                        <label class="custom-control-label" for="customSwitch1">ShowOnMenu</label>
                                    </div>
                                </span>
                            </li>
                            <li class="list-group-item p-3">
                                 <span class="d-flex">
                                    <div class="custom-control">
                                        <input type="hidden" name="show_on_homepage" value="0">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch4" name="show_on_homepage"
                                               value="1" {{ (isset($group) && $group->show_on_homepage == 1) || old('show_on_homepage') ? 'checked' : ''}}>
                                        <label class="custom-control-label" for="customSwitch4">ShowOnHomepage</label>
                                    </div>
                                </span>
                            </li>
                            <li class="list-group-item p-3">
                                 <span class="d-flex">
                                    <div class="custom-control">
                                        <input type="hidden" name="show_on_footer" value="0">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch2" name="show_on_footer"
                                               value="1" {{ (isset($group) && $group->show_on_footer == 1) || old('show_on_footer') ? 'checked' : ''}}>
                                        <label class="custom-control-label" for="customSwitch2">ShowOnFooter</label>
                                    </div>
                                </span>
                            </li>
                            {{-- <li class="list-group-item p-3">
                                 <span class="d-flex">
                                    <div class="custom-control">
                                        <input type="hidden" name="is_featured" value="0">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch3" name="is_featured"
                                               value="1" {{ (isset($group) && $group->is_featured == 1) || old('is_featured') ? 'checked' : ''}}>
                                        <label class="custom-control-label" for="customSwitch3">IsFeatured</label>
                                    </div>
                                </span>
                            </li> --}}
                            {{-- <li class="list-group-item p-3">
                                 <span class="d-flex">
                                    <div class="custom-control">
                                        <input type="hidden" name="is_trending" value="0">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch5" name="is_trending"
                                               value="1" {{ (isset($group) && $group->is_trending == 1) || old('is_trending') ? 'checked' : ''}}>
                                        <label class="custom-control-label" for="customSwitch5">IsTrending</label>
                                    </div>
                                </span>
                            </li> --}}

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

    <script type="text/javascript">
        $(document).ready(function() {
            $('.js-example-basic-multiple').select2();
        });

        $("#title").keyup(function(){
            var Text = $(this).val();
            Text = Text.toLowerCase();
            Text = Text.replace(/ /g,'-').replace(/[-]+/g, '-').replace(/,/g,'').replace(/[?]+/g,'');
            $("#slug").val(Text);
        });
    </script>
@endsection
