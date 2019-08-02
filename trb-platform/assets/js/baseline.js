//Masquage de certains modale de la page
$('#formulaire-equipment').hide();
$('#content-form-equipment').hide();
$('#modal-content-form-equipement').hide();
$('#previous-equipment').hide();
$('#wait-spinner').hide();

//Delcaration variable
const $type = $('#equipement_Type');
$type.attr('required', 'required');

let Equipments = [],
    i = 0,
    indexEVC = 0,
    posIndex = 0,
    PresenceEVC = false,
    idEquipment = 0,
    tabIndexEquipt = []
select = document.createElement("select"),
    previous = "",
    tabEquipementType = ["EVC", "CARTE", "SENSOR", "DMI"],
    tabEquipementSubtype = ["CORE", "TUI", "SDMU", "SENSE", "TWINS"];

//Vidage des inputs au refresh de la page
$(document).ready(function () {
    let data = {}
    data[$type.attr('name')] = $type.val()

    $.post("/alstom/checkSubtype", data).then(function (response) {
        //Vidage champ soustype
        $('#equipement_sous_type').empty();
        response.forEach(element => {
            //Remplissage par les element reçu du controller
            $('#equipement_sous_type').append(new Option(element.name, element.id));
        })

    })
    // $('#equipement_sous_type').empty();
    // $(':input', '#form_equipement').not(':button, :submit, :reset, :hidden').val('');
});

//AJAX Changement de sous-type en fonction du type
$type.change(function () {

    let data = {}
    data[$type.attr('name')] = $type.val()

    $.post("/alstom/checkSubtype", data).then(function (response) {
        //Vidage champ soustype
        $('#equipement_sous_type').empty();
        response.forEach(element => {
            //Remplissage par les element reçu du controller
            $('#equipement_sous_type').append(new Option(element.name, element.id));
        })

    })
})

