$(function(){
    //slide_menu
    $(function(){
          $('.sub_menu li:eq(0)').mouseenter(function(){
              $('#bar').stop().animate({left:0})
          })
          $('.sub_menu li:eq(1)').mouseenter(function(){
              $('#bar').stop().animate({left:200})
          })
          $('.sub_menu li:eq(2)').mouseenter(function(){
              $('#bar').stop().animate({left:200*2})
          })
          $('.sub_menu li:eq(3)').mouseenter(function(){
              $('#bar').stop().animate({left:200*3})
          })
          $('.sub_menu li:eq(4)').mouseenter(function(){
              $('#bar').stop().animate({left:200*4})
          })
          $('.sub_menu li:eq(5)').mouseenter(function(){
              $('#bar').stop().animate({left:200*5})
          })
          $('.sub_menu li:eq(6)').mouseenter(function(){
              $('#bar').stop().animate({left:200*6})
          })
      })
    
    //연혁 bar
    $(function(){
          $('.history_top li:eq(0)').mouseenter(function(){
              $('.history_bar').stop().animate({left:0});
              $(this).children('h5').css({color:'#333'});
              $(this).children('h4').css({fontWeight:'600'});
          }).mouseleave(function(){
              $('.history_bar').stop().animate({left:0});
              $(this).children('h5').css({color:'#aaaaaa'});
              $(this).children('h4').css({fontWeight:'300'});
          })
        
          $('.history_top li:eq(1)').mouseenter(function(){
              $('.history_bar').stop().animate({left:220});
              $(this).children('h5').css({color:'#333'});
              $(this).children('h4').css({fontWeight:'600'});
          }).mouseleave(function(){
              $('.history_bar').stop().animate({left:0});
              $(this).children('h5').css({color:'#aaaaaa'});
              $(this).children('h4').css({fontWeight:'300'});
          })
              
          $('.history_top li:eq(2)').mouseenter(function(){
              $('.history_bar').stop().animate({left:220*2});
              $(this).children('h5').css({color:'#333'});
              $(this).children('h4').css({fontWeight:'600'});
          }).mouseleave(function(){
              $('.history_bar').stop().animate({left:0});
              $(this).children('h5').css({color:'#aaaaaa'});
              $(this).children('h4').css({fontWeight:'300'});
          })
              
          $('.history_top li:eq(3)').mouseenter(function(){
              $('.history_bar').stop().animate({left:220*3});
              $(this).children('h5').css({color:'#333'});
              $(this).children('h4').css({fontWeight:'600'});
          }).mouseleave(function(){
              $('.history_bar').stop().animate({left:0});
              $(this).children('h5').css({color:'#aaaaaa'});
              $(this).children('h4').css({fontWeight:'300'});
          })
    })
    //navi move
    $('.page_scroll').click(function(e){
         e.preventDefault();
         var anchor = $(this);
         $('html,body').stop().animate({scrollTop:$(anchor.attr('href')).offset().top-130},800)
    })
    
    //fixed navi
    var menu=$('.sub_menu').offset();
    $(window).scroll(function(){
        if($(document).scrollTop()>menu.top-60){
            $('.sub_menu').addClass('fixed');
        }else{
            $('.sub_menu').removeClass('fixed');
        }
    })
    
    //scroll
    $('html,body').animate({scrollTop:0});
          $('#top').click(function(){
               $('html,body').animate({scrollTop:0});
          })
          $(window).scroll(function(){
              var d = $(document).scrollTop();
              if((d>=430)&&(d<1230)){
                  $('.sub_menu li').css({color:'#333'});
                  $('.sub_menu li:eq(0)').css({color:'#fec61e'});
                  $('#bar').stop().animate({left:0})
              };
              if((d>=1230)&&(d<2554)){
                  $('.sub_menu li').css({color:'#333'})
                  $('.sub_menu li:eq(1)').css({color:'#fec61e'})
                  $('#bar').stop().animate({left:200})
              };
              if((d>=2554)&&(d<4280)){
                  $('.sub_menu li').css({color:'#333'})
                  $('.sub_menu li:eq(2)').css({color:'#fec61e'})
                  $('#bar').stop().animate({left:200*2})
              };
              if((d>=4280)&&(d<5110)){
                  $('.sub_menu li').css({color:'#333'})
                  $('.sub_menu li:eq(3)').css({color:'#fec61e'})
                  $('#bar').stop().animate({left:200*3})
              };
              if((d>=5110)&&(d<6120)){
                  $('.sub_menu li').css({color:'#333'})
                  $('.sub_menu li:eq(4)').css({color:'#fec61e'})
                  $('#bar').stop().animate({left:200*4})
              };
              if((d>=6120)&&(d<7200)){
                  $('.sub_menu li').css({color:'#333'})
                  $('.sub_menu li:eq(5)').css({color:'#fec61e'})
                  $('#bar').stop().animate({left:200*5})
              };
          })

})

