// Vidage des inputs aux changement de select
// $('select[name="trains[projects]"], select[name="trains[trainType]"]').change(function () {
//     $('input[name="trains[name]"]').val('');
// });

/*Masquage de certains élement */
$('#create-ertms-1').hide();
$('#create-ertms-2').hide();
$("#create-ertms-train-1").hide();
$('#create_soustype').hide();
$('#create_type').hide();
$('#modal-body').hide();
$('#modal_baseline_equipement').hide();
$('#close-modal-form-baseline-train').click(function () {
    $('#modal_baseline_equipement').hide();
})
for (let i = 1; i < 4; i++) {
    $('#btn-baseline-' + i).css('opacity', '0');
}
let idEquipment = "",
    indexEVC;

$(document).ready(function () {
    let nombre_url = extraitNombre(window.location.pathname);

    if (window.location.pathname == '/alstom/InstanceBaseline/' + nombre_url) {

        $('main').css("opacity", '0.4');
        $('#wait-spinner').show();
        $.post("/alstom/checkBaseline", ).then(function (response) {
            response.forEach(element => {
                //Remplissage par les element reçu du controller
                $('#select_baseline_1').append(new Option(element.name, element.id));
                $('#select_baseline_2').append(new Option(element.name, element.id));
            })

            $('#select_baseline_1').val('');
            $('#select_baseline_2').val('');
        }).done(function () {
            $('main').css("opacity", '1');
            $('#wait-spinner').hide();
        })
    }

})

$('#select_train').show();
$('#select_locomotive').show();

let current_choice = "",
    ertms_left = false,
    ertms_middle = false,
    ertms_right = false;

$('#close-modal-baseline-1').click(function () {
    if (ertms_right == true) {
        $('#content-form-baseline-2').addClass('offset-md-6');
        $('#content-form-baseline-1').hide();
    } else {
        $('#content-form-baseline-1').hide();
    }
    ertms_left = false;
})
$('#close-modal-baseline-2').click(function () {
    $('#content-form-baseline-2').hide();
    ertms_right = false;
})
$('#ertms-train-1').click(function () {
    ertms_left = true;
    ertms_middle = false;
    //l'ertms de gauche selectionner
    $('#ertms-train-1').addClass("selected");
    $('#ertms-train-2').removeClass("selected");
    $('#label-baseline-1').text('Baseline left');
    $('#content-form-baseline-1').removeClass('offset-md-3');
    $('#content-form-baseline-1').show();
    if (ertms_right == false) {
        $('#content-form-baseline-2').hide();

    } else {

        $('#content-form-baseline-2').removeClass('offset-md-6');
    }


});
$('#ertms-train-2').click(function () {
    // l'ertms du milieu selectionner
    ertms_left = false;
    ertms_right = false;
    ertms_middle = true;
    $('#ertms-train-2').addClass("selected");
    $('#ertms-train-1').removeClass("selected");
    $('#ertms-train-3').removeClass("selected");
    $('#label-baseline-1').text('Baseline midle');
    $('#content-form-baseline-2').hide();
    $('#content-form-baseline-1').show();
    $('#content-form-baseline-1').addClass('offset-md-3');

});
$('#ertms-train-3').click(function () {
    // l'ertms de droite selectionner
    $('#ertms-train-3').addClass("selected");
    ertms_right = true;
    ertms_middle = false;
    $('#label-baseline-2').text('Baseline right');
    if (ertms_left == true && ertms_middle == false) {
        $('#content-form-baseline-1').removeClass('offset-md-3');
        $('#content-form-baseline-2').removeClass('offset-md-6');
        $('#content-form-baseline-2').show();
    } else if (ertms_right == true && ertms_left == false) {
        $('#content-form-baseline-1').removeClass('offset-md-3');
        $('#content-form-baseline-1').hide();
        $('#content-form-baseline-2').addClass('offset-md-6');
        $('#content-form-baseline-2').show();
    }

    $('#ertms-train-2').removeClass("selected");
});


