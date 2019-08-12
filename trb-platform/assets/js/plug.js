$('#form_plug').on('submit', function (e) {

    let baseline = extraitNombre(window.location.pathname);

    console.log($form);
    $.ajax({
        url: '/alstom/add-plug',
        type: 'GET',
        dataType: "text",
        data: {
            id: baseline
        },
        async: true,
        success: function (response) {
            console.log(response)
        },
        error: function (xhr, textStatus, errorThrown) {
            ('Ajax request failed.');
        }
    });

})

//Extrait le nombre d'une streing
function extraitNombre(str) {
    return Number(str.replace(/[^\d]/g, ""));
}