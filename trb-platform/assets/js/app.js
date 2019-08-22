import '../scss/app.scss';
import './equipement';
import './baseline';
import './progressBar';
import './test-upload';
import './train';
import './plug';
import './fleet';
import './logs';

// loads the jquery package from node_modules
const $ = require('jquery');
// import the function from greet.js (the .js extension is optional)
// ./ (or ../) means to look for a local file
$('.post-module').hover(function () {
    $(this).find('.description').stop().animate({
        height: "toggle",
        opacity: "toggle"
    }, 300);
});
$('.post-module-fleet').hover(function () {
    $(this).find('.description-fleet').stop().animate({
        height: "toggle",
        opacity: "toggle"
    }, 300);
});

$('.fa-chevron-down').hide();

$(document).ready(function () {

    $('pre').remove();
    $('.button-left').click(function () {
        $('.sidebar').toggleClass('fliph');
    });
    $('.sidebar').hover(function () {
            $('main').css('transition', 'all 0.5s ease-in-out');
            $('main').addClass('ml-sm-auto');
            $('main').removeClass('offset-1');
            $('main').addClass('offset-2');
            $('.main-show').removeClass('col-lg-11');
        },
        function () {
            $('main').css('transition', 'all 0.10s ease-in-out');
            $('main').addClass('offset-1');
            $('main').removeClass('offset-2');
            $('main').removeClass('ml-sm-auto');
            $('.main-show').addClass('col-lg-11');
        })
    // $('main').removeClass('ml-sm-auto');
    $('.nav-label').click(function () {
        $('.fa-chevron-left').css('transform', 'rotatex(45deg)')
    })

});