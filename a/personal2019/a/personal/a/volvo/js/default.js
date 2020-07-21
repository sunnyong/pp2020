$(function(){
var swiper = new Swiper('.swiper-container.autoplay', {
      loop:true, 
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
    var swiper = new Swiper('.swiper-container.momentum', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
    //model-arrow
    $('.model-text ul li a').on('mouseenter focusIn',function(){
        $(this).children('span').show(100)
    })
    $('.model-text ul li a').on('mouseleave focusOut',function(){
        $(this).children('span').hide(100)
    })
    //model-pic
    $('.model-img1').mouseenter(function(){
        $('.model-img1 .model-bg').animate({opacity:'0'},300);
        $('.model-img1 .model-text2').animate({opacity:'0'},400);
    })
    $('.model-img1').mouseleave(function(){
        $('.model-bg').animate({opacity:'.5'},300);
        $('.model-img1 .model-text2').animate({opacity:'1'},400);
    })
    $('.model-img2').mouseenter(function(){
        $('.model-img2 .model-bg').animate({opacity:'0'},300);
        $('.model-img2 .model-text2').animate({opacity:'0'},400);
    })
    $('.model-img2').mouseleave(function(){
        $('.model-bg').animate({opacity:'.5'},300);
        $('.model-img2 .model-text2').animate({opacity:'1'},400);
    })
    //video
    $('.video-button').on('click focus',function(){
        $('.video-button').fadeOut(500);
        $('.video-bg').fadeOut(500);
        $('.video-close').show();
    })
    $('.video-close').on('click focus',function(){
        $('.video-button').fadeIn(500);
        $('.video-bg').fadeIn(500);
        $('.video-close').hide();
    })
    //navigation
    $('.menu').click(function(){
        $('.gnb').slideToggle(500);
        $(this).toggleClass('active')
    });
    $(window).resize(function(){
        if($(this).width()>960){
            $('.gnb').show();
            $('.menu').hide();
            $('.gnb').addClass('activepc');
            
        }else{
            $('.gnb').hide();
            $('.menu').show();
            $('.menu').removeClass('active');
            $('.gnb').removeClass('activepc')
        }
        
    })

    //fixed-navi
    var Top=$('#header').offset().top;

    $(window).scroll(function(){
        if($(document).scrollTop()>Top){
            $('#header').addClass('header-fixed');
        }else{
            $('#header').removeClass('header-fixed');
        }
    })
    
    //trim
    $('.trim-img').on('mouseenter focus',function(){
        $(this).animate({backgroundSize:'150%'},500); 
    })
    $('.trim-img').on('mouseleave focus',function(){
        $(this).animate({backgroundSize:'135%'},500);  
    })
    
    //slide
    var m=setInterval(move,3000);
    var current=0;
    function move(){
        $('.slider>li').eq(current).css('left','0').stop().animate({left:'-100%'},500);
        current++;
        if(current>=4){current=0};
        $('.slider>li').eq(current).css('left','50%').stop().animate({left:'0'},500);
    }
    //Wow Init
    new WOW().init();
    //navi 눌렀을 때 부드럽게 이동
    $('.page_scroll').click(function(e){
       e.preventDefault();
        var anchor = $(this);
        $('html,body').stop().animate({scrollTop:$(anchor.attr('href')).offset().top},800)
    })
})








