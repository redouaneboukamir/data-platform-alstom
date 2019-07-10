$(document).ready(function () {

    let Equipments = [],
        i = 0;
    $('#form_equipement').on('submit', function (e) {
        e.preventDefault();
        let data = {};
        $(this).serializeArray().forEach((object) => {
            data[object.name] = object.value;
            Equipments[i].push(object.value);
            console.log(Equipments);
            console.log(object.value)
        });
        i++;
        let test = JSON.stringify(data);

        console.log(data);
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