$(document).ready(function() {


    // Sticky Nav: 

    $('.js--stickyStartSection').waypoint(function(direction) { 

        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }

    }, {
    offset: '60px;'
    });



    // Scroll snippet:

    
  $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

    // Scroll animation:

    // Features dissolve in:
    $('.js--wp1').waypoint(function(direction) {
        $('.js--wp1').addClass('animated fadeIn');
    }, {
    offset: '50%;'
    });

    // Phone dissolve in:
    $('.js--wp2').waypoint(function(direction) {
        $('.js--wp2').addClass('animated fadeInLeft');
    }, {
    offset: '50%;'
    });

    // Cities dissolve in:
    $('.js--wp3').waypoint(function(direction) {
        $('.js--wp3').addClass('animated fadeIn');
    }, {
    offset: '50%;'
    });

    // Premium pulse:
    $('.js--wp4').waypoint(function(direction) {
        $('.js--wp4').addClass('animated pulse');
    }, {
    offset: '50%;'
    });

    /*  Mobi Nav */

    $(' .js--nav-icon').click(function () {

        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {

            icon.addClass('ion-close-round');
            iocn.removeClass('ion-navicon-round');

        } else {

            icon.addClass('ion-navicon-round');
            iocn.removeClass('ion-close-round');

        }


    });

});