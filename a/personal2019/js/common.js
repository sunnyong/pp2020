//menu
$('.btn_open').click(function(){
    $('.gnb').animate({left:'0'},200)
})
$('.btn_close').click(function(){
    $('.gnb').animate({left:'100%'},200)
})

//about character
$('.about_right img').mouseenter(function(){
    $(this).animate({marginLeft:'50px'},300)
})
$('.about_right img').mouseleave(function(){
    $(this).animate({marginLeft:'0px'},300)
})

//scroll
$('html,body').animate({scrollTop:0});
$(window).scroll(function(){
  var d = $(document).scrollTop();
  if((d>=1600)&&(d<2200)){
        $('.photoshop .graph .bar').animate({width:'90%'},4000);
        $('.illustrator .graph .bar').animate({width:'80%'},4000);
        $('.html_css .graph .bar').animate({width:'90%'},4000);
        $('.jQuery .graph .bar').animate({width:'85%'},4000);
  };
})

//swiper graphic
var appendNumber = 4;
    var prependNumber = 1;
    var swiper = new Swiper('#section3 .swiper-container', {
      slidesPerView: 4,
      //centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.arrow_right',
        prevEl: '.arrow_left',
      },
    });

//popup graphic
    $('#section3 .swiper-slide>a').click(function(){
        var i = $(this).parents().index();
        $('.pop').eq(i).show();
        $('html,body').css({oveflow:'hidden',height:'100%',position:'fixed'});
        return false; 
    })
    $('.pop .close').click(function(){
        $('.pop').hide();
        $('html,body').stop().css({oveflow:'scroll',height:'auto',position:'relative'});
        var anchor = $(this);
        $('html,body').stop().animate({scrollTop:$(anchor.attr('href')).offset().top},0)
        return false;         
    })

