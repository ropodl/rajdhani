<section class="footer-section mt-3">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-lg-4">
                <div class="footer-part">
                    <div class="foooter-logo mb-3">
                        <img src="{{$siteSetting->logo_with_text}}" class="img-fluid" style="max-height:60px;">
                    </div>
                    <div class="footer-text">
                        <p>खबर प्रालिद्वारा प्रकाशित</p>
                        <p><strong>कार्यकारी प्रवन्धक :</strong> {{$siteSetting->executive_manager}}</p>
                        <p><strong>सम्पादक :</strong> {{$siteSetting->editor}}</p>
                        <p><strong>कार्यकारी सम्पादक :</strong> {{$siteSetting->executive_editor}}</p>
                        <p><strong>सूचना विभाग दर्ता नं :</strong> {{$siteSetting->registration_no}}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="footer-text-add">
                    <h2>सम्पर्क ठेगाना</h2>
                    <p> {{$siteSetting->address}}</p>
                </div>
                <div class="footer-text-add">
                    <h2>सम्पर्क नम्बर</h2>
                    <p><a href="tel:+977-9874561237">{{$siteSetting->phone1}}</a> , <a
                            href="tel:+977-9874561237">{{$siteSetting->phone2}}</a></p>
                </div>
                <div class="footer-text-add">
                    <h2>ई–मेल</h2>
                    <p>
                        <a href="mailto:{{$siteSetting->email}}">{{$siteSetting->email}}</a><br>
                    </p>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="footer-text-add">
                    <h2>हाम्रो बारेमा</h2>
                    <ul>
                        <li>
                            <a href="{{route('frontend.aboutus')}}">हाम्रो बारेमा</a></li>
                        <li>
                            <a href="{{route('frontend.contactus')}}">सम्पर्क</a></li>
                        <li>
                            <a href="{{route('frontend.privacy')}}">नियम र सर्तहरू</a></li>
                        </ul>
                </div>
            </div>
            <div class="col-md-6 col-lg-2">
                <div class="footer-text-add">
                    <h2>अन्वेषण</h2>
                    @foreach ($footerCategories as $category)
                        <ul>
                            <li><a href="{{route('frontend.category_news', $category->slug)}}">{{$category->name}}</a></li>
                        </ul>
                    @endforeach
                </div>
            </div>
        </div>
        <div class="copyright">
            <div class="row">
                <div class="col-md-6">
                    <div class="text-white mt-3">
                        <p>
                            Copyright &copy;
                            <script>document.write(new Date().getFullYear())</script>
                            {{$siteSetting->name}}
                        </p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="footer-list-news mt-3">
                        <ul>
                        <li><a href="{{$media->facebook_link}}" target="_blank"><i class="fa fa-facebook"></i> Facebook</a>
                        </li>
                        <li><a href="{{$media->instagram_link}}" target="_blank"><i class="fa fa-instagram"></i>
                                Instagram</a></li>
                        <li><a href="{{$media->youtube_link}}" target="_blank"><i class="fa fa-youtube"></i> Youtube</a>
                        </li>
                        <li><a href="{{$media->twitter_link}}" target="_blank"><i class="fa fa-twitter"></i> Twitter</a>
                        </li>
                        <li><a href="{{$media->linkedin_link}}" target="_blank"><i class="fa fa-linkedin"></i> Linkedin</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="modal fade" id="searchmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <div class="modal-part">
                    <h3>Type And Search</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <form action="{{route('frontend.search')}}" method="get">
                        @csrf
                        <div class="input-group mb-3">

                            <input type="text" class="form-control" name="search" placeholder="Search Here..." aria-label="Search Here...">
                            <div class="input-group-prepend">
                               <button type="submit" class="fa fa-search news_search"></button>
                            </div>
                        </div>
                    </form>
                    <h4>Recommended for you</h4>
                    <ul>
                        @foreach($tags as $tag)
                            <li><a href="{{route('frontend.search',['tag' => $tag->name])}}">#{{$tag->name}}</a></li>
                        @endforeach
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
