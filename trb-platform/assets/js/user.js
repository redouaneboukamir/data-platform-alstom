$(document).ready(function () {

    $('#modal_delete').show();
    $('#modal_delete').css("opacity", "1 !important");
    $('#test_delete').click(function (e) {
        e.preventDefault();
        console.log("testtt");
        // $.ajax({
        //     url: '/admin/user/' + id + '/delete',
        //     type: 'GET',
        //     data: {},
        //     async: true,
        //     dataType: 'json', // JSON
        //     success: function (response) {
        //         console.log(response);
        //     },
        //     error: function (xhr, textStatus, errorThrown) {
        //         ('Ajax request failed.');
        //     }
        // });

    })

})