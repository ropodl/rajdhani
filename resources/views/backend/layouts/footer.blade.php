<?php //
//$config = App\Backend\SiteConfiguration::first();
//
?>
<footer class="main-footer d-flex p-2 px-3 bg-white border-top">
    <ul class="nav">
        <li class="nav-item">
            <a class="nav-link" href="{{ url('admin') }}">Dashboard</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('group.index') }}">Group</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('category.index') }}">Category</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('news.index') }}">News</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('tag.index') }}">Tag</a>
        </li>
    </ul>
    <span class="copyright ml-auto my-auto mr-2">Copyright ©
        <script>
            document.write(new Date().getFullYear())
        </script> {{ $siteSetting->name }}
        <a href="{{ url('/') }}" rel="nofollow">{{ $config->name_en ?? '' }}</a>
    </span>
</footer>
