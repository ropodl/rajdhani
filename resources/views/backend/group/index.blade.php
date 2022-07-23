@extends('backend.layouts.app')
@section('content')
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <!-- <span class="text-uppercase page-subtitle">Overview</span> -->
            <h3 class="page-title">Group List</h3>
            <a href="{{route('group.create')}}" class="btn btn-primary mt-4 ml-2"><i class="fa fa-plus"></i> Add New Group</a>
        </div>
    </div>
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="row">
        <div class="col">
            <div class="card card-small mb-4">
                <div class="card-body p-3 text-center">
                    <div class="table-responsive p-1">
                        <table id="event-table" class="table table-striped table-bordered" style="width:100%">
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th>Status</th>
                                <th>ShowOnMenu</th>
                                <th>ShowOnHomepage</th>
                                <th>ShowOnFooter</th>
                                {{-- <th>IsFeatured</th>
                                <th>IsTrending</th> --}}
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                                @foreach($grps as $group)
                                    <tr>
                                        <td>{{$group->title}}</td>
                                        <td class="text-center">
                                            @if($group->status==1)
                                                <span class="shadow-none badge badge-success">Active</span>
                                            @else
                                                <span class="shadow-none badge badge-danger">Inactive</span>
                                            @endif
                                        </td>
                                        <td class="text-center">
                                            @if($group->show_on_menu==1)
                                                <span class="shadow-none badge badge-success">Active</span>
                                            @else
                                                <span class="shadow-none badge badge-danger">Inactive</span>
                                            @endif
                                        </td>
                                        <td class="text-center">
                                            @if($group->show_on_homepage==1)
                                                <span class="shadow-none badge badge-success">Active</span>
                                            @else
                                                <span class="shadow-none badge badge-danger">Inactive</span>
                                            @endif
                                        </td>
                                        <td class="text-center">
                                            @if($group->show_on_footer==1)
                                                <span class="shadow-none badge badge-success">Active</span>
                                            @else
                                                <span class="shadow-none badge badge-danger">Inactive</span>
                                            @endif
                                        </td>
                                        {{-- <td class="text-center">
                                            @if($group->is_featured==1)
                                                <span class="shadow-none badge badge-success">Active</span>
                                            @else
                                                <span class="shadow-none badge badge-danger">Inactive</span>
                                            @endif
                                        </td>
                                        <td class="text-center">
                                            @if($group->is_trending==1)
                                                <span class="shadow-none badge badge-success">Active</span>
                                            @else
                                                <span class="shadow-none badge badge-danger">Inactive</span>
                                            @endif
                                        </td> --}}
                                        <td class="col-md-2 col-sm-4">
                                            <div class="d-flex justify-content-center">
                                                <a class="btn btn-warning btn-sm mr-2" href="{{route('group.edit',$group)}}">Edit</a>
                                                <form action="{{route('group.destroy',$group)}}" method="post" onsubmit="return confirm('Are you sure?')">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-sm btn-danger mr-2"><i class="fa fa-trash text-white" title="Delete"></i> </button>
                                                </form>
{{--                                                <a class="btn btn-info btn-sm mr-2" href="{{route('group_category.sort',$group)}}">Manage Categories</a>--}}
                                            </div>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Default Light Table -->
    <script type="text/javascript">
        $(document).ready(function() {
            setTimeout(function() {
                $('.alert .close').click()
            }, 3000);
            // $('#event-table').DataTable({
            //     "columnDefs": [{
            //         "width": "100px",
            //         "targets": 0
            //     },
            //         {
            //             "width": "150px",
            //             "targets": 1
            //         },
            //         {
            //             "width": "150px",
            //             "targets": 2
            //         },
            //         {
            //             "width": "70px",
            //             "targets": 3
            //         },
            //     ],
            // });
        });
    </script>
@endsection
