$(function(){
    $('.toggle').click(function(){
        $('#gnb').slideToggle(500)
    })
    $(window).resize(function(){
        if($(this).width()>960){
            $('#gnb').stop().css({display:'block'}); //pc인 경우
        }else{
            $('#gnb').stop().css({display:'none'}); //mobile,tablet인 경우
        }
    })
})