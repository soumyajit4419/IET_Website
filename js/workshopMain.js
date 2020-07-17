$(function () {

    "use strict";

    //===== Prealoder=====//

    // $(window).on('load', function (event) {
    //     $('.preloader').delay(400).fadeOut(400);
    // });


    //===== Sticky=====//

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".header_navbar").removeClass("sticky");
        } else {
            $(".header_navbar").addClass("sticky");
        }
    });


    //===== Section Menu Active =====//

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            // var sectionOffset = $(this.hash).offset().top - 73;  <- $(this.hash) was causing error.
            // var sectionOffset = $($(this).attr('href')).offset().top - 73;
            var sectionOffset = $(this.hash).offset().top - 70;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });


    //===== close navbar-collapse when a  clicked=====//

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });


    //=====  WOW active=====//

    var wow = new WOW({
        boxClass: 'wow', //
        mobile: false, // 
    })
    wow.init();
});


