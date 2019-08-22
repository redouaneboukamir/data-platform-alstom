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

                    JSON.parse(response.projectsFound).forEach(element => {
                        console.log(element.name);
                        $('#result-fleet').append('<p>' + element.name + '</p>');

                    });
                },
                error: function (xhr, textStatus, errorThrown) {
                    ('Ajax request failed.');
                }
            });
        }
    })
});