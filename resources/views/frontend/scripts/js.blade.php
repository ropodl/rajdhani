      <!-- library -->
      <script src="{{asset ('frontend/library/jquery.min.js')}}"></script>
      <!-- <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script> -->
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
</script>
