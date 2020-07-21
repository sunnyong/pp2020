//modal
$('.casting').click(function(){
    $('#modal').css({right:'0%'})
})
$('.modal_close').click(function(){
    $('#modal').css({right:'-100%'})
})

//process
$('.view1').click(function(){
    $('#process').css({right:'0%'})
})
$('.modal_close2').click(function(){
    $('#process').css({right:'-100%'})
})

/* --------- Wow Init ------ */

  new WOW().init();

//top
$(window).scroll(function(){
      var d=$(document).scrollTop();
      if(d>=700){
          $('#top').css({display:'block'})
      }
  })
$(window).scroll(function(){
      var d=$(document).scrollTop();
      if(d<700){
          $('#top').css({display:'none'})
      }
  })

//scroll
$('a.page-scroll').click(function(e){
    e.preventDefault();
    var Anchor=$(this)
    $('html,body').stop().animate({scrollTop:$(Anchor.attr('href')).offset().top},1500,'easeInOutExpo')
})