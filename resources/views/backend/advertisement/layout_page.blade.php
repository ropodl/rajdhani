@extends('backend.layouts.app')
@section('content')
<?php
    use Carbon\Carbon;
?>
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <!-- <span class="text-uppercase page-subtitle">Overview</span> -->
            <h3 class="page-title">Advertisement Layout Pages list</h3>
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
                                <th>Name</th>
                                <th>Code</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($layoutPages as $page)
                                <tr>
                                    <td class="font-weight-bold">{{ Carbon::parse($page->created_at)->format('Y M d H:i A')}}
                                    </td>
                                    <td>{{$page->name}}</td>
                                    <td>{{$page->code}}</td>
                                    <td class="col-md-2 col-sm-4">
                                        <div class="d-flex justify-content-center">
                                            <a class="btn btn-info btn-sm mr-2" href="{{route('advertisement.sort', $page)}}">Manage Advertisements</a>
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
                    "width": "100px",
                    "targets": 0
                },
                    {
                        "width": "150px",
                        "targets": 1
                    },
                    {
                        "width": "150px",
                        "targets": 2
                    },
                    {
                        "width": "70px",
                        "targets": 3
                    },
                ],
            });
        });
    </script>
@endsection
