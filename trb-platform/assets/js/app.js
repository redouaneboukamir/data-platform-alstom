import '../scss/app.scss';
import './train';
import './ertms';
import './equipement';
import './baseline';

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

$(document).ready(function () {
    $('pre').remove();
    $('.button-left').click(function () {
        $('.sidebar').toggleClass('fliph');
    });
    $('.sidebar').hover(function () {
            $('main').removeClass('col-lg-12');
            $('main').removeClass('pl-5');
            $('main').css('transition', 'all 0.6s ease-in-out');
            $('main').addClass('col-lg-10');

        },
        function () {
            $('main').removeClass('col-lg-10');
            $('main').css('transition', 'all 0.6s ease-in-out');
            $('main').addClass('pl-5');
            $('main').addClass('col-lg-12');
        })

});