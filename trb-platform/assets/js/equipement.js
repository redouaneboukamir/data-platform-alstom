$('#formulaire-equipment').hide();
$('#content-form-equipment').hide();
$('#show-equipment').hide();
$('#modal-content-form-equipement').hide();
const $type = $('#equipement_Type')
let Equipments = [],
    i = 0,
    previous = "";

$type.change(function () {
    const $form = $(this).closest('form')
    let data = {}
    data[$type.attr('name')] = $type.val()

    $.post($form.attr('action'), data).then(function (response) {
        console.log(response)
        console.log(data)
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
        // evc = data['equipement[Type]'];
        data[name] = value;
    })
    console.log(data)
    $.ajax({
        url: $this.attr('action'),
        type: $this.attr('method'),
        data: data,
        async: true,
        dataType: 'json', // JSON
        success: function (data) {
            console.log($this.val())
            console.log(data)
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