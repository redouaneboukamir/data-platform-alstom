// Vidage des inputs aux changement de select
// $('select[name="trains[projects]"], select[name="trains[trainType]"]').change(function () {
//     $('input[name="trains[name]"]').val('');
// });

/*Masquage de certains élement */
$('#create_soustype').hide();
$('#create_type').hide();
$('#modal-body').hide();
$('#modal_baseline_equipement').hide();
$('#close-modal-form-baseline-train').click(function () {
    $('#modal_baseline_equipement').hide();
})
let idEquipment = "",
    indexEVC;
let new_equipment_num = "",
    totalEquipt = "",
    new_equipment_num_serie = [];
var searchRequest = null;
$(document).ready(function () {
    $('#select_baselines_train').val('');
    $('#search-train').on('submit', function (e) {
        e.preventDefault();
    })
    $('#trains_search_name_train').keyup(function (e) {
        let that = this;
        let search = $(this).val();
        let data = 'motclef=' + search;

        console.log(search);

        if (search.length > 0) {
            if (searchRequest != null)
                searchRequest.abort();
            searchRequest = $.ajax({
                url: '/alstom/search-train',
                type: 'POST',
                data: data,
                // async: false,
                dataType: 'json', // JSON
                success: function (response) {
                    if (search == $(that).val()) {
                        $('.element-result').remove();
                        let tabName = JSON.parse(response.projectsFound);
                        console.log(tabName);
                        if (tabName.length == 0 || !search) {
                            $('.element-result').remove();
                            $('#result-train').append('<p class="element-result">Results Not Found</p>');

                        } else {
                            tabName.forEach(element => {
                                $('#result-train').append('<a href="/alstom/trains/' + element.name + '"><p class="element-result">' + element.name + '</p></a>');

                            });
                        }
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
    let nombre_url = extraitNombre(window.location.pathname);
    if (window.location.pathname == '/alstom/InstanceBaseline/' + nombre_url) {
        $('main').css('opacity', '0.4');
        $.post("/alstom/checkBaseline", ).then(function (response) {
            response.forEach(element => {
                //Remplissage par les element reçu du controller
                $('#select_baseline_1').append(new Option(element.name, element.id));
                $('#select_baseline_2').append(new Option(element.name, element.id));
            })

            $('#select_baseline_1').val('');
            $('#select_baseline_2').val('');
        }).done(function () {

            $('main').css('opacity', '1');
        })
    };
    $('#close-modal-baselineToTrain').click(function () {
        $('main').css('opacity', '1');
        $('#etcsid-name').empty()
        $('.description').remove();
        $('#modal_baseline_equipement').hide();
        new_equipment_num = 0;
    })
    $('#close-equipement-baseline').click(function () {
        $('#etcsid-name').empty()
        $('main').css('opacity', '1');
        $('.description').remove();
        $('#modal_baseline_equipement').hide();
        new_equipment_num = 0
        totalEquipt = 0
    })
})


//Recupere le select de la baseline et le met en visuel
$('#add-baseline').click(function (e) {
    $('.card-evc').remove();
    $('.li-equipment').remove();
    $('.li-card').remove();
    new_equipment_num = 0
    totalEquipt = 0;
    e.preventDefault();
    $('main').css("opacity", '0.4');
    $('#wait-spinner').show();

    // $('#content-form-baseline-1').hide();
    let idBaseline = $('#select_baseline_1 option:selected').val();
    $('#title_baseline_modal').html($('#select_baseline_1 option:selected').text());
    // $('#modal-content-form-equipement-edit').show();
    $.ajax({
        url: '/alstom/CheckEquipements/' + idBaseline,
        type: 'POST',
        data: {},
        async: true,
        dataType: 'json', // JSON
        success: function (response) {
            $('#wait-spinner').hide();
            $('main').css('opacity', '1');
            $('#modal_baseline_equipement').show();
            let Equipments = JSON.parse(response.equipments);
            console.log(Equipments);
            Equipments.forEach(CountNumberEquipt);
            Equipments.forEach(FindIndexEvc);
            Equipments.forEach(returnIndexElement);
        },
        error: function (xhr, textStatus, errorThrown) {
            ('Ajax request failed.');
        }
    });

})

// Requete AJAX pour remplir le formulaire d'équipement avec l'equipement selectionner
$('#show-equipment').add('#show-evc').on('click', '.li-equipment > .content-descr > button, .card-evc > .card-header-title > .description-SubtypeCard > .content-descr > button , .li-card > .todo-list-wrapper > .list-group-item > .widget-content-wrapper', function (e) {
    e.preventDefault();
    $('main').css("opacity", '0.4');
    $('#wait-spinner').show();

    idEquipment = extraitNombre($(this)[0]["id"])
    var $this = $("#form_equipement_edit_baseline");
    let data = {};

    $.ajax({
        url: '/alstom/edit-equipment-baseline/' + idEquipment,
        type: 'POST',
        data: {

        },
        async: true,
        dataType: 'json', // JSON
        success: function (response) {

            $('#equipement_Type').val(response["type"]["id"]);
            data[$('#equipement_Type').attr('name')] = $('#equipement_Type').val();

            $.post("/alstom/checkSubtype", data).then(function (response) {
                //Vidage champ soustype
                $('#equipement_sous_type').empty();
                response.forEach(element => {
                    //Remplissage par les element reçu du controller
                    $('#equipement_sous_type').append(new Option(element.name, element.id));
                })

            }).done(function () {

                $('.main-ertms').css("opacity", '0.4');
                $('#wait-spinner').show();

                //Rempli input avec valeur recu de l'equipement
                $this.find('[name]').each(function (index, value) {
                    var that = $(this);
                    switch (value.id) {
                        case 'equipement_Type':
                            break;
                        case 'equipement_sous_type':
                            if (response["SousType"] != null) {
                                $('#' + value.id).val(response["SousType"]["id"]);
                            }
                            break;
                        case 'equipement_DTR_board':
                            $('#' + value.id).val(response["dTRBoard"])
                            break;
                        case 'equipement_Indice_DTR':
                            $('#' + value.id).val(response["indiceDTR"])
                            break;
                        case 'equipement_Num_serie':
                            $('#' + value.id).val(response["numSerie"])
                            break;
                    }
                })
                $('#wait-spinner').hide();
                $('#modal-content-form-equipement-edit').show();
            })
        },
        error: function (xhr, textStatus, errorThrown) {
            ('Ajax request failed.');
        }
    });
});
$('#previous-equipment-instance').click(function (e) {
    e.preventDefault();
    $('#modal-content-form-equipement-edit').hide();
    $('#modal_baseline_equipement').show();
})
//Remplir les inputs avec les nouvelles valeurs
$('#soumission-equipement-edit-baseline').click(function () {
    e.preventDefault();
    $('main').css("opacity", '0.4');
    $('#wait-spinner').show();
    var $this = $(this);
    let data = {};

    $this.find('[name]').each(function (index, value) {
        var that = $(this),
            name = that.attr('name'),
            value = that.val();
        data[name] = value;
    })
    console.log(data);

})


// Soumission formulaire de train
$('#form_equipement_edit_baseline').on('submit', function (e) {

    e.preventDefault();
    $('main').css("opacity", '0.4');
    $('#wait-spinner').show();
    var $this = $(this);
    let data = {};

    $this.find('[name]').each(function (index, value) {
        var that = $(this),
            name = that.attr('name'),
            value = that.val();

        data[name] = value;
    })

    $.ajax({
        url: '/alstom/edit-equipment-baseline/' + idEquipment,
        type: $this.attr('method'),
        data: {
            equipement: data
        },
        async: true,
        dataType: 'json', // JSON
        success: function (response) {
            $('main').css("opacity", '1');
            $('#wait-spinner').hide();
            $('#modal-content-form-equipement-edit').hide();
            $('#btn-add-number-serie' + idEquipment).replaceWith("<p style='color:#000000;font-weight:bold;text-transform:uppercase'>" + response.numSerie + "</p>")
            new_equipment_num_serie.push(response);
            new_equipment_num++;
        },
        error: function (xhr, textStatus, errorThrown) {
            ('Ajax request failed.');
        }
    });

})

//Valider l'instance des equipements
$('#valid-baseline-train').click(function () {
    console.log(new_equipment_num);
    console.log(totalEquipt)
    if (new_equipment_num != totalEquipt) {
        alert('please enter num serie before instance baseline')
    } else {
        let etcsId = $('#etcsid-name').val();
        let id_train = extraitNombre(window.location.pathname);
        let id_baseline = $('#select_baseline_1 option:selected').val();
        let name_baseline = $('#select_baseline_1 option:selected').text();
        $('main').css("opacity", '0.4');
        $('#wait-spinner').show();
        $.ajax({
            url: '/alstom/addBaselineInstancier',
            type: 'POST',
            data: {
                id_train: id_train,
                baseline: id_baseline,
                new_equipt: new_equipment_num_serie,
                etcsId: etcsId
            },
            async: true,
            dataType: 'json', // JSON
            success: function (response) {
                console.log(response)
                id_baseline_instance = response.idbaseline;
                // window.location.href = "/alstom/baseline-train/" + response.idbaseline;
                $('#title-etcsid').append('<tr><td class="text-left text-muted">' + name_baseline + '</td><td class="text-left text-muted">' + etcsId + '</td></tr>');
                $('#modal_baseline_equipement').hide();
                console.log(totalEquipt);
                totalEquipt = 0;
                new_equipment_num = 0;
                console.log(totalEquipt);
                $('main').css("opacity", '1');
                $('#wait-spinner').hide();

            },
            error: function (xhr, textStatus, errorThrown) {
                ('Ajax request failed.');
            }
        });
    }

})

$('#valid-all-baselines').click(function () {
    if (id_baseline_instance != null) {
        window.location.href = "/alstom/baseline-train/" + id_baseline_instance;
    }
})
$('#select_baselines_train').change(function () {
    window.location.href = "/alstom/baseline-train/" + $(this).val();
})
// Requete AJAX pour remplir le formulaire d'équipement avec l'equipement selectionner instancier
$('.card').on('click', '.edit-baseline-instance > a', function (e) {
    e.preventDefault();
    $('.main-ertms').css("opacity", '0.4');
    $('.wait-spinner-content').show();
    $('#wait-spinner').show();

    idEquipment = extraitNombre($(this)[0]["classList"][0])
    var $this = $("#form_equipement_edit_instance");
    let data = {};
    $('#wait-spinner').show();
    $.ajax({
        url: '/alstom/edit-equipment-instance/' + idEquipment,
        type: 'POST',
        data: {},
        async: true,
        dataType: 'json', // JSON
        success: function (response) {

            $('#equipement_Type').val(response["type"]["id"]);
            data[$('#equipement_Type').attr('name')] = $('#equipement_Type').val();

            $.post("/alstom/checkSubtype", data).then(function (response) {
                //Vidage champ soustype
                $('#equipement_sous_type').empty();
                response.forEach(element => {
                    //Remplissage par les element reçu du controller
                    $('#equipement_sous_type').append(new Option(element.name, element.id));
                })

            }).done(function () {

                //Rempli input avec valeur recu de l'equipement
                $this.find('[name]').each(function (index, value) {
                    var that = $(this);
                    switch (value.id) {
                        case 'equipement_Type':
                            break;
                        case 'equipement_sous_type':
                            if (response["SousType"] != null) {
                                $('#' + value.id).val(response["SousType"]["id"]);
                            }
                            break;
                        case 'equipement_DTR_board':
                            $('#' + value.id).val(response["dTRBoard"])
                            break;
                        case 'equipement_Indice_DTR':
                            $('#' + value.id).val(response["indiceDTR"])
                            break;
                        case 'equipement_Num_serie':
                            $('#' + value.id).val(response["numSerie"])
                            break;
                    }
                })
                $('#wait-spinner').hide();
                $('.wait-spinner-content').hide();
                $('#modal-content-form-equipement-edit').show();
            })
        },
        error: function (xhr, textStatus, errorThrown) {
            ('Ajax request failed.');
        }
    });
});
//Formulaire d'edit de l'équipement
$('#form_equipement_edit_instance').on('submit', function (e) {
    e.preventDefault();
    $('.main-ertms').css("opacity", '0.4');
    $('#form_equipement_edit').css("opacity", "0.4");

    $('#wait-spinner').show();
    var $this = $(this);
    let data = {},
        action;
    //Rempli data a partir des valeur des inputs
    $this.find('[name]').each(function (index, value) {
        var that = $(this),
            name = that.attr('name')

        if (name != ("equipement[_token]") && name != ("soumission_equipement")) {
            value = that.val();
            data[name] = value;
        }
    })
    $.ajax({
        url: '/alstom/edit-equipment-instance/' + idEquipment,
        type: 'POST',
        data: {
            'equipement': data,
            "soumission_edit_equipement": true,
            'idequipment': idEquipment
        },
        async: true,
        dataType: 'json', // JSON
        success: function (response) {
            location.reload();
            $('#wait-spinner').hide();
            $('#modal-content-form-equipement-edit').show();
        },
        error: function (xhr, textStatus, errorThrown) {
            ('Ajax request failed.');
        }
    });

})

function FindIndexEvc(element, index, array) {
    index = element['id'];
    if (element['type']['id'] == "1" && (element['Status'] == true)) {

        $("#show-evc").append('<div class="card-header-tab card-header card-evc"> <div class = "card-header-title font-size-lg text-capitalize font-weight-normal"> <div class="" id="description-equipement-' + index + '"></div> </div> </div>');
        $("#description-equipement-" + index + "").append(writeType(3, element['type']['name']));
        $("#description-equipement-" + index + "").addClass("description-SubtypeCard")
        if (element['SousType'] != null) {
            $("#description-equipement-" + index + "").append(writeSubtype(5, element['SousType']['name']));
        }
        $("#description-equipement-" + index + "").append('<div class="content-descr" id="content-description-' +
            index + '"></div>');
        $("#content-description-" + index + "").append('<p>' + element["dTRBoard"] + '</p>')
        $("#content-description-" + index + "").append('<p>' + element["indiceDTR"] + '</p>')
        if (element['numSerie'] == "") {
            $("#content-description-" + index + "").append('<button class="mb-2 mr-2 btn-transition btn-shadow btn btn-outline-secondary" style="padding: 2px" id = "btn-add-number-serie' + element['id'] + '" > Add number of serie </button>')
        } else {
            $("#content-description-" + index + "").append('<p>' + element['numSerie'] + '</p>')
        }
        indexEVC = $("#show-evc");
    }
}

function returnIndexElement(element, index, array) {


    index = element['id'];

    if ((element['Status'] == true) && element['type']['id'] != "1") {


        //test si l'équipement est la carte ou non
        if (element['type']['id'] != "2") {
            //Test l'existence de la div dans le cas où elle existe la remplace si pas la met en place
            if ($('#description-equipement-' + index).length) {
                $('#description-equipement-' + index).replaceWith('<li class="list-group-item li-equipment" id="description-equipement-' + index + '"></li>')
            } else {
                $("#show-equipment").append('<li class="list-group-item li-equipment" id="description-equipement-' + index + '"></li>');
            }
            //Swith replacement de l'id du type avec son nom
            $("#description-equipement-" + index + "").append('<div class="widget-content-left mr-2"><h3>' + element['type']['name'] + '</h3></div>');

            if (element['SousType'] != null) {
                $("#description-equipement-" + index + "").append('<div class="widget-content-left mr-2" style="color:black; font-weight:bold">' + element['SousType']['name'] + '</div>');
            }

            $("#description-equipement-" + index + "").append('<div class="widget-content-right widget-content-actions content-descr" id="content-descr-' +
                index + '"></div>');
            $("#content-descr-" + index + "").append('<p>' + element["dTRBoard"] + '</p>')
            $("#content-descr-" + index + "").append('<p>' + element["indiceDTR"] + '</p>')
            if (element['numSerie'] == "") {
                $("#content-descr-" + index + "").append('<button class="mb-2 mr-2 btn-transition btn-shadow btn btn-outline-secondary" style="padding: 2px" id = "btn-add-number-serie' + element['id'] + '" > Add number of serie </button>')
            } else {
                $("#content-descr-" + index + "").append('<p>' + element['numSerie'] + '</p> <a id="edit-' + index + '"><i class="fas fa-edit"></i> </a> <a id="delete-' + index + '"><i class = "fas fa-trash-alt poubelle"> </i></a>')
            }
            // $("#content-description-" + index + "").append(writeEditDelete(index));

        } else {

            //Ecris le nom du type "carte" sous le type  EVC
            $(indexEVC).append('<div style="position: static;" class="ps ps--active-y li-card"><ul class="todo-list-wrapper list-group list-group-flush"><li class="list-group-item"><div class="widget-content-wrapper" id="content-description-' +
                index + '"></li></ul></div>');
            $("#content-description-" + index + "").append('<div class="widget-content-left mr-2" style="color:black; font-weight:bold">' + element['SousType']['name'] + '</div>');

            $("#content-description-" + index + "").append('<div class="widget-content-right widget-content-actions content-descr" id="content-descr-' +
                index + '"></div>');
            $("#content-descr-" + index + "").append('<p>' + element["dTRBoard"] + '</p>')
            $("#content-descr-" + index + "").append('<p>' + element["indiceDTR"] + '</p>')
            if (element['numSerie'] == "") {
                $("#content-descr-" + index + "").append('<button class="mb-2 mr-2 btn-transition btn-shadow btn btn-outline-secondary" style="padding: 2px" id = "btn-add-number-serie' + element['id'] + '" > Add number of serie </button>')
            } else {
                $("#content-descr-" + index + "").append('<p>' + element['numSerie'] + '</p> <a id="edit-' + index + '"><i class="fas fa-edit"></i> </a> <a id="delete-' + index + '"><i class = "fas fa-trash-alt poubelle"> </i></a>')

            }

            // $("#content-description-" + index + "").append(writeEditDelete(index));
            $('#description-equipement-' + index).remove();
        }
    }
}

function CountNumberEquipt(element, index, array) {
    totalEquipt++;
}
//Extrait le nombre d'une streing
function extraitNombre(str) {
    return Number(str.replace(/[^\d]/g, ""))
}
//Ecris le titre du type d'équipement
function writeType(size, name) {
    return '<h' + size + ' class="description-Type " id="description-type ">' + name + '</h' + size + '>';
};
//Ecris le titre du soustype d'équipement
function writeSubtype(size, name) {
    return '<h' + size + ' class="description-Type " id="description-subType ">' + name + '</h' + size + '>';
};
//Ecris le titre du soustype d'équipement
function writeSubtypeCard(size, name) {
    return '<h' + size + ' class="description-subtype" id="description-subType ">' + name + '</h' + size + '>';
};
// //Ecrit les 2 icons d'edit et delete
// function writeEditDelete(index) {
//     return ' <p class="edit-delete-equipement"> <a id="edit-' + index + '"><i class="fas fa-edit"></i> </a></p>';
// };