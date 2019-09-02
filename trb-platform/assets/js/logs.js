const $fleet = $('#fleet_select');
const $train = $('#train_select');
const $ertms = $('#ertms_select');
const typeLog = $('#select_type_log');
const typeLogText = $('#select_type_log');
let data = {};
//detection si le browser gère le drag&drop
var isAdvancedUpload = function () {
    var div = document.createElement('div');
    return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
}();
var $form = $('.drag-log');
var $input = $form.find('input[type="file"]'),
    $label = $form.find('label'),
    showFiles = function (files) {
        $label.text(files.length > 1 ? ($input.attr('data-multiple-caption') || '').replace('{count}', files.length) : files[0].name);
    };
typeLog.hide();
typeLogText.hide();
$form.hide();

$(document).ready(function () {
    if (window.location.pathname == '/alstom/add-logs') {
        //identification de la progress bar
        prgbar = new ldBar("#test-progress");

        $('main').css("opacity", '0.4');
        $('#wait-spinner').show();
        $.post("/alstom/checkFleet", ).then(function (response) {
            response.forEach(element => {
                //Remplissage par les element reçu du controller
                $fleet.append(new Option(element.name, element.id));
            })
            $.post("/alstom/checkTrainByFleet", {
                'id': $fleet.val()
            }).then(function (response) {
                response.forEach(element => {
                    //Remplissage par les element reçu du controller
                    $train.append(new Option(element.name, element.id));
                })
                $.post("/alstom/checkErtmsByTrain", {
                    'id': $train.val()
                }).then(function (response) {
                    response.forEach(element => {
                        //Remplissage par les element reçu du controller
                        $ertms.append(new Option(element.name, element.id));
                    })
                }).done(function () {
                    $('main').css("opacity", '1');
                    $('#wait-spinner').hide();
                })
            })
        })
    }

})

$fleet.change(function () {
    $('#select_type_log').hide();

    console.log($fleet.val());
    $train.empty();
    $ertms.empty();
    $('main').css("opacity", '0.4');
    $('#wait-spinner').show();
    $.post("/alstom/checkTrainByFleet", {
        'id': $fleet.val()
    }).then(function (response) {
        response.forEach(element => {
            //Remplissage par les element reçu du controller
            $train.append(new Option(element.name, element.id));
        })
    }).done(function () {
        $('main').css("opacity", '1');
        $('#wait-spinner').hide();
    })
})
$train.change(function () {
    typeLog.hide();

    console.log($fleet.val());
    $ertms.empty();
    $('main').css("opacity", '0.4');
    $('#wait-spinner').show();
    $.post("/alstom/checkErtmsByTrain", {
        'id': $train.val()
    }).then(function (response) {
        response.forEach(element => {
            //Remplissage par les element reçu du controller
            $ertms.append(new Option(element.name, element.id));
        })
    }).done(function () {
        $ertms.val('');
        typeLog.show();
        $form.show();
        $('main').css("opacity", '1');
        $('#wait-spinner').hide();
    })
})


$ertms.change(function () {
    typeLog.show();
    $form.show();
})


if (isAdvancedUpload) {
    var droppedFiles = false;
    $form.addClass('has-advanced-upload'); // letting the CSS part to know drag&drop is supported by the browser
    $form.on('drag dragstart dragend dragover dragenter dragleave drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });
    $form.on('dragover dragenter', function () {
        $form.addClass('is-dragover');
    });
    $form.on('dragleave dragend drop', function () {
        $form.removeClass('is-dragover');

    });
    $form.on('drop', function (e) {
        droppedFiles = e.originalEvent.dataTransfer.files;
        $form.trigger('submit');
        $('.label-drop').text(droppedFiles[0].name);
        $('.label-drop').css('font-weight', 'bold');
    });
    $form.change('drop', function (e) {
        droppedFiles = e.originalEvent.dataTransfer.files;
        $form.trigger('submit');
    });
}
let Log = {},
    idBaseline = "";
$form.on('submit', function (e) {

    if (droppedFiles) {

        Log['name_log'] = $('#type_log_select').val();
        idBaseline = $('#ertms_select').val();
        console.log($('#ertms_select').val());
        // Parti du traitement du drag an drop file
        if ($form.hasClass('is-uploading')) return false;
        showFiles(droppedFiles);
        $form.addClass('is-uploading').removeClass('is-error');

        if (isAdvancedUpload) {
            var ajaxData = new FormData($form.get(0));

            if (droppedFiles) {
                $.each(droppedFiles, function (i, file) {
                    ajaxData.append($input.attr('name'), file);
                    Log['key_log'] = file.name;

                });
            }
            $.ajax({
                url: '/alstom/uploadLog',
                type: 'POST',

                xhr: function () {
                    var xhr = new window.XMLHttpRequest();
                    xhr.upload.addEventListener("progress", function (evt) {
                        console.log(evt.loaded);
                        if (evt.lengthComputable) {
                            var percentComplete = (evt.loaded / evt.total) * 100;
                            //Do something with upload progress here
                            prgbar.set(percentComplete);
                            if (percentComplete == 100) {
                                $("#test-progress").addClass('is-blink');
                                console.log(evt.loaded);
                                evt.total = 0;
                            }
                        }
                    }, false);
                    return xhr;
                },

                data: ajaxData,
                dataType: 'json',
                cache: false,
                contentType: false,
                processData: false,
                complete: function () {
                    $form.removeClass('is-uploading');
                    $("#test-progress").removeClass('is-blink');

                },
                success: function (data) {
                    $form.addClass(data.success == true ? 'is-success' : 'is-error');
                    valid = true;
                },
                error: function () {
                    // Log the error, show an alert, whatever works for you
                    console.log("sorry boby");
                }
            });
        } else {
            var iframeName = 'uploadiframe' + new Date().getTime();
            $iframe = $('<iframe name="' + iframeName + '" style="display: none;"></iframe>');

            $('body').append($iframe);
            $form.attr('target', iframeName);

            $iframe.one('load', function () {
                var data = JSON.parse($iframe.contents().find('body').text());
                $form
                    .removeClass('is-uploading')
                    .addClass(data.success == true ? 'is-success' : 'is-error')
                    .removeAttr('target');
                if (!data.success) $errorMsg.text(data.error);
                $form.removeAttr('target');
                $iframe.remove();
            });
        }
    }
});

$('#valid-all-logs').on('click', function (e) {

    e.preventDefault();
    $('main').css('opacity', "0.4");
    $('#wait-spinner').show();
    $.ajax({
        url: '/alstom/flush-log',
        type: 'POST',
        data: {
            'log': Log,
            'baseline': idBaseline,
        },
        async: true,
        dataType: 'json', // JSON
        success: function (response) {
            //ask for the status
            console.log(response)
            // location.reload();
        }
    })
})
$('.td-table').on('click', '.td-plug', function (e) {
    e.preventDefault();
    $('main').css('opacity', "0.4");
    $('#wait-spinner').show();

    let key = $(this)[0]["id"];
    $.ajax({
        url: '/alstom/donwloadFile',
        type: 'POST',
        data: {
            'key': key
        },
        async: true,
        dataType: 'json', // JSON
        success: function (response) {
            window.location.href = response;
            $('main').css('opacity', "1");
            $('#wait-spinner').hide();
            console.log(response);
        }
    })
})