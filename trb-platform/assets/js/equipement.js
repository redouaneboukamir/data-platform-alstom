//Masquage de certains modale de la page
$('#formulaire-equipment').hide();
$('#content-form-equipment').hide();
$('#modal-content-form-equipement').hide();

//Delcaration variable
const $type = $('#equipement_Type');
let Equipments = [],
    i = 0,
    select = document.createElement("select"),
    previous = "";

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
        $('#equipement_sous_type').empty();
        elOption = new Array;
        response.forEach(element => {
            elOption.push(element);
            $('#equipement_sous_type').append(new Option(element.name, element.id));
        })

    })
})

//AJAX soumission formulaire d'ajout equipement
$('#form_equipement').on('submit', function (e) {
    //Empêche le chargement de la page
    e.preventDefault();
    //test qu'il y"a un bien type sélectionner
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
            console.log(response)

        },
        error: function (xhr, textStatus, errorThrown) {
            ('Ajax request failed.');
        }
    });
    console.log(Equipments);
    $('#modal-content-form-equipement').hide();
    $('#create-equipment').show();
    $('#show-equipment').show();


})




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