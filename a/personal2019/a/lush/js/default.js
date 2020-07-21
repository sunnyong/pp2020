$(function(){
    //header_slide
    var swiper = new Swiper('.swiper-container.header_swiper', {
      effect: 'fade',
      loop: 'true',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3000
      },
    });
    
    //navigation
    $('.bg1').on('mouseenter focus',function(){
        $(this).children('.sub').stop().slideDown(500);
        $('.navi_bg1').stop().slideDown(500);
    })
    $('.bg1').on('mouseleave focus',function(){
        $(this).children('.sub').stop().slideUp(500);
        $('.navi_bg1').stop().slideUp(500);
    })
    $('.bg2').on('mouseenter focus',function(){
        $(this).children('.sub').stop().slideDown(500);
        $('.navi_bg2').stop().slideDown(500);
    })
    $('.bg2').on('mouseleave focus',function(){
        $(this).children('.sub').stop().slideUp(500);
        $('.navi_bg2').stop().slideUp(500);
    })
    
    //best item
    var current=0;
    var t1=-100;
    $('.category li').eq(current).addClass('on')
    $('.b1').click(function(){
        $('.category li').removeClass('on')
        $('.category li').eq(current).addClass('on')
        $('.container').stop().animate({left:0},400)
    })
    $('.b2').click(function(){
        $('.category li').removeClass('on')
        $('.category li').eq(1).addClass('on')
        $('.container').stop().animate({left:t1+'%'},400)
    })
    $('.b3').click(function(){
        $('.category li').removeClass('on')
        $('.category li').eq(2).addClass('on')
        $('.container').stop().animate({left:t1*2+'%'},400)
    })
    $('.b4').click(function(){
        $('.category li').removeClass('on')
        $('.category li').eq(3).addClass('on')
        $('.container').stop().animate({left:t1*3+'%'},400)
    })
    $('.b5').click(function(){
        $('.category li').removeClass('on')
        $('.category li').eq(4).addClass('on')
        $('.container').stop().animate({left:t1*4+'%'},400)
    })
    $('.b6').click(function(){
        $('.category li').removeClass('on')
        $('.category li').eq(5).addClass('on')
        $('.container').stop().animate({left:t1*5+'%'},400)
    })
    
    $('.container>li').mouseenter(function(){
        $(this).children('.best_bg').stop().animate({top:-15},400)
    })
    $('.container>li').mouseleave(function(){
        $(this).children('.best_bg').stop().animate({top:220},200)
    })
    
    //halloween_swiper
    var swiper = new Swiper('.swiper-container.halloween_swiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop:'true'
    });
    
    //spa
    $('.spa').mouseenter(function(){
        $(this).children('.spa_bg').stop().animate({opacity:1},500)
    })
    $('.spa').mouseleave(function(){
        $(this).children('.spa_bg').stop().animate({opacity:0},500)
    })
    
    //Wow Init
    new WOW().init();
})

