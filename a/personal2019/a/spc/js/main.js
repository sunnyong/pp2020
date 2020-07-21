$(function(){
    //swiper main_slide
    var swiper = new Swiper('.swiper-container.main_slide', {
      hashNavigation: {
        watchState: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true,
      speed: 800,
      parallax: true,
      effect: 'fade',
    });

    //slide_menu
    $(function(){
          $('.slide_menu li:eq(0)').mouseenter(function(){
              $('#bar').stop().animate({left:0})
          })
          $('.slide_menu li:eq(1)').mouseenter(function(){
              $('#bar').stop().animate({left:250})
          })
          $('.slide_menu li:eq(2)').mouseenter(function(){
              $('#bar').stop().animate({left:250*2})
          })
          $('.slide_menu li:eq(3)').mouseenter(function(){
              $('#bar').stop().animate({left:250*3})
          })
      })
})

