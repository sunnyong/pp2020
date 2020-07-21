//fullpage
var myFullpage = new fullpage('#fullpage', {
            sectionsColor: ['#28282e'],
            autoScrolling: false,
            fitToSection: false
            });
//header_vegas
$(function(){
            $('#section0').vegas({
                cover : true,
                firstTransitionDuration: 10000,
                transitionDuration: 20000,
                slides:[{src:'images/top_img01.jpg'},
                       {src:'images/top_img02.jpg'},
                       {src:'images/top_img03.jpg'}
                      ],delay:3500,
                overlay:'images/overlays/07.png',
                init: function (globalSettings) {
                console.log("Init");
                },
                play: function (index, slideSettings) {
                    console.log("Play");
                },
                walk: function (index, slideSettings) {
                    console.log("Slide index " + index + " image " + slideSettings.src);
                }  
            }) 
            
            $('body').on('vegaspause', function (e, index, slideSettings) {
            console.log("Pause on Slide index " + index);
            });
        })
//navi move
$('.page_scroll').click(function(e){
   e.preventDefault();
    var anchor = $(this);
    $('html,body').stop().animate({scrollTop:$(anchor.attr('href')).offset().top},800)
})
//fixed navi
    var menu=$('#navi').offset();
    $(window).scroll(function(){
        if($(document).scrollTop()>menu.top){
            $('#navi').addClass('fixed');
        }else{
            $('#navi').removeClass('fixed');
        }
    })    

//waypoint
$('.wp1').waypoint(function(){
    $('.wp1').stop().addClass('animated fadeInUp')
},{offset:'100%'    
});//home_text
   
$('.wp2').waypoint(function(){
    $('.wp2').stop().addClass('animated fadeInLeft')
},{offset:'100%'    
})//home_line_top

$('.wp3').waypoint(function(){
    $('.wp3').stop().addClass('animated fadeInRight')
},{offset:'100%'    
})//home_line_bottom
      
//skill
    $(window).scroll(function(){ 
            $('.photoshop .graph .bar').animate({width:'90%'},4000);
            $('.illustrator .graph .bar').animate({width:'80%'},4000);
            $('.html_css .graph .bar').animate({width:'90%'},4000);
            $('.jQuery .graph .bar').animate({width:'85%'},4000);
            //css({width:'85%'}) 하고 css에서 bar에 트랜지션 주기가 두번째 방법
    })

//Wow Init
    new WOW().init();
//swiper web
var swiper = new Swiper('#section2 .swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next-w',
        prevEl: '.swiper-button-prev-w',
      },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

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
        nextEl: '.swiper-button-next-g',
        prevEl: '.swiper-button-prev-g',
      },
    });

//mockup position
$('.web_mockup').on('mouseenter focus',function(){
        var t=$(this).find('.mockup_pic img').height()-170
        $(this).find('.mockup_pic img').animate({top:-t},1500) })

$('.web_mockup').on('mouseleave focus',function(){
        $(this).find('.mockup_pic img').animate({top:'0'},1500) })

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
    
//modal web
    $('#section2 .viewmore').click(function(){
        var s = $(this).parents('.rowwrap').index();
        var i = $(this).parents('.row').index();
        $('.modalwrap').eq(s).children('.modal').eq(i).show();
        $('html,body').css({oveflow:'hidden',height:'100%',position:'fixed'});
        return false; 
    })
    $('.modal .close').click(function(){
        $('.modal').hide();
        $('html,body').stop().css({oveflow:'scroll',height:'auto',position:'relative'});
        var anchor = $(this);
        $('html,body').stop().animate({scrollTop:$(anchor.attr('href')).offset().top},0)
        return false;         
    })



