$(document).ready(function(){

    $('.burger-menu').on('click', function(){
        $('.menu_block').toggleClass('active_menu');
        $(this).toggleClass("menu-on");
    })
});

$('.first_slider').owlCarousel({
    items:1,
    loop:true,
    center:true,
    margin:10,
    autoplay:true,
    nav:true,

});



var pauseButton = $('.play_Now'),
// vid = $('.video_section_three'),
    pnow = $('.play_Now');

pauseButton.on('click', function () {
    $('.video_section_three').css("opacity","1");

        if($('.video_section_three').trigger('pause')){
            $('.video_section_three').trigger('play');
            pnow.html('Paused') ;
            $(".play_img").css("opacity","0");
        }
        else{
            pnow.html('Play Now') ;
            $('.video_section_three').trigger('pause');
            $(".play_img").css("opacity",".5")
        }

    });

