@extends('backend.layouts.app')

@section('styles')
    <link href="{{asset('backend/plugins/drag-and-drop/dragula/dragula.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('backend/plugins/drag-and-drop/dragula/example.css')}}" rel="stylesheet" type="text/css" />
@endsection

@section('content')

    {{--    {!! Form::open(['route' => ['group.book.sort.store', $group], 'method' => 'post','files' => true]) !!}--}}
    {{--    @csrf--}}
    <div class="row">
        <div class="col-lg-8 layout-spacing layout-top-spacing px-5">
            <div class="statbox widget box box-shadow">
                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                    <div class="page-header row no-gutters py-4">
                        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
                            <!-- <span class="text-uppercase page-subtitle">Overview</span> -->
                            <h3 class="page-title">Sort Advertisement</h3>
                        </div>
                    </div>
                    <div class="widget-content widget-content-area">

                        <div class='parent ex-1'>
                            <div class="row">

                                <div class="col-sm-12">
                                    <div id='left-defaults' class='dragula'>
                                        {{--                                        @foreach($books as $book)--}}

                                        <div class="media  d-md-flex d-block text-sm-left text-center">
                                            <input type="hidden" name="sort[]" value="123">
                                            <div class="media-body">
                                                <div class="d-xl-flex d-block justify-content-between">
                                                    <div class="">
                                                        <h6 class="">Advertisement Name</h6>
                                                    </div>
                                                    <div>
                                                        <a class="shadow-none badge badge-danger text-white" href="#" data-toggle="tooltip" data-placement="top" title="Delete">
                                                            <i class="far fa-trash-alt"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {{--                                        @endforeach--}}


                                        <div class="media  d-md-flex d-block text-sm-left text-center">
                                            <input type="hidden" name="sort[]" value="123">
                                            <div class="media-body">
                                                <div class="d-xl-flex d-block justify-content-between">
                                                    <div class="">
                                                        <h6 class="">Advertisement Name</h6>
                                                    </div>
                                                    <div>
                                                        <a class="shadow-none badge badge-danger text-white" href="#" data-toggle="tooltip" data-placement="top" title="Delete">
                                                            <i class="far fa-trash-alt"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>




                                        <div class="media  d-md-flex d-block text-sm-left text-center">
                                            <input type="hidden" name="sort[]" value="123">
                                            <div class="media-body">
                                                <div class="d-xl-flex d-block justify-content-between">
                                                    <div class="">
                                                        <h6 class="">Advertisement Name</h6>
                                                    </div>
                                                    <div>
                                                        <a class="shadow-none badge badge-danger text-white" href="#" data-toggle="tooltip" data-placement="top" title="Delete">
                                                            <i class="far fa-trash-alt"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>


        <div class="col-lg-4 layout-top-spacing px-5">
            <div class="statbox widget box box-shadow">
                <div class="widget-header">
                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                        <h4>Actions</h4>
                    </div>
                </div>
                <div class="widget-content widget-content-area">
                    {{--                    {!! Form::button('Save', ['type' => 'submit', 'class' => 'btn btn-sm btn-success mt-3 float-right']) !!}--}}
                    {{--                    <a href="{{route('group.index')}}">--}}
                    {{--                        {!! Form::button('Back', ['type' => 'button', 'class' => 'btn btn-sm btn-danger mt-3']) !!}--}}
                    {{--                    </a>--}}
                </div>
            </div>
        </div>

    </div>

    {{--    {!! Form::close() !!}--}}

    <!-- BEGIN PAGE LEVEL SCRIPTS -->
    <script src="{{asset('backend/plugins/drag-and-drop/dragula/dragula.min.js')}}"></script>
    <script src="{{asset('backend/plugins/drag-and-drop/dragula/custom-dragula.js')}}"></script>
    <!-- END PAGE LEVEL SCRIPTS -->
@endsection
