//Validation de l'ertms 
$('#valid-ertms-name').click(function () {
    $("#content-form-ertms").hide();
    $('#content-form-equipment').show();
})


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