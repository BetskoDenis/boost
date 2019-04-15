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
    dots:false,


});
$('.slider_two').owlCarousel({
    items:3,
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }

});
    $('.left_info').owlCarousel({
        items:1,
        loop:true,

        dots:true


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




    $(document).ready(function(){
        var owl = $('.owl-item');


    $('.left_info').on('changed.owl.carousel', function(event) {

if (owl.hasClass('active')){

    var skills = $('.left_info_item').attr('data-href');
//     //     proba = $('document.className'),
        skillsjane =  $('.right_skills.jane').attr('data-href'),
        skillsyuliy =  $('.right_skills.yuliy').attr('data-href'),
        skillsvasiliy =  $('.right_skills.vasiliy').attr('data-href'),

    skillsInfo = [skillsjane, skillsyuliy, skillsvasiliy];

    for (var i=0; i<skillsInfo.length; ++i){
        if(skills == skillsInfo[i]){
            alert(skillsInfo[i]);
            // skillsInfo[i].css('display', 'block');
            // skillsInfo[i].css("display:block");
        }
    }
//
//      alert(skills);

    //  alert(document.className)
    // // if(skills == skillsInfo){
    //     $('.right_skills').css('display', 'block');
    }


//}
//
    })
//
})