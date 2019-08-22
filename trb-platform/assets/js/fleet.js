$(document).ready(function () {
    $('#search-fleet').on('submit', function (e) {
        e.preventDefault();
    })
    $('#name_project').keyup(function (e) {
        e.preventDefault();
        let search = $(this).val();
        let data = 'motclef=' + search;

        if (search.length > 0) {
            $.ajax({
                url: '/alstom/search-fleet',
                type: 'POST',
                data: data,
                async: true,
                dataType: 'json', // JSON
                success: function (response) {
                    console.log(response);
                    response.forEach(element => {
                        console.log(element.name);

                    });
                    // $('#result-fleet').html(response).show();
                },
                error: function (xhr, textStatus, errorThrown) {
                    ('Ajax request failed.');
                }
            });
        }
    })
});