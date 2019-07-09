$(document).ready(function () {

    let $equipement_type = $('#equipement_Type');
    let $token = $('equipement_token')

    $equipement_type.change(function () {

        let $form = $(this).closest('form');
        let data = {};

        data[$token.attr('name')] = $token.val();
        data[$equipement_type.attr('name')] = $equipement_type.val();
        console.log(data);

        $.post($form.attr('action'), data).then(function (response) {
            $('#equipement_Sous_Type').replaceWith($(response).find('#equipement_Sous_Type'))
        });

    })
})

let previous = "";

$('#formulaire-equipment').hide();
$('#content-form-equipment').hide();
$('#show-equipment').hide();

/*au click de l'add Equipment afficher le formulaire d'ajout d'équipement*/
$('#create-equipment').click(function () { // $('#modal-body').show();
    $('#formulaire-equipment').show();
    $('#create-equipment').hide();
    $('#show-equipment').hide();
    previous = "equipment";

});
$("#previous-equipment").click(function () {

    if (previous == "equipment") {
        $('#formulaire-equipment').hide();
        $('#create-equipment').show();
        previous = "add-equipment";
    } else if (previous == "add-equipment") {
        $('#content-form-equipment').hide();
        $("#content-form-ertms").show();
    }
})
$('#close-equipement').click(function () {
    $('#modal-body').hide();
    $('#create-equipment').show();
    $('#create_type').hide();
    $('#create_soustype').hide();
})

$('#create-ertms-1').click(function () {})


$('#valid-equipment').click(function () {})