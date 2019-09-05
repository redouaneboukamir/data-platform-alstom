import '../scss/app.scss';
import './equipement';
import './baseline';
import './progressBar';
import './test-upload';
import './train';
import './plug';
import './fleet';
import './logs';
import './user';
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
    // $('.grid').masonry({
    //     itemSelector: '.grid-item',
    //     columnWidth: '.grid-sizer',
    //     percentPosition: true
    // });

    function alignModal() {
        var modalDialog = $(this).find(".modal-dialog");
        // Applying the top margin on modal dialog to align it vertically center
        modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
    } -
    // Align modal when it is displayed
    $(".modal").on("shown.bs.modal", alignModal);
    // Align modal when user resize the window
    $(window).on("resize", function () {
        $(".modal:visible").each(alignModal);
    });
    $('.button-left').click(function () {
        $('.sidebar').toggleClass('fliph');
    });


});