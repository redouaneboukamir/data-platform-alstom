$('#form_ertms').on('submit', function (e) {
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
    $.ajax({
        url: $this.attr('action'),
        type: $this.attr('method'),
        data: data,
        async: true,
        dataType: 'json', // JSON
        success: function (response) {
            console.log(data)
            console.log(response)
        },
        error: function (xhr, textStatus, errorThrown) {
            ('Ajax request failed.');
        }
    });

})

$('#valid-ertms-name').click(function () {
    $("#content-form-ertms").hide();
    $('#content-form-equipment').show();
    previous = "add-equipment";
})

$('#create-ertms').click(function () {
    if ($("#ertms_name_configuration").val() == "") {
        alert("Please enter a configuration name ");
        return false
    }

})