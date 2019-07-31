$('#form_baseline').on('submit', function (e) {
    e.preventDefault();
    var $this = $(this);
    let data = {};
    $this.find('[name]').each(function (index, value) {
        var that = $(this),
            name = that.attr('name'),
            value = that.val();

        data[name] = value;
        ertmsName = data[name];

    })
    $.ajax({
        url: $this.attr('action'),
        type: $this.attr('method'),
        data: {
            baseline: data
        },
        async: true,
        dataType: 'json', // JSON
        success: function (response) {
            $('#title_baseline').text(response.baseline.name)
            $('#form_baseline').hide();
        },
        error: function (xhr, textStatus, errorThrown) {
            ('Ajax request failed.');
        }
    });

})

$('#form_version').on('submit', function (e) {
    e.preventDefault();
    var $this = $(this);
    let data = {};
    $this.find('[name]').each(function (index, value) {
        var that = $(this),
            name = that.attr('name'),
            value = that.val();

        data[name] = value;
        ertmsName = data[name];

    })
    $.ajax({
        url: $this.attr('action'),
        type: $this.attr('method'),
        data: {
            version: data
        },
        async: true,
        dataType: 'json', // JSON
        success: function (response) {

            $('#title_version').text(response.version.releaseNote)
            $('#form_version').hide();
        },
        error: function (xhr, textStatus, errorThrown) {
            ('Ajax request failed.');
        }
    });

})
$('#form_add_baseline_logs').on('submit', function (e) {
    e.preventDefault();
    $('.main-logs').css("opacity", '0.4');
    $('#wait-spinner').show();
    var $this = $(this);
    let data = {};
    $this.find('[name]').each(function (index, value) {
        var that = $(this),
            name = that.attr('name'),
            value = that.val();
        data[name] = value;
        ertmsName = data[name];

    })
    $.ajax({
        url: $this.attr('action'),
        type: $this.attr('method'),
        data: {
            assoc: data
        },
        async: true,
        dataType: 'json', // JSON
        success: function (response) {
            console.log(data)
            $('.main-logs').css("opacity", '1');
            $('#wait-spinner').hide();
        },
        error: function (xhr, textStatus, errorThrown) {
            ('Ajax request failed.');
        }
    });

})