$('#ertms-loco-1').click(function () {
    ertms_left = true;
    if (ertms_right == true) {
        $('#content-form-baseline-2').removeClass('offset-md-6');
        $('#content-form-baseline-1').show();
    } else {
        $('#content-form-baseline-1').show();
    }
    $('#label-baseline-1').text('Baseline left');
    $('#ertms-loco-1').addClass("selected");
    $('#ertms-loco-2').removeClass("selected");
    $('#btn-baseline-1').css('opacity', '1');
    $('#btn-baseline-3').css('opacity', '0');
});
$('#ertms-loco-2').click(function () {
    ertms_right = true;
    $('#label-baseline-2').text('Baseline right');
    $('#btn-baseline-3').css('opacity', '1')
    $('#btn-baseline-1').css('opacity', '0')
    $('#ertms-loco-2').addClass("selected");
    $('#ertms-loco-1').removeClass("selected");
    if (ertms_left == true) {
        $('#content-form-baseline-2').removeClass('offset-md-6');

        $('#content-form-baseline-2').show();
    } else {
        $('#content-form-baseline-2').addClass('offset-md-6');
        $('#content-form-baseline-2').show();

    }

});

//Recupere le select de la baseline et le met en visuel
$('#add-baseline-1').click(function (e) {

    e.preventDefault();
    $('main').css("opacity", '0.4');
    $('#wait-spinner').show();
    if (ertms_middle) {
        $('#ertms-train-3').css('opacity', '0');
        $('#ertms-train-1').css('opacity', '0');
    } else if (ertms_left) {
        $('#ertms-train-2').css('opacity', '0');
    }
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
            $('#modal_baseline_equipement').show();
            $('main').css('opacity', '0.4');
            let Equipments = JSON.parse(response.equipments);

            Equipments.forEach(CountNumberEquipt);
            Equipments.forEach(FindIndexEvc);
            Equipments.forEach(returnIndexElement);
        },
        error: function (xhr, textStatus, errorThrown) {
            ('Ajax request failed.');
        }
    });

})

$('#add-baseline-2').click(function (e) {
    e.preventDefault();
    $('#ertms-train-2').css('opacity', '0');

    // $('#content-form-baseline-1').hide();
    let name_baseline_1 = $('#select_baseline_2 option:selected').val();
    console.log(name_baseline_1)
    // $('#content-name-baseline-1').append("<h5>" + name_baseline_1 + "</h5>")

})

// Requete AJAX pour remplir le formulaire d'équipement avec l'equipement selectionner
$('#show-equipment ').on('click', '.description > .content-description-dtr > button', function (e) {
    e.preventDefault();
    $('#modal_baseline_equipement').hide();
    $('.main-ertms').css("opacity", '0.4');
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
let new_equipment_num = "",
    totalEquipt = "",
    new_equipment_num_serie = [];

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
            $('#modal_baseline_equipement').show();
            $('#btn-add-number-serie' + idEquipment).replaceWith("<p>" + response.numSerie + "</p>")
            new_equipment_num_serie.push(response);
            new_equipment_num++;
            console.log(response);
        },
        error: function (xhr, textStatus, errorThrown) {
            ('Ajax request failed.');
        }
    });

})
//Valider l'instance des equipements
$('#valid-baseline-train').click(function () {
    if (new_equipment_num != totalEquipt) {
        alert('please enter num serie before instance baseline')
    } else {

        let id_train = extraitNombre(window.location.pathname);
        let id_baseline = $('#select_baseline_1 option:selected').val();
        $('main').css("opacity", '0.4');
        $('#wait-spinner').show();
        $.ajax({
            url: '/alstom/addBaselineInstancier',
            type: 'POST',
            data: {
                id_train: id_train,
                baseline: id_baseline,
                new_equipt: new_equipment_num_serie
            },
            async: true,
            dataType: 'json', // JSON
            success: function (response) {
                console.log(response)
                window.location.href = "/alstom/baseline-train/" + response.idbaseline;
                $('main').css("opacity", '1');
                $('#wait-spinner').hide();

            },
            error: function (xhr, textStatus, errorThrown) {
                ('Ajax request failed.');
            }
        });
    }

})
// Requete AJAX pour remplir le formulaire d'équipement avec l'equipement selectionner instancier
$('.card').on('click', '.edit-delete-equipement > a', function (e) {
    e.preventDefault();
    $('.main-ertms').css("opacity", '0.4');
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

        $("#show-equipment").append('<div class="description" id="description-equipement-' + index + '"></div>');
        $("#description-equipement-" + index + "").append(writeType(4, element['type']['name']));
        $("#description-equipement-" + index + "").addClass("description-SubtypeCard")
        if (element['SousType'] != null) {
            $("#description-equipement-" + index + "").append(writeSubtype(5, element['SousType']['name']));
        }
        $("#description-equipement-" + index + "").append('<div class="content-description-dtr" id="content-description-' +
            index + '"></div>');
        $("#content-description-" + index + "").append('<p>' + element["dTRBoard"] + '</p>')
        $("#content-description-" + index + "").append('<p>' + element["indiceDTR"] + '</p>')
        if (element['numSerie'] == "") {
            $("#content-description-" + index + "").append('<button class="btn btn-secondary" style="padding: 2px" id = "btn-add-number-serie' + element['id'] + '" > Add number of serie </button>')
        } else {
            $("#content-description-" + index + "").append('<p>' + element['numSerie'] + '</p>')
        }
        indexEVC = $("#description-equipement-" + index + "");
    }
}

