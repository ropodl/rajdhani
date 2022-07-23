@extends('backend.layouts.app')
  <!-- / .main-navbar -->
@section('content')
 <!--  <div class="alert alert-success alert-dismissible fade show mb-0" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">×</span>
    </button>
    <i class="fa fa-check mx-2"></i>
    <strong>Success!</strong> Your profile has been updated!
  </div> -->
  <style type="text/css">
    .change-password .rounded-circle{
      border:1px solid #000;
      border-radius: 25% !important;
    }
  </style>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Overview</span>
        <h3 class="page-title">User Profile</h3>
      </div>
    </div>
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="row">
      <div class="col-lg-4">
        <div class="card card-small mb-4 pt-3">
          <div class="card-header border-bottom text-center">
            <div class="mb-3 mx-auto">
              <img class="rounded-circle" src="{{ asset('backend/images/author-img.jpg')}}" alt="User Avatar" width="110"> </div>
            <h4 class="mb-0">{{\Illuminate\Support\Facades\Auth::user()->name}}</h4>
            <span class="text-muted d-block mb-2">{{\Illuminate\Support\Facades\Auth::user()->email}}</span>
            <span class="text-muted d-block mb-1">Admin</span>
            <!-- <button type="button" class="mb-2 btn btn-sm btn-pill btn-outline-primary mr-2">
              <i class="material-icons mr-1">person_add</i>Follow
            </button> -->
          </div>
          <ul class="list-group list-group-flush">
            <!-- <li class="list-group-item px-4">
              <div class="progress-wrapper">
                <strong class="text-muted d-block mb-2">Workload</strong>
                <div class="progress progress-sm">
                  <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="74" aria-valuemin="0" aria-valuemax="100" style="width: 74%;">
                    <span class="progress-value">74%</span>
                  </div>
                </div>
              </div>
            </li> -->
            <li class="list-group-item p-4">
              <strong class="text-muted d-block mb-2">Description</strong>
            <span>{{auth()->user()->description}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0"><i class="fa fa-user"></i> User Details</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item p-3">
              <div class="row">
                <div class="col">
                  @if(Session::has('update-success'))
                      <div class="alert alert-success text-center">{{Session::get('update-success')}}
                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                    @endif
                  <form method="POST" action="{{route('auth.update-profile')}}">
                    {{csrf_field()}}
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="name">Your Name</label>
                        <input type="text" class="form-control" id="name" name="name" placeholder="Your Name" value="{{Auth::user()->name}}">
                        @if($errors->has('name'))
                          <span class="text text-danger">** {{ $errors->first('name') }}</span>
                        @endif
                      </div>
                      <div class="form-group col-md-6">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Email" name="email" value="{{Auth::user()->email}}">
                        @if($errors->has('email'))
                          <span class="text text-danger">** {{ $errors->first('email') }}</span>
                        @endif
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-12">
                        <label for="description">Description</label>
                        <textarea class="form-control" name="description" rows="5">{{Auth::user()->description}}</textarea>
                        @if($errors->has('description'))
                          <span class="text text-danger">** {{ $errors->first('description') }}</span>
                        @endif
                      </div>
                    </div>
                    <button type="submit" class="btn btn-accent">Update Account</button>
                  </form>
                </div>
              </div>
            </li>
            <li class="list-group-item p-3">
              <div class="row change-password">
                <div class="col-md-4 text-center">
                  <div class="mb-3 mx-auto mt-4">
                    <img class="rounded-circle" src="{{ asset('backend/images/key.png')}}" alt="User Avatar" width="150">
                  </div>
                  <h5 class="m-0 mb-3">Change Password</h5>
                </div>
                <div class="col-md-8 col">
                  @if(Session::has('success'))
                    <div class="alert alert-success text-center">{{Session::get('success')}}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                  @endif
                <form method="POST" action="{{route('auth.change-password')}}">
                    @csrf
                    <div class="form-row">
                      <div class="form-group col-md-12">
                        <label for="old_password">Old Password</label>
                        <input type="password" class="form-control" id="old_password" name="old_password" placeholder="Old Password" value="">
                        @if($errors->has('old_password'))
                          <span class="text text-danger">** {{ $errors->first('old_password') }}</span>
                        @endif
                      </div>
                      <div class="form-group col-md-12">
                        <label for="new_password">New Password</label>
                        <input type="password" class="form-control" id="new_password" name="new_password" placeholder="New Password" value="">
                      </div>
                      <div class="form-group col-md-12">
                        <label for="confirm_password">Confirm Password</label>
                        <input type="password" class="form-control" id="confirm_password" name="confirm_password" placeholder="Confirm Password" value="">
                        @if($errors->has('confirm_password'))
                        <div class="alert text-danger">** {{ $errors->first('confirm_password') }}</div>
                        @endif
                      </div>
                    </div>
                    <button type="submit" class="btn btn-accent">Change Password</button>
                  </form>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
    <!-- End Default Light Table -->
  </div>
@endsection
