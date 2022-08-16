<!doctype html>
<html class="no-js h-100" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>{{ $siteSetting->name }}</title>
    <meta name="description" content="A high-quality &amp; free Bootstrap admin dashboard template pack that comes with lots of templates and components.">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css">
    <link rel="stylesheet" id="main-stylesheet" data-version="1.1.0" href="{{asset('styles/shards-dashboards.1.1.0.min.css')}}">
    <link rel="stylesheet" href="{{asset('styles/extras.1.1.0.min.css')}}">
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    {{-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.6/quill.snow.css"> --}}
    @yield('styles')

    <style>
        .wordwrap {
            overflow-wrap: break-word;
            word-wrap: break-word;
            -ms-word-break: break-all;
            word-break: break-all;
            word-break: break-word;
            -ms-hyphens: auto;
            -moz-hyphens: auto;
            -webkit-hyphens: auto;
            hyphens: auto;
            min-width: 200px;
        }

        .textwrap {
            word-wrap: break-word;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }


        table {
            margin: 0 auto;
            width: 100%;
            clear: both;
            border-collapse: collapse;
            table-layout: fixed;
            word-wrap: break-word;
        }

        td > p {
            margin-bottom:0px;
        }

        table a {
            color: #fff !important;
        }
        span.required{
            color:red;
        }
        label {
            font-weight: bold !important;
        }

        .dataTables_length,
        .dataTables_info {
            text-align: left;
            margin-left: 10px;
        }
        .custom-select:focus , .dataTables_filter .form-control:focus{
            border-radius: 0px;
        }

        @media screen and (max-width: 767px) {
            .dataTables_length {
                text-align: center;
            }
        }

        .btn-sm {
            padding: 3px 8px;
            font-size: 14px;
            margin-bottom: 5px;
        }
        #mytextarea{
            height: 400px !important;
        }
    </style>
    @yield('styles')
</head>

<body class="h-100">

<div class="container-fluid">
    <div class="row">
        <!-- Main Sidebar -->
    @include('backend.layouts.sidebar')
    <!-- End Main Sidebar -->
        <main class="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
            <div class="main-navbar sticky-top bg-white">
                <!-- Main Navbar -->
                <nav class="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
                    <form action="#" class="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
                        <div class="input-group input-group-seamless ml-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <i class="fas fa-search"></i>
                                </div>
                            </div>
                            <input class="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search">
                        </div>
                    </form>
                    <ul class="navbar-nav border-left flex-row ">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                <img class="user-avatar rounded-circle mr-2" src="{{asset('backend/images/author-img.jpg')}}" alt="User">
                                <span class="d-none d-md-inline-block">{{\Illuminate\Support\Facades\Auth::user()->name}}</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-small">
                                <a class="dropdown-item" href="{{route('profile')}}">
                                    <i class="material-icons">&#xE7FD;</i> Profile</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item text-danger" href="{{'logout'}}">
                                    <i class="material-icons text-danger">&#xE879;</i> Logout </a>
                            </div>
                        </li>
                    </ul>
                    <nav class="nav">
                        <a href="#" class="nav-link nav-link-icon toggle-sidebar d-md-inline d-lg-none text-center border-left" data-toggle="collapse" data-target=".header-navbar" aria-expanded="false" aria-controls="header-navbar">
                            <i class="material-icons">&#xE5D2;</i>
                        </a>
                    </nav>
                </nav>
            </div>
            <!-- / .main-navbar -->
            <div class="main-content-container container-fluid px-4">

                @if(Session::has('msg') || Session::has('error'))
                    <div class="col-md-4 col-sm-5 float-right alert @if(Session::has('msg')) alert-success @else alert-danger @endif alert-dismissible m-2 mt-4 fade show" role="alert">
                        {{Session::get('msg') ?? Session::get('error')}}.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                @endif
                @yield('content')
            </div>


            @include('backend.layouts.footer')
        </main>
    </div>
</div>
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

<script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<script src="{{asset('packages/tinymce/tinymce.min.js')}}"></script>
<script src="{{asset('js/tinymce-view.js')}}"></script>
<script src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://unpkg.com/shards-ui@latest/dist/js/shards.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Sharrre/2.0.1/jquery.sharrre.min.js"></script>
<script src="{{asset('scripts/extras.1.1.0.min.js')}}"></script>
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
<script type="text/javascript">
  // $(function($) {
    // });
  $(document).ready(function() {
    let url = '{{url()->current()}}';
    $('.nav-item a').removeClass('active');
    
    $('.nav-item a').each(function() {
      if (this.href === url) {
        $(this).addClass('active');
        // if($(this).parents('.has-child').length > 0){
          $(this).parents('.collapse').addClass('show');
        // }
      }
    });
    setTimeout(function() {
      $('.alert .close').click()
    }, 3000);
    $('#aboutus-table').DataTable();
  });
</script>
@stack('js')

</body>

</html>
