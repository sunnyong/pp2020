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
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true,
      speed: 800,
      parallax: true
    });
    
    //mobile_open_close
    $('.open_wrap, .close_wrap').on('click', function(){
    $('body').toggleClass('on');
    $('.overlay').toggleClass('on'); 
    $('.menu_wrap').toggleClass('on');
    })
    
    $('.close_wrap, .overlay').on('click', function(){
    $('body').removeClass('on');
    $('.overlay').removeClass('on'); 
    $('.menu_wrap').removeClass('on');
    $('.sub').slideUp('fast');
    })
    
    //mobile_gnb_sub
    $('.gnb').on('click',function(){
    var _window=$(window).width();
    if(_window>960){return }
    $(this).toggleClass('on')
    if($(this).hasClass('on')){
        $('.sub').slideUp('fast');
        $(this).siblings('.sub').slideDown('fast');
        $('.gnb').removeClass('on')
        $(this).addClass('on');
    }else{
        $(this).siblings('.sub').slideUp('fast');
        }
    })
    
    //사이즈조정시 메뉴 원상복구
    $(window).resize(function(){
    var w=$(window).width();
    if(w>320){
        $('body').removeClass('on');
        $('.sub').removeAttr('style').hide();
        $('.menu_wrap').removeClass('on')
        $('.overlay').removeClass('on');
        }
    })
    
    /*PC*/
    $('.menu_wrap, .logo_wrap').mouseenter(function(){
        var _window=$(window).width();
        if(_window<960){return }
        $('#navi').addClass('on');
        $('.header_inner').addClass('on');
        $('.sub').stop().slideDown(300);
        $('#gnb_bg').stop().slideDown(300);

    }).mouseleave(function(){
        var _window=$(window).width();
        if(_window<960){return }
        $('#navi').removeClass('on');
        $('.header_inner').removeClass('on');
        $('.sub').stop().slideUp(300);
        $('#gnb_bg').stop().slideUp(300);

    })

    //fixed-navi
    var Top=$('.header_inner').offset().top;

    $(window).scroll(function(){
        if($(document).scrollTop()>Top){
            $('.header_inner').addClass('fixed');
        }else{
            $('.header_inner').removeClass('fixed');
        }
    })

    //program_slide
    var current=0;
    $('.play .right').click(function(){
        $(this).parents('.play').siblings('.program').children('li').eq(current).css('left','0').animate({left:'-100%'},500);
        current++;
        if(current>=3){current=0};
        $(this).parents('.play').siblings('.program').children('li').eq(current).css('left','100%').animate({left:'0'},500);
    })
    $('.play .left').click(function(){
        $(this).parents('.play').siblings('.program').children('li').eq(current).css('left','0').animate({left:'100%'},500);
        current--;
        if(current<=-1){current=2};
        $(this).parents('.play').siblings('.program').children('li').eq(current).css('left','-100%').animate({left:'0'},500);
    })
    
    //swiper
    var swiper = new Swiper('.swiper-container.instagram', {
      
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    
    //insta
    var it=0;
    $('.click>span').eq(0).addClass('it')
    $('.click>span').click(function(){
        $('.click>span').removeClass('it')
        $(this).addClass('it')
    })
    
    //Wow Init
    new WOW().init();
})

