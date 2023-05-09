@extends('backend.layouts.app')
@section('content')
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <!-- <span class="text-uppercase page-subtitle">Overview</span> -->
            <h3 class="page-title">News List</h3>
            <a href="{{ route('news.create', ['list' => $news]) }}" class="btn btn-primary mt-4 ml-2"><i class="fa fa-plus"></i>
                Add New News</a>
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
                                    <th>Date</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Main News</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($news as $new)
                                    <tr>
                                        <td class="font-weight-bold">
                                            {{ \Carbon\Carbon::parse($new->created_at)->format('Y M d H:i A') }}
                                        </td>
                                        <td>{{ $new->title }}</td>
                                        <td>{{ $new->category->name }}</td>
                                        <td class="text-center">
                                            @if ($new->is_main_news == 1)
                                                <span class="shadow-none badge badge-success">Yes</span>
                                            @else
                                                <span class="shadow-none badge badge-danger">No</span>
                                            @endif
                                        </td>
                                        <td class="text-center">
                                            @if ($new->status == 1)
                                                <span class="shadow-none badge badge-success">Active</span>
                                            @else
                                                <span class="shadow-none badge badge-danger">Inactive</span>
                                            @endif
                                        </td>
                                        <td class="col-md-2 col-sm-4">
                                            <div class="d-flex justify-content-center">
                                                <a class="btn btn-warning btn-sm mr-2"
                                                    href="{{ route('news.edit', $new) }}">Edit</a>
                                                <form action="{{ route('news.destroy', $new) }}" method="post"
                                                    onsubmit="return confirm('Are you sure?')">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-sm btn-danger mr-2"><i
                                                            class="fa fa-trash text-white" title="Delete"></i> </button>
                                                </form>
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
            $('#event-table').DataTable({
                "columnDefs": [{
                        "width": "100",
                        "targets": 0
                    },
                    {
                        "width": "20",
                        "targets": 1
                    },
                    {
                        "width": "60",
                        "targets": 2
                    },
                    {
                        "width": "5%",
                        "targets": 3
                    },
                    {
                        "width": "5%",
                        "targets": 4
                    },
                    {
                        "width": "5%",
                        "targets": 5
                    },
                    {
                        "width": "10%",
                        "targets": 6
                    },
                ],
            });
        });
    </script>
@endsection
