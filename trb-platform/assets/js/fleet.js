var searchRequest = null;

$(document).ready(function () {
    // Submit du champ de recherche de fleet situé au dessus du tableau de l'onglet fleet
    $('#search-fleet').on('submit', function (e) {
        e.preventDefault();
    })
    // fonction éffectué appuyé a chaque touche
    $('#name_project').keyup(function (e) {

        let search = $(this).val();
        let data = 'motclef=' + search;
        // Si la recherche contient une lettre
        if (search.length > 0) {

            if (searchRequest != null)
                searchRequest.abort();
            // Effectue la requête ajax vers le controller charger de renvoyer les fleets accessibles a l'user
            searchRequest = $.ajax({
                url: '/alstom/search-fleet',
                type: 'POST',
                data: data,
                dataType: 'json', // JSON
                success: function (response) {
                    console.log(response);
                    // Supprime les elements précedent pour de pas avoir de doublons
                    $('.element-result').remove();
                    let tabName = JSON.parse(response.fleetsFound);

                    if (tabName.length == 0 || !search) {
                        $('.element-result').remove();
                        // Dans le cas ou il ny'a pas de résultats concordant
                        $('#result-fleet').append('<p class="element-result">Results Not Found</p>');

                    } else {
                        tabName.forEach(element => {
                            console.log(element);
                            // ajout les élement contenant un lien vers les fleets trouver
                            $('#result-fleet').append('<a href="/alstom/fleets/' + element + '"><p class="element-result">' + element + '</p>');

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
    // Modal présent sur la page des fleet pour select train et y ajouter
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
    // Validation du train selectionner 
    // Envois une requête ajax vers le controller addTrainToFleet Pour y effectuer le traitement de l'ajout du train a la fleet
    $('#valid-train-fleet').on('click', function (e) {
        e.preventDefault();
        // Recupere l'id du projet
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
        })
        $.ajax({
            // effectue la requête ajax vers l'url du controller en passant en parametre l'id de la fleet
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

// Effecture l'affiche ou non des fleet quand on clique sur le projet parent
$('#tbody-fleets').on('click', '.project-fleet', function () {
    let id_project = extraitNombre($(this)[0]["id"]);
    $(this).toggleClass('show');

    if ($(this).hasClass('show')) {
        $('.fleets-project-' + id_project).hide();
        $('#arrow-up-' + id_project).removeClass('fa-chevron-up');
        $('#arrow-up-' + id_project).addClass('fa-chevron-down');

    } else {
        $('#arrow-up-' + id_project).removeClass('fa-chevron-down');
        $('#arrow-up-' + id_project).addClass('fa-chevron-up');
        $('.fleets-project-' + id_project).show();
    }
});

//Extrait le nombre d'une streing
function extraitNombre(str) {
    return Number(str.replace(/[^\d]/g, ""))
}