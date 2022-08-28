$(document).ready(function(){
    $(".img-gallery").owlCarousel({
        rtl:true ,
        nav:false ,
        dots:true,
        center: true ,
        autoplay :true ,
        autoplayTimeout:4000,
        autoplayHoverPause:false,
        smartSpeed:1000,
        loop : true ,
        autoWidth:true,
        responsive:{
            0:{
                items:1,
            },
            768:{
              items:3,
            }
        },
    });
  });