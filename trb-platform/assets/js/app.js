import '../scss/app.scss';
import './ertms';
import './equipement';
import './baseline';
import './train';

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
let labelCliked = false;
$(document).ready(function () {
    $('pre').remove();
    $('.button-left').click(function () {
        $('.sidebar').toggleClass('fliph');
    });
    $('.sidebar').hover(function () {
            $('main').removeClass('col-lg-12');
            $('main').removeClass('pl-5');
            $('main').removeClass('col-md-12');
            $('main').css('transition', 'all 0.6s ease-in-out');
            $('main').addClass('col-lg-10');
            $('main').addClass('col-md-9');

        },
        function () {
            $('main').removeClass('col-lg-10');
            $('main').removeClass('col-md-9');
            $('main').css('transition', 'all 0.6s ease-in-out');
            $('main').addClass('pl-5');
            $('main').addClass('col-lg-12');
            $('main').addClass('col-md-12');
        })
    $('.nav-label').click(function () {

        $('.fa-chevron-left').css('transform', 'rotatex(45deg)')
    })


});

$('#file_upload').on('submit', function (e) {

    e.preventDefault();
    var $this = $(this);
    $this.find('[name]').each(function (index, value) {
        var that = $(this),
            name = that.attr('name'),
            value = that.val();

        data[name] = value;

    })
    $.ajax({
        url: $this.attr('action'),
        type: $this.attr('method'),
        data: {
            file: data
        },
        async: true,
        dataType: 'json', // JSON
        success: function (response) {
            console.log(response);


        },
        error: function (xhr, textStatus, errorThrown) {
            ('Ajax request failed.');
        }
    });

})