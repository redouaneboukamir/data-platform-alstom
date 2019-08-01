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

});