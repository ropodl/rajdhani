      <!-- library -->
      <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>
      <script src="{{asset ('frontend/library/jquery.min.js')}}"></script>
      <script src="{{asset ('frontend/library/bootstrap.min.js')}}"></script>
      <script src="{{asset ('frontend/js/navigation.js')}}"></script>
      <script src="{{asset ('frontend/js/owl.carousel.min.js')}}"></script>
      <script src="{{asset ('frontend/js/navigation.fixed.js')}}"></script>
      <script src="{{asset ('frontend/js/app.js')}}"></script>
      <script>
          $('#popup').modal('show');
          $ (window).ready (function () {
              setTimeout (function () {
                  $ ('#popup').modal ("hide")
              }, 10000)
          });
          
$('.video-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
     navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    items: 3,
    responsive: {
    0: {
    items: 1
    },
    1000: {
    items: 3
    }
    }
    });
     </script>
