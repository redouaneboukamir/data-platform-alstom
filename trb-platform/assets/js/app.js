import '../scss/app.scss';
import './equipement';
import './baseline';
import './progressBar';
import './test-upload';
import './train';
import './plug';
import './fleet';
import './logs';
import './dashboard/custom';
// import './dashboard/dashboard1';
import './dashboard/bootstrap.min';
// import './dashboard/morris.min';
import './perfect-scrollbar.jquery.min';
import './dashboard/popper.min';
import './dashboard/raphael-min';

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

});