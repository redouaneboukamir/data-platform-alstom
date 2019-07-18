//Masquage de certains modale de la page
$('#formulaire-equipment').hide();
$('#content-form-equipment').hide();
$('#modal-content-form-equipement').hide();

//Delcaration variable
const $type = $('#equipement_Type');
$type.attr('required', 'required');

let Equipments = [],
    i = 0,
    index = 0,
    tabIndexEquipt = []
select = document.createElement("select"),
    previous = "",
    tabEquipementType = ["EVC", "CARTE", "SENSOR", "DMI"],
    tabEquipementSubtype = ["CORE", "TUI", "SDMU", "SENSE", "TWINS"];

//Vidage des inputs au refresh de la page
$(document).ready(function () {
    $('#equipement_sous_type').empty();
    $(':input', '#form_equipement').not(':button, :submit, :reset, :hidden').val('');
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
            index++;
        },
        error: function (xhr, textStatus, errorThrown) {
            ('Ajax request failed.');
        }
    });

    $('#modal-content-form-equipement').hide();
    $('#create-equipment').show();
    $('#show-equipment').show();
    console.log(Equipments);

    $("#show-equipment").append('<div class="description" id="description-equipement-' + index + '"></div>');
    switch (Equipments[index]["equipement[Type]"]) {
        case "1":
            $("#description-equipement-" + index + "").append(writeType(0));
            break;
        case "2":
            $("#description-equipement-" + index + "").append(writeType(1));
            break;
        case "3":
            $("#description-equipement-" + index + "").append(writeType(2));
            break;
        case "4":
            $("#description-equipement-" + index + "").append(writeType(3));
            break;
    }
    switch (Equipments[index]["equipement[sous_type]"]) {
        case "1":
            $("#description-equipement-" + index + "").append(writeSubtype(0));
            break;
        case "2":
            $("#description-equipement-" + index + "").append(writeSubtype(1));
            break;
        case "3":
            $("#description-equipement-" + index + "").append(writeSubtype(2));
            break;
        case "4":
            $("#description-equipement-" + index + "").append(writeSubtype(3));
            break;
        case "5":
            $("#description-equipement-" + index + "").append(writeSubtype(4));
            break;
    }
    $("#description-equipement-" + index + "").append('<div class="content-description-dtr" id="content-description-' +
        index + '"></div>');
    $("#content-description-" + index + "").append('<p>' + Equipments[index]["equipement[DTR_board]"] + '</p>')
    $("#content-description-" + index + "").append('<p>' + Equipments[index]["equipement[Indice_DTR]"] + '</p>')
    $("#content-description-" + index + "").append('<p>' + Equipments[index]["equipement[Num_serie]"] + '</p>')
    $("#content-description-" + index + "").append(writeEditDelete(index));

});
$('#show-equipment').on('click', '.edit-delete-equipement', function () {

    $('.edit-delete-equipement').on('click', 'a', function () {
        $('#description-equipement-' + ($(this)[0]["id"][7])).remove();
        Equipments.splice(($(this)[0]["id"][7]), 1);
        console.log("l'index supprimer" + $(this)[0]["id"][7]);
    })
});

Equipments.forEach(element => {

});

function writeType(index) {
    return '<h4 class="description-Type " id="description-type ">' + tabEquipementType[index] + '</h4>';
};

function writeSubtype(index) {
    return '<h5 class="description - Type " id="description-subType ">' + tabEquipementSubtype[index] + '</h5>';
};

function writeEditDelete(index) {
    return ' <p class="edit-delete-equipement"> <a id="edit-' + index + '"><i class="fas fa-edit"></i> </a> <a id="delete-' + index + '"><i class = "fas fa-trash-alt poubelle"> </i></a></p>';
};





/*au click de l'add Equipment afficher le formulaire d'ajout d'équipement*/
$('#create-equipment').click(function () {
    $('#create-equipment').hide();
    $('#show-equipment').hide();
    $('#modal-content-form-equipement').show();
    $('#equipement_sous_type').empty();
    $(':input', '#form_equipement').not(':button, :submit, :reset, :hidden').val('');
    previous = "equipment";

});
$('#close-equipement').click(function () {
    $('#modal-content-form-equipement').hide();
    $('#create-equipment').show();
})


$("#previous-equipment").click(function () {

    if (previous == "equipment") {
        $('#formulaire-equipment').hide();
        $('#create-equipment').show();
        previous = "add-equipment";
    } else if (previous == "add-equipment") {
        $('#content-form-equipment').hide();
        $("#content-form-ertms").show();
    }
});