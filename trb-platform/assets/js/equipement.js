//Masquage de certains modale de la page
$('#formulaire-equipment').hide();
$('#content-form-equipment').hide();
$('#modal-content-form-equipement').hide();
$('#previous-equipment').hide();

//Delcaration variable
const $type = $('#equipement_Type');
$type.attr('required', 'required');

let Equipments = [],
    i = 0,
    indexEVC = 0,
    posIndex = 0,
    PresenceEVC = false,
    tabIndexEquipt = []
select = document.createElement("select"),
    previous = "",
    tabEquipementType = ["EVC", "CARTE", "SENSOR", "DMI"],
    tabEquipementSubtype = ["CORE", "TUI", "SDMU", "SENSE", "TWINS"];

//Vidage des inputs au refresh de la page
$(document).ready(function () {
    let data = {}
    data[$type.attr('name')] = $type.val()

    $('#equipement_sous_type').empty();
    $.post("/alstom/checkSubtype", data).then(function (response) {
        //Vidage champ soustype
        $('#equipement_sous_type').empty();
        response.forEach(element => {
            //Remplissage par les element reçu du controller
            $('#equipement_sous_type').append(new Option(element.name, element.id));
        })

    })
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
    let data = {};
    //Rempli data a partir des valeur des inputs
    $this.find('[name]').each(function (index, value) {
        var that = $(this),
            name = that.attr('name')
        if (name != ("equipement[_token]") && name != ("soumission_equipement")) {
            value = that.val();
            data[name] = value;
        }

    })
    //Remplis le tableau des équipements
    Equipments.push(data);

    //Effecture la requête ajax de la fonction du controller
    $.ajax({
        url: $this.attr('action'),
        type: $this.attr('method'),
        data: {
            equipement: data,
            tabEquipts: Equipments
        },
        async: true,
        dataType: 'json', // JSON
        success: function (response) {

        },
        error: function (xhr, textStatus, errorThrown) {
            ('Ajax request failed.');
        }
    });

    $('#modal-content-form-equipement').hide();
    $('#create-equipment').show();
    $('#show-equipment').show();
    $('#previous-equipment').hide();
    //Boucle les équipements et les installe au front
    Equipments.forEach(returnIndexElement);
});

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
            $('#create-equipment').hide();
            $('#show-equipment').hide();
            $('#modal-content-form-equipement').show();
        }
    }
}
//Gére le clique de la suppression
$('#show-equipment').on('click', '.edit-delete-equipement > a', function () {
    if ($(this)[0]["id"][0] == "d") {
        deleteEquipment(extraitNombre($(this)[0]["id"]));
    }
});
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
    $('#equipement_sous_type').empty();
    $(':input', '#form_equipement').not(':button, :submit, :reset, :hidden').val('');
    previous = "equipment";

});
$('#close-equipement').click(function () {
    $('#modal-content-form-equipement').hide();
    $('#show-equipment').show();
    $('#create-equipment').show();
    $('#previous-equipment').hide();
})



$("#previous-equipment").click(function (e) {
    e.preventDefault();
    $('#modal-content-form-equipement').hide();
    $('#show-equipment').show();
    $('#create-equipment').show();
    $('#previous-equipment').hide();
});

//Requete AJAX de la partie ERTMS
let ertmsName;
$('#form_ertms').on('submit', function (e) {
    e.preventDefault();
    var $this = $(this);
    let data = {};
    $this.find('[name]').each(function (index, value) {
        var that = $(this),
            name = that.attr('name'),
            value = that.val();
        if (name == "ertms[name_configuration]") {
            data[name] = value;
            ertmsName = data[name];
        }
    })
    $.ajax({
        url: $this.attr('action'),
        type: $this.attr('method'),
        data: {
            ertmsName: data
        },
        async: true,
        dataType: 'json', // JSON
        success: function (response) {
            console.log(data)
        },
        error: function (xhr, textStatus, errorThrown) {
            ('Ajax request failed.');
        }
    });

})
//Validation de l'ertms 
$('#valid-ertms-name').click(function () {
    $("#content-form-ertms").hide();
    $('#content-form-equipment').show();
})

$('#create-ertms').click(function () {
    if ($("#ertms_name_configuration").val() == "") {
        alert("Please enter a configuration name ");
        return false
    }
    $('#show-equipment').show();
})

//Validation de tous les équipements et de l'ertms

$('#valid-all-equipments').on('click', function (e) {
    e.preventDefault();
    if (Equipments != "") {
        $.ajax({
            url: '/alstom/flush-all-equipt',
            type: 'POST',
            data: {
                ertmsName: ertmsName,
                tabEquipts: Equipments
            },
            async: true,
            dataType: 'json', // JSON
            success: function (response) {
                window.location.href = "/alstom/ertms";
            },
            error: function (xhr, textStatus, errorThrown) {
                ('Ajax request failed.');
            }
        });

    } else {
        alert('Please enter Equipments before valid');
    }

})

$('#edit-equipement').on('click', function () {
    e.preventDefault();
    $.ajax({
        url: '/alstom/edit-equipment',
        type: 'POST',
        data: {
            ertmsName: ertmsName,
            tabEquipts: Equipments
        },
        async: true,
        dataType: 'json', // JSON
        success: function (response) {

        },
        error: function (xhr, textStatus, errorThrown) {
            ('Ajax request failed.');
        }
    });

})