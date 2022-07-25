/*****************************
 * Off Canvas Function
 *****************************/
var $body = $("body");
(function () {
    var $offCanvasToggle = $(".offcanvas-toggle"),
        $offCanvas = $(".offcanvas"),
        $offCanvasOverlay = $(".offcanvas-overlay"),
        $mobileMenuToggle = $(".mobile-menu-toggle");
    $offCanvasToggle.on("click", function (e) {
        e.preventDefault();
        var $this = $(this),
            $target = $this.attr("href");
        // $body.addClass('offcanvas-open');
        $($target).addClass("offcanvas-open");
        $offCanvasOverlay.fadeIn();
        if ($this.parent().hasClass("mobile-menu-toggle")) {
            $this.addClass("close");
        }
    });
    $(".offcanvas-close, .offcanvas-overlay").on("click", function (e) {
        e.preventDefault();
        // $body.removeClass('offcanvas-open');
        $offCanvas.removeClass("offcanvas-open");
        $offCanvasOverlay.fadeOut();
        $mobileMenuToggle.find("a").removeClass("close");
    });
})();

/* Go up */

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $(".go-to-top").css("bottom", "20px");
    } else {
        $(".go-to-top").css("bottom", "-100px");
    }
});
$(".go-to-top").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500);
    return false;
});

$("#navigation1").navigation();
$("#navigation1").fixed();
if ($("#nav-transparent").length !== 0) {
    if ($(window).width() > 991) {
        $("#nav-transparent #main_logo").css("display", "none");
    } else {
        $("#nav-transparent #light_logo").css("display", "none");
    }
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if ($(window).width() > 991) {
            if (scroll > 30) {
                $(".navigation-fixed-wrapper").addClass("nav-white-bg");
                $("#nav-transparent #main_logo").css("display", "inline-block");
                $("#nav-transparent #light_logo").css("display", "none");
            } else {
                $(".navigation-fixed-wrapper").removeClass("nav-white-bg");
                $("#nav-transparent #light_logo").css(
                    "display",
                    "inline-block"
                );
                $("#nav-transparent #main_logo").css("display", "none");
            }
        }
    });
}
$("#navigation2").navigation({ effect: "slide" });
$("#navigation3").navigation({
    animationOnShow: "zoom-in",
    animationOnHide: "zoom-out",
});
$("#navigation4").navigation({ overlayColor: "rgba(0,0,0,0.6)" });
$("#navigation4").fixed({ offset: 20 });
$("#navigation5").navigation({ hidden: !0 });
if ($("#navigation-push").length !== 0) {
    if ($(window).width() > 991) {
        $("#navigation-push").find(
            $(".nav-menus-wrapper").addClass("nav-menus-wrapper-open")
        );
        $("#navigation-push").find($(".nav-menus-wrapper-close-button").hide());
        $("#navigation-push").find($(".small-size-header").hide());
    } else {
        $("#navigation5 #main_logo")
            .clone()
            .appendTo(".small-size-header-logo");
        $("#main_logo").css("display", "none");
        $("#navigation-push").find(
            $(".nav-menus-wrapper").removeClass("nav-menus-wrapper-open")
        );
    }
}
$(".btn-show").on("click", function () {
    $("#navigation5").data("navigation").toggleOffcanvas();
});
$("#navigation6").navigation({ offCanvasSide: "right" });
$("#navigation7").navigation();
if ($(".video-section").length !== 0) {
    $(".player").mb_YTPlayer();
}
if ($(".main-video-section").length !== 0) {
    $("#main-video-play").mb_YTPlayer();
}

jQuery(document).ready(function () {
    $(".targetDiv").hide();
});

// jQuery(function(){
//    jQuery('#showall').click(function(){
//       jQuery('.targetDiv').show('.cnt');
//    });
//    jQuery('#hideall').click(function() {
//       jQuery('.targetDiv').hide('.cnt');
//    });

//    jQuery('.showSingle').click(function(){
//       jQuery('.targetDiv').hide('.cnt');
//       jQuery('#div'+$(this).attr('target')).slideToggle();

//    });
// });
// $(document).ready(function(){
//     $(".showSingle").click(function(){
//       $(".targetDiv").toggle();
//     });
//   });
// $(document).ready(function() {
//   $("div.jsonInfo").hide(); // it's obvious
//   $(".showJSON").click(function() {  // on click...

//     $("div.jsonInfo")
//       .hide()  // ...hide all other previus opened elements...
//       .eq($(this).index('.showJSON')) // ... select right one by index of clicked .showJSON element...
//        .toggle(); // and show/hide it
//   });
// });

$(".view").click(function () {
    $(this)
        .closest(".div")
        .find(".hidden-content")
        .slideToggle(500)
        .toggleClass("active");
});
