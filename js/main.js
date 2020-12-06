$(function () {
  "use strict";

  //===== Prealoder=====//

  $(window).on("load", function (event) {
    $("#preloader").delay(100).fadeOut();
  });

  //===== Sticky=====//

  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 20) {
      $(".header_navbar").removeClass("sticky");
    } else {
      $(".header_navbar").addClass("sticky");
    }
  });

  //===== Section Menu Active =====//

  var scrollLink = $(".page-scroll");
  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {
      // var sectionOffset = $(this.hash).offset().top - 73;  <- $(this.hash) was causing error.
      // var sectionOffset = $($(this).attr('href')).offset().top - 73;
      var sectionOffset = $(this.hash).offset().top - 73;

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
      }
    });
  });

  //===== close navbar-collapse when a  clicked=====//

  $(".navbar-nav a").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  });

  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".navbar-nav a").on("click", function () {
    $(".navbar-toggler").removeClass("active");
  });

  //===== slick Events=====//

  // $('.work_active').slick({
  //     dots: true,
  //     arrows: false,
  //     infinite: true,
  //     speed: 800,
  //     autoplay: true,
  //     autoplaySpeed: 5000,
  //     centerMode: true,
  //     centerPadding: '360px',
  //     slidesToShow: 2,
  //     slidesToScroll: 1,
  //     responsive: [
  //         {
  //             breakpoint: 1600,
  //             settings: {
  //                 slidesToShow: 2,
  //                 centerPadding: '400px',
  //             }
  //         },
  //         {
  //             breakpoint: 1400,
  //             settings: {
  //                 slidesToShow: 2,
  //                 centerPadding: '160px',
  //             }
  //         },
  //         {
  //             breakpoint: 1200,
  //             settings: {
  //                 slidesToShow: 2,
  //                 centerPadding: '80px',
  //             }
  //         },
  //         {
  //             breakpoint: 992,
  //             settings: {
  //                 slidesToShow: 2,
  //                 centerPadding: '0',
  //                 centerMode: false,
  //             }
  //         },
  //         {
  //             breakpoint: 768,
  //             settings: {
  //                 slidesToShow: 1,
  //                 centerPadding: '0',
  //                 centerMode: false,
  //             }
  //         },
  //         {
  //             breakpoint: 576,
  //             settings: {
  //                 slidesToShow: 1,
  //                 centerPadding: '0',
  //                 centerMode: false,
  //             }
  //         }
  //     ]
  // });

  // "event4": {},
  // "event5": {},
  // "event6": {},
  // "event7": {},
  // "event8": {},
  // "event9": {},
  // "event10": {},
  // "event11": {}

  //====== slick Team =====//

  $(".team_active").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    lazyLoad: 'ondemand',
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: false,
    centerPadding: "0",
    slidesToShow: 4,
    slidesToScroll: 2,
    lazyLoad: 'on-demand',
    prevArrow: '<span><button class="slide-arrow prev-arrow"></button></span>',
    nextArrow: '<span><button class="slide-arrow next-arrow"></button></span>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //===== Back to top =====//

  // Show or hide the sticky footer button
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200);
    } else {
      $(".back-to-top").fadeOut(200);
    }
  });

  //Animate the scroll to yop =====//
  $(".back-to-top").on("click", function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  //=====  WOW active=====//

  var wow = new WOW({
    boxClass: "wow", //
    mobile: false, //
  });
  wow.init();
});

//=====  Slick Gallery=====//
$(".testimonial-active").slick({
  dots: false,
  arrows: true,
  prevArrow: '<span class="prev"><i class=""></i></span>',
  nextArrow: '<span class="next"><i class=""></i></span>',
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 800,
  slidesToShow: 1,
});

// $(".testimonial-active").slick({
//   dots: false,
//   arrows: true,
//   prevArrow: '<span class="prev"><i class="fas fa-arrow-left"></i></span>',
//   nextArrow: $(this).find(".next"),
//   infinite: true,
//   autoplay: true,
//   autoplaySpeed: 5000,
//   speed: 800,
//   slidesToShow: 1,
// });
