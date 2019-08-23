var searchRequest = null;
$(document).ready(function () {
    $('#search-fleet').on('submit', function (e) {
        e.preventDefault();
    })
    $('#name_project').keyup(function (e) {
        let that = this;
        let search = $(this).val();
        let data = 'motclef=' + search;

        if (search.length > 0) {

            if (searchRequest != null)
                searchRequest.abort();
            searchRequest = $.ajax({
                url: '/alstom/search-fleet',
                type: 'POST',
                data: data,
                // async: false,
                dataType: 'json', // JSON
                success: function (response) {
                    $('.element-result').remove();
                    let tabName = JSON.parse(response.projectsFound);

                    if (tabName.length == 0 || !search) {
                        $('.element-result').remove();
                        $('#result-fleet').append('<p class="element-result">Results Not Found</p>');

                    } else {
                        tabName.forEach(element => {
                            console.log(element);
                            $('#result-fleet').append('<a href="/alstom/project/' + element.name + '"><p class="element-result">' + element.name + '</p>');

                        });
                    }
                },
                error: function (xhr, textStatus, errorThrown) {
                    ('Ajax request failed.');
                }
            });
        } else {
            $('.element-result').remove();
        }
    })
    $('#addTrainsToFleet').click(function () {
        $train_select = $('#select-train-fleet');

        $('#modal-form-train-fleet').css('z-index', '-99');
        $('#wait-spinner').show();

        $.post("/alstom/checkTrains").then(function (response) {
            console.log(response);
            response.forEach(element => {
                //Remplissage par les element reçu du controller
                $train_select.append(new Option(element.name, element.id));
            })
        }).done(function () {
            // $train_select.selectpicker('refresh');
            $('#wait-spinner').hide();
            $('#modal-form-train-fleet').css('z-index', '9999');
        })
    })
    $('#valid-train-fleet').on('click', function (e) {
        e.preventDefault();
        let idProject = extraitNombre(window.location.pathname);
        let tabTrains = [];
        tabTrains.push();
        var $this = $('#formulaire-train-fleet');
        let data = {};

        $this.find('[name]').each(function (index, value) {
            var that = $(this),
                name = that.attr('name'),
                value = that.val();

            data[name] = value;
            console.log(data);
        })
        $.ajax({
            url: '/alstom/addTrainToFleet/' + idProject,
            type: 'POST',
            data: data,
            // async: false,
            dataType: 'json', // JSON
            success: function (response) {
                console.log($('#select-train-fleet').val());
            },
            error: function (xhr, textStatus, errorThrown) {
                ('Ajax request failed.');
            }
        })
    })

});

//Extrait le nombre d'une streing
function extraitNombre(str) {
    return Number(str.replace(/[^\d]/g, ""))
}