function returnIndexElement(element, index, array) {


    index = element['id'];

    if ((element['Status'] == true) && element['type']['id'] != "1") {

        //Test l'existence de la div dans le cas où elle existe la remplace si pas la met en place
        if ($('#description-equipement-' + index).length) {
            $('#description-equipement-' + index).replaceWith('<div class="description" id="description-equipement-' + index + '"></div>')
        } else {
            $("#show-equipment").append('<div class="description" id="description-equipement-' + index + '"></div>');
        }

        //test si l'équipement est la carte ou non
        if (element['type']['id'] != "2") {

            //Swith replacement de l'id du type avec son nom
            $("#description-equipement-" + index + "").append(writeType(4, element['type']['name']));

            if (element['SousType'] != null) {
                $("#description-equipement-" + index + "").append(writeSubtype(5, element['SousType']['name']));
            }

            $("#description-equipement-" + index + "").append('<div class="content-description-dtr" id="content-description-' +
                index + '"></div>');
            $("#content-description-" + index + "").append('<p>' + element["dTRBoard"] + '</p>')
            $("#content-description-" + index + "").append('<p>' + element["indiceDTR"] + '</p>')
            if (element['numSerie'] == "") {
                $("#content-description-" + index + "").append('<button class="btn btn-secondary" style="padding: 2px" id = "btn-add-number-serie' + element['id'] + '" > Add number of serie </button>')
            } else {
                $("#content-description-" + index + "").append('<p>' + element['numSerie'] + '</p> <a id="edit-' + index + '"><i class="fas fa-edit"></i> </a> <a id="delete-' + index + '"><i class = "fas fa-trash-alt poubelle"> </i></a>')
            }
            // $("#content-description-" + index + "").append(writeEditDelete(index));

        } else {

            //Ecris le nom du type "carte" sous le type  EVC
            $(indexEVC).append(writeType(5, element['SousType']['name']));
            //Parcous le type de soustype 
            // $(indexEVC).append(writeSubtype(6, element['SousType']['name']));

            $(indexEVC).append('<div class="content-description-dtr content-description-dtrCard" id="content-description-' +
                index + '"></div>');
            $("#content-description-" + index + "").append('<p>' + element["dTRBoard"] + '</p>')
            $("#content-description-" + index + "").append('<p>' + element["indiceDTR"] + '</p>')
            if (element['numSerie'] == "") {
                $("#content-description-" + index + "").append('<button class="btn btn-secondary" style="padding: 2px" id = "btn-add-number-serie' + element['id'] + '" > Add number of serie </button>')
            } else {
                $("#content-description-" + index + "").append('<p>' + element['numSerie'] + '</p> <a id="edit-' + index + '"><i class="fas fa-edit"></i> </a> <a id="delete-' + index + '"><i class = "fas fa-trash-alt poubelle"> </i></a>')

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