$('#formulaire-equipment').hide();
$('#content-form-equipment').hide();
$('#show-equipment').hide();
$('#modal-content-form-equipement').hide();
const $type = $('#equipement_Type')
let Equipments = [],
    i = 0,
    select = document.createElement("select"),
    previous = "";
$(document).ready(function () {
    $('#equipement_sous_type').empty();
    $(':input', '#form_equipement').not(':button, :submit, :reset, :hidden').val('');
});


$type.change(function () {
    const $form = $(this).closest('form')
    let data = {}
    data[$type.attr('name')] = $type.val()

    $.post("/alstom/checkSubtype", data).then(function (response) {

        $('#equipement_sous_type').empty();
        elOption = new Array;

        response.forEach(element => {
            elOption.push(element);
            $('#equipement_sous_type').append(new Option(element.name, element.id));
        });
    })
})


$('#form_equipement').on('submit', function (e) {
    e.preventDefault();
    var $this = $(this);
    let data = {};
    $this.find('[name]').each(function (index, value) {
        var that = $(this),
            name = that.attr('name'),
            value = that.val();
        data[name] = value;
    })
    $.ajax({
        url: $this.attr('action'),
        type: $this.attr('method'),
        data: data,
        async: true,
        dataType: 'json', // JSON
        success: function (response) {
            console.log(response)
            Equipments.push(response);
            console.log(Equipments)
        },
        error: function (xhr, textStatus, errorThrown) {
            ('Ajax request failed.');
        }
    });

})



/*au click de l'add Equipment afficher le formulaire d'ajout d'équipement*/
$('#create-equipment').click(function () {
    $('#create-equipment').hide();
    $('#show-equipment').hide();
    $('#modal-content-form-equipement').show();
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