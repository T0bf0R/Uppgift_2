AOS.init();

$(document).ready(function(){
      $('.autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                arrows: false,
                centerPadding: '10px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerPadding: '10px',
                slidesToShow: 2
              }
            },
            {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerPadding: '10px',
                  slidesToShow: 1
                }
              }
          ]
      });     
  });