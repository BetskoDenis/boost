$(document).ready(function(){

    $('.burger-menu').on('click', function(){
        $('.menu_block').toggleClass('active_menu');
        $(this).toggleClass("menu-on");
    })
});

$(function(){
$('.first_slider').owlCarousel({
    items:1,
    loop:true,
    center:true,
    margin:10,
    autoplay:true,
    nav:true,

});
$('.slider_two').owlCarousel({
    items:2,
    loop:true,
    center:true,
    margin:10,
    nav:true,

});
})


var pauseButton = $('.play_Now'),
    playIn = $('.video_section_three'),
// vid = $('.video_section_three'),
    pnow = $('.play_Now');

// pauseButton.on('click', function () {
//     $('.video_section_three').css("opacity","1").toggleClass('play');
//
//     if($('.video_section_three').hasClass('play')){
//         $('.video_section_three').trigger('play');
//         pnow.html('Paused') ;
//         $(".play_img").css("opacity","0");
//     }
//     else {
//         pnow.html('Play Now') ;
//         $('.video_section_three').trigger('pause');
//         $(".play_img").css("opacity",".5");
//         $('.video_section_three').css("opacity",".5")
//     }
//
// });

function videoBlock(selector) {
    selector.on('click', function () {
        $('.video_section_three').css("opacity","1").toggleClass('play');

        if($('.video_section_three').hasClass('play')){
            $('.video_section_three').trigger('play');
            pnow.html('Paused') ;
            $(".play_img").css("opacity","0");
        }
        else {
            pnow.html('Play Now') ;
            $('.video_section_three').trigger('pause');
            $(".play_img").css("opacity",".5");
            $('.video_section_three').css("opacity",".5")
        }

    });
}
videoBlock(pauseButton);
videoBlock(playIn);

$(document).ready(function($) {
    $('.tab_content').hide();
    $('.tab_content:first').show();
    $('.tabs li:first').addClass('active');
    $('.tabs li').click(function(event) {
        $('.tabs li').removeClass('active');
        $(this).addClass('active');
        $('.tab_content').hide();

        var selectTab = $(this).find('a').attr("href");

        $(selectTab).fadeIn();
    });
});