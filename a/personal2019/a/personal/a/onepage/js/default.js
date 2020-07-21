$(function(){
    //mobile,tablet navi
    $('.menu').click(function(){
        $('.gnb').slideToggle(300)
    })
    $(window).resize(function(){
        if($(this).width()>769){
            $('#header .gnb').stop().css({display:'block'}); //pc인 경우
        }else{
            $('#header .gnb').stop().css({display:'none'}); //mobile,tablet인 경우
        }//사이즈 조정하면 .gnb 자동적으로 숨어지게 함
    })

    
    //fixed navi
    var menu=$('#header').offset();
    $(window).scroll(function(){
        if($(document).scrollTop()>menu.top){
            $('#header').addClass('fixed')
        }else{
            $('#header').removeClass('fixed')
        }
    })
    
    //navi 눌렀을 때 부드럽게 이동
    $('.page_scroll').click(function(e){
       e.preventDefault();
        var anchor = $(this);
        $('html,body').stop().animate({scrollTop:$(anchor.attr('href')).offset().top-120},800)
    })
    
    //gallery
    var gallery=$('.gallery');
    gallery.masonry({
        isAnimated:true,
        itemSelector:'.all',
        columnWidth:0,
        fitWidth : true
    });
    
    //popup
    $('.gall_wrap a').click(function(){
        $(this).parents().parents().siblings('.pop').show();
        $('html,body').css({oveflow:'hidden',height:'100%'});
        return false; 
    })
    $('.close').click(function(){
        $('.pop').hide();
        $('html,body').css({oveflow:'scroll',height:'auto'});
        return false;         
    })
    
    //skill
    
    /*
    $(window).scroll(function(){ //스크롤할때 (스크롤하는동안)
        var b = $(document).scrollTop(); //스크롤높이값을 변수 b에 저장
        $('.tt').text(b)
    })*/
    
    $(window).scroll(function(){ 
        var top = $(document).scrollTop();
        $('.tt').text(top)
        if((top>=1200)&&(top<2500)){
            $('.photoshop .graph .bar').animate({width:'90%'},1500);
            $('.illustrator .graph .bar').animate({width:'80%'},1500);
            $('.html_css .graph .bar').animate({width:'90%'},1500);
            $('.jQuery .graph .bar').animate({width:'85%'},1500);
            //css({width:'85%'}) 하고 css에서 bar에 트랜지션 주기가 두번째 방법
        }
    })
})

















