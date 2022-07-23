@extends('backend.layouts.app')
@section('styles')
    <style>
        .main-news .media img{
            height: 100px;
            width: 140px;
            object-fit: cover;
        }
    </style>
@endsection
@section('content')
    <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <!-- <span class="text-uppercase page-subtitle">Overview</span> -->
            <h3 class="page-title">Main News</h3>
            <button class="btn btn-primary mt-4 ml-2" id="mainNewsButton"><i class="fa fa-plus"></i> Add Main News</button>
        </div>
    </div>
    <div id="addMainNews" class="bg-white pl-3 pt-1">
        <form action="{{route('main_news.store')}}" method="post">
            @csrf
            <div class="row align-items-center">
                <div class="col-md-8 col-sm-8 p-0 pl-3">
                    <label>Select News <span class="required">*</span></label>
                    <div class="mt-2">
                        <select class="form-control form-control-lg mb-3"  name="news_id" required>
                            <option value="">Select Main News</option>
                            @foreach($news as $new)
                                <option value="{{ $new->id }}">{{ $new->title }}</option>
                            @endforeach
                        </select>
                        @if($errors->first('province_id'))
                            <div class="text text-danger">
                                * {{$errors->first('province_id')}}
                            </div>
                        @endif
                    </div>
                </div>
                <div class="col-md-4 col-sm-4 p-0 pl-3 text-center">
                    <button class="btn btn-info" type="submit">Add Main News</button>
{{--                    <button class="btn btn-primary mt-4 ml-2" id="mainNewsButton"><i class="fa fa-plus"></i> Add Main News</button>--}}
                </div>
            </div>
        </form>
    </div>
    <div class="main-news">
        <table class="table">
            <thead>
            <tr>
                <th scope="col" style="width: 100px">S.N</th>
                <th scope="col">News</th>
                <th scope="col" style="width: 200px">Action</th>
            </tr>
            </thead>
            <tbody>
            @foreach($mainNews as $news)
            <tr>
                <th scope="row">{{ $loop->iteration }}</th>
                <td>
                    <div class="media">
                        <img class="mr-3" src="{{$news->image}}" alt="Generic placeholder image">
                        <div class="media-body">
                            <h5 class="mt-0">{{$news->title}}</h5>

                        </div>
                    </div>
                </td>
                <td class="col-md-2 col-sm-4">
                    <div>
                        <form action="{{route('main_news.delete', $news->id)}}" method="post" onsubmit="return confirm('Are you sure?')">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-sm btn-danger mr-2"><i class="fa fa-trash text-white" title="Delete"></i> </button>
                        </form>
                    </div>
                </td>
            </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection
@section('js')
    <script>
        $(document).ready(function (){
            $('#addMainNews').hide();
            $('#mainNewsButton').click(function (){
                $('#addMainNews').toggle();
            });
        });
    </script>
@endsection

