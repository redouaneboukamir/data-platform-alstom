    let data = {};
    const $fleet = $('#fleet_select');
    const $train = $('#train_select');
    const $ertms = $('#ertms_select');

    var $eventLog = $(".js-event-log");
    var $eventSelect = $(".js-example-events");
    // $eventSelect.select2();

    $(document).ready(function () {

        if (window.location.pathname == '/alstom/search-logs') {

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
        console.log($fleet.val());
        $train.empty();
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
            $('main').css("opacity", '1');
            $('#wait-spinner').hide();
        })
    })