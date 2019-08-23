(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ "./assets/scss/app.scss");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _equipement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equipement */ "./assets/js/equipement.js");
/* harmony import */ var _equipement__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_equipement__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseline */ "./assets/js/baseline.js");
/* harmony import */ var _baseline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baseline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _progressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progressBar */ "./assets/js/progressBar.js");
/* harmony import */ var _progressBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_progressBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _test_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test-upload */ "./assets/js/test-upload.js");
/* harmony import */ var _test_upload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_test_upload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _train__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./train */ "./assets/js/train.js");
/* harmony import */ var _train__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_train__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plug__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plug */ "./assets/js/plug.js");
/* harmony import */ var _plug__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_plug__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fleet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fleet */ "./assets/js/fleet.js");
/* harmony import */ var _fleet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fleet__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _logs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logs */ "./assets/js/logs.js");
/* harmony import */ var _logs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_logs__WEBPACK_IMPORTED_MODULE_8__);








 // loads the jquery package from node_modules

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); // import the function from greet.js (the .js extension is optional)
// ./ (or ../) means to look for a local file


$('.post-module').hover(function () {
  $(this).find('.description').stop().animate({
    height: "toggle",
    opacity: "toggle"
  }, 300);
});
$('.post-module-fleet').hover(function () {
  $(this).find('.description-fleet').stop().animate({
    height: "toggle",
    opacity: "toggle"
  }, 300);
});
$('.fa-chevron-down').hide();
$(document).ready(function () {
  $('pre').remove();
  $('.button-left').click(function () {
    $('.sidebar').toggleClass('fliph');
  });
  $('.sidebar').hover(function () {
    $('main').css('transition', 'all 0.5s ease-in-out');
    $('main').addClass('ml-sm-auto');
    $('main').removeClass('offset-1');
    $('main').addClass('offset-2');
    $('.main-show').removeClass('col-lg-11');
  }, function () {
    $('main').css('transition', 'all 0.10s ease-in-out');
    $('main').addClass('offset-1');
    $('main').removeClass('offset-2');
    $('main').removeClass('ml-sm-auto');
    $('.main-show').addClass('col-lg-11');
  }); // $('main').removeClass('ml-sm-auto');

  $('.nav-label').click(function () {
    $('.fa-chevron-left').css('transform', 'rotatex(45deg)');
  });
});

/***/ }),

/***/ "./assets/js/baseline.js":
/*!*******************************!*\
  !*** ./assets/js/baseline.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {//Masquage de certains modale de la page
$('#formulaire-equipment').hide();
$('#content-form-equipment').hide();
$('#modal-content-form-equipement').hide();
$('#previous-equipment').hide();
$('#wait-spinner').hide(); //Delcaration variable

var $type = $('#equipement_Type');
$type.attr('required', 'required');
var Equipments = [],
    i = 0,
    indexEVC = 0,
    posIndex = 0,
    PresenceEVC = false,
    idEquipment = 0,
    tabIndexEquipt = [];
select = document.createElement("select"), previous = "", tabEquipementType = ["EVC", "CARTE", "SENSOR", "DMI"], tabEquipementSubtype = ["CORE", "TUI", "SDMU", "SENSE", "TWINS"]; //Vidage des inputs au refresh de la page

$(document).ready(function () {
  var data = {};
  data[$type.attr('name')] = $type.val();

  if (window.location.pathname == '/alstom/create_baseline') {
    $('main').css("opacity", '0.4');
    $('#wait-spinner').show();
    $.post("/alstom/checkSubtype", data).then(function (response) {
      $('main').css("opacity", '1');
      $('#wait-spinner').hide(); //Vidage champ soustype

      $('#equipement_sous_type').empty();
      response.forEach(function (element) {
        //Remplissage par les element reçu du controller
        $('#equipement_sous_type').append(new Option(element.name, element.id));
      });
    });
  } // $('#equipement_sous_type').empty();
  // $(':input', '#form_equipement').not(':button, :submit, :reset, :hidden').val('');

}); //AJAX Changement de sous-type en fonction du type

$type.change(function () {
  var data = {};
  data[$type.attr('name')] = $type.val();
  $('#wait-spinner').show();
  $.post("/alstom/checkSubtype", data).then(function (response) {
    //Vidage champ soustype
    $('#wait-spinner').hide();
    $('#equipement_sous_type').empty();
    response.forEach(function (element) {
      //Remplissage par les element reçu du controller
      $('#equipement_sous_type').append(new Option(element.name, element.id));
    });
  });
}); //AJAX soumission formulaire d'ajout equipement

$('#form_equipement').on('submit', function (e) {
  //Empêche le chargement de la page sois fait automatiquement
  e.preventDefault();
  $('#wait-spinner').show();
  var $this = $(this);
  var data = {},
      action; //Rempli data a partir des valeur des inputs

  $this.find('[name]').each(function (index, value) {
    var that = $(this),
        name = that.attr('name');

    if (name != "equipement[_token]" && name != "soumission_equipement") {
      value = that.val();
      data[name] = value;
    }

    if (name == 'soumission_edit_equipement') {
      action = "edit";
    } else {
      action = "add";
    }
  }); // Si le formulaire est pour ajouer un nouvel equipement

  if (action == "add") {
    //Remplis le tableau des équipements
    Equipments.push(data); //Effecture la requête ajax pour l'ajout d'équipement

    $.ajax({
      url: $this.attr('action'),
      type: $this.attr('method'),
      data: {
        tabEquipts: Equipments
      },
      async: true,
      dataType: 'json',
      // JSON
      success: function success(response) {
        console.log(response);
        $('main').css("opacity", '1');
        $('#wait-spinner').hide();
      },
      error: function error(xhr, textStatus, errorThrown) {
        'Ajax request failed.';
      }
    }); // Ou si le formulaire est pour éditer un equipement déja existant sur la page de l'ertms lié a celui-ci
  } else if (action == "edit") {
    var idErtms = extraitNombre(window.location.pathname);
    $.ajax({
      url: '/alstom/edit-equipment/' + idEquipment,
      type: $this.attr('method'),
      data: {
        equipement: data,
        idErtms: idErtms
      },
      async: true,
      dataType: 'json',
      // JSON
      success: function success(response) {
        console.log(response);
        $('main').css("opacity", '1');
        $('#wait-spinner').hide();
      },
      error: function error(xhr, textStatus, errorThrown) {
        'Ajax request failed.';
      }
    });
  }

  $('#modal-content-form-equipement').hide();
  $('.modal-footer').show();
  $('#create-equipment').show();
  $('#show-equipment').show();
  $('#previous-equipment').hide(); //Boucle les équipements et les installe au front

  Equipments.forEach(returnIndexElement);
}); //Validation de baseline 

$('#create-baseline').click(function () {
  if ($("#baseline_name").val() == "") {
    alert("Please enter a baseline name ");
    return false;
  } else {
    $('#show-equipment').show();
  }
});
var baselineName;
$('#form_baseline').on('submit', function (e) {
  $('#wait-spinner').show();
  e.preventDefault();
  var $this = $(this);
  var data = {};
  $this.find('[name]').each(function (index, value) {
    var that = $(this),
        name = that.attr('name'),
        value = that.val();
    data[name] = value;

    if (name == 'baseline[name]') {
      baselineName = value;
    }
  });
  $.ajax({
    url: $this.attr('action'),
    type: $this.attr('method'),
    data: {
      baseline: data
    },
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      $('#wait-spinner').hide();
      $('.title-baseline').text(response.baseline);
      $('#content-form-equipment').show();
      $('#previous-equipment').hide();
    },
    error: function error(xhr, textStatus, errorThrown) {
      'Ajax request failed.';
    }
  });
}); //Validation de tous les équipements et de la baseline

$('#valid-all-equipments').on('click', function (e) {
  e.preventDefault();

  if (Equipments != "") {
    $('main').css('opacity', "0.4");
    $('#wait-spinner').show();
    $.ajax({
      url: '/alstom/flush-all-equipt',
      type: 'POST',
      data: {
        baselineName: baselineName,
        tabEquipts: Equipments
      },
      async: true,
      dataType: 'json',
      // JSON
      success: function success(response) {
        idBaseline = response.baseline;
        $('#wait-spinner').hide();
        window.location.href = "/alstom/baseline/" + idBaseline;
      },
      error: function error(xhr, textStatus, errorThrown) {
        'Ajax request failed.';
      }
    });
  } else {
    alert('Please enter Equipments before valid');
  }
}); //Gére le clique de la suppression

$('#show-equipment').on('click', '.edit-delete-equipement > a', function () {
  if ($(this)[0]["id"][0] == "d") {
    deleteEquipment(extraitNombre($(this)[0]["id"]));
  }
}); //cache le modal d'edit d'equipement

$('#modal-content-form-equipement-edit').hide(); // Gere la fermeture du modal d'edit d'equipement

$('#close-modal-form-equipment-edit').click(function () {
  $('#modal-content-form-equipement-edit').hide();
  $('main').css("opacity", '1');
}); // 
// Requete AJAX pour remplir le formulaire d'équipement avec l'equipement selectionner

$('.content-description-dtr').on('click', '.edit-delete-equipement > a', function (e) {
  e.preventDefault();
  $('main').css("opacity", '0.4');
  $('#wait-spinner').show();
  idEquipment = extraitNombre($(this)[0]["classList"][0]);
  var $this = $("#form_equipement_edit");
  var data = {};
  $.ajax({
    url: '/alstom/edit-equipment/' + idEquipment,
    type: 'POST',
    data: {},
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      $('#equipement_Type').val(response["type"]["id"]);
      data[$('#equipement_Type').attr('name')] = $('#equipement_Type').val();
      $.post("/alstom/checkSubtype", data).then(function (response) {
        //Vidage champ soustype
        $('#equipement_sous_type').empty();
        response.forEach(function (element) {
          //Remplissage par les element reçu du controller
          $('#equipement_sous_type').append(new Option(element.name, element.id));
        });
      }).done(function () {
        $('main').css("opacity", '0.4');
        $('#wait-spinner').show(); //Rempli input avec valeur recu de l'equipement

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
              $('#' + value.id).val(response["dTRBoard"]);
              break;

            case 'equipement_Indice_DTR':
              $('#' + value.id).val(response["indiceDTR"]);
              break;

            case 'equipement_Num_serie':
              $('#' + value.id).val(response["numSerie"]);
              break;
          }
        });
        $('#wait-spinner').hide();
        $('#modal-content-form-equipement-edit').show();
      });
    },
    error: function error(xhr, textStatus, errorThrown) {
      'Ajax request failed.';
    }
  });
}); //Formulaire d'edit de l'équipement

$('#form_equipement_edit').on('submit', function (e) {
  e.preventDefault();
  $('main').css("opacity", '0.4');
  $('#form_equipement_edit').css("opacity", "0.4");
  $("#wait-spinner").css("z-index", "99999");
  $('#wait-spinner').show();
  var $this = $(this);
  var data = {},
      action; //Rempli data a partir des valeur des inputs

  $this.find('[name]').each(function (index, value) {
    var that = $(this),
        name = that.attr('name');

    if (name != "equipement[_token]" && name != "soumission_equipement") {
      value = that.val();
      data[name] = value;
    }
  });
  $.ajax({
    url: '/alstom/edit-equipment/' + idEquipment,
    type: 'POST',
    data: {
      'equipement': data,
      "soumission_edit_equipement": true
    },
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      location.reload();
      $('#wait-spinner').hide();
      $('#modal-content-form-equipement-edit').show();
    },
    error: function error(xhr, textStatus, errorThrown) {
      'Ajax request failed.';
    }
  });
}); //Requete AJAX de création de version logiciel

$('#form_version').on('submit', function (e) {
  e.preventDefault();
  $('main').css("opacity", '0.4');
  $('#wait-spinner').show();
  var $this = $(this);
  var data = {};
  $this.find('[name]').each(function (index, value) {
    var that = $(this),
        name = that.attr('name'),
        value = that.val();
    data[name] = value;
  });
  $.ajax({
    url: $this.attr('action'),
    type: $this.attr('method'),
    data: {
      idBaseline: extraitNombre(window.location.pathname),
      version: data
    },
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      // $('#title-version-ertms').append("<p>" + response.version + "</p>")
      $('main').css("opacity", '1');
      $('#wait-spinner').hide();
      $('#close-modal-form-version').trigger('click');
      location.reload();
    },
    error: function error(xhr, textStatus, errorThrown) {
      'Ajax request failed.';
    }
  });
});

function returnIndexElement(element, index, array) {
  //Test l'existence de la div dans le cas où elle existe la remplace si pas la met en place
  if ($('#description-equipement-' + index).length) {
    $('#description-equipement-' + index).replaceWith('<div class="description" id="description-equipement-' + index + '"></div>');
  } else {
    $("#show-equipment").append('<div class="description" id="description-equipement-' + index + '"></div>');
  } //test si l'équipement est la carte ou non


  if (element["equipement[Type]"] != "2") {
    //Swith replacement de l'id du type avec son nom
    switch (element["equipement[Type]"]) {
      case "1":
        $("#description-equipement-" + index + "").append(writeType(4, 0));
        $("#description-equipement-" + index + "").addClass("description-SubtypeCard");
        indexEVC = $("#description-equipement-" + index + "");
        break;

      case "3":
        $("#description-equipement-" + index + "").append(writeType(4, 2));
        break;

      case "4":
        $("#description-equipement-" + index + "").append(writeType(4, 3));
        break;
    }

    switch (element["equipement[sous_type]"]) {
      case "4":
        $("#description-equipement-" + index + "").append(writeSubtype(5, 3));
        break;

      case "5":
        $("#description-equipement-" + index + "").append(writeSubtype(5, 4));
        break;
    }

    $("#description-equipement-" + index + "").append('<div class="content-description-dtr" id="content-description-' + index + '"></div>');
    $("#content-description-" + index + "").append('<p>' + element["equipement[DTR_board]"] + '</p>');
    $("#content-description-" + index + "").append('<p>' + element["equipement[Indice_DTR]"] + '</p>');
    $("#content-description-" + index + "").append('<p>' + element["equipement[Num_serie]"] + '</p>');
    $("#content-description-" + index + "").append(writeEditDelete(index));
  } else {
    for (i = 0; i < Equipments.length; i++) {
      if (Equipments[i]["equipement[Type]"] == "1") {
        PresenceEVC = true;
      }
    }

    ;

    if (PresenceEVC) {
      //Ecris le nom du type "carte" sous le type  EVC
      // $(indexEVC).append(writeType(5, 1));
      //Parcous le type de soustype 
      switch (element["equipement[sous_type]"]) {
        case "1":
          $(indexEVC).append(writeSubtype(5, 0));
          break;

        case "2":
          $(indexEVC).append(writeSubtype(5, 1));
          break;

        case "3":
          $(indexEVC).append(writeSubtype(5, 2));
          break;
      }

      $(indexEVC).append('<div class="content-description-dtr content-description-dtrCard" id="content-description-' + index + '"></div>');
      $("#content-description-" + index + "").append('<p>' + element["equipement[DTR_board]"] + '</p>');
      $("#content-description-" + index + "").append('<p>' + element["equipement[Indice_DTR]"] + '</p>');
      $("#content-description-" + index + "").append('<p>' + element["equipement[Num_serie]"] + '</p>');
      $("#content-description-" + index + "").append(writeEditDelete(index));
      $('#description-equipement-' + index).remove();
    } else {
      alert('Please enter EVC equipement before');
      $('#description-equipement-' + index).remove();
      Equipments.splice(index, 1);
      $('.modal-footer').hide();
      $('#create-equipment').hide();
      $('#show-equipment').hide();
      $('#modal-content-form-equipement').show();
    }
  }
} //Supression de l'équipement dans le tableau et le front


function deleteEquipment(position) {
  Equipments.splice(position, 1);
  $('.description').remove();
  Equipments.forEach(returnIndexElement);
} //Extrait le nombre d'une streing


function extraitNombre(str) {
  return Number(str.replace(/[^\d]/g, ""));
} //Ecris le titre du type d'équipement


function writeType(size, index) {
  return '<h' + size + ' class="description-Type " id="description-type ">' + tabEquipementType[index] + '</h' + size + '>';
}

; //Ecris le titre du soustype d'équipement

function writeSubtype(size, index) {
  return '<h' + size + ' class="description-Type " id="description-subType ">' + tabEquipementSubtype[index] + '</h' + size + '>';
}

; //Ecris le titre du soustype d'équipement

function writeSubtypeCard(size, index) {
  return '<h' + size + ' class="description-subtype" id="description-subType ">' + tabEquipementSubtype[index] + '</h' + size + '>';
}

; //Ecrit les 2 icons d'edit et delete

function writeEditDelete(index) {
  return ' <p class="edit-delete-equipement"> <a id="edit-' + index + '"><i class="fas fa-edit"></i> </a> <a id="delete-' + index + '"><i class = "fas fa-trash-alt poubelle"> </i></a></p>';
}

;
/*au click de l'add Equipment afficher le formulaire d'ajout d'équipement*/

$('#create-equipment').click(function () {
  $('#create-equipment').hide();
  $('#show-equipment').hide();
  $('#modal-content-form-equipement').show();
  $('#previous-equipment').show();
  $('.modal-footer').hide();
  $('#equipement_sous_type').empty();
  $(':input', '#form_equipement').not(':button, :submit, :reset, :hidden').val('');
  previous = "equipment";
}); // Gere le click du previous

$("#previous-equipment").click(function (e) {
  e.preventDefault();
  $('#modal-content-form-equipement').hide();
  $('#show-equipment').show();
  $('#create-equipment').show();
  $('#previous-equipment').hide();
  $('.modal-footer').show();
});
$('#create-baseline').click(function () {
  $('#modal-content-form-equipement').hide();
  $('#show-equipment').show();
  $('#create-equipment').show();
  $('.modal-footer').show();
}); // Ferme le modal de formulaire d'ajout d'équipement

$('#close-equipement').click(function () {
  $('#modal-content-form-equipement').hide();
  $('#show-equipment').show();
  $('#create-equipment').show();
  $('#previous-equipment').hide();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/equipement.js":
/*!*********************************!*\
  !*** ./assets/js/equipement.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {//Validation de l'ertms 
$('#valid-ertms-name').click(function () {
  $("#content-form-ertms").hide();
  $('#content-form-equipment').show();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/fleet.js":
/*!****************************!*\
  !*** ./assets/js/fleet.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  $('#search-fleet').on('submit', function (e) {
    e.preventDefault();
  });
  $('#name_project').keyup(function (e) {
    e.preventDefault();
    var search = $(this).val();
    var data = 'motclef=' + search;
    var current_;
    console.log(search);

    if (search.length > 0) {
      $.ajax({
        url: '/alstom/search-fleet',
        type: 'POST',
        data: data,
        // async: false,
        dataType: 'json',
        // JSON
        success: function success(response) {
          var tabName = JSON.parse(response.projectsFound);

          if (tabName.length == 0) {
            $('.element-result').remove();
            $('#result-fleet').append('<p class="element-result">Results Not Found</p>');
          } else {
            tabName.forEach(function (element) {
              $('.element-result').remove();
              $('#result-fleet').append('<p class="element-result">' + element.name + '</p>');
            });
          }
        },
        error: function error(xhr, textStatus, errorThrown) {
          'Ajax request failed.';
        }
      });
    } else {
      $('.element-result').remove();
    }
  });
  $('#addTrainsToFleet').click(function () {
    $train_select = $('#select-train-fleet');
    $('#modal-form-train-fleet').css('z-index', '-99');
    $('#wait-spinner').show();
    $.post("/alstom/checkTrains").then(function (response) {
      console.log(response);
      response.forEach(function (element) {
        //Remplissage par les element reçu du controller
        $train_select.append(new Option(element.name, element.id));
      });
    }).done(function () {
      // $train_select.selectpicker('refresh');
      $('#wait-spinner').hide();
      $('#modal-form-train-fleet').css('z-index', '9999');
    });
  });
  $('#valid-train-fleet').on('click', function (e) {
    e.preventDefault();
    var idProject = extraitNombre(window.location.pathname);
    var tabTrains = [];
    tabTrains.push();
    var $this = $('#formulaire-train-fleet');
    var data = {};
    $this.find('[name]').each(function (index, value) {
      var that = $(this),
          name = that.attr('name'),
          value = that.val();
      data[name] = value;
      console.log(data);
    });
    $.ajax({
      url: '/alstom/addTrainToFleet/' + idProject,
      type: 'POST',
      data: data,
      // async: false,
      dataType: 'json',
      // JSON
      success: function success(response) {
        console.log($('#select-train-fleet').val());
      },
      error: function error(xhr, textStatus, errorThrown) {
        'Ajax request failed.';
      }
    });
  });
}); //Extrait le nombre d'une streing

function extraitNombre(str) {
  return Number(str.replace(/[^\d]/g, ""));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/logs.js":
/*!***************************!*\
  !*** ./assets/js/logs.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var $fleet = $('#fleet_select');
var $train = $('#train_select');
var $ertms = $('#ertms_select');
var typeLog = $('#select_type_log');
var typeLogText = $('#select_type_log');
var data = {}; //detection si le browser gère le drag&drop

var isAdvancedUpload = function () {
  var div = document.createElement('div');
  return ('draggable' in div || 'ondragstart' in div && 'ondrop' in div) && 'FormData' in window && 'FileReader' in window;
}();

var $form = $('.drag-log');

var $input = $form.find('input[type="file"]'),
    $label = $form.find('label'),
    showFiles = function showFiles(files) {
  $label.text(files.length > 1 ? ($input.attr('data-multiple-caption') || '').replace('{count}', files.length) : files[0].name);
};

typeLog.hide();
typeLogText.hide();
$form.hide();
$(document).ready(function () {
  if (window.location.pathname == '/alstom/add-logs') {
    $form.show();
    prgbar = new ldBar("#test-progress");
  }

  if (window.location.pathname == '/alstom/search-logs') {
    //identification de la progress bar
    prgbar = new ldBar("#test-progress");
    $('main').css("opacity", '0.4');
    $('#wait-spinner').show();
    $.post("/alstom/checkFleet").then(function (response) {
      response.forEach(function (element) {
        //Remplissage par les element reçu du controller
        $fleet.append(new Option(element.name, element.id));
      });
      $.post("/alstom/checkTrainByFleet", {
        'id': $fleet.val()
      }).then(function (response) {
        response.forEach(function (element) {
          //Remplissage par les element reçu du controller
          $train.append(new Option(element.name, element.id));
        });
        $.post("/alstom/checkErtmsByTrain", {
          'id': $train.val()
        }).then(function (response) {
          response.forEach(function (element) {
            //Remplissage par les element reçu du controller
            $ertms.append(new Option(element.name, element.id));
          });
        }).done(function () {
          $('main').css("opacity", '1');
          $('#wait-spinner').hide();
        });
      });
    });
  }
});
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
    response.forEach(function (element) {
      //Remplissage par les element reçu du controller
      $train.append(new Option(element.name, element.id));
    });
  }).done(function () {
    $('main').css("opacity", '1');
    $('#wait-spinner').hide();
  });
});
$train.change(function () {
  $('#select_type_log').hide();
  console.log($fleet.val());
  $ertms.empty();
  $('main').css("opacity", '0.4');
  $('#wait-spinner').show();
  $.post("/alstom/checkErtmsByTrain", {
    'id': $train.val()
  }).then(function (response) {
    response.forEach(function (element) {
      //Remplissage par les element reçu du controller
      $ertms.append(new Option(element.name, element.id));
    });
  }).done(function () {
    typeLog.show();
    $form.show();
    $('main').css("opacity", '1');
    $('#wait-spinner').hide();
  });
});

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

var Log = {},
    idBaseline = "";
$form.on('submit', function (e) {
  if (droppedFiles) {
    Log['name_log'] = $('#type_log_select').val();
    idBaseline = $('#ertms_select').val();
    console.log($('#ertms_select').val()); // Parti du traitement du drag an drop file

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
        xhr: function xhr() {
          var xhr = new window.XMLHttpRequest();
          xhr.upload.addEventListener("progress", function (evt) {
            console.log(evt.loaded);

            if (evt.lengthComputable) {
              var percentComplete = evt.loaded / evt.total * 100; //Do something with upload progress here

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
        complete: function complete() {
          $form.removeClass('is-uploading');
          $("#test-progress").removeClass('is-blink');
        },
        success: function success(data) {
          $form.addClass(data.success == true ? 'is-success' : 'is-error');
          valid = true;
        },
        error: function error() {
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
        $form.removeClass('is-uploading').addClass(data.success == true ? 'is-success' : 'is-error').removeAttr('target');
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
      'baseline': idBaseline
    },
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      //ask for the status
      console.log(response); // location.reload();
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/plug.js":
/*!***************************!*\
  !*** ./assets/js/plug.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$('#form_plug').on('submit', function (e) {
  var baseline = extraitNombre(window.location.pathname);
  console.log($form);
  $.ajax({
    url: '/alstom/add-plug',
    type: 'GET',
    dataType: "text",
    data: {
      id: baseline
    },
    async: true,
    success: function success(response) {
      console.log(response);
    },
    error: function error(xhr, textStatus, errorThrown) {
      'Ajax request failed.';
    }
  });
}); //Extrait le nombre d'une streing

function extraitNombre(str) {
  return Number(str.replace(/[^\d]/g, ""));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/progressBar.js":
/*!**********************************!*\
  !*** ./assets/js/progressBar.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;
        if (!u && a) return require(o, !0);
        if (i) return i(o, !0);
        var f = new Error("Cannot find module '" + o + "'");
        throw f.code = "MODULE_NOT_FOUND", f;
      }

      var l = n[o] = {
        exports: {}
      };
      t[o][0].call(l.exports, function (e) {
        var n = t[o][1][e];
        return s(n ? n : e);
      }, l, l.exports, e, t, n, r);
    }

    return n[o].exports;
  }

  var i = typeof require == "function" && require;

  for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }

  return s;
})({
  1: [function (require, module, exports) {
    // Generated by LiveScript 1.4.0
    var presets,
        simpleStr,
        wrap,
        slice$ = [].slice,
        toString$ = {}.toString;
    presets = require('./presets').presets;

    simpleStr = function simpleStr(arr) {
      return arr.join('');
    };

    wrap = function wrap(content) {
      return "data:image/svg+xml;base64," + btoa(content);
    };

    (function () {
      var make, handler, ldBar;
      make = {
        head: function head(viewBox) {
          return "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"" + viewBox + "\">";
        },
        gradient: function gradient(dir, dur) {
          var colors, ret, len, gx, gy, x, y, i$, i, idx;
          dir == null && (dir = 45);
          dur == null && (dur = 1);
          colors = slice$.call(arguments, 2);
          ret = [this.head("0 0 100 100")];
          len = colors.length * 4 + 1;
          dir = dir * Math.PI / 180;
          gx = Math.pow(Math.cos(dir), 2);
          gy = Math.sqrt(gx - Math.pow(gx, 2));

          if (dir > Math.PI * 0.25) {
            gy = Math.pow(Math.sin(dir), 2);
            gx = Math.sqrt(gy - Math.pow(gy, 2));
          }

          x = gx * 100;
          y = gy * 100;
          ret.push("<defs><linearGradient id=\"gradient\" x1=\"0\" x2=\"" + gx + "\" y1=\"0\" y2=\"" + gy + "\">");

          for (i$ = 0; i$ < len; ++i$) {
            i = i$;
            idx = i * 100 / (len - 1);
            ret.push("<stop offset=\"" + idx + "%\" stop-color=\"" + colors[i % colors.length] + "\"/>");
          }

          ret.push("</linearGradient></defs>\n<rect x=\"0\" y=\"0\" width=\"400\" height=\"400\" fill=\"url(#gradient)\">\n<animateTransform attributeName=\"transform\" type=\"translate\" from=\"-" + x + ",-" + y + "\"\nto=\"0,0\" dur=\"" + dur + "s\" repeatCount=\"indefinite\"/></rect></svg>");
          return wrap(ret.join(""));
        },
        stripe: function stripe(c1, c2, dur) {
          var ret, i;
          c1 == null && (c1 = '#b4b4b4');
          c2 == null && (c2 = '#e6e6e6');
          dur == null && (dur = 1);
          ret = [this.head("0 0 100 100")];
          ret = ret.concat(["<rect fill=\"" + c2 + "\" width=\"100\" height=\"100\"/>", "<g><g>", function () {
            var i$,
                results$ = [];

            for (i$ = 0; i$ < 13; ++i$) {
              i = i$;
              results$.push("<polygon fill=\"" + c1 + "\" " + ("points=\"" + (-90 + i * 20) + ",100 " + (-100 + i * 20) + ",") + ("100 " + (-60 + i * 20) + ",0 " + (-50 + i * 20) + ",0 \"/>"));
            }

            return results$;
          }().join(""), "</g><animateTransform attributeName=\"transform\" type=\"translate\" ", "from=\"0,0\" to=\"20,0\" dur=\"" + dur + "s\" repeatCount=\"indefinite\"/></g></svg>"].join(""));
          return wrap(ret);
        },
        bubble: function bubble(c1, c2, count, dur, size, sw) {
          var ret, i$, i, idx, x, r, d;
          c1 == null && (c1 = '#39d');
          c2 == null && (c2 = '#9cf');
          count == null && (count = 15);
          dur == null && (dur = 1);
          size == null && (size = 6);
          sw == null && (sw = 1);
          ret = [this.head("0 0 200 200"), "<rect x=\"0\" y=\"0\" width=\"200\" height=\"200\" fill=\"" + c1 + "\"/>"];

          for (i$ = 0; i$ < count; ++i$) {
            i = i$;
            idx = -(i / count) * dur;
            x = Math.random() * 184 + 8;
            r = (Math.random() * 0.7 + 0.3) * size;
            d = dur * (1 + Math.random() * 0.5);
            ret.push(["<circle cx=\"" + x + "\" cy=\"0\" r=\"" + r + "\" fill=\"none\" stroke=\"" + c2 + "\" stroke-width=\"" + sw + "\">", "<animate attributeName=\"cy\" values=\"190;-10\" times=\"0;1\" ", "dur=\"" + d + "s\" begin=\"" + idx + "s\" repeatCount=\"indefinite\"/>", "</circle>", "<circle cx=\"" + x + "\" cy=\"0\" r=\"" + r + "\" fill=\"none\" stroke=\"" + c2 + "\" stroke-width=\"" + sw + "\">", "<animate attributeName=\"cy\" values=\"390;190\" times=\"0;1\" ", "dur=\"" + d + "s\" begin=\"" + idx + "s\" repeatCount=\"indefinite\"/>", "</circle>"].join(""));
          }

          return wrap(ret.join("") + "</svg>");
        }
      };
      handler = {
        queue: {},
        running: false,
        main: function main(timestamp) {
          var keepon,
              removed,
              k,
              ref$,
              func,
              ret,
              this$ = this;
          keepon = false;
          removed = [];

          for (k in ref$ = this.queue) {
            func = ref$[k];
            ret = func(timestamp);

            if (!ret) {
              removed.push(func);
            }

            keepon = keepon || ret;
          }

          for (k in ref$ = this.queue) {
            func = ref$[k];

            if (removed.indexOf(func) >= 0) {
              delete this.queue[k];
            }
          }

          if (keepon) {
            return requestAnimationFrame(function (it) {
              return this$.main(it);
            });
          } else {
            return this.running = false;
          }
        },
        add: function add(key, f) {
          var this$ = this;

          if (!this.queue[key]) {
            this.queue[key] = f;
          }

          if (!this.running) {
            this.running = true;
            return requestAnimationFrame(function (it) {
              return this$.main(it);
            });
          }
        }
      };

      window.ldBar = ldBar = function ldBar(selector, option) {
        var xmlns,
            root,
            cls,
            idPrefix,
            id,
            _domTree,
            newNode,
            x$,
            config,
            attr,
            that,
            isStroke,
            parseRes,
            dom,
            svg,
            text,
            group,
            length,
            path0,
            path1,
            patimg,
            img,
            ret,
            size,
            this$ = this;

        option == null && (option = {});
        xmlns = {
          xlink: "http://www.w3.org/1999/xlink"
        };
        root = toString$.call(selector).slice(8, -1) === 'String' ? document.querySelector(selector) : selector;

        if (!root.ldBar) {
          root.ldBar = this;
        } else {
          return root.ldBar;
        }

        cls = root.getAttribute('class') || '';

        if (!~cls.indexOf('ldBar')) {
          root.setAttribute('class', cls + " ldBar");
        }

        idPrefix = "ldBar-" + Math.random().toString(16).substring(2);
        id = {
          key: idPrefix,
          clip: idPrefix + "-clip",
          filter: idPrefix + "-filter",
          pattern: idPrefix + "-pattern",
          mask: idPrefix + "-mask",
          maskPath: idPrefix + "-mask-path"
        };

        _domTree = function domTree(n, o) {
          var k, v;
          n = newNode(n);

          for (k in o) {
            v = o[k];

            if (k !== 'attr') {
              n.appendChild(_domTree(k, v || {}));
            }
          }

          n.attrs(o.attr || {});
          return n;
        };

        newNode = function newNode(n) {
          return document.createElementNS("http://www.w3.org/2000/svg", n);
        };

        x$ = document.body.__proto__.__proto__.__proto__;

        x$.text = function (t) {
          return this.appendChild(document.createTextNode(t));
        };

        x$.attrs = function (o) {
          var k,
              v,
              ret,
              results$ = [];

          for (k in o) {
            v = o[k];
            ret = /([^:]+):([^:]+)/.exec(k);

            if (!ret || !xmlns[ret[1]]) {
              results$.push(this.setAttribute(k, v));
            } else {
              results$.push(this.setAttributeNS(xmlns[ret[1]], k, v));
            }
          }

          return results$;
        };

        x$.styles = function (o) {
          var k,
              v,
              results$ = [];

          for (k in o) {
            v = o[k];
            results$.push(this.style[k] = v);
          }

          return results$;
        };

        x$.append = function (n) {
          var r;
          return this.appendChild(r = document.createElementNS("http://www.w3.og/2000/svg", n));
        };

        x$.attr = function (n, v) {
          if (v != null) {
            return this.setAttribute(n, v);
          } else {
            return this.getAttribute(n);
          }
        };

        config = {
          "type": 'stroke',
          "img": '',
          "path": 'M10 10L90 10M90 8M90 12',
          "fill-dir": 'btt',
          "fill": '#25b',
          "fill-background": '#ddd',
          "fill-background-extrude": 3,
          "pattern-size": null,
          "stroke-dir": 'normal',
          "stroke": '#25b',
          "stroke-width": '3',
          "stroke-trail": '#ddd',
          "stroke-trail-width": 0.5,
          "duration": 1,
          "easing": 'linear',
          "value": 0,
          "img-size": null,
          "bbox": null,
          "set-dim": true,
          "aspect-ratio": "xMidYMid",
          "transition-in": false,
          "min": 0,
          "max": 100,
          "precision": 0,
          "padding": undefined
        };
        config["preset"] = root.attr("data-preset") || option["preset"];

        if (config.preset != null) {
          import$(config, presets[config.preset]);
        }

        for (attr in config) {
          if (that = that = root.attr("data-" + attr)) {
            config[attr] = that;
          }
        }

        import$(config, option);

        if (config.img) {
          config.path = null;
        }

        isStroke = config.type === 'stroke';

        parseRes = function parseRes(v) {
          var parser, ret;
          parser = /data:ldbar\/res,([^()]+)\(([^)]+)\)/;
          ret = parser.exec(v);

          if (!ret) {
            return v;
          }

          return ret = make[ret[1]].apply(make, ret[2].split(','));
        };

        config.fill = parseRes(config.fill);
        config.stroke = parseRes(config.stroke);

        if (config["set-dim"] === 'false') {
          config["set-dim"] = false;
        }

        dom = {
          attr: {
            "xmlns:xlink": 'http://www.w3.org/1999/xlink',
            preserveAspectRatio: config["aspect-ratio"],
            width: "100%",
            height: "100%"
          },
          defs: {
            filter: {
              attr: {
                id: id.filter,
                x: -1,
                y: -1,
                width: 3,
                height: 3
              },
              feMorphology: {
                attr: {
                  operator: +config["fill-background-extrude"] >= 0 ? 'dilate' : 'erode',
                  radius: Math.abs(+config["fill-background-extrude"])
                }
              },
              feColorMatrix: {
                attr: {
                  values: '0 0 0 0 1    0 0 0 0 1    0 0 0 0 1    0 0 0 1 0',
                  result: "cm"
                }
              }
            },
            mask: {
              attr: {
                id: id.mask
              },
              image: {
                attr: {
                  "xlink:href": config.img,
                  filter: "url(#" + id.filter + ")",
                  x: 0,
                  y: 0,
                  width: 100,
                  height: 100,
                  preserveAspectRatio: config["aspect-ratio"]
                }
              }
            },
            g: {
              mask: {
                attr: {
                  id: id.maskPath
                },
                path: {
                  attr: {
                    d: config.path || "",
                    fill: '#fff',
                    stroke: '#fff',
                    filter: "url(#" + id.filter + ")"
                  }
                }
              }
            },
            clipPath: {
              attr: {
                id: id.clip
              },
              rect: {
                attr: {
                  'class': 'mask',
                  fill: '#000'
                }
              }
            },
            pattern: {
              attr: {
                id: id.pattern,
                patternUnits: 'userSpaceOnUse',
                x: 0,
                y: 0,
                width: 300,
                height: 300
              },
              image: {
                attr: {
                  x: 0,
                  y: 0,
                  width: 300,
                  height: 300
                }
              }
            }
          }
        };
        svg = _domTree('svg', dom);
        text = document.createElement('div');
        text.setAttribute('class', 'ldBar-label');
        root.appendChild(svg);
        root.appendChild(text);
        group = [0, 0];
        length = 0;

        this.fit = function () {
          var that, box, d, rect;

          if (that = config["bbox"]) {
            box = that.split(' ').map(function (it) {
              return +it.trim();
            });
            box = {
              x: box[0],
              y: box[1],
              width: box[2],
              height: box[3]
            };
          } else {
            box = group[1].getBBox();
          }

          if (!box || box.width === 0 || box.height === 0) {
            box = {
              x: 0,
              y: 0,
              width: 100,
              height: 100
            };
          }

          d = Math.max.apply(null, ['stroke-width', 'stroke-trail-width', 'fill-background-extrude'].map(function (it) {
            return config[it];
          })) * 1.5;

          if (config["padding"] != null) {
            d = +config["padding"];
          }

          svg.attrs({
            viewBox: [box.x - d, box.y - d, box.width + d * 2, box.height + d * 2].join(" ")
          });

          if (config["set-dim"]) {
            ['width', 'height'].map(function (it) {
              if (!root.style[it] || this$.fit[it]) {
                root.style[it] = box[it] + d * 2 + "px";
                return this$.fit[it] = true;
              }
            });
          }

          rect = group[0].querySelector('rect');

          if (rect) {
            return rect.attrs({
              x: box.x - d,
              y: box.y - d,
              width: box.width + d * 2,
              height: box.height + d * 2
            });
          }
        };

        if (config.path) {
          if (isStroke) {
            group[0] = _domTree('g', {
              path: {
                attr: {
                  d: config.path,
                  fill: 'none',
                  'class': 'baseline'
                }
              }
            });
          } else {
            group[0] = _domTree('g', {
              rect: {
                attr: {
                  x: 0,
                  y: 0,
                  width: 100,
                  height: 100,
                  mask: "url(#" + id.maskPath + ")",
                  fill: config["fill-background"],
                  'class': 'frame'
                }
              }
            });
          }

          svg.appendChild(group[0]);
          group[1] = _domTree('g', {
            path: {
              attr: {
                d: config.path,
                'class': isStroke ? 'mainline' : 'solid',
                "clip-path": config.type === 'fill' ? "url(#" + id.clip + ")" : ''
              }
            }
          });
          svg.appendChild(group[1]);
          path0 = group[0].querySelector(isStroke ? 'path' : 'rect');
          path1 = group[1].querySelector('path');

          if (isStroke) {
            path1.attrs({
              fill: 'none'
            });
          }

          patimg = svg.querySelector('pattern image');
          img = new Image();
          img.addEventListener('load', function () {
            var box, that;
            box = (that = config["pattern-size"]) ? {
              width: +that,
              height: +that
            } : img.width && img.height ? {
              width: img.width,
              height: img.height
            } : {
              width: 300,
              height: 300
            };
            svg.querySelector('pattern').attrs({
              width: box.width,
              height: box.height
            });
            return patimg.attrs({
              width: box.width,
              height: box.height
            });
          });

          if (/.+\..+|^data:/.exec(!isStroke ? config.fill : config.stroke)) {
            img.src = !isStroke ? config.fill : config.stroke;
            patimg.attrs({
              "xlink:href": img.src
            });
          }

          if (isStroke) {
            path0.attrs({
              stroke: config["stroke-trail"],
              "stroke-width": config["stroke-trail-width"]
            });
            path1.attrs({
              "stroke-width": config["stroke-width"],
              stroke: /.+\..+|^data:/.exec(config.stroke) ? "url(#" + id.pattern + ")" : config.stroke
            });
          }

          if (config.fill && !isStroke) {
            path1.attrs({
              fill: /.+\..+|^data:/.exec(config.fill) ? "url(#" + id.pattern + ")" : config.fill
            });
          }

          length = path1.getTotalLength();
          this.fit();
          this.inited = true;
        } else if (config.img) {
          if (config["img-size"]) {
            ret = config["img-size"].split(',');
            size = {
              width: +ret[0],
              height: +ret[1]
            };
          } else {
            size = {
              width: 100,
              height: 100
            };
          }

          group[0] = _domTree('g', {
            rect: {
              attr: {
                x: 0,
                y: 0,
                width: 100,
                height: 100,
                mask: "url(#" + id.mask + ")",
                fill: config["fill-background"]
              }
            }
          });
          svg.querySelector('mask image').attrs({
            width: size.width,
            height: size.height
          });
          group[1] = _domTree('g', {
            image: {
              attr: {
                width: size.width,
                height: size.height,
                x: 0,
                y: 0,
                preserveAspectRatio: config["aspect-ratio"],
                "clip-path": config.type === 'fill' ? "url(#" + id.clip + ")" : '',
                "xlink:href": config.img,
                'class': 'solid'
              }
            }
          });
          img = new Image();
          img.addEventListener('load', function () {
            var ret, size;

            if (config["img-size"]) {
              ret = config["img-size"].split(',');
              size = {
                width: +ret[0],
                height: +ret[1]
              };
            } else if (img.width && img.height) {
              size = {
                width: img.width,
                height: img.height
              };
            } else {
              size = {
                width: 100,
                height: 100
              };
            }

            svg.querySelector('mask image').attrs({
              width: size.width,
              height: size.height
            });
            group[1].querySelector('image').attrs({
              width: size.width,
              height: size.height
            });
            this$.fit();
            this$.set(undefined, false);
            return this$.inited = true;
          });
          img.src = config.img;
          svg.appendChild(group[0]);
          svg.appendChild(group[1]);
        }

        svg.attrs({
          width: '100%',
          height: '100%'
        });
        this.transition = {
          value: {
            src: 0,
            des: 0
          },
          time: {},
          ease: function ease(t, b, c, d) {
            t = t / (d * 0.5);

            if (t < 1) {
              return c * 0.5 * t * t + b;
            }

            t = t - 1;
            return -c * 0.5 * (t * (t - 2) - 1) + b;
          },
          handler: function handler(time, doTransition) {
            var ref$, min, max, prec, dv, dt, dur, v, p, node, style, box, dir;
            doTransition == null && (doTransition = true);

            if (this.time.src == null) {
              this.time.src = time;
            }

            ref$ = [config["min"], config["max"], 1 / config["precision"]], min = ref$[0], max = ref$[1], prec = ref$[2];
            ref$ = [this.value.des - this.value.src, (time - this.time.src) * 0.001, +config["duration"] || 1], dv = ref$[0], dt = ref$[1], dur = ref$[2];
            v = doTransition ? this.ease(dt, this.value.src, dv, dur) : this.value.des;

            if (config.precision) {
              v = Math.round(v * prec) / prec;
            } else if (doTransition) {
              v = Math.round(v);
            }

            v >= min || (v = min);
            v <= max || (v = max);
            text.textContent = v;
            p = 100.0 * (v - min) / (max - min);

            if (isStroke) {
              node = path1;
              style = {
                "stroke-dasharray": config["stroke-dir"] === 'reverse' ? "0 " + length * (100 - p) * 0.01 + " " + length * p * 0.01 + " 0" : p * 0.01 * length + " " + ((100 - p) * 0.01 * length + 1)
              };
            } else {
              box = group[1].getBBox();
              dir = config["fill-dir"];
              style = dir === 'btt' || !dir ? {
                y: box.y + box.height * (100 - p) * 0.01,
                height: box.height * p * 0.01,
                x: box.x,
                width: box.width
              } : dir === 'ttb' ? {
                y: box.y,
                height: box.height * p * 0.01,
                x: box.x,
                width: box.width
              } : dir === 'ltr' ? {
                y: box.y,
                height: box.height,
                x: box.x,
                width: box.width * p * 0.01
              } : dir === 'rtl' ? {
                y: box.y,
                height: box.height,
                x: box.x + box.width * (100 - p) * 0.01,
                width: box.width * p * 0.01
              } : void 8;
              node = svg.querySelector('rect');
            }

            node.attrs(style);

            if (dt >= dur) {
              delete this.time.src;
              return false;
            }

            return true;
          },
          start: function start(src, des, doTransition) {
            var ref$,
                this$ = this;
            ref$ = this.value;
            ref$.src = src;
            ref$.des = des;
            !!(root.offsetWidth || root.offsetHeight || root.getClientRects().length);

            if (!doTransition || !(root.offsetWidth || root.offsetHeight || root.getClientRects().length)) {
              this.time.src = 0;
              this.handler(1000, false);
              return;
            }

            return handler.add(id.key, function (time) {
              return this$.handler(time);
            });
          }
        };

        this.set = function (v, doTransition) {
          var src, des;
          doTransition == null && (doTransition = true);
          src = this.value || 0;

          if (v != null) {
            this.value = v;
          } else {
            v = this.value;
          }

          des = this.value;
          return this.transition.start(src, des, doTransition);
        };

        this.set(+config.value || 0, config["transition-in"]) || false;
        return this;
      };

      return window.addEventListener('load', function () {
        var i$,
            ref$,
            len$,
            node,
            results$ = [];

        for (i$ = 0, len$ = (ref$ = document.querySelectorAll('.ldBar')).length; i$ < len$; ++i$) {
          node = ref$[i$];

          if (!node.ldBar) {
            results$.push(node.ldBar = new ldBar(node));
          }
        }

        return results$;
      }, false);
    })();

    module.exports = ldBar;

    function import$(obj, src) {
      var own = {}.hasOwnProperty;

      for (var key in src) {
        if (own.call(src, key)) obj[key] = src[key];
      }

      return obj;
    }
  }, {
    "./presets": 2
  }],
  2: [function (require, module, exports) {
    // Generated by LiveScript 1.4.0
    var presets,
        out$ = typeof exports != 'undefined' && exports || this;
    out$.presets = presets = {
      rainbow: {
        "type": 'stroke',
        "path": 'M10 10L90 10',
        "stroke": 'data:ldbar/res,gradient(0,1,#a551df,#fd51ad,#ff7f82,#ffb874,#ffeb90)',
        "bbox": "10 10 80 10"
      },
      energy: {
        "type": 'fill',
        "path": 'M15 5L85 5A5 5 0 0 1 85 15L15 15A5 5 0 0 1 15 5',
        "stroke": '#f00',
        "fill": 'data:ldbar/res,gradient(45,2,#4e9,#8fb,#4e9)',
        "fill-dir": "ltr",
        "fill-background": '#444',
        "fill-background-extrude": 1,
        "bbox": "10 5 80 10"
      },
      stripe: {
        "type": 'fill',
        "path": 'M15 5L85 5A5 5 0 0 1 85 15L15 15A5 5 0 0 1 15 5',
        "stroke": '#f00',
        "fill": 'data:ldbar/res,stripe(#25b,#58e,1)',
        "fill-dir": "ltr",
        "fill-background": '#ddd',
        "fill-background-extrude": 1,
        "bbox": "10 5 80 10"
      },
      text: {
        "type": 'fill',
        "img": "data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"70\" height=\"20\" viewBox=\"0 0 70 20\"><text x=\"35\" y=\"10\" text-anchor=\"middle\" dominant-baseline=\"central\" font-family=\"arial\">LOADING</text></svg>",
        "fill-background-extrude": 1.3,
        "pattern-size": 100,
        "fill-dir": "ltr",
        "img-size": "70,20",
        "bbox": "0 0 70 20"
      },
      line: {
        "type": 'stroke',
        "path": 'M10 10L90 10',
        "stroke": '#25b',
        "stroke-width": 3,
        "stroke-trail": '#ddd',
        "stroke-trail-width": 1,
        "bbox": "10 10 80 10"
      },
      fan: {
        "type": 'stroke',
        "path": 'M10 90A40 40 0 0 1 90 90',
        "fill-dir": 'btt',
        "fill": '#25b',
        "fill-background": '#ddd',
        "fill-background-extrude": 3,
        "stroke-dir": 'normal',
        "stroke": '#25b',
        "stroke-width": '3',
        "stroke-trail": '#ddd',
        "stroke-trail-width": 0.5,
        "bbox": "10 50 80 40"
      },
      circle: {
        "type": 'stroke',
        "path": 'M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10',
        "fill-dir": 'btt',
        "fill": '#25b',
        "fill-background": '#ddd',
        "fill-background-extrude": 3,
        "stroke-dir": 'normal',
        "stroke": '#25b',
        "stroke-width": '3',
        "stroke-trail": '#ddd',
        "stroke-trail-width": 0.5,
        "bbox": "10 10 80 80"
      },
      bubble: {
        "type": 'fill',
        "path": 'M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10',
        "fill-dir": 'btt',
        "fill": 'data:ldbar/res,bubble(#39d,#cef)',
        "pattern-size": "150",
        "fill-background": '#ddd',
        "fill-background-extrude": 2,
        "stroke-dir": 'normal',
        "stroke": '#25b',
        "stroke-width": '3',
        "stroke-trail": '#ddd',
        "stroke-trail-width": 0.5,
        "bbox": "10 10 80 80"
      }
    };
  }, {}]
}, {}, [1]);

/***/ }),

/***/ "./assets/js/test-upload.js":
/*!**********************************!*\
  !*** ./assets/js/test-upload.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {//définition des variables
var ListePlug = [],
    i = 0,
    valid = false;
$(document).ready(function () {
  var nombre_url = extraitNombre(window.location.pathname);

  if (window.location.pathname == '/alstom/baseline-train/' + nombre_url) {
    //identification de la progress bar
    prgbar = new ldBar("#test-progress");
  }

  ;
}); // Declaration d'évenement avant chargement de l apage

$('#valid-all-plug').hide();
$('#cancel-all-plug').hide(); //detection si le browser gère le drag&drop

var isAdvancedUpload = function () {
  var div = document.createElement('div');
  return ('draggable' in div || 'ondragstart' in div && 'ondrop' in div) && 'FormData' in window && 'FileReader' in window;
}();

var $form = $('.box');

var $input = $form.find('input[type="file"]'),
    $label = $form.find('label'),
    showFiles = function showFiles(files) {
  $label.text(files.length > 1 ? ($input.attr('data-multiple-caption') || '').replace('{count}', files.length) : files[0].name);
}; //ajouter un plug


$('#add-form-plug').click(function () {
  // $('#card-content-plug').append("test");
  // console.log($('.content-name-drag-plug'))
  if (valid) {
    $('#input-name-plug').val('');
    droppedFiles = false;
    $form.removeClass('is-success');
    $('.label-drop').css('font-weight', '');
    $('.label-drop').html('<strong> Choose a file </strong> <span class="box__dragndrop">or drag it here </span>.</label>');
    $('#content-name-drag-plug').show();
    valid = false;
  } else {
    return false;
  }
}); //on ouvre le form pour ajouter

$('#addPlugs').on('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
});

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

$form.on('submit', function (e) {
  e.preventDefault();
});
$('#valid-plug').click(function (e) {
  e.preventDefault();
  var Plug = {};

  if ($('#input-name-plug').val() != "" && droppedFiles) {
    $('#valid-all-plug').show();
    $('#cancel-all-plug').show();
    Plug['name_plug'] = $('#input-name-plug').val(); // Parti du traitement du drag an drop file

    if ($form.hasClass('is-uploading')) return false;
    showFiles(droppedFiles);
    $form.addClass('is-uploading').removeClass('is-error');

    if (isAdvancedUpload) {
      var ajaxData = new FormData($form.get(0));

      if (droppedFiles) {
        $.each(droppedFiles, function (i, file) {
          ajaxData.append($input.attr('name'), file);
          Plug['key_plug'] = file.name;
        });
      }

      console.log(ajaxData);
      $.ajax({
        url: '/alstom/uploadFile',
        type: 'POST',

        /*data: {
            'file' : ajaxData,
            'bucket': 'application',
            'upload_request': "upload"
        },*/
        xhr: function xhr() {
          var xhr = new window.XMLHttpRequest();
          xhr.upload.addEventListener("progress", function (evt) {
            console.log(evt.loaded);

            if (evt.lengthComputable) {
              var percentComplete = evt.loaded / evt.total * 100; //Do something with upload progress here

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
        complete: function complete() {
          $form.removeClass('is-uploading');
          $("#test-progress").removeClass('is-blink');
          ListePlug.push(Plug);
          ListePlug.forEach(writePlug);
        },
        success: function success(data) {
          $form.addClass(data.success == true ? 'is-success' : 'is-error');
          $('#content-name-drag-plug').hide();
          valid = true;
          console.log(ListePlug);
        },
        error: function error() {
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
        $form.removeClass('is-uploading').addClass(data.success == true ? 'is-success' : 'is-error').removeAttr('target');
        if (!data.success) $errorMsg.text(data.error);
        $form.removeAttr('target');
        $iframe.remove();
      });
    }
  } else {
    alert('Please enter name & file plug');
  }
});
$('#test-upload').on("click", "button", function () {
  var filest = document.querySelector("#selector").files;
  var tempDestination = "test";
  var nameFile = "init";
  var uploadStatus = "PENDING"; //On drag et drop

  $.ajax({
    url: '/alstom/requestFile',
    type: 'POST',
    data: {
      'bucket': 'application'
    },
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      tempDestination = response.path;
      $.ajax({
        url: '/alstom/uploadFile',
        type: 'POST',
        data: {
          'bucket': 'application',
          'upload_request': "upload",
          'filename': nameFile,
          'tempDestination': tempDestination
        },
        async: true,
        dataType: 'json',
        // JSON
        success: function success(response) {
          //ask for the status
          console.log(response);
          $('main').css('opacity', "1");
          $('#wait-spinner').hide();
        }
      });
    }
  });
});
$('#valid-all-plug').on('click', function (e) {
  e.preventDefault();
  $('main').css('opacity', "0.4");
  $('#wait-spinner').show();
  var idBaseline = extraitNombre(window.location.pathname);
  $.ajax({
    url: '/alstom/flush-plug',
    type: 'POST',
    data: {
      'idBaseline': idBaseline,
      'Plugs': ListePlug
    },
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      //ask for the status
      console.log(response);
      location.reload();
    }
  });
});
$('#content-tr-plug').on('click', '.td-table > .td-plug', function (e) {
  e.preventDefault();
  $('main').css('opacity', "0.4");
  $('#wait-spinner').show();
  var key = $(this)[0]["id"];
  $.ajax({
    url: '/alstom/donwloadFile',
    type: 'POST',
    data: {
      'key': key
    },
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      window.location.href = response;
      $('main').css('opacity', "1");
      $('#wait-spinner').hide();
      console.log(response);
    }
  });
});
$('#previous-plug').on('click', '.content-key-name-plug > a', function () {
  var idPlug = extraitNombre($(this)[0].attr('class'));
  $('main').css('opacity', "0.4");
  $('#wait-spinner').show();
  $.ajax({
    url: '/alstom/delete-plug/' + idPlug,
    type: 'POST',
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      location.reload();
      $('#' + idPlug).remove();
      console.log(response);
    }
  });
});
$('#cancel-all-plug').click(function () {
  $('.new-plug').remove();
  ListePlug = "";
}); //Gére le clique de la suppression

$('#show-done-plug').on('click', '.content-key-name-plug > a', function () {
  if ($(this)[0]["id"][0] == "d") {
    deletePlug(extraitNombre($(this)[0]["id"]));
  }
}); //Extrait le nombre d'une streing

function extraitNombre(str) {
  return Number(str.replace(/[^\d]/g, ""));
} //Supression du plug dans le tableau et le front


function deletePlug(position) {
  ListePlug.splice(position, 1);
  $('.content-key-name-plug').remove();
  ListePlug.forEach(writePlug);
}

function writePlug(element, index, array) {
  //Test l'existence de la div dans le cas où elle existe la remplace si pas la met en place
  if ($('#key-name-' + index).length) {
    $('#key-name-' + index).replaceWith("<span class='content-key-name-plug new-plug' id='key-name-" + index + "'><p>" + element.name_plug + "</p><p>" + element.key_plug + "</p><a id='delete-plug-" + index + "'><i class='fas fa-trash-alt poubelle'></i></a></span>");
  } else {
    $('#show-done-plug').append("<span class='content-key-name-plug new-plug' id='key-name-" + index + "'><p>" + element.name_plug + "</p><p>" + element.key_plug + "</p><a id='delete-plug-" + index + "'><i class='fas fa-trash-alt poubelle'></i></a></span>");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/train.js":
/*!****************************!*\
  !*** ./assets/js/train.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// Vidage des inputs aux changement de select
// $('select[name="trains[projects]"], select[name="trains[trainType]"]').change(function () {
//     $('input[name="trains[name]"]').val('');
// });

/*Masquage de certains élement */
$('#create-ertms-1').hide();
$('#create-ertms-2').hide();
$("#create-ertms-train-1").hide();
$('#create_soustype').hide();
$('#create_type').hide();
$('#modal-body').hide();
$('#modal_baseline_equipement').hide();
$('#close-modal-form-baseline-train').click(function () {
  $('#modal_baseline_equipement').hide();
});

for (var i = 1; i < 4; i++) {
  $('#btn-baseline-' + i).css('opacity', '0');
}

var idEquipment = "",
    indexEVC;
var new_equipment_num = "",
    totalEquipt = "",
    new_equipment_num_serie = [];
$(document).ready(function () {
  var nombre_url = extraitNombre(window.location.pathname);

  if (window.location.pathname == '/alstom/InstanceBaseline/' + nombre_url) {
    $('main').css("opacity", '0.4');
    $('#wait-spinner').show();
    $.post("/alstom/checkBaseline").then(function (response) {
      response.forEach(function (element) {
        //Remplissage par les element reçu du controller
        $('#select_baseline_1').append(new Option(element.name, element.id));
        $('#select_baseline_2').append(new Option(element.name, element.id));
      });
      $('#select_baseline_1').val('');
      $('#select_baseline_2').val('');
    }).done(function () {
      $('main').css("opacity", '1');
      $('#wait-spinner').hide();
    });
  }

  ;
  $('#close-modal-baselineToTrain').click(function () {
    $('main').css('opacity', '1');
    $('.description').remove();
    $('#modal_baseline_equipement').hide();
    new_equipment_num = "";
  });
  $('#close-equipement-baseline').click(function () {
    $('main').css('opacity', '1');
    $('.description').remove();
    $('#modal_baseline_equipement').hide();
    new_equipment_num = "";
    totalEquipt = "";
  });
});
$('#select_train').show();
$('#select_locomotive').show();
var current_choice = "",
    ertms_left = false,
    ertms_middle = false,
    ertms_right = false;
$('#close-modal-baseline-1').click(function () {
  if (ertms_right == true) {
    $('#content-form-baseline-2').addClass('offset-md-6');
    $('#content-form-baseline-1').hide();
  } else {
    $('#content-form-baseline-1').hide();
  }

  ertms_left = false;
});
$('#close-modal-baseline-2').click(function () {
  $('#content-form-baseline-2').hide();
  ertms_right = false;
});
$('#ertms-train-1').click(function () {
  ertms_left = true;
  ertms_middle = false; //l'ertms de gauche selectionner

  $('#ertms-train-1').addClass("selected");
  $('#ertms-train-2').removeClass("selected");
  $('#label-baseline-1').text('Baseline left');
  $('#content-form-baseline-1').removeClass('offset-md-3');
  $('#content-form-baseline-1').show();

  if (ertms_right == false) {
    $('#content-form-baseline-2').hide();
  } else {
    $('#content-form-baseline-2').removeClass('offset-md-6');
  }
});
$('#ertms-train-2').click(function () {
  // l'ertms du milieu selectionner
  ertms_left = false;
  ertms_right = false;
  ertms_middle = true;
  $('#ertms-train-2').addClass("selected");
  $('#ertms-train-1').removeClass("selected");
  $('#ertms-train-3').removeClass("selected");
  $('#label-baseline-1').text('Baseline midle');
  $('#content-form-baseline-2').hide();
  $('#content-form-baseline-1').show();
  $('#content-form-baseline-1').addClass('offset-md-3');
});
$('#ertms-train-3').click(function () {
  // l'ertms de droite selectionner
  $('#ertms-train-3').addClass("selected");
  ertms_right = true;
  ertms_middle = false;
  $('#label-baseline-2').text('Baseline right');

  if (ertms_left == true && ertms_middle == false) {
    $('#content-form-baseline-1').removeClass('offset-md-3');
    $('#content-form-baseline-2').removeClass('offset-md-6');
    $('#content-form-baseline-2').show();
  } else if (ertms_right == true && ertms_left == false) {
    $('#content-form-baseline-1').removeClass('offset-md-3');
    $('#content-form-baseline-1').hide();
    $('#content-form-baseline-2').addClass('offset-md-6');
    $('#content-form-baseline-2').show();
  }

  $('#ertms-train-2').removeClass("selected");
});
$('#ertms-loco-1').click(function () {
  ertms_left = true;

  if (ertms_right == true) {
    $('#content-form-baseline-2').removeClass('offset-md-6');
    $('#content-form-baseline-1').show();
  } else {
    $('#content-form-baseline-1').show();
  }

  $('#label-baseline-1').text('Baseline left');
  $('#ertms-loco-1').addClass("selected");
  $('#ertms-loco-2').removeClass("selected");
  $('#btn-baseline-1').css('opacity', '1');
  $('#btn-baseline-3').css('opacity', '0');
});
$('#ertms-loco-2').click(function () {
  ertms_right = true;
  $('#label-baseline-2').text('Baseline right');
  $('#btn-baseline-3').css('opacity', '1');
  $('#btn-baseline-1').css('opacity', '0');
  $('#ertms-loco-2').addClass("selected");
  $('#ertms-loco-1').removeClass("selected");

  if (ertms_left == true) {
    $('#content-form-baseline-2').removeClass('offset-md-6');
    $('#content-form-baseline-2').show();
  } else {
    $('#content-form-baseline-2').addClass('offset-md-6');
    $('#content-form-baseline-2').show();
  }
}); //Recupere le select de la baseline et le met en visuel

$('#add-baseline-1').click(function (e) {
  e.preventDefault();
  $('main').css("opacity", '0.4');
  $('#wait-spinner').show();

  if (ertms_middle) {
    $('#ertms-train-3').css('opacity', '0');
    $('#ertms-train-1').css('opacity', '0');
  } else if (ertms_left) {
    $('#ertms-train-2').css('opacity', '0');
  } // $('#content-form-baseline-1').hide();


  var idBaseline = $('#select_baseline_1 option:selected').val();
  $('#title_baseline_modal').html($('#select_baseline_1 option:selected').text()); // $('#modal-content-form-equipement-edit').show();

  $.ajax({
    url: '/alstom/CheckEquipements/' + idBaseline,
    type: 'POST',
    data: {},
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      $('#wait-spinner').hide();
      $('#modal_baseline_equipement').show();
      $('main').css('opacity', '0.4');
      var Equipments = JSON.parse(response.equipments);
      Equipments.forEach(CountNumberEquipt);
      Equipments.forEach(FindIndexEvc);
      Equipments.forEach(returnIndexElement);
    },
    error: function error(xhr, textStatus, errorThrown) {
      'Ajax request failed.';
    }
  });
});
$('#add-baseline-2').click(function (e) {
  e.preventDefault();
  $('#ertms-train-2').css('opacity', '0'); // $('#content-form-baseline-1').hide();

  var name_baseline_1 = $('#select_baseline_2 option:selected').val();
  console.log(name_baseline_1); // $('#content-name-baseline-1').append("<h5>" + name_baseline_1 + "</h5>")
}); // Requete AJAX pour remplir le formulaire d'équipement avec l'equipement selectionner

$('#show-equipment ').on('click', '.description > .content-description-dtr > button', function (e) {
  e.preventDefault();
  $('#modal_baseline_equipement').hide();
  $('.main-ertms').css("opacity", '0.4');
  $('#wait-spinner').show();
  idEquipment = extraitNombre($(this)[0]["id"]);
  var $this = $("#form_equipement_edit_baseline");
  var data = {};
  $.ajax({
    url: '/alstom/edit-equipment-baseline/' + idEquipment,
    type: 'POST',
    data: {},
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      $('#equipement_Type').val(response["type"]["id"]);
      data[$('#equipement_Type').attr('name')] = $('#equipement_Type').val();
      $.post("/alstom/checkSubtype", data).then(function (response) {
        //Vidage champ soustype
        $('#equipement_sous_type').empty();
        response.forEach(function (element) {
          //Remplissage par les element reçu du controller
          $('#equipement_sous_type').append(new Option(element.name, element.id));
        });
      }).done(function () {
        $('.main-ertms').css("opacity", '0.4');
        $('#wait-spinner').show(); //Rempli input avec valeur recu de l'equipement

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
              $('#' + value.id).val(response["dTRBoard"]);
              break;

            case 'equipement_Indice_DTR':
              $('#' + value.id).val(response["indiceDTR"]);
              break;

            case 'equipement_Num_serie':
              $('#' + value.id).val(response["numSerie"]);
              break;
          }
        });
        $('#wait-spinner').hide();
        $('#modal-content-form-equipement-edit').show();
      });
    },
    error: function error(xhr, textStatus, errorThrown) {
      'Ajax request failed.';
    }
  });
}); //Remplir les inputs avec les nouvelles valeurs

$('#soumission-equipement-edit-baseline').click(function () {
  e.preventDefault();
  $('main').css("opacity", '0.4');
  $('#wait-spinner').show();
  var $this = $(this);
  var data = {};
  $this.find('[name]').each(function (index, value) {
    var that = $(this),
        name = that.attr('name'),
        value = that.val();
    data[name] = value;
  });
  console.log(data);
}); // Soumission formulaire de train

$('#form_equipement_edit_baseline').on('submit', function (e) {
  e.preventDefault();
  $('main').css("opacity", '0.4');
  $('#wait-spinner').show();
  var $this = $(this);
  var data = {};
  $this.find('[name]').each(function (index, value) {
    var that = $(this),
        name = that.attr('name'),
        value = that.val();
    data[name] = value;
  });
  $.ajax({
    url: '/alstom/edit-equipment-baseline/' + idEquipment,
    type: $this.attr('method'),
    data: {
      equipement: data
    },
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      $('main').css("opacity", '1');
      $('#wait-spinner').hide();
      $('#modal-content-form-equipement-edit').hide();
      $('#modal_baseline_equipement').show();
      $('#btn-add-number-serie' + idEquipment).replaceWith("<p>" + response.numSerie + "</p>");
      new_equipment_num_serie.push(response);
      new_equipment_num++;
      console.log(response);
      console.log(new_equipment_num);
    },
    error: function error(xhr, textStatus, errorThrown) {
      'Ajax request failed.';
    }
  });
}); //Valider l'instance des equipements

$('#valid-baseline-train').click(function () {
  console.log(new_equipment_num);
  console.log(totalEquipt);

  if (new_equipment_num != totalEquipt) {
    alert('please enter num serie before instance baseline');
  } else {
    var etcsId = $('#etcsid-name').val();
    console.log(etcsId);
    var id_train = extraitNombre(window.location.pathname);
    var id_baseline = $('#select_baseline_1 option:selected').val();
    $('main').css("opacity", '0.4');
    $('#wait-spinner').show();
    $.ajax({
      url: '/alstom/addBaselineInstancier',
      type: 'POST',
      data: {
        id_train: id_train,
        baseline: id_baseline,
        new_equipt: new_equipment_num_serie,
        etcsId: etcsId
      },
      async: true,
      dataType: 'json',
      // JSON
      success: function success(response) {
        console.log(response);
        window.location.href = "/alstom/baseline-train/" + response.idbaseline;
        $('main').css("opacity", '1');
        $('#wait-spinner').hide();
      },
      error: function error(xhr, textStatus, errorThrown) {
        'Ajax request failed.';
      }
    });
  }
}); // Requete AJAX pour remplir le formulaire d'équipement avec l'equipement selectionner instancier

$('.card').on('click', '.edit-delete-equipement > a', function (e) {
  e.preventDefault();
  $('.main-ertms').css("opacity", '0.4');
  $('#wait-spinner').show();
  idEquipment = extraitNombre($(this)[0]["classList"][0]);
  var $this = $("#form_equipement_edit_instance");
  var data = {};
  $('#wait-spinner').show();
  $.ajax({
    url: '/alstom/edit-equipment-instance/' + idEquipment,
    type: 'POST',
    data: {},
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      $('#equipement_Type').val(response["type"]["id"]);
      data[$('#equipement_Type').attr('name')] = $('#equipement_Type').val();
      $.post("/alstom/checkSubtype", data).then(function (response) {
        //Vidage champ soustype
        $('#equipement_sous_type').empty();
        response.forEach(function (element) {
          //Remplissage par les element reçu du controller
          $('#equipement_sous_type').append(new Option(element.name, element.id));
        });
      }).done(function () {
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
              $('#' + value.id).val(response["dTRBoard"]);
              break;

            case 'equipement_Indice_DTR':
              $('#' + value.id).val(response["indiceDTR"]);
              break;

            case 'equipement_Num_serie':
              $('#' + value.id).val(response["numSerie"]);
              break;
          }
        });
        $('#wait-spinner').hide();
        $('#modal-content-form-equipement-edit').show();
      });
    },
    error: function error(xhr, textStatus, errorThrown) {
      'Ajax request failed.';
    }
  });
}); //Formulaire d'edit de l'équipement

$('#form_equipement_edit_instance').on('submit', function (e) {
  e.preventDefault();
  $('.main-ertms').css("opacity", '0.4');
  $('#form_equipement_edit').css("opacity", "0.4");
  $('#wait-spinner').show();
  var $this = $(this);
  var data = {},
      action; //Rempli data a partir des valeur des inputs

  $this.find('[name]').each(function (index, value) {
    var that = $(this),
        name = that.attr('name');

    if (name != "equipement[_token]" && name != "soumission_equipement") {
      value = that.val();
      data[name] = value;
    }
  });
  $.ajax({
    url: '/alstom/edit-equipment-instance/' + idEquipment,
    type: 'POST',
    data: {
      'equipement': data,
      "soumission_edit_equipement": true,
      'idequipment': idEquipment
    },
    async: true,
    dataType: 'json',
    // JSON
    success: function success(response) {
      location.reload();
      $('#wait-spinner').hide();
      $('#modal-content-form-equipement-edit').show();
    },
    error: function error(xhr, textStatus, errorThrown) {
      'Ajax request failed.';
    }
  });
});

function FindIndexEvc(element, index, array) {
  index = element['id'];

  if (element['type']['id'] == "1" && element['Status'] == true) {
    $("#show-equipment").append('<div class="description" id="description-equipement-' + index + '"></div>');
    $("#description-equipement-" + index + "").append(writeType(4, element['type']['name']));
    $("#description-equipement-" + index + "").addClass("description-SubtypeCard");

    if (element['SousType'] != null) {
      $("#description-equipement-" + index + "").append(writeSubtype(5, element['SousType']['name']));
    }

    $("#description-equipement-" + index + "").append('<div class="content-description-dtr" id="content-description-' + index + '"></div>');
    $("#content-description-" + index + "").append('<p>' + element["dTRBoard"] + '</p>');
    $("#content-description-" + index + "").append('<p>' + element["indiceDTR"] + '</p>');

    if (element['numSerie'] == "") {
      $("#content-description-" + index + "").append('<button class="btn btn-secondary" style="padding: 2px" id = "btn-add-number-serie' + element['id'] + '" > Add number of serie </button>');
    } else {
      $("#content-description-" + index + "").append('<p>' + element['numSerie'] + '</p>');
    }

    indexEVC = $("#description-equipement-" + index + "");
  }
}

function returnIndexElement(element, index, array) {
  index = element['id'];

  if (element['Status'] == true && element['type']['id'] != "1") {
    //Test l'existence de la div dans le cas où elle existe la remplace si pas la met en place
    if ($('#description-equipement-' + index).length) {
      $('#description-equipement-' + index).replaceWith('<div class="description" id="description-equipement-' + index + '"></div>');
    } else {
      $("#show-equipment").append('<div class="description" id="description-equipement-' + index + '"></div>');
    } //test si l'équipement est la carte ou non


    if (element['type']['id'] != "2") {
      //Swith replacement de l'id du type avec son nom
      $("#description-equipement-" + index + "").append(writeType(4, element['type']['name']));

      if (element['SousType'] != null) {
        $("#description-equipement-" + index + "").append(writeSubtype(5, element['SousType']['name']));
      }

      $("#description-equipement-" + index + "").append('<div class="content-description-dtr" id="content-description-' + index + '"></div>');
      $("#content-description-" + index + "").append('<p>' + element["dTRBoard"] + '</p>');
      $("#content-description-" + index + "").append('<p>' + element["indiceDTR"] + '</p>');

      if (element['numSerie'] == "") {
        $("#content-description-" + index + "").append('<button class="btn btn-secondary" style="padding: 2px" id = "btn-add-number-serie' + element['id'] + '" > Add number of serie </button>');
      } else {
        $("#content-description-" + index + "").append('<p>' + element['numSerie'] + '</p> <a id="edit-' + index + '"><i class="fas fa-edit"></i> </a> <a id="delete-' + index + '"><i class = "fas fa-trash-alt poubelle"> </i></a>');
      } // $("#content-description-" + index + "").append(writeEditDelete(index));

    } else {
      //Ecris le nom du type "carte" sous le type  EVC
      $(indexEVC).append(writeType(5, element['SousType']['name'])); //Parcous le type de soustype 
      // $(indexEVC).append(writeSubtype(6, element['SousType']['name']));

      $(indexEVC).append('<div class="content-description-dtr content-description-dtrCard" id="content-description-' + index + '"></div>');
      $("#content-description-" + index + "").append('<p>' + element["dTRBoard"] + '</p>');
      $("#content-description-" + index + "").append('<p>' + element["indiceDTR"] + '</p>');

      if (element['numSerie'] == "") {
        $("#content-description-" + index + "").append('<button class="btn btn-secondary" style="padding: 2px" id = "btn-add-number-serie' + element['id'] + '" > Add number of serie </button>');
      } else {
        $("#content-description-" + index + "").append('<p>' + element['numSerie'] + '</p> <a id="edit-' + index + '"><i class="fas fa-edit"></i> </a> <a id="delete-' + index + '"><i class = "fas fa-trash-alt poubelle"> </i></a>');
      } // $("#content-description-" + index + "").append(writeEditDelete(index));


      $('#description-equipement-' + index).remove();
    }
  }
}

function CountNumberEquipt(element, index, array) {
  totalEquipt++;
} //Extrait le nombre d'une streing


function extraitNombre(str) {
  return Number(str.replace(/[^\d]/g, ""));
} //Ecris le titre du type d'équipement


function writeType(size, name) {
  return '<h' + size + ' class="description-Type " id="description-type ">' + name + '</h' + size + '>';
}

; //Ecris le titre du soustype d'équipement

function writeSubtype(size, name) {
  return '<h' + size + ' class="description-Type " id="description-subType ">' + name + '</h' + size + '>';
}

; //Ecris le titre du soustype d'équipement

function writeSubtypeCard(size, name) {
  return '<h' + size + ' class="description-subtype" id="description-subType ">' + name + '</h' + size + '>';
}

; // //Ecrit les 2 icons d'edit et delete
// function writeEditDelete(index) {
//     return ' <p class="edit-delete-equipement"> <a id="edit-' + index + '"><i class="fas fa-edit"></i> </a></p>';
// };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9iYXNlbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZXF1aXBlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZmxlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90a2lyYnkvd29ya3NwYWNlL3picnlpa3QvbG9hZGluZy9wcm9qZWN0cy9sZEJhci9sb2FkaW5nLWJhci9zcmMvbG9hZGluZy1iYXIubHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90a2lyYnkvd29ya3NwYWNlL3picnlpa3QvbG9hZGluZy9wcm9qZWN0cy9sZEJhci9sb2FkaW5nLWJhci9zcmMvcHJlc2V0cy5scyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGVzdC11cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RyYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiaG92ZXIiLCJmaW5kIiwic3RvcCIsImFuaW1hdGUiLCJoZWlnaHQiLCJvcGFjaXR5IiwiaGlkZSIsImRvY3VtZW50IiwicmVhZHkiLCJyZW1vdmUiLCJjbGljayIsInRvZ2dsZUNsYXNzIiwiY3NzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIiR0eXBlIiwiYXR0ciIsIkVxdWlwbWVudHMiLCJpIiwiaW5kZXhFVkMiLCJwb3NJbmRleCIsIlByZXNlbmNlRVZDIiwiaWRFcXVpcG1lbnQiLCJ0YWJJbmRleEVxdWlwdCIsInNlbGVjdCIsImNyZWF0ZUVsZW1lbnQiLCJwcmV2aW91cyIsInRhYkVxdWlwZW1lbnRUeXBlIiwidGFiRXF1aXBlbWVudFN1YnR5cGUiLCJkYXRhIiwidmFsIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNob3ciLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiZW1wdHkiLCJmb3JFYWNoIiwiZWxlbWVudCIsImFwcGVuZCIsIk9wdGlvbiIsIm5hbWUiLCJpZCIsImNoYW5nZSIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiJHRoaXMiLCJhY3Rpb24iLCJlYWNoIiwiaW5kZXgiLCJ2YWx1ZSIsInRoYXQiLCJwdXNoIiwiYWpheCIsInVybCIsInR5cGUiLCJ0YWJFcXVpcHRzIiwiYXN5bmMiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ4aHIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJpZEVydG1zIiwiZXh0cmFpdE5vbWJyZSIsImVxdWlwZW1lbnQiLCJyZXR1cm5JbmRleEVsZW1lbnQiLCJhbGVydCIsImJhc2VsaW5lTmFtZSIsImJhc2VsaW5lIiwidGV4dCIsImlkQmFzZWxpbmUiLCJocmVmIiwiZGVsZXRlRXF1aXBtZW50IiwiZG9uZSIsInJlbG9hZCIsInZlcnNpb24iLCJ0cmlnZ2VyIiwiYXJyYXkiLCJsZW5ndGgiLCJyZXBsYWNlV2l0aCIsIndyaXRlVHlwZSIsIndyaXRlU3VidHlwZSIsIndyaXRlRWRpdERlbGV0ZSIsInNwbGljZSIsInBvc2l0aW9uIiwic3RyIiwiTnVtYmVyIiwicmVwbGFjZSIsInNpemUiLCJ3cml0ZVN1YnR5cGVDYXJkIiwibm90Iiwia2V5dXAiLCJzZWFyY2giLCJjdXJyZW50XyIsInRhYk5hbWUiLCJKU09OIiwicGFyc2UiLCJwcm9qZWN0c0ZvdW5kIiwiJHRyYWluX3NlbGVjdCIsImlkUHJvamVjdCIsInRhYlRyYWlucyIsIiRmbGVldCIsIiR0cmFpbiIsIiRlcnRtcyIsInR5cGVMb2ciLCJ0eXBlTG9nVGV4dCIsImlzQWR2YW5jZWRVcGxvYWQiLCJkaXYiLCIkZm9ybSIsIiRpbnB1dCIsIiRsYWJlbCIsInNob3dGaWxlcyIsImZpbGVzIiwicHJnYmFyIiwibGRCYXIiLCJkcm9wcGVkRmlsZXMiLCJzdG9wUHJvcGFnYXRpb24iLCJvcmlnaW5hbEV2ZW50IiwiZGF0YVRyYW5zZmVyIiwiTG9nIiwiaGFzQ2xhc3MiLCJhamF4RGF0YSIsIkZvcm1EYXRhIiwiZ2V0IiwiZmlsZSIsIlhNTEh0dHBSZXF1ZXN0IiwidXBsb2FkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsImxvYWRlZCIsImxlbmd0aENvbXB1dGFibGUiLCJwZXJjZW50Q29tcGxldGUiLCJ0b3RhbCIsInNldCIsImNhY2hlIiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsImNvbXBsZXRlIiwidmFsaWQiLCJpZnJhbWVOYW1lIiwiRGF0ZSIsImdldFRpbWUiLCIkaWZyYW1lIiwib25lIiwiY29udGVudHMiLCJyZW1vdmVBdHRyIiwiJGVycm9yTXNnIiwiTGlzdGVQbHVnIiwibm9tYnJlX3VybCIsImh0bWwiLCJQbHVnIiwid3JpdGVQbHVnIiwiZmlsZXN0IiwicXVlcnlTZWxlY3RvciIsInRlbXBEZXN0aW5hdGlvbiIsIm5hbWVGaWxlIiwidXBsb2FkU3RhdHVzIiwicGF0aCIsImtleSIsImlkUGx1ZyIsImRlbGV0ZVBsdWciLCJuYW1lX3BsdWciLCJrZXlfcGx1ZyIsIm5ld19lcXVpcG1lbnRfbnVtIiwidG90YWxFcXVpcHQiLCJuZXdfZXF1aXBtZW50X251bV9zZXJpZSIsImN1cnJlbnRfY2hvaWNlIiwiZXJ0bXNfbGVmdCIsImVydG1zX21pZGRsZSIsImVydG1zX3JpZ2h0IiwiZXF1aXBtZW50cyIsIkNvdW50TnVtYmVyRXF1aXB0IiwiRmluZEluZGV4RXZjIiwibmFtZV9iYXNlbGluZV8xIiwibnVtU2VyaWUiLCJldGNzSWQiLCJpZF90cmFpbiIsImlkX2Jhc2VsaW5lIiwibmV3X2VxdWlwdCIsImlkYmFzZWxpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxDQUFDLEdBQUdDLG1CQUFPLENBQUMsb0RBQUQsQ0FBakIsQyxDQUNBO0FBQ0E7OztBQUNBRCxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCRSxLQUFsQixDQUF3QixZQUFZO0FBQ2hDRixHQUFDLENBQUMsSUFBRCxDQUFELENBQVFHLElBQVIsQ0FBYSxjQUFiLEVBQTZCQyxJQUE3QixHQUFvQ0MsT0FBcEMsQ0FBNEM7QUFDeENDLFVBQU0sRUFBRSxRQURnQztBQUV4Q0MsV0FBTyxFQUFFO0FBRitCLEdBQTVDLEVBR0csR0FISDtBQUlILENBTEQ7QUFNQVAsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JFLEtBQXhCLENBQThCLFlBQVk7QUFDdENGLEdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUcsSUFBUixDQUFhLG9CQUFiLEVBQW1DQyxJQUFuQyxHQUEwQ0MsT0FBMUMsQ0FBa0Q7QUFDOUNDLFVBQU0sRUFBRSxRQURzQztBQUU5Q0MsV0FBTyxFQUFFO0FBRnFDLEdBQWxELEVBR0csR0FISDtBQUlILENBTEQ7QUFPQVAsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JRLElBQXRCO0FBRUFSLENBQUMsQ0FBQ1MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUUxQlYsR0FBQyxDQUFDLEtBQUQsQ0FBRCxDQUFTVyxNQUFUO0FBQ0FYLEdBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JZLEtBQWxCLENBQXdCLFlBQVk7QUFDaENaLEtBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY2EsV0FBZCxDQUEwQixPQUExQjtBQUNILEdBRkQ7QUFHQWIsR0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjRSxLQUFkLENBQW9CLFlBQVk7QUFDeEJGLEtBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWMsR0FBVixDQUFjLFlBQWQsRUFBNEIsc0JBQTVCO0FBQ0FkLEtBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWUsUUFBVixDQUFtQixZQUFuQjtBQUNBZixLQUFDLENBQUMsTUFBRCxDQUFELENBQVVnQixXQUFWLENBQXNCLFVBQXRCO0FBQ0FoQixLQUFDLENBQUMsTUFBRCxDQUFELENBQVVlLFFBQVYsQ0FBbUIsVUFBbkI7QUFDQWYsS0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQmdCLFdBQWhCLENBQTRCLFdBQTVCO0FBQ0gsR0FOTCxFQU9JLFlBQVk7QUFDUmhCLEtBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWMsR0FBVixDQUFjLFlBQWQsRUFBNEIsdUJBQTVCO0FBQ0FkLEtBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWUsUUFBVixDQUFtQixVQUFuQjtBQUNBZixLQUFDLENBQUMsTUFBRCxDQUFELENBQVVnQixXQUFWLENBQXNCLFVBQXRCO0FBQ0FoQixLQUFDLENBQUMsTUFBRCxDQUFELENBQVVnQixXQUFWLENBQXNCLFlBQXRCO0FBQ0FoQixLQUFDLENBQUMsWUFBRCxDQUFELENBQWdCZSxRQUFoQixDQUF5QixXQUF6QjtBQUNILEdBYkwsRUFOMEIsQ0FvQjFCOztBQUNBZixHQUFDLENBQUMsWUFBRCxDQUFELENBQWdCWSxLQUFoQixDQUFzQixZQUFZO0FBQzlCWixLQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQmMsR0FBdEIsQ0FBMEIsV0FBMUIsRUFBdUMsZ0JBQXZDO0FBQ0gsR0FGRDtBQUlILENBekJELEU7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0FkLENBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCUSxJQUEzQjtBQUNBUixDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QlEsSUFBN0I7QUFDQVIsQ0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0NRLElBQXBDO0FBQ0FSLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCUSxJQUF6QjtBQUNBUixDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CUSxJQUFuQixHLENBRUE7O0FBQ0EsSUFBTVMsS0FBSyxHQUFHakIsQ0FBQyxDQUFDLGtCQUFELENBQWY7QUFDQWlCLEtBQUssQ0FBQ0MsSUFBTixDQUFXLFVBQVgsRUFBdUIsVUFBdkI7QUFFQSxJQUFJQyxVQUFVLEdBQUcsRUFBakI7QUFBQSxJQUNJQyxDQUFDLEdBQUcsQ0FEUjtBQUFBLElBRUlDLFFBQVEsR0FBRyxDQUZmO0FBQUEsSUFHSUMsUUFBUSxHQUFHLENBSGY7QUFBQSxJQUlJQyxXQUFXLEdBQUcsS0FKbEI7QUFBQSxJQUtJQyxXQUFXLEdBQUcsQ0FMbEI7QUFBQSxJQU1JQyxjQUFjLEdBQUcsRUFOckI7QUFPQUMsTUFBTSxHQUFHakIsUUFBUSxDQUFDa0IsYUFBVCxDQUF1QixRQUF2QixDQUFULEVBQ0lDLFFBQVEsR0FBRyxFQURmLEVBRUlDLGlCQUFpQixHQUFHLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsUUFBakIsRUFBMkIsS0FBM0IsQ0FGeEIsRUFHSUMsb0JBQW9CLEdBQUcsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixNQUFoQixFQUF3QixPQUF4QixFQUFpQyxPQUFqQyxDQUgzQixDLENBS0E7O0FBQ0E5QixDQUFDLENBQUNTLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDMUIsTUFBSXFCLElBQUksR0FBRyxFQUFYO0FBQ0FBLE1BQUksQ0FBQ2QsS0FBSyxDQUFDQyxJQUFOLENBQVcsTUFBWCxDQUFELENBQUosR0FBMkJELEtBQUssQ0FBQ2UsR0FBTixFQUEzQjs7QUFFQSxNQUFJQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWhCLElBQTRCLHlCQUFoQyxFQUEyRDtBQUN2RG5DLEtBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWMsR0FBVixDQUFjLFNBQWQsRUFBeUIsS0FBekI7QUFDQWQsS0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQm9DLElBQW5CO0FBQ0FwQyxLQUFDLENBQUNxQyxJQUFGLENBQU8sc0JBQVAsRUFBK0JOLElBQS9CLEVBQXFDTyxJQUFyQyxDQUEwQyxVQUFVQyxRQUFWLEVBQW9CO0FBQzFEdkMsT0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVYyxHQUFWLENBQWMsU0FBZCxFQUF5QixHQUF6QjtBQUNBZCxPQUFDLENBQUMsZUFBRCxDQUFELENBQW1CUSxJQUFuQixHQUYwRCxDQUcxRDs7QUFDQVIsT0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJ3QyxLQUEzQjtBQUNBRCxjQUFRLENBQUNFLE9BQVQsQ0FBaUIsVUFBQUMsT0FBTyxFQUFJO0FBQ3hCO0FBQ0ExQyxTQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQjJDLE1BQTNCLENBQWtDLElBQUlDLE1BQUosQ0FBV0YsT0FBTyxDQUFDRyxJQUFuQixFQUF5QkgsT0FBTyxDQUFDSSxFQUFqQyxDQUFsQztBQUNILE9BSEQ7QUFLSCxLQVZEO0FBWUgsR0FuQnlCLENBb0IxQjtBQUNBOztBQUNILENBdEJELEUsQ0F3QkE7O0FBQ0E3QixLQUFLLENBQUM4QixNQUFOLENBQWEsWUFBWTtBQUVyQixNQUFJaEIsSUFBSSxHQUFHLEVBQVg7QUFDQUEsTUFBSSxDQUFDZCxLQUFLLENBQUNDLElBQU4sQ0FBVyxNQUFYLENBQUQsQ0FBSixHQUEyQkQsS0FBSyxDQUFDZSxHQUFOLEVBQTNCO0FBRUFoQyxHQUFDLENBQUMsZUFBRCxDQUFELENBQW1Cb0MsSUFBbkI7QUFDQXBDLEdBQUMsQ0FBQ3FDLElBQUYsQ0FBTyxzQkFBUCxFQUErQk4sSUFBL0IsRUFBcUNPLElBQXJDLENBQTBDLFVBQVVDLFFBQVYsRUFBb0I7QUFDMUQ7QUFDQXZDLEtBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJRLElBQW5CO0FBQ0FSLEtBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCd0MsS0FBM0I7QUFDQUQsWUFBUSxDQUFDRSxPQUFULENBQWlCLFVBQUFDLE9BQU8sRUFBSTtBQUN4QjtBQUNBMUMsT0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkIyQyxNQUEzQixDQUFrQyxJQUFJQyxNQUFKLENBQVdGLE9BQU8sQ0FBQ0csSUFBbkIsRUFBeUJILE9BQU8sQ0FBQ0ksRUFBakMsQ0FBbEM7QUFDSCxLQUhEO0FBS0gsR0FURDtBQVVILENBaEJELEUsQ0FrQkE7O0FBQ0E5QyxDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQmdELEVBQXRCLENBQXlCLFFBQXpCLEVBQW1DLFVBQVVDLENBQVYsRUFBYTtBQUU1QztBQUNBQSxHQUFDLENBQUNDLGNBQUY7QUFFQWxELEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJvQyxJQUFuQjtBQUNBLE1BQUllLEtBQUssR0FBR25ELENBQUMsQ0FBQyxJQUFELENBQWI7QUFDQSxNQUFJK0IsSUFBSSxHQUFHLEVBQVg7QUFBQSxNQUNJcUIsTUFESixDQVA0QyxDQVM1Qzs7QUFDQUQsT0FBSyxDQUFDaEQsSUFBTixDQUFXLFFBQVgsRUFBcUJrRCxJQUFyQixDQUEwQixVQUFVQyxLQUFWLEVBQWlCQyxLQUFqQixFQUF3QjtBQUM5QyxRQUFJQyxJQUFJLEdBQUd4RCxDQUFDLENBQUMsSUFBRCxDQUFaO0FBQUEsUUFDSTZDLElBQUksR0FBR1csSUFBSSxDQUFDdEMsSUFBTCxDQUFVLE1BQVYsQ0FEWDs7QUFHQSxRQUFJMkIsSUFBSSxJQUFLLG9CQUFULElBQWtDQSxJQUFJLElBQUssdUJBQS9DLEVBQXlFO0FBQ3JFVSxXQUFLLEdBQUdDLElBQUksQ0FBQ3hCLEdBQUwsRUFBUjtBQUNBRCxVQUFJLENBQUNjLElBQUQsQ0FBSixHQUFhVSxLQUFiO0FBQ0g7O0FBQ0QsUUFBSVYsSUFBSSxJQUFJLDRCQUFaLEVBQTBDO0FBQ3RDTyxZQUFNLEdBQUcsTUFBVDtBQUNILEtBRkQsTUFFTztBQUNIQSxZQUFNLEdBQUcsS0FBVDtBQUNIO0FBRUosR0FkRCxFQVY0QyxDQXlCNUM7O0FBQ0EsTUFBSUEsTUFBTSxJQUFJLEtBQWQsRUFBcUI7QUFDakI7QUFDQWpDLGNBQVUsQ0FBQ3NDLElBQVgsQ0FBZ0IxQixJQUFoQixFQUZpQixDQUdqQjs7QUFDQS9CLEtBQUMsQ0FBQzBELElBQUYsQ0FBTztBQUNIQyxTQUFHLEVBQUVSLEtBQUssQ0FBQ2pDLElBQU4sQ0FBVyxRQUFYLENBREY7QUFFSDBDLFVBQUksRUFBRVQsS0FBSyxDQUFDakMsSUFBTixDQUFXLFFBQVgsQ0FGSDtBQUdIYSxVQUFJLEVBQUU7QUFDRjhCLGtCQUFVLEVBQUUxQztBQURWLE9BSEg7QUFNSDJDLFdBQUssRUFBRSxJQU5KO0FBT0hDLGNBQVEsRUFBRSxNQVBQO0FBT2U7QUFDbEJDLGFBQU8sRUFBRSxpQkFBVXpCLFFBQVYsRUFBb0I7QUFDekIwQixlQUFPLENBQUNDLEdBQVIsQ0FBWTNCLFFBQVo7QUFDQXZDLFNBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWMsR0FBVixDQUFjLFNBQWQsRUFBeUIsR0FBekI7QUFDQWQsU0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQlEsSUFBbkI7QUFFSCxPQWJFO0FBY0gyRCxXQUFLLEVBQUUsZUFBVUMsR0FBVixFQUFlQyxVQUFmLEVBQTJCQyxXQUEzQixFQUF3QztBQUMxQyw4QkFBRDtBQUNIO0FBaEJFLEtBQVAsRUFKaUIsQ0FzQmpCO0FBQ0gsR0F2QkQsTUF1Qk8sSUFBSWxCLE1BQU0sSUFBSSxNQUFkLEVBQXNCO0FBQ3pCLFFBQUltQixPQUFPLEdBQUdDLGFBQWEsQ0FBQ3ZDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBakIsQ0FBM0I7QUFFQW5DLEtBQUMsQ0FBQzBELElBQUYsQ0FBTztBQUNIQyxTQUFHLEVBQUUsNEJBQTRCbkMsV0FEOUI7QUFFSG9DLFVBQUksRUFBRVQsS0FBSyxDQUFDakMsSUFBTixDQUFXLFFBQVgsQ0FGSDtBQUdIYSxVQUFJLEVBQUU7QUFDRjBDLGtCQUFVLEVBQUUxQyxJQURWO0FBRUZ3QyxlQUFPLEVBQUVBO0FBRlAsT0FISDtBQU9IVCxXQUFLLEVBQUUsSUFQSjtBQVFIQyxjQUFRLEVBQUUsTUFSUDtBQVFlO0FBQ2xCQyxhQUFPLEVBQUUsaUJBQVV6QixRQUFWLEVBQW9CO0FBQ3pCMEIsZUFBTyxDQUFDQyxHQUFSLENBQVkzQixRQUFaO0FBQ0F2QyxTQUFDLENBQUMsTUFBRCxDQUFELENBQVVjLEdBQVYsQ0FBYyxTQUFkLEVBQXlCLEdBQXpCO0FBQ0FkLFNBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJRLElBQW5CO0FBQ0gsT0FiRTtBQWNIMkQsV0FBSyxFQUFFLGVBQVVDLEdBQVYsRUFBZUMsVUFBZixFQUEyQkMsV0FBM0IsRUFBd0M7QUFDMUMsOEJBQUQ7QUFDSDtBQWhCRSxLQUFQO0FBa0JIOztBQUVEdEUsR0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0NRLElBQXBDO0FBQ0FSLEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJvQyxJQUFuQjtBQUNBcEMsR0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJvQyxJQUF2QjtBQUNBcEMsR0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJvQyxJQUFyQjtBQUNBcEMsR0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJRLElBQXpCLEdBNUU0QyxDQTZFNUM7O0FBQ0FXLFlBQVUsQ0FBQ3NCLE9BQVgsQ0FBbUJpQyxrQkFBbkI7QUFDSCxDQS9FRCxFLENBa0ZBOztBQUNBMUUsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JZLEtBQXRCLENBQTRCLFlBQVk7QUFDcEMsTUFBSVosQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JnQyxHQUFwQixNQUE2QixFQUFqQyxFQUFxQztBQUNqQzJDLFNBQUssQ0FBQywrQkFBRCxDQUFMO0FBQ0EsV0FBTyxLQUFQO0FBQ0gsR0FIRCxNQUdPO0FBQ0gzRSxLQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQm9DLElBQXJCO0FBQ0g7QUFFSixDQVJEO0FBVUEsSUFBSXdDLFlBQUo7QUFDQTVFLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CZ0QsRUFBcEIsQ0FBdUIsUUFBdkIsRUFBaUMsVUFBVUMsQ0FBVixFQUFhO0FBQzFDakQsR0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQm9DLElBQW5CO0FBRUFhLEdBQUMsQ0FBQ0MsY0FBRjtBQUNBLE1BQUlDLEtBQUssR0FBR25ELENBQUMsQ0FBQyxJQUFELENBQWI7QUFDQSxNQUFJK0IsSUFBSSxHQUFHLEVBQVg7QUFFQW9CLE9BQUssQ0FBQ2hELElBQU4sQ0FBVyxRQUFYLEVBQXFCa0QsSUFBckIsQ0FBMEIsVUFBVUMsS0FBVixFQUFpQkMsS0FBakIsRUFBd0I7QUFDOUMsUUFBSUMsSUFBSSxHQUFHeEQsQ0FBQyxDQUFDLElBQUQsQ0FBWjtBQUFBLFFBQ0k2QyxJQUFJLEdBQUdXLElBQUksQ0FBQ3RDLElBQUwsQ0FBVSxNQUFWLENBRFg7QUFBQSxRQUVJcUMsS0FBSyxHQUFHQyxJQUFJLENBQUN4QixHQUFMLEVBRlo7QUFJQUQsUUFBSSxDQUFDYyxJQUFELENBQUosR0FBYVUsS0FBYjs7QUFFQSxRQUFJVixJQUFJLElBQUksZ0JBQVosRUFBOEI7QUFFMUIrQixrQkFBWSxHQUFHckIsS0FBZjtBQUNIO0FBRUosR0FaRDtBQWFBdkQsR0FBQyxDQUFDMEQsSUFBRixDQUFPO0FBQ0hDLE9BQUcsRUFBRVIsS0FBSyxDQUFDakMsSUFBTixDQUFXLFFBQVgsQ0FERjtBQUVIMEMsUUFBSSxFQUFFVCxLQUFLLENBQUNqQyxJQUFOLENBQVcsUUFBWCxDQUZIO0FBR0hhLFFBQUksRUFBRTtBQUNGOEMsY0FBUSxFQUFFOUM7QUFEUixLQUhIO0FBTUgrQixTQUFLLEVBQUUsSUFOSjtBQU9IQyxZQUFRLEVBQUUsTUFQUDtBQU9lO0FBQ2xCQyxXQUFPLEVBQUUsaUJBQVV6QixRQUFWLEVBQW9CO0FBRXpCdkMsT0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQlEsSUFBbkI7QUFDQVIsT0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUI4RSxJQUFyQixDQUEwQnZDLFFBQVEsQ0FBQ3NDLFFBQW5DO0FBQ0E3RSxPQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2Qm9DLElBQTdCO0FBQ0FwQyxPQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QlEsSUFBekI7QUFFSCxLQWZFO0FBZ0JIMkQsU0FBSyxFQUFFLGVBQVVDLEdBQVYsRUFBZUMsVUFBZixFQUEyQkMsV0FBM0IsRUFBd0M7QUFDMUMsNEJBQUQ7QUFDSDtBQWxCRSxHQUFQO0FBcUJILENBekNELEUsQ0EwQ0E7O0FBQ0F0RSxDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQmdELEVBQTNCLENBQThCLE9BQTlCLEVBQXVDLFVBQVVDLENBQVYsRUFBYTtBQUNoREEsR0FBQyxDQUFDQyxjQUFGOztBQUVBLE1BQUkvQixVQUFVLElBQUksRUFBbEIsRUFBc0I7QUFDbEJuQixLQUFDLENBQUMsTUFBRCxDQUFELENBQVVjLEdBQVYsQ0FBYyxTQUFkLEVBQXlCLEtBQXpCO0FBQ0FkLEtBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJvQyxJQUFuQjtBQUNBcEMsS0FBQyxDQUFDMEQsSUFBRixDQUFPO0FBQ0hDLFNBQUcsRUFBRSwwQkFERjtBQUVIQyxVQUFJLEVBQUUsTUFGSDtBQUdIN0IsVUFBSSxFQUFFO0FBQ0Y2QyxvQkFBWSxFQUFFQSxZQURaO0FBRUZmLGtCQUFVLEVBQUUxQztBQUZWLE9BSEg7QUFPSDJDLFdBQUssRUFBRSxJQVBKO0FBUUhDLGNBQVEsRUFBRSxNQVJQO0FBUWU7QUFDbEJDLGFBQU8sRUFBRSxpQkFBVXpCLFFBQVYsRUFBb0I7QUFDekJ3QyxrQkFBVSxHQUFHeEMsUUFBUSxDQUFDc0MsUUFBdEI7QUFDQTdFLFNBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJRLElBQW5CO0FBQ0F5QixjQUFNLENBQUNDLFFBQVAsQ0FBZ0I4QyxJQUFoQixHQUF1QixzQkFBc0JELFVBQTdDO0FBQ0gsT0FiRTtBQWNIWixXQUFLLEVBQUUsZUFBVUMsR0FBVixFQUFlQyxVQUFmLEVBQTJCQyxXQUEzQixFQUF3QztBQUMxQyw4QkFBRDtBQUNIO0FBaEJFLEtBQVA7QUFtQkgsR0F0QkQsTUFzQk87QUFDSEssU0FBSyxDQUFDLHNDQUFELENBQUw7QUFDSDtBQUVKLENBN0JELEUsQ0ErQkE7O0FBQ0EzRSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQmdELEVBQXJCLENBQXdCLE9BQXhCLEVBQWlDLDZCQUFqQyxFQUFnRSxZQUFZO0FBQ3hFLE1BQUloRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsQ0FBUixFQUFXLElBQVgsRUFBaUIsQ0FBakIsS0FBdUIsR0FBM0IsRUFBZ0M7QUFDNUJpRixtQkFBZSxDQUFDVCxhQUFhLENBQUN4RSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsQ0FBUixFQUFXLElBQVgsQ0FBRCxDQUFkLENBQWY7QUFDSDtBQUNKLENBSkQsRSxDQU9BOztBQUNBQSxDQUFDLENBQUMscUNBQUQsQ0FBRCxDQUF5Q1EsSUFBekMsRyxDQUNBOztBQUNBUixDQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUFzQ1ksS0FBdEMsQ0FBNEMsWUFBWTtBQUNwRFosR0FBQyxDQUFDLHFDQUFELENBQUQsQ0FBeUNRLElBQXpDO0FBQ0FSLEdBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWMsR0FBVixDQUFjLFNBQWQsRUFBeUIsR0FBekI7QUFDSCxDQUhELEUsQ0FJQTtBQUNBOztBQUNBZCxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QmdELEVBQTlCLENBQWlDLE9BQWpDLEVBQTBDLDZCQUExQyxFQUF5RSxVQUFVQyxDQUFWLEVBQWE7QUFDbEZBLEdBQUMsQ0FBQ0MsY0FBRjtBQUNBbEQsR0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVYyxHQUFWLENBQWMsU0FBZCxFQUF5QixLQUF6QjtBQUNBZCxHQUFDLENBQUMsZUFBRCxDQUFELENBQW1Cb0MsSUFBbkI7QUFFQVosYUFBVyxHQUFHZ0QsYUFBYSxDQUFDeEUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLENBQVIsRUFBVyxXQUFYLEVBQXdCLENBQXhCLENBQUQsQ0FBM0I7QUFDQSxNQUFJbUQsS0FBSyxHQUFHbkQsQ0FBQyxDQUFDLHVCQUFELENBQWI7QUFDQSxNQUFJK0IsSUFBSSxHQUFHLEVBQVg7QUFFQS9CLEdBQUMsQ0FBQzBELElBQUYsQ0FBTztBQUNIQyxPQUFHLEVBQUUsNEJBQTRCbkMsV0FEOUI7QUFFSG9DLFFBQUksRUFBRSxNQUZIO0FBR0g3QixRQUFJLEVBQUUsRUFISDtBQUlIK0IsU0FBSyxFQUFFLElBSko7QUFLSEMsWUFBUSxFQUFFLE1BTFA7QUFLZTtBQUNsQkMsV0FBTyxFQUFFLGlCQUFVekIsUUFBVixFQUFvQjtBQUV6QnZDLE9BQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCZ0MsR0FBdEIsQ0FBMEJPLFFBQVEsQ0FBQyxNQUFELENBQVIsQ0FBaUIsSUFBakIsQ0FBMUI7QUFDQVIsVUFBSSxDQUFDL0IsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JrQixJQUF0QixDQUEyQixNQUEzQixDQUFELENBQUosR0FBMkNsQixDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQmdDLEdBQXRCLEVBQTNDO0FBRUFoQyxPQUFDLENBQUNxQyxJQUFGLENBQU8sc0JBQVAsRUFBK0JOLElBQS9CLEVBQXFDTyxJQUFyQyxDQUEwQyxVQUFVQyxRQUFWLEVBQW9CO0FBQzFEO0FBQ0F2QyxTQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQndDLEtBQTNCO0FBQ0FELGdCQUFRLENBQUNFLE9BQVQsQ0FBaUIsVUFBQUMsT0FBTyxFQUFJO0FBQ3hCO0FBQ0ExQyxXQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQjJDLE1BQTNCLENBQWtDLElBQUlDLE1BQUosQ0FBV0YsT0FBTyxDQUFDRyxJQUFuQixFQUF5QkgsT0FBTyxDQUFDSSxFQUFqQyxDQUFsQztBQUNILFNBSEQ7QUFLSCxPQVJELEVBUUdvQyxJQVJILENBUVEsWUFBWTtBQUVoQmxGLFNBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWMsR0FBVixDQUFjLFNBQWQsRUFBeUIsS0FBekI7QUFDQWQsU0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQm9DLElBQW5CLEdBSGdCLENBS2hCOztBQUNBZSxhQUFLLENBQUNoRCxJQUFOLENBQVcsUUFBWCxFQUFxQmtELElBQXJCLENBQTBCLFVBQVVDLEtBQVYsRUFBaUJDLEtBQWpCLEVBQXdCO0FBQzlDLGNBQUlDLElBQUksR0FBR3hELENBQUMsQ0FBQyxJQUFELENBQVo7O0FBQ0Esa0JBQVF1RCxLQUFLLENBQUNULEVBQWQ7QUFDSSxpQkFBSyxpQkFBTDtBQUNJOztBQUNKLGlCQUFLLHNCQUFMO0FBQ0ksa0JBQUlQLFFBQVEsQ0FBQyxVQUFELENBQVIsSUFBd0IsSUFBNUIsRUFBa0M7QUFDOUJ2QyxpQkFBQyxDQUFDLE1BQU11RCxLQUFLLENBQUNULEVBQWIsQ0FBRCxDQUFrQmQsR0FBbEIsQ0FBc0JPLFFBQVEsQ0FBQyxVQUFELENBQVIsQ0FBcUIsSUFBckIsQ0FBdEI7QUFDSDs7QUFDRDs7QUFDSixpQkFBSyxzQkFBTDtBQUNJdkMsZUFBQyxDQUFDLE1BQU11RCxLQUFLLENBQUNULEVBQWIsQ0FBRCxDQUFrQmQsR0FBbEIsQ0FBc0JPLFFBQVEsQ0FBQyxVQUFELENBQTlCO0FBQ0E7O0FBQ0osaUJBQUssdUJBQUw7QUFDSXZDLGVBQUMsQ0FBQyxNQUFNdUQsS0FBSyxDQUFDVCxFQUFiLENBQUQsQ0FBa0JkLEdBQWxCLENBQXNCTyxRQUFRLENBQUMsV0FBRCxDQUE5QjtBQUNBOztBQUNKLGlCQUFLLHNCQUFMO0FBQ0l2QyxlQUFDLENBQUMsTUFBTXVELEtBQUssQ0FBQ1QsRUFBYixDQUFELENBQWtCZCxHQUFsQixDQUFzQk8sUUFBUSxDQUFDLFVBQUQsQ0FBOUI7QUFDQTtBQWhCUjtBQWtCSCxTQXBCRDtBQXFCQXZDLFNBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJRLElBQW5CO0FBQ0FSLFNBQUMsQ0FBQyxxQ0FBRCxDQUFELENBQXlDb0MsSUFBekM7QUFDSCxPQXJDRDtBQXNDSCxLQWpERTtBQWtESCtCLFNBQUssRUFBRSxlQUFVQyxHQUFWLEVBQWVDLFVBQWYsRUFBMkJDLFdBQTNCLEVBQXdDO0FBQzFDLDRCQUFEO0FBQ0g7QUFwREUsR0FBUDtBQXNESCxDQS9ERCxFLENBZ0VBOztBQUNBdEUsQ0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJnRCxFQUEzQixDQUE4QixRQUE5QixFQUF3QyxVQUFVQyxDQUFWLEVBQWE7QUFDakRBLEdBQUMsQ0FBQ0MsY0FBRjtBQUNBbEQsR0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVYyxHQUFWLENBQWMsU0FBZCxFQUF5QixLQUF6QjtBQUNBZCxHQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQmMsR0FBM0IsQ0FBK0IsU0FBL0IsRUFBMEMsS0FBMUM7QUFDQWQsR0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQmMsR0FBbkIsQ0FBdUIsU0FBdkIsRUFBa0MsT0FBbEM7QUFDQWQsR0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQm9DLElBQW5CO0FBQ0EsTUFBSWUsS0FBSyxHQUFHbkQsQ0FBQyxDQUFDLElBQUQsQ0FBYjtBQUNBLE1BQUkrQixJQUFJLEdBQUcsRUFBWDtBQUFBLE1BQ0lxQixNQURKLENBUGlELENBU2pEOztBQUNBRCxPQUFLLENBQUNoRCxJQUFOLENBQVcsUUFBWCxFQUFxQmtELElBQXJCLENBQTBCLFVBQVVDLEtBQVYsRUFBaUJDLEtBQWpCLEVBQXdCO0FBQzlDLFFBQUlDLElBQUksR0FBR3hELENBQUMsQ0FBQyxJQUFELENBQVo7QUFBQSxRQUNJNkMsSUFBSSxHQUFHVyxJQUFJLENBQUN0QyxJQUFMLENBQVUsTUFBVixDQURYOztBQUdBLFFBQUkyQixJQUFJLElBQUssb0JBQVQsSUFBa0NBLElBQUksSUFBSyx1QkFBL0MsRUFBeUU7QUFDckVVLFdBQUssR0FBR0MsSUFBSSxDQUFDeEIsR0FBTCxFQUFSO0FBQ0FELFVBQUksQ0FBQ2MsSUFBRCxDQUFKLEdBQWFVLEtBQWI7QUFDSDtBQUNKLEdBUkQ7QUFTQXZELEdBQUMsQ0FBQzBELElBQUYsQ0FBTztBQUNIQyxPQUFHLEVBQUUsNEJBQTRCbkMsV0FEOUI7QUFFSG9DLFFBQUksRUFBRSxNQUZIO0FBR0g3QixRQUFJLEVBQUU7QUFDRixvQkFBY0EsSUFEWjtBQUVGLG9DQUE4QjtBQUY1QixLQUhIO0FBT0grQixTQUFLLEVBQUUsSUFQSjtBQVFIQyxZQUFRLEVBQUUsTUFSUDtBQVFlO0FBQ2xCQyxXQUFPLEVBQUUsaUJBQVV6QixRQUFWLEVBQW9CO0FBQ3pCTCxjQUFRLENBQUNpRCxNQUFUO0FBQ0FuRixPQUFDLENBQUMsZUFBRCxDQUFELENBQW1CUSxJQUFuQjtBQUNBUixPQUFDLENBQUMscUNBQUQsQ0FBRCxDQUF5Q29DLElBQXpDO0FBQ0gsS0FiRTtBQWNIK0IsU0FBSyxFQUFFLGVBQVVDLEdBQVYsRUFBZUMsVUFBZixFQUEyQkMsV0FBM0IsRUFBd0M7QUFDMUMsNEJBQUQ7QUFDSDtBQWhCRSxHQUFQO0FBbUJILENBdENELEUsQ0F3Q0E7O0FBQ0F0RSxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CZ0QsRUFBbkIsQ0FBc0IsUUFBdEIsRUFBZ0MsVUFBVUMsQ0FBVixFQUFhO0FBQ3pDQSxHQUFDLENBQUNDLGNBQUY7QUFDQWxELEdBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWMsR0FBVixDQUFjLFNBQWQsRUFBeUIsS0FBekI7QUFDQWQsR0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQm9DLElBQW5CO0FBRUEsTUFBSWUsS0FBSyxHQUFHbkQsQ0FBQyxDQUFDLElBQUQsQ0FBYjtBQUNBLE1BQUkrQixJQUFJLEdBQUcsRUFBWDtBQUVBb0IsT0FBSyxDQUFDaEQsSUFBTixDQUFXLFFBQVgsRUFBcUJrRCxJQUFyQixDQUEwQixVQUFVQyxLQUFWLEVBQWlCQyxLQUFqQixFQUF3QjtBQUM5QyxRQUFJQyxJQUFJLEdBQUd4RCxDQUFDLENBQUMsSUFBRCxDQUFaO0FBQUEsUUFDSTZDLElBQUksR0FBR1csSUFBSSxDQUFDdEMsSUFBTCxDQUFVLE1BQVYsQ0FEWDtBQUFBLFFBRUlxQyxLQUFLLEdBQUdDLElBQUksQ0FBQ3hCLEdBQUwsRUFGWjtBQUlBRCxRQUFJLENBQUNjLElBQUQsQ0FBSixHQUFhVSxLQUFiO0FBQ0gsR0FORDtBQU9BdkQsR0FBQyxDQUFDMEQsSUFBRixDQUFPO0FBQ0hDLE9BQUcsRUFBRVIsS0FBSyxDQUFDakMsSUFBTixDQUFXLFFBQVgsQ0FERjtBQUVIMEMsUUFBSSxFQUFFVCxLQUFLLENBQUNqQyxJQUFOLENBQVcsUUFBWCxDQUZIO0FBR0hhLFFBQUksRUFBRTtBQUNGZ0QsZ0JBQVUsRUFBRVAsYUFBYSxDQUFDdkMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFqQixDQUR2QjtBQUVGaUQsYUFBTyxFQUFFckQ7QUFGUCxLQUhIO0FBT0grQixTQUFLLEVBQUUsSUFQSjtBQVFIQyxZQUFRLEVBQUUsTUFSUDtBQVFlO0FBQ2xCQyxXQUFPLEVBQUUsaUJBQVV6QixRQUFWLEVBQW9CO0FBRXpCO0FBQ0F2QyxPQUFDLENBQUMsTUFBRCxDQUFELENBQVVjLEdBQVYsQ0FBYyxTQUFkLEVBQXlCLEdBQXpCO0FBQ0FkLE9BQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJRLElBQW5CO0FBQ0FSLE9BQUMsQ0FBQywyQkFBRCxDQUFELENBQStCcUYsT0FBL0IsQ0FBdUMsT0FBdkM7QUFDQW5ELGNBQVEsQ0FBQ2lELE1BQVQ7QUFDSCxLQWhCRTtBQWlCSGhCLFNBQUssRUFBRSxlQUFVQyxHQUFWLEVBQWVDLFVBQWYsRUFBMkJDLFdBQTNCLEVBQXdDO0FBQzFDLDRCQUFEO0FBQ0g7QUFuQkUsR0FBUDtBQXFCSCxDQXBDRDs7QUF5Q0EsU0FBU0ksa0JBQVQsQ0FBNEJoQyxPQUE1QixFQUFxQ1ksS0FBckMsRUFBNENnQyxLQUE1QyxFQUFtRDtBQUUvQztBQUNBLE1BQUl0RixDQUFDLENBQUMsNkJBQTZCc0QsS0FBOUIsQ0FBRCxDQUFzQ2lDLE1BQTFDLEVBQWtEO0FBQzlDdkYsS0FBQyxDQUFDLDZCQUE2QnNELEtBQTlCLENBQUQsQ0FBc0NrQyxXQUF0QyxDQUFrRCx5REFBeURsQyxLQUF6RCxHQUFpRSxVQUFuSDtBQUNILEdBRkQsTUFFTztBQUNIdEQsS0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIyQyxNQUFyQixDQUE0Qix5REFBeURXLEtBQXpELEdBQWlFLFVBQTdGO0FBQ0gsR0FQOEMsQ0FTL0M7OztBQUNBLE1BQUlaLE9BQU8sQ0FBQyxrQkFBRCxDQUFQLElBQStCLEdBQW5DLEVBQXdDO0FBQ3BDO0FBQ0EsWUFBUUEsT0FBTyxDQUFDLGtCQUFELENBQWY7QUFDSSxXQUFLLEdBQUw7QUFDSTFDLFNBQUMsQ0FBQyw2QkFBNkJzRCxLQUE3QixHQUFxQyxFQUF0QyxDQUFELENBQTJDWCxNQUEzQyxDQUFrRDhDLFNBQVMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUEzRDtBQUNBekYsU0FBQyxDQUFDLDZCQUE2QnNELEtBQTdCLEdBQXFDLEVBQXRDLENBQUQsQ0FBMkN2QyxRQUEzQyxDQUFvRCx5QkFBcEQ7QUFDQU0sZ0JBQVEsR0FBR3JCLENBQUMsQ0FBQyw2QkFBNkJzRCxLQUE3QixHQUFxQyxFQUF0QyxDQUFaO0FBQ0E7O0FBQ0osV0FBSyxHQUFMO0FBQ0l0RCxTQUFDLENBQUMsNkJBQTZCc0QsS0FBN0IsR0FBcUMsRUFBdEMsQ0FBRCxDQUEyQ1gsTUFBM0MsQ0FBa0Q4QyxTQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBM0Q7QUFDQTs7QUFDSixXQUFLLEdBQUw7QUFDSXpGLFNBQUMsQ0FBQyw2QkFBNkJzRCxLQUE3QixHQUFxQyxFQUF0QyxDQUFELENBQTJDWCxNQUEzQyxDQUFrRDhDLFNBQVMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUEzRDtBQUNBO0FBWFI7O0FBYUEsWUFBUS9DLE9BQU8sQ0FBQyx1QkFBRCxDQUFmO0FBQ0ksV0FBSyxHQUFMO0FBQ0kxQyxTQUFDLENBQUMsNkJBQTZCc0QsS0FBN0IsR0FBcUMsRUFBdEMsQ0FBRCxDQUEyQ1gsTUFBM0MsQ0FBa0QrQyxZQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBOUQ7QUFDQTs7QUFDSixXQUFLLEdBQUw7QUFDSTFGLFNBQUMsQ0FBQyw2QkFBNkJzRCxLQUE3QixHQUFxQyxFQUF0QyxDQUFELENBQTJDWCxNQUEzQyxDQUFrRCtDLFlBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixDQUE5RDtBQUNBO0FBTlI7O0FBUUExRixLQUFDLENBQUMsNkJBQTZCc0QsS0FBN0IsR0FBcUMsRUFBdEMsQ0FBRCxDQUEyQ1gsTUFBM0MsQ0FBa0Qsa0VBQzlDVyxLQUQ4QyxHQUN0QyxVQURaO0FBRUF0RCxLQUFDLENBQUMsMEJBQTBCc0QsS0FBMUIsR0FBa0MsRUFBbkMsQ0FBRCxDQUF3Q1gsTUFBeEMsQ0FBK0MsUUFBUUQsT0FBTyxDQUFDLHVCQUFELENBQWYsR0FBMkMsTUFBMUY7QUFDQTFDLEtBQUMsQ0FBQywwQkFBMEJzRCxLQUExQixHQUFrQyxFQUFuQyxDQUFELENBQXdDWCxNQUF4QyxDQUErQyxRQUFRRCxPQUFPLENBQUMsd0JBQUQsQ0FBZixHQUE0QyxNQUEzRjtBQUNBMUMsS0FBQyxDQUFDLDBCQUEwQnNELEtBQTFCLEdBQWtDLEVBQW5DLENBQUQsQ0FBd0NYLE1BQXhDLENBQStDLFFBQVFELE9BQU8sQ0FBQyx1QkFBRCxDQUFmLEdBQTJDLE1BQTFGO0FBQ0ExQyxLQUFDLENBQUMsMEJBQTBCc0QsS0FBMUIsR0FBa0MsRUFBbkMsQ0FBRCxDQUF3Q1gsTUFBeEMsQ0FBK0NnRCxlQUFlLENBQUNyQyxLQUFELENBQTlEO0FBRUgsR0E5QkQsTUE4Qk87QUFDSCxTQUFLbEMsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHRCxVQUFVLENBQUNvRSxNQUEzQixFQUFtQ25FLENBQUMsRUFBcEMsRUFBd0M7QUFFcEMsVUFBSUQsVUFBVSxDQUFDQyxDQUFELENBQVYsQ0FBYyxrQkFBZCxLQUFxQyxHQUF6QyxFQUE4QztBQUMxQ0csbUJBQVcsR0FBRyxJQUFkO0FBQ0g7QUFDSjs7QUFBQTs7QUFDRCxRQUFJQSxXQUFKLEVBQWlCO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBUW1CLE9BQU8sQ0FBQyx1QkFBRCxDQUFmO0FBQ0ksYUFBSyxHQUFMO0FBQ0kxQyxXQUFDLENBQUNxQixRQUFELENBQUQsQ0FBWXNCLE1BQVosQ0FBbUIrQyxZQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBL0I7QUFDQTs7QUFDSixhQUFLLEdBQUw7QUFDSTFGLFdBQUMsQ0FBQ3FCLFFBQUQsQ0FBRCxDQUFZc0IsTUFBWixDQUFtQitDLFlBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixDQUEvQjtBQUNBOztBQUNKLGFBQUssR0FBTDtBQUNJMUYsV0FBQyxDQUFDcUIsUUFBRCxDQUFELENBQVlzQixNQUFaLENBQW1CK0MsWUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQS9CO0FBQ0E7QUFUUjs7QUFZQTFGLE9BQUMsQ0FBQ3FCLFFBQUQsQ0FBRCxDQUFZc0IsTUFBWixDQUFtQiw4RkFDZlcsS0FEZSxHQUNQLFVBRFo7QUFFQXRELE9BQUMsQ0FBQywwQkFBMEJzRCxLQUExQixHQUFrQyxFQUFuQyxDQUFELENBQXdDWCxNQUF4QyxDQUErQyxRQUFRRCxPQUFPLENBQUMsdUJBQUQsQ0FBZixHQUEyQyxNQUExRjtBQUNBMUMsT0FBQyxDQUFDLDBCQUEwQnNELEtBQTFCLEdBQWtDLEVBQW5DLENBQUQsQ0FBd0NYLE1BQXhDLENBQStDLFFBQVFELE9BQU8sQ0FBQyx3QkFBRCxDQUFmLEdBQTRDLE1BQTNGO0FBQ0ExQyxPQUFDLENBQUMsMEJBQTBCc0QsS0FBMUIsR0FBa0MsRUFBbkMsQ0FBRCxDQUF3Q1gsTUFBeEMsQ0FBK0MsUUFBUUQsT0FBTyxDQUFDLHVCQUFELENBQWYsR0FBMkMsTUFBMUY7QUFDQTFDLE9BQUMsQ0FBQywwQkFBMEJzRCxLQUExQixHQUFrQyxFQUFuQyxDQUFELENBQXdDWCxNQUF4QyxDQUErQ2dELGVBQWUsQ0FBQ3JDLEtBQUQsQ0FBOUQ7QUFDQXRELE9BQUMsQ0FBQyw2QkFBNkJzRCxLQUE5QixDQUFELENBQXNDM0MsTUFBdEM7QUFDSCxLQXZCRCxNQXVCTztBQUNIZ0UsV0FBSyxDQUFDLG9DQUFELENBQUw7QUFDQTNFLE9BQUMsQ0FBQyw2QkFBNkJzRCxLQUE5QixDQUFELENBQXNDM0MsTUFBdEM7QUFDQVEsZ0JBQVUsQ0FBQ3lFLE1BQVgsQ0FBa0J0QyxLQUFsQixFQUF5QixDQUF6QjtBQUNBdEQsT0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQlEsSUFBbkI7QUFDQVIsT0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJRLElBQXZCO0FBQ0FSLE9BQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCUSxJQUFyQjtBQUNBUixPQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQ29DLElBQXBDO0FBQ0g7QUFDSjtBQUNKLEMsQ0FFRDs7O0FBQ0EsU0FBUzZDLGVBQVQsQ0FBeUJZLFFBQXpCLEVBQW1DO0FBQy9CMUUsWUFBVSxDQUFDeUUsTUFBWCxDQUFrQkMsUUFBbEIsRUFBNEIsQ0FBNUI7QUFDQTdGLEdBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JXLE1BQWxCO0FBQ0FRLFlBQVUsQ0FBQ3NCLE9BQVgsQ0FBbUJpQyxrQkFBbkI7QUFDSCxDLENBQ0Q7OztBQUNBLFNBQVNGLGFBQVQsQ0FBdUJzQixHQUF2QixFQUE0QjtBQUN4QixTQUFPQyxNQUFNLENBQUNELEdBQUcsQ0FBQ0UsT0FBSixDQUFZLFFBQVosRUFBc0IsRUFBdEIsQ0FBRCxDQUFiO0FBQ0gsQyxDQUNEOzs7QUFDQSxTQUFTUCxTQUFULENBQW1CUSxJQUFuQixFQUF5QjNDLEtBQXpCLEVBQWdDO0FBQzVCLFNBQU8sT0FBTzJDLElBQVAsR0FBYyxvREFBZCxHQUFxRXBFLGlCQUFpQixDQUFDeUIsS0FBRCxDQUF0RixHQUFnRyxLQUFoRyxHQUF3RzJDLElBQXhHLEdBQStHLEdBQXRIO0FBQ0g7O0FBQUEsQyxDQUNEOztBQUNBLFNBQVNQLFlBQVQsQ0FBc0JPLElBQXRCLEVBQTRCM0MsS0FBNUIsRUFBbUM7QUFDL0IsU0FBTyxPQUFPMkMsSUFBUCxHQUFjLHVEQUFkLEdBQXdFbkUsb0JBQW9CLENBQUN3QixLQUFELENBQTVGLEdBQXNHLEtBQXRHLEdBQThHMkMsSUFBOUcsR0FBcUgsR0FBNUg7QUFDSDs7QUFBQSxDLENBQ0Q7O0FBQ0EsU0FBU0MsZ0JBQVQsQ0FBMEJELElBQTFCLEVBQWdDM0MsS0FBaEMsRUFBdUM7QUFDbkMsU0FBTyxPQUFPMkMsSUFBUCxHQUFjLHlEQUFkLEdBQTBFbkUsb0JBQW9CLENBQUN3QixLQUFELENBQTlGLEdBQXdHLEtBQXhHLEdBQWdIMkMsSUFBaEgsR0FBdUgsR0FBOUg7QUFDSDs7QUFBQSxDLENBQ0Q7O0FBQ0EsU0FBU04sZUFBVCxDQUF5QnJDLEtBQXpCLEVBQWdDO0FBQzVCLFNBQU8scURBQXFEQSxLQUFyRCxHQUE2RCxtREFBN0QsR0FBbUhBLEtBQW5ILEdBQTJILHdEQUFsSTtBQUNIOztBQUFBO0FBRUQ7O0FBQ0F0RCxDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QlksS0FBdkIsQ0FBNkIsWUFBWTtBQUNyQ1osR0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJRLElBQXZCO0FBQ0FSLEdBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCUSxJQUFyQjtBQUNBUixHQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQ29DLElBQXBDO0FBQ0FwQyxHQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5Qm9DLElBQXpCO0FBQ0FwQyxHQUFDLENBQUMsZUFBRCxDQUFELENBQW1CUSxJQUFuQjtBQUNBUixHQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQndDLEtBQTNCO0FBQ0F4QyxHQUFDLENBQUMsUUFBRCxFQUFXLGtCQUFYLENBQUQsQ0FBZ0NtRyxHQUFoQyxDQUFvQyxtQ0FBcEMsRUFBeUVuRSxHQUF6RSxDQUE2RSxFQUE3RTtBQUNBSixVQUFRLEdBQUcsV0FBWDtBQUNILENBVEQsRSxDQVVBOztBQUNBNUIsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJZLEtBQXpCLENBQStCLFVBQVVxQyxDQUFWLEVBQWE7QUFDeENBLEdBQUMsQ0FBQ0MsY0FBRjtBQUNBbEQsR0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0NRLElBQXBDO0FBQ0FSLEdBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCb0MsSUFBckI7QUFDQXBDLEdBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCb0MsSUFBdkI7QUFDQXBDLEdBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCUSxJQUF6QjtBQUNBUixHQUFDLENBQUMsZUFBRCxDQUFELENBQW1Cb0MsSUFBbkI7QUFDSCxDQVBEO0FBUUFwQyxDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQlksS0FBdEIsQ0FBNEIsWUFBWTtBQUNwQ1osR0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0NRLElBQXBDO0FBQ0FSLEdBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCb0MsSUFBckI7QUFDQXBDLEdBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCb0MsSUFBdkI7QUFDQXBDLEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJvQyxJQUFuQjtBQUNILENBTEQsRSxDQU1BOztBQUNBcEMsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJZLEtBQXZCLENBQTZCLFlBQVk7QUFDckNaLEdBQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DUSxJQUFwQztBQUNBUixHQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQm9DLElBQXJCO0FBQ0FwQyxHQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1Qm9DLElBQXZCO0FBQ0FwQyxHQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QlEsSUFBekI7QUFDSCxDQUxELEU7Ozs7Ozs7Ozs7OztBQ3hoQkE7QUFDQVIsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJZLEtBQXZCLENBQTZCLFlBQVk7QUFDckNaLEdBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCUSxJQUF6QjtBQUNBUixHQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2Qm9DLElBQTdCO0FBQ0gsQ0FIRCxFOzs7Ozs7Ozs7Ozs7QUNEQXBDLDBDQUFDLENBQUNTLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDMUJWLEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJnRCxFQUFuQixDQUFzQixRQUF0QixFQUFnQyxVQUFVQyxDQUFWLEVBQWE7QUFDekNBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNILEdBRkQ7QUFHQWxELEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJvRyxLQUFuQixDQUF5QixVQUFVbkQsQ0FBVixFQUFhO0FBQ2xDQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFJbUQsTUFBTSxHQUFHckcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0MsR0FBUixFQUFiO0FBQ0EsUUFBSUQsSUFBSSxHQUFHLGFBQWFzRSxNQUF4QjtBQUNBLFFBQUlDLFFBQUo7QUFDQXJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZbUMsTUFBWjs7QUFDQSxRQUFJQSxNQUFNLENBQUNkLE1BQVAsR0FBZ0IsQ0FBcEIsRUFBdUI7QUFFbkJ2RixPQUFDLENBQUMwRCxJQUFGLENBQU87QUFDSEMsV0FBRyxFQUFFLHNCQURGO0FBRUhDLFlBQUksRUFBRSxNQUZIO0FBR0g3QixZQUFJLEVBQUVBLElBSEg7QUFJSDtBQUNBZ0MsZ0JBQVEsRUFBRSxNQUxQO0FBS2U7QUFDbEJDLGVBQU8sRUFBRSxpQkFBVXpCLFFBQVYsRUFBb0I7QUFDekIsY0FBSWdFLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdsRSxRQUFRLENBQUNtRSxhQUFwQixDQUFkOztBQUVBLGNBQUlILE9BQU8sQ0FBQ2hCLE1BQVIsSUFBa0IsQ0FBdEIsRUFBeUI7QUFDckJ2RixhQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQlcsTUFBckI7QUFDQVgsYUFBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQjJDLE1BQW5CLENBQTBCLGlEQUExQjtBQUVILFdBSkQsTUFJTztBQUNINEQsbUJBQU8sQ0FBQzlELE9BQVIsQ0FBZ0IsVUFBQUMsT0FBTyxFQUFJO0FBQ3ZCMUMsZUFBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJXLE1BQXJCO0FBQ0FYLGVBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUIyQyxNQUFuQixDQUEwQiwrQkFBK0JELE9BQU8sQ0FBQ0csSUFBdkMsR0FBOEMsTUFBeEU7QUFFSCxhQUpEO0FBS0g7QUFDSixTQXBCRTtBQXFCSHNCLGFBQUssRUFBRSxlQUFVQyxHQUFWLEVBQWVDLFVBQWYsRUFBMkJDLFdBQTNCLEVBQXdDO0FBQzFDLGdDQUFEO0FBQ0g7QUF2QkUsT0FBUDtBQXlCSCxLQTNCRCxNQTJCTztBQUNIdEUsT0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJXLE1BQXJCO0FBRUg7QUFDSixHQXJDRDtBQXNDQVgsR0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJZLEtBQXZCLENBQTZCLFlBQVk7QUFDckMrRixpQkFBYSxHQUFHM0csQ0FBQyxDQUFDLHFCQUFELENBQWpCO0FBRUFBLEtBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCYyxHQUE3QixDQUFpQyxTQUFqQyxFQUE0QyxLQUE1QztBQUNBZCxLQUFDLENBQUMsZUFBRCxDQUFELENBQW1Cb0MsSUFBbkI7QUFFQXBDLEtBQUMsQ0FBQ3FDLElBQUYsQ0FBTyxxQkFBUCxFQUE4QkMsSUFBOUIsQ0FBbUMsVUFBVUMsUUFBVixFQUFvQjtBQUNuRDBCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZM0IsUUFBWjtBQUNBQSxjQUFRLENBQUNFLE9BQVQsQ0FBaUIsVUFBQUMsT0FBTyxFQUFJO0FBQ3hCO0FBQ0FpRSxxQkFBYSxDQUFDaEUsTUFBZCxDQUFxQixJQUFJQyxNQUFKLENBQVdGLE9BQU8sQ0FBQ0csSUFBbkIsRUFBeUJILE9BQU8sQ0FBQ0ksRUFBakMsQ0FBckI7QUFDSCxPQUhEO0FBSUgsS0FORCxFQU1Hb0MsSUFOSCxDQU1RLFlBQVk7QUFDaEI7QUFDQWxGLE9BQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJRLElBQW5CO0FBQ0FSLE9BQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCYyxHQUE3QixDQUFpQyxTQUFqQyxFQUE0QyxNQUE1QztBQUNILEtBVkQ7QUFXSCxHQWpCRDtBQWtCQWQsR0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JnRCxFQUF4QixDQUEyQixPQUEzQixFQUFvQyxVQUFVQyxDQUFWLEVBQWE7QUFDN0NBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQUkwRCxTQUFTLEdBQUdwQyxhQUFhLENBQUN2QyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWpCLENBQTdCO0FBQ0EsUUFBSTBFLFNBQVMsR0FBRyxFQUFoQjtBQUNBQSxhQUFTLENBQUNwRCxJQUFWO0FBQ0EsUUFBSU4sS0FBSyxHQUFHbkQsQ0FBQyxDQUFDLHlCQUFELENBQWI7QUFDQSxRQUFJK0IsSUFBSSxHQUFHLEVBQVg7QUFFQW9CLFNBQUssQ0FBQ2hELElBQU4sQ0FBVyxRQUFYLEVBQXFCa0QsSUFBckIsQ0FBMEIsVUFBVUMsS0FBVixFQUFpQkMsS0FBakIsRUFBd0I7QUFDOUMsVUFBSUMsSUFBSSxHQUFHeEQsQ0FBQyxDQUFDLElBQUQsQ0FBWjtBQUFBLFVBQ0k2QyxJQUFJLEdBQUdXLElBQUksQ0FBQ3RDLElBQUwsQ0FBVSxNQUFWLENBRFg7QUFBQSxVQUVJcUMsS0FBSyxHQUFHQyxJQUFJLENBQUN4QixHQUFMLEVBRlo7QUFJQUQsVUFBSSxDQUFDYyxJQUFELENBQUosR0FBYVUsS0FBYjtBQUNBVSxhQUFPLENBQUNDLEdBQVIsQ0FBWW5DLElBQVo7QUFDSCxLQVBEO0FBUUEvQixLQUFDLENBQUMwRCxJQUFGLENBQU87QUFDSEMsU0FBRyxFQUFFLDZCQUE2QmlELFNBRC9CO0FBRUhoRCxVQUFJLEVBQUUsTUFGSDtBQUdIN0IsVUFBSSxFQUFFQSxJQUhIO0FBSUg7QUFDQWdDLGNBQVEsRUFBRSxNQUxQO0FBS2U7QUFDbEJDLGFBQU8sRUFBRSxpQkFBVXpCLFFBQVYsRUFBb0I7QUFDekIwQixlQUFPLENBQUNDLEdBQVIsQ0FBWWxFLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCZ0MsR0FBekIsRUFBWjtBQUNILE9BUkU7QUFTSG1DLFdBQUssRUFBRSxlQUFVQyxHQUFWLEVBQWVDLFVBQWYsRUFBMkJDLFdBQTNCLEVBQXdDO0FBQzFDLDhCQUFEO0FBQ0g7QUFYRSxLQUFQO0FBYUgsR0E3QkQ7QUErQkgsQ0EzRkQsRSxDQTZGQTs7QUFDQSxTQUFTRSxhQUFULENBQXVCc0IsR0FBdkIsRUFBNEI7QUFDeEIsU0FBT0MsTUFBTSxDQUFDRCxHQUFHLENBQUNFLE9BQUosQ0FBWSxRQUFaLEVBQXNCLEVBQXRCLENBQUQsQ0FBYjtBQUNILEM7Ozs7Ozs7Ozs7OztBQ2hHRCw2Q0FBTWMsTUFBTSxHQUFHOUcsQ0FBQyxDQUFDLGVBQUQsQ0FBaEI7QUFDQSxJQUFNK0csTUFBTSxHQUFHL0csQ0FBQyxDQUFDLGVBQUQsQ0FBaEI7QUFDQSxJQUFNZ0gsTUFBTSxHQUFHaEgsQ0FBQyxDQUFDLGVBQUQsQ0FBaEI7QUFDQSxJQUFNaUgsT0FBTyxHQUFHakgsQ0FBQyxDQUFDLGtCQUFELENBQWpCO0FBQ0EsSUFBTWtILFdBQVcsR0FBR2xILENBQUMsQ0FBQyxrQkFBRCxDQUFyQjtBQUNBLElBQUkrQixJQUFJLEdBQUcsRUFBWCxDLENBQ0E7O0FBQ0EsSUFBSW9GLGdCQUFnQixHQUFHLFlBQVk7QUFDL0IsTUFBSUMsR0FBRyxHQUFHM0csUUFBUSxDQUFDa0IsYUFBVCxDQUF1QixLQUF2QixDQUFWO0FBQ0EsU0FBTyxDQUFFLGVBQWV5RixHQUFoQixJQUF5QixpQkFBaUJBLEdBQWpCLElBQXdCLFlBQVlBLEdBQTlELEtBQXVFLGNBQWNuRixNQUFyRixJQUErRixnQkFBZ0JBLE1BQXRIO0FBQ0gsQ0FIc0IsRUFBdkI7O0FBSUEsSUFBSW9GLEtBQUssR0FBR3JILENBQUMsQ0FBQyxXQUFELENBQWI7O0FBQ0EsSUFBSXNILE1BQU0sR0FBR0QsS0FBSyxDQUFDbEgsSUFBTixDQUFXLG9CQUFYLENBQWI7QUFBQSxJQUNJb0gsTUFBTSxHQUFHRixLQUFLLENBQUNsSCxJQUFOLENBQVcsT0FBWCxDQURiO0FBQUEsSUFFSXFILFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQVVDLEtBQVYsRUFBaUI7QUFDekJGLFFBQU0sQ0FBQ3pDLElBQVAsQ0FBWTJDLEtBQUssQ0FBQ2xDLE1BQU4sR0FBZSxDQUFmLEdBQW1CLENBQUMrQixNQUFNLENBQUNwRyxJQUFQLENBQVksdUJBQVosS0FBd0MsRUFBekMsRUFBNkM4RSxPQUE3QyxDQUFxRCxTQUFyRCxFQUFnRXlCLEtBQUssQ0FBQ2xDLE1BQXRFLENBQW5CLEdBQW1Ha0MsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTNUUsSUFBeEg7QUFDSCxDQUpMOztBQUtBb0UsT0FBTyxDQUFDekcsSUFBUjtBQUNBMEcsV0FBVyxDQUFDMUcsSUFBWjtBQUNBNkcsS0FBSyxDQUFDN0csSUFBTjtBQUVBUixDQUFDLENBQUNTLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDMUIsTUFBSXVCLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBaEIsSUFBNEIsa0JBQWhDLEVBQW9EO0FBQ2hEa0YsU0FBSyxDQUFDakYsSUFBTjtBQUNBc0YsVUFBTSxHQUFHLElBQUlDLEtBQUosQ0FBVSxnQkFBVixDQUFUO0FBQ0g7O0FBQ0QsTUFBSTFGLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBaEIsSUFBNEIscUJBQWhDLEVBQXVEO0FBQ25EO0FBQ0F1RixVQUFNLEdBQUcsSUFBSUMsS0FBSixDQUFVLGdCQUFWLENBQVQ7QUFFQTNILEtBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWMsR0FBVixDQUFjLFNBQWQsRUFBeUIsS0FBekI7QUFDQWQsS0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQm9DLElBQW5CO0FBQ0FwQyxLQUFDLENBQUNxQyxJQUFGLENBQU8sb0JBQVAsRUFBK0JDLElBQS9CLENBQW9DLFVBQVVDLFFBQVYsRUFBb0I7QUFDcERBLGNBQVEsQ0FBQ0UsT0FBVCxDQUFpQixVQUFBQyxPQUFPLEVBQUk7QUFDeEI7QUFDQW9FLGNBQU0sQ0FBQ25FLE1BQVAsQ0FBYyxJQUFJQyxNQUFKLENBQVdGLE9BQU8sQ0FBQ0csSUFBbkIsRUFBeUJILE9BQU8sQ0FBQ0ksRUFBakMsQ0FBZDtBQUNILE9BSEQ7QUFJQTlDLE9BQUMsQ0FBQ3FDLElBQUYsQ0FBTywyQkFBUCxFQUFvQztBQUNoQyxjQUFNeUUsTUFBTSxDQUFDOUUsR0FBUDtBQUQwQixPQUFwQyxFQUVHTSxJQUZILENBRVEsVUFBVUMsUUFBVixFQUFvQjtBQUN4QkEsZ0JBQVEsQ0FBQ0UsT0FBVCxDQUFpQixVQUFBQyxPQUFPLEVBQUk7QUFDeEI7QUFDQXFFLGdCQUFNLENBQUNwRSxNQUFQLENBQWMsSUFBSUMsTUFBSixDQUFXRixPQUFPLENBQUNHLElBQW5CLEVBQXlCSCxPQUFPLENBQUNJLEVBQWpDLENBQWQ7QUFDSCxTQUhEO0FBSUE5QyxTQUFDLENBQUNxQyxJQUFGLENBQU8sMkJBQVAsRUFBb0M7QUFDaEMsZ0JBQU0wRSxNQUFNLENBQUMvRSxHQUFQO0FBRDBCLFNBQXBDLEVBRUdNLElBRkgsQ0FFUSxVQUFVQyxRQUFWLEVBQW9CO0FBQ3hCQSxrQkFBUSxDQUFDRSxPQUFULENBQWlCLFVBQUFDLE9BQU8sRUFBSTtBQUN4QjtBQUNBc0Usa0JBQU0sQ0FBQ3JFLE1BQVAsQ0FBYyxJQUFJQyxNQUFKLENBQVdGLE9BQU8sQ0FBQ0csSUFBbkIsRUFBeUJILE9BQU8sQ0FBQ0ksRUFBakMsQ0FBZDtBQUNILFdBSEQ7QUFJSCxTQVBELEVBT0dvQyxJQVBILENBT1EsWUFBWTtBQUNoQmxGLFdBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWMsR0FBVixDQUFjLFNBQWQsRUFBeUIsR0FBekI7QUFDQWQsV0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQlEsSUFBbkI7QUFDSCxTQVZEO0FBV0gsT0FsQkQ7QUFtQkgsS0F4QkQ7QUF5Qkg7QUFFSixDQXRDRDtBQXdDQXNHLE1BQU0sQ0FBQy9ELE1BQVAsQ0FBYyxZQUFZO0FBQ3RCL0MsR0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JRLElBQXRCO0FBRUF5RCxTQUFPLENBQUNDLEdBQVIsQ0FBWTRDLE1BQU0sQ0FBQzlFLEdBQVAsRUFBWjtBQUNBK0UsUUFBTSxDQUFDdkUsS0FBUDtBQUNBd0UsUUFBTSxDQUFDeEUsS0FBUDtBQUNBeEMsR0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVYyxHQUFWLENBQWMsU0FBZCxFQUF5QixLQUF6QjtBQUNBZCxHQUFDLENBQUMsZUFBRCxDQUFELENBQW1Cb0MsSUFBbkI7QUFDQXBDLEdBQUMsQ0FBQ3FDLElBQUYsQ0FBTywyQkFBUCxFQUFvQztBQUNoQyxVQUFNeUUsTUFBTSxDQUFDOUUsR0FBUDtBQUQwQixHQUFwQyxFQUVHTSxJQUZILENBRVEsVUFBVUMsUUFBVixFQUFvQjtBQUN4QkEsWUFBUSxDQUFDRSxPQUFULENBQWlCLFVBQUFDLE9BQU8sRUFBSTtBQUN4QjtBQUNBcUUsWUFBTSxDQUFDcEUsTUFBUCxDQUFjLElBQUlDLE1BQUosQ0FBV0YsT0FBTyxDQUFDRyxJQUFuQixFQUF5QkgsT0FBTyxDQUFDSSxFQUFqQyxDQUFkO0FBQ0gsS0FIRDtBQUlILEdBUEQsRUFPR29DLElBUEgsQ0FPUSxZQUFZO0FBQ2hCbEYsS0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVYyxHQUFWLENBQWMsU0FBZCxFQUF5QixHQUF6QjtBQUNBZCxLQUFDLENBQUMsZUFBRCxDQUFELENBQW1CUSxJQUFuQjtBQUNILEdBVkQ7QUFXSCxDQW5CRDtBQW9CQXVHLE1BQU0sQ0FBQ2hFLE1BQVAsQ0FBYyxZQUFZO0FBQ3RCL0MsR0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JRLElBQXRCO0FBRUF5RCxTQUFPLENBQUNDLEdBQVIsQ0FBWTRDLE1BQU0sQ0FBQzlFLEdBQVAsRUFBWjtBQUNBZ0YsUUFBTSxDQUFDeEUsS0FBUDtBQUNBeEMsR0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVYyxHQUFWLENBQWMsU0FBZCxFQUF5QixLQUF6QjtBQUNBZCxHQUFDLENBQUMsZUFBRCxDQUFELENBQW1Cb0MsSUFBbkI7QUFDQXBDLEdBQUMsQ0FBQ3FDLElBQUYsQ0FBTywyQkFBUCxFQUFvQztBQUNoQyxVQUFNMEUsTUFBTSxDQUFDL0UsR0FBUDtBQUQwQixHQUFwQyxFQUVHTSxJQUZILENBRVEsVUFBVUMsUUFBVixFQUFvQjtBQUN4QkEsWUFBUSxDQUFDRSxPQUFULENBQWlCLFVBQUFDLE9BQU8sRUFBSTtBQUN4QjtBQUNBc0UsWUFBTSxDQUFDckUsTUFBUCxDQUFjLElBQUlDLE1BQUosQ0FBV0YsT0FBTyxDQUFDRyxJQUFuQixFQUF5QkgsT0FBTyxDQUFDSSxFQUFqQyxDQUFkO0FBQ0gsS0FIRDtBQUlILEdBUEQsRUFPR29DLElBUEgsQ0FPUSxZQUFZO0FBQ2hCK0IsV0FBTyxDQUFDN0UsSUFBUjtBQUNBaUYsU0FBSyxDQUFDakYsSUFBTjtBQUNBcEMsS0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVYyxHQUFWLENBQWMsU0FBZCxFQUF5QixHQUF6QjtBQUNBZCxLQUFDLENBQUMsZUFBRCxDQUFELENBQW1CUSxJQUFuQjtBQUNILEdBWkQ7QUFhSCxDQXBCRDs7QUEwQkEsSUFBSTJHLGdCQUFKLEVBQXNCO0FBQ2xCLE1BQUlTLFlBQVksR0FBRyxLQUFuQjtBQUNBUCxPQUFLLENBQUN0RyxRQUFOLENBQWUscUJBQWYsRUFGa0IsQ0FFcUI7O0FBQ3ZDc0csT0FBSyxDQUFDckUsRUFBTixDQUFTLDBEQUFULEVBQXFFLFVBQVVDLENBQVYsRUFBYTtBQUM5RUEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FELEtBQUMsQ0FBQzRFLGVBQUY7QUFDSCxHQUhEO0FBSUFSLE9BQUssQ0FBQ3JFLEVBQU4sQ0FBUyxvQkFBVCxFQUErQixZQUFZO0FBQ3ZDcUUsU0FBSyxDQUFDdEcsUUFBTixDQUFlLGFBQWY7QUFDSCxHQUZEO0FBR0FzRyxPQUFLLENBQUNyRSxFQUFOLENBQVMsd0JBQVQsRUFBbUMsWUFBWTtBQUMzQ3FFLFNBQUssQ0FBQ3JHLFdBQU4sQ0FBa0IsYUFBbEI7QUFFSCxHQUhEO0FBSUFxRyxPQUFLLENBQUNyRSxFQUFOLENBQVMsTUFBVCxFQUFpQixVQUFVQyxDQUFWLEVBQWE7QUFDMUIyRSxnQkFBWSxHQUFHM0UsQ0FBQyxDQUFDNkUsYUFBRixDQUFnQkMsWUFBaEIsQ0FBNkJOLEtBQTVDO0FBQ0FKLFNBQUssQ0FBQ2hDLE9BQU4sQ0FBYyxRQUFkO0FBQ0FyRixLQUFDLENBQUMsYUFBRCxDQUFELENBQWlCOEUsSUFBakIsQ0FBc0I4QyxZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCL0UsSUFBdEM7QUFDQTdDLEtBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJjLEdBQWpCLENBQXFCLGFBQXJCLEVBQW9DLE1BQXBDO0FBQ0gsR0FMRDtBQU1BdUcsT0FBSyxDQUFDdEUsTUFBTixDQUFhLE1BQWIsRUFBcUIsVUFBVUUsQ0FBVixFQUFhO0FBQzlCMkUsZ0JBQVksR0FBRzNFLENBQUMsQ0FBQzZFLGFBQUYsQ0FBZ0JDLFlBQWhCLENBQTZCTixLQUE1QztBQUNBSixTQUFLLENBQUNoQyxPQUFOLENBQWMsUUFBZDtBQUNILEdBSEQ7QUFJSDs7QUFDRCxJQUFJMkMsR0FBRyxHQUFHLEVBQVY7QUFBQSxJQUNJakQsVUFBVSxHQUFHLEVBRGpCO0FBRUFzQyxLQUFLLENBQUNyRSxFQUFOLENBQVMsUUFBVCxFQUFtQixVQUFVQyxDQUFWLEVBQWE7QUFFNUIsTUFBSTJFLFlBQUosRUFBa0I7QUFFZEksT0FBRyxDQUFDLFVBQUQsQ0FBSCxHQUFrQmhJLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCZ0MsR0FBdEIsRUFBbEI7QUFDQStDLGNBQVUsR0FBRy9FLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJnQyxHQUFuQixFQUFiO0FBQ0FpQyxXQUFPLENBQUNDLEdBQVIsQ0FBWWxFLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJnQyxHQUFuQixFQUFaLEVBSmMsQ0FLZDs7QUFDQSxRQUFJcUYsS0FBSyxDQUFDWSxRQUFOLENBQWUsY0FBZixDQUFKLEVBQW9DLE9BQU8sS0FBUDtBQUNwQ1QsYUFBUyxDQUFDSSxZQUFELENBQVQ7QUFDQVAsU0FBSyxDQUFDdEcsUUFBTixDQUFlLGNBQWYsRUFBK0JDLFdBQS9CLENBQTJDLFVBQTNDOztBQUVBLFFBQUltRyxnQkFBSixFQUFzQjtBQUNsQixVQUFJZSxRQUFRLEdBQUcsSUFBSUMsUUFBSixDQUFhZCxLQUFLLENBQUNlLEdBQU4sQ0FBVSxDQUFWLENBQWIsQ0FBZjs7QUFFQSxVQUFJUixZQUFKLEVBQWtCO0FBQ2Q1SCxTQUFDLENBQUNxRCxJQUFGLENBQU91RSxZQUFQLEVBQXFCLFVBQVV4RyxDQUFWLEVBQWFpSCxJQUFiLEVBQW1CO0FBQ3BDSCxrQkFBUSxDQUFDdkYsTUFBVCxDQUFnQjJFLE1BQU0sQ0FBQ3BHLElBQVAsQ0FBWSxNQUFaLENBQWhCLEVBQXFDbUgsSUFBckM7QUFDQUwsYUFBRyxDQUFDLFNBQUQsQ0FBSCxHQUFpQkssSUFBSSxDQUFDeEYsSUFBdEI7QUFFSCxTQUpEO0FBS0g7O0FBQ0Q3QyxPQUFDLENBQUMwRCxJQUFGLENBQU87QUFDSEMsV0FBRyxFQUFFLG1CQURGO0FBRUhDLFlBQUksRUFBRSxNQUZIO0FBSUhRLFdBQUcsRUFBRSxlQUFZO0FBQ2IsY0FBSUEsR0FBRyxHQUFHLElBQUluQyxNQUFNLENBQUNxRyxjQUFYLEVBQVY7QUFDQWxFLGFBQUcsQ0FBQ21FLE1BQUosQ0FBV0MsZ0JBQVgsQ0FBNEIsVUFBNUIsRUFBd0MsVUFBVUMsR0FBVixFQUFlO0FBQ25EeEUsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZdUUsR0FBRyxDQUFDQyxNQUFoQjs7QUFDQSxnQkFBSUQsR0FBRyxDQUFDRSxnQkFBUixFQUEwQjtBQUN0QixrQkFBSUMsZUFBZSxHQUFJSCxHQUFHLENBQUNDLE1BQUosR0FBYUQsR0FBRyxDQUFDSSxLQUFsQixHQUEyQixHQUFqRCxDQURzQixDQUV0Qjs7QUFDQW5CLG9CQUFNLENBQUNvQixHQUFQLENBQVdGLGVBQVg7O0FBQ0Esa0JBQUlBLGVBQWUsSUFBSSxHQUF2QixFQUE0QjtBQUN4QjVJLGlCQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQmUsUUFBcEIsQ0FBNkIsVUFBN0I7QUFDQWtELHVCQUFPLENBQUNDLEdBQVIsQ0FBWXVFLEdBQUcsQ0FBQ0MsTUFBaEI7QUFDQUQsbUJBQUcsQ0FBQ0ksS0FBSixHQUFZLENBQVo7QUFDSDtBQUNKO0FBQ0osV0FaRCxFQVlHLEtBWkg7QUFhQSxpQkFBT3pFLEdBQVA7QUFDSCxTQXBCRTtBQXNCSHJDLFlBQUksRUFBRW1HLFFBdEJIO0FBdUJIbkUsZ0JBQVEsRUFBRSxNQXZCUDtBQXdCSGdGLGFBQUssRUFBRSxLQXhCSjtBQXlCSEMsbUJBQVcsRUFBRSxLQXpCVjtBQTBCSEMsbUJBQVcsRUFBRSxLQTFCVjtBQTJCSEMsZ0JBQVEsRUFBRSxvQkFBWTtBQUNsQjdCLGVBQUssQ0FBQ3JHLFdBQU4sQ0FBa0IsY0FBbEI7QUFDQWhCLFdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CZ0IsV0FBcEIsQ0FBZ0MsVUFBaEM7QUFFSCxTQS9CRTtBQWdDSGdELGVBQU8sRUFBRSxpQkFBVWpDLElBQVYsRUFBZ0I7QUFDckJzRixlQUFLLENBQUN0RyxRQUFOLENBQWVnQixJQUFJLENBQUNpQyxPQUFMLElBQWdCLElBQWhCLEdBQXVCLFlBQXZCLEdBQXNDLFVBQXJEO0FBQ0FtRixlQUFLLEdBQUcsSUFBUjtBQUNILFNBbkNFO0FBb0NIaEYsYUFBSyxFQUFFLGlCQUFZO0FBQ2Y7QUFDQUYsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFDSDtBQXZDRSxPQUFQO0FBeUNILEtBbkRELE1BbURPO0FBQ0gsVUFBSWtGLFVBQVUsR0FBRyxpQkFBaUIsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQWxDO0FBQ0FDLGFBQU8sR0FBR3ZKLENBQUMsQ0FBQyxtQkFBbUJvSixVQUFuQixHQUFnQyxvQ0FBakMsQ0FBWDtBQUVBcEosT0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVMkMsTUFBVixDQUFpQjRHLE9BQWpCO0FBQ0FsQyxXQUFLLENBQUNuRyxJQUFOLENBQVcsUUFBWCxFQUFxQmtJLFVBQXJCO0FBRUFHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0IsWUFBWTtBQUM1QixZQUFJekgsSUFBSSxHQUFHeUUsSUFBSSxDQUFDQyxLQUFMLENBQVc4QyxPQUFPLENBQUNFLFFBQVIsR0FBbUJ0SixJQUFuQixDQUF3QixNQUF4QixFQUFnQzJFLElBQWhDLEVBQVgsQ0FBWDtBQUNBdUMsYUFBSyxDQUNBckcsV0FETCxDQUNpQixjQURqQixFQUVLRCxRQUZMLENBRWNnQixJQUFJLENBQUNpQyxPQUFMLElBQWdCLElBQWhCLEdBQXVCLFlBQXZCLEdBQXNDLFVBRnBELEVBR0swRixVQUhMLENBR2dCLFFBSGhCO0FBSUEsWUFBSSxDQUFDM0gsSUFBSSxDQUFDaUMsT0FBVixFQUFtQjJGLFNBQVMsQ0FBQzdFLElBQVYsQ0FBZS9DLElBQUksQ0FBQ29DLEtBQXBCO0FBQ25Ca0QsYUFBSyxDQUFDcUMsVUFBTixDQUFpQixRQUFqQjtBQUNBSCxlQUFPLENBQUM1SSxNQUFSO0FBQ0gsT0FURDtBQVVIO0FBQ0o7QUFDSixDQWxGRDtBQW9GQVgsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJnRCxFQUFyQixDQUF3QixPQUF4QixFQUFpQyxVQUFVQyxDQUFWLEVBQWE7QUFFMUNBLEdBQUMsQ0FBQ0MsY0FBRjtBQUNBbEQsR0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVYyxHQUFWLENBQWMsU0FBZCxFQUF5QixLQUF6QjtBQUNBZCxHQUFDLENBQUMsZUFBRCxDQUFELENBQW1Cb0MsSUFBbkI7QUFDQXBDLEdBQUMsQ0FBQzBELElBQUYsQ0FBTztBQUNIQyxPQUFHLEVBQUUsbUJBREY7QUFFSEMsUUFBSSxFQUFFLE1BRkg7QUFHSDdCLFFBQUksRUFBRTtBQUNGLGFBQU9pRyxHQURMO0FBRUYsa0JBQVlqRDtBQUZWLEtBSEg7QUFPSGpCLFNBQUssRUFBRSxJQVBKO0FBUUhDLFlBQVEsRUFBRSxNQVJQO0FBUWU7QUFDbEJDLFdBQU8sRUFBRSxpQkFBVXpCLFFBQVYsRUFBb0I7QUFDekI7QUFDQTBCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZM0IsUUFBWixFQUZ5QixDQUd6QjtBQUNIO0FBYkUsR0FBUDtBQWVILENBcEJELEU7Ozs7Ozs7Ozs7OztBQzFOQXZDLDBDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCZ0QsRUFBaEIsQ0FBbUIsUUFBbkIsRUFBNkIsVUFBVUMsQ0FBVixFQUFhO0FBRXRDLE1BQUk0QixRQUFRLEdBQUdMLGFBQWEsQ0FBQ3ZDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBakIsQ0FBNUI7QUFFQThCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZbUQsS0FBWjtBQUNBckgsR0FBQyxDQUFDMEQsSUFBRixDQUFPO0FBQ0hDLE9BQUcsRUFBRSxrQkFERjtBQUVIQyxRQUFJLEVBQUUsS0FGSDtBQUdIRyxZQUFRLEVBQUUsTUFIUDtBQUlIaEMsUUFBSSxFQUFFO0FBQ0ZlLFFBQUUsRUFBRStCO0FBREYsS0FKSDtBQU9IZixTQUFLLEVBQUUsSUFQSjtBQVFIRSxXQUFPLEVBQUUsaUJBQVV6QixRQUFWLEVBQW9CO0FBQ3pCMEIsYUFBTyxDQUFDQyxHQUFSLENBQVkzQixRQUFaO0FBQ0gsS0FWRTtBQVdINEIsU0FBSyxFQUFFLGVBQVVDLEdBQVYsRUFBZUMsVUFBZixFQUEyQkMsV0FBM0IsRUFBd0M7QUFDMUMsNEJBQUQ7QUFDSDtBQWJFLEdBQVA7QUFnQkgsQ0FyQkQsRSxDQXVCQTs7QUFDQSxTQUFTRSxhQUFULENBQXVCc0IsR0FBdkIsRUFBNEI7QUFDeEIsU0FBT0MsTUFBTSxDQUFDRCxHQUFHLENBQUNFLE9BQUosQ0FBWSxRQUFaLEVBQXNCLEVBQXRCLENBQUQsQ0FBYjtBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCbUI7QUFBQTtBQUFBO0FBQUEsUUFBRyxpQkFBSDtBQUFBLFFBQUcsdUJBQUg7QUFFcEIsV0FBVyxHQUFFLDRCQUFiOztBQUFzQixhQUFJLHNCQUFLLEdBQUwsRUFBSzs7QUFDMUIsS0FEaUI7O1FBQzBCOztBQUVoRCxLOztBQUFBO0FBQ1MsVUFEVCxJQUNTLEVBRFQsT0FDUyxFQURULEtBQ1M7QUFEVCxVQUVjLEdBRmQ7QUFBQSxjQUUyQix1QkFGM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRZ0IsZ0JBQUcsR0FSbkIsTUFRc0MsS0FSdEMsY0FRZ0I7QUFDQSxhQUFFLFNBQU8sSUFBUCxDQVRsQixhQVNrQixFQUFGO0FBQ0EsYUFBRSxHQUFJLE1BQU0sQ0FWNUIsTUFVc0IsR0FWdEIsQ0FVc0IsR0FWdEIsQ0FVZ0I7QUFDRCxhQUFnQixNQVgvQixHQVdpQixJQUFLLENBWHRCLEVBVytCLEdBWC9CLEdBV2U7QUFDQSxZQUFFLEdBQUksSUFBQyxDQVp0QixHQVlxQixDQUFTLElBQUssSUFBTCxLQUFULEVBWnJCLENBWXFCLENBQU47QUFDQSxlQUFJLElBQUUsQ0FBSSxJQUFOLENBQVUsRUFBRSxHQWIvQixlQWFtQixDQUFKOztBQUNJLGNBQWdCLE1BZG5DLElBY3FCLEdBZHJCLE9BY21CLEVBZG5CO0FBZW1CLGNBQUUsR0FBSSxJQUFDLENBZjFCLEdBZXlCLENBQVMsSUFBSyxJQUFMLEtBQVQsRUFmekIsQ0FleUIsQ0FBTjtBQWZuQjtBQUFBOztBQWlCZ0IsY0FBRyxFQWpCbkIsTUFpQmdCO0FBQ0EsY0FsQmhCLEVBa0JxQixHQWxCckIsR0FrQmdCO0FBbEJoQjs7QUFBQTtBQW9Cb0IsZ0JBcEJwQixFQW9Cb0I7QUFDQSxlQXJCcEIsR0FxQnlCLGlCQXJCekIsQ0FxQnlCLENBQUw7QUFyQnBCO0FBQUE7O0FBQUEsYUE0QlksQ0E1Qlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQThCaUMsR0E5QmpDO0FBQUE7QUErQmdCLGFBQUcsSUEvQm5CLElBK0JnQixLQUFzQixNQS9CdEMsQ0ErQmdCO0FBQ0osYUFoQ1osNkJBZ0NZO0FBQ0ksMkJBakNoQjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxpTUFpQ2dCO0FBakNoQjtBQUFBO0FBQUE7QUFBQSwwQkEyQ3NCLEdBM0N0QjtBQUFBLDJCQTJDa0MsR0EzQ2xDO0FBQUEseUJBMkN5QyxFQTNDekM7QUFBQTtBQUFBO0FBQUE7QUE0Q2dCLFlBQUUsSUE1Q2xCLElBNENnQixLQUFzQixLQTVDdEMsQ0E0Q2dCO0FBNUNoQjs7QUFBQTtBQThDb0IsZ0JBOUNwQixFQThDb0I7QUFDQSxrQkFBSyxNQUFNLEtBQU4sSUEvQ3pCLEdBK0NvQjtBQUNBLGFBQUUsT0FBSyxPQUFMLEtBQW1CLEdBQW5CLEdBaER0QixDQWdEb0I7QUFDQSxnQkFBSSxLQUFLLE9BQUwsS0FBWSxHQUFaLEdBakR4QixHQWlEd0IsSUFqRHhCLElBaURvQjtBQUNBLGdCQWxEcEIsR0FtRG9CLHdCQW5EcEIsR0FtRG9CLENBREE7QUFsRHBCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWdFaUIsRUFoRWpCO0FBQUEsZUFpRWMsRUFqRWQ7QUFBQTtBQWtFWSxjQWxFWixNQWtFWTtBQUFBLGNBbEVaLE9Ba0VZO0FBQUEsY0FsRVosQ0FrRVk7QUFBQSxjQWxFWixJQWtFWTtBQUFBLGNBbEVaLElBa0VZO0FBQUEsY0FsRVosR0FrRVk7QUFBQSxjQWxFWixZQWtFWTtBQUNBLGdCQW5FWixRQW1FWTtBQW5FWjs7QUFBQTtBQXFFb0IsZ0JBckVwQixHQXFFMkIsS0FyRTNCLENBcUUyQixDQUFQO0FBQ0QsZUFBSCxHQXRFaEIsZUFzRW1COztBQUFRLGlCQUFPLEdBQVAsRUF0RTNCO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBd0V1QyxtQkFBTyxJQUFDLENBeEUvQyxDQXdFK0MsQ0FBUjs7QUFBOEIsdUJBQVEsQ0F4RTdFLE9Bd0VxRSxDQXhFckUsSUF3RXFFLEtBeEVyRSxDQXdFcUUsRUF4RXJFO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTRFZSxjQUFDLEtBQUMsR0E1RWpCLElBNEVlOztBQUFnQixjQUFDLE1BQUssS0FBTCxDQTVFaEMsR0E0RWdDLENBQUQsRUE1RS9CO0FBQUE7QUFBQTs7QUE4RWdCLGNBQUMsTUE5RWpCLE9BOEVnQixFQTlFaEI7QUFBQSxpQkErRWdCLE9BL0VoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsYUFtRnFELEdBbkZyRDtBQUFBO0FBQUE7QUF5RlcsWUFBQyxHQXpGWixnR0F5Rlc7O0FBQWUsWUFBSyxLQUFNLENBekZyQyxLQXlGMEIsRUF6RjFCO0FBQUE7QUEwRmEsU0FEYSxNQXpGMUI7QUFBQTtBQUFBOztBQTZGVyxXQUFFLEdBQUksS0FBVCxZQUFTLENBN0ZqQixPQTZGaUIsS0E3RmpCLEVBNkZXOztBQUEwQixZQUFLLE1BN0YxQyxPQTZGMEMsQ0E3RjFDLE9BNkYwQyxDQUFMLEVBN0ZyQztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGFBaUdxQixFQWpHckI7QUFBQSxjQWtHdUIsVUFBUyxHQWxHaEM7QUFBQSxnQkFtR3dCLFVBQVUsR0FuR2xDO0FBQUEsaUJBb0dxQixVQUFVLEdBcEcvQjtBQXFHWSxjQXJHWixFQXFHMEIsUUFBUyxHQXJHbkM7QUFBQTtBQUFBOztBQUFBO0FBdUdnQixpQkF2R2hCLENBdUdnQjtBQUNKLFdBeEdaLGFBd0dZOztBQXhHWjtBQXdHK0IsYUFBRSxLQXhHakMsQ0F3R2lDLENBQUY7O0FBQWdCLHNCQXhHL0MsTUF3RytDLEVBeEcvQztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsZUEyR3lCLG9CQUFTLENBQVQsRUEzR3pCO0FBQUE7QUFBQTs7QUE2R2MsYUFBSyxRQUFFLENBN0dyQixJQTZHbUIsQ0E3R25CLFNBNkdtQixDQTdHbkIsU0E2R21CLENBN0duQixTQTZHYzs7QUE3R2Qsa0JBNkc2QixhQTdHN0I7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxjQThHNkIsQ0E5RzdCO0FBQUE7QUFBQTs7QUFBQTtBQStHb0IsZ0JBQUUsRUEvR3RCLENBK0dzQixDQUFGO0FBQ0QsZUFBQyxHQUFKLGtCQWhIaEIsSUFnSGdCLENBaEhoQixDQWdIZ0IsQ0FBRzs7QUFoSG5CLHdCQWdINEMsTUFBQyxRQWhIN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGNBa0g4QixDQWxIOUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW9IOEIsVUFBRyxLQUFILEdBcEg5QjtBQUFBLGVBb0h1QyxJQUFDLElBcEh4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FvSDhCOztBQXBIOUIsY0FzSG9CLEdBdEhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMkg2QixrQkEzSDdCO0FBNEhxQyw2QkE1SHJDO0FBQUE7QUFBQTtBQUFBO0FBZ0kwQixvQkFoSTFCO0FBQUE7QUFrSWdDLDBCQWxJaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTZJdUIsaUJBN0l2QjtBQUFBO0FBQUE7QUFBQTtBQWtKVyxjQUFNLENBQU4sUUFBTSxDQUFOLEdBQUgsSUFsSlIsS0FrSlEsQ0FsSlIsYUFrSlEsS0FsSlIsZ0JBa0pXOztBQWxKWCxrQkFvSlksQ0FwSlosVUFvSjhCLElBcEo5QjtBQUFBO0FBQUE7O0FBd0pZLHFCQUFRLE1BQVIsRUF4Slo7QUF5SmdCLGNBQU0sT0FBTyxJQXpKN0IsNEJBeUpnQixFQXpKaEI7QUFBQTtBQUFBO0FBQUE7O0FBNEpXLGVBQU8sQ0E1SmxCLE1BNEprQixFQTVKbEIsTUE0SmtCLENBQVA7O0FBQWMsWUFBTSxNQUFNLElBQVosRUE1SnpCO0FBQUE7QUFBQTs7QUErSlEsZ0JBQVksVUEvSnBCLElBK0pvQixLQS9KcEIsUUErSlE7O0FBL0pSO0FBZ0tZLGNBQU8sTUFBUCxFQWhLWixHQWdLWTtBQUNJLGdCQUFFLEdBaktsQixxQ0FpS2dCO0FBQ0QsYUFBSCxHQWxLWixjQWtLZTs7QUFBUSxlQWxLdkIsR0FrS3VCLEVBbEt2QjtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFxS1EsY0FBTyxLQUFQLEdBcktSLFFBcUtrQyxPQUFPLENBckt6QyxJQXFLa0MsQ0FBMUI7QUFDRyxjQUFNLENBQVUsTUFBaEIsR0FBTSxRQUFlLENBQXhCLE1BdEtSLE9Bc0tnQyxDQUFyQjs7QUFBK0IsWUFBTSxNQUFVLENBdEsxRCxTQXNLMEQsQ0FBVixLQXRLaEQsT0FzSzBDLEVBdEsxQztBQUFBO0FBQUE7O0FBQUE7QUEwSzZCLGdCQTFLN0I7QUEyS2dCLDJCQTNLaEI7QUFBQTtBQUFBLGlCQTRLNkMsRUE1SzdDO0FBQUE7QUFBQTtBQThLZ0IsY0E5S2hCO0FBQUE7QUFBQSxrQkErS2dDLEVBL0toQztBQUFBO0FBK0ttRCxpQkEvS25EO0FBK0t1RCxpQkEvS3ZELEVBK0s4RCxDQS9LOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlMd0Isc0JBakx4QjtBQUFBLDBCQWtMb0MsRUFBQyxDQWxMckMsTUFrTDBDLENBQUYseUJBQUUsQ0FBTCxJQWxMckMsQ0FrTHFDLEdBbExyQyxRQWtMcUMsR0FsTHJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtTDBDLG9CQW5MMUM7QUFBQSx3QkFtTGtILEVBbkxsSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFxTGdDLEVBckxoQztBQUFBO0FBQUE7QUFBQTtBQXVMb0Msc0JBdkxwQztBQUFBLGdDQXdMeUMsTUFBRyxDQXhMNUM7QUFBQTtBQUFBO0FBeUxvQyxtQkF6THBDO0FBQUEsdUJBeUx3RCxFQXpMeEQ7QUF5TDZELDBCQXpMN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTRMb0IsYUE1THBCO0FBQUE7QUFBQSxvQkE2TG9DLEVBN0xwQztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQStMK0IsRUEvTC9CO0FBQUE7QUFBQSx3QkFpTW9DLEVBak1wQztBQUFBLDBCQWtNb0MsRUFsTXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBcU1nQyxFQXJNaEM7QUFBQTtBQUFBO0FBQUE7QUFzTWlDLG9CQXRNakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF5TThCLEVBek05QjtBQXlNd0MsdUJBek14QztBQUFBO0FBQUE7QUEwTW1DLGlCQTFNbkM7QUFBQSxxQkEwTXVELEVBMU12RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEyTTZDLG1CQTNNN0M7QUFBQSx1QkEyTWlFLEVBM01qRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQThNYSxXQUFFLFdBQVMsUUE5TXhCLEdBOE13QixDQUFYO0FBQ0QsWUFBQyxHQS9NYixRQStNMEIsQ0EvTTFCLG9CQStNWTtBQUNBLFlBQUMsQ0FoTmIsWUFnTlksQ0FoTlosT0FnTlksRUFoTlosYUFnTlk7QUFDQSxZQUFDLENBak5iLFdBaU5ZLENBak5aLEdBaU5ZO0FBRUosWUFBUSxDQW5OaEIsV0FtTlEsQ0FuTlIsSUFtTlE7QUFDQSxhQXBOUixTQW9OUTtBQUVDLGNBQUksR0F0TmIsQ0FzTlM7O0FBdE5UO0FBdU5ZLG9CQUFHLEdBQUgsRUFBZ0IsQ0FBaEIsRUF2TlosSUF1Tlk7O0FBQ0UsY0FBTSxJQUFJLEdBeE54QixNQXdOK0IsQ0F4Ti9CLE1Bd04rQixDQUFqQixFQXhOZDtBQUFBLGtCQXdONEMsSUFBRyxDQXhOL0MsS0F3TjRDLENBeE41QyxHQXdONEMsRUF4TjVDLEdBd040QyxDQXhONUM7QUFBQTtBQUFBLGFBd040QyxDQXhONUM7QUFBQSxlQXlOd0IsR0F6TnhCO0FBeU5rQyxpQkF6TmxDO0FBeU55QyxlQXpOekMsRUF5TmdELEdBQUcsQ0F6Tm5ELENBeU5tRCxDQXpObkQ7QUFBQSxtQkF5TitELEVBQUcsR0F6TmxFO0FBQUE7QUFBQTtBQTBOcUIsV0FGUCxNQXhOZDtBQUFBO0FBQUE7O0FBMk40RCxjQUFNLENBM05sRSxHQTJOa0UsSUEzTmxFLGVBMk5rRSxJQTNObEUsZ0JBMk40RCxFQTNONUQ7QUFBQTtBQUFBO0FBMk4rRSxlQTNOL0U7QUFBQSxtQkEyTm1HLEVBM05uRztBQUFBO0FBQUE7QUE0TmlCOztBQUVILGNBRHdFLFNBQU0sS0FBTixDQUN4RSxJQUR3RSxFQUN4RTtBQTlOZDtBQStOZSxXQURELENBRHdFLElBN050RixHQThOYzs7QUFDeUIsY0FBRyxNQUFnQixDQS9OMUQsU0ErTjBELENBQWhCLElBL04xQyxJQStOdUMsRUEvTnZDO0FBQUE7QUFBQTs7QUFpT3NCLGNBak90QixLQWlPc0IsQ0FqT3RCO0FBQUE7QUFBQSxXQWlPc0I7O0FBQ2MsY0FsT3BDLE1Ba09vQyxDQWxPcEMsU0FrT29DLEdBbE9wQztBQWtPNEQsc0JBQVMsUUFBVCxFQUFtQixHQUFuQixDQUFzQixVQUF0QixFQUFzQixFQWxPbEY7QUFtT2Msa0JBQUssS0FBTSxDQUFELEtBQUwsQ0FBZSxFQUFmLEtBQXVCLEtBQUksSUFBSixDQUFPLEVBQVAsQ0FBNUIsRUFuT2Q7QUFBQSxvQkFvT2MsTUFwT2QsQ0FvT2UsRUFwT2YsSUFvT3VCLEdBQUUsQ0FwT3pCLEVBb095QixDQUFGLEdBcE92QixLQW9PdUIsR0FwT3ZCO0FBQUE7QUFBQTtBQUFBLGFBa080RDtBQWxPNUQ7O0FBdU9lLGNBdk9mLGlDQXVPZTs7QUF2T2Y7QUFBQTtBQXdPaUMsaUJBQUksR0FBRSxDQXhPdkMsQ0F3T3FDLEdBeE9yQztBQXdPNEMsZUF4TzVDLEVBd09tRCxHQUFHLENBQUMsQ0FBSixHQXhPbkQ7QUFBQSxtQkF3TzhFLEVBQUcsR0FBQyxNQUFELEdBQVksQ0F4TzdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBMk9ZLFlBQUcsTUFBSCxDQTNPWixJQTJPWSxFQTNPWjtBQTRPZ0IsY0FBSyxRQUFMLEVBNU9oQjtBQUFBO0FBQUE7QUFBQSxvQkE2T3VCLEVBN092QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlQZ0IsV0FMQSxNQTVPaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWtQZ0MsbUJBbFBoQztBQUFBLHVCQWtQb0QsRUFsUHBEO0FBQUEsd0JBbVAwQixFQW5QMUI7QUFBQSxzQkFtUDBELFlBQXdCLEdBblBsRixRQW1QMEQsR0FuUDFEO0FBQUEsd0JBb1AyQixNQXBQM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXVQWSxhQUFLLENBdlBqQixXQXVQWSxDQXZQWixRQXVQWTtBQXZQWjtBQUFBO0FBQUEsa0JBd1BtQixFQXhQbkI7QUF3UGdDLG1CQXhQaEMsTUF3UDBDLENBeFAxQztBQUFBLHlCQXlQZ0MsUUFBTyxHQXpQdkMsVUF5UHVDLEdBelB2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMlBZLGFBQU0sQ0FBRSxXQUFSLENBQWdCLE1BM1A1QixDQTJQNEIsQ0FBaEI7QUFDQSxlQUFRLFFBQVEsR0FBUixDQTVQcEIsYUE0UG9CLENBNVBwQiwwQkE0UG9CLENBQVI7QUFDRyxrQkE3UGYsOEJBNlBlOztBQUFhLGNBN1A1QixRQTZQNEIsRUE3UDVCO0FBQUEsaUJBNlA4QyxDQTdQOUM7QUFBQTtBQUFBO0FBQUE7O0FBQUEsZ0JBZ1FzQixHQWhRdEIsR0FnUTJCLENBaFEzQjtBQWlRZ0Isb0JBalFoQixLQWlRZ0I7QUFqUWhCO0FBa1FvQixnQkFBRSxHQUFGLEVBbFFwQixJQWtRb0I7QUFsUXBCO0FBQUEsbUJBa1EyRSxHQWxRM0U7QUFBQTtBQUFBO0FBQUEsbUJBbVErRSxFQUFHLEdBQUMsQ0FuUW5GO0FBQUE7QUFBQTtBQUFBLG1CQW9RMEMsRUFwUTFDO0FBQUE7QUFBQTtBQXFRbUQsZUFyUW5ELGNBcVFtRCxDQXJRbkQsU0FxUW1ELEVBclFuRCxLQXFRbUQsQ0FyUW5EO0FBQUEsbUJBcVE2RSxFQUFHLEdBQUMsQ0FyUWpGO0FBQUE7QUFBQSxhQXFRbUQ7QUFyUW5ELG1CQXNRcUMsTUFBSSxDQXRRekMsS0FzUXFDLENBdFFyQztBQUFBLG1CQXNRd0QsRUFBRyxHQUFDLENBdFE1RDtBQUFBO0FBQUEsYUFzUXFDLENBdFFyQztBQXVRWSxXQXZRWjs7QUF1UXFELGNBQXpDLGlDQUEwRCxNQUFPLENBdlE3RSxJQXVRWSxHQUNRLE1BQVUsQ0F4UTlCLE1BdVFZLENBQXlDLEVBdlFyRDtBQXdRMkMsc0JBQU8sQ0F4UWxELFFBd1FrRCxHQUFVLE1BQU8sQ0F4UW5FLElBd1FrRCxHQXhRbEQsYUF3UTJDO0FBQ0YsbUJBelF6QyxLQXlReUMsQ0F6UXpDO0FBQUE7QUFBQSxhQXlReUM7QUF6UXpDOztBQTRRZ0IsY0E1UWhCLFFBNFFnQixFQTVRaEI7QUFBQSxrQkE0UW9DLEtBNVFwQztBQTRRMEUsc0JBNVExRSxNQTRRNEUsQ0E1UTVFLGNBNFE0RSxDQTVRNUU7QUFBQTtBQUFBO0FBOFFrQyx3QkE5UWxDO0FBQUEsOEJBK1ErQixNQUFnQixDQS9RL0MsY0ErUStDLENBL1EvQztBQStRc0Usc0NBL1F0RSxJQStRc0UsQ0EvUXRFLGFBK1FzRSxJQS9RdEUsMEJBK1FzRSxHQS9RdEU7QUFBQSxhQThRa0M7QUE5UWxDOztBQWlSZ0IsY0FqUmhCLE1Ba1JvQixDQWxScEIsaUJBaVJnQixFQWpSaEI7QUFBQSxpQkFrUjZCLE1BbFI3QjtBQWtSa0Usb0NBbFJsRSxJQWtSa0UsQ0FsUmxFLFdBa1JrRSxJQWxSbEUsMEJBa1JrRSxHQWxSbEU7QUFBQTtBQUFBOztBQUFBO0FBc1JhLGVBdFJiLEdBc1JhO0FBQ0wsZUFBUSxNQUFSLEdBdlJSLElBdVJRO0FBQ0ksU0E3Q0EsTUE2Q0csSUFBaUIsT0F4UmhDLEdBd1JlLEVBeFJmO0FBeVJnQixjQUFNLE1BQU0sWUFBWixFQXpSaEI7QUEwUnFCLGVBMVJyQixnQ0EwUnFCO0FBMVJyQjtBQUFBLG1CQTBSZ0QsR0FBRyxHQTFSbkQ7QUFBQTtBQUFBO0FBQUEsV0F5UmdCLE1BelJoQjtBQUFBO0FBQUEsbUJBMlI2QyxFQTNSN0M7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE4UjRCLGlCQTlSNUI7QUFBQSxxQkE4UmdELEVBOVJoRDtBQUFBLHNCQThSMkQsRUE5UjNEO0FBQUEsb0JBOFJzRixZQUF3QixPQUF4QixHQTlSdEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdTZ0IsYUFoU2hCLGNBZ1NnQixDQWhTaEIsWUFnU2dCLEVBaFNoQixLQWdTZ0IsQ0FoU2hCO0FBQUEsaUJBZ1MyQyxNQUFLLENBaFNoRDtBQUFBO0FBQUEsV0FnU2dCO0FBaFNoQixlQWlTeUMsQ0FqU3pDLENBaVN5QyxDQWpTekM7QUFBQTtBQUFBO0FBQUEscUJBa1MyQyxNQUFLLENBbFNoRDtBQUFBO0FBQUE7QUFrU29FLG1CQWxTcEU7QUFBQSxtQ0FvU3VDLEVBQUssTUFBRyxDQXBTL0MsY0FvUytDLENBcFMvQztBQUFBLDZCQXFTOEIsTUFBTyxDQXJTckMsSUFxUzhCLEtBclM5QixNQXFTOEIsR0FyUzlCLHVCQXFTOEIsR0FyUzlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXVTZ0Isb0JBdlNoQixLQXVTZ0I7QUF2U2hCO0FBd1NtQixxQkF4U25CLElBd1NtQjs7QUFDQyxnQkFBTSxNQUFNLFlBQVosRUF6U3BCO0FBMFN5QixpQkExU3pCLGdDQTBTeUI7QUExU3pCO0FBQUEscUJBMFNvRCxHQUFHLEdBMVN2RDtBQUFBO0FBQUE7QUFBQSxhQXlTb0IsTUF6U3BCO0FBQUE7QUFBQSxxQkEyU3NGLEVBQUcsR0FBQyxDQTNTMUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTRTaUQsRUE1U2pEO0FBQUE7QUFBQTtBQUFBOztBQThTb0IsZUE5U3BCLGNBOFNvQixDQTlTcEIsWUE4U29CLEVBOVNwQixLQThTb0IsQ0E5U3BCO0FBQUEsbUJBOFMrQyxNQUFLLENBOVNwRDtBQUFBO0FBQUEsYUE4U29CO0FBOVNwQixpQkFnVDJCLEdBaFQzQjtBQUFBLG1CQWdUK0MsTUFBSyxDQWhUcEQ7QUFBQTtBQUFBO0FBbVRnQixpQkFuVGhCLElBbVRnQjtBQW5UaEIsaUJBb1RnQixJQXBUaEIsQ0FvVGlCLFNBcFRqQjtBQUFBO0FBQUE7QUFzVGdCLG9CQXRUaEIsTUFzVDRCLENBdFQ1QixHQXNUZ0I7QUFDQSxjQXZUaEIsV0F1VGdCLENBQVksS0F2VDVCLEdBdVRnQjtBQXZUaEI7QUFBQTs7QUF3VGtCLFdBeFRsQixNQXdUa0IsQ0F4VGxCO0FBQUEsZUF3VHdDLEVBeFR4QztBQUFBO0FBQUEsU0F3VGtCO0FBeFRsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FnVWtCLEVBaFVsQjtBQWlVa0IsY0FBSSxFQUFFLGNBalV4QixDQWlVd0IsRUFqVXhCLENBaVV3QixFQWpVeEIsQ0FpVXdCLEVBalV4QixDQWlVd0IsRUFqVXhCO0FBa1VtQixhQUFFLEdBQUUsQ0FsVXZCLFlBa1VtQjs7QUFBUyxpQkFBTyxHQUFFLENBQVQsRUFsVTVCO0FBQUE7QUFBQTs7QUFvVWdCLGdCQUFRLENBQUUsR0FwVTFCLENBb1VnQjtBQXBVaEI7QUFBQTtBQUFBO0FBc1U0QixnQkF0VTVCLElBc1U0QixFQXRVNUIsR0FzVTRCLEVBdFU1QixHQXNVNEIsRUF0VTVCLElBc1U0QixNQXRVNUIsRUFzVTRCLEVBdFU1QixHQXNVNEIsRUF0VTVCLENBc1U0QixFQXRVNUIsQ0FzVTRCLEVBdFU1QixJQXNVNEIsRUF0VTVCLEtBc1U0QixFQXRVNUIsR0FzVTRCLEVBdFU1QixHQXNVNEI7QUFDUix3QkFBRCxJQXZVbkIsSUF1VW9CLEtBdlVwQixtQkF1VW9COztBQUFjLGdCQUFDLEtBQUssSUFBTCxDQXZVbkMsR0F1VW1DLElBdlVuQyxJQXVVa0MsRUF2VWxDO0FBQUE7QUFBQTs7QUF5VWdCLGdCQUFpQixJQUFDLE1BQUssQ0FBQyxLQUFELENBQU4sRUFBYSxNQUFDLENBQS9CLEtBQStCLENBQWQsRUFBMEIsSUFBSyxNQUFFLENBQUMsV0FBRCxDQUFqQyxDQUFqQixFQUErRCxHQUEvRCxHQUF1RSxPQUF2RSxFQUF3RixNQUFYLElBQWEsQ0FBMUUsQ0FBMEUsQ0FBMUYsTUFBYyxHQUFkLEtBelVoQixDQXlVZ0I7QUFDTyxvQkExVXZCLCtCQTBVdUIsRUExVXZCLDhCQTBVdUIsRUExVXZCLHdCQTBVdUIsR0ExVXZCLFlBMFV1QixFQTFVdkIsWUEwVXVCLEVBMVV2QixhQTBVdUI7QUFBZ0IsZ0JBMVV2QyxlQTBVNEUsVUExVTVFLEVBMFU0RSxFQTFVNUUsY0EwVTRFLEVBMVU1RSxFQTBVNEUsRUExVTVFLEdBMFU0RSxDQTFVNUUsR0EyVW1CLEtBQU8sS0FBUCxDQTNVbkIsR0EwVXVDOztBQUNFLGdCQUFFLE1BQUssVUFBUCxFQTNVekM7QUE0VWdCLHNCQUFRLE1BQVIsQ0FBUSxDQUFSLEdBNVVoQixJQTRVZ0IsSUE1VWhCLElBNFVnQjtBQUEwQixhQURELE1BQ1EsSUE1VWpELFlBNFVpRCxFQTVVakQ7QUFBQTtBQUFBOztBQUFBLHlCQThVc0IsQ0E5VXRCO0FBK1VvQixhQUFDLE9BQUQsS0FBYSxDQS9VakMsTUErVW9CO0FBQ0EsaUJBQU0sV0FBTixHQWhWcEIsQ0FnVm9CO0FBQ0QsZ0JBalZuQiwrQkFpVm1COztBQUNDLGdCQWxWcEIsUUFrVm9CLEVBbFZwQjtBQW1Wb0Isa0JBblZwQixRQW1Wb0I7QUFDc0Isc0JBcFYxQztBQXNWZ0Msb0NBQW1CLE1BQUssY0FBTCxLQXRWbkQsU0FzVm1ELEdBQ1IsT0FBTyxNQUFNLElBQUMsTUFBRyxDQUFKLENBQU4sR0FBZSxJQUF0QixHQUE2QixHQUE3QixHQUFrQyxNQUFFLEdBdlYvRSxDQXVWNkUsR0F2VjdFLElBdVYyQyxHQXZWM0MsSUFzVm1ELEdBdFZuRDtBQUFBLGVBb1YwQztBQU1sQixhQVJKLE1BbFZwQjtBQTJWd0IsaUJBQUUsUUFBaUIsR0FBakIsQ0EzVjFCLE9BMlYwQixFQUFGO0FBQ0osaUJBQU0sR0FBSyxNQUFPLENBNVZ0QyxVQTRWc0MsQ0FBbEI7QUE1VnBCO0FBOFZ3QixpQkE5VnhCLEtBOFZnQyxDQUFHLENBOVZuQyxHQThWb0MsR0FBTyxPQUFQLElBOVZwQyxPQThWb0MsSUE5VnBDO0FBQUE7QUErVmtDLGlCQS9WbEMsRUErVnlDLEdBQUcsQ0EvVjVDO0FBQUE7QUFBQTtBQWlXa0MsaUJBaldsQyxLQWlXMEMsQ0FqVzFDO0FBQUE7QUFrV2tDLGlCQWxXbEMsRUFrV3lDLEdBQUcsQ0FsVzVDO0FBQUE7QUFBQTtBQW9Xa0MsaUJBcFdsQyxLQW9XMEMsQ0FwVzFDO0FBQUE7QUFxV2tDLGlCQXJXbEMsRUFxV3lDLEdBQUcsQ0FyVzVDO0FBQUE7QUFBQSxrQkF1VzJCLEdBdlczQixVQXVXMkIsR0F2VzNCO0FBdVdrQyxpQkF2V2xDLEtBdVcwQyxDQXZXMUM7QUF3VzJCLHNCQUFNLEVBQUUsR0FBSSxDQXhXdkM7QUF5V3dCLGlCQXpXeEIsRUF5VytCLEdBQUcsQ0FBQyxDQUFKLEdBQUksR0FBTSxDQXpXekMsS0F5V21DLElBelduQyxPQXlXbUMsSUF6V25DO0FBQUE7QUFBQSxlQXVXMkIsR0FHSSxLQTFXL0I7QUFBQTtBQUFBOztBQTRXbUIsZ0JBQUcsQ0FBTixLQUFHLENBNVduQixLQTRXbUI7O0FBQWEsa0JBQU8sSUFBQyxHQUFSLEVBNVdoQztBQTRXa0QscUJBNVdsRCxhQTRXa0Q7QUE1V2xEO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBK1dnQixJQS9XaEI7QUFBQTtBQUFBO0FBQUE7QUFnWG9CLGdCQUFLLElBQUwsR0FoWHBCLEdBZ1hvQjtBQUNELGFBQUMsc0JBQXVCLElBQUMsYUFBeEIsSUFBNEMsc0JBalhoRSxNQWlYb0IsQ0FBRDs7QUFDQyxnQkFBQyxDQWxYckIsWUFrWHFCLElBbFhyQix3RUFrWG9CLEVBbFhwQjtBQW1YcUIsbUJBblhyQixJQW1YcUIsQ0FuWHJCLEdBbVhxQixHQW5YckIsQ0FtWHFCO0FBblhyQjtBQUFBO0FBQUE7O0FBcVg4QyxtQkFBTyxPQUFDLENBQVIsR0FBTyxDQUFTLEdBclg5RCxHQXFYcUQsRUFyWHJEO0FBQUE7QUFBQSxhQXFYcUQsQ0FBUDtBQXJYOUM7QUFBQTs7QUFBQTtBQXVYa0IsY0F2WGxCLEdBdVhrQixFQXZYbEIsR0F1WGtCO0FBQ0Ysc0JBQVMsSUF4WHpCLElBd1hnQixLQXhYaEIsbUJBd1hnQjtBQUNELGdCQUFILEtBelhaLEtBeVhZLElBelhaLENBeVhlOztBQUFNLGNBQUMsS0F6WHRCLElBeVhxQixFQXpYckI7QUFBQTtBQXlYdUMsV0FBbEIsTUF6WHJCO0FBQUE7QUFBQTs7QUFBQSxhQTJYWSxRQTNYWjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQWtZYSxjQUFDLEdBQUssSUFBVCxDQWxZVixFQWtZVSxDQUFHOztBQWxZYjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBcVlBLEtBcllBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7UUNMTyxPO1FBQUEsT0FBUSxPQUNYLE9BRFcsSUFDWCxXQURXLElBQ1gsT0FEVyxJQUNYLEk7QUFBQSxtQkFDVTtBQUFBLGFBQUU7QUFDRixnQkFBRSxRQURBO0FBRUEsZ0JBQUUsY0FGRjtBQUdGLGtCQUFlLHNFQUhiO0FBQUY7QUFBRSxPQUFGO0FBS0EsWUFBRTtBQUNGLGdCQUFFLE1BREE7QUFFQSxnQkFBRSxpREFGRjtBQUdGLGtCQUFFLE1BSEE7QUFJRSxnQkFBTyw4Q0FKVDtBQUtTLHlCQUxUO0FBTWlCLGlDQU5qQjtBQU9GLG1DQUFjLENBUFo7QUFBRjtBQUFFLE9BTEY7QUFjQSxZQUFFO0FBQ0YsZ0JBQUUsTUFEQTtBQUVBLGdCQUFFLGlEQUZGO0FBR0Ysa0JBQUUsTUFIQTtBQUlFLGdCQUFPLG9DQUpUO0FBS1MseUJBTFQ7QUFNaUIsaUNBTmpCO0FBT0YsbUNBQWMsQ0FQWjtBQUFGO0FBQUUsT0FkRjtBQXVCQSxZQUFFO0FBQ0gsZ0JBQTJOLE1BRHhOO0FBRWlCLHNQQUZqQjtBQUdNLG1DQUFFLEdBSFI7QUFJRSx3QkFBTyxHQUpUO0FBS0Usb0JBQVMsS0FMWDtBQU1GLG9CQUFhLE9BTlg7QUFBRjtBQUFFLE9BdkJGO0FBK0JBLFlBQUU7QUFDRixnQkFBRSxRQURBO0FBRUEsZ0JBQUUsY0FGRjtBQUdNLHdCQUhOO0FBSU0sd0JBQUUsQ0FKUjtBQUtZLDhCQUxaO0FBTUYsOEJBQWUsQ0FOYjtBQUFGO0FBQUUsT0EvQkY7QUF1Q0E7QUFDQSxnQkFBRSxRQURGO0FBRUksZ0JBQUUsMEJBRk47QUFHQSxvQkFBRSxLQUhGO0FBSVcsc0JBSlg7QUFLbUIsaUNBTG5CO0FBTU0sbUNBQUUsQ0FOUjtBQU9FLHNCQUFFLFFBUEo7QUFRUSx3QkFSUjtBQVNRLHdCQUFFLEdBVFY7QUFVYyw4QkFWZDtBQVdBLDhCQUFlLEdBWGY7QUFBQTtBQUFBLE9BdkNBO0FBb0RBLFlBQUU7QUFDRixnQkFBRSxRQURBO0FBRUUsZ0JBQUUsNENBRko7QUFHRixvQkFBRSxLQUhBO0FBSVMsc0JBSlQ7QUFLaUIsaUNBTGpCO0FBTUksbUNBQUUsQ0FOTjtBQU9BLHNCQUFFLFFBUEY7QUFRTSx3QkFSTjtBQVNNLHdCQUFFLEdBVFI7QUFVWSw4QkFWWjtBQVdGLDhCQUFlLEdBWGI7QUFBRjtBQUFFLE9BcERGO0FBaUVBLFlBQUU7QUFDRixnQkFBRSxNQURBO0FBRUUsZ0JBQUUsNENBRko7QUFHRixvQkFBRSxLQUhBO0FBSU0sa0RBSk47QUFLUyx3QkFBRSxLQUxYO0FBTWlCLGlDQU5qQjtBQU9JLG1DQUFFLENBUE47QUFRQSxzQkFBRSxRQVJGO0FBU00sd0JBVE47QUFVTSx3QkFBRSxHQVZSO0FBV1ksOEJBWFo7QUFZRiw4QkFBZSxHQVpiO0FBQUY7QUFBRTtBQWpFRixLQURWOzs7Ozs7Ozs7Ozs7O0FDREo7QUFDQSxJQUFJNEQsU0FBUyxHQUFHLEVBQWhCO0FBQUEsSUFDSXhJLENBQUMsR0FBRyxDQURSO0FBQUEsSUFFSStILEtBQUssR0FBRyxLQUZaO0FBR0FuSixDQUFDLENBQUNTLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDMUIsTUFBSW1KLFVBQVUsR0FBR3JGLGFBQWEsQ0FBQ3ZDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBakIsQ0FBOUI7O0FBQ0EsTUFBSUYsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFoQixJQUE0Qiw0QkFBNEIwSCxVQUE1RCxFQUF3RTtBQUNwRTtBQUNBbkMsVUFBTSxHQUFHLElBQUlDLEtBQUosQ0FBVSxnQkFBVixDQUFUO0FBQ0g7O0FBQUE7QUFDSixDQU5ELEUsQ0FPQTs7QUFDQTNILENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCUSxJQUFyQjtBQUNBUixDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQlEsSUFBdEIsRyxDQUNBOztBQUNBLElBQUkyRyxnQkFBZ0IsR0FBRyxZQUFZO0FBQy9CLE1BQUlDLEdBQUcsR0FBRzNHLFFBQVEsQ0FBQ2tCLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtBQUNBLFNBQU8sQ0FBRSxlQUFleUYsR0FBaEIsSUFBeUIsaUJBQWlCQSxHQUFqQixJQUF3QixZQUFZQSxHQUE5RCxLQUF1RSxjQUFjbkYsTUFBckYsSUFBK0YsZ0JBQWdCQSxNQUF0SDtBQUNILENBSHNCLEVBQXZCOztBQUlBLElBQUlvRixLQUFLLEdBQUdySCxDQUFDLENBQUMsTUFBRCxDQUFiOztBQUNBLElBQUlzSCxNQUFNLEdBQUdELEtBQUssQ0FBQ2xILElBQU4sQ0FBVyxvQkFBWCxDQUFiO0FBQUEsSUFDSW9ILE1BQU0sR0FBR0YsS0FBSyxDQUFDbEgsSUFBTixDQUFXLE9BQVgsQ0FEYjtBQUFBLElBRUlxSCxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFVQyxLQUFWLEVBQWlCO0FBQ3pCRixRQUFNLENBQUN6QyxJQUFQLENBQVkyQyxLQUFLLENBQUNsQyxNQUFOLEdBQWUsQ0FBZixHQUFtQixDQUFDK0IsTUFBTSxDQUFDcEcsSUFBUCxDQUFZLHVCQUFaLEtBQXdDLEVBQXpDLEVBQTZDOEUsT0FBN0MsQ0FBcUQsU0FBckQsRUFBZ0V5QixLQUFLLENBQUNsQyxNQUF0RSxDQUFuQixHQUFtR2tDLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUzVFLElBQXhIO0FBQ0gsQ0FKTCxDLENBTUE7OztBQUVBN0MsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JZLEtBQXBCLENBQTBCLFlBQVk7QUFDbEM7QUFDQTtBQUVBLE1BQUl1SSxLQUFKLEVBQVc7QUFDUG5KLEtBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCZ0MsR0FBdEIsQ0FBMEIsRUFBMUI7QUFDQTRGLGdCQUFZLEdBQUcsS0FBZjtBQUNBUCxTQUFLLENBQUNyRyxXQUFOLENBQWtCLFlBQWxCO0FBQ0FoQixLQUFDLENBQUMsYUFBRCxDQUFELENBQWlCYyxHQUFqQixDQUFxQixhQUFyQixFQUFvQyxFQUFwQztBQUNBZCxLQUFDLENBQUMsYUFBRCxDQUFELENBQWlCOEosSUFBakIsQ0FBc0IsZ0dBQXRCO0FBQ0E5SixLQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2Qm9DLElBQTdCO0FBQ0ErRyxTQUFLLEdBQUcsS0FBUjtBQUNILEdBUkQsTUFRTztBQUNILFdBQU8sS0FBUDtBQUNIO0FBQ0osQ0FmRCxFLENBZ0JBOztBQUVBbkosQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlZ0QsRUFBZixDQUFrQixPQUFsQixFQUEyQixVQUFVQyxDQUFWLEVBQWE7QUFDcENBLEdBQUMsQ0FBQ0MsY0FBRjtBQUNBRCxHQUFDLENBQUM0RSxlQUFGO0FBQ0gsQ0FIRDs7QUFJQSxJQUFJVixnQkFBSixFQUFzQjtBQUNsQixNQUFJUyxZQUFZLEdBQUcsS0FBbkI7QUFDQVAsT0FBSyxDQUFDdEcsUUFBTixDQUFlLHFCQUFmLEVBRmtCLENBRXFCOztBQUN2Q3NHLE9BQUssQ0FBQ3JFLEVBQU4sQ0FBUywwREFBVCxFQUFxRSxVQUFVQyxDQUFWLEVBQWE7QUFDOUVBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBRCxLQUFDLENBQUM0RSxlQUFGO0FBQ0gsR0FIRDtBQUlBUixPQUFLLENBQUNyRSxFQUFOLENBQVMsb0JBQVQsRUFBK0IsWUFBWTtBQUN2Q3FFLFNBQUssQ0FBQ3RHLFFBQU4sQ0FBZSxhQUFmO0FBQ0gsR0FGRDtBQUdBc0csT0FBSyxDQUFDckUsRUFBTixDQUFTLHdCQUFULEVBQW1DLFlBQVk7QUFDM0NxRSxTQUFLLENBQUNyRyxXQUFOLENBQWtCLGFBQWxCO0FBRUgsR0FIRDtBQUlBcUcsT0FBSyxDQUFDckUsRUFBTixDQUFTLE1BQVQsRUFBaUIsVUFBVUMsQ0FBVixFQUFhO0FBQzFCMkUsZ0JBQVksR0FBRzNFLENBQUMsQ0FBQzZFLGFBQUYsQ0FBZ0JDLFlBQWhCLENBQTZCTixLQUE1QztBQUNBSixTQUFLLENBQUNoQyxPQUFOLENBQWMsUUFBZDtBQUNBckYsS0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQjhFLElBQWpCLENBQXNCOEMsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQi9FLElBQXRDO0FBQ0E3QyxLQUFDLENBQUMsYUFBRCxDQUFELENBQWlCYyxHQUFqQixDQUFxQixhQUFyQixFQUFvQyxNQUFwQztBQUNILEdBTEQ7QUFNQXVHLE9BQUssQ0FBQ3RFLE1BQU4sQ0FBYSxNQUFiLEVBQXFCLFVBQVVFLENBQVYsRUFBYTtBQUM5QjJFLGdCQUFZLEdBQUczRSxDQUFDLENBQUM2RSxhQUFGLENBQWdCQyxZQUFoQixDQUE2Qk4sS0FBNUM7QUFDQUosU0FBSyxDQUFDaEMsT0FBTixDQUFjLFFBQWQ7QUFDSCxHQUhEO0FBSUg7O0FBQ0RnQyxLQUFLLENBQUNyRSxFQUFOLENBQVMsUUFBVCxFQUFtQixVQUFVQyxDQUFWLEVBQWE7QUFDNUJBLEdBQUMsQ0FBQ0MsY0FBRjtBQUNILENBRkQ7QUFJQWxELENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJZLEtBQWpCLENBQXVCLFVBQVVxQyxDQUFWLEVBQWE7QUFDaENBLEdBQUMsQ0FBQ0MsY0FBRjtBQUVBLE1BQUk2RyxJQUFJLEdBQUcsRUFBWDs7QUFDQSxNQUFJL0osQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JnQyxHQUF0QixNQUErQixFQUEvQixJQUFxQzRGLFlBQXpDLEVBQXVEO0FBRW5ENUgsS0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJvQyxJQUFyQjtBQUNBcEMsS0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JvQyxJQUF0QjtBQUVBMkgsUUFBSSxDQUFDLFdBQUQsQ0FBSixHQUFvQi9KLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCZ0MsR0FBdEIsRUFBcEIsQ0FMbUQsQ0FPbkQ7O0FBQ0EsUUFBSXFGLEtBQUssQ0FBQ1ksUUFBTixDQUFlLGNBQWYsQ0FBSixFQUFvQyxPQUFPLEtBQVA7QUFDcENULGFBQVMsQ0FBQ0ksWUFBRCxDQUFUO0FBQ0FQLFNBQUssQ0FBQ3RHLFFBQU4sQ0FBZSxjQUFmLEVBQStCQyxXQUEvQixDQUEyQyxVQUEzQzs7QUFFQSxRQUFJbUcsZ0JBQUosRUFBc0I7QUFDbEIsVUFBSWUsUUFBUSxHQUFHLElBQUlDLFFBQUosQ0FBYWQsS0FBSyxDQUFDZSxHQUFOLENBQVUsQ0FBVixDQUFiLENBQWY7O0FBRUEsVUFBSVIsWUFBSixFQUFrQjtBQUNkNUgsU0FBQyxDQUFDcUQsSUFBRixDQUFPdUUsWUFBUCxFQUFxQixVQUFVeEcsQ0FBVixFQUFhaUgsSUFBYixFQUFtQjtBQUNwQ0gsa0JBQVEsQ0FBQ3ZGLE1BQVQsQ0FBZ0IyRSxNQUFNLENBQUNwRyxJQUFQLENBQVksTUFBWixDQUFoQixFQUFxQ21ILElBQXJDO0FBQ0EwQixjQUFJLENBQUMsVUFBRCxDQUFKLEdBQW1CMUIsSUFBSSxDQUFDeEYsSUFBeEI7QUFFSCxTQUpEO0FBS0g7O0FBQ0RvQixhQUFPLENBQUNDLEdBQVIsQ0FBWWdFLFFBQVo7QUFDQWxJLE9BQUMsQ0FBQzBELElBQUYsQ0FBTztBQUNIQyxXQUFHLEVBQUUsb0JBREY7QUFFSEMsWUFBSSxFQUFFLE1BRkg7O0FBR0g7Ozs7O0FBS0FRLFdBQUcsRUFBRSxlQUFZO0FBQ2IsY0FBSUEsR0FBRyxHQUFHLElBQUluQyxNQUFNLENBQUNxRyxjQUFYLEVBQVY7QUFDQWxFLGFBQUcsQ0FBQ21FLE1BQUosQ0FBV0MsZ0JBQVgsQ0FBNEIsVUFBNUIsRUFBd0MsVUFBVUMsR0FBVixFQUFlO0FBQ25EeEUsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZdUUsR0FBRyxDQUFDQyxNQUFoQjs7QUFDQSxnQkFBSUQsR0FBRyxDQUFDRSxnQkFBUixFQUEwQjtBQUN0QixrQkFBSUMsZUFBZSxHQUFJSCxHQUFHLENBQUNDLE1BQUosR0FBYUQsR0FBRyxDQUFDSSxLQUFsQixHQUEyQixHQUFqRCxDQURzQixDQUV0Qjs7QUFDQW5CLG9CQUFNLENBQUNvQixHQUFQLENBQVdGLGVBQVg7O0FBQ0Esa0JBQUlBLGVBQWUsSUFBSSxHQUF2QixFQUE0QjtBQUN4QjVJLGlCQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQmUsUUFBcEIsQ0FBNkIsVUFBN0I7QUFDQWtELHVCQUFPLENBQUNDLEdBQVIsQ0FBWXVFLEdBQUcsQ0FBQ0MsTUFBaEI7QUFDQUQsbUJBQUcsQ0FBQ0ksS0FBSixHQUFZLENBQVo7QUFDSDtBQUNKO0FBQ0osV0FaRCxFQVlHLEtBWkg7QUFhQSxpQkFBT3pFLEdBQVA7QUFDSCxTQXhCRTtBQTBCSHJDLFlBQUksRUFBRW1HLFFBMUJIO0FBMkJIbkUsZ0JBQVEsRUFBRSxNQTNCUDtBQTRCSGdGLGFBQUssRUFBRSxLQTVCSjtBQTZCSEMsbUJBQVcsRUFBRSxLQTdCVjtBQThCSEMsbUJBQVcsRUFBRSxLQTlCVjtBQStCSEMsZ0JBQVEsRUFBRSxvQkFBWTtBQUNsQjdCLGVBQUssQ0FBQ3JHLFdBQU4sQ0FBa0IsY0FBbEI7QUFDQWhCLFdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CZ0IsV0FBcEIsQ0FBZ0MsVUFBaEM7QUFDQTRJLG1CQUFTLENBQUNuRyxJQUFWLENBQWVzRyxJQUFmO0FBQ0FILG1CQUFTLENBQUNuSCxPQUFWLENBQWtCdUgsU0FBbEI7QUFFSCxTQXJDRTtBQXNDSGhHLGVBQU8sRUFBRSxpQkFBVWpDLElBQVYsRUFBZ0I7QUFDckJzRixlQUFLLENBQUN0RyxRQUFOLENBQWVnQixJQUFJLENBQUNpQyxPQUFMLElBQWdCLElBQWhCLEdBQXVCLFlBQXZCLEdBQXNDLFVBQXJEO0FBQ0FoRSxXQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QlEsSUFBN0I7QUFDQTJJLGVBQUssR0FBRyxJQUFSO0FBQ0FsRixpQkFBTyxDQUFDQyxHQUFSLENBQVkwRixTQUFaO0FBRUgsU0E1Q0U7QUE2Q0h6RixhQUFLLEVBQUUsaUJBQVk7QUFDZjtBQUNBRixpQkFBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUNIO0FBaERFLE9BQVA7QUFrREgsS0E3REQsTUE2RE87QUFDSCxVQUFJa0YsVUFBVSxHQUFHLGlCQUFpQixJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBbEM7QUFDQUMsYUFBTyxHQUFHdkosQ0FBQyxDQUFDLG1CQUFtQm9KLFVBQW5CLEdBQWdDLG9DQUFqQyxDQUFYO0FBRUFwSixPQUFDLENBQUMsTUFBRCxDQUFELENBQVUyQyxNQUFWLENBQWlCNEcsT0FBakI7QUFDQWxDLFdBQUssQ0FBQ25HLElBQU4sQ0FBVyxRQUFYLEVBQXFCa0ksVUFBckI7QUFFQUcsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQixZQUFZO0FBQzVCLFlBQUl6SCxJQUFJLEdBQUd5RSxJQUFJLENBQUNDLEtBQUwsQ0FBVzhDLE9BQU8sQ0FBQ0UsUUFBUixHQUFtQnRKLElBQW5CLENBQXdCLE1BQXhCLEVBQWdDMkUsSUFBaEMsRUFBWCxDQUFYO0FBQ0F1QyxhQUFLLENBQ0FyRyxXQURMLENBQ2lCLGNBRGpCLEVBRUtELFFBRkwsQ0FFY2dCLElBQUksQ0FBQ2lDLE9BQUwsSUFBZ0IsSUFBaEIsR0FBdUIsWUFBdkIsR0FBc0MsVUFGcEQsRUFHSzBGLFVBSEwsQ0FHZ0IsUUFIaEI7QUFJQSxZQUFJLENBQUMzSCxJQUFJLENBQUNpQyxPQUFWLEVBQW1CMkYsU0FBUyxDQUFDN0UsSUFBVixDQUFlL0MsSUFBSSxDQUFDb0MsS0FBcEI7QUFDbkJrRCxhQUFLLENBQUNxQyxVQUFOLENBQWlCLFFBQWpCO0FBQ0FILGVBQU8sQ0FBQzVJLE1BQVI7QUFDSCxPQVREO0FBVUg7QUFDSixHQTNGRCxNQTJGTztBQUNIZ0UsU0FBSyxDQUFDLCtCQUFELENBQUw7QUFDSDtBQUdKLENBcEdEO0FBc0dBM0UsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQmdELEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFFBQTlCLEVBQXdDLFlBQVk7QUFDaEQsTUFBSWlILE1BQU0sR0FBR3hKLFFBQVEsQ0FBQ3lKLGFBQVQsQ0FBdUIsV0FBdkIsRUFBb0N6QyxLQUFqRDtBQUNBLE1BQUkwQyxlQUFlLEdBQUcsTUFBdEI7QUFDQSxNQUFJQyxRQUFRLEdBQUcsTUFBZjtBQUNBLE1BQUlDLFlBQVksR0FBRyxTQUFuQixDQUpnRCxDQUtoRDs7QUFDQXJLLEdBQUMsQ0FBQzBELElBQUYsQ0FBTztBQUNIQyxPQUFHLEVBQUUscUJBREY7QUFFSEMsUUFBSSxFQUFFLE1BRkg7QUFHSDdCLFFBQUksRUFBRTtBQUNGLGdCQUFVO0FBRFIsS0FISDtBQU1IK0IsU0FBSyxFQUFFLElBTko7QUFPSEMsWUFBUSxFQUFFLE1BUFA7QUFPZTtBQUNsQkMsV0FBTyxFQUFFLGlCQUFVekIsUUFBVixFQUFvQjtBQUN6QjRILHFCQUFlLEdBQUc1SCxRQUFRLENBQUMrSCxJQUEzQjtBQUNBdEssT0FBQyxDQUFDMEQsSUFBRixDQUFPO0FBQ0hDLFdBQUcsRUFBRSxvQkFERjtBQUVIQyxZQUFJLEVBQUUsTUFGSDtBQUdIN0IsWUFBSSxFQUFFO0FBQ0Ysb0JBQVUsYUFEUjtBQUVGLDRCQUFrQixRQUZoQjtBQUdGLHNCQUFZcUksUUFIVjtBQUlGLDZCQUFtQkQ7QUFKakIsU0FISDtBQVNIckcsYUFBSyxFQUFFLElBVEo7QUFVSEMsZ0JBQVEsRUFBRSxNQVZQO0FBVWU7QUFDbEJDLGVBQU8sRUFBRSxpQkFBVXpCLFFBQVYsRUFBb0I7QUFDekI7QUFDQTBCLGlCQUFPLENBQUNDLEdBQVIsQ0FBWTNCLFFBQVo7QUFDQXZDLFdBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWMsR0FBVixDQUFjLFNBQWQsRUFBeUIsR0FBekI7QUFDQWQsV0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQlEsSUFBbkI7QUFDSDtBQWhCRSxPQUFQO0FBa0JIO0FBNUJFLEdBQVA7QUE4QkgsQ0FwQ0Q7QUFxQ0FSLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCZ0QsRUFBckIsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBVUMsQ0FBVixFQUFhO0FBQzFDQSxHQUFDLENBQUNDLGNBQUY7QUFDQWxELEdBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWMsR0FBVixDQUFjLFNBQWQsRUFBeUIsS0FBekI7QUFDQWQsR0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQm9DLElBQW5CO0FBQ0EsTUFBSTJDLFVBQVUsR0FBR1AsYUFBYSxDQUFDdkMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFqQixDQUE5QjtBQUNBbkMsR0FBQyxDQUFDMEQsSUFBRixDQUFPO0FBQ0hDLE9BQUcsRUFBRSxvQkFERjtBQUVIQyxRQUFJLEVBQUUsTUFGSDtBQUdIN0IsUUFBSSxFQUFFO0FBQ0Ysb0JBQWNnRCxVQURaO0FBRUYsZUFBUzZFO0FBRlAsS0FISDtBQU9IOUYsU0FBSyxFQUFFLElBUEo7QUFRSEMsWUFBUSxFQUFFLE1BUlA7QUFRZTtBQUNsQkMsV0FBTyxFQUFFLGlCQUFVekIsUUFBVixFQUFvQjtBQUN6QjtBQUNBMEIsYUFBTyxDQUFDQyxHQUFSLENBQVkzQixRQUFaO0FBQ0FMLGNBQVEsQ0FBQ2lELE1BQVQ7QUFDSDtBQWJFLEdBQVA7QUFlSCxDQXBCRDtBQXFCQW5GLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCZ0QsRUFBdEIsQ0FBeUIsT0FBekIsRUFBa0Msc0JBQWxDLEVBQTBELFVBQVVDLENBQVYsRUFBYTtBQUNuRUEsR0FBQyxDQUFDQyxjQUFGO0FBQ0FsRCxHQUFDLENBQUMsTUFBRCxDQUFELENBQVVjLEdBQVYsQ0FBYyxTQUFkLEVBQXlCLEtBQXpCO0FBQ0FkLEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJvQyxJQUFuQjtBQUVBLE1BQUltSSxHQUFHLEdBQUd2SyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsQ0FBUixFQUFXLElBQVgsQ0FBVjtBQUNBQSxHQUFDLENBQUMwRCxJQUFGLENBQU87QUFDSEMsT0FBRyxFQUFFLHNCQURGO0FBRUhDLFFBQUksRUFBRSxNQUZIO0FBR0g3QixRQUFJLEVBQUU7QUFDRixhQUFPd0k7QUFETCxLQUhIO0FBTUh6RyxTQUFLLEVBQUUsSUFOSjtBQU9IQyxZQUFRLEVBQUUsTUFQUDtBQU9lO0FBQ2xCQyxXQUFPLEVBQUUsaUJBQVV6QixRQUFWLEVBQW9CO0FBQ3pCTixZQUFNLENBQUNDLFFBQVAsQ0FBZ0I4QyxJQUFoQixHQUF1QnpDLFFBQXZCO0FBQ0F2QyxPQUFDLENBQUMsTUFBRCxDQUFELENBQVVjLEdBQVYsQ0FBYyxTQUFkLEVBQXlCLEdBQXpCO0FBQ0FkLE9BQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJRLElBQW5CO0FBQ0F5RCxhQUFPLENBQUNDLEdBQVIsQ0FBWTNCLFFBQVo7QUFDSDtBQWJFLEdBQVA7QUFlSCxDQXJCRDtBQXNCQXZDLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CZ0QsRUFBcEIsQ0FBdUIsT0FBdkIsRUFBZ0MsNEJBQWhDLEVBQThELFlBQVk7QUFFdEUsTUFBSXdILE1BQU0sR0FBR2hHLGFBQWEsQ0FBQ3hFLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxDQUFSLEVBQVdrQixJQUFYLENBQWdCLE9BQWhCLENBQUQsQ0FBMUI7QUFFQWxCLEdBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWMsR0FBVixDQUFjLFNBQWQsRUFBeUIsS0FBekI7QUFDQWQsR0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQm9DLElBQW5CO0FBQ0FwQyxHQUFDLENBQUMwRCxJQUFGLENBQU87QUFDSEMsT0FBRyxFQUFFLHlCQUF5QjZHLE1BRDNCO0FBRUg1RyxRQUFJLEVBQUUsTUFGSDtBQUdIRSxTQUFLLEVBQUUsSUFISjtBQUlIQyxZQUFRLEVBQUUsTUFKUDtBQUllO0FBQ2xCQyxXQUFPLEVBQUUsaUJBQVV6QixRQUFWLEVBQW9CO0FBQ3pCTCxjQUFRLENBQUNpRCxNQUFUO0FBQ0FuRixPQUFDLENBQUMsTUFBTXdLLE1BQVAsQ0FBRCxDQUFnQjdKLE1BQWhCO0FBQ0FzRCxhQUFPLENBQUNDLEdBQVIsQ0FBWTNCLFFBQVo7QUFDSDtBQVRFLEdBQVA7QUFXSCxDQWpCRDtBQWtCQXZDLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCWSxLQUF0QixDQUE0QixZQUFZO0FBQ3BDWixHQUFDLENBQUMsV0FBRCxDQUFELENBQWVXLE1BQWY7QUFDQWlKLFdBQVMsR0FBRyxFQUFaO0FBQ0gsQ0FIRCxFLENBS0E7O0FBQ0E1SixDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQmdELEVBQXJCLENBQXdCLE9BQXhCLEVBQWlDLDRCQUFqQyxFQUErRCxZQUFZO0FBQ3ZFLE1BQUloRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsQ0FBUixFQUFXLElBQVgsRUFBaUIsQ0FBakIsS0FBdUIsR0FBM0IsRUFBZ0M7QUFDNUJ5SyxjQUFVLENBQUNqRyxhQUFhLENBQUN4RSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsQ0FBUixFQUFXLElBQVgsQ0FBRCxDQUFkLENBQVY7QUFDSDtBQUNKLENBSkQsRSxDQUtBOztBQUNBLFNBQVN3RSxhQUFULENBQXVCc0IsR0FBdkIsRUFBNEI7QUFDeEIsU0FBT0MsTUFBTSxDQUFDRCxHQUFHLENBQUNFLE9BQUosQ0FBWSxRQUFaLEVBQXNCLEVBQXRCLENBQUQsQ0FBYjtBQUNILEMsQ0FDRDs7O0FBQ0EsU0FBU3lFLFVBQVQsQ0FBb0I1RSxRQUFwQixFQUE4QjtBQUMxQitELFdBQVMsQ0FBQ2hFLE1BQVYsQ0FBaUJDLFFBQWpCLEVBQTJCLENBQTNCO0FBQ0E3RixHQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QlcsTUFBNUI7QUFDQWlKLFdBQVMsQ0FBQ25ILE9BQVYsQ0FBa0J1SCxTQUFsQjtBQUNIOztBQUVELFNBQVNBLFNBQVQsQ0FBbUJ0SCxPQUFuQixFQUE0QlksS0FBNUIsRUFBbUNnQyxLQUFuQyxFQUEwQztBQUN0QztBQUNBLE1BQUl0RixDQUFDLENBQUMsZUFBZXNELEtBQWhCLENBQUQsQ0FBd0JpQyxNQUE1QixFQUFvQztBQUNoQ3ZGLEtBQUMsQ0FBQyxlQUFlc0QsS0FBaEIsQ0FBRCxDQUF3QmtDLFdBQXhCLENBQW9DLCtEQUErRGxDLEtBQS9ELEdBQXVFLE9BQXZFLEdBQWlGWixPQUFPLENBQUNnSSxTQUF6RixHQUFxRyxTQUFyRyxHQUFpSGhJLE9BQU8sQ0FBQ2lJLFFBQXpILEdBQW9JLHlCQUFwSSxHQUFnS3JILEtBQWhLLEdBQXdLLHdEQUE1TTtBQUNILEdBRkQsTUFFTztBQUNIdEQsS0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIyQyxNQUFyQixDQUE0QiwrREFBK0RXLEtBQS9ELEdBQXVFLE9BQXZFLEdBQWlGWixPQUFPLENBQUNnSSxTQUF6RixHQUFxRyxTQUFyRyxHQUFpSGhJLE9BQU8sQ0FBQ2lJLFFBQXpILEdBQW9JLHlCQUFwSSxHQUFnS3JILEtBQWhLLEdBQXdLLHdEQUFwTTtBQUNIO0FBRUosQzs7Ozs7Ozs7Ozs7O0FDclREO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0F0RCxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQlEsSUFBckI7QUFDQVIsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJRLElBQXJCO0FBQ0FSLENBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCUSxJQUEzQjtBQUNBUixDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQlEsSUFBdEI7QUFDQVIsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQlEsSUFBbEI7QUFDQVIsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQlEsSUFBakI7QUFDQVIsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NRLElBQWhDO0FBQ0FSLENBQUMsQ0FBQyxrQ0FBRCxDQUFELENBQXNDWSxLQUF0QyxDQUE0QyxZQUFZO0FBQ3BEWixHQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ1EsSUFBaEM7QUFDSCxDQUZEOztBQUdBLEtBQUssSUFBSVksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUN4QnBCLEdBQUMsQ0FBQyxtQkFBbUJvQixDQUFwQixDQUFELENBQXdCTixHQUF4QixDQUE0QixTQUE1QixFQUF1QyxHQUF2QztBQUNIOztBQUNELElBQUlVLFdBQVcsR0FBRyxFQUFsQjtBQUFBLElBQ0lILFFBREo7QUFFQSxJQUFJdUosaUJBQWlCLEdBQUcsRUFBeEI7QUFBQSxJQUNJQyxXQUFXLEdBQUcsRUFEbEI7QUFBQSxJQUVJQyx1QkFBdUIsR0FBRyxFQUY5QjtBQUlBOUssQ0FBQyxDQUFDUyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzFCLE1BQUltSixVQUFVLEdBQUdyRixhQUFhLENBQUN2QyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWpCLENBQTlCOztBQUNBLE1BQUlGLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBaEIsSUFBNEIsOEJBQThCMEgsVUFBOUQsRUFBMEU7QUFFdEU3SixLQUFDLENBQUMsTUFBRCxDQUFELENBQVVjLEdBQVYsQ0FBYyxTQUFkLEVBQXlCLEtBQXpCO0FBQ0FkLEtBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJvQyxJQUFuQjtBQUNBcEMsS0FBQyxDQUFDcUMsSUFBRixDQUFPLHVCQUFQLEVBQWtDQyxJQUFsQyxDQUF1QyxVQUFVQyxRQUFWLEVBQW9CO0FBQ3ZEQSxjQUFRLENBQUNFLE9BQVQsQ0FBaUIsVUFBQUMsT0FBTyxFQUFJO0FBQ3hCO0FBQ0ExQyxTQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QjJDLE1BQXhCLENBQStCLElBQUlDLE1BQUosQ0FBV0YsT0FBTyxDQUFDRyxJQUFuQixFQUF5QkgsT0FBTyxDQUFDSSxFQUFqQyxDQUEvQjtBQUNBOUMsU0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0IyQyxNQUF4QixDQUErQixJQUFJQyxNQUFKLENBQVdGLE9BQU8sQ0FBQ0csSUFBbkIsRUFBeUJILE9BQU8sQ0FBQ0ksRUFBakMsQ0FBL0I7QUFDSCxPQUpEO0FBTUE5QyxPQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QmdDLEdBQXhCLENBQTRCLEVBQTVCO0FBQ0FoQyxPQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QmdDLEdBQXhCLENBQTRCLEVBQTVCO0FBQ0gsS0FURCxFQVNHa0QsSUFUSCxDQVNRLFlBQVk7QUFDaEJsRixPQUFDLENBQUMsTUFBRCxDQUFELENBQVVjLEdBQVYsQ0FBYyxTQUFkLEVBQXlCLEdBQXpCO0FBQ0FkLE9BQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJRLElBQW5CO0FBQ0gsS0FaRDtBQWFIOztBQUFBO0FBQ0RSLEdBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDWSxLQUFsQyxDQUF3QyxZQUFZO0FBQ2hEWixLQUFDLENBQUMsTUFBRCxDQUFELENBQVVjLEdBQVYsQ0FBYyxTQUFkLEVBQXlCLEdBQXpCO0FBQ0FkLEtBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JXLE1BQWxCO0FBQ0FYLEtBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDUSxJQUFoQztBQUNBb0sscUJBQWlCLEdBQUcsRUFBcEI7QUFDSCxHQUxEO0FBTUE1SyxHQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ1ksS0FBaEMsQ0FBc0MsWUFBWTtBQUM5Q1osS0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVYyxHQUFWLENBQWMsU0FBZCxFQUF5QixHQUF6QjtBQUNBZCxLQUFDLENBQUMsY0FBRCxDQUFELENBQWtCVyxNQUFsQjtBQUNBWCxLQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ1EsSUFBaEM7QUFDQW9LLHFCQUFpQixHQUFHLEVBQXBCO0FBQ0FDLGVBQVcsR0FBRyxFQUFkO0FBQ0gsR0FORDtBQU9ILENBakNEO0FBbUNBN0ssQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQm9DLElBQW5CO0FBQ0FwQyxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3Qm9DLElBQXhCO0FBRUEsSUFBSTJJLGNBQWMsR0FBRyxFQUFyQjtBQUFBLElBQ0lDLFVBQVUsR0FBRyxLQURqQjtBQUFBLElBRUlDLFlBQVksR0FBRyxLQUZuQjtBQUFBLElBR0lDLFdBQVcsR0FBRyxLQUhsQjtBQUtBbEwsQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJZLEtBQTdCLENBQW1DLFlBQVk7QUFDM0MsTUFBSXNLLFdBQVcsSUFBSSxJQUFuQixFQUF5QjtBQUNyQmxMLEtBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCZSxRQUE5QixDQUF1QyxhQUF2QztBQUNBZixLQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QlEsSUFBOUI7QUFDSCxHQUhELE1BR087QUFDSFIsS0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJRLElBQTlCO0FBQ0g7O0FBQ0R3SyxZQUFVLEdBQUcsS0FBYjtBQUNILENBUkQ7QUFTQWhMLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCWSxLQUE3QixDQUFtQyxZQUFZO0FBQzNDWixHQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QlEsSUFBOUI7QUFDQTBLLGFBQVcsR0FBRyxLQUFkO0FBQ0gsQ0FIRDtBQUlBbEwsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JZLEtBQXBCLENBQTBCLFlBQVk7QUFDbENvSyxZQUFVLEdBQUcsSUFBYjtBQUNBQyxjQUFZLEdBQUcsS0FBZixDQUZrQyxDQUdsQzs7QUFDQWpMLEdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CZSxRQUFwQixDQUE2QixVQUE3QjtBQUNBZixHQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQmdCLFdBQXBCLENBQWdDLFVBQWhDO0FBQ0FoQixHQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QjhFLElBQXZCLENBQTRCLGVBQTVCO0FBQ0E5RSxHQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QmdCLFdBQTlCLENBQTBDLGFBQTFDO0FBQ0FoQixHQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qm9DLElBQTlCOztBQUNBLE1BQUk4SSxXQUFXLElBQUksS0FBbkIsRUFBMEI7QUFDdEJsTCxLQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QlEsSUFBOUI7QUFFSCxHQUhELE1BR087QUFFSFIsS0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJnQixXQUE5QixDQUEwQyxhQUExQztBQUNIO0FBR0osQ0FsQkQ7QUFtQkFoQixDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQlksS0FBcEIsQ0FBMEIsWUFBWTtBQUNsQztBQUNBb0ssWUFBVSxHQUFHLEtBQWI7QUFDQUUsYUFBVyxHQUFHLEtBQWQ7QUFDQUQsY0FBWSxHQUFHLElBQWY7QUFDQWpMLEdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CZSxRQUFwQixDQUE2QixVQUE3QjtBQUNBZixHQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQmdCLFdBQXBCLENBQWdDLFVBQWhDO0FBQ0FoQixHQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQmdCLFdBQXBCLENBQWdDLFVBQWhDO0FBQ0FoQixHQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QjhFLElBQXZCLENBQTRCLGdCQUE1QjtBQUNBOUUsR0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJRLElBQTlCO0FBQ0FSLEdBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCb0MsSUFBOUI7QUFDQXBDLEdBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCZSxRQUE5QixDQUF1QyxhQUF2QztBQUVILENBYkQ7QUFjQWYsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JZLEtBQXBCLENBQTBCLFlBQVk7QUFDbEM7QUFDQVosR0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JlLFFBQXBCLENBQTZCLFVBQTdCO0FBQ0FtSyxhQUFXLEdBQUcsSUFBZDtBQUNBRCxjQUFZLEdBQUcsS0FBZjtBQUNBakwsR0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUI4RSxJQUF2QixDQUE0QixnQkFBNUI7O0FBQ0EsTUFBSWtHLFVBQVUsSUFBSSxJQUFkLElBQXNCQyxZQUFZLElBQUksS0FBMUMsRUFBaUQ7QUFDN0NqTCxLQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QmdCLFdBQTlCLENBQTBDLGFBQTFDO0FBQ0FoQixLQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QmdCLFdBQTlCLENBQTBDLGFBQTFDO0FBQ0FoQixLQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qm9DLElBQTlCO0FBQ0gsR0FKRCxNQUlPLElBQUk4SSxXQUFXLElBQUksSUFBZixJQUF1QkYsVUFBVSxJQUFJLEtBQXpDLEVBQWdEO0FBQ25EaEwsS0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJnQixXQUE5QixDQUEwQyxhQUExQztBQUNBaEIsS0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJRLElBQTlCO0FBQ0FSLEtBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCZSxRQUE5QixDQUF1QyxhQUF2QztBQUNBZixLQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qm9DLElBQTlCO0FBQ0g7O0FBRURwQyxHQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQmdCLFdBQXBCLENBQWdDLFVBQWhDO0FBQ0gsQ0FsQkQ7QUFxQkFoQixDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CWSxLQUFuQixDQUF5QixZQUFZO0FBQ2pDb0ssWUFBVSxHQUFHLElBQWI7O0FBQ0EsTUFBSUUsV0FBVyxJQUFJLElBQW5CLEVBQXlCO0FBQ3JCbEwsS0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJnQixXQUE5QixDQUEwQyxhQUExQztBQUNBaEIsS0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJvQyxJQUE5QjtBQUNILEdBSEQsTUFHTztBQUNIcEMsS0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJvQyxJQUE5QjtBQUNIOztBQUNEcEMsR0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUI4RSxJQUF2QixDQUE0QixlQUE1QjtBQUNBOUUsR0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQmUsUUFBbkIsQ0FBNEIsVUFBNUI7QUFDQWYsR0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQmdCLFdBQW5CLENBQStCLFVBQS9CO0FBQ0FoQixHQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQmMsR0FBckIsQ0FBeUIsU0FBekIsRUFBb0MsR0FBcEM7QUFDQWQsR0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJjLEdBQXJCLENBQXlCLFNBQXpCLEVBQW9DLEdBQXBDO0FBQ0gsQ0FiRDtBQWNBZCxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CWSxLQUFuQixDQUF5QixZQUFZO0FBQ2pDc0ssYUFBVyxHQUFHLElBQWQ7QUFDQWxMLEdBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCOEUsSUFBdkIsQ0FBNEIsZ0JBQTVCO0FBQ0E5RSxHQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQmMsR0FBckIsQ0FBeUIsU0FBekIsRUFBb0MsR0FBcEM7QUFDQWQsR0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJjLEdBQXJCLENBQXlCLFNBQXpCLEVBQW9DLEdBQXBDO0FBQ0FkLEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJlLFFBQW5CLENBQTRCLFVBQTVCO0FBQ0FmLEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJnQixXQUFuQixDQUErQixVQUEvQjs7QUFDQSxNQUFJZ0ssVUFBVSxJQUFJLElBQWxCLEVBQXdCO0FBQ3BCaEwsS0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJnQixXQUE5QixDQUEwQyxhQUExQztBQUVBaEIsS0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJvQyxJQUE5QjtBQUNILEdBSkQsTUFJTztBQUNIcEMsS0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJlLFFBQTlCLENBQXVDLGFBQXZDO0FBQ0FmLEtBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCb0MsSUFBOUI7QUFFSDtBQUVKLENBakJELEUsQ0FtQkE7O0FBQ0FwQyxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQlksS0FBckIsQ0FBMkIsVUFBVXFDLENBQVYsRUFBYTtBQUVwQ0EsR0FBQyxDQUFDQyxjQUFGO0FBQ0FsRCxHQUFDLENBQUMsTUFBRCxDQUFELENBQVVjLEdBQVYsQ0FBYyxTQUFkLEVBQXlCLEtBQXpCO0FBQ0FkLEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJvQyxJQUFuQjs7QUFDQSxNQUFJNkksWUFBSixFQUFrQjtBQUNkakwsS0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JjLEdBQXBCLENBQXdCLFNBQXhCLEVBQW1DLEdBQW5DO0FBQ0FkLEtBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CYyxHQUFwQixDQUF3QixTQUF4QixFQUFtQyxHQUFuQztBQUNILEdBSEQsTUFHTyxJQUFJa0ssVUFBSixFQUFnQjtBQUNuQmhMLEtBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CYyxHQUFwQixDQUF3QixTQUF4QixFQUFtQyxHQUFuQztBQUNILEdBVm1DLENBV3BDOzs7QUFDQSxNQUFJaUUsVUFBVSxHQUFHL0UsQ0FBQyxDQUFDLG9DQUFELENBQUQsQ0FBd0NnQyxHQUF4QyxFQUFqQjtBQUNBaEMsR0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkI4SixJQUEzQixDQUFnQzlKLENBQUMsQ0FBQyxvQ0FBRCxDQUFELENBQXdDOEUsSUFBeEMsRUFBaEMsRUFib0MsQ0FjcEM7O0FBQ0E5RSxHQUFDLENBQUMwRCxJQUFGLENBQU87QUFDSEMsT0FBRyxFQUFFLDhCQUE4Qm9CLFVBRGhDO0FBRUhuQixRQUFJLEVBQUUsTUFGSDtBQUdIN0IsUUFBSSxFQUFFLEVBSEg7QUFJSCtCLFNBQUssRUFBRSxJQUpKO0FBS0hDLFlBQVEsRUFBRSxNQUxQO0FBS2U7QUFDbEJDLFdBQU8sRUFBRSxpQkFBVXpCLFFBQVYsRUFBb0I7QUFDekJ2QyxPQUFDLENBQUMsZUFBRCxDQUFELENBQW1CUSxJQUFuQjtBQUNBUixPQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ29DLElBQWhDO0FBQ0FwQyxPQUFDLENBQUMsTUFBRCxDQUFELENBQVVjLEdBQVYsQ0FBYyxTQUFkLEVBQXlCLEtBQXpCO0FBQ0EsVUFBSUssVUFBVSxHQUFHcUYsSUFBSSxDQUFDQyxLQUFMLENBQVdsRSxRQUFRLENBQUM0SSxVQUFwQixDQUFqQjtBQUVBaEssZ0JBQVUsQ0FBQ3NCLE9BQVgsQ0FBbUIySSxpQkFBbkI7QUFDQWpLLGdCQUFVLENBQUNzQixPQUFYLENBQW1CNEksWUFBbkI7QUFDQWxLLGdCQUFVLENBQUNzQixPQUFYLENBQW1CaUMsa0JBQW5CO0FBQ0gsS0FmRTtBQWdCSFAsU0FBSyxFQUFFLGVBQVVDLEdBQVYsRUFBZUMsVUFBZixFQUEyQkMsV0FBM0IsRUFBd0M7QUFDMUMsNEJBQUQ7QUFDSDtBQWxCRSxHQUFQO0FBcUJILENBcENEO0FBc0NBdEUsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJZLEtBQXJCLENBQTJCLFVBQVVxQyxDQUFWLEVBQWE7QUFDcENBLEdBQUMsQ0FBQ0MsY0FBRjtBQUNBbEQsR0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JjLEdBQXBCLENBQXdCLFNBQXhCLEVBQW1DLEdBQW5DLEVBRm9DLENBSXBDOztBQUNBLE1BQUl3SyxlQUFlLEdBQUd0TCxDQUFDLENBQUMsb0NBQUQsQ0FBRCxDQUF3Q2dDLEdBQXhDLEVBQXRCO0FBQ0FpQyxTQUFPLENBQUNDLEdBQVIsQ0FBWW9ILGVBQVosRUFOb0MsQ0FPcEM7QUFFSCxDQVRELEUsQ0FXQTs7QUFDQXRMLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCZ0QsRUFBdEIsQ0FBeUIsT0FBekIsRUFBa0Msa0RBQWxDLEVBQXNGLFVBQVVDLENBQVYsRUFBYTtBQUMvRkEsR0FBQyxDQUFDQyxjQUFGO0FBQ0FsRCxHQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ1EsSUFBaEM7QUFDQVIsR0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQmMsR0FBakIsQ0FBcUIsU0FBckIsRUFBZ0MsS0FBaEM7QUFDQWQsR0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQm9DLElBQW5CO0FBRUFaLGFBQVcsR0FBR2dELGFBQWEsQ0FBQ3hFLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxDQUFSLEVBQVcsSUFBWCxDQUFELENBQTNCO0FBQ0EsTUFBSW1ELEtBQUssR0FBR25ELENBQUMsQ0FBQyxnQ0FBRCxDQUFiO0FBQ0EsTUFBSStCLElBQUksR0FBRyxFQUFYO0FBRUEvQixHQUFDLENBQUMwRCxJQUFGLENBQU87QUFDSEMsT0FBRyxFQUFFLHFDQUFxQ25DLFdBRHZDO0FBRUhvQyxRQUFJLEVBQUUsTUFGSDtBQUdIN0IsUUFBSSxFQUFFLEVBSEg7QUFNSCtCLFNBQUssRUFBRSxJQU5KO0FBT0hDLFlBQVEsRUFBRSxNQVBQO0FBT2U7QUFDbEJDLFdBQU8sRUFBRSxpQkFBVXpCLFFBQVYsRUFBb0I7QUFFekJ2QyxPQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQmdDLEdBQXRCLENBQTBCTyxRQUFRLENBQUMsTUFBRCxDQUFSLENBQWlCLElBQWpCLENBQTFCO0FBQ0FSLFVBQUksQ0FBQy9CLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCa0IsSUFBdEIsQ0FBMkIsTUFBM0IsQ0FBRCxDQUFKLEdBQTJDbEIsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JnQyxHQUF0QixFQUEzQztBQUVBaEMsT0FBQyxDQUFDcUMsSUFBRixDQUFPLHNCQUFQLEVBQStCTixJQUEvQixFQUFxQ08sSUFBckMsQ0FBMEMsVUFBVUMsUUFBVixFQUFvQjtBQUMxRDtBQUNBdkMsU0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJ3QyxLQUEzQjtBQUNBRCxnQkFBUSxDQUFDRSxPQUFULENBQWlCLFVBQUFDLE9BQU8sRUFBSTtBQUN4QjtBQUNBMUMsV0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkIyQyxNQUEzQixDQUFrQyxJQUFJQyxNQUFKLENBQVdGLE9BQU8sQ0FBQ0csSUFBbkIsRUFBeUJILE9BQU8sQ0FBQ0ksRUFBakMsQ0FBbEM7QUFDSCxTQUhEO0FBS0gsT0FSRCxFQVFHb0MsSUFSSCxDQVFRLFlBQVk7QUFFaEJsRixTQUFDLENBQUMsYUFBRCxDQUFELENBQWlCYyxHQUFqQixDQUFxQixTQUFyQixFQUFnQyxLQUFoQztBQUNBZCxTQUFDLENBQUMsZUFBRCxDQUFELENBQW1Cb0MsSUFBbkIsR0FIZ0IsQ0FLaEI7O0FBQ0FlLGFBQUssQ0FBQ2hELElBQU4sQ0FBVyxRQUFYLEVBQXFCa0QsSUFBckIsQ0FBMEIsVUFBVUMsS0FBVixFQUFpQkMsS0FBakIsRUFBd0I7QUFDOUMsY0FBSUMsSUFBSSxHQUFHeEQsQ0FBQyxDQUFDLElBQUQsQ0FBWjs7QUFDQSxrQkFBUXVELEtBQUssQ0FBQ1QsRUFBZDtBQUNJLGlCQUFLLGlCQUFMO0FBQ0k7O0FBQ0osaUJBQUssc0JBQUw7QUFDSSxrQkFBSVAsUUFBUSxDQUFDLFVBQUQsQ0FBUixJQUF3QixJQUE1QixFQUFrQztBQUM5QnZDLGlCQUFDLENBQUMsTUFBTXVELEtBQUssQ0FBQ1QsRUFBYixDQUFELENBQWtCZCxHQUFsQixDQUFzQk8sUUFBUSxDQUFDLFVBQUQsQ0FBUixDQUFxQixJQUFyQixDQUF0QjtBQUNIOztBQUNEOztBQUNKLGlCQUFLLHNCQUFMO0FBQ0l2QyxlQUFDLENBQUMsTUFBTXVELEtBQUssQ0FBQ1QsRUFBYixDQUFELENBQWtCZCxHQUFsQixDQUFzQk8sUUFBUSxDQUFDLFVBQUQsQ0FBOUI7QUFDQTs7QUFDSixpQkFBSyx1QkFBTDtBQUNJdkMsZUFBQyxDQUFDLE1BQU11RCxLQUFLLENBQUNULEVBQWIsQ0FBRCxDQUFrQmQsR0FBbEIsQ0FBc0JPLFFBQVEsQ0FBQyxXQUFELENBQTlCO0FBQ0E7O0FBQ0osaUJBQUssc0JBQUw7QUFDSXZDLGVBQUMsQ0FBQyxNQUFNdUQsS0FBSyxDQUFDVCxFQUFiLENBQUQsQ0FBa0JkLEdBQWxCLENBQXNCTyxRQUFRLENBQUMsVUFBRCxDQUE5QjtBQUNBO0FBaEJSO0FBa0JILFNBcEJEO0FBcUJBdkMsU0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQlEsSUFBbkI7QUFDQVIsU0FBQyxDQUFDLHFDQUFELENBQUQsQ0FBeUNvQyxJQUF6QztBQUNILE9BckNEO0FBc0NILEtBbkRFO0FBb0RIK0IsU0FBSyxFQUFFLGVBQVVDLEdBQVYsRUFBZUMsVUFBZixFQUEyQkMsV0FBM0IsRUFBd0M7QUFDMUMsNEJBQUQ7QUFDSDtBQXRERSxHQUFQO0FBd0RILENBbEVELEUsQ0FtRUE7O0FBQ0F0RSxDQUFDLENBQUMsc0NBQUQsQ0FBRCxDQUEwQ1ksS0FBMUMsQ0FBZ0QsWUFBWTtBQUN4RHFDLEdBQUMsQ0FBQ0MsY0FBRjtBQUNBbEQsR0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVYyxHQUFWLENBQWMsU0FBZCxFQUF5QixLQUF6QjtBQUNBZCxHQUFDLENBQUMsZUFBRCxDQUFELENBQW1Cb0MsSUFBbkI7QUFDQSxNQUFJZSxLQUFLLEdBQUduRCxDQUFDLENBQUMsSUFBRCxDQUFiO0FBQ0EsTUFBSStCLElBQUksR0FBRyxFQUFYO0FBRUFvQixPQUFLLENBQUNoRCxJQUFOLENBQVcsUUFBWCxFQUFxQmtELElBQXJCLENBQTBCLFVBQVVDLEtBQVYsRUFBaUJDLEtBQWpCLEVBQXdCO0FBQzlDLFFBQUlDLElBQUksR0FBR3hELENBQUMsQ0FBQyxJQUFELENBQVo7QUFBQSxRQUNJNkMsSUFBSSxHQUFHVyxJQUFJLENBQUN0QyxJQUFMLENBQVUsTUFBVixDQURYO0FBQUEsUUFFSXFDLEtBQUssR0FBR0MsSUFBSSxDQUFDeEIsR0FBTCxFQUZaO0FBR0FELFFBQUksQ0FBQ2MsSUFBRCxDQUFKLEdBQWFVLEtBQWI7QUFDSCxHQUxEO0FBTUFVLFNBQU8sQ0FBQ0MsR0FBUixDQUFZbkMsSUFBWjtBQUVILENBZkQsRSxDQWtCQTs7QUFDQS9CLENBQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DZ0QsRUFBcEMsQ0FBdUMsUUFBdkMsRUFBaUQsVUFBVUMsQ0FBVixFQUFhO0FBRTFEQSxHQUFDLENBQUNDLGNBQUY7QUFDQWxELEdBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWMsR0FBVixDQUFjLFNBQWQsRUFBeUIsS0FBekI7QUFDQWQsR0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQm9DLElBQW5CO0FBQ0EsTUFBSWUsS0FBSyxHQUFHbkQsQ0FBQyxDQUFDLElBQUQsQ0FBYjtBQUNBLE1BQUkrQixJQUFJLEdBQUcsRUFBWDtBQUVBb0IsT0FBSyxDQUFDaEQsSUFBTixDQUFXLFFBQVgsRUFBcUJrRCxJQUFyQixDQUEwQixVQUFVQyxLQUFWLEVBQWlCQyxLQUFqQixFQUF3QjtBQUM5QyxRQUFJQyxJQUFJLEdBQUd4RCxDQUFDLENBQUMsSUFBRCxDQUFaO0FBQUEsUUFDSTZDLElBQUksR0FBR1csSUFBSSxDQUFDdEMsSUFBTCxDQUFVLE1BQVYsQ0FEWDtBQUFBLFFBRUlxQyxLQUFLLEdBQUdDLElBQUksQ0FBQ3hCLEdBQUwsRUFGWjtBQUlBRCxRQUFJLENBQUNjLElBQUQsQ0FBSixHQUFhVSxLQUFiO0FBQ0gsR0FORDtBQVFBdkQsR0FBQyxDQUFDMEQsSUFBRixDQUFPO0FBQ0hDLE9BQUcsRUFBRSxxQ0FBcUNuQyxXQUR2QztBQUVIb0MsUUFBSSxFQUFFVCxLQUFLLENBQUNqQyxJQUFOLENBQVcsUUFBWCxDQUZIO0FBR0hhLFFBQUksRUFBRTtBQUNGMEMsZ0JBQVUsRUFBRTFDO0FBRFYsS0FISDtBQU1IK0IsU0FBSyxFQUFFLElBTko7QUFPSEMsWUFBUSxFQUFFLE1BUFA7QUFPZTtBQUNsQkMsV0FBTyxFQUFFLGlCQUFVekIsUUFBVixFQUFvQjtBQUN6QnZDLE9BQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWMsR0FBVixDQUFjLFNBQWQsRUFBeUIsR0FBekI7QUFDQWQsT0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQlEsSUFBbkI7QUFDQVIsT0FBQyxDQUFDLHFDQUFELENBQUQsQ0FBeUNRLElBQXpDO0FBQ0FSLE9BQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDb0MsSUFBaEM7QUFDQXBDLE9BQUMsQ0FBQywwQkFBMEJ3QixXQUEzQixDQUFELENBQXlDZ0UsV0FBekMsQ0FBcUQsUUFBUWpELFFBQVEsQ0FBQ2dKLFFBQWpCLEdBQTRCLE1BQWpGO0FBQ0FULDZCQUF1QixDQUFDckgsSUFBeEIsQ0FBNkJsQixRQUE3QjtBQUNBcUksdUJBQWlCO0FBQ2pCM0csYUFBTyxDQUFDQyxHQUFSLENBQVkzQixRQUFaO0FBQ0EwQixhQUFPLENBQUNDLEdBQVIsQ0FBWTBHLGlCQUFaO0FBQ0gsS0FsQkU7QUFtQkh6RyxTQUFLLEVBQUUsZUFBVUMsR0FBVixFQUFlQyxVQUFmLEVBQTJCQyxXQUEzQixFQUF3QztBQUMxQyw0QkFBRDtBQUNIO0FBckJFLEdBQVA7QUF3QkgsQ0F4Q0QsRSxDQXlDQTs7QUFDQXRFLENBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCWSxLQUEzQixDQUFpQyxZQUFZO0FBQ3pDcUQsU0FBTyxDQUFDQyxHQUFSLENBQVkwRyxpQkFBWjtBQUNBM0csU0FBTyxDQUFDQyxHQUFSLENBQVkyRyxXQUFaOztBQUVBLE1BQUlELGlCQUFpQixJQUFJQyxXQUF6QixFQUFzQztBQUNsQ2xHLFNBQUssQ0FBQyxpREFBRCxDQUFMO0FBQ0gsR0FGRCxNQUVPO0FBQ0gsUUFBSTZHLE1BQU0sR0FBR3hMLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JnQyxHQUFsQixFQUFiO0FBQ0FpQyxXQUFPLENBQUNDLEdBQVIsQ0FBWXNILE1BQVo7QUFDQSxRQUFJQyxRQUFRLEdBQUdqSCxhQUFhLENBQUN2QyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWpCLENBQTVCO0FBQ0EsUUFBSXVKLFdBQVcsR0FBRzFMLENBQUMsQ0FBQyxvQ0FBRCxDQUFELENBQXdDZ0MsR0FBeEMsRUFBbEI7QUFDQWhDLEtBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWMsR0FBVixDQUFjLFNBQWQsRUFBeUIsS0FBekI7QUFDQWQsS0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQm9DLElBQW5CO0FBQ0FwQyxLQUFDLENBQUMwRCxJQUFGLENBQU87QUFDSEMsU0FBRyxFQUFFLCtCQURGO0FBRUhDLFVBQUksRUFBRSxNQUZIO0FBR0g3QixVQUFJLEVBQUU7QUFDRjBKLGdCQUFRLEVBQUVBLFFBRFI7QUFFRjVHLGdCQUFRLEVBQUU2RyxXQUZSO0FBR0ZDLGtCQUFVLEVBQUViLHVCQUhWO0FBSUZVLGNBQU0sRUFBRUE7QUFKTixPQUhIO0FBU0gxSCxXQUFLLEVBQUUsSUFUSjtBQVVIQyxjQUFRLEVBQUUsTUFWUDtBQVVlO0FBQ2xCQyxhQUFPLEVBQUUsaUJBQVV6QixRQUFWLEVBQW9CO0FBQ3pCMEIsZUFBTyxDQUFDQyxHQUFSLENBQVkzQixRQUFaO0FBQ0FOLGNBQU0sQ0FBQ0MsUUFBUCxDQUFnQjhDLElBQWhCLEdBQXVCLDRCQUE0QnpDLFFBQVEsQ0FBQ3FKLFVBQTVEO0FBQ0E1TCxTQUFDLENBQUMsTUFBRCxDQUFELENBQVVjLEdBQVYsQ0FBYyxTQUFkLEVBQXlCLEdBQXpCO0FBQ0FkLFNBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJRLElBQW5CO0FBRUgsT0FqQkU7QUFrQkgyRCxXQUFLLEVBQUUsZUFBVUMsR0FBVixFQUFlQyxVQUFmLEVBQTJCQyxXQUEzQixFQUF3QztBQUMxQyw4QkFBRDtBQUNIO0FBcEJFLEtBQVA7QUFzQkg7QUFFSixDQXJDRCxFLENBc0NBOztBQUNBdEUsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ0QsRUFBWCxDQUFjLE9BQWQsRUFBdUIsNkJBQXZCLEVBQXNELFVBQVVDLENBQVYsRUFBYTtBQUMvREEsR0FBQyxDQUFDQyxjQUFGO0FBQ0FsRCxHQUFDLENBQUMsYUFBRCxDQUFELENBQWlCYyxHQUFqQixDQUFxQixTQUFyQixFQUFnQyxLQUFoQztBQUNBZCxHQUFDLENBQUMsZUFBRCxDQUFELENBQW1Cb0MsSUFBbkI7QUFFQVosYUFBVyxHQUFHZ0QsYUFBYSxDQUFDeEUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLENBQVIsRUFBVyxXQUFYLEVBQXdCLENBQXhCLENBQUQsQ0FBM0I7QUFDQSxNQUFJbUQsS0FBSyxHQUFHbkQsQ0FBQyxDQUFDLGdDQUFELENBQWI7QUFDQSxNQUFJK0IsSUFBSSxHQUFHLEVBQVg7QUFDQS9CLEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJvQyxJQUFuQjtBQUNBcEMsR0FBQyxDQUFDMEQsSUFBRixDQUFPO0FBQ0hDLE9BQUcsRUFBRSxxQ0FBcUNuQyxXQUR2QztBQUVIb0MsUUFBSSxFQUFFLE1BRkg7QUFHSDdCLFFBQUksRUFBRSxFQUhIO0FBSUgrQixTQUFLLEVBQUUsSUFKSjtBQUtIQyxZQUFRLEVBQUUsTUFMUDtBQUtlO0FBQ2xCQyxXQUFPLEVBQUUsaUJBQVV6QixRQUFWLEVBQW9CO0FBRXpCdkMsT0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JnQyxHQUF0QixDQUEwQk8sUUFBUSxDQUFDLE1BQUQsQ0FBUixDQUFpQixJQUFqQixDQUExQjtBQUNBUixVQUFJLENBQUMvQixDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQmtCLElBQXRCLENBQTJCLE1BQTNCLENBQUQsQ0FBSixHQUEyQ2xCLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCZ0MsR0FBdEIsRUFBM0M7QUFFQWhDLE9BQUMsQ0FBQ3FDLElBQUYsQ0FBTyxzQkFBUCxFQUErQk4sSUFBL0IsRUFBcUNPLElBQXJDLENBQTBDLFVBQVVDLFFBQVYsRUFBb0I7QUFDMUQ7QUFDQXZDLFNBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCd0MsS0FBM0I7QUFDQUQsZ0JBQVEsQ0FBQ0UsT0FBVCxDQUFpQixVQUFBQyxPQUFPLEVBQUk7QUFDeEI7QUFDQTFDLFdBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCMkMsTUFBM0IsQ0FBa0MsSUFBSUMsTUFBSixDQUFXRixPQUFPLENBQUNHLElBQW5CLEVBQXlCSCxPQUFPLENBQUNJLEVBQWpDLENBQWxDO0FBQ0gsU0FIRDtBQUtILE9BUkQsRUFRR29DLElBUkgsQ0FRUSxZQUFZO0FBRWhCO0FBQ0EvQixhQUFLLENBQUNoRCxJQUFOLENBQVcsUUFBWCxFQUFxQmtELElBQXJCLENBQTBCLFVBQVVDLEtBQVYsRUFBaUJDLEtBQWpCLEVBQXdCO0FBQzlDLGNBQUlDLElBQUksR0FBR3hELENBQUMsQ0FBQyxJQUFELENBQVo7O0FBQ0Esa0JBQVF1RCxLQUFLLENBQUNULEVBQWQ7QUFDSSxpQkFBSyxpQkFBTDtBQUNJOztBQUNKLGlCQUFLLHNCQUFMO0FBQ0ksa0JBQUlQLFFBQVEsQ0FBQyxVQUFELENBQVIsSUFBd0IsSUFBNUIsRUFBa0M7QUFDOUJ2QyxpQkFBQyxDQUFDLE1BQU11RCxLQUFLLENBQUNULEVBQWIsQ0FBRCxDQUFrQmQsR0FBbEIsQ0FBc0JPLFFBQVEsQ0FBQyxVQUFELENBQVIsQ0FBcUIsSUFBckIsQ0FBdEI7QUFDSDs7QUFDRDs7QUFDSixpQkFBSyxzQkFBTDtBQUNJdkMsZUFBQyxDQUFDLE1BQU11RCxLQUFLLENBQUNULEVBQWIsQ0FBRCxDQUFrQmQsR0FBbEIsQ0FBc0JPLFFBQVEsQ0FBQyxVQUFELENBQTlCO0FBQ0E7O0FBQ0osaUJBQUssdUJBQUw7QUFDSXZDLGVBQUMsQ0FBQyxNQUFNdUQsS0FBSyxDQUFDVCxFQUFiLENBQUQsQ0FBa0JkLEdBQWxCLENBQXNCTyxRQUFRLENBQUMsV0FBRCxDQUE5QjtBQUNBOztBQUNKLGlCQUFLLHNCQUFMO0FBQ0l2QyxlQUFDLENBQUMsTUFBTXVELEtBQUssQ0FBQ1QsRUFBYixDQUFELENBQWtCZCxHQUFsQixDQUFzQk8sUUFBUSxDQUFDLFVBQUQsQ0FBOUI7QUFDQTtBQWhCUjtBQWtCSCxTQXBCRDtBQXFCQXZDLFNBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJRLElBQW5CO0FBQ0FSLFNBQUMsQ0FBQyxxQ0FBRCxDQUFELENBQXlDb0MsSUFBekM7QUFDSCxPQWxDRDtBQW1DSCxLQTlDRTtBQStDSCtCLFNBQUssRUFBRSxlQUFVQyxHQUFWLEVBQWVDLFVBQWYsRUFBMkJDLFdBQTNCLEVBQXdDO0FBQzFDLDRCQUFEO0FBQ0g7QUFqREUsR0FBUDtBQW1ESCxDQTVERCxFLENBNkRBOztBQUNBdEUsQ0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0NnRCxFQUFwQyxDQUF1QyxRQUF2QyxFQUFpRCxVQUFVQyxDQUFWLEVBQWE7QUFDMURBLEdBQUMsQ0FBQ0MsY0FBRjtBQUNBbEQsR0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQmMsR0FBakIsQ0FBcUIsU0FBckIsRUFBZ0MsS0FBaEM7QUFDQWQsR0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJjLEdBQTNCLENBQStCLFNBQS9CLEVBQTBDLEtBQTFDO0FBRUFkLEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJvQyxJQUFuQjtBQUNBLE1BQUllLEtBQUssR0FBR25ELENBQUMsQ0FBQyxJQUFELENBQWI7QUFDQSxNQUFJK0IsSUFBSSxHQUFHLEVBQVg7QUFBQSxNQUNJcUIsTUFESixDQVAwRCxDQVMxRDs7QUFDQUQsT0FBSyxDQUFDaEQsSUFBTixDQUFXLFFBQVgsRUFBcUJrRCxJQUFyQixDQUEwQixVQUFVQyxLQUFWLEVBQWlCQyxLQUFqQixFQUF3QjtBQUM5QyxRQUFJQyxJQUFJLEdBQUd4RCxDQUFDLENBQUMsSUFBRCxDQUFaO0FBQUEsUUFDSTZDLElBQUksR0FBR1csSUFBSSxDQUFDdEMsSUFBTCxDQUFVLE1BQVYsQ0FEWDs7QUFHQSxRQUFJMkIsSUFBSSxJQUFLLG9CQUFULElBQWtDQSxJQUFJLElBQUssdUJBQS9DLEVBQXlFO0FBQ3JFVSxXQUFLLEdBQUdDLElBQUksQ0FBQ3hCLEdBQUwsRUFBUjtBQUNBRCxVQUFJLENBQUNjLElBQUQsQ0FBSixHQUFhVSxLQUFiO0FBQ0g7QUFDSixHQVJEO0FBU0F2RCxHQUFDLENBQUMwRCxJQUFGLENBQU87QUFDSEMsT0FBRyxFQUFFLHFDQUFxQ25DLFdBRHZDO0FBRUhvQyxRQUFJLEVBQUUsTUFGSDtBQUdIN0IsUUFBSSxFQUFFO0FBQ0Ysb0JBQWNBLElBRFo7QUFFRixvQ0FBOEIsSUFGNUI7QUFHRixxQkFBZVA7QUFIYixLQUhIO0FBUUhzQyxTQUFLLEVBQUUsSUFSSjtBQVNIQyxZQUFRLEVBQUUsTUFUUDtBQVNlO0FBQ2xCQyxXQUFPLEVBQUUsaUJBQVV6QixRQUFWLEVBQW9CO0FBQ3pCTCxjQUFRLENBQUNpRCxNQUFUO0FBQ0FuRixPQUFDLENBQUMsZUFBRCxDQUFELENBQW1CUSxJQUFuQjtBQUNBUixPQUFDLENBQUMscUNBQUQsQ0FBRCxDQUF5Q29DLElBQXpDO0FBQ0gsS0FkRTtBQWVIK0IsU0FBSyxFQUFFLGVBQVVDLEdBQVYsRUFBZUMsVUFBZixFQUEyQkMsV0FBM0IsRUFBd0M7QUFDMUMsNEJBQUQ7QUFDSDtBQWpCRSxHQUFQO0FBb0JILENBdkNEOztBQXlDQSxTQUFTK0csWUFBVCxDQUFzQjNJLE9BQXRCLEVBQStCWSxLQUEvQixFQUFzQ2dDLEtBQXRDLEVBQTZDO0FBQ3pDaEMsT0FBSyxHQUFHWixPQUFPLENBQUMsSUFBRCxDQUFmOztBQUNBLE1BQUlBLE9BQU8sQ0FBQyxNQUFELENBQVAsQ0FBZ0IsSUFBaEIsS0FBeUIsR0FBekIsSUFBaUNBLE9BQU8sQ0FBQyxRQUFELENBQVAsSUFBcUIsSUFBMUQsRUFBaUU7QUFFN0QxQyxLQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQjJDLE1BQXJCLENBQTRCLHlEQUF5RFcsS0FBekQsR0FBaUUsVUFBN0Y7QUFDQXRELEtBQUMsQ0FBQyw2QkFBNkJzRCxLQUE3QixHQUFxQyxFQUF0QyxDQUFELENBQTJDWCxNQUEzQyxDQUFrRDhDLFNBQVMsQ0FBQyxDQUFELEVBQUkvQyxPQUFPLENBQUMsTUFBRCxDQUFQLENBQWdCLE1BQWhCLENBQUosQ0FBM0Q7QUFDQTFDLEtBQUMsQ0FBQyw2QkFBNkJzRCxLQUE3QixHQUFxQyxFQUF0QyxDQUFELENBQTJDdkMsUUFBM0MsQ0FBb0QseUJBQXBEOztBQUNBLFFBQUkyQixPQUFPLENBQUMsVUFBRCxDQUFQLElBQXVCLElBQTNCLEVBQWlDO0FBQzdCMUMsT0FBQyxDQUFDLDZCQUE2QnNELEtBQTdCLEdBQXFDLEVBQXRDLENBQUQsQ0FBMkNYLE1BQTNDLENBQWtEK0MsWUFBWSxDQUFDLENBQUQsRUFBSWhELE9BQU8sQ0FBQyxVQUFELENBQVAsQ0FBb0IsTUFBcEIsQ0FBSixDQUE5RDtBQUNIOztBQUNEMUMsS0FBQyxDQUFDLDZCQUE2QnNELEtBQTdCLEdBQXFDLEVBQXRDLENBQUQsQ0FBMkNYLE1BQTNDLENBQWtELGtFQUM5Q1csS0FEOEMsR0FDdEMsVUFEWjtBQUVBdEQsS0FBQyxDQUFDLDBCQUEwQnNELEtBQTFCLEdBQWtDLEVBQW5DLENBQUQsQ0FBd0NYLE1BQXhDLENBQStDLFFBQVFELE9BQU8sQ0FBQyxVQUFELENBQWYsR0FBOEIsTUFBN0U7QUFDQTFDLEtBQUMsQ0FBQywwQkFBMEJzRCxLQUExQixHQUFrQyxFQUFuQyxDQUFELENBQXdDWCxNQUF4QyxDQUErQyxRQUFRRCxPQUFPLENBQUMsV0FBRCxDQUFmLEdBQStCLE1BQTlFOztBQUNBLFFBQUlBLE9BQU8sQ0FBQyxVQUFELENBQVAsSUFBdUIsRUFBM0IsRUFBK0I7QUFDM0IxQyxPQUFDLENBQUMsMEJBQTBCc0QsS0FBMUIsR0FBa0MsRUFBbkMsQ0FBRCxDQUF3Q1gsTUFBeEMsQ0FBK0Msc0ZBQXNGRCxPQUFPLENBQUMsSUFBRCxDQUE3RixHQUFzRyxtQ0FBcko7QUFDSCxLQUZELE1BRU87QUFDSDFDLE9BQUMsQ0FBQywwQkFBMEJzRCxLQUExQixHQUFrQyxFQUFuQyxDQUFELENBQXdDWCxNQUF4QyxDQUErQyxRQUFRRCxPQUFPLENBQUMsVUFBRCxDQUFmLEdBQThCLE1BQTdFO0FBQ0g7O0FBQ0RyQixZQUFRLEdBQUdyQixDQUFDLENBQUMsNkJBQTZCc0QsS0FBN0IsR0FBcUMsRUFBdEMsQ0FBWjtBQUNIO0FBQ0o7O0FBRUQsU0FBU29CLGtCQUFULENBQTRCaEMsT0FBNUIsRUFBcUNZLEtBQXJDLEVBQTRDZ0MsS0FBNUMsRUFBbUQ7QUFHL0NoQyxPQUFLLEdBQUdaLE9BQU8sQ0FBQyxJQUFELENBQWY7O0FBRUEsTUFBS0EsT0FBTyxDQUFDLFFBQUQsQ0FBUCxJQUFxQixJQUF0QixJQUErQkEsT0FBTyxDQUFDLE1BQUQsQ0FBUCxDQUFnQixJQUFoQixLQUF5QixHQUE1RCxFQUFpRTtBQUU3RDtBQUNBLFFBQUkxQyxDQUFDLENBQUMsNkJBQTZCc0QsS0FBOUIsQ0FBRCxDQUFzQ2lDLE1BQTFDLEVBQWtEO0FBQzlDdkYsT0FBQyxDQUFDLDZCQUE2QnNELEtBQTlCLENBQUQsQ0FBc0NrQyxXQUF0QyxDQUFrRCx5REFBeURsQyxLQUF6RCxHQUFpRSxVQUFuSDtBQUNILEtBRkQsTUFFTztBQUNIdEQsT0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIyQyxNQUFyQixDQUE0Qix5REFBeURXLEtBQXpELEdBQWlFLFVBQTdGO0FBQ0gsS0FQNEQsQ0FTN0Q7OztBQUNBLFFBQUlaLE9BQU8sQ0FBQyxNQUFELENBQVAsQ0FBZ0IsSUFBaEIsS0FBeUIsR0FBN0IsRUFBa0M7QUFFOUI7QUFDQTFDLE9BQUMsQ0FBQyw2QkFBNkJzRCxLQUE3QixHQUFxQyxFQUF0QyxDQUFELENBQTJDWCxNQUEzQyxDQUFrRDhDLFNBQVMsQ0FBQyxDQUFELEVBQUkvQyxPQUFPLENBQUMsTUFBRCxDQUFQLENBQWdCLE1BQWhCLENBQUosQ0FBM0Q7O0FBRUEsVUFBSUEsT0FBTyxDQUFDLFVBQUQsQ0FBUCxJQUF1QixJQUEzQixFQUFpQztBQUM3QjFDLFNBQUMsQ0FBQyw2QkFBNkJzRCxLQUE3QixHQUFxQyxFQUF0QyxDQUFELENBQTJDWCxNQUEzQyxDQUFrRCtDLFlBQVksQ0FBQyxDQUFELEVBQUloRCxPQUFPLENBQUMsVUFBRCxDQUFQLENBQW9CLE1BQXBCLENBQUosQ0FBOUQ7QUFDSDs7QUFFRDFDLE9BQUMsQ0FBQyw2QkFBNkJzRCxLQUE3QixHQUFxQyxFQUF0QyxDQUFELENBQTJDWCxNQUEzQyxDQUFrRCxrRUFDOUNXLEtBRDhDLEdBQ3RDLFVBRFo7QUFFQXRELE9BQUMsQ0FBQywwQkFBMEJzRCxLQUExQixHQUFrQyxFQUFuQyxDQUFELENBQXdDWCxNQUF4QyxDQUErQyxRQUFRRCxPQUFPLENBQUMsVUFBRCxDQUFmLEdBQThCLE1BQTdFO0FBQ0ExQyxPQUFDLENBQUMsMEJBQTBCc0QsS0FBMUIsR0FBa0MsRUFBbkMsQ0FBRCxDQUF3Q1gsTUFBeEMsQ0FBK0MsUUFBUUQsT0FBTyxDQUFDLFdBQUQsQ0FBZixHQUErQixNQUE5RTs7QUFDQSxVQUFJQSxPQUFPLENBQUMsVUFBRCxDQUFQLElBQXVCLEVBQTNCLEVBQStCO0FBQzNCMUMsU0FBQyxDQUFDLDBCQUEwQnNELEtBQTFCLEdBQWtDLEVBQW5DLENBQUQsQ0FBd0NYLE1BQXhDLENBQStDLHNGQUFzRkQsT0FBTyxDQUFDLElBQUQsQ0FBN0YsR0FBc0csbUNBQXJKO0FBQ0gsT0FGRCxNQUVPO0FBQ0gxQyxTQUFDLENBQUMsMEJBQTBCc0QsS0FBMUIsR0FBa0MsRUFBbkMsQ0FBRCxDQUF3Q1gsTUFBeEMsQ0FBK0MsUUFBUUQsT0FBTyxDQUFDLFVBQUQsQ0FBZixHQUE4QixtQkFBOUIsR0FBb0RZLEtBQXBELEdBQTRELG1EQUE1RCxHQUFrSEEsS0FBbEgsR0FBMEgsb0RBQXpLO0FBQ0gsT0FqQjZCLENBa0I5Qjs7QUFFSCxLQXBCRCxNQW9CTztBQUVIO0FBQ0F0RCxPQUFDLENBQUNxQixRQUFELENBQUQsQ0FBWXNCLE1BQVosQ0FBbUI4QyxTQUFTLENBQUMsQ0FBRCxFQUFJL0MsT0FBTyxDQUFDLFVBQUQsQ0FBUCxDQUFvQixNQUFwQixDQUFKLENBQTVCLEVBSEcsQ0FJSDtBQUNBOztBQUVBMUMsT0FBQyxDQUFDcUIsUUFBRCxDQUFELENBQVlzQixNQUFaLENBQW1CLDhGQUNmVyxLQURlLEdBQ1AsVUFEWjtBQUVBdEQsT0FBQyxDQUFDLDBCQUEwQnNELEtBQTFCLEdBQWtDLEVBQW5DLENBQUQsQ0FBd0NYLE1BQXhDLENBQStDLFFBQVFELE9BQU8sQ0FBQyxVQUFELENBQWYsR0FBOEIsTUFBN0U7QUFDQTFDLE9BQUMsQ0FBQywwQkFBMEJzRCxLQUExQixHQUFrQyxFQUFuQyxDQUFELENBQXdDWCxNQUF4QyxDQUErQyxRQUFRRCxPQUFPLENBQUMsV0FBRCxDQUFmLEdBQStCLE1BQTlFOztBQUNBLFVBQUlBLE9BQU8sQ0FBQyxVQUFELENBQVAsSUFBdUIsRUFBM0IsRUFBK0I7QUFDM0IxQyxTQUFDLENBQUMsMEJBQTBCc0QsS0FBMUIsR0FBa0MsRUFBbkMsQ0FBRCxDQUF3Q1gsTUFBeEMsQ0FBK0Msc0ZBQXNGRCxPQUFPLENBQUMsSUFBRCxDQUE3RixHQUFzRyxtQ0FBcko7QUFDSCxPQUZELE1BRU87QUFDSDFDLFNBQUMsQ0FBQywwQkFBMEJzRCxLQUExQixHQUFrQyxFQUFuQyxDQUFELENBQXdDWCxNQUF4QyxDQUErQyxRQUFRRCxPQUFPLENBQUMsVUFBRCxDQUFmLEdBQThCLG1CQUE5QixHQUFvRFksS0FBcEQsR0FBNEQsbURBQTVELEdBQWtIQSxLQUFsSCxHQUEwSCxvREFBeks7QUFFSCxPQWhCRSxDQWtCSDs7O0FBQ0F0RCxPQUFDLENBQUMsNkJBQTZCc0QsS0FBOUIsQ0FBRCxDQUFzQzNDLE1BQXRDO0FBQ0g7QUFDSjtBQUNKOztBQUVELFNBQVN5SyxpQkFBVCxDQUEyQjFJLE9BQTNCLEVBQW9DWSxLQUFwQyxFQUEyQ2dDLEtBQTNDLEVBQWtEO0FBQzlDdUYsYUFBVztBQUNkLEMsQ0FDRDs7O0FBQ0EsU0FBU3JHLGFBQVQsQ0FBdUJzQixHQUF2QixFQUE0QjtBQUN4QixTQUFPQyxNQUFNLENBQUNELEdBQUcsQ0FBQ0UsT0FBSixDQUFZLFFBQVosRUFBc0IsRUFBdEIsQ0FBRCxDQUFiO0FBQ0gsQyxDQUNEOzs7QUFDQSxTQUFTUCxTQUFULENBQW1CUSxJQUFuQixFQUF5QnBELElBQXpCLEVBQStCO0FBQzNCLFNBQU8sT0FBT29ELElBQVAsR0FBYyxvREFBZCxHQUFxRXBELElBQXJFLEdBQTRFLEtBQTVFLEdBQW9Gb0QsSUFBcEYsR0FBMkYsR0FBbEc7QUFDSDs7QUFBQSxDLENBQ0Q7O0FBQ0EsU0FBU1AsWUFBVCxDQUFzQk8sSUFBdEIsRUFBNEJwRCxJQUE1QixFQUFrQztBQUM5QixTQUFPLE9BQU9vRCxJQUFQLEdBQWMsdURBQWQsR0FBd0VwRCxJQUF4RSxHQUErRSxLQUEvRSxHQUF1Rm9ELElBQXZGLEdBQThGLEdBQXJHO0FBQ0g7O0FBQUEsQyxDQUNEOztBQUNBLFNBQVNDLGdCQUFULENBQTBCRCxJQUExQixFQUFnQ3BELElBQWhDLEVBQXNDO0FBQ2xDLFNBQU8sT0FBT29ELElBQVAsR0FBYyx5REFBZCxHQUEwRXBELElBQTFFLEdBQWlGLEtBQWpGLEdBQXlGb0QsSUFBekYsR0FBZ0csR0FBdkc7QUFDSDs7QUFBQSxDLENBQ0Q7QUFDQTtBQUNBO0FBQ0EsSzs7Ozs7Ozs7Ozs7O0FDbGxCQSx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3Njc3MvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJy4vZXF1aXBlbWVudCc7XHJcbmltcG9ydCAnLi9iYXNlbGluZSc7XHJcbmltcG9ydCAnLi9wcm9ncmVzc0Jhcic7XHJcbmltcG9ydCAnLi90ZXN0LXVwbG9hZCc7XHJcbmltcG9ydCAnLi90cmFpbic7XHJcbmltcG9ydCAnLi9wbHVnJztcclxuaW1wb3J0ICcuL2ZsZWV0JztcclxuaW1wb3J0ICcuL2xvZ3MnO1xyXG5cclxuLy8gbG9hZHMgdGhlIGpxdWVyeSBwYWNrYWdlIGZyb20gbm9kZV9tb2R1bGVzXHJcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuLy8gaW1wb3J0IHRoZSBmdW5jdGlvbiBmcm9tIGdyZWV0LmpzICh0aGUgLmpzIGV4dGVuc2lvbiBpcyBvcHRpb25hbClcclxuLy8gLi8gKG9yIC4uLykgbWVhbnMgdG8gbG9vayBmb3IgYSBsb2NhbCBmaWxlXHJcbiQoJy5wb3N0LW1vZHVsZScpLmhvdmVyKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuZmluZCgnLmRlc2NyaXB0aW9uJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgIGhlaWdodDogXCJ0b2dnbGVcIixcclxuICAgICAgICBvcGFjaXR5OiBcInRvZ2dsZVwiXHJcbiAgICB9LCAzMDApO1xyXG59KTtcclxuJCgnLnBvc3QtbW9kdWxlLWZsZWV0JykuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5maW5kKCcuZGVzY3JpcHRpb24tZmxlZXQnKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgaGVpZ2h0OiBcInRvZ2dsZVwiLFxyXG4gICAgICAgIG9wYWNpdHk6IFwidG9nZ2xlXCJcclxuICAgIH0sIDMwMCk7XHJcbn0pO1xyXG5cclxuJCgnLmZhLWNoZXZyb24tZG93bicpLmhpZGUoKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAkKCdwcmUnKS5yZW1vdmUoKTtcclxuICAgICQoJy5idXR0b24tbGVmdCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuc2lkZWJhcicpLnRvZ2dsZUNsYXNzKCdmbGlwaCcpO1xyXG4gICAgfSk7XHJcbiAgICAkKCcuc2lkZWJhcicpLmhvdmVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcygndHJhbnNpdGlvbicsICdhbGwgMC41cyBlYXNlLWluLW91dCcpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykuYWRkQ2xhc3MoJ21sLXNtLWF1dG8nKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLnJlbW92ZUNsYXNzKCdvZmZzZXQtMScpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykuYWRkQ2xhc3MoJ29mZnNldC0yJyk7XHJcbiAgICAgICAgICAgICQoJy5tYWluLXNob3cnKS5yZW1vdmVDbGFzcygnY29sLWxnLTExJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoJ3RyYW5zaXRpb24nLCAnYWxsIDAuMTBzIGVhc2UtaW4tb3V0Jyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5hZGRDbGFzcygnb2Zmc2V0LTEnKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLnJlbW92ZUNsYXNzKCdvZmZzZXQtMicpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykucmVtb3ZlQ2xhc3MoJ21sLXNtLWF1dG8nKTtcclxuICAgICAgICAgICAgJCgnLm1haW4tc2hvdycpLmFkZENsYXNzKCdjb2wtbGctMTEnKTtcclxuICAgICAgICB9KVxyXG4gICAgLy8gJCgnbWFpbicpLnJlbW92ZUNsYXNzKCdtbC1zbS1hdXRvJyk7XHJcbiAgICAkKCcubmF2LWxhYmVsJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5mYS1jaGV2cm9uLWxlZnQnKS5jc3MoJ3RyYW5zZm9ybScsICdyb3RhdGV4KDQ1ZGVnKScpXHJcbiAgICB9KVxyXG5cclxufSk7IiwiLy9NYXNxdWFnZSBkZSBjZXJ0YWlucyBtb2RhbGUgZGUgbGEgcGFnZVxyXG4kKCcjZm9ybXVsYWlyZS1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiQoJyNjb250ZW50LWZvcm0tZXF1aXBtZW50JykuaGlkZSgpO1xyXG4kKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiQoJyNwcmV2aW91cy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcblxyXG4vL0RlbGNhcmF0aW9uIHZhcmlhYmxlXHJcbmNvbnN0ICR0eXBlID0gJCgnI2VxdWlwZW1lbnRfVHlwZScpO1xyXG4kdHlwZS5hdHRyKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpO1xyXG5cclxubGV0IEVxdWlwbWVudHMgPSBbXSxcclxuICAgIGkgPSAwLFxyXG4gICAgaW5kZXhFVkMgPSAwLFxyXG4gICAgcG9zSW5kZXggPSAwLFxyXG4gICAgUHJlc2VuY2VFVkMgPSBmYWxzZSxcclxuICAgIGlkRXF1aXBtZW50ID0gMCxcclxuICAgIHRhYkluZGV4RXF1aXB0ID0gW11cclxuc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSxcclxuICAgIHByZXZpb3VzID0gXCJcIixcclxuICAgIHRhYkVxdWlwZW1lbnRUeXBlID0gW1wiRVZDXCIsIFwiQ0FSVEVcIiwgXCJTRU5TT1JcIiwgXCJETUlcIl0sXHJcbiAgICB0YWJFcXVpcGVtZW50U3VidHlwZSA9IFtcIkNPUkVcIiwgXCJUVUlcIiwgXCJTRE1VXCIsIFwiU0VOU0VcIiwgXCJUV0lOU1wiXTtcclxuXHJcbi8vVmlkYWdlIGRlcyBpbnB1dHMgYXUgcmVmcmVzaCBkZSBsYSBwYWdlXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBkYXRhID0ge31cclxuICAgIGRhdGFbJHR5cGUuYXR0cignbmFtZScpXSA9ICR0eXBlLnZhbCgpXHJcblxyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSAnL2Fsc3RvbS9jcmVhdGVfYmFzZWxpbmUnKSB7XHJcbiAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAgICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja1N1YnR5cGVcIiwgZGF0YSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgLy9WaWRhZ2UgY2hhbXAgc291c3R5cGVcclxuICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuZW1wdHkoKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIC8vICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmVtcHR5KCk7XHJcbiAgICAvLyAkKCc6aW5wdXQnLCAnI2Zvcm1fZXF1aXBlbWVudCcpLm5vdCgnOmJ1dHRvbiwgOnN1Ym1pdCwgOnJlc2V0LCA6aGlkZGVuJykudmFsKCcnKTtcclxufSk7XHJcblxyXG4vL0FKQVggQ2hhbmdlbWVudCBkZSBzb3VzLXR5cGUgZW4gZm9uY3Rpb24gZHUgdHlwZVxyXG4kdHlwZS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGxldCBkYXRhID0ge31cclxuICAgIGRhdGFbJHR5cGUuYXR0cignbmFtZScpXSA9ICR0eXBlLnZhbCgpXHJcblxyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tTdWJ0eXBlXCIsIGRhdGEpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgLy9WaWRhZ2UgY2hhbXAgc291c3R5cGVcclxuICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmVtcHR5KCk7XHJcbiAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pXHJcblxyXG4vL0FKQVggc291bWlzc2lvbiBmb3JtdWxhaXJlIGQnYWpvdXQgZXF1aXBlbWVudFxyXG4kKCcjZm9ybV9lcXVpcGVtZW50Jykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgLy9FbXDDqmNoZSBsZSBjaGFyZ2VtZW50IGRlIGxhIHBhZ2Ugc29pcyBmYWl0IGF1dG9tYXRpcXVlbWVudFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGRhdGEgPSB7fSxcclxuICAgICAgICBhY3Rpb247XHJcbiAgICAvL1JlbXBsaSBkYXRhIGEgcGFydGlyIGRlcyB2YWxldXIgZGVzIGlucHV0c1xyXG4gICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuYW1lID0gdGhhdC5hdHRyKCduYW1lJylcclxuXHJcbiAgICAgICAgaWYgKG5hbWUgIT0gKFwiZXF1aXBlbWVudFtfdG9rZW5dXCIpICYmIG5hbWUgIT0gKFwic291bWlzc2lvbl9lcXVpcGVtZW50XCIpKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhhdC52YWwoKTtcclxuICAgICAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZSA9PSAnc291bWlzc2lvbl9lZGl0X2VxdWlwZW1lbnQnKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbiA9IFwiZWRpdFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFjdGlvbiA9IFwiYWRkXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbiAgICAvLyBTaSBsZSBmb3JtdWxhaXJlIGVzdCBwb3VyIGFqb3VlciB1biBub3V2ZWwgZXF1aXBlbWVudFxyXG4gICAgaWYgKGFjdGlvbiA9PSBcImFkZFwiKSB7XHJcbiAgICAgICAgLy9SZW1wbGlzIGxlIHRhYmxlYXUgZGVzIMOpcXVpcGVtZW50c1xyXG4gICAgICAgIEVxdWlwbWVudHMucHVzaChkYXRhKTtcclxuICAgICAgICAvL0VmZmVjdHVyZSBsYSByZXF1w6p0ZSBhamF4IHBvdXIgbCdham91dCBkJ8OpcXVpcGVtZW50XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAkdGhpcy5hdHRyKCdhY3Rpb24nKSxcclxuICAgICAgICAgICAgdHlwZTogJHRoaXMuYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHRhYkVxdWlwdHM6IEVxdWlwbWVudHNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gT3Ugc2kgbGUgZm9ybXVsYWlyZSBlc3QgcG91ciDDqWRpdGVyIHVuIGVxdWlwZW1lbnQgZMOpamEgZXhpc3RhbnQgc3VyIGxhIHBhZ2UgZGUgbCdlcnRtcyBsacOpIGEgY2VsdWktY2lcclxuICAgIH0gZWxzZSBpZiAoYWN0aW9uID09IFwiZWRpdFwiKSB7XHJcbiAgICAgICAgbGV0IGlkRXJ0bXMgPSBleHRyYWl0Tm9tYnJlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy9hbHN0b20vZWRpdC1lcXVpcG1lbnQvJyArIGlkRXF1aXBtZW50LFxyXG4gICAgICAgICAgICB0eXBlOiAkdGhpcy5hdHRyKCdtZXRob2QnKSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgZXF1aXBlbWVudDogZGF0YSxcclxuICAgICAgICAgICAgICAgIGlkRXJ0bXM6IGlkRXJ0bXNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcubW9kYWwtZm9vdGVyJykuc2hvdygpO1xyXG4gICAgJCgnI2NyZWF0ZS1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcjc2hvdy1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcjcHJldmlvdXMtZXF1aXBtZW50JykuaGlkZSgpO1xyXG4gICAgLy9Cb3VjbGUgbGVzIMOpcXVpcGVtZW50cyBldCBsZXMgaW5zdGFsbGUgYXUgZnJvbnRcclxuICAgIEVxdWlwbWVudHMuZm9yRWFjaChyZXR1cm5JbmRleEVsZW1lbnQpO1xyXG59KTtcclxuXHJcblxyXG4vL1ZhbGlkYXRpb24gZGUgYmFzZWxpbmUgXHJcbiQoJyNjcmVhdGUtYmFzZWxpbmUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJChcIiNiYXNlbGluZV9uYW1lXCIpLnZhbCgpID09IFwiXCIpIHtcclxuICAgICAgICBhbGVydChcIlBsZWFzZSBlbnRlciBhIGJhc2VsaW5lIG5hbWUgXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjc2hvdy1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG59KVxyXG5cclxubGV0IGJhc2VsaW5lTmFtZTtcclxuJCgnI2Zvcm1fYmFzZWxpbmUnKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgIGxldCBkYXRhID0ge307XHJcblxyXG4gICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuYW1lID0gdGhhdC5hdHRyKCduYW1lJyksXHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhhdC52YWwoKTtcclxuXHJcbiAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG5cclxuICAgICAgICBpZiAobmFtZSA9PSAnYmFzZWxpbmVbbmFtZV0nKSB7XHJcblxyXG4gICAgICAgICAgICBiYXNlbGluZU5hbWUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAkdGhpcy5hdHRyKCdhY3Rpb24nKSxcclxuICAgICAgICB0eXBlOiAkdGhpcy5hdHRyKCdtZXRob2QnKSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGJhc2VsaW5lOiBkYXRhXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcudGl0bGUtYmFzZWxpbmUnKS50ZXh0KHJlc3BvbnNlLmJhc2VsaW5lKVxyXG4gICAgICAgICAgICAkKCcjY29udGVudC1mb3JtLWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICAgICAgICAgJCgnI3ByZXZpb3VzLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSlcclxuLy9WYWxpZGF0aW9uIGRlIHRvdXMgbGVzIMOpcXVpcGVtZW50cyBldCBkZSBsYSBiYXNlbGluZVxyXG4kKCcjdmFsaWQtYWxsLWVxdWlwbWVudHMnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChFcXVpcG1lbnRzICE9IFwiXCIpIHtcclxuICAgICAgICAkKCdtYWluJykuY3NzKCdvcGFjaXR5JywgXCIwLjRcIik7XHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvYWxzdG9tL2ZsdXNoLWFsbC1lcXVpcHQnLFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGJhc2VsaW5lTmFtZTogYmFzZWxpbmVOYW1lLFxyXG4gICAgICAgICAgICAgICAgdGFiRXF1aXB0czogRXF1aXBtZW50c1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGlkQmFzZWxpbmUgPSByZXNwb25zZS5iYXNlbGluZTtcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2Fsc3RvbS9iYXNlbGluZS9cIiArIGlkQmFzZWxpbmU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydCgnUGxlYXNlIGVudGVyIEVxdWlwbWVudHMgYmVmb3JlIHZhbGlkJyk7XHJcbiAgICB9XHJcblxyXG59KVxyXG5cclxuLy9Hw6lyZSBsZSBjbGlxdWUgZGUgbGEgc3VwcHJlc3Npb25cclxuJCgnI3Nob3ctZXF1aXBtZW50Jykub24oJ2NsaWNrJywgJy5lZGl0LWRlbGV0ZS1lcXVpcGVtZW50ID4gYScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpWzBdW1wiaWRcIl1bMF0gPT0gXCJkXCIpIHtcclxuICAgICAgICBkZWxldGVFcXVpcG1lbnQoZXh0cmFpdE5vbWJyZSgkKHRoaXMpWzBdW1wiaWRcIl0pKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuLy9jYWNoZSBsZSBtb2RhbCBkJ2VkaXQgZCdlcXVpcGVtZW50XHJcbiQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0JykuaGlkZSgpO1xyXG4vLyBHZXJlIGxhIGZlcm1ldHVyZSBkdSBtb2RhbCBkJ2VkaXQgZCdlcXVpcGVtZW50XHJcbiQoJyNjbG9zZS1tb2RhbC1mb3JtLWVxdWlwbWVudC1lZGl0JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5oaWRlKCk7XHJcbiAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG59KVxyXG4vLyBcclxuLy8gUmVxdWV0ZSBBSkFYIHBvdXIgcmVtcGxpciBsZSBmb3JtdWxhaXJlIGQnw6lxdWlwZW1lbnQgYXZlYyBsJ2VxdWlwZW1lbnQgc2VsZWN0aW9ubmVyXHJcbiQoJy5jb250ZW50LWRlc2NyaXB0aW9uLWR0cicpLm9uKCdjbGljaycsICcuZWRpdC1kZWxldGUtZXF1aXBlbWVudCA+IGEnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICBpZEVxdWlwbWVudCA9IGV4dHJhaXROb21icmUoJCh0aGlzKVswXVtcImNsYXNzTGlzdFwiXVswXSlcclxuICAgIHZhciAkdGhpcyA9ICQoXCIjZm9ybV9lcXVpcGVtZW50X2VkaXRcIik7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9lZGl0LWVxdWlwbWVudC8nICsgaWRFcXVpcG1lbnQsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X1R5cGUnKS52YWwocmVzcG9uc2VbXCJ0eXBlXCJdW1wiaWRcIl0pO1xyXG4gICAgICAgICAgICBkYXRhWyQoJyNlcXVpcGVtZW50X1R5cGUnKS5hdHRyKCduYW1lJyldID0gJCgnI2VxdWlwZW1lbnRfVHlwZScpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja1N1YnR5cGVcIiwgZGF0YSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vVmlkYWdlIGNoYW1wIHNvdXN0eXBlXHJcbiAgICAgICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL1JlbXBsaSBpbnB1dCBhdmVjIHZhbGV1ciByZWN1IGRlIGwnZXF1aXBlbWVudFxyXG4gICAgICAgICAgICAgICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9UeXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X3NvdXNfdHlwZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VbXCJTb3VzVHlwZVwiXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiU291c1R5cGVcIl1bXCJpZFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9EVFJfYm9hcmQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiZFRSQm9hcmRcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9JbmRpY2VfRFRSJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcImluZGljZURUUlwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X051bV9zZXJpZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJudW1TZXJpZVwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuLy9Gb3JtdWxhaXJlIGQnZWRpdCBkZSBsJ8OpcXVpcGVtZW50XHJcbiQoJyNmb3JtX2VxdWlwZW1lbnRfZWRpdCcpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI2Zvcm1fZXF1aXBlbWVudF9lZGl0JykuY3NzKFwib3BhY2l0eVwiLCBcIjAuNFwiKTtcclxuICAgICQoXCIjd2FpdC1zcGlubmVyXCIpLmNzcyhcInotaW5kZXhcIiwgXCI5OTk5OVwiKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGRhdGEgPSB7fSxcclxuICAgICAgICBhY3Rpb247XHJcbiAgICAvL1JlbXBsaSBkYXRhIGEgcGFydGlyIGRlcyB2YWxldXIgZGVzIGlucHV0c1xyXG4gICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuYW1lID0gdGhhdC5hdHRyKCduYW1lJylcclxuXHJcbiAgICAgICAgaWYgKG5hbWUgIT0gKFwiZXF1aXBlbWVudFtfdG9rZW5dXCIpICYmIG5hbWUgIT0gKFwic291bWlzc2lvbl9lcXVpcGVtZW50XCIpKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhhdC52YWwoKTtcclxuICAgICAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vZWRpdC1lcXVpcG1lbnQvJyArIGlkRXF1aXBtZW50LFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICdlcXVpcGVtZW50JzogZGF0YSxcclxuICAgICAgICAgICAgXCJzb3VtaXNzaW9uX2VkaXRfZXF1aXBlbWVudFwiOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLnNob3coKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KVxyXG5cclxuLy9SZXF1ZXRlIEFKQVggZGUgY3LDqWF0aW9uIGRlIHZlcnNpb24gbG9naWNpZWxcclxuJCgnI2Zvcm1fdmVyc2lvbicpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKSxcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG5cclxuICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICB9KVxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICR0aGlzLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgIHR5cGU6ICR0aGlzLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgaWRCYXNlbGluZTogZXh0cmFpdE5vbWJyZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpLFxyXG4gICAgICAgICAgICB2ZXJzaW9uOiBkYXRhXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAkKCcjdGl0bGUtdmVyc2lvbi1lcnRtcycpLmFwcGVuZChcIjxwPlwiICsgcmVzcG9uc2UudmVyc2lvbiArIFwiPC9wPlwiKVxyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjY2xvc2UtbW9kYWwtZm9ybS12ZXJzaW9uJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmV0dXJuSW5kZXhFbGVtZW50KGVsZW1lbnQsIGluZGV4LCBhcnJheSkge1xyXG5cclxuICAgIC8vVGVzdCBsJ2V4aXN0ZW5jZSBkZSBsYSBkaXYgZGFucyBsZSBjYXMgb8O5IGVsbGUgZXhpc3RlIGxhIHJlbXBsYWNlIHNpIHBhcyBsYSBtZXQgZW4gcGxhY2VcclxuICAgIGlmICgkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLmxlbmd0aCkge1xyXG4gICAgICAgICQoJyNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCkucmVwbGFjZVdpdGgoJzxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXggKyAnXCI+PC9kaXY+JylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIiNzaG93LWVxdWlwbWVudFwiKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy90ZXN0IHNpIGwnw6lxdWlwZW1lbnQgZXN0IGxhIGNhcnRlIG91IG5vblxyXG4gICAgaWYgKGVsZW1lbnRbXCJlcXVpcGVtZW50W1R5cGVdXCJdICE9IFwiMlwiKSB7XHJcbiAgICAgICAgLy9Td2l0aCByZXBsYWNlbWVudCBkZSBsJ2lkIGR1IHR5cGUgYXZlYyBzb24gbm9tXHJcbiAgICAgICAgc3dpdGNoIChlbGVtZW50W1wiZXF1aXBlbWVudFtUeXBlXVwiXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiMVwiOlxyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVUeXBlKDQsIDApKTtcclxuICAgICAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYWRkQ2xhc3MoXCJkZXNjcmlwdGlvbi1TdWJ0eXBlQ2FyZFwiKVxyXG4gICAgICAgICAgICAgICAgaW5kZXhFVkMgPSAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVR5cGUoNCwgMikpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI0XCI6XHJcbiAgICAgICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVR5cGUoNCwgMykpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAoZWxlbWVudFtcImVxdWlwZW1lbnRbc291c190eXBlXVwiXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiNFwiOlxyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDUsIDMpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiNVwiOlxyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDUsIDQpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImNvbnRlbnQtZGVzY3JpcHRpb24tZHRyXCIgaWQ9XCJjb250ZW50LWRlc2NyaXB0aW9uLScgK1xyXG4gICAgICAgICAgICBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJlcXVpcGVtZW50W0RUUl9ib2FyZF1cIl0gKyAnPC9wPicpXHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZXF1aXBlbWVudFtJbmRpY2VfRFRSXVwiXSArICc8L3A+JylcclxuICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJlcXVpcGVtZW50W051bV9zZXJpZV1cIl0gKyAnPC9wPicpXHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVFZGl0RGVsZXRlKGluZGV4KSk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgRXF1aXBtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgaWYgKEVxdWlwbWVudHNbaV1bXCJlcXVpcGVtZW50W1R5cGVdXCJdID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgICAgICBQcmVzZW5jZUVWQyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChQcmVzZW5jZUVWQykge1xyXG4gICAgICAgICAgICAvL0VjcmlzIGxlIG5vbSBkdSB0eXBlIFwiY2FydGVcIiBzb3VzIGxlIHR5cGUgIEVWQ1xyXG4gICAgICAgICAgICAvLyAkKGluZGV4RVZDKS5hcHBlbmQod3JpdGVUeXBlKDUsIDEpKTtcclxuICAgICAgICAgICAgLy9QYXJjb3VzIGxlIHR5cGUgZGUgc291c3R5cGUgXHJcbiAgICAgICAgICAgIHN3aXRjaCAoZWxlbWVudFtcImVxdWlwZW1lbnRbc291c190eXBlXVwiXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICAgICAgICAgICAgICAkKGluZGV4RVZDKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDUsIDApKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgJChpbmRleEVWQykuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCAxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiM1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICQoaW5kZXhFVkMpLmFwcGVuZCh3cml0ZVN1YnR5cGUoNSwgMikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKGluZGV4RVZDKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb250ZW50LWRlc2NyaXB0aW9uLWR0ciBjb250ZW50LWRlc2NyaXB0aW9uLWR0ckNhcmRcIiBpZD1cImNvbnRlbnQtZGVzY3JpcHRpb24tJyArXHJcbiAgICAgICAgICAgICAgICBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZXF1aXBlbWVudFtEVFJfYm9hcmRdXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJlcXVpcGVtZW50W0luZGljZV9EVFJdXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJlcXVpcGVtZW50W051bV9zZXJpZV1cIl0gKyAnPC9wPicpXHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlRWRpdERlbGV0ZShpbmRleCkpO1xyXG4gICAgICAgICAgICAkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgRVZDIGVxdWlwZW1lbnQgYmVmb3JlJyk7XHJcbiAgICAgICAgICAgICQoJyNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIEVxdWlwbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgJCgnLm1vZGFsLWZvb3RlcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI2NyZWF0ZS1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNzaG93LWVxdWlwbWVudCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50Jykuc2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy9TdXByZXNzaW9uIGRlIGwnw6lxdWlwZW1lbnQgZGFucyBsZSB0YWJsZWF1IGV0IGxlIGZyb250XHJcbmZ1bmN0aW9uIGRlbGV0ZUVxdWlwbWVudChwb3NpdGlvbikge1xyXG4gICAgRXF1aXBtZW50cy5zcGxpY2UocG9zaXRpb24sIDEpO1xyXG4gICAgJCgnLmRlc2NyaXB0aW9uJykucmVtb3ZlKCk7XHJcbiAgICBFcXVpcG1lbnRzLmZvckVhY2gocmV0dXJuSW5kZXhFbGVtZW50KTtcclxufVxyXG4vL0V4dHJhaXQgbGUgbm9tYnJlIGQndW5lIHN0cmVpbmdcclxuZnVuY3Rpb24gZXh0cmFpdE5vbWJyZShzdHIpIHtcclxuICAgIHJldHVybiBOdW1iZXIoc3RyLnJlcGxhY2UoL1teXFxkXS9nLCBcIlwiKSlcclxufVxyXG4vL0VjcmlzIGxlIHRpdHJlIGR1IHR5cGUgZCfDqXF1aXBlbWVudFxyXG5mdW5jdGlvbiB3cml0ZVR5cGUoc2l6ZSwgaW5kZXgpIHtcclxuICAgIHJldHVybiAnPGgnICsgc2l6ZSArICcgY2xhc3M9XCJkZXNjcmlwdGlvbi1UeXBlIFwiIGlkPVwiZGVzY3JpcHRpb24tdHlwZSBcIj4nICsgdGFiRXF1aXBlbWVudFR5cGVbaW5kZXhdICsgJzwvaCcgKyBzaXplICsgJz4nO1xyXG59O1xyXG4vL0VjcmlzIGxlIHRpdHJlIGR1IHNvdXN0eXBlIGQnw6lxdWlwZW1lbnRcclxuZnVuY3Rpb24gd3JpdGVTdWJ0eXBlKHNpemUsIGluZGV4KSB7XHJcbiAgICByZXR1cm4gJzxoJyArIHNpemUgKyAnIGNsYXNzPVwiZGVzY3JpcHRpb24tVHlwZSBcIiBpZD1cImRlc2NyaXB0aW9uLXN1YlR5cGUgXCI+JyArIHRhYkVxdWlwZW1lbnRTdWJ0eXBlW2luZGV4XSArICc8L2gnICsgc2l6ZSArICc+JztcclxufTtcclxuLy9FY3JpcyBsZSB0aXRyZSBkdSBzb3VzdHlwZSBkJ8OpcXVpcGVtZW50XHJcbmZ1bmN0aW9uIHdyaXRlU3VidHlwZUNhcmQoc2l6ZSwgaW5kZXgpIHtcclxuICAgIHJldHVybiAnPGgnICsgc2l6ZSArICcgY2xhc3M9XCJkZXNjcmlwdGlvbi1zdWJ0eXBlXCIgaWQ9XCJkZXNjcmlwdGlvbi1zdWJUeXBlIFwiPicgKyB0YWJFcXVpcGVtZW50U3VidHlwZVtpbmRleF0gKyAnPC9oJyArIHNpemUgKyAnPic7XHJcbn07XHJcbi8vRWNyaXQgbGVzIDIgaWNvbnMgZCdlZGl0IGV0IGRlbGV0ZVxyXG5mdW5jdGlvbiB3cml0ZUVkaXREZWxldGUoaW5kZXgpIHtcclxuICAgIHJldHVybiAnIDxwIGNsYXNzPVwiZWRpdC1kZWxldGUtZXF1aXBlbWVudFwiPiA8YSBpZD1cImVkaXQtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+IDwvYT4gPGEgaWQ9XCJkZWxldGUtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzID0gXCJmYXMgZmEtdHJhc2gtYWx0IHBvdWJlbGxlXCI+IDwvaT48L2E+PC9wPic7XHJcbn07XHJcblxyXG4vKmF1IGNsaWNrIGRlIGwnYWRkIEVxdWlwbWVudCBhZmZpY2hlciBsZSBmb3JtdWxhaXJlIGQnYWpvdXQgZCfDqXF1aXBlbWVudCovXHJcbiQoJyNjcmVhdGUtZXF1aXBtZW50JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI2NyZWF0ZS1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcjc2hvdy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcjcHJldmlvdXMtZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnLm1vZGFsLWZvb3RlcicpLmhpZGUoKTtcclxuICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmVtcHR5KCk7XHJcbiAgICAkKCc6aW5wdXQnLCAnI2Zvcm1fZXF1aXBlbWVudCcpLm5vdCgnOmJ1dHRvbiwgOnN1Ym1pdCwgOnJlc2V0LCA6aGlkZGVuJykudmFsKCcnKTtcclxuICAgIHByZXZpb3VzID0gXCJlcXVpcG1lbnRcIjtcclxufSk7XHJcbi8vIEdlcmUgbGUgY2xpY2sgZHUgcHJldmlvdXNcclxuJChcIiNwcmV2aW91cy1lcXVpcG1lbnRcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuICAgICQoJyNzaG93LWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNjcmVhdGUtZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI3ByZXZpb3VzLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuICAgICQoJy5tb2RhbC1mb290ZXInKS5zaG93KCk7XHJcbn0pO1xyXG4kKCcjY3JlYXRlLWJhc2VsaW5lJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50JykuaGlkZSgpO1xyXG4gICAgJCgnI3Nob3ctZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI2NyZWF0ZS1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcubW9kYWwtZm9vdGVyJykuc2hvdygpO1xyXG59KVxyXG4vLyBGZXJtZSBsZSBtb2RhbCBkZSBmb3JtdWxhaXJlIGQnYWpvdXQgZCfDqXF1aXBlbWVudFxyXG4kKCcjY2xvc2UtZXF1aXBlbWVudCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuICAgICQoJyNzaG93LWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNjcmVhdGUtZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI3ByZXZpb3VzLWVxdWlwbWVudCcpLmhpZGUoKTtcclxufSkiLCIvL1ZhbGlkYXRpb24gZGUgbCdlcnRtcyBcclxuJCgnI3ZhbGlkLWVydG1zLW5hbWUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiI2NvbnRlbnQtZm9ybS1lcnRtc1wiKS5oaWRlKCk7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWVxdWlwbWVudCcpLnNob3coKTtcclxufSkiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjc2VhcmNoLWZsZWV0Jykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSlcclxuICAgICQoJyNuYW1lX3Byb2plY3QnKS5rZXl1cChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgc2VhcmNoID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgZGF0YSA9ICdtb3RjbGVmPScgKyBzZWFyY2g7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRfXHJcbiAgICAgICAgY29uc29sZS5sb2coc2VhcmNoKTtcclxuICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCA+IDApIHtcclxuXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvYWxzdG9tL3NlYXJjaC1mbGVldCcsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgLy8gYXN5bmM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhYk5hbWUgPSBKU09OLnBhcnNlKHJlc3BvbnNlLnByb2plY3RzRm91bmQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFiTmFtZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuZWxlbWVudC1yZXN1bHQnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3Jlc3VsdC1mbGVldCcpLmFwcGVuZCgnPHAgY2xhc3M9XCJlbGVtZW50LXJlc3VsdFwiPlJlc3VsdHMgTm90IEZvdW5kPC9wPicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJOYW1lLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuZWxlbWVudC1yZXN1bHQnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNyZXN1bHQtZmxlZXQnKS5hcHBlbmQoJzxwIGNsYXNzPVwiZWxlbWVudC1yZXN1bHRcIj4nICsgZWxlbWVudC5uYW1lICsgJzwvcD4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy5lbGVtZW50LXJlc3VsdCcpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJCgnI2FkZFRyYWluc1RvRmxlZXQnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHRyYWluX3NlbGVjdCA9ICQoJyNzZWxlY3QtdHJhaW4tZmxlZXQnKTtcclxuXHJcbiAgICAgICAgJCgnI21vZGFsLWZvcm0tdHJhaW4tZmxlZXQnKS5jc3MoJ3otaW5kZXgnLCAnLTk5Jyk7XHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICAgICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja1RyYWluc1wiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAkdHJhaW5fc2VsZWN0LmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyAkdHJhaW5fc2VsZWN0LnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWwtZm9ybS10cmFpbi1mbGVldCcpLmNzcygnei1pbmRleCcsICc5OTk5Jyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICAkKCcjdmFsaWQtdHJhaW4tZmxlZXQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgaWRQcm9qZWN0ID0gZXh0cmFpdE5vbWJyZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgICAgIGxldCB0YWJUcmFpbnMgPSBbXTtcclxuICAgICAgICB0YWJUcmFpbnMucHVzaCgpO1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQoJyNmb3JtdWxhaXJlLXRyYWluLWZsZWV0Jyk7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAgICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKSxcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhhdC52YWwoKTtcclxuXHJcbiAgICAgICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvYWxzdG9tL2FkZFRyYWluVG9GbGVldC8nICsgaWRQcm9qZWN0LFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIC8vIGFzeW5jOiBmYWxzZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCQoJyNzZWxlY3QtdHJhaW4tZmxlZXQnKS52YWwoKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG59KTtcclxuXHJcbi8vRXh0cmFpdCBsZSBub21icmUgZCd1bmUgc3RyZWluZ1xyXG5mdW5jdGlvbiBleHRyYWl0Tm9tYnJlKHN0cikge1xyXG4gICAgcmV0dXJuIE51bWJlcihzdHIucmVwbGFjZSgvW15cXGRdL2csIFwiXCIpKVxyXG59IiwiY29uc3QgJGZsZWV0ID0gJCgnI2ZsZWV0X3NlbGVjdCcpO1xyXG5jb25zdCAkdHJhaW4gPSAkKCcjdHJhaW5fc2VsZWN0Jyk7XHJcbmNvbnN0ICRlcnRtcyA9ICQoJyNlcnRtc19zZWxlY3QnKTtcclxuY29uc3QgdHlwZUxvZyA9ICQoJyNzZWxlY3RfdHlwZV9sb2cnKTtcclxuY29uc3QgdHlwZUxvZ1RleHQgPSAkKCcjc2VsZWN0X3R5cGVfbG9nJyk7XHJcbmxldCBkYXRhID0ge307XHJcbi8vZGV0ZWN0aW9uIHNpIGxlIGJyb3dzZXIgZ8OocmUgbGUgZHJhZyZkcm9wXHJcbnZhciBpc0FkdmFuY2VkVXBsb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmV0dXJuICgoJ2RyYWdnYWJsZScgaW4gZGl2KSB8fCAoJ29uZHJhZ3N0YXJ0JyBpbiBkaXYgJiYgJ29uZHJvcCcgaW4gZGl2KSkgJiYgJ0Zvcm1EYXRhJyBpbiB3aW5kb3cgJiYgJ0ZpbGVSZWFkZXInIGluIHdpbmRvdztcclxufSgpO1xyXG52YXIgJGZvcm0gPSAkKCcuZHJhZy1sb2cnKTtcclxudmFyICRpbnB1dCA9ICRmb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJyksXHJcbiAgICAkbGFiZWwgPSAkZm9ybS5maW5kKCdsYWJlbCcpLFxyXG4gICAgc2hvd0ZpbGVzID0gZnVuY3Rpb24gKGZpbGVzKSB7XHJcbiAgICAgICAgJGxhYmVsLnRleHQoZmlsZXMubGVuZ3RoID4gMSA/ICgkaW5wdXQuYXR0cignZGF0YS1tdWx0aXBsZS1jYXB0aW9uJykgfHwgJycpLnJlcGxhY2UoJ3tjb3VudH0nLCBmaWxlcy5sZW5ndGgpIDogZmlsZXNbMF0ubmFtZSk7XHJcbiAgICB9O1xyXG50eXBlTG9nLmhpZGUoKTtcclxudHlwZUxvZ1RleHQuaGlkZSgpO1xyXG4kZm9ybS5oaWRlKCk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09ICcvYWxzdG9tL2FkZC1sb2dzJykge1xyXG4gICAgICAgICRmb3JtLnNob3coKTtcclxuICAgICAgICBwcmdiYXIgPSBuZXcgbGRCYXIoXCIjdGVzdC1wcm9ncmVzc1wiKTtcclxuICAgIH1cclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gJy9hbHN0b20vc2VhcmNoLWxvZ3MnKSB7XHJcbiAgICAgICAgLy9pZGVudGlmaWNhdGlvbiBkZSBsYSBwcm9ncmVzcyBiYXJcclxuICAgICAgICBwcmdiYXIgPSBuZXcgbGRCYXIoXCIjdGVzdC1wcm9ncmVzc1wiKTtcclxuXHJcbiAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAgICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja0ZsZWV0XCIsICkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICRmbGVldC5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja1RyYWluQnlGbGVldFwiLCB7XHJcbiAgICAgICAgICAgICAgICAnaWQnOiAkZmxlZXQudmFsKClcclxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICR0cmFpbi5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrRXJ0bXNCeVRyYWluXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAkdHJhaW4udmFsKClcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZXJ0bXMuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn0pXHJcblxyXG4kZmxlZXQuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNzZWxlY3RfdHlwZV9sb2cnKS5oaWRlKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJGZsZWV0LnZhbCgpKTtcclxuICAgICR0cmFpbi5lbXB0eSgpO1xyXG4gICAgJGVydG1zLmVtcHR5KCk7XHJcbiAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja1RyYWluQnlGbGVldFwiLCB7XHJcbiAgICAgICAgJ2lkJzogJGZsZWV0LnZhbCgpXHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgJHRyYWluLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICB9KVxyXG59KVxyXG4kdHJhaW4uY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNzZWxlY3RfdHlwZV9sb2cnKS5oaWRlKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJGZsZWV0LnZhbCgpKTtcclxuICAgICRlcnRtcy5lbXB0eSgpO1xyXG4gICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tFcnRtc0J5VHJhaW5cIiwge1xyXG4gICAgICAgICdpZCc6ICR0cmFpbi52YWwoKVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICRlcnRtcy5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICB9KVxyXG4gICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdHlwZUxvZy5zaG93KCk7XHJcbiAgICAgICAgJGZvcm0uc2hvdygpO1xyXG4gICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgIH0pXHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuaWYgKGlzQWR2YW5jZWRVcGxvYWQpIHtcclxuICAgIHZhciBkcm9wcGVkRmlsZXMgPSBmYWxzZTtcclxuICAgICRmb3JtLmFkZENsYXNzKCdoYXMtYWR2YW5jZWQtdXBsb2FkJyk7IC8vIGxldHRpbmcgdGhlIENTUyBwYXJ0IHRvIGtub3cgZHJhZyZkcm9wIGlzIHN1cHBvcnRlZCBieSB0aGUgYnJvd3NlclxyXG4gICAgJGZvcm0ub24oJ2RyYWcgZHJhZ3N0YXJ0IGRyYWdlbmQgZHJhZ292ZXIgZHJhZ2VudGVyIGRyYWdsZWF2ZSBkcm9wJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0pO1xyXG4gICAgJGZvcm0ub24oJ2RyYWdvdmVyIGRyYWdlbnRlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkZm9ybS5hZGRDbGFzcygnaXMtZHJhZ292ZXInKTtcclxuICAgIH0pO1xyXG4gICAgJGZvcm0ub24oJ2RyYWdsZWF2ZSBkcmFnZW5kIGRyb3AnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJGZvcm0ucmVtb3ZlQ2xhc3MoJ2lzLWRyYWdvdmVyJyk7XHJcblxyXG4gICAgfSk7XHJcbiAgICAkZm9ybS5vbignZHJvcCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZHJvcHBlZEZpbGVzID0gZS5vcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcclxuICAgICAgICAkZm9ybS50cmlnZ2VyKCdzdWJtaXQnKTtcclxuICAgICAgICAkKCcubGFiZWwtZHJvcCcpLnRleHQoZHJvcHBlZEZpbGVzWzBdLm5hbWUpO1xyXG4gICAgICAgICQoJy5sYWJlbC1kcm9wJykuY3NzKCdmb250LXdlaWdodCcsICdib2xkJyk7XHJcbiAgICB9KTtcclxuICAgICRmb3JtLmNoYW5nZSgnZHJvcCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZHJvcHBlZEZpbGVzID0gZS5vcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcclxuICAgICAgICAkZm9ybS50cmlnZ2VyKCdzdWJtaXQnKTtcclxuICAgIH0pO1xyXG59XHJcbmxldCBMb2cgPSB7fSxcclxuICAgIGlkQmFzZWxpbmUgPSBcIlwiO1xyXG4kZm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICBpZiAoZHJvcHBlZEZpbGVzKSB7XHJcblxyXG4gICAgICAgIExvZ1snbmFtZV9sb2cnXSA9ICQoJyN0eXBlX2xvZ19zZWxlY3QnKS52YWwoKTtcclxuICAgICAgICBpZEJhc2VsaW5lID0gJCgnI2VydG1zX3NlbGVjdCcpLnZhbCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCQoJyNlcnRtc19zZWxlY3QnKS52YWwoKSk7XHJcbiAgICAgICAgLy8gUGFydGkgZHUgdHJhaXRlbWVudCBkdSBkcmFnIGFuIGRyb3AgZmlsZVxyXG4gICAgICAgIGlmICgkZm9ybS5oYXNDbGFzcygnaXMtdXBsb2FkaW5nJykpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBzaG93RmlsZXMoZHJvcHBlZEZpbGVzKTtcclxuICAgICAgICAkZm9ybS5hZGRDbGFzcygnaXMtdXBsb2FkaW5nJykucmVtb3ZlQ2xhc3MoJ2lzLWVycm9yJyk7XHJcblxyXG4gICAgICAgIGlmIChpc0FkdmFuY2VkVXBsb2FkKSB7XHJcbiAgICAgICAgICAgIHZhciBhamF4RGF0YSA9IG5ldyBGb3JtRGF0YSgkZm9ybS5nZXQoMCkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRyb3BwZWRGaWxlcykge1xyXG4gICAgICAgICAgICAgICAgJC5lYWNoKGRyb3BwZWRGaWxlcywgZnVuY3Rpb24gKGksIGZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhamF4RGF0YS5hcHBlbmQoJGlucHV0LmF0dHIoJ25hbWUnKSwgZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nWydrZXlfbG9nJ10gPSBmaWxlLm5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9hbHN0b20vdXBsb2FkTG9nJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuXHJcbiAgICAgICAgICAgICAgICB4aHI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZ0LmxvYWRlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldnQubGVuZ3RoQ29tcHV0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBlcmNlbnRDb21wbGV0ZSA9IChldnQubG9hZGVkIC8gZXZ0LnRvdGFsKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vRG8gc29tZXRoaW5nIHdpdGggdXBsb2FkIHByb2dyZXNzIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZ2Jhci5zZXQocGVyY2VudENvbXBsZXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwZXJjZW50Q29tcGxldGUgPT0gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN0ZXN0LXByb2dyZXNzXCIpLmFkZENsYXNzKCdpcy1ibGluaycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2dC5sb2FkZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2dC50b3RhbCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHhocjtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YTogYWpheERhdGEsXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkZm9ybS5yZW1vdmVDbGFzcygnaXMtdXBsb2FkaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiN0ZXN0LXByb2dyZXNzXCIpLnJlbW92ZUNsYXNzKCdpcy1ibGluaycpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRmb3JtLmFkZENsYXNzKGRhdGEuc3VjY2VzcyA9PSB0cnVlID8gJ2lzLXN1Y2Nlc3MnIDogJ2lzLWVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9nIHRoZSBlcnJvciwgc2hvdyBhbiBhbGVydCwgd2hhdGV2ZXIgd29ya3MgZm9yIHlvdVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic29ycnkgYm9ieVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGlmcmFtZU5hbWUgPSAndXBsb2FkaWZyYW1lJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAkaWZyYW1lID0gJCgnPGlmcmFtZSBuYW1lPVwiJyArIGlmcmFtZU5hbWUgKyAnXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPjwvaWZyYW1lPicpO1xyXG5cclxuICAgICAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkaWZyYW1lKTtcclxuICAgICAgICAgICAgJGZvcm0uYXR0cigndGFyZ2V0JywgaWZyYW1lTmFtZSk7XHJcblxyXG4gICAgICAgICAgICAkaWZyYW1lLm9uZSgnbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZSgkaWZyYW1lLmNvbnRlbnRzKCkuZmluZCgnYm9keScpLnRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICAkZm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtdXBsb2FkaW5nJylcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoZGF0YS5zdWNjZXNzID09IHRydWUgPyAnaXMtc3VjY2VzcycgOiAnaXMtZXJyb3InKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCd0YXJnZXQnKTtcclxuICAgICAgICAgICAgICAgIGlmICghZGF0YS5zdWNjZXNzKSAkZXJyb3JNc2cudGV4dChkYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgICAgICRmb3JtLnJlbW92ZUF0dHIoJ3RhcmdldCcpO1xyXG4gICAgICAgICAgICAgICAgJGlmcmFtZS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbiQoJyN2YWxpZC1hbGwtbG9ncycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnbWFpbicpLmNzcygnb3BhY2l0eScsIFwiMC40XCIpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9mbHVzaC1sb2cnLFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICdsb2cnOiBMb2csXHJcbiAgICAgICAgICAgICdiYXNlbGluZSc6IGlkQmFzZWxpbmUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIC8vYXNrIGZvciB0aGUgc3RhdHVzXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KSIsIiQoJyNmb3JtX3BsdWcnKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICBsZXQgYmFzZWxpbmUgPSBleHRyYWl0Tm9tYnJlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJGZvcm0pO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2FkZC1wbHVnJyxcclxuICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgICBkYXRhVHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBpZDogYmFzZWxpbmVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KVxyXG5cclxuLy9FeHRyYWl0IGxlIG5vbWJyZSBkJ3VuZSBzdHJlaW5nXHJcbmZ1bmN0aW9uIGV4dHJhaXROb21icmUoc3RyKSB7XHJcbiAgICByZXR1cm4gTnVtYmVyKHN0ci5yZXBsYWNlKC9bXlxcZF0vZywgXCJcIikpO1xyXG59IiwicmVxdWlyZSEgXCIuL3ByZXNldHNcIjoge3ByZXNldHN9XG5cbnNpbXBsZS1zdHIgPSAoYXJyKSAtPiBhcnIuam9pbiAnJ1xud3JhcCA9IChjb250ZW50KSAtPiBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsXCIgKyBidG9hKGNvbnRlbnQpXG5cbmRvIC0+XG4gICAgbWFrZSA9XG4gICAgICAgIGhlYWQ6ICh2aWV3Qm94KSAtPiBcIlwiXCJcbiAgICAgICAgICAgICAgICA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJ1dGYtOFwiPz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIjdmlld0JveFwiPlxuICAgICAgICAgICAgICAgIFwiXCJcIlxuXG4gICAgICAgIGdyYWRpZW50OiAoZGlyID0gNDUsIGR1ciA9IDEsIC4uLmNvbG9ycykgLT5cbiAgICAgICAgICAgIHJldCA9IFtAaGVhZCBcIjAgMCAxMDAgMTAwXCJdXG4gICAgICAgICAgICBsZW4gPSBjb2xvcnMubGVuZ3RoICogNCArIDFcbiAgICAgICAgICAgIGRpciA9IGRpciAqIE1hdGguUEkgLyAxODBcbiAgICAgICAgICAgIGd4ID0gTWF0aC5jb3MoZGlyKSAqKiAyXG4gICAgICAgICAgICBneSA9IE1hdGguc3FydChneCAtIGd4ICoqIDIpXG4gICAgICAgICAgICBpZiBkaXIgPiBNYXRoLlBJICogMC4yNSA9PlxuICAgICAgICAgICAgICAgIGd5ID0gTWF0aC5zaW4oZGlyKSAqKiAyXG4gICAgICAgICAgICAgICAgZ3ggPSBNYXRoLnNxcnQoZ3kgLSBneSAqKiAyKVxuICAgICAgICAgICAgeCA9IGd4ICogMTAwXG4gICAgICAgICAgICB5ID0gZ3kgKiAxMDBcbiAgICAgICAgICAgIHJldC5wdXNoIFwiXCJcIjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD1cImdyYWRpZW50XCIgeDE9XCIwXCIgeDI9XCIjZ3hcIiB5MT1cIjBcIiB5Mj1cIiNneVwiPlwiXCJcIlxuICAgICAgICAgICAgZm9yIGkgZnJvbSAwIHRpbCBsZW4gPT5cbiAgICAgICAgICAgICAgICBpZHggPSBpICogMTAwIC8gKGxlbiAtIDEpXG4gICAgICAgICAgICAgICAgcmV0LnB1c2ggXCJcIlwiPHN0b3Agb2Zmc2V0PVwiI3tpZHh9JVwiIHN0b3AtY29sb3I9XCIje2NvbG9yc1tpICUgY29sb3JzLmxlbmd0aF19XCIvPlwiXCJcIlxuICAgICAgICAgICAgcmV0LnB1c2ggXCJcIlwiXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD48L2RlZnM+XG4gICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiNDAwXCIgaGVpZ2h0PVwiNDAwXCIgZmlsbD1cInVybChcXCNncmFkaWVudClcIj5cbiAgICAgICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCIgdHlwZT1cInRyYW5zbGF0ZVwiIGZyb209XCItI3gsLSN5XCJcbiAgICAgICAgICAgICAgICB0bz1cIjAsMFwiIGR1cj1cIiN7ZHVyfXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIi8+PC9yZWN0Pjwvc3ZnPlxuICAgICAgICAgICAgICAgIFwiXCJcIlxuICAgICAgICAgICAgd3JhcCByZXQuam9pbihcIlwiKVxuXG4gICAgICAgIHN0cmlwZTogKGMxPVxcI2I0YjRiNCwgYzI9XFwjZTZlNmU2LCBkdXIgPSAxKSAtPlxuICAgICAgICAgICAgcmV0ID0gW0BoZWFkIFwiMCAwIDEwMCAxMDBcIl1cbiAgICAgICAgICAgIHJldCArKz0gW1xuICAgICAgICAgICAgICAgIFwiXCJcIjxyZWN0IGZpbGw9XCIjYzJcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiLz5cIlwiXCJcbiAgICAgICAgICAgICAgICBcIlwiXCI8Zz48Zz5cIlwiXCJcbiAgICAgICAgICAgICAgICBbXCJcIlwiPHBvbHlnb24gZmlsbD1cIiNjMVwiIFwiXCJcIiArXG4gICAgICAgICAgICAgICAgIFwiXCJcInBvaW50cz1cIiN7LTkwICsgaSAqIDIwfSwxMDAgI3stMTAwICsgaSAqIDIwfSxcIlwiXCIgK1xuICAgICAgICAgICAgICAgICBcIlwiXCIxMDAgI3stNjAgKyBpICogMjB9LDAgI3stNTAgKyBpICogMjB9LDAgXCIvPlwiXCJcIiBmb3IgaSBmcm9tIDAgdGlsIDEzXS5qb2luKFwiXCIpXG4gICAgICAgICAgICAgICAgXCJcIlwiPC9nPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiB0eXBlPVwidHJhbnNsYXRlXCIgXCJcIlwiXG4gICAgICAgICAgICAgICAgXCJcIlwiZnJvbT1cIjAsMFwiIHRvPVwiMjAsMFwiIGR1cj1cIiN7ZHVyfXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIi8+PC9nPjwvc3ZnPlwiXCJcIlxuICAgICAgICAgICAgXS5qb2luKFwiXCIpXG4gICAgICAgICAgICB3cmFwIHJldFxuXG4gICAgICAgIGJ1YmJsZTogKGMxID0gXFwjMzlkLCBjMiA9IFxcIzljZiwgY291bnQgPSAxNSwgZHVyID0gMSwgc2l6ZSA9IDYsIHN3PTEpIC0+XG4gICAgICAgICAgICByZXQgPSBbQGhlYWQoXCIwIDAgMjAwIDIwMFwiKSwgXCJcIlwiPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgZmlsbD1cIiNjMVwiLz5cIlwiXCJdXG4gICAgICAgICAgICBmb3IgaSBmcm9tIDAgdGlsIGNvdW50ID0+XG4gICAgICAgICAgICAgICAgaWR4ID0gLShpIC8gY291bnQpICogZHVyXG4gICAgICAgICAgICAgICAgeCA9IE1hdGgucmFuZG9tISAqIDE4NCArIDhcbiAgICAgICAgICAgICAgICByID0gKCBNYXRoLnJhbmRvbSEgKiAwLjcgKyAwLjMgKSAqIHNpemVcbiAgICAgICAgICAgICAgICBkID0gZHVyICogKDEgKyBNYXRoLnJhbmRvbSEgKiAwLjUpXG4gICAgICAgICAgICAgICAgcmV0LnB1c2ggW1xuICAgICAgICAgICAgICAgICAgICBcIlwiXCI8Y2lyY2xlIGN4PVwiI3hcIiBjeT1cIjBcIiByPVwiI3JcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNjMlwiIHN0cm9rZS13aWR0aD1cIiNzd1wiPlwiXCJcIlxuICAgICAgICAgICAgICAgICAgICBcIlwiXCI8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiY3lcIiB2YWx1ZXM9XCIxOTA7LTEwXCIgdGltZXM9XCIwOzFcIiBcIlwiXCJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiZHVyPVwiI3tkfXNcIiBiZWdpbj1cIiN7aWR4fXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIi8+XCJcIlwiXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcIjwvY2lyY2xlPlwiXCJcIlxuICAgICAgICAgICAgICAgICAgICBcIlwiXCI8Y2lyY2xlIGN4PVwiI3hcIiBjeT1cIjBcIiByPVwiI3JcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNjMlwiIHN0cm9rZS13aWR0aD1cIiNzd1wiPlwiXCJcIlxuICAgICAgICAgICAgICAgICAgICBcIlwiXCI8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiY3lcIiB2YWx1ZXM9XCIzOTA7MTkwXCIgdGltZXM9XCIwOzFcIiBcIlwiXCJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiZHVyPVwiI3tkfXNcIiBiZWdpbj1cIiN7aWR4fXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIi8+XCJcIlwiXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcIjwvY2lyY2xlPlwiXCJcIlxuICAgICAgICAgICAgICAgIF0uam9pbihcIlwiKVxuICAgICAgICAgICAgd3JhcChyZXQuam9pbihcIlwiKSArIFwiPC9zdmc+XCIpXG5cbiAgICBoYW5kbGVyID1cbiAgICAgICAgcXVldWU6IHt9XG4gICAgICAgIHJ1bm5pbmc6IGZhbHNlXG4gICAgICAgIG1haW46ICh0aW1lc3RhbXApIC0+XG4gICAgICAgICAgICBrZWVwb24gPSBmYWxzZVxuICAgICAgICAgICAgcmVtb3ZlZCA9IFtdXG4gICAgICAgICAgICBmb3IgayxmdW5jIG9mIEBxdWV1ZSA9PlxuICAgICAgICAgICAgICAgIHJldCA9IGZ1bmMgdGltZXN0YW1wXG4gICAgICAgICAgICAgICAgaWYgIXJldCA9PiByZW1vdmVkLnB1c2ggZnVuY1xuICAgICAgICAgICAgICAgIGtlZXBvbiA9IGtlZXBvbiBvciByZXRcbiAgICAgICAgICAgIGZvciBrLGZ1bmMgb2YgQHF1ZXVlID0+IGlmIHJlbW92ZWQuaW5kZXhPZihmdW5jKSA+PSAwID0+IGRlbGV0ZSBAcXVldWVba11cbiAgICAgICAgICAgIGlmIGtlZXBvbiA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKH4+IEBtYWluIGl0KVxuICAgICAgICAgICAgZWxzZSBAcnVubmluZyA9IGZhbHNlXG4gICAgICAgIGFkZDogKGtleSwgZikgLT5cbiAgICAgICAgICAgIGlmICFAcXVldWVba2V5XSA9PiBAcXVldWVba2V5XSA9IGZcbiAgICAgICAgICAgIGlmICFAcnVubmluZyA9PlxuICAgICAgICAgICAgICAgIEBydW5uaW5nID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSAofj4gQG1haW4gaXQpXG5cblxuICAgIHdpbmRvdy5sZEJhciA9IGxkQmFyID0gKHNlbGVjdG9yLCBvcHRpb24gPSB7fSkgLT5cbiAgICAgICAgeG1sbnMgPSB4bGluazogXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgICAgcm9vdCA9IGlmIHR5cGVvZiEgc2VsZWN0b3IgaXMgXFxTdHJpbmdcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Igc2VsZWN0b3JcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgc2VsZWN0b3JcblxuICAgICAgICBpZiAhcm9vdC5sZEJhciA9PiByb290LmxkQmFyID0gQFxuICAgICAgICBlbHNlIHJldHVybiByb290LmxkQmFyXG5cbiAgICAgICAgY2xzID0gcm9vdC5nZXRBdHRyaWJ1dGUoXFxjbGFzcykgb3IgJydcbiAgICAgICAgaWYgIX5jbHMuaW5kZXhPZignbGRCYXInKSA9PiByb290LnNldEF0dHJpYnV0ZSBcXGNsYXNzLCBcIiNjbHMgbGRCYXJcIlxuICAgICAgICBpZC1wcmVmaXggPSBcImxkQmFyLSN7TWF0aC5yYW5kb20hdG9TdHJpbmcgMTYgLnN1YnN0cmluZyAyfVwiXG4gICAgICAgIGlkID1cbiAgICAgICAgICAgIGtleTogaWQtcHJlZml4XG4gICAgICAgICAgICBjbGlwOiBcIiN7aWQtcHJlZml4fS1jbGlwXCJcbiAgICAgICAgICAgIGZpbHRlcjogXCIje2lkLXByZWZpeH0tZmlsdGVyXCJcbiAgICAgICAgICAgIHBhdHRlcm46IFwiI3tpZC1wcmVmaXh9LXBhdHRlcm5cIlxuICAgICAgICAgICAgbWFzazogXCIje2lkLXByZWZpeH0tbWFza1wiXG4gICAgICAgICAgICBtYXNrLXBhdGg6IFwiI3tpZC1wcmVmaXh9LW1hc2stcGF0aFwiXG4gICAgICAgIGRvbVRyZWUgPSAobixvKSAtPlxuICAgICAgICAgICAgbiA9IG5ld05vZGUgblxuICAgICAgICAgICAgZm9yIGssdiBvZiBvID0+IGlmIGsgIT0gXFxhdHRyID0+IG4uYXBwZW5kQ2hpbGQgZG9tVHJlZShrLCB2IG9yIHt9KVxuICAgICAgICAgICAgbi5hdHRycyhvLmF0dHIgb3Ige30pXG4gICAgICAgICAgICBuXG4gICAgICAgIG5ld05vZGUgPSAobikgLT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgblxuICAgICAgICBkb2N1bWVudC5ib2R5Ll9fcHJvdG9fXy5fX3Byb3RvX18uX19wcm90b19fXG4gICAgICAgICAgICAuLnRleHQgPSAodCkgLT4gQGFwcGVuZENoaWxkIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQpXG4gICAgICAgICAgICAuLmF0dHJzID0gKG8pIC0+IGZvciBrLHYgb2YgbyA9PlxuICAgICAgICAgICAgICAgIHJldCA9IC8oW146XSspOihbXjpdKykvLmV4ZWMoaylcbiAgICAgICAgICAgICAgICBpZiAhcmV0IG9yICF4bWxuc1tyZXQuMV0gPT4gQHNldEF0dHJpYnV0ZSBrLCB2XG4gICAgICAgICAgICAgICAgZWxzZSBAc2V0QXR0cmlidXRlTlMgeG1sbnNbcmV0LjFdLCBrLCB2XG4gICAgICAgICAgICAuLnN0eWxlcyA9IChvKSAtPiBmb3Igayx2IG9mIG8gPT4gQHN0eWxlW2tdID0gdlxuICAgICAgICAgICAgLi5hcHBlbmQgPSAobikgLT4gQGFwcGVuZENoaWxkIHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMgXCJodHRwOi8vd3d3LnczLm9nLzIwMDAvc3ZnXCIsIG5cbiAgICAgICAgICAgIC4uYXR0ciA9IChuLHYpIC0+IGlmIHY/ID0+IEBzZXRBdHRyaWJ1dGUgbiwgdiBlbHNlIEBnZXRBdHRyaWJ1dGUgblxuICAgICAgICBjb25maWcgPVxuICAgICAgICAgICAgXCJ0eXBlXCI6ICdzdHJva2UnXG4gICAgICAgICAgICBcImltZ1wiOiAnJ1xuICAgICAgICAgICAgXCJwYXRoXCI6ICdNMTAgMTBMOTAgMTBNOTAgOE05MCAxMidcbiAgICAgICAgICAgIFwiZmlsbC1kaXJcIjogXFxidHRcbiAgICAgICAgICAgIFwiZmlsbFwiOiBcXCMyNWJcbiAgICAgICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6IFxcI2RkZFxuICAgICAgICAgICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAzXG4gICAgICAgICAgICBcInBhdHRlcm4tc2l6ZVwiOiBudWxsXG4gICAgICAgICAgICBcInN0cm9rZS1kaXJcIjogXFxub3JtYWxcbiAgICAgICAgICAgIFwic3Ryb2tlXCI6IFxcIzI1YlxuICAgICAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogXFwzXG4gICAgICAgICAgICBcInN0cm9rZS10cmFpbFwiOiBcXCNkZGRcbiAgICAgICAgICAgIFwic3Ryb2tlLXRyYWlsLXdpZHRoXCI6IDAuNVxuICAgICAgICAgICAgXCJkdXJhdGlvblwiOiAxXG4gICAgICAgICAgICBcImVhc2luZ1wiOiBcXGxpbmVhclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiAwXG4gICAgICAgICAgICBcImltZy1zaXplXCI6IG51bGxcbiAgICAgICAgICAgIFwiYmJveFwiOiBudWxsXG4gICAgICAgICAgICBcInNldC1kaW1cIjogdHJ1ZVxuICAgICAgICAgICAgXCJhc3BlY3QtcmF0aW9cIjogXCJ4TWlkWU1pZFwiXG4gICAgICAgICAgICBcInRyYW5zaXRpb24taW5cIjogZmFsc2VcbiAgICAgICAgICAgIFwibWluXCI6IDBcbiAgICAgICAgICAgIFwibWF4XCI6IDEwMFxuICAgICAgICAgICAgXCJwcmVjaXNpb25cIjogMFxuICAgICAgICAgICAgXCJwYWRkaW5nXCI6IHVuZGVmaW5lZFxuXG4gICAgICAgIGNvbmZpZ1tcInByZXNldFwiXSA9IHJvb3QuYXR0cihcImRhdGEtcHJlc2V0XCIpIG9yIG9wdGlvbltcInByZXNldFwiXVxuXG4gICAgICAgIGlmIGNvbmZpZy5wcmVzZXQ/XG4gICAgICAgICAgICAjIHVzZSB0aGUgZGVmYXVsdCBwcmVzZXRcbiAgICAgICAgICAgIGNvbmZpZyA8PDwgcHJlc2V0c1tjb25maWcucHJlc2V0XVxuXG4gICAgICAgICMgb3ZlcndyaXRlIGlmIHRoZXJlIGFyZSBhcmd1bWVudHMgcGFzc2VkIHZpYSBkYXRhLSogYXR0cmlidXRlc1xuICAgICAgICBmb3IgYXR0ciBvZiBjb25maWdcbiAgICAgICAgICAgIGlmIHRoYXQgPSByb290LmF0dHIgXCJkYXRhLSN7YXR0cn1cIlxuICAgICAgICAgICAgICAgIGNvbmZpZ1thdHRyXSA9IHRoYXRcblxuICAgICAgICBjb25maWcgPDw8IG9wdGlvblxuICAgICAgICBpZiBjb25maWcuaW1nID0+IGNvbmZpZy5wYXRoID0gbnVsbFxuXG4gICAgICAgIGlzLXN0cm9rZSA9IGNvbmZpZy50eXBlID09IFxcc3Ryb2tlXG4gICAgICAgIHBhcnNlLXJlcyA9ICh2KSAtPlxuICAgICAgICAgICAgcGFyc2VyID0gL2RhdGE6bGRiYXJcXC9yZXMsKFteKCldKylcXCgoW14pXSspXFwpL1xuICAgICAgICAgICAgcmV0ID0gcGFyc2VyLmV4ZWModilcbiAgICAgICAgICAgIGlmICFyZXQgPT4gcmV0dXJuIHZcbiAgICAgICAgICAgIHJldCA9IG1ha2VbcmV0LjFdLmFwcGx5IG1ha2UsIHJldC4yLnNwbGl0KFxcLClcbiAgICAgICAgY29uZmlnLmZpbGwgPSBwYXJzZS1yZXMgY29uZmlnLmZpbGxcbiAgICAgICAgY29uZmlnLnN0cm9rZSA9IHBhcnNlLXJlcyBjb25maWcuc3Ryb2tlXG4gICAgICAgIGlmIGNvbmZpZ1tcInNldC1kaW1cIl0gPT0gXFxmYWxzZSA9PiBjb25maWdbXCJzZXQtZGltXCJdID0gZmFsc2VcblxuICAgICAgICBkb20gPVxuICAgICAgICAgICAgYXR0cjpcbiAgICAgICAgICAgICAgICBcInhtbG5zOnhsaW5rXCI6IFxcaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xuICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW86IGNvbmZpZ1tcImFzcGVjdC1yYXRpb1wiXVxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIlxuICAgICAgICAgICAgZGVmczpcbiAgICAgICAgICAgICAgICBmaWx0ZXI6XG4gICAgICAgICAgICAgICAgICAgIGF0dHI6IGlkOiBpZC5maWx0ZXIsIHg6IC0xLCB5OiAtMSwgd2lkdGg6IDMsIGhlaWdodDogM1xuICAgICAgICAgICAgICAgICAgICBmZU1vcnBob2xvZ3k6IGF0dHI6XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogKGlmICtjb25maWdbXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiXT49MCA9PiBcXGRpbGF0ZSBlbHNlIFxcZXJvZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IE1hdGguYWJzKCtjb25maWdbXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiXSlcbiAgICAgICAgICAgICAgICAgICAgZmVDb2xvck1hdHJpeDogYXR0cjoge3ZhbHVlczogJzAgMCAwIDAgMSAgICAwIDAgMCAwIDEgICAgMCAwIDAgMCAxICAgIDAgMCAwIDEgMCcsIHJlc3VsdDogXCJjbVwifVxuICAgICAgICAgICAgICAgIG1hc2s6XG4gICAgICAgICAgICAgICAgICAgIGF0dHI6IGlkOiBpZC5tYXNrXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBhdHRyOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4bGluazpocmVmXCI6IGNvbmZpZy5pbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJ1cmwoXFwjI3tpZC5maWx0ZXJ9KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiAwLCB5OiAwLCB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCwgcHJlc2VydmVBc3BlY3RSYXRpbzogY29uZmlnW1wiYXNwZWN0LXJhdGlvXCJdXG5cbiAgICAgICAgICAgICAgICBnOlxuICAgICAgICAgICAgICAgICAgICBtYXNrOlxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cjogaWQ6IGlkLm1hc2stcGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogYXR0cjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkOiBjb25maWcucGF0aCBvciBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXFwjZmZmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBcXCNmZmZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwidXJsKFxcIyN7aWQuZmlsdGVyfSlcIlxuXG4gICAgICAgICAgICAgICAgY2xpcFBhdGg6XG4gICAgICAgICAgICAgICAgICAgIGF0dHI6IGlkOiBpZC5jbGlwXG4gICAgICAgICAgICAgICAgICAgIHJlY3Q6IHthdHRyOiBjbGFzczogXFxtYXNrLCBmaWxsOiBcXCMwMDB9XG4gICAgICAgICAgICAgICAgcGF0dGVybjpcbiAgICAgICAgICAgICAgICAgICAgYXR0cjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZC5wYXR0ZXJuLCBwYXR0ZXJuVW5pdHM6IFxcdXNlclNwYWNlT25Vc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6MCwgeTogMCwgd2lkdGg6IDMwMCwgaGVpZ2h0OiAzMDBcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGF0dHI6IHg6IDAsIHk6IDAsIHdpZHRoOiAzMDAsIGhlaWdodDogMzAwXG5cbiAgICAgICAgc3ZnID0gZG9tVHJlZSBcXHN2ZywgZG9tXG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IFxcZGl2XG4gICAgICAgIHRleHQuc2V0QXR0cmlidXRlIFxcY2xhc3MsIFxcbGRCYXItbGFiZWxcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZCBzdmdcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZCB0ZXh0XG5cbiAgICAgICAgZ3JvdXAgPSBbMCwwXVxuICAgICAgICBsZW5ndGggPSAwXG5cbiAgICAgICAgQGZpdCA9IH4+XG4gICAgICAgICAgICBpZiBjb25maWdbXCJiYm94XCJdID0+XG4gICAgICAgICAgICAgIGJveCA9IHRoYXQuc3BsaXQoJyAnKS5tYXAoLT4rKGl0LnRyaW0hKSlcbiAgICAgICAgICAgICAgYm94ID0ge3g6IGJveC4wLCB5OiBib3guMSwgd2lkdGg6IGJveC4yLCBoZWlnaHQ6IGJveC4zfVxuICAgICAgICAgICAgZWxzZSBib3ggPSBncm91cC4xLmdldEJCb3ghXG4gICAgICAgICAgICBpZiAhYm94IG9yIGJveC53aWR0aCA9PSAwIG9yIGJveC5oZWlnaHQgPT0gMCA9PiBib3ggPSB7eDogMCwgeTogMCwgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDB9XG4gICAgICAgICAgICBkID0gKE1hdGgubWF4LmFwcGx5KFxuICAgICAgICAgICAgICBudWxsLCA8W3N0cm9rZS13aWR0aCBzdHJva2UtdHJhaWwtd2lkdGggZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVdPi5tYXAoLT5jb25maWdbaXRdKSlcbiAgICAgICAgICAgICkgKiAxLjVcbiAgICAgICAgICAgIGlmIGNvbmZpZ1tcInBhZGRpbmdcIl0/ID0+IGQgPSArY29uZmlnW1wicGFkZGluZ1wiXVxuXG4gICAgICAgICAgICBzdmcuYXR0cnMgdmlld0JveDogW2JveC54IC0gZCwgYm94LnkgLSBkLCBib3gud2lkdGggKyBkICogMiwgYm94LmhlaWdodCArIGQgKiAyXS5qb2luKFwiIFwiKVxuICAgICAgICAgICAgaWYgY29uZmlnW1wic2V0LWRpbVwiXSA9PiA8W3dpZHRoIGhlaWdodF0+Lm1hcCB+PiBpZiAhcm9vdC5zdHlsZVtpdF0gb3IgQGZpdFtpdF0gPT5cbiAgICAgICAgICAgICAgcm9vdC5zdHlsZVtpdF0gPSBcIiN7Ym94W2l0XSArIGQgKiAyfXB4XCJcbiAgICAgICAgICAgICAgQGZpdFtpdF0gPSB0cnVlXG5cbiAgICAgICAgICAgIHJlY3QgPSBncm91cC4wLnF1ZXJ5U2VsZWN0b3IgXFxyZWN0XG4gICAgICAgICAgICBpZiByZWN0ID0+IHJlY3QuYXR0cnMgZG9cbiAgICAgICAgICAgICAgICB4OiBib3gueCAtIGQsIHk6IGJveC55IC0gZCwgd2lkdGg6IGJveC53aWR0aCArIGQgKiAyLCBoZWlnaHQ6IGJveC5oZWlnaHQgKyBkICogMlxuXG4gICAgICAgIGlmIGNvbmZpZy5wYXRoID0+XG4gICAgICAgICAgICBpZiBpcy1zdHJva2UgPT5cbiAgICAgICAgICAgICAgICBncm91cC4wID0gZG9tVHJlZSBcXGcsIHBhdGg6IGF0dHI6XG4gICAgICAgICAgICAgICAgICAgIGQ6IGNvbmZpZy5wYXRoXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IFxcbm9uZVxuICAgICAgICAgICAgICAgICAgICBjbGFzczogXFxiYXNlbGluZVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGdyb3VwLjAgPSBkb21UcmVlIFxcZywgcmVjdDogYXR0cjpcbiAgICAgICAgICAgICAgICAgICAgeDogMCwgeTogMCwgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDBcbiAgICAgICAgICAgICAgICAgICAgbWFzazogXCJ1cmwoXFwjI3tpZC5tYXNrLXBhdGh9KVwiLCBmaWxsOiBjb25maWdbXCJmaWxsLWJhY2tncm91bmRcIl1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFxcZnJhbWVcblxuICAgICAgICAgICAgc3ZnLmFwcGVuZENoaWxkIGdyb3VwLjBcbiAgICAgICAgICAgIGdyb3VwLjEgPSBkb21UcmVlIFxcZywgcGF0aDogYXR0cjpcbiAgICAgICAgICAgICAgICBkOiBjb25maWcucGF0aCwgY2xhc3M6IGlmIGlzLXN0cm9rZSA9PiBcXG1haW5saW5lIGVsc2UgXFxzb2xpZFxuICAgICAgICAgICAgICAgIFwiY2xpcC1wYXRoXCI6IGlmIGNvbmZpZy50eXBlID09IFxcZmlsbCA9PiBcInVybChcXCMje2lkLmNsaXB9KVwiIGVsc2UgJydcbiAgICAgICAgICAgIHN2Zy5hcHBlbmRDaGlsZCBncm91cC4xXG4gICAgICAgICAgICBwYXRoMCA9IGdyb3VwLjAucXVlcnlTZWxlY3RvciAoaWYgaXMtc3Ryb2tlID0+IFxccGF0aCBlbHNlIFxccmVjdClcbiAgICAgICAgICAgIHBhdGgxID0gZ3JvdXAuMS5xdWVyeVNlbGVjdG9yIFxccGF0aFxuICAgICAgICAgICAgaWYgaXMtc3Ryb2tlID0+IHBhdGgxLmF0dHJzIGZpbGw6IFxcbm9uZVxuXG4gICAgICAgICAgICBwYXRpbWcgPSBzdmcucXVlcnlTZWxlY3RvciAncGF0dGVybiBpbWFnZSdcbiAgICAgICAgICAgIGltZyA9IG5ldyBJbWFnZSFcbiAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyIFxcbG9hZCwgLT5cbiAgICAgICAgICAgICAgICBib3ggPSBpZiBjb25maWdbXCJwYXR0ZXJuLXNpemVcIl0gPT4ge3dpZHRoOiArdGhhdCwgaGVpZ2h0OiArdGhhdH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIGltZy53aWR0aCBhbmQgaW1nLmhlaWdodCA9PiB7d2lkdGg6IGltZy53aWR0aCwgaGVpZ2h0OiBpbWcuaGVpZ2h0fVxuICAgICAgICAgICAgICAgIGVsc2Uge3dpZHRoOiAzMDAsIGhlaWdodDogMzAwfVxuICAgICAgICAgICAgICAgIHN2Zy5xdWVyeVNlbGVjdG9yIFxccGF0dGVybiAuYXR0cnMge3dpZHRoOiBib3gud2lkdGgsIGhlaWdodDogYm94LmhlaWdodH1cbiAgICAgICAgICAgICAgICBwYXRpbWcuYXR0cnMge3dpZHRoOiBib3gud2lkdGgsIGhlaWdodDogYm94LmhlaWdodH1cbiAgICAgICAgICAgIGlmIC8uK1xcLi4rfF5kYXRhOi8uZXhlYyhpZiAhaXMtc3Ryb2tlID0+IGNvbmZpZy5maWxsIGVsc2UgY29uZmlnLnN0cm9rZSkgPT5cbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gaWYgIWlzLXN0cm9rZSA9PiBjb25maWcuZmlsbCBlbHNlIGNvbmZpZy5zdHJva2VcbiAgICAgICAgICAgICAgICBwYXRpbWcuYXR0cnMgXCJ4bGluazpocmVmXCI6IGltZy5zcmMgI2lmICFpcy1zdHJva2UgPT4gY29uZmlnLmZpbGwgZWxzZSBjb25maWcuc3Ryb2tlXG5cbiAgICAgICAgICAgIGlmIGlzLXN0cm9rZSA9PlxuICAgICAgICAgICAgICAgIHBhdGgwLmF0dHJzIHN0cm9rZTogY29uZmlnW1wic3Ryb2tlLXRyYWlsXCJdLCBcInN0cm9rZS13aWR0aFwiOiBjb25maWdbXCJzdHJva2UtdHJhaWwtd2lkdGhcIl1cbiAgICAgICAgICAgICAgICBwYXRoMS5hdHRycyBkb1xuICAgICAgICAgICAgICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBjb25maWdbXCJzdHJva2Utd2lkdGhcIl1cbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBpZiAvLitcXC4uK3xeZGF0YTovLmV4ZWMoY29uZmlnLnN0cm9rZSkgPT4gXCJ1cmwoXFwjI3tpZC5wYXR0ZXJufSlcIiBlbHNlIGNvbmZpZy5zdHJva2VcbiAgICAgICAgICAgIGlmIGNvbmZpZy5maWxsIGFuZCAhaXMtc3Ryb2tlID0+XG4gICAgICAgICAgICAgICAgcGF0aDEuYXR0cnMgZG9cbiAgICAgICAgICAgICAgICAgICAgZmlsbDogaWYgLy4rXFwuLit8XmRhdGE6Ly5leGVjKGNvbmZpZy5maWxsKSA9PiBcInVybChcXCMje2lkLnBhdHRlcm59KVwiIGVsc2UgY29uZmlnLmZpbGxcblxuICAgICAgICAgICAgbGVuZ3RoID0gcGF0aDEuZ2V0VG90YWxMZW5ndGghXG4gICAgICAgICAgICBAZml0IVxuICAgICAgICAgICAgQGluaXRlZCA9IHRydWVcbiAgICAgICAgZWxzZSBpZiBjb25maWcuaW1nID0+XG4gICAgICAgICAgICBpZiBjb25maWdbXCJpbWctc2l6ZVwiXSA9PlxuICAgICAgICAgICAgICAgIHJldCA9IGNvbmZpZ1tcImltZy1zaXplXCJdLnNwbGl0KFxcLClcbiAgICAgICAgICAgICAgICBzaXplID0ge3dpZHRoOiArcmV0LjAsIGhlaWdodDogK3JldC4xfVxuICAgICAgICAgICAgZWxzZSBzaXplID0ge3dpZHRoOiAxMDAsIGhlaWdodDogMTAwfVxuXG4gICAgICAgICAgICBncm91cC4wID0gZG9tVHJlZSBcXGcsIHJlY3Q6IGF0dHI6XG4gICAgICAgICAgICAgICAgeDogMCwgeTogMCwgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAsIG1hc2s6IFwidXJsKFxcIyN7aWQubWFza30pXCIsIGZpbGw6IGNvbmZpZ1tcImZpbGwtYmFja2dyb3VuZFwiXVxuICAgICAgICAgICAgc3ZnLnF1ZXJ5U2VsZWN0b3IgJ21hc2sgaW1hZ2UnIC5hdHRycyBkb1xuICAgICAgICAgICAgICAgIHdpZHRoOiBzaXplLndpZHRoLCBoZWlnaHQ6IHNpemUuaGVpZ2h0XG4gICAgICAgICAgICBncm91cC4xID0gZG9tVHJlZSBcXGcsIGltYWdlOiBhdHRyOlxuICAgICAgICAgICAgICAgIHdpZHRoOiBzaXplLndpZHRoLCBoZWlnaHQ6IHNpemUuaGVpZ2h0LCB4OiAwLCB5OiAwLCBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBjb25maWdbXCJhc3BlY3QtcmF0aW9cIl1cbiAgICAgICAgICAgICAgICAjd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAsIHg6IDAsIHk6IDAsIHByZXNlcnZlQXNwZWN0UmF0aW86IFwieE1pZFlNaWRcIlxuICAgICAgICAgICAgICAgIFwiY2xpcC1wYXRoXCI6IGlmIGNvbmZpZy50eXBlID09IFxcZmlsbCA9PiBcInVybChcXCMje2lkLmNsaXB9KVwiIGVsc2UgJydcbiAgICAgICAgICAgICAgICBcInhsaW5rOmhyZWZcIjogY29uZmlnLmltZywgY2xhc3M6IFxcc29saWRcbiAgICAgICAgICAgIGltZyA9IG5ldyBJbWFnZSFcbiAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyIFxcbG9hZCwgfj5cbiAgICAgICAgICAgICAgICBpZiBjb25maWdbXCJpbWctc2l6ZVwiXSA9PlxuICAgICAgICAgICAgICAgICAgICByZXQgPSBjb25maWdbXCJpbWctc2l6ZVwiXS5zcGxpdChcXCwpXG4gICAgICAgICAgICAgICAgICAgIHNpemUgPSB7d2lkdGg6ICtyZXQuMCwgaGVpZ2h0OiArcmV0LjF9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiBpbWcud2lkdGggYW5kIGltZy5oZWlnaHQgPT4gc2l6ZSA9IHt3aWR0aDogaW1nLndpZHRoLCBoZWlnaHQ6IGltZy5oZWlnaHR9XG4gICAgICAgICAgICAgICAgZWxzZSBzaXplID0ge3dpZHRoOiAxMDAsIGhlaWdodDogMTAwfVxuICAgICAgICAgICAgICAgIHN2Zy5xdWVyeVNlbGVjdG9yICdtYXNrIGltYWdlJyAuYXR0cnMgZG9cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsIGhlaWdodDogc2l6ZS5oZWlnaHRcbiAgICAgICAgICAgICAgICBncm91cC4xLnF1ZXJ5U2VsZWN0b3IgJ2ltYWdlJyAuYXR0cnMgZG9cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsIGhlaWdodDogc2l6ZS5oZWlnaHRcblxuICAgICAgICAgICAgICAgIEBmaXQhXG4gICAgICAgICAgICAgICAgQHNldCB1bmRlZmluZWQsIGZhbHNlXG4gICAgICAgICAgICAgICAgQGluaXRlZCA9IHRydWVcbiAgICAgICAgICAgIGltZy5zcmMgPSBjb25maWcuaW1nXG4gICAgICAgICAgICBzdmcuYXBwZW5kQ2hpbGQgZ3JvdXAuMFxuICAgICAgICAgICAgc3ZnLmFwcGVuZENoaWxkIGdyb3VwLjFcbiAgICAgICAgc3ZnLmF0dHJzIHdpZHRoOiBcXDEwMCUsIGhlaWdodDogXFwxMDAlICMsIHZpZXdCb3g6ICcwIDAgMTAwIDEwMCdcblxuICAgICAgICBAdHJhbnNpdGlvbiA9XG4gICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICBzcmM6IDBcbiAgICAgICAgICAgICAgICBkZXM6IDBcbiAgICAgICAgICAgIHRpbWU6IHt9XG5cbiAgICAgICAgICAgIGVhc2U6ICh0LGIsYyxkKSAtPlxuICAgICAgICAgICAgICAgIHQgPSB0IC8gKGQgKiAwLjUpXG4gICAgICAgICAgICAgICAgaWYgdCA8IDEgPT4gcmV0dXJuIGMgKiAwLjUgKiB0ICogdCArIGJcbiAgICAgICAgICAgICAgICB0ID0gdCAtIDFcbiAgICAgICAgICAgICAgICByZXR1cm4gLWMgKiAwLjUgKiAodCoodCAtIDIpIC0gMSkgKyBiXG5cbiAgICAgICAgICAgIGhhbmRsZXI6ICh0aW1lLCBkb1RyYW5zaXRpb24gPSB0cnVlKSAtPlxuICAgICAgICAgICAgICAgIGlmICFAdGltZS5zcmM/ID0+IEB0aW1lLnNyYyA9IHRpbWVcbiAgICAgICAgICAgICAgICBbbWluLG1heCxwcmVjXSA9IFtjb25maWdbXCJtaW5cIl0sIGNvbmZpZ1tcIm1heFwiXSwxL2NvbmZpZ1tcInByZWNpc2lvblwiXV1cbiAgICAgICAgICAgICAgICBbZHYsIGR0LCBkdXJdID0gW0B2YWx1ZS5kZXMgLSBAdmFsdWUuc3JjLCAodGltZSAtIEB0aW1lLnNyYykgKiAwLjAwMSwgK2NvbmZpZ1tcImR1cmF0aW9uXCJdIG9yIDFdXG4gICAgICAgICAgICAgICAgdiA9IGlmIGRvVHJhbnNpdGlvbiA9PiBAZWFzZShkdCwgQHZhbHVlLnNyYywgZHYsIGR1cikgZWxzZSBAdmFsdWUuZGVzXG4gICAgICAgICAgICAgICAgaWYgY29uZmlnLnByZWNpc2lvbiA9PiB2ID0gTWF0aC5yb3VuZCh2ICogcHJlYykgLyBwcmVjXG4gICAgICAgICAgICAgICAgZWxzZSBpZiBkb1RyYW5zaXRpb24gPT4gdiA9IE1hdGgucm91bmQodilcbiAgICAgICAgICAgICAgICB2ID4/PSBtaW5cbiAgICAgICAgICAgICAgICB2IDw/PSBtYXhcbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gdlxuICAgICAgICAgICAgICAgIHAgPSAxMDAuMCAqICh2IC0gbWluICkgLyAoIG1heCAtIG1pbiApXG4gICAgICAgICAgICAgICAgaWYgaXMtc3Ryb2tlID0+XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBwYXRoMVxuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0cm9rZS1kYXNoYXJyYXlcIjogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIGNvbmZpZ1tcInN0cm9rZS1kaXJcIl0gPT0gXFxyZXZlcnNlID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMCAje2xlbmd0aCAqICgxMDAgLSBwKSAqIDAuMDF9ICN7bGVuZ3RoICogcCAqIDAuMDF9IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgPT4gXCIje3AgKiAwLjAxICogbGVuZ3RofSAjeygxMDAgLSBwKSAqIDAuMDEgKiBsZW5ndGggKyAxfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBib3ggPSBncm91cC4xLmdldEJCb3ghXG4gICAgICAgICAgICAgICAgICAgIGRpciA9IGNvbmZpZ1tcImZpbGwtZGlyXCJdXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlID0gaWYgZGlyID09IFxcYnR0IG9yICFkaXIgPT4gZG9cbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGJveC55ICsgYm94LmhlaWdodCAqICgxMDAgLSBwKSAqIDAuMDFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYm94LmhlaWdodCAqIHAgKiAwLjAxXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBib3gueCwgd2lkdGg6IGJveC53aWR0aFxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIGRpciA9PSBcXHR0YiA9PiBkb1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogYm94LnksIGhlaWdodDogYm94LmhlaWdodCAqIHAgKiAwLjAxXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBib3gueCwgd2lkdGg6IGJveC53aWR0aFxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIGRpciA9PSBcXGx0ciA9PiBkb1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogYm94LnksIGhlaWdodDogYm94LmhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogYm94LngsIHdpZHRoOiBib3gud2lkdGggKiBwICogMC4wMVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIGRpciA9PSBcXHJ0bCA9PiBkb1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogYm94LnksIGhlaWdodDogYm94LmhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogYm94LnggKyBib3gud2lkdGggKiAoMTAwIC0gcCkgKiAwLjAxXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYm94LndpZHRoICogcCAqIDAuMDFcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHN2Zy5xdWVyeVNlbGVjdG9yIFxccmVjdFxuICAgICAgICAgICAgICAgIG5vZGUuYXR0cnMgc3R5bGVcbiAgICAgICAgICAgICAgICBpZiBkdCA+PSBkdXIgPT4gZGVsZXRlIEB0aW1lLnNyYzsgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIHN0YXJ0OiAoc3JjLCBkZXMsIGRvVHJhbnNpdGlvbikgLT5cbiAgICAgICAgICAgICAgICBAdmFsdWUgPDw8IHtzcmMsIGRlc31cbiAgICAgICAgICAgICAgICAhISggcm9vdC5vZmZzZXRXaWR0aCB8fCByb290Lm9mZnNldEhlaWdodCB8fCByb290LmdldENsaWVudFJlY3RzIWxlbmd0aCApXG4gICAgICAgICAgICAgICAgaWYgIWRvVHJhbnNpdGlvbiBvciAhKCByb290Lm9mZnNldFdpZHRoIHx8IHJvb3Qub2Zmc2V0SGVpZ2h0IHx8IHJvb3QuZ2V0Q2xpZW50UmVjdHMhbGVuZ3RoICkgPT5cbiAgICAgICAgICAgICAgICAgICAgQHRpbWUuc3JjID0gMFxuICAgICAgICAgICAgICAgICAgICBAaGFuZGxlciAxMDAwLCBmYWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICBoYW5kbGVyLmFkZCBpZC5rZXksICh0aW1lKSB+PiByZXR1cm4gQGhhbmRsZXIgdGltZVxuXG4gICAgICAgIEBzZXQgPSAodixkb1RyYW5zaXRpb24gPSB0cnVlKSAtPlxuICAgICAgICAgICAgc3JjID0gQHZhbHVlIG9yIDBcbiAgICAgICAgICAgIGlmIHY/ID0+IEB2YWx1ZSA9IHYgZWxzZSB2ID0gQHZhbHVlXG4gICAgICAgICAgICBkZXMgPSBAdmFsdWVcbiAgICAgICAgICAgIEB0cmFuc2l0aW9uLnN0YXJ0IHNyYywgZGVzLCBkb1RyYW5zaXRpb25cblxuICAgICAgICBAc2V0ICgrY29uZmlnLnZhbHVlIG9yIDApLCBjb25maWdbXCJ0cmFuc2l0aW9uLWluXCJdIG9yIGZhbHNlXG4gICAgICAgIEBcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIFxcbG9hZCwgKC0+XG4gICAgICAgIGZvciBub2RlIGluIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXFwubGRCYXIpID0+XG4gICAgICAgICAgaWYgIW5vZGUubGRCYXIgPT4gbm9kZS5sZEJhciA9IG5ldyBsZEJhciBub2RlXG4gICAgKSwgZmFsc2VcblxubW9kdWxlLmV4cG9ydHMgPSBsZEJhclxuIiwiZXhwb3J0IHByZXNldHMgPVxuICAgIHJhaW5ib3c6XG4gICAgICAgIFwidHlwZVwiOiAnc3Ryb2tlJ1xuICAgICAgICBcInBhdGhcIjogJ00xMCAxMEw5MCAxMCdcbiAgICAgICAgXCJzdHJva2VcIjogJ2RhdGE6bGRiYXIvcmVzLGdyYWRpZW50KDAsMSwjYTU1MWRmLCNmZDUxYWQsI2ZmN2Y4MiwjZmZiODc0LCNmZmViOTApJ1xuICAgICAgICBcImJib3hcIjogXCIxMCAxMCA4MCAxMFwiXG4gICAgZW5lcmd5OlxuICAgICAgICBcInR5cGVcIjogJ2ZpbGwnXG4gICAgICAgIFwicGF0aFwiOiAnTTE1IDVMODUgNUE1IDUgMCAwIDEgODUgMTVMMTUgMTVBNSA1IDAgMCAxIDE1IDUnXG4gICAgICAgIFwic3Ryb2tlXCI6IFxcI2YwMFxuICAgICAgICBcImZpbGxcIjogJ2RhdGE6bGRiYXIvcmVzLGdyYWRpZW50KDQ1LDIsIzRlOSwjOGZiLCM0ZTkpJ1xuICAgICAgICBcImZpbGwtZGlyXCI6IFwibHRyXCJcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmRcIjogXFwjNDQ0XG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogMVxuICAgICAgICBcImJib3hcIjogXCIxMCA1IDgwIDEwXCJcbiAgICBzdHJpcGU6XG4gICAgICAgIFwidHlwZVwiOiAnZmlsbCdcbiAgICAgICAgXCJwYXRoXCI6ICdNMTUgNUw4NSA1QTUgNSAwIDAgMSA4NSAxNUwxNSAxNUE1IDUgMCAwIDEgMTUgNSdcbiAgICAgICAgXCJzdHJva2VcIjogXFwjZjAwXG4gICAgICAgIFwiZmlsbFwiOiAnZGF0YTpsZGJhci9yZXMsc3RyaXBlKCMyNWIsIzU4ZSwxKSdcbiAgICAgICAgXCJmaWxsLWRpclwiOiBcImx0clwiXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6IFxcI2RkZFxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDFcbiAgICAgICAgXCJiYm94XCI6IFwiMTAgNSA4MCAxMFwiXG4gICAgdGV4dDpcbiAgICAgICAgXCJ0eXBlXCI6ICdmaWxsJ1xuICAgICAgICBcImltZ1wiOiBcIlwiXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI3MFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCA3MCAyMFwiPjx0ZXh0IHg9XCIzNVwiIHk9XCIxMFwiIHRleHQtYW5jaG9yPVwibWlkZGxlXCIgZG9taW5hbnQtYmFzZWxpbmU9XCJjZW50cmFsXCIgZm9udC1mYW1pbHk9XCJhcmlhbFwiPkxPQURJTkc8L3RleHQ+PC9zdmc+XCJcIlwiXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogMS4zXG4gICAgICAgIFwicGF0dGVybi1zaXplXCI6IDEwMFxuICAgICAgICBcImZpbGwtZGlyXCI6IFwibHRyXCJcbiAgICAgICAgXCJpbWctc2l6ZVwiOiBcIjcwLDIwXCJcbiAgICAgICAgXCJiYm94XCI6IFwiMCAwIDcwIDIwXCJcbiAgICBsaW5lOlxuICAgICAgICBcInR5cGVcIjogJ3N0cm9rZSdcbiAgICAgICAgXCJwYXRoXCI6ICdNMTAgMTBMOTAgMTAnXG4gICAgICAgIFwic3Ryb2tlXCI6IFxcIzI1YlxuICAgICAgICBcInN0cm9rZS13aWR0aFwiOiAzXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsXCI6IFxcI2RkZFxuICAgICAgICBcInN0cm9rZS10cmFpbC13aWR0aFwiOiAxXG4gICAgICAgIFwiYmJveFwiOiBcIjEwIDEwIDgwIDEwXCJcbiAgICBmYW46XG4gICAgICAgIFwidHlwZVwiOiAnc3Ryb2tlJ1xuICAgICAgICBcInBhdGhcIjogJ00xMCA5MEE0MCA0MCAwIDAgMSA5MCA5MCdcbiAgICAgICAgXCJmaWxsLWRpclwiOiBcXGJ0dFxuICAgICAgICBcImZpbGxcIjogXFwjMjViXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6IFxcI2RkZFxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDNcbiAgICAgICAgXCJzdHJva2UtZGlyXCI6IFxcbm9ybWFsXG4gICAgICAgIFwic3Ryb2tlXCI6IFxcIzI1YlxuICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBcXDNcbiAgICAgICAgXCJzdHJva2UtdHJhaWxcIjogXFwjZGRkXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsLXdpZHRoXCI6IDAuNVxuICAgICAgICBcImJib3hcIjogXCIxMCA1MCA4MCA0MFwiXG4gICAgY2lyY2xlOlxuICAgICAgICBcInR5cGVcIjogJ3N0cm9rZSdcbiAgICAgICAgXCJwYXRoXCI6ICdNNTAgMTBBNDAgNDAgMCAwIDEgNTAgOTBBNDAgNDAgMCAwIDEgNTAgMTAnXG4gICAgICAgIFwiZmlsbC1kaXJcIjogXFxidHRcbiAgICAgICAgXCJmaWxsXCI6IFxcIzI1YlxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZFwiOiBcXCNkZGRcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAzXG4gICAgICAgIFwic3Ryb2tlLWRpclwiOiBcXG5vcm1hbFxuICAgICAgICBcInN0cm9rZVwiOiBcXCMyNWJcbiAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogXFwzXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsXCI6IFxcI2RkZFxuICAgICAgICBcInN0cm9rZS10cmFpbC13aWR0aFwiOiAwLjVcbiAgICAgICAgXCJiYm94XCI6IFwiMTAgMTAgODAgODBcIlxuICAgIGJ1YmJsZTpcbiAgICAgICAgXCJ0eXBlXCI6ICdmaWxsJ1xuICAgICAgICBcInBhdGhcIjogJ001MCAxMEE0MCA0MCAwIDAgMSA1MCA5MEE0MCA0MCAwIDAgMSA1MCAxMCdcbiAgICAgICAgXCJmaWxsLWRpclwiOiBcXGJ0dFxuICAgICAgICBcImZpbGxcIjogJ2RhdGE6bGRiYXIvcmVzLGJ1YmJsZSgjMzlkLCNjZWYpJ1xuICAgICAgICBcInBhdHRlcm4tc2l6ZVwiOiBcIjE1MFwiXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6IFxcI2RkZFxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDJcbiAgICAgICAgXCJzdHJva2UtZGlyXCI6IFxcbm9ybWFsXG4gICAgICAgIFwic3Ryb2tlXCI6IFxcIzI1YlxuICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBcXDNcbiAgICAgICAgXCJzdHJva2UtdHJhaWxcIjogXFwjZGRkXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsLXdpZHRoXCI6IDAuNVxuICAgICAgICBcImJib3hcIjogXCIxMCAxMCA4MCA4MFwiXG4iLCIvL2TDqWZpbml0aW9uIGRlcyB2YXJpYWJsZXNcbmxldCBMaXN0ZVBsdWcgPSBbXSxcbiAgICBpID0gMCxcbiAgICB2YWxpZCA9IGZhbHNlO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIGxldCBub21icmVfdXJsID0gZXh0cmFpdE5vbWJyZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gJy9hbHN0b20vYmFzZWxpbmUtdHJhaW4vJyArIG5vbWJyZV91cmwpIHtcbiAgICAgICAgLy9pZGVudGlmaWNhdGlvbiBkZSBsYSBwcm9ncmVzcyBiYXJcbiAgICAgICAgcHJnYmFyID0gbmV3IGxkQmFyKFwiI3Rlc3QtcHJvZ3Jlc3NcIik7XG4gICAgfTtcbn0pO1xuLy8gRGVjbGFyYXRpb24gZCfDqXZlbmVtZW50IGF2YW50IGNoYXJnZW1lbnQgZGUgbCBhcGFnZVxuJCgnI3ZhbGlkLWFsbC1wbHVnJykuaGlkZSgpO1xuJCgnI2NhbmNlbC1hbGwtcGx1ZycpLmhpZGUoKTtcbi8vZGV0ZWN0aW9uIHNpIGxlIGJyb3dzZXIgZ8OocmUgbGUgZHJhZyZkcm9wXG52YXIgaXNBZHZhbmNlZFVwbG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmV0dXJuICgoJ2RyYWdnYWJsZScgaW4gZGl2KSB8fCAoJ29uZHJhZ3N0YXJ0JyBpbiBkaXYgJiYgJ29uZHJvcCcgaW4gZGl2KSkgJiYgJ0Zvcm1EYXRhJyBpbiB3aW5kb3cgJiYgJ0ZpbGVSZWFkZXInIGluIHdpbmRvdztcbn0oKTtcbnZhciAkZm9ybSA9ICQoJy5ib3gnKTtcbnZhciAkaW5wdXQgPSAkZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLFxuICAgICRsYWJlbCA9ICRmb3JtLmZpbmQoJ2xhYmVsJyksXG4gICAgc2hvd0ZpbGVzID0gZnVuY3Rpb24gKGZpbGVzKSB7XG4gICAgICAgICRsYWJlbC50ZXh0KGZpbGVzLmxlbmd0aCA+IDEgPyAoJGlucHV0LmF0dHIoJ2RhdGEtbXVsdGlwbGUtY2FwdGlvbicpIHx8ICcnKS5yZXBsYWNlKCd7Y291bnR9JywgZmlsZXMubGVuZ3RoKSA6IGZpbGVzWzBdLm5hbWUpO1xuICAgIH07XG5cbi8vYWpvdXRlciB1biBwbHVnXG5cbiQoJyNhZGQtZm9ybS1wbHVnJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIC8vICQoJyNjYXJkLWNvbnRlbnQtcGx1ZycpLmFwcGVuZChcInRlc3RcIik7XG4gICAgLy8gY29uc29sZS5sb2coJCgnLmNvbnRlbnQtbmFtZS1kcmFnLXBsdWcnKSlcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgICAkKCcjaW5wdXQtbmFtZS1wbHVnJykudmFsKCcnKTtcbiAgICAgICAgZHJvcHBlZEZpbGVzID0gZmFsc2U7XG4gICAgICAgICRmb3JtLnJlbW92ZUNsYXNzKCdpcy1zdWNjZXNzJyk7XG4gICAgICAgICQoJy5sYWJlbC1kcm9wJykuY3NzKCdmb250LXdlaWdodCcsICcnKTtcbiAgICAgICAgJCgnLmxhYmVsLWRyb3AnKS5odG1sKCc8c3Ryb25nPiBDaG9vc2UgYSBmaWxlIDwvc3Ryb25nPiA8c3BhbiBjbGFzcz1cImJveF9fZHJhZ25kcm9wXCI+b3IgZHJhZyBpdCBoZXJlIDwvc3Bhbj4uPC9sYWJlbD4nKTtcbiAgICAgICAgJCgnI2NvbnRlbnQtbmFtZS1kcmFnLXBsdWcnKS5zaG93KCk7XG4gICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufSlcbi8vb24gb3V2cmUgbGUgZm9ybSBwb3VyIGFqb3V0ZXJcblxuJCgnI2FkZFBsdWdzJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbn0pO1xuaWYgKGlzQWR2YW5jZWRVcGxvYWQpIHtcbiAgICB2YXIgZHJvcHBlZEZpbGVzID0gZmFsc2U7XG4gICAgJGZvcm0uYWRkQ2xhc3MoJ2hhcy1hZHZhbmNlZC11cGxvYWQnKTsgLy8gbGV0dGluZyB0aGUgQ1NTIHBhcnQgdG8ga25vdyBkcmFnJmRyb3AgaXMgc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyXG4gICAgJGZvcm0ub24oJ2RyYWcgZHJhZ3N0YXJ0IGRyYWdlbmQgZHJhZ292ZXIgZHJhZ2VudGVyIGRyYWdsZWF2ZSBkcm9wJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuICAgICRmb3JtLm9uKCdkcmFnb3ZlciBkcmFnZW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRmb3JtLmFkZENsYXNzKCdpcy1kcmFnb3ZlcicpO1xuICAgIH0pO1xuICAgICRmb3JtLm9uKCdkcmFnbGVhdmUgZHJhZ2VuZCBkcm9wJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkZm9ybS5yZW1vdmVDbGFzcygnaXMtZHJhZ292ZXInKTtcblxuICAgIH0pO1xuICAgICRmb3JtLm9uKCdkcm9wJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZHJvcHBlZEZpbGVzID0gZS5vcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcbiAgICAgICAgJGZvcm0udHJpZ2dlcignc3VibWl0Jyk7XG4gICAgICAgICQoJy5sYWJlbC1kcm9wJykudGV4dChkcm9wcGVkRmlsZXNbMF0ubmFtZSk7XG4gICAgICAgICQoJy5sYWJlbC1kcm9wJykuY3NzKCdmb250LXdlaWdodCcsICdib2xkJyk7XG4gICAgfSk7XG4gICAgJGZvcm0uY2hhbmdlKCdkcm9wJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZHJvcHBlZEZpbGVzID0gZS5vcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcbiAgICAgICAgJGZvcm0udHJpZ2dlcignc3VibWl0Jyk7XG4gICAgfSk7XG59XG4kZm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuJCgnI3ZhbGlkLXBsdWcnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBQbHVnID0ge307XG4gICAgaWYgKCQoJyNpbnB1dC1uYW1lLXBsdWcnKS52YWwoKSAhPSBcIlwiICYmIGRyb3BwZWRGaWxlcykge1xuXG4gICAgICAgICQoJyN2YWxpZC1hbGwtcGx1ZycpLnNob3coKTtcbiAgICAgICAgJCgnI2NhbmNlbC1hbGwtcGx1ZycpLnNob3coKTtcblxuICAgICAgICBQbHVnWyduYW1lX3BsdWcnXSA9ICQoJyNpbnB1dC1uYW1lLXBsdWcnKS52YWwoKTtcblxuICAgICAgICAvLyBQYXJ0aSBkdSB0cmFpdGVtZW50IGR1IGRyYWcgYW4gZHJvcCBmaWxlXG4gICAgICAgIGlmICgkZm9ybS5oYXNDbGFzcygnaXMtdXBsb2FkaW5nJykpIHJldHVybiBmYWxzZTtcbiAgICAgICAgc2hvd0ZpbGVzKGRyb3BwZWRGaWxlcyk7XG4gICAgICAgICRmb3JtLmFkZENsYXNzKCdpcy11cGxvYWRpbmcnKS5yZW1vdmVDbGFzcygnaXMtZXJyb3InKTtcblxuICAgICAgICBpZiAoaXNBZHZhbmNlZFVwbG9hZCkge1xuICAgICAgICAgICAgdmFyIGFqYXhEYXRhID0gbmV3IEZvcm1EYXRhKCRmb3JtLmdldCgwKSk7XG5cbiAgICAgICAgICAgIGlmIChkcm9wcGVkRmlsZXMpIHtcbiAgICAgICAgICAgICAgICAkLmVhY2goZHJvcHBlZEZpbGVzLCBmdW5jdGlvbiAoaSwgZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICBhamF4RGF0YS5hcHBlbmQoJGlucHV0LmF0dHIoJ25hbWUnKSwgZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIFBsdWdbJ2tleV9wbHVnJ10gPSBmaWxlLm5hbWU7XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFqYXhEYXRhKTtcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2Fsc3RvbS91cGxvYWRGaWxlJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgLypkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICdmaWxlJyA6IGFqYXhEYXRhLFxuICAgICAgICAgICAgICAgICAgICAnYnVja2V0JzogJ2FwcGxpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgJ3VwbG9hZF9yZXF1ZXN0JzogXCJ1cGxvYWRcIlxuICAgICAgICAgICAgICAgIH0sKi9cbiAgICAgICAgICAgICAgICB4aHI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHhociA9IG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZ0LmxvYWRlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGVyY2VudENvbXBsZXRlID0gKGV2dC5sb2FkZWQgLyBldnQudG90YWwpICogMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vRG8gc29tZXRoaW5nIHdpdGggdXBsb2FkIHByb2dyZXNzIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmdiYXIuc2V0KHBlcmNlbnRDb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBlcmNlbnRDb21wbGV0ZSA9PSAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN0ZXN0LXByb2dyZXNzXCIpLmFkZENsYXNzKCdpcy1ibGluaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldnQubG9hZGVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LnRvdGFsID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHhocjtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgZGF0YTogYWpheERhdGEsXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkZm9ybS5yZW1vdmVDbGFzcygnaXMtdXBsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjdGVzdC1wcm9ncmVzc1wiKS5yZW1vdmVDbGFzcygnaXMtYmxpbmsnKTtcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVQbHVnLnB1c2goUGx1Zyk7XG4gICAgICAgICAgICAgICAgICAgIExpc3RlUGx1Zy5mb3JFYWNoKHdyaXRlUGx1Zyk7XG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICRmb3JtLmFkZENsYXNzKGRhdGEuc3VjY2VzcyA9PSB0cnVlID8gJ2lzLXN1Y2Nlc3MnIDogJ2lzLWVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNjb250ZW50LW5hbWUtZHJhZy1wbHVnJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKExpc3RlUGx1ZylcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9nIHRoZSBlcnJvciwgc2hvdyBhbiBhbGVydCwgd2hhdGV2ZXIgd29ya3MgZm9yIHlvdVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNvcnJ5IGJvYnlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgaWZyYW1lTmFtZSA9ICd1cGxvYWRpZnJhbWUnICsgbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAkaWZyYW1lID0gJCgnPGlmcmFtZSBuYW1lPVwiJyArIGlmcmFtZU5hbWUgKyAnXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPjwvaWZyYW1lPicpO1xuXG4gICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRpZnJhbWUpO1xuICAgICAgICAgICAgJGZvcm0uYXR0cigndGFyZ2V0JywgaWZyYW1lTmFtZSk7XG5cbiAgICAgICAgICAgICRpZnJhbWUub25lKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZSgkaWZyYW1lLmNvbnRlbnRzKCkuZmluZCgnYm9keScpLnRleHQoKSk7XG4gICAgICAgICAgICAgICAgJGZvcm1cbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy11cGxvYWRpbmcnKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoZGF0YS5zdWNjZXNzID09IHRydWUgPyAnaXMtc3VjY2VzcycgOiAnaXMtZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cigndGFyZ2V0Jyk7XG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhLnN1Y2Nlc3MpICRlcnJvck1zZy50ZXh0KGRhdGEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICRmb3JtLnJlbW92ZUF0dHIoJ3RhcmdldCcpO1xuICAgICAgICAgICAgICAgICRpZnJhbWUucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgbmFtZSAmIGZpbGUgcGx1ZycpXG4gICAgfVxuXG5cbn0pXG5cbiQoJyN0ZXN0LXVwbG9hZCcpLm9uKFwiY2xpY2tcIiwgXCJidXR0b25cIiwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBmaWxlc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdG9yXCIpLmZpbGVzO1xuICAgIHZhciB0ZW1wRGVzdGluYXRpb24gPSBcInRlc3RcIlxuICAgIHZhciBuYW1lRmlsZSA9IFwiaW5pdFwiXG4gICAgdmFyIHVwbG9hZFN0YXR1cyA9IFwiUEVORElOR1wiXG4gICAgLy9PbiBkcmFnIGV0IGRyb3BcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6ICcvYWxzdG9tL3JlcXVlc3RGaWxlJyxcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAnYnVja2V0JzogJ2FwcGxpY2F0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRlbXBEZXN0aW5hdGlvbiA9IHJlc3BvbnNlLnBhdGhcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2Fsc3RvbS91cGxvYWRGaWxlJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAnYnVja2V0JzogJ2FwcGxpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgJ3VwbG9hZF9yZXF1ZXN0JzogXCJ1cGxvYWRcIixcbiAgICAgICAgICAgICAgICAgICAgJ2ZpbGVuYW1lJzogbmFtZUZpbGUsXG4gICAgICAgICAgICAgICAgICAgICd0ZW1wRGVzdGluYXRpb24nOiB0ZW1wRGVzdGluYXRpb25cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9hc2sgZm9yIHRoZSBzdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAkKCdtYWluJykuY3NzKCdvcGFjaXR5JywgXCIxXCIpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbiQoJyN2YWxpZC1hbGwtcGx1ZycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJ21haW4nKS5jc3MoJ29wYWNpdHknLCBcIjAuNFwiKTtcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xuICAgIGxldCBpZEJhc2VsaW5lID0gZXh0cmFpdE5vbWJyZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogJy9hbHN0b20vZmx1c2gtcGx1ZycsXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgJ2lkQmFzZWxpbmUnOiBpZEJhc2VsaW5lLFxuICAgICAgICAgICAgJ1BsdWdzJzogTGlzdGVQbHVnXG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgLy9hc2sgZm9yIHRoZSBzdGF0dXNcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9KVxufSlcbiQoJyNjb250ZW50LXRyLXBsdWcnKS5vbignY2xpY2snLCAnLnRkLXRhYmxlID4gLnRkLXBsdWcnLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCdtYWluJykuY3NzKCdvcGFjaXR5JywgXCIwLjRcIik7XG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcblxuICAgIGxldCBrZXkgPSAkKHRoaXMpWzBdW1wiaWRcIl07XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9kb253bG9hZEZpbGUnLFxuICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICdrZXknOiBrZXlcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgJCgnbWFpbicpLmNzcygnb3BhY2l0eScsIFwiMVwiKTtcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICB9KVxufSlcbiQoJyNwcmV2aW91cy1wbHVnJykub24oJ2NsaWNrJywgJy5jb250ZW50LWtleS1uYW1lLXBsdWcgPiBhJywgZnVuY3Rpb24gKCkge1xuXG4gICAgbGV0IGlkUGx1ZyA9IGV4dHJhaXROb21icmUoJCh0aGlzKVswXS5hdHRyKCdjbGFzcycpKTtcblxuICAgICQoJ21haW4nKS5jc3MoJ29wYWNpdHknLCBcIjAuNFwiKTtcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogJy9hbHN0b20vZGVsZXRlLXBsdWcvJyArIGlkUGx1ZyxcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgJCgnIycgKyBpZFBsdWcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgfSlcbn0pXG4kKCcjY2FuY2VsLWFsbC1wbHVnJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoJy5uZXctcGx1ZycpLnJlbW92ZSgpO1xuICAgIExpc3RlUGx1ZyA9IFwiXCI7XG59KVxuXG4vL0fDqXJlIGxlIGNsaXF1ZSBkZSBsYSBzdXBwcmVzc2lvblxuJCgnI3Nob3ctZG9uZS1wbHVnJykub24oJ2NsaWNrJywgJy5jb250ZW50LWtleS1uYW1lLXBsdWcgPiBhJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpWzBdW1wiaWRcIl1bMF0gPT0gXCJkXCIpIHtcbiAgICAgICAgZGVsZXRlUGx1ZyhleHRyYWl0Tm9tYnJlKCQodGhpcylbMF1bXCJpZFwiXSkpO1xuICAgIH1cbn0pO1xuLy9FeHRyYWl0IGxlIG5vbWJyZSBkJ3VuZSBzdHJlaW5nXG5mdW5jdGlvbiBleHRyYWl0Tm9tYnJlKHN0cikge1xuICAgIHJldHVybiBOdW1iZXIoc3RyLnJlcGxhY2UoL1teXFxkXS9nLCBcIlwiKSlcbn1cbi8vU3VwcmVzc2lvbiBkdSBwbHVnIGRhbnMgbGUgdGFibGVhdSBldCBsZSBmcm9udFxuZnVuY3Rpb24gZGVsZXRlUGx1Zyhwb3NpdGlvbikge1xuICAgIExpc3RlUGx1Zy5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgICQoJy5jb250ZW50LWtleS1uYW1lLXBsdWcnKS5yZW1vdmUoKTtcbiAgICBMaXN0ZVBsdWcuZm9yRWFjaCh3cml0ZVBsdWcpO1xufVxuXG5mdW5jdGlvbiB3cml0ZVBsdWcoZWxlbWVudCwgaW5kZXgsIGFycmF5KSB7XG4gICAgLy9UZXN0IGwnZXhpc3RlbmNlIGRlIGxhIGRpdiBkYW5zIGxlIGNhcyBvw7kgZWxsZSBleGlzdGUgbGEgcmVtcGxhY2Ugc2kgcGFzIGxhIG1ldCBlbiBwbGFjZVxuICAgIGlmICgkKCcja2V5LW5hbWUtJyArIGluZGV4KS5sZW5ndGgpIHtcbiAgICAgICAgJCgnI2tleS1uYW1lLScgKyBpbmRleCkucmVwbGFjZVdpdGgoXCI8c3BhbiBjbGFzcz0nY29udGVudC1rZXktbmFtZS1wbHVnIG5ldy1wbHVnJyBpZD0na2V5LW5hbWUtXCIgKyBpbmRleCArIFwiJz48cD5cIiArIGVsZW1lbnQubmFtZV9wbHVnICsgXCI8L3A+PHA+XCIgKyBlbGVtZW50LmtleV9wbHVnICsgXCI8L3A+PGEgaWQ9J2RlbGV0ZS1wbHVnLVwiICsgaW5kZXggKyBcIic+PGkgY2xhc3M9J2ZhcyBmYS10cmFzaC1hbHQgcG91YmVsbGUnPjwvaT48L2E+PC9zcGFuPlwiKVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoJyNzaG93LWRvbmUtcGx1ZycpLmFwcGVuZChcIjxzcGFuIGNsYXNzPSdjb250ZW50LWtleS1uYW1lLXBsdWcgbmV3LXBsdWcnIGlkPSdrZXktbmFtZS1cIiArIGluZGV4ICsgXCInPjxwPlwiICsgZWxlbWVudC5uYW1lX3BsdWcgKyBcIjwvcD48cD5cIiArIGVsZW1lbnQua2V5X3BsdWcgKyBcIjwvcD48YSBpZD0nZGVsZXRlLXBsdWctXCIgKyBpbmRleCArIFwiJz48aSBjbGFzcz0nZmFzIGZhLXRyYXNoLWFsdCBwb3ViZWxsZSc+PC9pPjwvYT48L3NwYW4+XCIpO1xuICAgIH1cblxufSIsIi8vIFZpZGFnZSBkZXMgaW5wdXRzIGF1eCBjaGFuZ2VtZW50IGRlIHNlbGVjdFxyXG4vLyAkKCdzZWxlY3RbbmFtZT1cInRyYWluc1twcm9qZWN0c11cIl0sIHNlbGVjdFtuYW1lPVwidHJhaW5zW3RyYWluVHlwZV1cIl0nKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgJCgnaW5wdXRbbmFtZT1cInRyYWluc1tuYW1lXVwiXScpLnZhbCgnJyk7XHJcbi8vIH0pO1xyXG5cclxuLypNYXNxdWFnZSBkZSBjZXJ0YWlucyDDqWxlbWVudCAqL1xyXG4kKCcjY3JlYXRlLWVydG1zLTEnKS5oaWRlKCk7XHJcbiQoJyNjcmVhdGUtZXJ0bXMtMicpLmhpZGUoKTtcclxuJChcIiNjcmVhdGUtZXJ0bXMtdHJhaW4tMVwiKS5oaWRlKCk7XHJcbiQoJyNjcmVhdGVfc291c3R5cGUnKS5oaWRlKCk7XHJcbiQoJyNjcmVhdGVfdHlwZScpLmhpZGUoKTtcclxuJCgnI21vZGFsLWJvZHknKS5oaWRlKCk7XHJcbiQoJyNtb2RhbF9iYXNlbGluZV9lcXVpcGVtZW50JykuaGlkZSgpO1xyXG4kKCcjY2xvc2UtbW9kYWwtZm9ybS1iYXNlbGluZS10cmFpbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNtb2RhbF9iYXNlbGluZV9lcXVpcGVtZW50JykuaGlkZSgpO1xyXG59KVxyXG5mb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xyXG4gICAgJCgnI2J0bi1iYXNlbGluZS0nICsgaSkuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxufVxyXG5sZXQgaWRFcXVpcG1lbnQgPSBcIlwiLFxyXG4gICAgaW5kZXhFVkM7XHJcbmxldCBuZXdfZXF1aXBtZW50X251bSA9IFwiXCIsXHJcbiAgICB0b3RhbEVxdWlwdCA9IFwiXCIsXHJcbiAgICBuZXdfZXF1aXBtZW50X251bV9zZXJpZSA9IFtdO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IG5vbWJyZV91cmwgPSBleHRyYWl0Tm9tYnJlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09ICcvYWxzdG9tL0luc3RhbmNlQmFzZWxpbmUvJyArIG5vbWJyZV91cmwpIHtcclxuXHJcbiAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAgICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja0Jhc2VsaW5lXCIsICkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICQoJyNzZWxlY3RfYmFzZWxpbmVfMScpLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3NlbGVjdF9iYXNlbGluZV8yJykuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAkKCcjc2VsZWN0X2Jhc2VsaW5lXzEnKS52YWwoJycpO1xyXG4gICAgICAgICAgICAkKCcjc2VsZWN0X2Jhc2VsaW5lXzInKS52YWwoJycpO1xyXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgJCgnI2Nsb3NlLW1vZGFsLWJhc2VsaW5lVG9UcmFpbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCdtYWluJykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAkKCcuZGVzY3JpcHRpb24nKS5yZW1vdmUoKTtcclxuICAgICAgICAkKCcjbW9kYWxfYmFzZWxpbmVfZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuICAgICAgICBuZXdfZXF1aXBtZW50X251bSA9IFwiXCI7XHJcbiAgICB9KVxyXG4gICAgJCgnI2Nsb3NlLWVxdWlwZW1lbnQtYmFzZWxpbmUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnbWFpbicpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgJCgnLmRlc2NyaXB0aW9uJykucmVtb3ZlKCk7XHJcbiAgICAgICAgJCgnI21vZGFsX2Jhc2VsaW5lX2VxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiAgICAgICAgbmV3X2VxdWlwbWVudF9udW0gPSBcIlwiO1xyXG4gICAgICAgIHRvdGFsRXF1aXB0ID0gXCJcIjtcclxuICAgIH0pXHJcbn0pXHJcblxyXG4kKCcjc2VsZWN0X3RyYWluJykuc2hvdygpO1xyXG4kKCcjc2VsZWN0X2xvY29tb3RpdmUnKS5zaG93KCk7XHJcblxyXG5sZXQgY3VycmVudF9jaG9pY2UgPSBcIlwiLFxyXG4gICAgZXJ0bXNfbGVmdCA9IGZhbHNlLFxyXG4gICAgZXJ0bXNfbWlkZGxlID0gZmFsc2UsXHJcbiAgICBlcnRtc19yaWdodCA9IGZhbHNlO1xyXG5cclxuJCgnI2Nsb3NlLW1vZGFsLWJhc2VsaW5lLTEnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoZXJ0bXNfcmlnaHQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLmFkZENsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLmhpZGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgZXJ0bXNfbGVmdCA9IGZhbHNlO1xyXG59KVxyXG4kKCcjY2xvc2UtbW9kYWwtYmFzZWxpbmUtMicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLmhpZGUoKTtcclxuICAgIGVydG1zX3JpZ2h0ID0gZmFsc2U7XHJcbn0pXHJcbiQoJyNlcnRtcy10cmFpbi0xJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgZXJ0bXNfbGVmdCA9IHRydWU7XHJcbiAgICBlcnRtc19taWRkbGUgPSBmYWxzZTtcclxuICAgIC8vbCdlcnRtcyBkZSBnYXVjaGUgc2VsZWN0aW9ubmVyXHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMScpLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMicpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjbGFiZWwtYmFzZWxpbmUtMScpLnRleHQoJ0Jhc2VsaW5lIGxlZnQnKTtcclxuICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtMycpO1xyXG4gICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuc2hvdygpO1xyXG4gICAgaWYgKGVydG1zX3JpZ2h0ID09IGZhbHNlKSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuaGlkZSgpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0pO1xyXG4kKCcjZXJ0bXMtdHJhaW4tMicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIGwnZXJ0bXMgZHUgbWlsaWV1IHNlbGVjdGlvbm5lclxyXG4gICAgZXJ0bXNfbGVmdCA9IGZhbHNlO1xyXG4gICAgZXJ0bXNfcmlnaHQgPSBmYWxzZTtcclxuICAgIGVydG1zX21pZGRsZSA9IHRydWU7XHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMicpLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMScpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMycpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjbGFiZWwtYmFzZWxpbmUtMScpLnRleHQoJ0Jhc2VsaW5lIG1pZGxlJyk7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5oaWRlKCk7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5zaG93KCk7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5hZGRDbGFzcygnb2Zmc2V0LW1kLTMnKTtcclxuXHJcbn0pO1xyXG4kKCcjZXJ0bXMtdHJhaW4tMycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIGwnZXJ0bXMgZGUgZHJvaXRlIHNlbGVjdGlvbm5lclxyXG4gICAgJCgnI2VydG1zLXRyYWluLTMnKS5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgZXJ0bXNfcmlnaHQgPSB0cnVlO1xyXG4gICAgZXJ0bXNfbWlkZGxlID0gZmFsc2U7XHJcbiAgICAkKCcjbGFiZWwtYmFzZWxpbmUtMicpLnRleHQoJ0Jhc2VsaW5lIHJpZ2h0Jyk7XHJcbiAgICBpZiAoZXJ0bXNfbGVmdCA9PSB0cnVlICYmIGVydG1zX21pZGRsZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtMycpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnNob3coKTtcclxuICAgIH0gZWxzZSBpZiAoZXJ0bXNfcmlnaHQgPT0gdHJ1ZSAmJiBlcnRtc19sZWZ0ID09IGZhbHNlKSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykucmVtb3ZlQ2xhc3MoJ29mZnNldC1tZC0zJyk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuaGlkZSgpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLmFkZENsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMicpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbn0pO1xyXG5cclxuXHJcbiQoJyNlcnRtcy1sb2NvLTEnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBlcnRtc19sZWZ0ID0gdHJ1ZTtcclxuICAgIGlmIChlcnRtc19yaWdodCA9PSB0cnVlKSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykucmVtb3ZlQ2xhc3MoJ29mZnNldC1tZC02Jyk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5zaG93KCk7XHJcbiAgICB9XHJcbiAgICAkKCcjbGFiZWwtYmFzZWxpbmUtMScpLnRleHQoJ0Jhc2VsaW5lIGxlZnQnKTtcclxuICAgICQoJyNlcnRtcy1sb2NvLTEnKS5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCgnI2VydG1zLWxvY28tMicpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjYnRuLWJhc2VsaW5lLTEnKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgJCgnI2J0bi1iYXNlbGluZS0zJykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxufSk7XHJcbiQoJyNlcnRtcy1sb2NvLTInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBlcnRtc19yaWdodCA9IHRydWU7XHJcbiAgICAkKCcjbGFiZWwtYmFzZWxpbmUtMicpLnRleHQoJ0Jhc2VsaW5lIHJpZ2h0Jyk7XHJcbiAgICAkKCcjYnRuLWJhc2VsaW5lLTMnKS5jc3MoJ29wYWNpdHknLCAnMScpXHJcbiAgICAkKCcjYnRuLWJhc2VsaW5lLTEnKS5jc3MoJ29wYWNpdHknLCAnMCcpXHJcbiAgICAkKCcjZXJ0bXMtbG9jby0yJykuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICQoJyNlcnRtcy1sb2NvLTEnKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgaWYgKGVydG1zX2xlZnQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG5cclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLmFkZENsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnNob3coKTtcclxuXHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbi8vUmVjdXBlcmUgbGUgc2VsZWN0IGRlIGxhIGJhc2VsaW5lIGV0IGxlIG1ldCBlbiB2aXN1ZWxcclxuJCgnI2FkZC1iYXNlbGluZS0xJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgaWYgKGVydG1zX21pZGRsZSkge1xyXG4gICAgICAgICQoJyNlcnRtcy10cmFpbi0zJykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuICAgICAgICAkKCcjZXJ0bXMtdHJhaW4tMScpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbiAgICB9IGVsc2UgaWYgKGVydG1zX2xlZnQpIHtcclxuICAgICAgICAkKCcjZXJ0bXMtdHJhaW4tMicpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbiAgICB9XHJcbiAgICAvLyAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5oaWRlKCk7XHJcbiAgICBsZXQgaWRCYXNlbGluZSA9ICQoJyNzZWxlY3RfYmFzZWxpbmVfMSBvcHRpb246c2VsZWN0ZWQnKS52YWwoKTtcclxuICAgICQoJyN0aXRsZV9iYXNlbGluZV9tb2RhbCcpLmh0bWwoJCgnI3NlbGVjdF9iYXNlbGluZV8xIG9wdGlvbjpzZWxlY3RlZCcpLnRleHQoKSk7XHJcbiAgICAvLyAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLnNob3coKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9DaGVja0VxdWlwZW1lbnRzLycgKyBpZEJhc2VsaW5lLFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbF9iYXNlbGluZV9lcXVpcGVtZW50Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKCdvcGFjaXR5JywgJzAuNCcpO1xyXG4gICAgICAgICAgICBsZXQgRXF1aXBtZW50cyA9IEpTT04ucGFyc2UocmVzcG9uc2UuZXF1aXBtZW50cyk7XHJcblxyXG4gICAgICAgICAgICBFcXVpcG1lbnRzLmZvckVhY2goQ291bnROdW1iZXJFcXVpcHQpO1xyXG4gICAgICAgICAgICBFcXVpcG1lbnRzLmZvckVhY2goRmluZEluZGV4RXZjKTtcclxuICAgICAgICAgICAgRXF1aXBtZW50cy5mb3JFYWNoKHJldHVybkluZGV4RWxlbWVudCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSlcclxuXHJcbiQoJyNhZGQtYmFzZWxpbmUtMicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMicpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcblxyXG4gICAgLy8gJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuaGlkZSgpO1xyXG4gICAgbGV0IG5hbWVfYmFzZWxpbmVfMSA9ICQoJyNzZWxlY3RfYmFzZWxpbmVfMiBvcHRpb246c2VsZWN0ZWQnKS52YWwoKTtcclxuICAgIGNvbnNvbGUubG9nKG5hbWVfYmFzZWxpbmVfMSlcclxuICAgIC8vICQoJyNjb250ZW50LW5hbWUtYmFzZWxpbmUtMScpLmFwcGVuZChcIjxoNT5cIiArIG5hbWVfYmFzZWxpbmVfMSArIFwiPC9oNT5cIilcclxuXHJcbn0pXHJcblxyXG4vLyBSZXF1ZXRlIEFKQVggcG91ciByZW1wbGlyIGxlIGZvcm11bGFpcmUgZCfDqXF1aXBlbWVudCBhdmVjIGwnZXF1aXBlbWVudCBzZWxlY3Rpb25uZXJcclxuJCgnI3Nob3ctZXF1aXBtZW50ICcpLm9uKCdjbGljaycsICcuZGVzY3JpcHRpb24gPiAuY29udGVudC1kZXNjcmlwdGlvbi1kdHIgPiBidXR0b24nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnI21vZGFsX2Jhc2VsaW5lX2VxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcubWFpbi1lcnRtcycpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICBpZEVxdWlwbWVudCA9IGV4dHJhaXROb21icmUoJCh0aGlzKVswXVtcImlkXCJdKVxyXG4gICAgdmFyICR0aGlzID0gJChcIiNmb3JtX2VxdWlwZW1lbnRfZWRpdF9iYXNlbGluZVwiKTtcclxuICAgIGxldCBkYXRhID0ge307XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LWJhc2VsaW5lLycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X1R5cGUnKS52YWwocmVzcG9uc2VbXCJ0eXBlXCJdW1wiaWRcIl0pO1xyXG4gICAgICAgICAgICBkYXRhWyQoJyNlcXVpcGVtZW50X1R5cGUnKS5hdHRyKCduYW1lJyldID0gJCgnI2VxdWlwZW1lbnRfVHlwZScpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja1N1YnR5cGVcIiwgZGF0YSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vVmlkYWdlIGNoYW1wIHNvdXN0eXBlXHJcbiAgICAgICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnLm1haW4tZXJ0bXMnKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9SZW1wbGkgaW5wdXQgYXZlYyB2YWxldXIgcmVjdSBkZSBsJ2VxdWlwZW1lbnRcclxuICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfVHlwZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9zb3VzX3R5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlW1wiU291c1R5cGVcIl0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcIlNvdXNUeXBlXCJdW1wiaWRcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfRFRSX2JvYXJkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcImRUUkJvYXJkXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfSW5kaWNlX0RUUic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJpbmRpY2VEVFJcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9OdW1fc2VyaWUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wibnVtU2VyaWVcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0Jykuc2hvdygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbi8vUmVtcGxpciBsZXMgaW5wdXRzIGF2ZWMgbGVzIG5vdXZlbGxlcyB2YWxldXJzXHJcbiQoJyNzb3VtaXNzaW9uLWVxdWlwZW1lbnQtZWRpdC1iYXNlbGluZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKSxcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG4gICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbn0pXHJcblxyXG5cclxuLy8gU291bWlzc2lvbiBmb3JtdWxhaXJlIGRlIHRyYWluXHJcbiQoJyNmb3JtX2VxdWlwZW1lbnRfZWRpdF9iYXNlbGluZScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKSxcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG5cclxuICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICB9KVxyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9lZGl0LWVxdWlwbWVudC1iYXNlbGluZS8nICsgaWRFcXVpcG1lbnQsXHJcbiAgICAgICAgdHlwZTogJHRoaXMuYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBlcXVpcGVtZW50OiBkYXRhXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWxfYmFzZWxpbmVfZXF1aXBlbWVudCcpLnNob3coKTtcclxuICAgICAgICAgICAgJCgnI2J0bi1hZGQtbnVtYmVyLXNlcmllJyArIGlkRXF1aXBtZW50KS5yZXBsYWNlV2l0aChcIjxwPlwiICsgcmVzcG9uc2UubnVtU2VyaWUgKyBcIjwvcD5cIilcclxuICAgICAgICAgICAgbmV3X2VxdWlwbWVudF9udW1fc2VyaWUucHVzaChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIG5ld19lcXVpcG1lbnRfbnVtKys7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3X2VxdWlwbWVudF9udW0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pXHJcbi8vVmFsaWRlciBsJ2luc3RhbmNlIGRlcyBlcXVpcGVtZW50c1xyXG4kKCcjdmFsaWQtYmFzZWxpbmUtdHJhaW4nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdfZXF1aXBtZW50X251bSk7XHJcbiAgICBjb25zb2xlLmxvZyh0b3RhbEVxdWlwdCk7XHJcblxyXG4gICAgaWYgKG5ld19lcXVpcG1lbnRfbnVtICE9IHRvdGFsRXF1aXB0KSB7XHJcbiAgICAgICAgYWxlcnQoJ3BsZWFzZSBlbnRlciBudW0gc2VyaWUgYmVmb3JlIGluc3RhbmNlIGJhc2VsaW5lJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IGV0Y3NJZCA9ICQoJyNldGNzaWQtbmFtZScpLnZhbCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV0Y3NJZCk7XHJcbiAgICAgICAgbGV0IGlkX3RyYWluID0gZXh0cmFpdE5vbWJyZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgICAgIGxldCBpZF9iYXNlbGluZSA9ICQoJyNzZWxlY3RfYmFzZWxpbmVfMSBvcHRpb246c2VsZWN0ZWQnKS52YWwoKTtcclxuICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvYWxzdG9tL2FkZEJhc2VsaW5lSW5zdGFuY2llcicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgaWRfdHJhaW46IGlkX3RyYWluLFxyXG4gICAgICAgICAgICAgICAgYmFzZWxpbmU6IGlkX2Jhc2VsaW5lLFxyXG4gICAgICAgICAgICAgICAgbmV3X2VxdWlwdDogbmV3X2VxdWlwbWVudF9udW1fc2VyaWUsXHJcbiAgICAgICAgICAgICAgICBldGNzSWQ6IGV0Y3NJZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9hbHN0b20vYmFzZWxpbmUtdHJhaW4vXCIgKyByZXNwb25zZS5pZGJhc2VsaW5lO1xyXG4gICAgICAgICAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSlcclxuLy8gUmVxdWV0ZSBBSkFYIHBvdXIgcmVtcGxpciBsZSBmb3JtdWxhaXJlIGQnw6lxdWlwZW1lbnQgYXZlYyBsJ2VxdWlwZW1lbnQgc2VsZWN0aW9ubmVyIGluc3RhbmNpZXJcclxuJCgnLmNhcmQnKS5vbignY2xpY2snLCAnLmVkaXQtZGVsZXRlLWVxdWlwZW1lbnQgPiBhJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJy5tYWluLWVydG1zJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG5cclxuICAgIGlkRXF1aXBtZW50ID0gZXh0cmFpdE5vbWJyZSgkKHRoaXMpWzBdW1wiY2xhc3NMaXN0XCJdWzBdKVxyXG4gICAgdmFyICR0aGlzID0gJChcIiNmb3JtX2VxdWlwZW1lbnRfZWRpdF9pbnN0YW5jZVwiKTtcclxuICAgIGxldCBkYXRhID0ge307XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LWluc3RhbmNlLycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfVHlwZScpLnZhbChyZXNwb25zZVtcInR5cGVcIl1bXCJpZFwiXSk7XHJcbiAgICAgICAgICAgIGRhdGFbJCgnI2VxdWlwZW1lbnRfVHlwZScpLmF0dHIoJ25hbWUnKV0gPSAkKCcjZXF1aXBlbWVudF9UeXBlJykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrU3VidHlwZVwiLCBkYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgLy9WaWRhZ2UgY2hhbXAgc291c3R5cGVcclxuICAgICAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvL1JlbXBsaSBpbnB1dCBhdmVjIHZhbGV1ciByZWN1IGRlIGwnZXF1aXBlbWVudFxyXG4gICAgICAgICAgICAgICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9UeXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X3NvdXNfdHlwZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VbXCJTb3VzVHlwZVwiXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiU291c1R5cGVcIl1bXCJpZFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9EVFJfYm9hcmQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiZFRSQm9hcmRcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9JbmRpY2VfRFRSJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcImluZGljZURUUlwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X051bV9zZXJpZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJudW1TZXJpZVwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuLy9Gb3JtdWxhaXJlIGQnZWRpdCBkZSBsJ8OpcXVpcGVtZW50XHJcbiQoJyNmb3JtX2VxdWlwZW1lbnRfZWRpdF9pbnN0YW5jZScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnLm1haW4tZXJ0bXMnKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyNmb3JtX2VxdWlwZW1lbnRfZWRpdCcpLmNzcyhcIm9wYWNpdHlcIiwgXCIwLjRcIik7XHJcblxyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICBsZXQgZGF0YSA9IHt9LFxyXG4gICAgICAgIGFjdGlvbjtcclxuICAgIC8vUmVtcGxpIGRhdGEgYSBwYXJ0aXIgZGVzIHZhbGV1ciBkZXMgaW5wdXRzXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKVxyXG5cclxuICAgICAgICBpZiAobmFtZSAhPSAoXCJlcXVpcGVtZW50W190b2tlbl1cIikgJiYgbmFtZSAhPSAoXCJzb3VtaXNzaW9uX2VxdWlwZW1lbnRcIikpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG4gICAgICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9lZGl0LWVxdWlwbWVudC1pbnN0YW5jZS8nICsgaWRFcXVpcG1lbnQsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgJ2VxdWlwZW1lbnQnOiBkYXRhLFxyXG4gICAgICAgICAgICBcInNvdW1pc3Npb25fZWRpdF9lcXVpcGVtZW50XCI6IHRydWUsXHJcbiAgICAgICAgICAgICdpZGVxdWlwbWVudCc6IGlkRXF1aXBtZW50XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLnNob3coKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KVxyXG5cclxuZnVuY3Rpb24gRmluZEluZGV4RXZjKGVsZW1lbnQsIGluZGV4LCBhcnJheSkge1xyXG4gICAgaW5kZXggPSBlbGVtZW50WydpZCddO1xyXG4gICAgaWYgKGVsZW1lbnRbJ3R5cGUnXVsnaWQnXSA9PSBcIjFcIiAmJiAoZWxlbWVudFsnU3RhdHVzJ10gPT0gdHJ1ZSkpIHtcclxuXHJcbiAgICAgICAgJChcIiNzaG93LWVxdWlwbWVudFwiKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVUeXBlKDQsIGVsZW1lbnRbJ3R5cGUnXVsnbmFtZSddKSk7XHJcbiAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hZGRDbGFzcyhcImRlc2NyaXB0aW9uLVN1YnR5cGVDYXJkXCIpXHJcbiAgICAgICAgaWYgKGVsZW1lbnRbJ1NvdXNUeXBlJ10gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVN1YnR5cGUoNSwgZWxlbWVudFsnU291c1R5cGUnXVsnbmFtZSddKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiY29udGVudC1kZXNjcmlwdGlvbi1kdHJcIiBpZD1cImNvbnRlbnQtZGVzY3JpcHRpb24tJyArXHJcbiAgICAgICAgICAgIGluZGV4ICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImRUUkJvYXJkXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImluZGljZURUUlwiXSArICc8L3A+JylcclxuICAgICAgICBpZiAoZWxlbWVudFsnbnVtU2VyaWUnXSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBzdHlsZT1cInBhZGRpbmc6IDJweFwiIGlkID0gXCJidG4tYWRkLW51bWJlci1zZXJpZScgKyBlbGVtZW50WydpZCddICsgJ1wiID4gQWRkIG51bWJlciBvZiBzZXJpZSA8L2J1dHRvbj4nKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFsnbnVtU2VyaWUnXSArICc8L3A+JylcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5kZXhFVkMgPSAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXR1cm5JbmRleEVsZW1lbnQoZWxlbWVudCwgaW5kZXgsIGFycmF5KSB7XHJcblxyXG5cclxuICAgIGluZGV4ID0gZWxlbWVudFsnaWQnXTtcclxuXHJcbiAgICBpZiAoKGVsZW1lbnRbJ1N0YXR1cyddID09IHRydWUpICYmIGVsZW1lbnRbJ3R5cGUnXVsnaWQnXSAhPSBcIjFcIikge1xyXG5cclxuICAgICAgICAvL1Rlc3QgbCdleGlzdGVuY2UgZGUgbGEgZGl2IGRhbnMgbGUgY2FzIG/DuSBlbGxlIGV4aXN0ZSBsYSByZW1wbGFjZSBzaSBwYXMgbGEgbWV0IGVuIHBsYWNlXHJcbiAgICAgICAgaWYgKCQoJyNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQoJyNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCkucmVwbGFjZVdpdGgoJzxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXggKyAnXCI+PC9kaXY+JylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI3Nob3ctZXF1aXBtZW50XCIpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vdGVzdCBzaSBsJ8OpcXVpcGVtZW50IGVzdCBsYSBjYXJ0ZSBvdSBub25cclxuICAgICAgICBpZiAoZWxlbWVudFsndHlwZSddWydpZCddICE9IFwiMlwiKSB7XHJcblxyXG4gICAgICAgICAgICAvL1N3aXRoIHJlcGxhY2VtZW50IGRlIGwnaWQgZHUgdHlwZSBhdmVjIHNvbiBub21cclxuICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVUeXBlKDQsIGVsZW1lbnRbJ3R5cGUnXVsnbmFtZSddKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFsnU291c1R5cGUnXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVN1YnR5cGUoNSwgZWxlbWVudFsnU291c1R5cGUnXVsnbmFtZSddKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiY29udGVudC1kZXNjcmlwdGlvbi1kdHJcIiBpZD1cImNvbnRlbnQtZGVzY3JpcHRpb24tJyArXHJcbiAgICAgICAgICAgICAgICBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZFRSQm9hcmRcIl0gKyAnPC9wPicpXHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImluZGljZURUUlwiXSArICc8L3A+JylcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRbJ251bVNlcmllJ10gPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIHN0eWxlPVwicGFkZGluZzogMnB4XCIgaWQgPSBcImJ0bi1hZGQtbnVtYmVyLXNlcmllJyArIGVsZW1lbnRbJ2lkJ10gKyAnXCIgPiBBZGQgbnVtYmVyIG9mIHNlcmllIDwvYnV0dG9uPicpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbJ251bVNlcmllJ10gKyAnPC9wPiA8YSBpZD1cImVkaXQtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+IDwvYT4gPGEgaWQ9XCJkZWxldGUtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzID0gXCJmYXMgZmEtdHJhc2gtYWx0IHBvdWJlbGxlXCI+IDwvaT48L2E+JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZUVkaXREZWxldGUoaW5kZXgpKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIC8vRWNyaXMgbGUgbm9tIGR1IHR5cGUgXCJjYXJ0ZVwiIHNvdXMgbGUgdHlwZSAgRVZDXHJcbiAgICAgICAgICAgICQoaW5kZXhFVkMpLmFwcGVuZCh3cml0ZVR5cGUoNSwgZWxlbWVudFsnU291c1R5cGUnXVsnbmFtZSddKSk7XHJcbiAgICAgICAgICAgIC8vUGFyY291cyBsZSB0eXBlIGRlIHNvdXN0eXBlIFxyXG4gICAgICAgICAgICAvLyAkKGluZGV4RVZDKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDYsIGVsZW1lbnRbJ1NvdXNUeXBlJ11bJ25hbWUnXSkpO1xyXG5cclxuICAgICAgICAgICAgJChpbmRleEVWQykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiY29udGVudC1kZXNjcmlwdGlvbi1kdHIgY29udGVudC1kZXNjcmlwdGlvbi1kdHJDYXJkXCIgaWQ9XCJjb250ZW50LWRlc2NyaXB0aW9uLScgK1xyXG4gICAgICAgICAgICAgICAgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImRUUkJvYXJkXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJpbmRpY2VEVFJcIl0gKyAnPC9wPicpXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50WydudW1TZXJpZSddID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBzdHlsZT1cInBhZGRpbmc6IDJweFwiIGlkID0gXCJidG4tYWRkLW51bWJlci1zZXJpZScgKyBlbGVtZW50WydpZCddICsgJ1wiID4gQWRkIG51bWJlciBvZiBzZXJpZSA8L2J1dHRvbj4nKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50WydudW1TZXJpZSddICsgJzwvcD4gPGEgaWQ9XCJlZGl0LScgKyBpbmRleCArICdcIj48aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPiA8L2E+IDxhIGlkPVwiZGVsZXRlLScgKyBpbmRleCArICdcIj48aSBjbGFzcyA9IFwiZmFzIGZhLXRyYXNoLWFsdCBwb3ViZWxsZVwiPiA8L2k+PC9hPicpXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZUVkaXREZWxldGUoaW5kZXgpKTtcclxuICAgICAgICAgICAgJCgnI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4KS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvdW50TnVtYmVyRXF1aXB0KGVsZW1lbnQsIGluZGV4LCBhcnJheSkge1xyXG4gICAgdG90YWxFcXVpcHQrKztcclxufVxyXG4vL0V4dHJhaXQgbGUgbm9tYnJlIGQndW5lIHN0cmVpbmdcclxuZnVuY3Rpb24gZXh0cmFpdE5vbWJyZShzdHIpIHtcclxuICAgIHJldHVybiBOdW1iZXIoc3RyLnJlcGxhY2UoL1teXFxkXS9nLCBcIlwiKSlcclxufVxyXG4vL0VjcmlzIGxlIHRpdHJlIGR1IHR5cGUgZCfDqXF1aXBlbWVudFxyXG5mdW5jdGlvbiB3cml0ZVR5cGUoc2l6ZSwgbmFtZSkge1xyXG4gICAgcmV0dXJuICc8aCcgKyBzaXplICsgJyBjbGFzcz1cImRlc2NyaXB0aW9uLVR5cGUgXCIgaWQ9XCJkZXNjcmlwdGlvbi10eXBlIFwiPicgKyBuYW1lICsgJzwvaCcgKyBzaXplICsgJz4nO1xyXG59O1xyXG4vL0VjcmlzIGxlIHRpdHJlIGR1IHNvdXN0eXBlIGQnw6lxdWlwZW1lbnRcclxuZnVuY3Rpb24gd3JpdGVTdWJ0eXBlKHNpemUsIG5hbWUpIHtcclxuICAgIHJldHVybiAnPGgnICsgc2l6ZSArICcgY2xhc3M9XCJkZXNjcmlwdGlvbi1UeXBlIFwiIGlkPVwiZGVzY3JpcHRpb24tc3ViVHlwZSBcIj4nICsgbmFtZSArICc8L2gnICsgc2l6ZSArICc+JztcclxufTtcclxuLy9FY3JpcyBsZSB0aXRyZSBkdSBzb3VzdHlwZSBkJ8OpcXVpcGVtZW50XHJcbmZ1bmN0aW9uIHdyaXRlU3VidHlwZUNhcmQoc2l6ZSwgbmFtZSkge1xyXG4gICAgcmV0dXJuICc8aCcgKyBzaXplICsgJyBjbGFzcz1cImRlc2NyaXB0aW9uLXN1YnR5cGVcIiBpZD1cImRlc2NyaXB0aW9uLXN1YlR5cGUgXCI+JyArIG5hbWUgKyAnPC9oJyArIHNpemUgKyAnPic7XHJcbn07XHJcbi8vIC8vRWNyaXQgbGVzIDIgaWNvbnMgZCdlZGl0IGV0IGRlbGV0ZVxyXG4vLyBmdW5jdGlvbiB3cml0ZUVkaXREZWxldGUoaW5kZXgpIHtcclxuLy8gICAgIHJldHVybiAnIDxwIGNsYXNzPVwiZWRpdC1kZWxldGUtZXF1aXBlbWVudFwiPiA8YSBpZD1cImVkaXQtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+IDwvYT48L3A+JztcclxuLy8gfTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9