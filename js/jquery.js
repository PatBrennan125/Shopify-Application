$(function() {

  $("#card").flip();

  var $root = $('html, body');
  var header = $(".nav-bar");
  var navLinks = $(".nav-link");
  var toggleMenu = $(".label-toggle");

      if ($("body").hasClass("index")) {

            $(window).scroll(function() {
            var scroll = $(window).scrollTop();

                if (scroll >= 50) {
                  header.removeClass('nav-transparent').addClass("nav-standard");
                  navLinks.removeClass('text-top').addClass('text-fade-in');
                  toggleMenu.removeClass('hamburger-top').addClass('hamburger-scroll');
                } else {
                  header.removeClass("nav-standard").addClass('nav-transparent');
                  navLinks.removeClass("text-fade-in").addClass('text-top');
                  toggleMenu.removeClass('hamburger-scroll').addClass('hamburger-top');
                  
                }
            });
          }

      $('.blog-post').hover( function() {
          $(this).find('.img-info').fadeIn(400);
      }, function() {
          $(this).find('.img-info').fadeOut(200);
      });


      $('a').click(function() {
          $root.animate({
              scrollTop: $( $.attr(this, 'href') ).offset().top
          }, 500);
          return false;
      });

    });