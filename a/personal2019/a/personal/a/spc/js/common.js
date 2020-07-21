$(function(){
    /*navigation*/
    $('#navi, #gnb_bg').mouseenter(function(){
        $('.logo_wrap').addClass('on');
        $('.sub').stop().slideDown(450);
        $('#gnb_bg').stop().slideDown(300);
    }).mouseleave(function(){
        $('.logo_wrap').removeClass('on');
        $('.sub').stop().slideUp(200);
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

    //Wow Init
    new WOW().init();
})

