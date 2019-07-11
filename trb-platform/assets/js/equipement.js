$(document).ready(function () {
    const $type_equipement = $('#equipement_Type');
    const $token = $('#equipement__token');
    let Equipments = [],
        i = 0;
    $('#form_equipement').on('submit', function (e) {

        e.preventDefault();
        let $form = $(this).closest('#form_equipement');
        let data = {}
        data[$token.attr('name')] = $token.val()
        data[$type_equipement.attr('name')] = $type_equipement.val()

        $.post($form.attr('action'), data).then(function (response) {
            console.log(response)
            $('#equipement_Sous_Type').replaceWith(
                $(response).find('#equipement_Sous_Type')
            )
        })
        // let data = {};
        Equipments.push(data);
        // $(this).serializeArray().forEach((object) => {
        //     data[object.name] = object.value;
        // });
        i++;
        let test = JSON.stringify(data);

        console.log(Equipments);
    })


    // $type_equipement.change(function () {

    //     let $form = $(this).closest('#form_equipement');
    //     let data = {}
    //     data[$token.attr('name')] = $token.val()
    //     data[$type_equipement.attr('name')] = $type_equipement.val()

    //     $.post($form.attr('action'), data).then(function (response) {
    //         console.log(response)
    //         $('#equipement_Sous_Type').replaceWith(
    //             $(response).find('#equipement_Sous_Type')
    //         )
    //     })
    // })
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