//AJAX soumission formulaire d'ajout equipement
$('#form_equipement').on('submit', function (e) {

    //Empêche le chargement de la page sois fait automatiquement
    e.preventDefault();

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
        if (name == 'soumission_edit_equipement') {
            action = "edit";
        } else {
            action = "add";
        }

    })
    // Si le formulaire est pour ajouer un nouvel equipement
    if (action == "add") {
        //Remplis le tableau des équipements
        Equipments.push(data);
        //Effecture la requête ajax pour l'ajout d'équipement
        $.ajax({
            url: $this.attr('action'),
            type: $this.attr('method'),
            data: {
                tabEquipts: Equipments
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
        // Ou si le formulaire est pour éditer un equipement déja existant sur la page de l'ertms lié a celui-ci
    } else if (action == "edit") {
        let idErtms = extraitNombre(window.location.pathname);

        $.ajax({
            url: '/alstom/edit-equipment/' + idEquipment,
            type: $this.attr('method'),
            data: {
                equipement: data,
                idErtms: idErtms
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
    }

    $('#modal-content-form-equipement').hide();
    $('.modal-footer').show();
    $('#create-equipment').show();
    $('#show-equipment').show();
    $('#previous-equipment').hide();
    //Boucle les équipements et les installe au front
    Equipments.forEach(returnIndexElement);
});


//Validation de baseline 
$('#create-baseline').click(function () {
    if ($("#baseline_name").val() == "") {
        alert("Please enter a baseline name ");
        return false
    } else {
        $('#show-equipment').show();
    }

})

let baselineName;
$('#form_baseline').on('submit', function (e) {
    e.preventDefault();
    var $this = $(this);
    let data = {};

    $this.find('[name]').each(function (index, value) {
        var that = $(this),
            name = that.attr('name'),
            value = that.val();

        data[name] = value;

        if (name == 'baseline[name]') {

            baselineName = value;
        }

    })
    $.ajax({
        url: $this.attr('action'),
        type: $this.attr('method'),
        data: {
            baseline: data
        },
        async: true,
        dataType: 'json', // JSON
        success: function (response) {

            $('.title-baseline').text(response.baseline)
            $('#content-form-equipment').show();
            $('#previous-equipment').hide();

        },
        error: function (xhr, textStatus, errorThrown) {
            ('Ajax request failed.');
        }
    });

})
//Validation de tous les équipements et de la baseline
$('#valid-all-equipments').on('click', function (e) {
    e.preventDefault();
    console.log(baselineName)
    if (Equipments != "") {
        $('.main-baseline').css('opacity', "0.4");
        $('#wait-spinner').show();
        $.ajax({
            url: '/alstom/flush-all-equipt',
            type: 'POST',
            data: {
                baselineName: baselineName,
                tabEquipts: Equipments
            },
            async: true,
            dataType: 'json', // JSON
            success: function (response) {
                idBaseline = response.baseline;
                $('#wait-spinner').hide();
                window.location.href = "/alstom/baseline/" + idBaseline;
            },
            error: function (xhr, textStatus, errorThrown) {
                ('Ajax request failed.');
            }
        });

    } else {
        alert('Please enter Equipments before valid');
    }

})

//Gére le clique de la suppression
$('#show-equipment').on('click', '.edit-delete-equipement > a', function () {
    if ($(this)[0]["id"][0] == "d") {
        deleteEquipment(extraitNombre($(this)[0]["id"]));
    }
});


//cache le modal d'edit d'equipement
$('#modal-content-form-equipement-edit').hide();
// Gere la fermeture du modal d'edit d'equipement
$('#close-modal-form-equipment-edit').click(function () {
    $('#modal-content-form-equipement-edit').hide();
    $('.main-ertms').css("opacity", '1');
})
// Requete AJAX pour remplir le formulaire d'équipement avec l'equipement selectionner
$('.content-description-dtr').on('click', '.edit-delete-equipement > a', function (e) {
    e.preventDefault();
    $('.main-ertms').css("opacity", '0.4');
    $('#wait-spinner').show();

    idEquipment = extraitNombre($(this)[0]["classList"][0])
    var $this = $("#form_equipement_edit");
    let data = {};

    $.ajax({
        url: '/alstom/edit-equipment/' + idEquipment,
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

$('#form_equipement_edit').on('submit', function (e) {
    e.preventDefault();
    $('.main-ertms').css("opacity", '0.4');
    $('#form_equipement_edit').css("opacity", "0.4");
    $("#wait-spinner").css("z-index", "99999");
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
        url: '/alstom/edit-equipment/' + idEquipment,
        type: 'POST',
        data: {
            'equipement': data,
            "soumission_edit_equipement": true
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



function returnIndexElement(element, index, array) {

    //Test l'existence de la div dans le cas où elle existe la remplace si pas la met en place
    if ($('#description-equipement-' + index).length) {
        $('#description-equipement-' + index).replaceWith('<div class="description" id="description-equipement-' + index + '"></div>')
    } else {
        $("#show-equipment").append('<div class="description" id="description-equipement-' + index + '"></div>');
    }

    //test si l'équipement est la carte ou non
    if (element["equipement[Type]"] != "2") {
        //Swith replacement de l'id du type avec son nom
        switch (element["equipement[Type]"]) {
            case "1":
                $("#description-equipement-" + index + "").append(writeType(4, 0));
                $("#description-equipement-" + index + "").addClass("description-SubtypeCard")
                indexEVC = $("#description-equipement-" + index + "");
                break;
            case "3":
                $("#description-equipement-" + index + "").append(writeType(4, 2));
                break;
            case "4":
                $("#description-equipement-" + index + "").append(writeType(4, 3));
                break;
        }
        switch (element["equipement[sous_type]"]) {
            case "4":
                $("#description-equipement-" + index + "").append(writeSubtype(5, 3));
                break;
            case "5":
                $("#description-equipement-" + index + "").append(writeSubtype(5, 4));
                break;
        }
        $("#description-equipement-" + index + "").append('<div class="content-description-dtr" id="content-description-' +
            index + '"></div>');
        $("#content-description-" + index + "").append('<p>' + element["equipement[DTR_board]"] + '</p>')
        $("#content-description-" + index + "").append('<p>' + element["equipement[Indice_DTR]"] + '</p>')
        $("#content-description-" + index + "").append('<p>' + element["equipement[Num_serie]"] + '</p>')
        $("#content-description-" + index + "").append(writeEditDelete(index));

    } else {
        for (i = 0; i < Equipments.length; i++) {

            if (Equipments[i]["equipement[Type]"] == "1") {
                PresenceEVC = true;
            }
        };
        if (PresenceEVC) {
            //Ecris le nom du type "carte" sous le type  EVC
            $(indexEVC).append(writeType(5, 1));
            //Parcous le type de soustype 
            switch (element["equipement[sous_type]"]) {
                case "1":
                    $(indexEVC).append(writeSubtype(6, 0));
                    break;
                case "2":
                    $(indexEVC).append(writeSubtype(6, 1));
                    break;
                case "3":
                    $(indexEVC).append(writeSubtype(6, 2));
                    break;
            }

            $(indexEVC).append('<div class="content-description-dtr content-description-dtrCard" id="content-description-' +
                index + '"></div>');
            $("#content-description-" + index + "").append('<p>' + element["equipement[DTR_board]"] + '</p>')
            $("#content-description-" + index + "").append('<p>' + element["equipement[Indice_DTR]"] + '</p>')
            $("#content-description-" + index + "").append('<p>' + element["equipement[Num_serie]"] + '</p>')
            $("#content-description-" + index + "").append(writeEditDelete(index));
            $('#description-equipement-' + index).remove();
        } else {
            alert('Please enter EVC equipement before');
            $('#description-equipement-' + index).remove();
            Equipments.splice(index, 1);
            $('.modal-footer').hide();
            $('#create-equipment').hide();
            $('#show-equipment').hide();
            $('#modal-content-form-equipement').show();
        }
    }
}

//Supression de l'équipement dans le tableau et le front
function deleteEquipment(position) {
    Equipments.splice(position, 1);
    $('.description').remove();
    Equipments.forEach(returnIndexElement);
}
//Extrait le nombre de l'id des equipements
function extraitNombre(str) {
    return Number(str.replace(/[^\d]/g, ""))
}
//Ecris le titre du type d'équipement
function writeType(size, index) {
    return '<h' + size + ' class="description-Type " id="description-type ">' + tabEquipementType[index] + '</h' + size + '>';
};
//Ecris le titre du soustype d'équipement
function writeSubtype(size, index) {
    return '<h' + size + ' class="description-Type " id="description-subType ">' + tabEquipementSubtype[index] + '</h' + size + '>';
};
//Ecris le titre du soustype d'équipement
function writeSubtypeCard(size, index) {
    return '<h' + size + ' class="description-subtype" id="description-subType ">' + tabEquipementSubtype[index] + '</h' + size + '>';
};
//Ecrit les 2 icons d'edit et delete
function writeEditDelete(index) {
    return ' <p class="edit-delete-equipement"> <a id="edit-' + index + '"><i class="fas fa-edit"></i> </a> <a id="delete-' + index + '"><i class = "fas fa-trash-alt poubelle"> </i></a></p>';
};

/*au click de l'add Equipment afficher le formulaire d'ajout d'équipement*/
$('#create-equipment').click(function () {
    $('#create-equipment').hide();
    $('#show-equipment').hide();
    $('#modal-content-form-equipement').show();
    $('#previous-equipment').show();
    $('.modal-footer').hide();
    $('#equipement_sous_type').empty();
    $(':input', '#form_equipement').not(':button, :submit, :reset, :hidden').val('');
    previous = "equipment";
});
// Gere le click du previous
$("#previous-equipment").click(function (e) {
    e.preventDefault();
    $('#modal-content-form-equipement').hide();
    $('#show-equipment').show();
    $('#create-equipment').show();
    $('#previous-equipment').hide();
    $('.modal-footer').show();
});
$('#create-baseline').click(function () {
    $('#modal-content-form-equipement').hide();
    $('#show-equipment').show();
    $('#create-equipment').show();
    $('.modal-footer').show();
})
// Ferme le modal de formulaire d'ajout d'équipement
$('#close-equipement').click(function () {
    $('#modal-content-form-equipement').hide();
    $('#show-equipment').show();
    $('#create-equipment').show();
    $('#previous-equipment').hide();
})