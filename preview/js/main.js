// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

(function () {
   'use strict';

   /* ==============================================
  	Testimonial Slider
  	=============================================== */ 

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })

  	$(document).ready(function() {
  	  $("#team").owlCarousel({
  	 
  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 4],
				        [1400, 4],
				        [1600, 4]
				      ],
  	  });

  	  $("#clients").owlCarousel({
  	 
  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 5],
				        [1400, 5],
				        [1600, 5]
				      ],
  	  });

      $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });

  	});
    
    $(".service").on("mouseover", function(){
      var id = $(this).attr("id");
      switch (id)
      {
          case "management-information-system":
          {
            $("#mis").attr("src", "img/icons/Management-Information-System/Management_white.png")
            break;
          }
          case "multiplatform-application-development":
          {
            $("#mad").attr("src", "img/icons/Multiplatform-Application-Development/multiplatform-white.png")
            break;
          }
          case "Managed-Wireless-Hotspot":
          {
            $("#mwh").attr("src", "img/icons/Managed-Wireless-Hotspot/hotspot-white.png")
            break;
          }       
          case "Car-Tracking":
          {
            $("#ct").attr("src", "img/icons/Car-tracking-for-Fleet-Management/tracng-white.png")
            break;
          }     
          case "CCTV":
          {
            $("#cc").attr("src", "img/icons/CCTV-Installation-and-Management/cctv-white.png")
            break;
          }
          case "Networking":
          {
            $("#n").attr("src", "img/icons/Networking/Network_white.png")
            break;
          }
          case "Project-Management":
          {
            $("#pm").attr("src", "img/icons/Project_Management/PM_white.png")
            break;
          }
          case "Consultancy":
          {
            $("#c").attr("src", "img/icons/Consultancy/consultancy_white.png")
            break;
          }
      }
    });

    $(".service").on("mouseout", function(){
      var id = $(this).attr("id");
      switch (id)
      {
          case "management-information-system":
          {
            $("#mis").attr("src", "img/icons/Management-Information-System/Management_black.png")
            break;
          }
          case "multiplatform-application-development":
          {
            $("#mad").attr("src", "img/icons/Multiplatform-Application-Development/multiplatform-black.png")
            break;
          }          
          case "Managed-Wireless-Hotspot":
          {
            $("#mwh").attr("src", "img/icons/Managed-Wireless-Hotspot/hotspot-blac.png")
            break;
          }         
          case "Car-Tracking":
          {
            $("#ct").attr("src", "img/icons/Car-tracking-for-Fleet-Management/tracng-blac.png")
            break;
          } 
          case "CCTV":
          {
            $("#cc").attr("src", "img/icons/CCTV-Installation-and-Management/cctv-blac.png")
            break;
          }
          case "Networking":
          {
            $("#n").attr("src", "img/icons/Networking/Network_black.png")
            break;
          }
          case "Project-Management":
          {
            $("#pm").attr("src", "img/icons/Project_Management/PM_blac.png")
            break;
          }
          case "Consultancy":
          {
            $("#c").attr("src", "img/icons/Consultancy/consultancy_black.png")
            break;
          }
      }
    });

  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('#lightbox');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });



}());


}
main();