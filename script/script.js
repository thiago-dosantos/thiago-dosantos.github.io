$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });

     var typed = new Typed(".typing", {
         strings:["Developer", "Front-End", "Back-End", "Web Design"],
         typeSpeed:100,
         backSpeed:60,
         loop:true
     });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });

    debounce = function(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
    
    
    // (function(){
    //     var $target = $('.anime'),
    //             animationClass = 'anime-start',
    //             offset = $(window).height() * 3/4;
    
    //     function animeScroll() {
    //         var documentTop = $(document).scrollTop();
    
    //         $target.each(function(){
    //             var itemTop = $(this).offset().top;
    //             if (documentTop > itemTop - offset) {
    //                 $(this).addClass(animationClass);
    //             } else {
    //                 $(this).removeClass(animationClass);
    //             }
    //         });
    //     }
    
    //     animeScroll();
    
    //     $(document).scroll(debounce(function(){
    //         animeScroll();
    //     }, 200));
    // })();
    // console.log('teste')
});

