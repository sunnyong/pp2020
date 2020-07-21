$(document).ready(function(){
    /* 햄버거 버튼 */
    $('.hamburger').click(function(){
        $(this).toggleClass('active');
        $('.overlay').toggleClass('open');
    });
    
    //about 그래프
    $(window).on('scroll', function(){
        var resumeTop = $('#resume').offset().top-150,
         scrollTop = $(window).scrollTop();
        if( resumeTop <= scrollTop ){
                $('#about .graph.coding .bar').css('width','95%')
                $('#about .graph.photoshop .bar').css('width','90%')
                $('#about .graph.illust .bar').css('width','80%')
                $('#about .graph.word .bar').css('width','90%')
                $('#about .graph.editplus .bar').css('width','95%')
                $('#about .graph.brackets .bar').css('width','95%')
                $('#about .graph.github .bar').css('width','85%')
           }
    });
    
    /* work slick */
    var $slickElement = $('.work_slide_for');
    var $status = $('.slide_count');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });
    $('.work_slide_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed:300,
        arrows: true,
        fade: true,
        asNavFor: '.work_slide_nav'
        });
    $('.work_slide_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.work_slide_for',
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });
});

/* 타이핑 */
document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 40,
    backSpeed: 30,
    startDelay: 1000,
    loop: false,
    loopCount: Infinity,
    onBegin: function(self) {
      prettyLog('onBegin ' + self);
    },
    onComplete: function(self) {
      prettyLog('onComplete ' + self);
    },
    preStringTyped: function(pos, self) {
      prettyLog('preStringTyped ' + pos + ' ' + self);
    },
    onStringTyped: function(pos, self) {
      prettyLog('onStringTyped ' + pos + ' ' + self);
    },
    onLastStringBackspaced: function(self) {
      prettyLog('onLastStringBackspaced ' + self);
    },
    onTypingPaused: function(pos, self) {
      prettyLog('onTypingPaused ' + pos + ' ' + self);
    },
    onTypingResumed: function(pos, self) {
      prettyLog('onTypingResumed ' + pos + ' ' + self);
    },
    onReset: function(self) {
      prettyLog('onReset ' + self);
    },
    onStop: function(pos, self) {
      prettyLog('onStop ' + pos + ' ' + self);
    },
    onStart: function(pos, self) {
      prettyLog('onStart ' + pos + ' ' + self);
    },
    onDestroy: function(self) {
      prettyLog('onDestroy ' + self);
    }
  });
});

function prettyLog(str) {
  console.log('%c ' + str, 'color: green; font-weight: bold;');
}



