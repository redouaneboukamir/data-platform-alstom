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

/* WEBPACK VAR INJECTION */(function($) {var searchRequest = null;
$(document).ready(function () {
  $('#search-fleet').on('submit', function (e) {
    e.preventDefault();
  });
  $('#name_project').keyup(function (e) {
    var that = this;
    var search = $(this).val();
    var data = 'motclef=' + search;

    if (search.length > 0) {
      if (searchRequest != null) searchRequest.abort();
      searchRequest = $.ajax({
        url: '/alstom/search-fleet',
        type: 'POST',
        data: data,
        // async: false,
        dataType: 'json',
        // JSON
        success: function success(response) {
          $('.element-result').remove();
          var tabName = JSON.parse(response.projectsFound);

          if (tabName.length == 0 || !search) {
            $('.element-result').remove();
            $('#result-fleet').append('<p class="element-result">Results Not Found</p>');
          } else {
            tabName.forEach(function (element) {
              console.log(element);
              $('#result-fleet').append('<a href="/alstom/project/' + element.name + '"><p class="element-result">' + element.name + '</p>');
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
var searchRequest = null;
$(document).ready(function () {
  $('#search-train').on('submit', function (e) {
    e.preventDefault();
  });
  $('#trains_search_name_train').keyup(function (e) {
    var that = this;
    var search = $(this).val();
    var data = 'motclef=' + search;
    console.log(search);

    if (search.length > 0) {
      if (searchRequest != null) searchRequest.abort();
      searchRequest = $.ajax({
        url: '/alstom/search-train',
        type: 'POST',
        data: data,
        // async: false,
        dataType: 'json',
        // JSON
        success: function success(response) {
          if (search == $(that).val()) {
            $('.element-result').remove();
            var tabName = JSON.parse(response.projectsFound);
            console.log(tabName);

            if (tabName.length == 0 || !search) {
              $('.element-result').remove();
              $('#result-train').append('<p class="element-result">Results Not Found</p>');
            } else {
              tabName.forEach(function (element) {
                $('#result-train').append('<a href="/alstom/trains/' + element.name + '"><p class="element-result">' + element.name + '</p></a>');
              });
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9iYXNlbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZXF1aXBlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZmxlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90a2lyYnkvd29ya3NwYWNlL3picnlpa3QvbG9hZGluZy9wcm9qZWN0cy9sZEJhci9sb2FkaW5nLWJhci9zcmMvbG9hZGluZy1iYXIubHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90a2lyYnkvd29ya3NwYWNlL3picnlpa3QvbG9hZGluZy9wcm9qZWN0cy9sZEJhci9sb2FkaW5nLWJhci9zcmMvcHJlc2V0cy5scyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGVzdC11cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RyYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiaG92ZXIiLCJmaW5kIiwic3RvcCIsImFuaW1hdGUiLCJoZWlnaHQiLCJvcGFjaXR5IiwiaGlkZSIsImRvY3VtZW50IiwicmVhZHkiLCJyZW1vdmUiLCJjbGljayIsInRvZ2dsZUNsYXNzIiwiY3NzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIiR0eXBlIiwiYXR0ciIsIkVxdWlwbWVudHMiLCJpIiwiaW5kZXhFVkMiLCJwb3NJbmRleCIsIlByZXNlbmNlRVZDIiwiaWRFcXVpcG1lbnQiLCJ0YWJJbmRleEVxdWlwdCIsInNlbGVjdCIsImNyZWF0ZUVsZW1lbnQiLCJwcmV2aW91cyIsInRhYkVxdWlwZW1lbnRUeXBlIiwidGFiRXF1aXBlbWVudFN1YnR5cGUiLCJkYXRhIiwidmFsIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNob3ciLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiZW1wdHkiLCJmb3JFYWNoIiwiZWxlbWVudCIsImFwcGVuZCIsIk9wdGlvbiIsIm5hbWUiLCJpZCIsImNoYW5nZSIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiJHRoaXMiLCJhY3Rpb24iLCJlYWNoIiwiaW5kZXgiLCJ2YWx1ZSIsInRoYXQiLCJwdXNoIiwiYWpheCIsInVybCIsInR5cGUiLCJ0YWJFcXVpcHRzIiwiYXN5bmMiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ4aHIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJpZEVydG1zIiwiZXh0cmFpdE5vbWJyZSIsImVxdWlwZW1lbnQiLCJyZXR1cm5JbmRleEVsZW1lbnQiLCJhbGVydCIsImJhc2VsaW5lTmFtZSIsImJhc2VsaW5lIiwidGV4dCIsImlkQmFzZWxpbmUiLCJocmVmIiwiZGVsZXRlRXF1aXBtZW50IiwiZG9uZSIsInJlbG9hZCIsInZlcnNpb24iLCJ0cmlnZ2VyIiwiYXJyYXkiLCJsZW5ndGgiLCJyZXBsYWNlV2l0aCIsIndyaXRlVHlwZSIsIndyaXRlU3VidHlwZSIsIndyaXRlRWRpdERlbGV0ZSIsInNwbGljZSIsInBvc2l0aW9uIiwic3RyIiwiTnVtYmVyIiwicmVwbGFjZSIsInNpemUiLCJ3cml0ZVN1YnR5cGVDYXJkIiwibm90Iiwic2VhcmNoUmVxdWVzdCIsImtleXVwIiwic2VhcmNoIiwiYWJvcnQiLCJ0YWJOYW1lIiwiSlNPTiIsInBhcnNlIiwicHJvamVjdHNGb3VuZCIsIiR0cmFpbl9zZWxlY3QiLCJpZFByb2plY3QiLCJ0YWJUcmFpbnMiLCIkZmxlZXQiLCIkdHJhaW4iLCIkZXJ0bXMiLCJ0eXBlTG9nIiwidHlwZUxvZ1RleHQiLCJpc0FkdmFuY2VkVXBsb2FkIiwiZGl2IiwiJGZvcm0iLCIkaW5wdXQiLCIkbGFiZWwiLCJzaG93RmlsZXMiLCJmaWxlcyIsInByZ2JhciIsImxkQmFyIiwiZHJvcHBlZEZpbGVzIiwic3RvcFByb3BhZ2F0aW9uIiwib3JpZ2luYWxFdmVudCIsImRhdGFUcmFuc2ZlciIsIkxvZyIsImhhc0NsYXNzIiwiYWpheERhdGEiLCJGb3JtRGF0YSIsImdldCIsImZpbGUiLCJYTUxIdHRwUmVxdWVzdCIsInVwbG9hZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJsb2FkZWQiLCJsZW5ndGhDb21wdXRhYmxlIiwicGVyY2VudENvbXBsZXRlIiwidG90YWwiLCJzZXQiLCJjYWNoZSIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJjb21wbGV0ZSIsInZhbGlkIiwiaWZyYW1lTmFtZSIsIkRhdGUiLCJnZXRUaW1lIiwiJGlmcmFtZSIsIm9uZSIsImNvbnRlbnRzIiwicmVtb3ZlQXR0ciIsIiRlcnJvck1zZyIsIkxpc3RlUGx1ZyIsIm5vbWJyZV91cmwiLCJodG1sIiwiUGx1ZyIsIndyaXRlUGx1ZyIsImZpbGVzdCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wRGVzdGluYXRpb24iLCJuYW1lRmlsZSIsInVwbG9hZFN0YXR1cyIsInBhdGgiLCJrZXkiLCJpZFBsdWciLCJkZWxldGVQbHVnIiwibmFtZV9wbHVnIiwia2V5X3BsdWciLCJuZXdfZXF1aXBtZW50X251bSIsInRvdGFsRXF1aXB0IiwibmV3X2VxdWlwbWVudF9udW1fc2VyaWUiLCJjdXJyZW50X2Nob2ljZSIsImVydG1zX2xlZnQiLCJlcnRtc19taWRkbGUiLCJlcnRtc19yaWdodCIsImVxdWlwbWVudHMiLCJDb3VudE51bWJlckVxdWlwdCIsIkZpbmRJbmRleEV2YyIsIm5hbWVfYmFzZWxpbmVfMSIsIm51bVNlcmllIiwiZXRjc0lkIiwiaWRfdHJhaW4iLCJpZF9iYXNlbGluZSIsIm5ld19lcXVpcHQiLCJpZGJhc2VsaW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QUFPLE9BQU9vRCxJQUFQLEdBQWMsdURBQWQsR0FBd0VwRCxJQUF4RSxHQUErRSxLQUEvRSxHQUF1Rm9ELElBQXZGLEdBQThGLEdBQXJHO0FBQ0g7O0FBQUEsQyxDQUNEOztBQUNBLFNBQVNDLGdCQUFULENBQTBCRCxJQUExQixFQUFnQ3BELElBQWhDLEVBQXNDO0FBQ2xDLFNBQU8sT0FBT29ELElBQVAsR0FBYyx5REFBZCxHQUEwRXBELElBQTFFLEdBQWlGLEtBQWpGLEdBQXlGb0QsSUFBekYsR0FBZ0csR0FBdkc7QUFDSDs7QUFBQSxDLENBQ0Q7QUFDQTtBQUNBO0FBQ0EsSzs7Ozs7Ozs7Ozs7O0FDaG9CQSx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3Njc3MvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJy4vZXF1aXBlbWVudCc7XHJcbmltcG9ydCAnLi9iYXNlbGluZSc7XHJcbmltcG9ydCAnLi9wcm9ncmVzc0Jhcic7XHJcbmltcG9ydCAnLi90ZXN0LXVwbG9hZCc7XHJcbmltcG9ydCAnLi90cmFpbic7XHJcbmltcG9ydCAnLi9wbHVnJztcclxuaW1wb3J0ICcuL2ZsZWV0JztcclxuaW1wb3J0ICcuL2xvZ3MnO1xyXG5cclxuLy8gbG9hZHMgdGhlIGpxdWVyeSBwYWNrYWdlIGZyb20gbm9kZV9tb2R1bGVzXHJcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuLy8gaW1wb3J0IHRoZSBmdW5jdGlvbiBmcm9tIGdyZWV0LmpzICh0aGUgLmpzIGV4dGVuc2lvbiBpcyBvcHRpb25hbClcclxuLy8gLi8gKG9yIC4uLykgbWVhbnMgdG8gbG9vayBmb3IgYSBsb2NhbCBmaWxlXHJcbiQoJy5wb3N0LW1vZHVsZScpLmhvdmVyKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuZmluZCgnLmRlc2NyaXB0aW9uJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgIGhlaWdodDogXCJ0b2dnbGVcIixcclxuICAgICAgICBvcGFjaXR5OiBcInRvZ2dsZVwiXHJcbiAgICB9LCAzMDApO1xyXG59KTtcclxuJCgnLnBvc3QtbW9kdWxlLWZsZWV0JykuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5maW5kKCcuZGVzY3JpcHRpb24tZmxlZXQnKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgaGVpZ2h0OiBcInRvZ2dsZVwiLFxyXG4gICAgICAgIG9wYWNpdHk6IFwidG9nZ2xlXCJcclxuICAgIH0sIDMwMCk7XHJcbn0pO1xyXG5cclxuJCgnLmZhLWNoZXZyb24tZG93bicpLmhpZGUoKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAkKCdwcmUnKS5yZW1vdmUoKTtcclxuICAgICQoJy5idXR0b24tbGVmdCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuc2lkZWJhcicpLnRvZ2dsZUNsYXNzKCdmbGlwaCcpO1xyXG4gICAgfSk7XHJcbiAgICAkKCcuc2lkZWJhcicpLmhvdmVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcygndHJhbnNpdGlvbicsICdhbGwgMC41cyBlYXNlLWluLW91dCcpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykuYWRkQ2xhc3MoJ21sLXNtLWF1dG8nKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLnJlbW92ZUNsYXNzKCdvZmZzZXQtMScpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykuYWRkQ2xhc3MoJ29mZnNldC0yJyk7XHJcbiAgICAgICAgICAgICQoJy5tYWluLXNob3cnKS5yZW1vdmVDbGFzcygnY29sLWxnLTExJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoJ3RyYW5zaXRpb24nLCAnYWxsIDAuMTBzIGVhc2UtaW4tb3V0Jyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5hZGRDbGFzcygnb2Zmc2V0LTEnKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLnJlbW92ZUNsYXNzKCdvZmZzZXQtMicpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykucmVtb3ZlQ2xhc3MoJ21sLXNtLWF1dG8nKTtcclxuICAgICAgICAgICAgJCgnLm1haW4tc2hvdycpLmFkZENsYXNzKCdjb2wtbGctMTEnKTtcclxuICAgICAgICB9KVxyXG4gICAgLy8gJCgnbWFpbicpLnJlbW92ZUNsYXNzKCdtbC1zbS1hdXRvJyk7XHJcbiAgICAkKCcubmF2LWxhYmVsJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5mYS1jaGV2cm9uLWxlZnQnKS5jc3MoJ3RyYW5zZm9ybScsICdyb3RhdGV4KDQ1ZGVnKScpXHJcbiAgICB9KVxyXG5cclxufSk7IiwiLy9NYXNxdWFnZSBkZSBjZXJ0YWlucyBtb2RhbGUgZGUgbGEgcGFnZVxyXG4kKCcjZm9ybXVsYWlyZS1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiQoJyNjb250ZW50LWZvcm0tZXF1aXBtZW50JykuaGlkZSgpO1xyXG4kKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiQoJyNwcmV2aW91cy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcblxyXG4vL0RlbGNhcmF0aW9uIHZhcmlhYmxlXHJcbmNvbnN0ICR0eXBlID0gJCgnI2VxdWlwZW1lbnRfVHlwZScpO1xyXG4kdHlwZS5hdHRyKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpO1xyXG5cclxubGV0IEVxdWlwbWVudHMgPSBbXSxcclxuICAgIGkgPSAwLFxyXG4gICAgaW5kZXhFVkMgPSAwLFxyXG4gICAgcG9zSW5kZXggPSAwLFxyXG4gICAgUHJlc2VuY2VFVkMgPSBmYWxzZSxcclxuICAgIGlkRXF1aXBtZW50ID0gMCxcclxuICAgIHRhYkluZGV4RXF1aXB0ID0gW11cclxuc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSxcclxuICAgIHByZXZpb3VzID0gXCJcIixcclxuICAgIHRhYkVxdWlwZW1lbnRUeXBlID0gW1wiRVZDXCIsIFwiQ0FSVEVcIiwgXCJTRU5TT1JcIiwgXCJETUlcIl0sXHJcbiAgICB0YWJFcXVpcGVtZW50U3VidHlwZSA9IFtcIkNPUkVcIiwgXCJUVUlcIiwgXCJTRE1VXCIsIFwiU0VOU0VcIiwgXCJUV0lOU1wiXTtcclxuXHJcbi8vVmlkYWdlIGRlcyBpbnB1dHMgYXUgcmVmcmVzaCBkZSBsYSBwYWdlXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBkYXRhID0ge31cclxuICAgIGRhdGFbJHR5cGUuYXR0cignbmFtZScpXSA9ICR0eXBlLnZhbCgpXHJcblxyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSAnL2Fsc3RvbS9jcmVhdGVfYmFzZWxpbmUnKSB7XHJcbiAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAgICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja1N1YnR5cGVcIiwgZGF0YSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgLy9WaWRhZ2UgY2hhbXAgc291c3R5cGVcclxuICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuZW1wdHkoKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIC8vICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmVtcHR5KCk7XHJcbiAgICAvLyAkKCc6aW5wdXQnLCAnI2Zvcm1fZXF1aXBlbWVudCcpLm5vdCgnOmJ1dHRvbiwgOnN1Ym1pdCwgOnJlc2V0LCA6aGlkZGVuJykudmFsKCcnKTtcclxufSk7XHJcblxyXG4vL0FKQVggQ2hhbmdlbWVudCBkZSBzb3VzLXR5cGUgZW4gZm9uY3Rpb24gZHUgdHlwZVxyXG4kdHlwZS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGxldCBkYXRhID0ge31cclxuICAgIGRhdGFbJHR5cGUuYXR0cignbmFtZScpXSA9ICR0eXBlLnZhbCgpXHJcblxyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tTdWJ0eXBlXCIsIGRhdGEpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgLy9WaWRhZ2UgY2hhbXAgc291c3R5cGVcclxuICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmVtcHR5KCk7XHJcbiAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pXHJcblxyXG4vL0FKQVggc291bWlzc2lvbiBmb3JtdWxhaXJlIGQnYWpvdXQgZXF1aXBlbWVudFxyXG4kKCcjZm9ybV9lcXVpcGVtZW50Jykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgLy9FbXDDqmNoZSBsZSBjaGFyZ2VtZW50IGRlIGxhIHBhZ2Ugc29pcyBmYWl0IGF1dG9tYXRpcXVlbWVudFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGRhdGEgPSB7fSxcclxuICAgICAgICBhY3Rpb247XHJcbiAgICAvL1JlbXBsaSBkYXRhIGEgcGFydGlyIGRlcyB2YWxldXIgZGVzIGlucHV0c1xyXG4gICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuYW1lID0gdGhhdC5hdHRyKCduYW1lJylcclxuXHJcbiAgICAgICAgaWYgKG5hbWUgIT0gKFwiZXF1aXBlbWVudFtfdG9rZW5dXCIpICYmIG5hbWUgIT0gKFwic291bWlzc2lvbl9lcXVpcGVtZW50XCIpKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhhdC52YWwoKTtcclxuICAgICAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZSA9PSAnc291bWlzc2lvbl9lZGl0X2VxdWlwZW1lbnQnKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbiA9IFwiZWRpdFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFjdGlvbiA9IFwiYWRkXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbiAgICAvLyBTaSBsZSBmb3JtdWxhaXJlIGVzdCBwb3VyIGFqb3VlciB1biBub3V2ZWwgZXF1aXBlbWVudFxyXG4gICAgaWYgKGFjdGlvbiA9PSBcImFkZFwiKSB7XHJcbiAgICAgICAgLy9SZW1wbGlzIGxlIHRhYmxlYXUgZGVzIMOpcXVpcGVtZW50c1xyXG4gICAgICAgIEVxdWlwbWVudHMucHVzaChkYXRhKTtcclxuICAgICAgICAvL0VmZmVjdHVyZSBsYSByZXF1w6p0ZSBhamF4IHBvdXIgbCdham91dCBkJ8OpcXVpcGVtZW50XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAkdGhpcy5hdHRyKCdhY3Rpb24nKSxcclxuICAgICAgICAgICAgdHlwZTogJHRoaXMuYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHRhYkVxdWlwdHM6IEVxdWlwbWVudHNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gT3Ugc2kgbGUgZm9ybXVsYWlyZSBlc3QgcG91ciDDqWRpdGVyIHVuIGVxdWlwZW1lbnQgZMOpamEgZXhpc3RhbnQgc3VyIGxhIHBhZ2UgZGUgbCdlcnRtcyBsacOpIGEgY2VsdWktY2lcclxuICAgIH0gZWxzZSBpZiAoYWN0aW9uID09IFwiZWRpdFwiKSB7XHJcbiAgICAgICAgbGV0IGlkRXJ0bXMgPSBleHRyYWl0Tm9tYnJlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy9hbHN0b20vZWRpdC1lcXVpcG1lbnQvJyArIGlkRXF1aXBtZW50LFxyXG4gICAgICAgICAgICB0eXBlOiAkdGhpcy5hdHRyKCdtZXRob2QnKSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgZXF1aXBlbWVudDogZGF0YSxcclxuICAgICAgICAgICAgICAgIGlkRXJ0bXM6IGlkRXJ0bXNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcubW9kYWwtZm9vdGVyJykuc2hvdygpO1xyXG4gICAgJCgnI2NyZWF0ZS1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcjc2hvdy1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcjcHJldmlvdXMtZXF1aXBtZW50JykuaGlkZSgpO1xyXG4gICAgLy9Cb3VjbGUgbGVzIMOpcXVpcGVtZW50cyBldCBsZXMgaW5zdGFsbGUgYXUgZnJvbnRcclxuICAgIEVxdWlwbWVudHMuZm9yRWFjaChyZXR1cm5JbmRleEVsZW1lbnQpO1xyXG59KTtcclxuXHJcblxyXG4vL1ZhbGlkYXRpb24gZGUgYmFzZWxpbmUgXHJcbiQoJyNjcmVhdGUtYmFzZWxpbmUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJChcIiNiYXNlbGluZV9uYW1lXCIpLnZhbCgpID09IFwiXCIpIHtcclxuICAgICAgICBhbGVydChcIlBsZWFzZSBlbnRlciBhIGJhc2VsaW5lIG5hbWUgXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjc2hvdy1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG59KVxyXG5cclxubGV0IGJhc2VsaW5lTmFtZTtcclxuJCgnI2Zvcm1fYmFzZWxpbmUnKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgIGxldCBkYXRhID0ge307XHJcblxyXG4gICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuYW1lID0gdGhhdC5hdHRyKCduYW1lJyksXHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhhdC52YWwoKTtcclxuXHJcbiAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG5cclxuICAgICAgICBpZiAobmFtZSA9PSAnYmFzZWxpbmVbbmFtZV0nKSB7XHJcblxyXG4gICAgICAgICAgICBiYXNlbGluZU5hbWUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAkdGhpcy5hdHRyKCdhY3Rpb24nKSxcclxuICAgICAgICB0eXBlOiAkdGhpcy5hdHRyKCdtZXRob2QnKSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGJhc2VsaW5lOiBkYXRhXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcudGl0bGUtYmFzZWxpbmUnKS50ZXh0KHJlc3BvbnNlLmJhc2VsaW5lKVxyXG4gICAgICAgICAgICAkKCcjY29udGVudC1mb3JtLWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICAgICAgICAgJCgnI3ByZXZpb3VzLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSlcclxuLy9WYWxpZGF0aW9uIGRlIHRvdXMgbGVzIMOpcXVpcGVtZW50cyBldCBkZSBsYSBiYXNlbGluZVxyXG4kKCcjdmFsaWQtYWxsLWVxdWlwbWVudHMnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChFcXVpcG1lbnRzICE9IFwiXCIpIHtcclxuICAgICAgICAkKCdtYWluJykuY3NzKCdvcGFjaXR5JywgXCIwLjRcIik7XHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvYWxzdG9tL2ZsdXNoLWFsbC1lcXVpcHQnLFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGJhc2VsaW5lTmFtZTogYmFzZWxpbmVOYW1lLFxyXG4gICAgICAgICAgICAgICAgdGFiRXF1aXB0czogRXF1aXBtZW50c1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGlkQmFzZWxpbmUgPSByZXNwb25zZS5iYXNlbGluZTtcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2Fsc3RvbS9iYXNlbGluZS9cIiArIGlkQmFzZWxpbmU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydCgnUGxlYXNlIGVudGVyIEVxdWlwbWVudHMgYmVmb3JlIHZhbGlkJyk7XHJcbiAgICB9XHJcblxyXG59KVxyXG5cclxuLy9Hw6lyZSBsZSBjbGlxdWUgZGUgbGEgc3VwcHJlc3Npb25cclxuJCgnI3Nob3ctZXF1aXBtZW50Jykub24oJ2NsaWNrJywgJy5lZGl0LWRlbGV0ZS1lcXVpcGVtZW50ID4gYScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpWzBdW1wiaWRcIl1bMF0gPT0gXCJkXCIpIHtcclxuICAgICAgICBkZWxldGVFcXVpcG1lbnQoZXh0cmFpdE5vbWJyZSgkKHRoaXMpWzBdW1wiaWRcIl0pKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuLy9jYWNoZSBsZSBtb2RhbCBkJ2VkaXQgZCdlcXVpcGVtZW50XHJcbiQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0JykuaGlkZSgpO1xyXG4vLyBHZXJlIGxhIGZlcm1ldHVyZSBkdSBtb2RhbCBkJ2VkaXQgZCdlcXVpcGVtZW50XHJcbiQoJyNjbG9zZS1tb2RhbC1mb3JtLWVxdWlwbWVudC1lZGl0JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5oaWRlKCk7XHJcbiAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG59KVxyXG4vLyBcclxuLy8gUmVxdWV0ZSBBSkFYIHBvdXIgcmVtcGxpciBsZSBmb3JtdWxhaXJlIGQnw6lxdWlwZW1lbnQgYXZlYyBsJ2VxdWlwZW1lbnQgc2VsZWN0aW9ubmVyXHJcbiQoJy5jb250ZW50LWRlc2NyaXB0aW9uLWR0cicpLm9uKCdjbGljaycsICcuZWRpdC1kZWxldGUtZXF1aXBlbWVudCA+IGEnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICBpZEVxdWlwbWVudCA9IGV4dHJhaXROb21icmUoJCh0aGlzKVswXVtcImNsYXNzTGlzdFwiXVswXSlcclxuICAgIHZhciAkdGhpcyA9ICQoXCIjZm9ybV9lcXVpcGVtZW50X2VkaXRcIik7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9lZGl0LWVxdWlwbWVudC8nICsgaWRFcXVpcG1lbnQsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X1R5cGUnKS52YWwocmVzcG9uc2VbXCJ0eXBlXCJdW1wiaWRcIl0pO1xyXG4gICAgICAgICAgICBkYXRhWyQoJyNlcXVpcGVtZW50X1R5cGUnKS5hdHRyKCduYW1lJyldID0gJCgnI2VxdWlwZW1lbnRfVHlwZScpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja1N1YnR5cGVcIiwgZGF0YSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vVmlkYWdlIGNoYW1wIHNvdXN0eXBlXHJcbiAgICAgICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL1JlbXBsaSBpbnB1dCBhdmVjIHZhbGV1ciByZWN1IGRlIGwnZXF1aXBlbWVudFxyXG4gICAgICAgICAgICAgICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9UeXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X3NvdXNfdHlwZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VbXCJTb3VzVHlwZVwiXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiU291c1R5cGVcIl1bXCJpZFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9EVFJfYm9hcmQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiZFRSQm9hcmRcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9JbmRpY2VfRFRSJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcImluZGljZURUUlwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X051bV9zZXJpZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJudW1TZXJpZVwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuLy9Gb3JtdWxhaXJlIGQnZWRpdCBkZSBsJ8OpcXVpcGVtZW50XHJcbiQoJyNmb3JtX2VxdWlwZW1lbnRfZWRpdCcpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI2Zvcm1fZXF1aXBlbWVudF9lZGl0JykuY3NzKFwib3BhY2l0eVwiLCBcIjAuNFwiKTtcclxuICAgICQoXCIjd2FpdC1zcGlubmVyXCIpLmNzcyhcInotaW5kZXhcIiwgXCI5OTk5OVwiKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGRhdGEgPSB7fSxcclxuICAgICAgICBhY3Rpb247XHJcbiAgICAvL1JlbXBsaSBkYXRhIGEgcGFydGlyIGRlcyB2YWxldXIgZGVzIGlucHV0c1xyXG4gICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuYW1lID0gdGhhdC5hdHRyKCduYW1lJylcclxuXHJcbiAgICAgICAgaWYgKG5hbWUgIT0gKFwiZXF1aXBlbWVudFtfdG9rZW5dXCIpICYmIG5hbWUgIT0gKFwic291bWlzc2lvbl9lcXVpcGVtZW50XCIpKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhhdC52YWwoKTtcclxuICAgICAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vZWRpdC1lcXVpcG1lbnQvJyArIGlkRXF1aXBtZW50LFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICdlcXVpcGVtZW50JzogZGF0YSxcclxuICAgICAgICAgICAgXCJzb3VtaXNzaW9uX2VkaXRfZXF1aXBlbWVudFwiOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLnNob3coKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KVxyXG5cclxuLy9SZXF1ZXRlIEFKQVggZGUgY3LDqWF0aW9uIGRlIHZlcnNpb24gbG9naWNpZWxcclxuJCgnI2Zvcm1fdmVyc2lvbicpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKSxcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG5cclxuICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICB9KVxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICR0aGlzLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgIHR5cGU6ICR0aGlzLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgaWRCYXNlbGluZTogZXh0cmFpdE5vbWJyZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpLFxyXG4gICAgICAgICAgICB2ZXJzaW9uOiBkYXRhXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAkKCcjdGl0bGUtdmVyc2lvbi1lcnRtcycpLmFwcGVuZChcIjxwPlwiICsgcmVzcG9uc2UudmVyc2lvbiArIFwiPC9wPlwiKVxyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjY2xvc2UtbW9kYWwtZm9ybS12ZXJzaW9uJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmV0dXJuSW5kZXhFbGVtZW50KGVsZW1lbnQsIGluZGV4LCBhcnJheSkge1xyXG5cclxuICAgIC8vVGVzdCBsJ2V4aXN0ZW5jZSBkZSBsYSBkaXYgZGFucyBsZSBjYXMgb8O5IGVsbGUgZXhpc3RlIGxhIHJlbXBsYWNlIHNpIHBhcyBsYSBtZXQgZW4gcGxhY2VcclxuICAgIGlmICgkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLmxlbmd0aCkge1xyXG4gICAgICAgICQoJyNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCkucmVwbGFjZVdpdGgoJzxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXggKyAnXCI+PC9kaXY+JylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIiNzaG93LWVxdWlwbWVudFwiKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy90ZXN0IHNpIGwnw6lxdWlwZW1lbnQgZXN0IGxhIGNhcnRlIG91IG5vblxyXG4gICAgaWYgKGVsZW1lbnRbXCJlcXVpcGVtZW50W1R5cGVdXCJdICE9IFwiMlwiKSB7XHJcbiAgICAgICAgLy9Td2l0aCByZXBsYWNlbWVudCBkZSBsJ2lkIGR1IHR5cGUgYXZlYyBzb24gbm9tXHJcbiAgICAgICAgc3dpdGNoIChlbGVtZW50W1wiZXF1aXBlbWVudFtUeXBlXVwiXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiMVwiOlxyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVUeXBlKDQsIDApKTtcclxuICAgICAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYWRkQ2xhc3MoXCJkZXNjcmlwdGlvbi1TdWJ0eXBlQ2FyZFwiKVxyXG4gICAgICAgICAgICAgICAgaW5kZXhFVkMgPSAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVR5cGUoNCwgMikpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI0XCI6XHJcbiAgICAgICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVR5cGUoNCwgMykpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAoZWxlbWVudFtcImVxdWlwZW1lbnRbc291c190eXBlXVwiXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiNFwiOlxyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDUsIDMpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiNVwiOlxyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDUsIDQpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImNvbnRlbnQtZGVzY3JpcHRpb24tZHRyXCIgaWQ9XCJjb250ZW50LWRlc2NyaXB0aW9uLScgK1xyXG4gICAgICAgICAgICBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJlcXVpcGVtZW50W0RUUl9ib2FyZF1cIl0gKyAnPC9wPicpXHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZXF1aXBlbWVudFtJbmRpY2VfRFRSXVwiXSArICc8L3A+JylcclxuICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJlcXVpcGVtZW50W051bV9zZXJpZV1cIl0gKyAnPC9wPicpXHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVFZGl0RGVsZXRlKGluZGV4KSk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgRXF1aXBtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgaWYgKEVxdWlwbWVudHNbaV1bXCJlcXVpcGVtZW50W1R5cGVdXCJdID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgICAgICBQcmVzZW5jZUVWQyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChQcmVzZW5jZUVWQykge1xyXG4gICAgICAgICAgICAvL0VjcmlzIGxlIG5vbSBkdSB0eXBlIFwiY2FydGVcIiBzb3VzIGxlIHR5cGUgIEVWQ1xyXG4gICAgICAgICAgICAvLyAkKGluZGV4RVZDKS5hcHBlbmQod3JpdGVUeXBlKDUsIDEpKTtcclxuICAgICAgICAgICAgLy9QYXJjb3VzIGxlIHR5cGUgZGUgc291c3R5cGUgXHJcbiAgICAgICAgICAgIHN3aXRjaCAoZWxlbWVudFtcImVxdWlwZW1lbnRbc291c190eXBlXVwiXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICAgICAgICAgICAgICAkKGluZGV4RVZDKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDUsIDApKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgJChpbmRleEVWQykuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCAxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiM1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICQoaW5kZXhFVkMpLmFwcGVuZCh3cml0ZVN1YnR5cGUoNSwgMikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKGluZGV4RVZDKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb250ZW50LWRlc2NyaXB0aW9uLWR0ciBjb250ZW50LWRlc2NyaXB0aW9uLWR0ckNhcmRcIiBpZD1cImNvbnRlbnQtZGVzY3JpcHRpb24tJyArXHJcbiAgICAgICAgICAgICAgICBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZXF1aXBlbWVudFtEVFJfYm9hcmRdXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJlcXVpcGVtZW50W0luZGljZV9EVFJdXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJlcXVpcGVtZW50W051bV9zZXJpZV1cIl0gKyAnPC9wPicpXHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlRWRpdERlbGV0ZShpbmRleCkpO1xyXG4gICAgICAgICAgICAkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgRVZDIGVxdWlwZW1lbnQgYmVmb3JlJyk7XHJcbiAgICAgICAgICAgICQoJyNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIEVxdWlwbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgJCgnLm1vZGFsLWZvb3RlcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI2NyZWF0ZS1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNzaG93LWVxdWlwbWVudCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50Jykuc2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy9TdXByZXNzaW9uIGRlIGwnw6lxdWlwZW1lbnQgZGFucyBsZSB0YWJsZWF1IGV0IGxlIGZyb250XHJcbmZ1bmN0aW9uIGRlbGV0ZUVxdWlwbWVudChwb3NpdGlvbikge1xyXG4gICAgRXF1aXBtZW50cy5zcGxpY2UocG9zaXRpb24sIDEpO1xyXG4gICAgJCgnLmRlc2NyaXB0aW9uJykucmVtb3ZlKCk7XHJcbiAgICBFcXVpcG1lbnRzLmZvckVhY2gocmV0dXJuSW5kZXhFbGVtZW50KTtcclxufVxyXG4vL0V4dHJhaXQgbGUgbm9tYnJlIGQndW5lIHN0cmVpbmdcclxuZnVuY3Rpb24gZXh0cmFpdE5vbWJyZShzdHIpIHtcclxuICAgIHJldHVybiBOdW1iZXIoc3RyLnJlcGxhY2UoL1teXFxkXS9nLCBcIlwiKSlcclxufVxyXG4vL0VjcmlzIGxlIHRpdHJlIGR1IHR5cGUgZCfDqXF1aXBlbWVudFxyXG5mdW5jdGlvbiB3cml0ZVR5cGUoc2l6ZSwgaW5kZXgpIHtcclxuICAgIHJldHVybiAnPGgnICsgc2l6ZSArICcgY2xhc3M9XCJkZXNjcmlwdGlvbi1UeXBlIFwiIGlkPVwiZGVzY3JpcHRpb24tdHlwZSBcIj4nICsgdGFiRXF1aXBlbWVudFR5cGVbaW5kZXhdICsgJzwvaCcgKyBzaXplICsgJz4nO1xyXG59O1xyXG4vL0VjcmlzIGxlIHRpdHJlIGR1IHNvdXN0eXBlIGQnw6lxdWlwZW1lbnRcclxuZnVuY3Rpb24gd3JpdGVTdWJ0eXBlKHNpemUsIGluZGV4KSB7XHJcbiAgICByZXR1cm4gJzxoJyArIHNpemUgKyAnIGNsYXNzPVwiZGVzY3JpcHRpb24tVHlwZSBcIiBpZD1cImRlc2NyaXB0aW9uLXN1YlR5cGUgXCI+JyArIHRhYkVxdWlwZW1lbnRTdWJ0eXBlW2luZGV4XSArICc8L2gnICsgc2l6ZSArICc+JztcclxufTtcclxuLy9FY3JpcyBsZSB0aXRyZSBkdSBzb3VzdHlwZSBkJ8OpcXVpcGVtZW50XHJcbmZ1bmN0aW9uIHdyaXRlU3VidHlwZUNhcmQoc2l6ZSwgaW5kZXgpIHtcclxuICAgIHJldHVybiAnPGgnICsgc2l6ZSArICcgY2xhc3M9XCJkZXNjcmlwdGlvbi1zdWJ0eXBlXCIgaWQ9XCJkZXNjcmlwdGlvbi1zdWJUeXBlIFwiPicgKyB0YWJFcXVpcGVtZW50U3VidHlwZVtpbmRleF0gKyAnPC9oJyArIHNpemUgKyAnPic7XHJcbn07XHJcbi8vRWNyaXQgbGVzIDIgaWNvbnMgZCdlZGl0IGV0IGRlbGV0ZVxyXG5mdW5jdGlvbiB3cml0ZUVkaXREZWxldGUoaW5kZXgpIHtcclxuICAgIHJldHVybiAnIDxwIGNsYXNzPVwiZWRpdC1kZWxldGUtZXF1aXBlbWVudFwiPiA8YSBpZD1cImVkaXQtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+IDwvYT4gPGEgaWQ9XCJkZWxldGUtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzID0gXCJmYXMgZmEtdHJhc2gtYWx0IHBvdWJlbGxlXCI+IDwvaT48L2E+PC9wPic7XHJcbn07XHJcblxyXG4vKmF1IGNsaWNrIGRlIGwnYWRkIEVxdWlwbWVudCBhZmZpY2hlciBsZSBmb3JtdWxhaXJlIGQnYWpvdXQgZCfDqXF1aXBlbWVudCovXHJcbiQoJyNjcmVhdGUtZXF1aXBtZW50JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI2NyZWF0ZS1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcjc2hvdy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcjcHJldmlvdXMtZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnLm1vZGFsLWZvb3RlcicpLmhpZGUoKTtcclxuICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmVtcHR5KCk7XHJcbiAgICAkKCc6aW5wdXQnLCAnI2Zvcm1fZXF1aXBlbWVudCcpLm5vdCgnOmJ1dHRvbiwgOnN1Ym1pdCwgOnJlc2V0LCA6aGlkZGVuJykudmFsKCcnKTtcclxuICAgIHByZXZpb3VzID0gXCJlcXVpcG1lbnRcIjtcclxufSk7XHJcbi8vIEdlcmUgbGUgY2xpY2sgZHUgcHJldmlvdXNcclxuJChcIiNwcmV2aW91cy1lcXVpcG1lbnRcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuICAgICQoJyNzaG93LWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNjcmVhdGUtZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI3ByZXZpb3VzLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuICAgICQoJy5tb2RhbC1mb290ZXInKS5zaG93KCk7XHJcbn0pO1xyXG4kKCcjY3JlYXRlLWJhc2VsaW5lJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50JykuaGlkZSgpO1xyXG4gICAgJCgnI3Nob3ctZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI2NyZWF0ZS1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcubW9kYWwtZm9vdGVyJykuc2hvdygpO1xyXG59KVxyXG4vLyBGZXJtZSBsZSBtb2RhbCBkZSBmb3JtdWxhaXJlIGQnYWpvdXQgZCfDqXF1aXBlbWVudFxyXG4kKCcjY2xvc2UtZXF1aXBlbWVudCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuICAgICQoJyNzaG93LWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNjcmVhdGUtZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI3ByZXZpb3VzLWVxdWlwbWVudCcpLmhpZGUoKTtcclxufSkiLCIvL1ZhbGlkYXRpb24gZGUgbCdlcnRtcyBcclxuJCgnI3ZhbGlkLWVydG1zLW5hbWUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiI2NvbnRlbnQtZm9ybS1lcnRtc1wiKS5oaWRlKCk7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWVxdWlwbWVudCcpLnNob3coKTtcclxufSkiLCJ2YXIgc2VhcmNoUmVxdWVzdCA9IG51bGw7XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNzZWFyY2gtZmxlZXQnKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KVxyXG4gICAgJCgnI25hbWVfcHJvamVjdCcpLmtleXVwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBzZWFyY2ggPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCBkYXRhID0gJ21vdGNsZWY9JyArIHNlYXJjaDtcclxuXHJcbiAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VhcmNoUmVxdWVzdCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgc2VhcmNoUmVxdWVzdC5hYm9ydCgpO1xyXG4gICAgICAgICAgICBzZWFyY2hSZXF1ZXN0ID0gJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9hbHN0b20vc2VhcmNoLWZsZWV0JyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAvLyBhc3luYzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuZWxlbWVudC1yZXN1bHQnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFiTmFtZSA9IEpTT04ucGFyc2UocmVzcG9uc2UucHJvamVjdHNGb3VuZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWJOYW1lLmxlbmd0aCA9PSAwIHx8ICFzZWFyY2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmVsZW1lbnQtcmVzdWx0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNyZXN1bHQtZmxlZXQnKS5hcHBlbmQoJzxwIGNsYXNzPVwiZWxlbWVudC1yZXN1bHRcIj5SZXN1bHRzIE5vdCBGb3VuZDwvcD4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiTmFtZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjcmVzdWx0LWZsZWV0JykuYXBwZW5kKCc8YSBocmVmPVwiL2Fsc3RvbS9wcm9qZWN0LycgKyBlbGVtZW50Lm5hbWUgKyAnXCI+PHAgY2xhc3M9XCJlbGVtZW50LXJlc3VsdFwiPicgKyBlbGVtZW50Lm5hbWUgKyAnPC9wPicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLmVsZW1lbnQtcmVzdWx0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoJyNhZGRUcmFpbnNUb0ZsZWV0JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICR0cmFpbl9zZWxlY3QgPSAkKCcjc2VsZWN0LXRyYWluLWZsZWV0Jyk7XHJcblxyXG4gICAgICAgICQoJyNtb2RhbC1mb3JtLXRyYWluLWZsZWV0JykuY3NzKCd6LWluZGV4JywgJy05OScpO1xyXG4gICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tUcmFpbnNcIikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgJHRyYWluX3NlbGVjdC5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gJHRyYWluX3NlbGVjdC5zZWxlY3RwaWNrZXIoJ3JlZnJlc2gnKTtcclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI21vZGFsLWZvcm0tdHJhaW4tZmxlZXQnKS5jc3MoJ3otaW5kZXgnLCAnOTk5OScpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgJCgnI3ZhbGlkLXRyYWluLWZsZWV0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGlkUHJvamVjdCA9IGV4dHJhaXROb21icmUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgICBsZXQgdGFiVHJhaW5zID0gW107XHJcbiAgICAgICAgdGFiVHJhaW5zLnB1c2goKTtcclxuICAgICAgICB2YXIgJHRoaXMgPSAkKCcjZm9ybXVsYWlyZS10cmFpbi1mbGVldCcpO1xyXG4gICAgICAgIGxldCBkYXRhID0ge307XHJcblxyXG4gICAgICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBuYW1lID0gdGhhdC5hdHRyKCduYW1lJyksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoYXQudmFsKCk7XHJcblxyXG4gICAgICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnL2Fsc3RvbS9hZGRUcmFpblRvRmxlZXQvJyArIGlkUHJvamVjdCxcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAvLyBhc3luYzogZmFsc2UsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkKCcjc2VsZWN0LXRyYWluLWZsZWV0JykudmFsKCkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxufSk7XHJcblxyXG4vL0V4dHJhaXQgbGUgbm9tYnJlIGQndW5lIHN0cmVpbmdcclxuZnVuY3Rpb24gZXh0cmFpdE5vbWJyZShzdHIpIHtcclxuICAgIHJldHVybiBOdW1iZXIoc3RyLnJlcGxhY2UoL1teXFxkXS9nLCBcIlwiKSlcclxufSIsImNvbnN0ICRmbGVldCA9ICQoJyNmbGVldF9zZWxlY3QnKTtcclxuY29uc3QgJHRyYWluID0gJCgnI3RyYWluX3NlbGVjdCcpO1xyXG5jb25zdCAkZXJ0bXMgPSAkKCcjZXJ0bXNfc2VsZWN0Jyk7XHJcbmNvbnN0IHR5cGVMb2cgPSAkKCcjc2VsZWN0X3R5cGVfbG9nJyk7XHJcbmNvbnN0IHR5cGVMb2dUZXh0ID0gJCgnI3NlbGVjdF90eXBlX2xvZycpO1xyXG5sZXQgZGF0YSA9IHt9O1xyXG4vL2RldGVjdGlvbiBzaSBsZSBicm93c2VyIGfDqHJlIGxlIGRyYWcmZHJvcFxyXG52YXIgaXNBZHZhbmNlZFVwbG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJldHVybiAoKCdkcmFnZ2FibGUnIGluIGRpdikgfHwgKCdvbmRyYWdzdGFydCcgaW4gZGl2ICYmICdvbmRyb3AnIGluIGRpdikpICYmICdGb3JtRGF0YScgaW4gd2luZG93ICYmICdGaWxlUmVhZGVyJyBpbiB3aW5kb3c7XHJcbn0oKTtcclxudmFyICRmb3JtID0gJCgnLmRyYWctbG9nJyk7XHJcbnZhciAkaW5wdXQgPSAkZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLFxyXG4gICAgJGxhYmVsID0gJGZvcm0uZmluZCgnbGFiZWwnKSxcclxuICAgIHNob3dGaWxlcyA9IGZ1bmN0aW9uIChmaWxlcykge1xyXG4gICAgICAgICRsYWJlbC50ZXh0KGZpbGVzLmxlbmd0aCA+IDEgPyAoJGlucHV0LmF0dHIoJ2RhdGEtbXVsdGlwbGUtY2FwdGlvbicpIHx8ICcnKS5yZXBsYWNlKCd7Y291bnR9JywgZmlsZXMubGVuZ3RoKSA6IGZpbGVzWzBdLm5hbWUpO1xyXG4gICAgfTtcclxudHlwZUxvZy5oaWRlKCk7XHJcbnR5cGVMb2dUZXh0LmhpZGUoKTtcclxuJGZvcm0uaGlkZSgpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSAnL2Fsc3RvbS9hZGQtbG9ncycpIHtcclxuICAgICAgICAkZm9ybS5zaG93KCk7XHJcbiAgICAgICAgcHJnYmFyID0gbmV3IGxkQmFyKFwiI3Rlc3QtcHJvZ3Jlc3NcIik7XHJcbiAgICB9XHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09ICcvYWxzdG9tL3NlYXJjaC1sb2dzJykge1xyXG4gICAgICAgIC8vaWRlbnRpZmljYXRpb24gZGUgbGEgcHJvZ3Jlc3MgYmFyXHJcbiAgICAgICAgcHJnYmFyID0gbmV3IGxkQmFyKFwiI3Rlc3QtcHJvZ3Jlc3NcIik7XHJcblxyXG4gICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tGbGVldFwiLCApLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAkZmxlZXQuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tUcmFpbkJ5RmxlZXRcIiwge1xyXG4gICAgICAgICAgICAgICAgJ2lkJzogJGZsZWV0LnZhbCgpXHJcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAkdHJhaW4uYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja0VydG1zQnlUcmFpblwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJHRyYWluLnZhbCgpXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGVydG1zLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59KVxyXG5cclxuJGZsZWV0LmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjc2VsZWN0X3R5cGVfbG9nJykuaGlkZSgpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCRmbGVldC52YWwoKSk7XHJcbiAgICAkdHJhaW4uZW1wdHkoKTtcclxuICAgICRlcnRtcy5lbXB0eSgpO1xyXG4gICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tUcmFpbkJ5RmxlZXRcIiwge1xyXG4gICAgICAgICdpZCc6ICRmbGVldC52YWwoKVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICR0cmFpbi5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICB9KVxyXG4gICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgfSlcclxufSlcclxuJHRyYWluLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjc2VsZWN0X3R5cGVfbG9nJykuaGlkZSgpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCRmbGVldC52YWwoKSk7XHJcbiAgICAkZXJ0bXMuZW1wdHkoKTtcclxuICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrRXJ0bXNCeVRyYWluXCIsIHtcclxuICAgICAgICAnaWQnOiAkdHJhaW4udmFsKClcclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAkZXJ0bXMuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHR5cGVMb2cuc2hvdygpO1xyXG4gICAgICAgICRmb3JtLnNob3coKTtcclxuICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmlmIChpc0FkdmFuY2VkVXBsb2FkKSB7XHJcbiAgICB2YXIgZHJvcHBlZEZpbGVzID0gZmFsc2U7XHJcbiAgICAkZm9ybS5hZGRDbGFzcygnaGFzLWFkdmFuY2VkLXVwbG9hZCcpOyAvLyBsZXR0aW5nIHRoZSBDU1MgcGFydCB0byBrbm93IGRyYWcmZHJvcCBpcyBzdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXJcclxuICAgICRmb3JtLm9uKCdkcmFnIGRyYWdzdGFydCBkcmFnZW5kIGRyYWdvdmVyIGRyYWdlbnRlciBkcmFnbGVhdmUgZHJvcCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9KTtcclxuICAgICRmb3JtLm9uKCdkcmFnb3ZlciBkcmFnZW50ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJGZvcm0uYWRkQ2xhc3MoJ2lzLWRyYWdvdmVyJyk7XHJcbiAgICB9KTtcclxuICAgICRmb3JtLm9uKCdkcmFnbGVhdmUgZHJhZ2VuZCBkcm9wJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRmb3JtLnJlbW92ZUNsYXNzKCdpcy1kcmFnb3ZlcicpO1xyXG5cclxuICAgIH0pO1xyXG4gICAgJGZvcm0ub24oJ2Ryb3AnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGRyb3BwZWRGaWxlcyA9IGUub3JpZ2luYWxFdmVudC5kYXRhVHJhbnNmZXIuZmlsZXM7XHJcbiAgICAgICAgJGZvcm0udHJpZ2dlcignc3VibWl0Jyk7XHJcbiAgICAgICAgJCgnLmxhYmVsLWRyb3AnKS50ZXh0KGRyb3BwZWRGaWxlc1swXS5uYW1lKTtcclxuICAgICAgICAkKCcubGFiZWwtZHJvcCcpLmNzcygnZm9udC13ZWlnaHQnLCAnYm9sZCcpO1xyXG4gICAgfSk7XHJcbiAgICAkZm9ybS5jaGFuZ2UoJ2Ryb3AnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGRyb3BwZWRGaWxlcyA9IGUub3JpZ2luYWxFdmVudC5kYXRhVHJhbnNmZXIuZmlsZXM7XHJcbiAgICAgICAgJGZvcm0udHJpZ2dlcignc3VibWl0Jyk7XHJcbiAgICB9KTtcclxufVxyXG5sZXQgTG9nID0ge30sXHJcbiAgICBpZEJhc2VsaW5lID0gXCJcIjtcclxuJGZvcm0ub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgaWYgKGRyb3BwZWRGaWxlcykge1xyXG5cclxuICAgICAgICBMb2dbJ25hbWVfbG9nJ10gPSAkKCcjdHlwZV9sb2dfc2VsZWN0JykudmFsKCk7XHJcbiAgICAgICAgaWRCYXNlbGluZSA9ICQoJyNlcnRtc19zZWxlY3QnKS52YWwoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygkKCcjZXJ0bXNfc2VsZWN0JykudmFsKCkpO1xyXG4gICAgICAgIC8vIFBhcnRpIGR1IHRyYWl0ZW1lbnQgZHUgZHJhZyBhbiBkcm9wIGZpbGVcclxuICAgICAgICBpZiAoJGZvcm0uaGFzQ2xhc3MoJ2lzLXVwbG9hZGluZycpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgc2hvd0ZpbGVzKGRyb3BwZWRGaWxlcyk7XHJcbiAgICAgICAgJGZvcm0uYWRkQ2xhc3MoJ2lzLXVwbG9hZGluZycpLnJlbW92ZUNsYXNzKCdpcy1lcnJvcicpO1xyXG5cclxuICAgICAgICBpZiAoaXNBZHZhbmNlZFVwbG9hZCkge1xyXG4gICAgICAgICAgICB2YXIgYWpheERhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm0uZ2V0KDApKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkcm9wcGVkRmlsZXMpIHtcclxuICAgICAgICAgICAgICAgICQuZWFjaChkcm9wcGVkRmlsZXMsIGZ1bmN0aW9uIChpLCBmaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWpheERhdGEuYXBwZW5kKCRpbnB1dC5hdHRyKCduYW1lJyksIGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIExvZ1sna2V5X2xvZyddID0gZmlsZS5uYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvYWxzdG9tL3VwbG9hZExvZycsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcblxyXG4gICAgICAgICAgICAgICAgeGhyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHhociA9IG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2dC5sb2FkZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0Lmxlbmd0aENvbXB1dGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwZXJjZW50Q29tcGxldGUgPSAoZXZ0LmxvYWRlZCAvIGV2dC50b3RhbCkgKiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0RvIHNvbWV0aGluZyB3aXRoIHVwbG9hZCBwcm9ncmVzcyBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmdiYXIuc2V0KHBlcmNlbnRDb21wbGV0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGVyY2VudENvbXBsZXRlID09IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjdGVzdC1wcm9ncmVzc1wiKS5hZGRDbGFzcygnaXMtYmxpbmsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldnQubG9hZGVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldnQudG90YWwgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4aHI7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIGRhdGE6IGFqYXhEYXRhLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGZvcm0ucmVtb3ZlQ2xhc3MoJ2lzLXVwbG9hZGluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjdGVzdC1wcm9ncmVzc1wiKS5yZW1vdmVDbGFzcygnaXMtYmxpbmsnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAkZm9ybS5hZGRDbGFzcyhkYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSA/ICdpcy1zdWNjZXNzJyA6ICdpcy1lcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIExvZyB0aGUgZXJyb3IsIHNob3cgYW4gYWxlcnQsIHdoYXRldmVyIHdvcmtzIGZvciB5b3VcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNvcnJ5IGJvYnlcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBpZnJhbWVOYW1lID0gJ3VwbG9hZGlmcmFtZScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgJGlmcmFtZSA9ICQoJzxpZnJhbWUgbmFtZT1cIicgKyBpZnJhbWVOYW1lICsgJ1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj48L2lmcmFtZT4nKTtcclxuXHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJGlmcmFtZSk7XHJcbiAgICAgICAgICAgICRmb3JtLmF0dHIoJ3RhcmdldCcsIGlmcmFtZU5hbWUpO1xyXG5cclxuICAgICAgICAgICAgJGlmcmFtZS5vbmUoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoJGlmcmFtZS5jb250ZW50cygpLmZpbmQoJ2JvZHknKS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgJGZvcm1cclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLXVwbG9hZGluZycpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKGRhdGEuc3VjY2VzcyA9PSB0cnVlID8gJ2lzLXN1Y2Nlc3MnIDogJ2lzLWVycm9yJylcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cigndGFyZ2V0Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEuc3VjY2VzcykgJGVycm9yTXNnLnRleHQoZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAkZm9ybS5yZW1vdmVBdHRyKCd0YXJnZXQnKTtcclxuICAgICAgICAgICAgICAgICRpZnJhbWUucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG4kKCcjdmFsaWQtYWxsLWxvZ3MnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ21haW4nKS5jc3MoJ29wYWNpdHknLCBcIjAuNFwiKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vZmx1c2gtbG9nJyxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAnbG9nJzogTG9nLFxyXG4gICAgICAgICAgICAnYmFzZWxpbmUnOiBpZEJhc2VsaW5lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAvL2FzayBmb3IgdGhlIHN0YXR1c1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSkiLCIkKCcjZm9ybV9wbHVnJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgbGV0IGJhc2VsaW5lID0gZXh0cmFpdE5vbWJyZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCRmb3JtKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9hZGQtcGx1ZycsXHJcbiAgICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgICAgZGF0YVR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgaWQ6IGJhc2VsaW5lXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSlcclxuXHJcbi8vRXh0cmFpdCBsZSBub21icmUgZCd1bmUgc3RyZWluZ1xyXG5mdW5jdGlvbiBleHRyYWl0Tm9tYnJlKHN0cikge1xyXG4gICAgcmV0dXJuIE51bWJlcihzdHIucmVwbGFjZSgvW15cXGRdL2csIFwiXCIpKTtcclxufSIsInJlcXVpcmUhIFwiLi9wcmVzZXRzXCI6IHtwcmVzZXRzfVxuXG5zaW1wbGUtc3RyID0gKGFycikgLT4gYXJyLmpvaW4gJydcbndyYXAgPSAoY29udGVudCkgLT4gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFwiICsgYnRvYShjb250ZW50KVxuXG5kbyAtPlxuICAgIG1ha2UgPVxuICAgICAgICBoZWFkOiAodmlld0JveCkgLT4gXCJcIlwiXG4gICAgICAgICAgICAgICAgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwidXRmLThcIj8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiI3ZpZXdCb3hcIj5cbiAgICAgICAgICAgICAgICBcIlwiXCJcblxuICAgICAgICBncmFkaWVudDogKGRpciA9IDQ1LCBkdXIgPSAxLCAuLi5jb2xvcnMpIC0+XG4gICAgICAgICAgICByZXQgPSBbQGhlYWQgXCIwIDAgMTAwIDEwMFwiXVxuICAgICAgICAgICAgbGVuID0gY29sb3JzLmxlbmd0aCAqIDQgKyAxXG4gICAgICAgICAgICBkaXIgPSBkaXIgKiBNYXRoLlBJIC8gMTgwXG4gICAgICAgICAgICBneCA9IE1hdGguY29zKGRpcikgKiogMlxuICAgICAgICAgICAgZ3kgPSBNYXRoLnNxcnQoZ3ggLSBneCAqKiAyKVxuICAgICAgICAgICAgaWYgZGlyID4gTWF0aC5QSSAqIDAuMjUgPT5cbiAgICAgICAgICAgICAgICBneSA9IE1hdGguc2luKGRpcikgKiogMlxuICAgICAgICAgICAgICAgIGd4ID0gTWF0aC5zcXJ0KGd5IC0gZ3kgKiogMilcbiAgICAgICAgICAgIHggPSBneCAqIDEwMFxuICAgICAgICAgICAgeSA9IGd5ICogMTAwXG4gICAgICAgICAgICByZXQucHVzaCBcIlwiXCI8ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9XCJncmFkaWVudFwiIHgxPVwiMFwiIHgyPVwiI2d4XCIgeTE9XCIwXCIgeTI9XCIjZ3lcIj5cIlwiXCJcbiAgICAgICAgICAgIGZvciBpIGZyb20gMCB0aWwgbGVuID0+XG4gICAgICAgICAgICAgICAgaWR4ID0gaSAqIDEwMCAvIChsZW4gLSAxKVxuICAgICAgICAgICAgICAgIHJldC5wdXNoIFwiXCJcIjxzdG9wIG9mZnNldD1cIiN7aWR4fSVcIiBzdG9wLWNvbG9yPVwiI3tjb2xvcnNbaSAlIGNvbG9ycy5sZW5ndGhdfVwiLz5cIlwiXCJcbiAgICAgICAgICAgIHJldC5wdXNoIFwiXCJcIlxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPlxuICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjQwMFwiIGhlaWdodD1cIjQwMFwiIGZpbGw9XCJ1cmwoXFwjZ3JhZGllbnQpXCI+XG4gICAgICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cInRyYW5zZm9ybVwiIHR5cGU9XCJ0cmFuc2xhdGVcIiBmcm9tPVwiLSN4LC0jeVwiXG4gICAgICAgICAgICAgICAgdG89XCIwLDBcIiBkdXI9XCIje2R1cn1zXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIvPjwvcmVjdD48L3N2Zz5cbiAgICAgICAgICAgICAgICBcIlwiXCJcbiAgICAgICAgICAgIHdyYXAgcmV0LmpvaW4oXCJcIilcblxuICAgICAgICBzdHJpcGU6IChjMT1cXCNiNGI0YjQsIGMyPVxcI2U2ZTZlNiwgZHVyID0gMSkgLT5cbiAgICAgICAgICAgIHJldCA9IFtAaGVhZCBcIjAgMCAxMDAgMTAwXCJdXG4gICAgICAgICAgICByZXQgKys9IFtcbiAgICAgICAgICAgICAgICBcIlwiXCI8cmVjdCBmaWxsPVwiI2MyXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIi8+XCJcIlwiXG4gICAgICAgICAgICAgICAgXCJcIlwiPGc+PGc+XCJcIlwiXG4gICAgICAgICAgICAgICAgW1wiXCJcIjxwb2x5Z29uIGZpbGw9XCIjYzFcIiBcIlwiXCIgK1xuICAgICAgICAgICAgICAgICBcIlwiXCJwb2ludHM9XCIjey05MCArIGkgKiAyMH0sMTAwICN7LTEwMCArIGkgKiAyMH0sXCJcIlwiICtcbiAgICAgICAgICAgICAgICAgXCJcIlwiMTAwICN7LTYwICsgaSAqIDIwfSwwICN7LTUwICsgaSAqIDIwfSwwIFwiLz5cIlwiXCIgZm9yIGkgZnJvbSAwIHRpbCAxM10uam9pbihcIlwiKVxuICAgICAgICAgICAgICAgIFwiXCJcIjwvZz48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCIgdHlwZT1cInRyYW5zbGF0ZVwiIFwiXCJcIlxuICAgICAgICAgICAgICAgIFwiXCJcImZyb209XCIwLDBcIiB0bz1cIjIwLDBcIiBkdXI9XCIje2R1cn1zXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIvPjwvZz48L3N2Zz5cIlwiXCJcbiAgICAgICAgICAgIF0uam9pbihcIlwiKVxuICAgICAgICAgICAgd3JhcCByZXRcblxuICAgICAgICBidWJibGU6IChjMSA9IFxcIzM5ZCwgYzIgPSBcXCM5Y2YsIGNvdW50ID0gMTUsIGR1ciA9IDEsIHNpemUgPSA2LCBzdz0xKSAtPlxuICAgICAgICAgICAgcmV0ID0gW0BoZWFkKFwiMCAwIDIwMCAyMDBcIiksIFwiXCJcIjxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiIGZpbGw9XCIjYzFcIi8+XCJcIlwiXVxuICAgICAgICAgICAgZm9yIGkgZnJvbSAwIHRpbCBjb3VudCA9PlxuICAgICAgICAgICAgICAgIGlkeCA9IC0oaSAvIGNvdW50KSAqIGR1clxuICAgICAgICAgICAgICAgIHggPSBNYXRoLnJhbmRvbSEgKiAxODQgKyA4XG4gICAgICAgICAgICAgICAgciA9ICggTWF0aC5yYW5kb20hICogMC43ICsgMC4zICkgKiBzaXplXG4gICAgICAgICAgICAgICAgZCA9IGR1ciAqICgxICsgTWF0aC5yYW5kb20hICogMC41KVxuICAgICAgICAgICAgICAgIHJldC5wdXNoIFtcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiPGNpcmNsZSBjeD1cIiN4XCIgY3k9XCIwXCIgcj1cIiNyXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjYzJcIiBzdHJva2Utd2lkdGg9XCIjc3dcIj5cIlwiXCJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cImN5XCIgdmFsdWVzPVwiMTkwOy0xMFwiIHRpbWVzPVwiMDsxXCIgXCJcIlwiXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcImR1cj1cIiN7ZH1zXCIgYmVnaW49XCIje2lkeH1zXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIvPlwiXCJcIlxuICAgICAgICAgICAgICAgICAgICBcIlwiXCI8L2NpcmNsZT5cIlwiXCJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiPGNpcmNsZSBjeD1cIiN4XCIgY3k9XCIwXCIgcj1cIiNyXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjYzJcIiBzdHJva2Utd2lkdGg9XCIjc3dcIj5cIlwiXCJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cImN5XCIgdmFsdWVzPVwiMzkwOzE5MFwiIHRpbWVzPVwiMDsxXCIgXCJcIlwiXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcImR1cj1cIiN7ZH1zXCIgYmVnaW49XCIje2lkeH1zXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIvPlwiXCJcIlxuICAgICAgICAgICAgICAgICAgICBcIlwiXCI8L2NpcmNsZT5cIlwiXCJcbiAgICAgICAgICAgICAgICBdLmpvaW4oXCJcIilcbiAgICAgICAgICAgIHdyYXAocmV0LmpvaW4oXCJcIikgKyBcIjwvc3ZnPlwiKVxuXG4gICAgaGFuZGxlciA9XG4gICAgICAgIHF1ZXVlOiB7fVxuICAgICAgICBydW5uaW5nOiBmYWxzZVxuICAgICAgICBtYWluOiAodGltZXN0YW1wKSAtPlxuICAgICAgICAgICAga2VlcG9uID0gZmFsc2VcbiAgICAgICAgICAgIHJlbW92ZWQgPSBbXVxuICAgICAgICAgICAgZm9yIGssZnVuYyBvZiBAcXVldWUgPT5cbiAgICAgICAgICAgICAgICByZXQgPSBmdW5jIHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgIGlmICFyZXQgPT4gcmVtb3ZlZC5wdXNoIGZ1bmNcbiAgICAgICAgICAgICAgICBrZWVwb24gPSBrZWVwb24gb3IgcmV0XG4gICAgICAgICAgICBmb3IgayxmdW5jIG9mIEBxdWV1ZSA9PiBpZiByZW1vdmVkLmluZGV4T2YoZnVuYykgPj0gMCA9PiBkZWxldGUgQHF1ZXVlW2tdXG4gICAgICAgICAgICBpZiBrZWVwb24gPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lICh+PiBAbWFpbiBpdClcbiAgICAgICAgICAgIGVsc2UgQHJ1bm5pbmcgPSBmYWxzZVxuICAgICAgICBhZGQ6IChrZXksIGYpIC0+XG4gICAgICAgICAgICBpZiAhQHF1ZXVlW2tleV0gPT4gQHF1ZXVlW2tleV0gPSBmXG4gICAgICAgICAgICBpZiAhQHJ1bm5pbmcgPT5cbiAgICAgICAgICAgICAgICBAcnVubmluZyA9IHRydWVcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKH4+IEBtYWluIGl0KVxuXG5cbiAgICB3aW5kb3cubGRCYXIgPSBsZEJhciA9IChzZWxlY3Rvciwgb3B0aW9uID0ge30pIC0+XG4gICAgICAgIHhtbG5zID0geGxpbms6IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgIHJvb3QgPSBpZiB0eXBlb2YhIHNlbGVjdG9yIGlzIFxcU3RyaW5nXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yIHNlbGVjdG9yXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHNlbGVjdG9yXG5cbiAgICAgICAgaWYgIXJvb3QubGRCYXIgPT4gcm9vdC5sZEJhciA9IEBcbiAgICAgICAgZWxzZSByZXR1cm4gcm9vdC5sZEJhclxuXG4gICAgICAgIGNscyA9IHJvb3QuZ2V0QXR0cmlidXRlKFxcY2xhc3MpIG9yICcnXG4gICAgICAgIGlmICF+Y2xzLmluZGV4T2YoJ2xkQmFyJykgPT4gcm9vdC5zZXRBdHRyaWJ1dGUgXFxjbGFzcywgXCIjY2xzIGxkQmFyXCJcbiAgICAgICAgaWQtcHJlZml4ID0gXCJsZEJhci0je01hdGgucmFuZG9tIXRvU3RyaW5nIDE2IC5zdWJzdHJpbmcgMn1cIlxuICAgICAgICBpZCA9XG4gICAgICAgICAgICBrZXk6IGlkLXByZWZpeFxuICAgICAgICAgICAgY2xpcDogXCIje2lkLXByZWZpeH0tY2xpcFwiXG4gICAgICAgICAgICBmaWx0ZXI6IFwiI3tpZC1wcmVmaXh9LWZpbHRlclwiXG4gICAgICAgICAgICBwYXR0ZXJuOiBcIiN7aWQtcHJlZml4fS1wYXR0ZXJuXCJcbiAgICAgICAgICAgIG1hc2s6IFwiI3tpZC1wcmVmaXh9LW1hc2tcIlxuICAgICAgICAgICAgbWFzay1wYXRoOiBcIiN7aWQtcHJlZml4fS1tYXNrLXBhdGhcIlxuICAgICAgICBkb21UcmVlID0gKG4sbykgLT5cbiAgICAgICAgICAgIG4gPSBuZXdOb2RlIG5cbiAgICAgICAgICAgIGZvciBrLHYgb2YgbyA9PiBpZiBrICE9IFxcYXR0ciA9PiBuLmFwcGVuZENoaWxkIGRvbVRyZWUoaywgdiBvciB7fSlcbiAgICAgICAgICAgIG4uYXR0cnMoby5hdHRyIG9yIHt9KVxuICAgICAgICAgICAgblxuICAgICAgICBuZXdOb2RlID0gKG4pIC0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5fX3Byb3RvX18uX19wcm90b19fLl9fcHJvdG9fX1xuICAgICAgICAgICAgLi50ZXh0ID0gKHQpIC0+IEBhcHBlbmRDaGlsZCBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0KVxuICAgICAgICAgICAgLi5hdHRycyA9IChvKSAtPiBmb3Igayx2IG9mIG8gPT5cbiAgICAgICAgICAgICAgICByZXQgPSAvKFteOl0rKTooW146XSspLy5leGVjKGspXG4gICAgICAgICAgICAgICAgaWYgIXJldCBvciAheG1sbnNbcmV0LjFdID0+IEBzZXRBdHRyaWJ1dGUgaywgdlxuICAgICAgICAgICAgICAgIGVsc2UgQHNldEF0dHJpYnV0ZU5TIHhtbG5zW3JldC4xXSwgaywgdlxuICAgICAgICAgICAgLi5zdHlsZXMgPSAobykgLT4gZm9yIGssdiBvZiBvID0+IEBzdHlsZVtrXSA9IHZcbiAgICAgICAgICAgIC4uYXBwZW5kID0gKG4pIC0+IEBhcHBlbmRDaGlsZCByID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TIFwiaHR0cDovL3d3dy53My5vZy8yMDAwL3N2Z1wiLCBuXG4gICAgICAgICAgICAuLmF0dHIgPSAobix2KSAtPiBpZiB2PyA9PiBAc2V0QXR0cmlidXRlIG4sIHYgZWxzZSBAZ2V0QXR0cmlidXRlIG5cbiAgICAgICAgY29uZmlnID1cbiAgICAgICAgICAgIFwidHlwZVwiOiAnc3Ryb2tlJ1xuICAgICAgICAgICAgXCJpbWdcIjogJydcbiAgICAgICAgICAgIFwicGF0aFwiOiAnTTEwIDEwTDkwIDEwTTkwIDhNOTAgMTInXG4gICAgICAgICAgICBcImZpbGwtZGlyXCI6IFxcYnR0XG4gICAgICAgICAgICBcImZpbGxcIjogXFwjMjViXG4gICAgICAgICAgICBcImZpbGwtYmFja2dyb3VuZFwiOiBcXCNkZGRcbiAgICAgICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogM1xuICAgICAgICAgICAgXCJwYXR0ZXJuLXNpemVcIjogbnVsbFxuICAgICAgICAgICAgXCJzdHJva2UtZGlyXCI6IFxcbm9ybWFsXG4gICAgICAgICAgICBcInN0cm9rZVwiOiBcXCMyNWJcbiAgICAgICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IFxcM1xuICAgICAgICAgICAgXCJzdHJva2UtdHJhaWxcIjogXFwjZGRkXG4gICAgICAgICAgICBcInN0cm9rZS10cmFpbC13aWR0aFwiOiAwLjVcbiAgICAgICAgICAgIFwiZHVyYXRpb25cIjogMVxuICAgICAgICAgICAgXCJlYXNpbmdcIjogXFxsaW5lYXJcbiAgICAgICAgICAgIFwidmFsdWVcIjogMFxuICAgICAgICAgICAgXCJpbWctc2l6ZVwiOiBudWxsXG4gICAgICAgICAgICBcImJib3hcIjogbnVsbFxuICAgICAgICAgICAgXCJzZXQtZGltXCI6IHRydWVcbiAgICAgICAgICAgIFwiYXNwZWN0LXJhdGlvXCI6IFwieE1pZFlNaWRcIlxuICAgICAgICAgICAgXCJ0cmFuc2l0aW9uLWluXCI6IGZhbHNlXG4gICAgICAgICAgICBcIm1pblwiOiAwXG4gICAgICAgICAgICBcIm1heFwiOiAxMDBcbiAgICAgICAgICAgIFwicHJlY2lzaW9uXCI6IDBcbiAgICAgICAgICAgIFwicGFkZGluZ1wiOiB1bmRlZmluZWRcblxuICAgICAgICBjb25maWdbXCJwcmVzZXRcIl0gPSByb290LmF0dHIoXCJkYXRhLXByZXNldFwiKSBvciBvcHRpb25bXCJwcmVzZXRcIl1cblxuICAgICAgICBpZiBjb25maWcucHJlc2V0P1xuICAgICAgICAgICAgIyB1c2UgdGhlIGRlZmF1bHQgcHJlc2V0XG4gICAgICAgICAgICBjb25maWcgPDw8IHByZXNldHNbY29uZmlnLnByZXNldF1cblxuICAgICAgICAjIG92ZXJ3cml0ZSBpZiB0aGVyZSBhcmUgYXJndW1lbnRzIHBhc3NlZCB2aWEgZGF0YS0qIGF0dHJpYnV0ZXNcbiAgICAgICAgZm9yIGF0dHIgb2YgY29uZmlnXG4gICAgICAgICAgICBpZiB0aGF0ID0gcm9vdC5hdHRyIFwiZGF0YS0je2F0dHJ9XCJcbiAgICAgICAgICAgICAgICBjb25maWdbYXR0cl0gPSB0aGF0XG5cbiAgICAgICAgY29uZmlnIDw8PCBvcHRpb25cbiAgICAgICAgaWYgY29uZmlnLmltZyA9PiBjb25maWcucGF0aCA9IG51bGxcblxuICAgICAgICBpcy1zdHJva2UgPSBjb25maWcudHlwZSA9PSBcXHN0cm9rZVxuICAgICAgICBwYXJzZS1yZXMgPSAodikgLT5cbiAgICAgICAgICAgIHBhcnNlciA9IC9kYXRhOmxkYmFyXFwvcmVzLChbXigpXSspXFwoKFteKV0rKVxcKS9cbiAgICAgICAgICAgIHJldCA9IHBhcnNlci5leGVjKHYpXG4gICAgICAgICAgICBpZiAhcmV0ID0+IHJldHVybiB2XG4gICAgICAgICAgICByZXQgPSBtYWtlW3JldC4xXS5hcHBseSBtYWtlLCByZXQuMi5zcGxpdChcXCwpXG4gICAgICAgIGNvbmZpZy5maWxsID0gcGFyc2UtcmVzIGNvbmZpZy5maWxsXG4gICAgICAgIGNvbmZpZy5zdHJva2UgPSBwYXJzZS1yZXMgY29uZmlnLnN0cm9rZVxuICAgICAgICBpZiBjb25maWdbXCJzZXQtZGltXCJdID09IFxcZmFsc2UgPT4gY29uZmlnW1wic2V0LWRpbVwiXSA9IGZhbHNlXG5cbiAgICAgICAgZG9tID1cbiAgICAgICAgICAgIGF0dHI6XG4gICAgICAgICAgICAgICAgXCJ4bWxuczp4bGlua1wiOiBcXGh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBjb25maWdbXCJhc3BlY3QtcmF0aW9cIl1cbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJcbiAgICAgICAgICAgIGRlZnM6XG4gICAgICAgICAgICAgICAgZmlsdGVyOlxuICAgICAgICAgICAgICAgICAgICBhdHRyOiBpZDogaWQuZmlsdGVyLCB4OiAtMSwgeTogLTEsIHdpZHRoOiAzLCBoZWlnaHQ6IDNcbiAgICAgICAgICAgICAgICAgICAgZmVNb3JwaG9sb2d5OiBhdHRyOlxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3I6IChpZiArY29uZmlnW1wiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIl0+PTAgPT4gXFxkaWxhdGUgZWxzZSBcXGVyb2RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiBNYXRoLmFicygrY29uZmlnW1wiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIl0pXG4gICAgICAgICAgICAgICAgICAgIGZlQ29sb3JNYXRyaXg6IGF0dHI6IHt2YWx1ZXM6ICcwIDAgMCAwIDEgICAgMCAwIDAgMCAxICAgIDAgMCAwIDAgMSAgICAwIDAgMCAxIDAnLCByZXN1bHQ6IFwiY21cIn1cbiAgICAgICAgICAgICAgICBtYXNrOlxuICAgICAgICAgICAgICAgICAgICBhdHRyOiBpZDogaWQubWFza1xuICAgICAgICAgICAgICAgICAgICBpbWFnZTogYXR0cjpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieGxpbms6aHJlZlwiOiBjb25maWcuaW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwidXJsKFxcIyN7aWQuZmlsdGVyfSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeDogMCwgeTogMCwgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAsIHByZXNlcnZlQXNwZWN0UmF0aW86IGNvbmZpZ1tcImFzcGVjdC1yYXRpb1wiXVxuXG4gICAgICAgICAgICAgICAgZzpcbiAgICAgICAgICAgICAgICAgICAgbWFzazpcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHI6IGlkOiBpZC5tYXNrLXBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGF0dHI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZDogY29uZmlnLnBhdGggb3IgXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFxcI2ZmZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogXFwjZmZmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcInVybChcXCMje2lkLmZpbHRlcn0pXCJcblxuICAgICAgICAgICAgICAgIGNsaXBQYXRoOlxuICAgICAgICAgICAgICAgICAgICBhdHRyOiBpZDogaWQuY2xpcFxuICAgICAgICAgICAgICAgICAgICByZWN0OiB7YXR0cjogY2xhc3M6IFxcbWFzaywgZmlsbDogXFwjMDAwfVxuICAgICAgICAgICAgICAgIHBhdHRlcm46XG4gICAgICAgICAgICAgICAgICAgIGF0dHI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQucGF0dGVybiwgcGF0dGVyblVuaXRzOiBcXHVzZXJTcGFjZU9uVXNlXG4gICAgICAgICAgICAgICAgICAgICAgICB4OjAsIHk6IDAsIHdpZHRoOiAzMDAsIGhlaWdodDogMzAwXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBhdHRyOiB4OiAwLCB5OiAwLCB3aWR0aDogMzAwLCBoZWlnaHQ6IDMwMFxuXG4gICAgICAgIHN2ZyA9IGRvbVRyZWUgXFxzdmcsIGRvbVxuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBcXGRpdlxuICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZSBcXGNsYXNzLCBcXGxkQmFyLWxhYmVsXG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQgc3ZnXG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQgdGV4dFxuXG4gICAgICAgIGdyb3VwID0gWzAsMF1cbiAgICAgICAgbGVuZ3RoID0gMFxuXG4gICAgICAgIEBmaXQgPSB+PlxuICAgICAgICAgICAgaWYgY29uZmlnW1wiYmJveFwiXSA9PlxuICAgICAgICAgICAgICBib3ggPSB0aGF0LnNwbGl0KCcgJykubWFwKC0+KyhpdC50cmltISkpXG4gICAgICAgICAgICAgIGJveCA9IHt4OiBib3guMCwgeTogYm94LjEsIHdpZHRoOiBib3guMiwgaGVpZ2h0OiBib3guM31cbiAgICAgICAgICAgIGVsc2UgYm94ID0gZ3JvdXAuMS5nZXRCQm94IVxuICAgICAgICAgICAgaWYgIWJveCBvciBib3gud2lkdGggPT0gMCBvciBib3guaGVpZ2h0ID09IDAgPT4gYm94ID0ge3g6IDAsIHk6IDAsIHdpZHRoOiAxMDAsIGhlaWdodDogMTAwfVxuICAgICAgICAgICAgZCA9IChNYXRoLm1heC5hcHBseShcbiAgICAgICAgICAgICAgbnVsbCwgPFtzdHJva2Utd2lkdGggc3Ryb2tlLXRyYWlsLXdpZHRoIGZpbGwtYmFja2dyb3VuZC1leHRydWRlXT4ubWFwKC0+Y29uZmlnW2l0XSkpXG4gICAgICAgICAgICApICogMS41XG4gICAgICAgICAgICBpZiBjb25maWdbXCJwYWRkaW5nXCJdPyA9PiBkID0gK2NvbmZpZ1tcInBhZGRpbmdcIl1cblxuICAgICAgICAgICAgc3ZnLmF0dHJzIHZpZXdCb3g6IFtib3gueCAtIGQsIGJveC55IC0gZCwgYm94LndpZHRoICsgZCAqIDIsIGJveC5oZWlnaHQgKyBkICogMl0uam9pbihcIiBcIilcbiAgICAgICAgICAgIGlmIGNvbmZpZ1tcInNldC1kaW1cIl0gPT4gPFt3aWR0aCBoZWlnaHRdPi5tYXAgfj4gaWYgIXJvb3Quc3R5bGVbaXRdIG9yIEBmaXRbaXRdID0+XG4gICAgICAgICAgICAgIHJvb3Quc3R5bGVbaXRdID0gXCIje2JveFtpdF0gKyBkICogMn1weFwiXG4gICAgICAgICAgICAgIEBmaXRbaXRdID0gdHJ1ZVxuXG4gICAgICAgICAgICByZWN0ID0gZ3JvdXAuMC5xdWVyeVNlbGVjdG9yIFxccmVjdFxuICAgICAgICAgICAgaWYgcmVjdCA9PiByZWN0LmF0dHJzIGRvXG4gICAgICAgICAgICAgICAgeDogYm94LnggLSBkLCB5OiBib3gueSAtIGQsIHdpZHRoOiBib3gud2lkdGggKyBkICogMiwgaGVpZ2h0OiBib3guaGVpZ2h0ICsgZCAqIDJcblxuICAgICAgICBpZiBjb25maWcucGF0aCA9PlxuICAgICAgICAgICAgaWYgaXMtc3Ryb2tlID0+XG4gICAgICAgICAgICAgICAgZ3JvdXAuMCA9IGRvbVRyZWUgXFxnLCBwYXRoOiBhdHRyOlxuICAgICAgICAgICAgICAgICAgICBkOiBjb25maWcucGF0aFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBcXG5vbmVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFxcYmFzZWxpbmVcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBncm91cC4wID0gZG9tVHJlZSBcXGcsIHJlY3Q6IGF0dHI6XG4gICAgICAgICAgICAgICAgICAgIHg6IDAsIHk6IDAsIHdpZHRoOiAxMDAsIGhlaWdodDogMTAwXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IFwidXJsKFxcIyN7aWQubWFzay1wYXRofSlcIiwgZmlsbDogY29uZmlnW1wiZmlsbC1iYWNrZ3JvdW5kXCJdXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcXGZyYW1lXG5cbiAgICAgICAgICAgIHN2Zy5hcHBlbmRDaGlsZCBncm91cC4wXG4gICAgICAgICAgICBncm91cC4xID0gZG9tVHJlZSBcXGcsIHBhdGg6IGF0dHI6XG4gICAgICAgICAgICAgICAgZDogY29uZmlnLnBhdGgsIGNsYXNzOiBpZiBpcy1zdHJva2UgPT4gXFxtYWlubGluZSBlbHNlIFxcc29saWRcbiAgICAgICAgICAgICAgICBcImNsaXAtcGF0aFwiOiBpZiBjb25maWcudHlwZSA9PSBcXGZpbGwgPT4gXCJ1cmwoXFwjI3tpZC5jbGlwfSlcIiBlbHNlICcnXG4gICAgICAgICAgICBzdmcuYXBwZW5kQ2hpbGQgZ3JvdXAuMVxuICAgICAgICAgICAgcGF0aDAgPSBncm91cC4wLnF1ZXJ5U2VsZWN0b3IgKGlmIGlzLXN0cm9rZSA9PiBcXHBhdGggZWxzZSBcXHJlY3QpXG4gICAgICAgICAgICBwYXRoMSA9IGdyb3VwLjEucXVlcnlTZWxlY3RvciBcXHBhdGhcbiAgICAgICAgICAgIGlmIGlzLXN0cm9rZSA9PiBwYXRoMS5hdHRycyBmaWxsOiBcXG5vbmVcblxuICAgICAgICAgICAgcGF0aW1nID0gc3ZnLnF1ZXJ5U2VsZWN0b3IgJ3BhdHRlcm4gaW1hZ2UnXG4gICAgICAgICAgICBpbWcgPSBuZXcgSW1hZ2UhXG4gICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lciBcXGxvYWQsIC0+XG4gICAgICAgICAgICAgICAgYm94ID0gaWYgY29uZmlnW1wicGF0dGVybi1zaXplXCJdID0+IHt3aWR0aDogK3RoYXQsIGhlaWdodDogK3RoYXR9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiBpbWcud2lkdGggYW5kIGltZy5oZWlnaHQgPT4ge3dpZHRoOiBpbWcud2lkdGgsIGhlaWdodDogaW1nLmhlaWdodH1cbiAgICAgICAgICAgICAgICBlbHNlIHt3aWR0aDogMzAwLCBoZWlnaHQ6IDMwMH1cbiAgICAgICAgICAgICAgICBzdmcucXVlcnlTZWxlY3RvciBcXHBhdHRlcm4gLmF0dHJzIHt3aWR0aDogYm94LndpZHRoLCBoZWlnaHQ6IGJveC5oZWlnaHR9XG4gICAgICAgICAgICAgICAgcGF0aW1nLmF0dHJzIHt3aWR0aDogYm94LndpZHRoLCBoZWlnaHQ6IGJveC5oZWlnaHR9XG4gICAgICAgICAgICBpZiAvLitcXC4uK3xeZGF0YTovLmV4ZWMoaWYgIWlzLXN0cm9rZSA9PiBjb25maWcuZmlsbCBlbHNlIGNvbmZpZy5zdHJva2UpID0+XG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGlmICFpcy1zdHJva2UgPT4gY29uZmlnLmZpbGwgZWxzZSBjb25maWcuc3Ryb2tlXG4gICAgICAgICAgICAgICAgcGF0aW1nLmF0dHJzIFwieGxpbms6aHJlZlwiOiBpbWcuc3JjICNpZiAhaXMtc3Ryb2tlID0+IGNvbmZpZy5maWxsIGVsc2UgY29uZmlnLnN0cm9rZVxuXG4gICAgICAgICAgICBpZiBpcy1zdHJva2UgPT5cbiAgICAgICAgICAgICAgICBwYXRoMC5hdHRycyBzdHJva2U6IGNvbmZpZ1tcInN0cm9rZS10cmFpbFwiXSwgXCJzdHJva2Utd2lkdGhcIjogY29uZmlnW1wic3Ryb2tlLXRyYWlsLXdpZHRoXCJdXG4gICAgICAgICAgICAgICAgcGF0aDEuYXR0cnMgZG9cbiAgICAgICAgICAgICAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogY29uZmlnW1wic3Ryb2tlLXdpZHRoXCJdXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogaWYgLy4rXFwuLit8XmRhdGE6Ly5leGVjKGNvbmZpZy5zdHJva2UpID0+IFwidXJsKFxcIyN7aWQucGF0dGVybn0pXCIgZWxzZSBjb25maWcuc3Ryb2tlXG4gICAgICAgICAgICBpZiBjb25maWcuZmlsbCBhbmQgIWlzLXN0cm9rZSA9PlxuICAgICAgICAgICAgICAgIHBhdGgxLmF0dHJzIGRvXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGlmIC8uK1xcLi4rfF5kYXRhOi8uZXhlYyhjb25maWcuZmlsbCkgPT4gXCJ1cmwoXFwjI3tpZC5wYXR0ZXJufSlcIiBlbHNlIGNvbmZpZy5maWxsXG5cbiAgICAgICAgICAgIGxlbmd0aCA9IHBhdGgxLmdldFRvdGFsTGVuZ3RoIVxuICAgICAgICAgICAgQGZpdCFcbiAgICAgICAgICAgIEBpbml0ZWQgPSB0cnVlXG4gICAgICAgIGVsc2UgaWYgY29uZmlnLmltZyA9PlxuICAgICAgICAgICAgaWYgY29uZmlnW1wiaW1nLXNpemVcIl0gPT5cbiAgICAgICAgICAgICAgICByZXQgPSBjb25maWdbXCJpbWctc2l6ZVwiXS5zcGxpdChcXCwpXG4gICAgICAgICAgICAgICAgc2l6ZSA9IHt3aWR0aDogK3JldC4wLCBoZWlnaHQ6ICtyZXQuMX1cbiAgICAgICAgICAgIGVsc2Ugc2l6ZSA9IHt3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMH1cblxuICAgICAgICAgICAgZ3JvdXAuMCA9IGRvbVRyZWUgXFxnLCByZWN0OiBhdHRyOlxuICAgICAgICAgICAgICAgIHg6IDAsIHk6IDAsIHdpZHRoOiAxMDAsIGhlaWdodDogMTAwLCBtYXNrOiBcInVybChcXCMje2lkLm1hc2t9KVwiLCBmaWxsOiBjb25maWdbXCJmaWxsLWJhY2tncm91bmRcIl1cbiAgICAgICAgICAgIHN2Zy5xdWVyeVNlbGVjdG9yICdtYXNrIGltYWdlJyAuYXR0cnMgZG9cbiAgICAgICAgICAgICAgICB3aWR0aDogc2l6ZS53aWR0aCwgaGVpZ2h0OiBzaXplLmhlaWdodFxuICAgICAgICAgICAgZ3JvdXAuMSA9IGRvbVRyZWUgXFxnLCBpbWFnZTogYXR0cjpcbiAgICAgICAgICAgICAgICB3aWR0aDogc2l6ZS53aWR0aCwgaGVpZ2h0OiBzaXplLmhlaWdodCwgeDogMCwgeTogMCwgcHJlc2VydmVBc3BlY3RSYXRpbzogY29uZmlnW1wiYXNwZWN0LXJhdGlvXCJdXG4gICAgICAgICAgICAgICAgI3dpZHRoOiAxMDAsIGhlaWdodDogMTAwLCB4OiAwLCB5OiAwLCBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBcInhNaWRZTWlkXCJcbiAgICAgICAgICAgICAgICBcImNsaXAtcGF0aFwiOiBpZiBjb25maWcudHlwZSA9PSBcXGZpbGwgPT4gXCJ1cmwoXFwjI3tpZC5jbGlwfSlcIiBlbHNlICcnXG4gICAgICAgICAgICAgICAgXCJ4bGluazpocmVmXCI6IGNvbmZpZy5pbWcsIGNsYXNzOiBcXHNvbGlkXG4gICAgICAgICAgICBpbWcgPSBuZXcgSW1hZ2UhXG4gICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lciBcXGxvYWQsIH4+XG4gICAgICAgICAgICAgICAgaWYgY29uZmlnW1wiaW1nLXNpemVcIl0gPT5cbiAgICAgICAgICAgICAgICAgICAgcmV0ID0gY29uZmlnW1wiaW1nLXNpemVcIl0uc3BsaXQoXFwsKVxuICAgICAgICAgICAgICAgICAgICBzaXplID0ge3dpZHRoOiArcmV0LjAsIGhlaWdodDogK3JldC4xfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgaW1nLndpZHRoIGFuZCBpbWcuaGVpZ2h0ID0+IHNpemUgPSB7d2lkdGg6IGltZy53aWR0aCwgaGVpZ2h0OiBpbWcuaGVpZ2h0fVxuICAgICAgICAgICAgICAgIGVsc2Ugc2l6ZSA9IHt3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMH1cbiAgICAgICAgICAgICAgICBzdmcucXVlcnlTZWxlY3RvciAnbWFzayBpbWFnZScgLmF0dHJzIGRvXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBzaXplLndpZHRoLCBoZWlnaHQ6IHNpemUuaGVpZ2h0XG4gICAgICAgICAgICAgICAgZ3JvdXAuMS5xdWVyeVNlbGVjdG9yICdpbWFnZScgLmF0dHJzIGRvXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBzaXplLndpZHRoLCBoZWlnaHQ6IHNpemUuaGVpZ2h0XG5cbiAgICAgICAgICAgICAgICBAZml0IVxuICAgICAgICAgICAgICAgIEBzZXQgdW5kZWZpbmVkLCBmYWxzZVxuICAgICAgICAgICAgICAgIEBpbml0ZWQgPSB0cnVlXG4gICAgICAgICAgICBpbWcuc3JjID0gY29uZmlnLmltZ1xuICAgICAgICAgICAgc3ZnLmFwcGVuZENoaWxkIGdyb3VwLjBcbiAgICAgICAgICAgIHN2Zy5hcHBlbmRDaGlsZCBncm91cC4xXG4gICAgICAgIHN2Zy5hdHRycyB3aWR0aDogXFwxMDAlLCBoZWlnaHQ6IFxcMTAwJSAjLCB2aWV3Qm94OiAnMCAwIDEwMCAxMDAnXG5cbiAgICAgICAgQHRyYW5zaXRpb24gPVxuICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgc3JjOiAwXG4gICAgICAgICAgICAgICAgZGVzOiAwXG4gICAgICAgICAgICB0aW1lOiB7fVxuXG4gICAgICAgICAgICBlYXNlOiAodCxiLGMsZCkgLT5cbiAgICAgICAgICAgICAgICB0ID0gdCAvIChkICogMC41KVxuICAgICAgICAgICAgICAgIGlmIHQgPCAxID0+IHJldHVybiBjICogMC41ICogdCAqIHQgKyBiXG4gICAgICAgICAgICAgICAgdCA9IHQgLSAxXG4gICAgICAgICAgICAgICAgcmV0dXJuIC1jICogMC41ICogKHQqKHQgLSAyKSAtIDEpICsgYlxuXG4gICAgICAgICAgICBoYW5kbGVyOiAodGltZSwgZG9UcmFuc2l0aW9uID0gdHJ1ZSkgLT5cbiAgICAgICAgICAgICAgICBpZiAhQHRpbWUuc3JjPyA9PiBAdGltZS5zcmMgPSB0aW1lXG4gICAgICAgICAgICAgICAgW21pbixtYXgscHJlY10gPSBbY29uZmlnW1wibWluXCJdLCBjb25maWdbXCJtYXhcIl0sMS9jb25maWdbXCJwcmVjaXNpb25cIl1dXG4gICAgICAgICAgICAgICAgW2R2LCBkdCwgZHVyXSA9IFtAdmFsdWUuZGVzIC0gQHZhbHVlLnNyYywgKHRpbWUgLSBAdGltZS5zcmMpICogMC4wMDEsICtjb25maWdbXCJkdXJhdGlvblwiXSBvciAxXVxuICAgICAgICAgICAgICAgIHYgPSBpZiBkb1RyYW5zaXRpb24gPT4gQGVhc2UoZHQsIEB2YWx1ZS5zcmMsIGR2LCBkdXIpIGVsc2UgQHZhbHVlLmRlc1xuICAgICAgICAgICAgICAgIGlmIGNvbmZpZy5wcmVjaXNpb24gPT4gdiA9IE1hdGgucm91bmQodiAqIHByZWMpIC8gcHJlY1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgZG9UcmFuc2l0aW9uID0+IHYgPSBNYXRoLnJvdW5kKHYpXG4gICAgICAgICAgICAgICAgdiA+Pz0gbWluXG4gICAgICAgICAgICAgICAgdiA8Pz0gbWF4XG4gICAgICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IHZcbiAgICAgICAgICAgICAgICBwID0gMTAwLjAgKiAodiAtIG1pbiApIC8gKCBtYXggLSBtaW4gKVxuICAgICAgICAgICAgICAgIGlmIGlzLXN0cm9rZSA9PlxuICAgICAgICAgICAgICAgICAgICBub2RlID0gcGF0aDFcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHJva2UtZGFzaGFycmF5XCI6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiBjb25maWdbXCJzdHJva2UtZGlyXCJdID09IFxccmV2ZXJzZSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjAgI3tsZW5ndGggKiAoMTAwIC0gcCkgKiAwLjAxfSAje2xlbmd0aCAqIHAgKiAwLjAxfSAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlID0+IFwiI3twICogMC4wMSAqIGxlbmd0aH0gI3soMTAwIC0gcCkgKiAwLjAxICogbGVuZ3RoICsgMX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgYm94ID0gZ3JvdXAuMS5nZXRCQm94IVxuICAgICAgICAgICAgICAgICAgICBkaXIgPSBjb25maWdbXCJmaWxsLWRpclwiXVxuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IGlmIGRpciA9PSBcXGJ0dCBvciAhZGlyID0+IGRvXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBib3gueSArIGJveC5oZWlnaHQgKiAoMTAwIC0gcCkgKiAwLjAxXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGJveC5oZWlnaHQgKiBwICogMC4wMVxuICAgICAgICAgICAgICAgICAgICAgICAgeDogYm94LngsIHdpZHRoOiBib3gud2lkdGhcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiBkaXIgPT0gXFx0dGIgPT4gZG9cbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGJveC55LCBoZWlnaHQ6IGJveC5oZWlnaHQgKiBwICogMC4wMVxuICAgICAgICAgICAgICAgICAgICAgICAgeDogYm94LngsIHdpZHRoOiBib3gud2lkdGhcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiBkaXIgPT0gXFxsdHIgPT4gZG9cbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGJveC55LCBoZWlnaHQ6IGJveC5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGJveC54LCB3aWR0aDogYm94LndpZHRoICogcCAqIDAuMDFcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiBkaXIgPT0gXFxydGwgPT4gZG9cbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGJveC55LCBoZWlnaHQ6IGJveC5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGJveC54ICsgYm94LndpZHRoICogKDEwMCAtIHApICogMC4wMVxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGJveC53aWR0aCAqIHAgKiAwLjAxXG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBzdmcucXVlcnlTZWxlY3RvciBcXHJlY3RcbiAgICAgICAgICAgICAgICBub2RlLmF0dHJzIHN0eWxlXG4gICAgICAgICAgICAgICAgaWYgZHQgPj0gZHVyID0+IGRlbGV0ZSBAdGltZS5zcmM7IHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICBzdGFydDogKHNyYywgZGVzLCBkb1RyYW5zaXRpb24pIC0+XG4gICAgICAgICAgICAgICAgQHZhbHVlIDw8PCB7c3JjLCBkZXN9XG4gICAgICAgICAgICAgICAgISEoIHJvb3Qub2Zmc2V0V2lkdGggfHwgcm9vdC5vZmZzZXRIZWlnaHQgfHwgcm9vdC5nZXRDbGllbnRSZWN0cyFsZW5ndGggKVxuICAgICAgICAgICAgICAgIGlmICFkb1RyYW5zaXRpb24gb3IgISggcm9vdC5vZmZzZXRXaWR0aCB8fCByb290Lm9mZnNldEhlaWdodCB8fCByb290LmdldENsaWVudFJlY3RzIWxlbmd0aCApID0+XG4gICAgICAgICAgICAgICAgICAgIEB0aW1lLnNyYyA9IDBcbiAgICAgICAgICAgICAgICAgICAgQGhhbmRsZXIgMTAwMCwgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgaGFuZGxlci5hZGQgaWQua2V5LCAodGltZSkgfj4gcmV0dXJuIEBoYW5kbGVyIHRpbWVcblxuICAgICAgICBAc2V0ID0gKHYsZG9UcmFuc2l0aW9uID0gdHJ1ZSkgLT5cbiAgICAgICAgICAgIHNyYyA9IEB2YWx1ZSBvciAwXG4gICAgICAgICAgICBpZiB2PyA9PiBAdmFsdWUgPSB2IGVsc2UgdiA9IEB2YWx1ZVxuICAgICAgICAgICAgZGVzID0gQHZhbHVlXG4gICAgICAgICAgICBAdHJhbnNpdGlvbi5zdGFydCBzcmMsIGRlcywgZG9UcmFuc2l0aW9uXG5cbiAgICAgICAgQHNldCAoK2NvbmZpZy52YWx1ZSBvciAwKSwgY29uZmlnW1widHJhbnNpdGlvbi1pblwiXSBvciBmYWxzZVxuICAgICAgICBAXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciBcXGxvYWQsICgtPlxuICAgICAgICBmb3Igbm9kZSBpbiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxcLmxkQmFyKSA9PlxuICAgICAgICAgIGlmICFub2RlLmxkQmFyID0+IG5vZGUubGRCYXIgPSBuZXcgbGRCYXIgbm9kZVxuICAgICksIGZhbHNlXG5cbm1vZHVsZS5leHBvcnRzID0gbGRCYXJcbiIsImV4cG9ydCBwcmVzZXRzID1cbiAgICByYWluYm93OlxuICAgICAgICBcInR5cGVcIjogJ3N0cm9rZSdcbiAgICAgICAgXCJwYXRoXCI6ICdNMTAgMTBMOTAgMTAnXG4gICAgICAgIFwic3Ryb2tlXCI6ICdkYXRhOmxkYmFyL3JlcyxncmFkaWVudCgwLDEsI2E1NTFkZiwjZmQ1MWFkLCNmZjdmODIsI2ZmYjg3NCwjZmZlYjkwKSdcbiAgICAgICAgXCJiYm94XCI6IFwiMTAgMTAgODAgMTBcIlxuICAgIGVuZXJneTpcbiAgICAgICAgXCJ0eXBlXCI6ICdmaWxsJ1xuICAgICAgICBcInBhdGhcIjogJ00xNSA1TDg1IDVBNSA1IDAgMCAxIDg1IDE1TDE1IDE1QTUgNSAwIDAgMSAxNSA1J1xuICAgICAgICBcInN0cm9rZVwiOiBcXCNmMDBcbiAgICAgICAgXCJmaWxsXCI6ICdkYXRhOmxkYmFyL3JlcyxncmFkaWVudCg0NSwyLCM0ZTksIzhmYiwjNGU5KSdcbiAgICAgICAgXCJmaWxsLWRpclwiOiBcImx0clwiXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6IFxcIzQ0NFxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDFcbiAgICAgICAgXCJiYm94XCI6IFwiMTAgNSA4MCAxMFwiXG4gICAgc3RyaXBlOlxuICAgICAgICBcInR5cGVcIjogJ2ZpbGwnXG4gICAgICAgIFwicGF0aFwiOiAnTTE1IDVMODUgNUE1IDUgMCAwIDEgODUgMTVMMTUgMTVBNSA1IDAgMCAxIDE1IDUnXG4gICAgICAgIFwic3Ryb2tlXCI6IFxcI2YwMFxuICAgICAgICBcImZpbGxcIjogJ2RhdGE6bGRiYXIvcmVzLHN0cmlwZSgjMjViLCM1OGUsMSknXG4gICAgICAgIFwiZmlsbC1kaXJcIjogXCJsdHJcIlxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZFwiOiBcXCNkZGRcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAxXG4gICAgICAgIFwiYmJveFwiOiBcIjEwIDUgODAgMTBcIlxuICAgIHRleHQ6XG4gICAgICAgIFwidHlwZVwiOiAnZmlsbCdcbiAgICAgICAgXCJpbWdcIjogXCJcIlwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiNzBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgNzAgMjBcIj48dGV4dCB4PVwiMzVcIiB5PVwiMTBcIiB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiIGRvbWluYW50LWJhc2VsaW5lPVwiY2VudHJhbFwiIGZvbnQtZmFtaWx5PVwiYXJpYWxcIj5MT0FESU5HPC90ZXh0Pjwvc3ZnPlwiXCJcIlxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDEuM1xuICAgICAgICBcInBhdHRlcm4tc2l6ZVwiOiAxMDBcbiAgICAgICAgXCJmaWxsLWRpclwiOiBcImx0clwiXG4gICAgICAgIFwiaW1nLXNpemVcIjogXCI3MCwyMFwiXG4gICAgICAgIFwiYmJveFwiOiBcIjAgMCA3MCAyMFwiXG4gICAgbGluZTpcbiAgICAgICAgXCJ0eXBlXCI6ICdzdHJva2UnXG4gICAgICAgIFwicGF0aFwiOiAnTTEwIDEwTDkwIDEwJ1xuICAgICAgICBcInN0cm9rZVwiOiBcXCMyNWJcbiAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogM1xuICAgICAgICBcInN0cm9rZS10cmFpbFwiOiBcXCNkZGRcbiAgICAgICAgXCJzdHJva2UtdHJhaWwtd2lkdGhcIjogMVxuICAgICAgICBcImJib3hcIjogXCIxMCAxMCA4MCAxMFwiXG4gICAgZmFuOlxuICAgICAgICBcInR5cGVcIjogJ3N0cm9rZSdcbiAgICAgICAgXCJwYXRoXCI6ICdNMTAgOTBBNDAgNDAgMCAwIDEgOTAgOTAnXG4gICAgICAgIFwiZmlsbC1kaXJcIjogXFxidHRcbiAgICAgICAgXCJmaWxsXCI6IFxcIzI1YlxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZFwiOiBcXCNkZGRcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAzXG4gICAgICAgIFwic3Ryb2tlLWRpclwiOiBcXG5vcm1hbFxuICAgICAgICBcInN0cm9rZVwiOiBcXCMyNWJcbiAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogXFwzXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsXCI6IFxcI2RkZFxuICAgICAgICBcInN0cm9rZS10cmFpbC13aWR0aFwiOiAwLjVcbiAgICAgICAgXCJiYm94XCI6IFwiMTAgNTAgODAgNDBcIlxuICAgIGNpcmNsZTpcbiAgICAgICAgXCJ0eXBlXCI6ICdzdHJva2UnXG4gICAgICAgIFwicGF0aFwiOiAnTTUwIDEwQTQwIDQwIDAgMCAxIDUwIDkwQTQwIDQwIDAgMCAxIDUwIDEwJ1xuICAgICAgICBcImZpbGwtZGlyXCI6IFxcYnR0XG4gICAgICAgIFwiZmlsbFwiOiBcXCMyNWJcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmRcIjogXFwjZGRkXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogM1xuICAgICAgICBcInN0cm9rZS1kaXJcIjogXFxub3JtYWxcbiAgICAgICAgXCJzdHJva2VcIjogXFwjMjViXG4gICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IFxcM1xuICAgICAgICBcInN0cm9rZS10cmFpbFwiOiBcXCNkZGRcbiAgICAgICAgXCJzdHJva2UtdHJhaWwtd2lkdGhcIjogMC41XG4gICAgICAgIFwiYmJveFwiOiBcIjEwIDEwIDgwIDgwXCJcbiAgICBidWJibGU6XG4gICAgICAgIFwidHlwZVwiOiAnZmlsbCdcbiAgICAgICAgXCJwYXRoXCI6ICdNNTAgMTBBNDAgNDAgMCAwIDEgNTAgOTBBNDAgNDAgMCAwIDEgNTAgMTAnXG4gICAgICAgIFwiZmlsbC1kaXJcIjogXFxidHRcbiAgICAgICAgXCJmaWxsXCI6ICdkYXRhOmxkYmFyL3JlcyxidWJibGUoIzM5ZCwjY2VmKSdcbiAgICAgICAgXCJwYXR0ZXJuLXNpemVcIjogXCIxNTBcIlxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZFwiOiBcXCNkZGRcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAyXG4gICAgICAgIFwic3Ryb2tlLWRpclwiOiBcXG5vcm1hbFxuICAgICAgICBcInN0cm9rZVwiOiBcXCMyNWJcbiAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogXFwzXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsXCI6IFxcI2RkZFxuICAgICAgICBcInN0cm9rZS10cmFpbC13aWR0aFwiOiAwLjVcbiAgICAgICAgXCJiYm94XCI6IFwiMTAgMTAgODAgODBcIlxuIiwiLy9kw6lmaW5pdGlvbiBkZXMgdmFyaWFibGVzXG5sZXQgTGlzdGVQbHVnID0gW10sXG4gICAgaSA9IDAsXG4gICAgdmFsaWQgPSBmYWxzZTtcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbm9tYnJlX3VybCA9IGV4dHJhaXROb21icmUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09ICcvYWxzdG9tL2Jhc2VsaW5lLXRyYWluLycgKyBub21icmVfdXJsKSB7XG4gICAgICAgIC8vaWRlbnRpZmljYXRpb24gZGUgbGEgcHJvZ3Jlc3MgYmFyXG4gICAgICAgIHByZ2JhciA9IG5ldyBsZEJhcihcIiN0ZXN0LXByb2dyZXNzXCIpO1xuICAgIH07XG59KTtcbi8vIERlY2xhcmF0aW9uIGQnw6l2ZW5lbWVudCBhdmFudCBjaGFyZ2VtZW50IGRlIGwgYXBhZ2VcbiQoJyN2YWxpZC1hbGwtcGx1ZycpLmhpZGUoKTtcbiQoJyNjYW5jZWwtYWxsLXBsdWcnKS5oaWRlKCk7XG4vL2RldGVjdGlvbiBzaSBsZSBicm93c2VyIGfDqHJlIGxlIGRyYWcmZHJvcFxudmFyIGlzQWR2YW5jZWRVcGxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJldHVybiAoKCdkcmFnZ2FibGUnIGluIGRpdikgfHwgKCdvbmRyYWdzdGFydCcgaW4gZGl2ICYmICdvbmRyb3AnIGluIGRpdikpICYmICdGb3JtRGF0YScgaW4gd2luZG93ICYmICdGaWxlUmVhZGVyJyBpbiB3aW5kb3c7XG59KCk7XG52YXIgJGZvcm0gPSAkKCcuYm94Jyk7XG52YXIgJGlucHV0ID0gJGZvcm0uZmluZCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKSxcbiAgICAkbGFiZWwgPSAkZm9ybS5maW5kKCdsYWJlbCcpLFxuICAgIHNob3dGaWxlcyA9IGZ1bmN0aW9uIChmaWxlcykge1xuICAgICAgICAkbGFiZWwudGV4dChmaWxlcy5sZW5ndGggPiAxID8gKCRpbnB1dC5hdHRyKCdkYXRhLW11bHRpcGxlLWNhcHRpb24nKSB8fCAnJykucmVwbGFjZSgne2NvdW50fScsIGZpbGVzLmxlbmd0aCkgOiBmaWxlc1swXS5uYW1lKTtcbiAgICB9O1xuXG4vL2Fqb3V0ZXIgdW4gcGx1Z1xuXG4kKCcjYWRkLWZvcm0tcGx1ZycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAvLyAkKCcjY2FyZC1jb250ZW50LXBsdWcnKS5hcHBlbmQoXCJ0ZXN0XCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKCQoJy5jb250ZW50LW5hbWUtZHJhZy1wbHVnJykpXG5cbiAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgJCgnI2lucHV0LW5hbWUtcGx1ZycpLnZhbCgnJyk7XG4gICAgICAgIGRyb3BwZWRGaWxlcyA9IGZhbHNlO1xuICAgICAgICAkZm9ybS5yZW1vdmVDbGFzcygnaXMtc3VjY2VzcycpO1xuICAgICAgICAkKCcubGFiZWwtZHJvcCcpLmNzcygnZm9udC13ZWlnaHQnLCAnJyk7XG4gICAgICAgICQoJy5sYWJlbC1kcm9wJykuaHRtbCgnPHN0cm9uZz4gQ2hvb3NlIGEgZmlsZSA8L3N0cm9uZz4gPHNwYW4gY2xhc3M9XCJib3hfX2RyYWduZHJvcFwiPm9yIGRyYWcgaXQgaGVyZSA8L3NwYW4+LjwvbGFiZWw+Jyk7XG4gICAgICAgICQoJyNjb250ZW50LW5hbWUtZHJhZy1wbHVnJykuc2hvdygpO1xuICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn0pXG4vL29uIG91dnJlIGxlIGZvcm0gcG91ciBham91dGVyXG5cbiQoJyNhZGRQbHVncycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG59KTtcbmlmIChpc0FkdmFuY2VkVXBsb2FkKSB7XG4gICAgdmFyIGRyb3BwZWRGaWxlcyA9IGZhbHNlO1xuICAgICRmb3JtLmFkZENsYXNzKCdoYXMtYWR2YW5jZWQtdXBsb2FkJyk7IC8vIGxldHRpbmcgdGhlIENTUyBwYXJ0IHRvIGtub3cgZHJhZyZkcm9wIGlzIHN1cHBvcnRlZCBieSB0aGUgYnJvd3NlclxuICAgICRmb3JtLm9uKCdkcmFnIGRyYWdzdGFydCBkcmFnZW5kIGRyYWdvdmVyIGRyYWdlbnRlciBkcmFnbGVhdmUgZHJvcCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcbiAgICAkZm9ybS5vbignZHJhZ292ZXIgZHJhZ2VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkZm9ybS5hZGRDbGFzcygnaXMtZHJhZ292ZXInKTtcbiAgICB9KTtcbiAgICAkZm9ybS5vbignZHJhZ2xlYXZlIGRyYWdlbmQgZHJvcCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGZvcm0ucmVtb3ZlQ2xhc3MoJ2lzLWRyYWdvdmVyJyk7XG5cbiAgICB9KTtcbiAgICAkZm9ybS5vbignZHJvcCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGRyb3BwZWRGaWxlcyA9IGUub3JpZ2luYWxFdmVudC5kYXRhVHJhbnNmZXIuZmlsZXM7XG4gICAgICAgICRmb3JtLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgICAgICAkKCcubGFiZWwtZHJvcCcpLnRleHQoZHJvcHBlZEZpbGVzWzBdLm5hbWUpO1xuICAgICAgICAkKCcubGFiZWwtZHJvcCcpLmNzcygnZm9udC13ZWlnaHQnLCAnYm9sZCcpO1xuICAgIH0pO1xuICAgICRmb3JtLmNoYW5nZSgnZHJvcCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGRyb3BwZWRGaWxlcyA9IGUub3JpZ2luYWxFdmVudC5kYXRhVHJhbnNmZXIuZmlsZXM7XG4gICAgICAgICRmb3JtLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgIH0pO1xufVxuJGZvcm0ub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQoJyN2YWxpZC1wbHVnJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgUGx1ZyA9IHt9O1xuICAgIGlmICgkKCcjaW5wdXQtbmFtZS1wbHVnJykudmFsKCkgIT0gXCJcIiAmJiBkcm9wcGVkRmlsZXMpIHtcblxuICAgICAgICAkKCcjdmFsaWQtYWxsLXBsdWcnKS5zaG93KCk7XG4gICAgICAgICQoJyNjYW5jZWwtYWxsLXBsdWcnKS5zaG93KCk7XG5cbiAgICAgICAgUGx1Z1snbmFtZV9wbHVnJ10gPSAkKCcjaW5wdXQtbmFtZS1wbHVnJykudmFsKCk7XG5cbiAgICAgICAgLy8gUGFydGkgZHUgdHJhaXRlbWVudCBkdSBkcmFnIGFuIGRyb3AgZmlsZVxuICAgICAgICBpZiAoJGZvcm0uaGFzQ2xhc3MoJ2lzLXVwbG9hZGluZycpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHNob3dGaWxlcyhkcm9wcGVkRmlsZXMpO1xuICAgICAgICAkZm9ybS5hZGRDbGFzcygnaXMtdXBsb2FkaW5nJykucmVtb3ZlQ2xhc3MoJ2lzLWVycm9yJyk7XG5cbiAgICAgICAgaWYgKGlzQWR2YW5jZWRVcGxvYWQpIHtcbiAgICAgICAgICAgIHZhciBhamF4RGF0YSA9IG5ldyBGb3JtRGF0YSgkZm9ybS5nZXQoMCkpO1xuXG4gICAgICAgICAgICBpZiAoZHJvcHBlZEZpbGVzKSB7XG4gICAgICAgICAgICAgICAgJC5lYWNoKGRyb3BwZWRGaWxlcywgZnVuY3Rpb24gKGksIGZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYWpheERhdGEuYXBwZW5kKCRpbnB1dC5hdHRyKCduYW1lJyksIGZpbGUpO1xuICAgICAgICAgICAgICAgICAgICBQbHVnWydrZXlfcGx1ZyddID0gZmlsZS5uYW1lO1xuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhamF4RGF0YSk7XG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogJy9hbHN0b20vdXBsb2FkRmlsZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIC8qZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAnZmlsZScgOiBhamF4RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgJ2J1Y2tldCc6ICdhcHBsaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICd1cGxvYWRfcmVxdWVzdCc6IFwidXBsb2FkXCJcbiAgICAgICAgICAgICAgICB9LCovXG4gICAgICAgICAgICAgICAgeGhyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2dC5sb2FkZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2dC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBlcmNlbnRDb21wbGV0ZSA9IChldnQubG9hZGVkIC8gZXZ0LnRvdGFsKSAqIDEwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0RvIHNvbWV0aGluZyB3aXRoIHVwbG9hZCBwcm9ncmVzcyBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJnYmFyLnNldChwZXJjZW50Q29tcGxldGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwZXJjZW50Q29tcGxldGUgPT0gMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjdGVzdC1wcm9ncmVzc1wiKS5hZGRDbGFzcygnaXMtYmxpbmsnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZ0LmxvYWRlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2dC50b3RhbCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4aHI7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGRhdGE6IGFqYXhEYXRhLFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJGZvcm0ucmVtb3ZlQ2xhc3MoJ2lzLXVwbG9hZGluZycpO1xuICAgICAgICAgICAgICAgICAgICAkKFwiI3Rlc3QtcHJvZ3Jlc3NcIikucmVtb3ZlQ2xhc3MoJ2lzLWJsaW5rJyk7XG4gICAgICAgICAgICAgICAgICAgIExpc3RlUGx1Zy5wdXNoKFBsdWcpO1xuICAgICAgICAgICAgICAgICAgICBMaXN0ZVBsdWcuZm9yRWFjaCh3cml0ZVBsdWcpO1xuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAkZm9ybS5hZGRDbGFzcyhkYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSA/ICdpcy1zdWNjZXNzJyA6ICdpcy1lcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjY29udGVudC1uYW1lLWRyYWctcGx1ZycpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhMaXN0ZVBsdWcpXG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIExvZyB0aGUgZXJyb3IsIHNob3cgYW4gYWxlcnQsIHdoYXRldmVyIHdvcmtzIGZvciB5b3VcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb3JyeSBib2J5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGlmcmFtZU5hbWUgPSAndXBsb2FkaWZyYW1lJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgJGlmcmFtZSA9ICQoJzxpZnJhbWUgbmFtZT1cIicgKyBpZnJhbWVOYW1lICsgJ1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj48L2lmcmFtZT4nKTtcblxuICAgICAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkaWZyYW1lKTtcbiAgICAgICAgICAgICRmb3JtLmF0dHIoJ3RhcmdldCcsIGlmcmFtZU5hbWUpO1xuXG4gICAgICAgICAgICAkaWZyYW1lLm9uZSgnbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoJGlmcmFtZS5jb250ZW50cygpLmZpbmQoJ2JvZHknKS50ZXh0KCkpO1xuICAgICAgICAgICAgICAgICRmb3JtXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtdXBsb2FkaW5nJylcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKGRhdGEuc3VjY2VzcyA9PSB0cnVlID8gJ2lzLXN1Y2Nlc3MnIDogJ2lzLWVycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ3RhcmdldCcpO1xuICAgICAgICAgICAgICAgIGlmICghZGF0YS5zdWNjZXNzKSAkZXJyb3JNc2cudGV4dChkYXRhLmVycm9yKTtcbiAgICAgICAgICAgICAgICAkZm9ybS5yZW1vdmVBdHRyKCd0YXJnZXQnKTtcbiAgICAgICAgICAgICAgICAkaWZyYW1lLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydCgnUGxlYXNlIGVudGVyIG5hbWUgJiBmaWxlIHBsdWcnKVxuICAgIH1cblxuXG59KVxuXG4kKCcjdGVzdC11cGxvYWQnKS5vbihcImNsaWNrXCIsIFwiYnV0dG9uXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZmlsZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKS5maWxlcztcbiAgICB2YXIgdGVtcERlc3RpbmF0aW9uID0gXCJ0ZXN0XCJcbiAgICB2YXIgbmFtZUZpbGUgPSBcImluaXRcIlxuICAgIHZhciB1cGxvYWRTdGF0dXMgPSBcIlBFTkRJTkdcIlxuICAgIC8vT24gZHJhZyBldCBkcm9wXG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9yZXF1ZXN0RmlsZScsXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgJ2J1Y2tldCc6ICdhcHBsaWNhdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0ZW1wRGVzdGluYXRpb24gPSByZXNwb25zZS5wYXRoXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogJy9hbHN0b20vdXBsb2FkRmlsZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2J1Y2tldCc6ICdhcHBsaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICd1cGxvYWRfcmVxdWVzdCc6IFwidXBsb2FkXCIsXG4gICAgICAgICAgICAgICAgICAgICdmaWxlbmFtZSc6IG5hbWVGaWxlLFxuICAgICAgICAgICAgICAgICAgICAndGVtcERlc3RpbmF0aW9uJzogdGVtcERlc3RpbmF0aW9uXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vYXNrIGZvciB0aGUgc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnbWFpbicpLmNzcygnb3BhY2l0eScsIFwiMVwiKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG4kKCcjdmFsaWQtYWxsLXBsdWcnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCdtYWluJykuY3NzKCdvcGFjaXR5JywgXCIwLjRcIik7XG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcbiAgICBsZXQgaWRCYXNlbGluZSA9IGV4dHJhaXROb21icmUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6ICcvYWxzdG9tL2ZsdXNoLXBsdWcnLFxuICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICdpZEJhc2VsaW5lJzogaWRCYXNlbGluZSxcbiAgICAgICAgICAgICdQbHVncyc6IExpc3RlUGx1Z1xuICAgICAgICB9LFxuICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIC8vYXNrIGZvciB0aGUgc3RhdHVzXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgfSlcbn0pXG4kKCcjY29udGVudC10ci1wbHVnJykub24oJ2NsaWNrJywgJy50ZC10YWJsZSA+IC50ZC1wbHVnJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnbWFpbicpLmNzcygnb3BhY2l0eScsIFwiMC40XCIpO1xuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XG5cbiAgICBsZXQga2V5ID0gJCh0aGlzKVswXVtcImlkXCJdO1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogJy9hbHN0b20vZG9ud2xvYWRGaWxlJyxcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAna2V5Jzoga2V5XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNwb25zZTtcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoJ29wYWNpdHknLCBcIjFcIik7XG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgfSlcbn0pXG4kKCcjcHJldmlvdXMtcGx1ZycpLm9uKCdjbGljaycsICcuY29udGVudC1rZXktbmFtZS1wbHVnID4gYScsIGZ1bmN0aW9uICgpIHtcblxuICAgIGxldCBpZFBsdWcgPSBleHRyYWl0Tm9tYnJlKCQodGhpcylbMF0uYXR0cignY2xhc3MnKSk7XG5cbiAgICAkKCdtYWluJykuY3NzKCdvcGFjaXR5JywgXCIwLjRcIik7XG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6ICcvYWxzdG9tL2RlbGV0ZS1wbHVnLycgKyBpZFBsdWcsXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICQoJyMnICsgaWRQbHVnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgIH0pXG59KVxuJCgnI2NhbmNlbC1hbGwtcGx1ZycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcubmV3LXBsdWcnKS5yZW1vdmUoKTtcbiAgICBMaXN0ZVBsdWcgPSBcIlwiO1xufSlcblxuLy9Hw6lyZSBsZSBjbGlxdWUgZGUgbGEgc3VwcHJlc3Npb25cbiQoJyNzaG93LWRvbmUtcGx1ZycpLm9uKCdjbGljaycsICcuY29udGVudC1rZXktbmFtZS1wbHVnID4gYScsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKVswXVtcImlkXCJdWzBdID09IFwiZFwiKSB7XG4gICAgICAgIGRlbGV0ZVBsdWcoZXh0cmFpdE5vbWJyZSgkKHRoaXMpWzBdW1wiaWRcIl0pKTtcbiAgICB9XG59KTtcbi8vRXh0cmFpdCBsZSBub21icmUgZCd1bmUgc3RyZWluZ1xuZnVuY3Rpb24gZXh0cmFpdE5vbWJyZShzdHIpIHtcbiAgICByZXR1cm4gTnVtYmVyKHN0ci5yZXBsYWNlKC9bXlxcZF0vZywgXCJcIikpXG59XG4vL1N1cHJlc3Npb24gZHUgcGx1ZyBkYW5zIGxlIHRhYmxlYXUgZXQgbGUgZnJvbnRcbmZ1bmN0aW9uIGRlbGV0ZVBsdWcocG9zaXRpb24pIHtcbiAgICBMaXN0ZVBsdWcuc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICAkKCcuY29udGVudC1rZXktbmFtZS1wbHVnJykucmVtb3ZlKCk7XG4gICAgTGlzdGVQbHVnLmZvckVhY2god3JpdGVQbHVnKTtcbn1cblxuZnVuY3Rpb24gd3JpdGVQbHVnKGVsZW1lbnQsIGluZGV4LCBhcnJheSkge1xuICAgIC8vVGVzdCBsJ2V4aXN0ZW5jZSBkZSBsYSBkaXYgZGFucyBsZSBjYXMgb8O5IGVsbGUgZXhpc3RlIGxhIHJlbXBsYWNlIHNpIHBhcyBsYSBtZXQgZW4gcGxhY2VcbiAgICBpZiAoJCgnI2tleS1uYW1lLScgKyBpbmRleCkubGVuZ3RoKSB7XG4gICAgICAgICQoJyNrZXktbmFtZS0nICsgaW5kZXgpLnJlcGxhY2VXaXRoKFwiPHNwYW4gY2xhc3M9J2NvbnRlbnQta2V5LW5hbWUtcGx1ZyBuZXctcGx1ZycgaWQ9J2tleS1uYW1lLVwiICsgaW5kZXggKyBcIic+PHA+XCIgKyBlbGVtZW50Lm5hbWVfcGx1ZyArIFwiPC9wPjxwPlwiICsgZWxlbWVudC5rZXlfcGx1ZyArIFwiPC9wPjxhIGlkPSdkZWxldGUtcGx1Zy1cIiArIGluZGV4ICsgXCInPjxpIGNsYXNzPSdmYXMgZmEtdHJhc2gtYWx0IHBvdWJlbGxlJz48L2k+PC9hPjwvc3Bhbj5cIilcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKCcjc2hvdy1kb25lLXBsdWcnKS5hcHBlbmQoXCI8c3BhbiBjbGFzcz0nY29udGVudC1rZXktbmFtZS1wbHVnIG5ldy1wbHVnJyBpZD0na2V5LW5hbWUtXCIgKyBpbmRleCArIFwiJz48cD5cIiArIGVsZW1lbnQubmFtZV9wbHVnICsgXCI8L3A+PHA+XCIgKyBlbGVtZW50LmtleV9wbHVnICsgXCI8L3A+PGEgaWQ9J2RlbGV0ZS1wbHVnLVwiICsgaW5kZXggKyBcIic+PGkgY2xhc3M9J2ZhcyBmYS10cmFzaC1hbHQgcG91YmVsbGUnPjwvaT48L2E+PC9zcGFuPlwiKTtcbiAgICB9XG5cbn0iLCIvLyBWaWRhZ2UgZGVzIGlucHV0cyBhdXggY2hhbmdlbWVudCBkZSBzZWxlY3RcclxuLy8gJCgnc2VsZWN0W25hbWU9XCJ0cmFpbnNbcHJvamVjdHNdXCJdLCBzZWxlY3RbbmFtZT1cInRyYWluc1t0cmFpblR5cGVdXCJdJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICQoJ2lucHV0W25hbWU9XCJ0cmFpbnNbbmFtZV1cIl0nKS52YWwoJycpO1xyXG4vLyB9KTtcclxuXHJcbi8qTWFzcXVhZ2UgZGUgY2VydGFpbnMgw6lsZW1lbnQgKi9cclxuJCgnI2NyZWF0ZS1lcnRtcy0xJykuaGlkZSgpO1xyXG4kKCcjY3JlYXRlLWVydG1zLTInKS5oaWRlKCk7XHJcbiQoXCIjY3JlYXRlLWVydG1zLXRyYWluLTFcIikuaGlkZSgpO1xyXG4kKCcjY3JlYXRlX3NvdXN0eXBlJykuaGlkZSgpO1xyXG4kKCcjY3JlYXRlX3R5cGUnKS5oaWRlKCk7XHJcbiQoJyNtb2RhbC1ib2R5JykuaGlkZSgpO1xyXG4kKCcjbW9kYWxfYmFzZWxpbmVfZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuJCgnI2Nsb3NlLW1vZGFsLWZvcm0tYmFzZWxpbmUtdHJhaW4nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjbW9kYWxfYmFzZWxpbmVfZXF1aXBlbWVudCcpLmhpZGUoKTtcclxufSlcclxuZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpKyspIHtcclxuICAgICQoJyNidG4tYmFzZWxpbmUtJyArIGkpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbn1cclxubGV0IGlkRXF1aXBtZW50ID0gXCJcIixcclxuICAgIGluZGV4RVZDO1xyXG5sZXQgbmV3X2VxdWlwbWVudF9udW0gPSBcIlwiLFxyXG4gICAgdG90YWxFcXVpcHQgPSBcIlwiLFxyXG4gICAgbmV3X2VxdWlwbWVudF9udW1fc2VyaWUgPSBbXTtcclxudmFyIHNlYXJjaFJlcXVlc3QgPSBudWxsO1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjc2VhcmNoLXRyYWluJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSlcclxuICAgICQoJyN0cmFpbnNfc2VhcmNoX25hbWVfdHJhaW4nKS5rZXl1cChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgc2VhcmNoID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgZGF0YSA9ICdtb3RjbGVmPScgKyBzZWFyY2g7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlYXJjaCk7XHJcblxyXG4gICAgICAgIGlmIChzZWFyY2gubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoc2VhcmNoUmVxdWVzdCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgc2VhcmNoUmVxdWVzdC5hYm9ydCgpO1xyXG4gICAgICAgICAgICBzZWFyY2hSZXF1ZXN0ID0gJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9hbHN0b20vc2VhcmNoLXRyYWluJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAvLyBhc3luYzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoID09ICQodGhhdCkudmFsKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmVsZW1lbnQtcmVzdWx0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YWJOYW1lID0gSlNPTi5wYXJzZShyZXNwb25zZS5wcm9qZWN0c0ZvdW5kKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFiTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YWJOYW1lLmxlbmd0aCA9PSAwIHx8ICFzZWFyY2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5lbGVtZW50LXJlc3VsdCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3Jlc3VsdC10cmFpbicpLmFwcGVuZCgnPHAgY2xhc3M9XCJlbGVtZW50LXJlc3VsdFwiPlJlc3VsdHMgTm90IEZvdW5kPC9wPicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYk5hbWUuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjcmVzdWx0LXRyYWluJykuYXBwZW5kKCc8YSBocmVmPVwiL2Fsc3RvbS90cmFpbnMvJyArIGVsZW1lbnQubmFtZSArICdcIj48cCBjbGFzcz1cImVsZW1lbnQtcmVzdWx0XCI+JyArIGVsZW1lbnQubmFtZSArICc8L3A+PC9hPicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLmVsZW1lbnQtcmVzdWx0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9KVxyXG4gICAgbGV0IG5vbWJyZV91cmwgPSBleHRyYWl0Tm9tYnJlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09ICcvYWxzdG9tL0luc3RhbmNlQmFzZWxpbmUvJyArIG5vbWJyZV91cmwpIHtcclxuXHJcbiAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAgICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja0Jhc2VsaW5lXCIsICkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICQoJyNzZWxlY3RfYmFzZWxpbmVfMScpLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3NlbGVjdF9iYXNlbGluZV8yJykuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAkKCcjc2VsZWN0X2Jhc2VsaW5lXzEnKS52YWwoJycpO1xyXG4gICAgICAgICAgICAkKCcjc2VsZWN0X2Jhc2VsaW5lXzInKS52YWwoJycpO1xyXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgJCgnI2Nsb3NlLW1vZGFsLWJhc2VsaW5lVG9UcmFpbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCdtYWluJykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAkKCcuZGVzY3JpcHRpb24nKS5yZW1vdmUoKTtcclxuICAgICAgICAkKCcjbW9kYWxfYmFzZWxpbmVfZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuICAgICAgICBuZXdfZXF1aXBtZW50X251bSA9IFwiXCI7XHJcbiAgICB9KVxyXG4gICAgJCgnI2Nsb3NlLWVxdWlwZW1lbnQtYmFzZWxpbmUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnbWFpbicpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgJCgnLmRlc2NyaXB0aW9uJykucmVtb3ZlKCk7XHJcbiAgICAgICAgJCgnI21vZGFsX2Jhc2VsaW5lX2VxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiAgICAgICAgbmV3X2VxdWlwbWVudF9udW0gPSBcIlwiO1xyXG4gICAgICAgIHRvdGFsRXF1aXB0ID0gXCJcIjtcclxuICAgIH0pXHJcbn0pXHJcblxyXG4kKCcjc2VsZWN0X3RyYWluJykuc2hvdygpO1xyXG4kKCcjc2VsZWN0X2xvY29tb3RpdmUnKS5zaG93KCk7XHJcblxyXG5sZXQgY3VycmVudF9jaG9pY2UgPSBcIlwiLFxyXG4gICAgZXJ0bXNfbGVmdCA9IGZhbHNlLFxyXG4gICAgZXJ0bXNfbWlkZGxlID0gZmFsc2UsXHJcbiAgICBlcnRtc19yaWdodCA9IGZhbHNlO1xyXG5cclxuJCgnI2Nsb3NlLW1vZGFsLWJhc2VsaW5lLTEnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoZXJ0bXNfcmlnaHQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLmFkZENsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLmhpZGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgZXJ0bXNfbGVmdCA9IGZhbHNlO1xyXG59KVxyXG4kKCcjY2xvc2UtbW9kYWwtYmFzZWxpbmUtMicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLmhpZGUoKTtcclxuICAgIGVydG1zX3JpZ2h0ID0gZmFsc2U7XHJcbn0pXHJcbiQoJyNlcnRtcy10cmFpbi0xJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgZXJ0bXNfbGVmdCA9IHRydWU7XHJcbiAgICBlcnRtc19taWRkbGUgPSBmYWxzZTtcclxuICAgIC8vbCdlcnRtcyBkZSBnYXVjaGUgc2VsZWN0aW9ubmVyXHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMScpLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMicpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjbGFiZWwtYmFzZWxpbmUtMScpLnRleHQoJ0Jhc2VsaW5lIGxlZnQnKTtcclxuICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtMycpO1xyXG4gICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuc2hvdygpO1xyXG4gICAgaWYgKGVydG1zX3JpZ2h0ID09IGZhbHNlKSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuaGlkZSgpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0pO1xyXG4kKCcjZXJ0bXMtdHJhaW4tMicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIGwnZXJ0bXMgZHUgbWlsaWV1IHNlbGVjdGlvbm5lclxyXG4gICAgZXJ0bXNfbGVmdCA9IGZhbHNlO1xyXG4gICAgZXJ0bXNfcmlnaHQgPSBmYWxzZTtcclxuICAgIGVydG1zX21pZGRsZSA9IHRydWU7XHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMicpLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMScpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMycpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjbGFiZWwtYmFzZWxpbmUtMScpLnRleHQoJ0Jhc2VsaW5lIG1pZGxlJyk7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5oaWRlKCk7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5zaG93KCk7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5hZGRDbGFzcygnb2Zmc2V0LW1kLTMnKTtcclxuXHJcbn0pO1xyXG4kKCcjZXJ0bXMtdHJhaW4tMycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIGwnZXJ0bXMgZGUgZHJvaXRlIHNlbGVjdGlvbm5lclxyXG4gICAgJCgnI2VydG1zLXRyYWluLTMnKS5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgZXJ0bXNfcmlnaHQgPSB0cnVlO1xyXG4gICAgZXJ0bXNfbWlkZGxlID0gZmFsc2U7XHJcbiAgICAkKCcjbGFiZWwtYmFzZWxpbmUtMicpLnRleHQoJ0Jhc2VsaW5lIHJpZ2h0Jyk7XHJcbiAgICBpZiAoZXJ0bXNfbGVmdCA9PSB0cnVlICYmIGVydG1zX21pZGRsZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtMycpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnNob3coKTtcclxuICAgIH0gZWxzZSBpZiAoZXJ0bXNfcmlnaHQgPT0gdHJ1ZSAmJiBlcnRtc19sZWZ0ID09IGZhbHNlKSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykucmVtb3ZlQ2xhc3MoJ29mZnNldC1tZC0zJyk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuaGlkZSgpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLmFkZENsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMicpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbn0pO1xyXG5cclxuXHJcbiQoJyNlcnRtcy1sb2NvLTEnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBlcnRtc19sZWZ0ID0gdHJ1ZTtcclxuICAgIGlmIChlcnRtc19yaWdodCA9PSB0cnVlKSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykucmVtb3ZlQ2xhc3MoJ29mZnNldC1tZC02Jyk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5zaG93KCk7XHJcbiAgICB9XHJcbiAgICAkKCcjbGFiZWwtYmFzZWxpbmUtMScpLnRleHQoJ0Jhc2VsaW5lIGxlZnQnKTtcclxuICAgICQoJyNlcnRtcy1sb2NvLTEnKS5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCgnI2VydG1zLWxvY28tMicpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjYnRuLWJhc2VsaW5lLTEnKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgJCgnI2J0bi1iYXNlbGluZS0zJykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxufSk7XHJcbiQoJyNlcnRtcy1sb2NvLTInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBlcnRtc19yaWdodCA9IHRydWU7XHJcbiAgICAkKCcjbGFiZWwtYmFzZWxpbmUtMicpLnRleHQoJ0Jhc2VsaW5lIHJpZ2h0Jyk7XHJcbiAgICAkKCcjYnRuLWJhc2VsaW5lLTMnKS5jc3MoJ29wYWNpdHknLCAnMScpXHJcbiAgICAkKCcjYnRuLWJhc2VsaW5lLTEnKS5jc3MoJ29wYWNpdHknLCAnMCcpXHJcbiAgICAkKCcjZXJ0bXMtbG9jby0yJykuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICQoJyNlcnRtcy1sb2NvLTEnKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgaWYgKGVydG1zX2xlZnQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG5cclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLmFkZENsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnNob3coKTtcclxuXHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbi8vUmVjdXBlcmUgbGUgc2VsZWN0IGRlIGxhIGJhc2VsaW5lIGV0IGxlIG1ldCBlbiB2aXN1ZWxcclxuJCgnI2FkZC1iYXNlbGluZS0xJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgaWYgKGVydG1zX21pZGRsZSkge1xyXG4gICAgICAgICQoJyNlcnRtcy10cmFpbi0zJykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuICAgICAgICAkKCcjZXJ0bXMtdHJhaW4tMScpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbiAgICB9IGVsc2UgaWYgKGVydG1zX2xlZnQpIHtcclxuICAgICAgICAkKCcjZXJ0bXMtdHJhaW4tMicpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbiAgICB9XHJcbiAgICAvLyAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5oaWRlKCk7XHJcbiAgICBsZXQgaWRCYXNlbGluZSA9ICQoJyNzZWxlY3RfYmFzZWxpbmVfMSBvcHRpb246c2VsZWN0ZWQnKS52YWwoKTtcclxuICAgICQoJyN0aXRsZV9iYXNlbGluZV9tb2RhbCcpLmh0bWwoJCgnI3NlbGVjdF9iYXNlbGluZV8xIG9wdGlvbjpzZWxlY3RlZCcpLnRleHQoKSk7XHJcbiAgICAvLyAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLnNob3coKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9DaGVja0VxdWlwZW1lbnRzLycgKyBpZEJhc2VsaW5lLFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbF9iYXNlbGluZV9lcXVpcGVtZW50Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKCdvcGFjaXR5JywgJzAuNCcpO1xyXG4gICAgICAgICAgICBsZXQgRXF1aXBtZW50cyA9IEpTT04ucGFyc2UocmVzcG9uc2UuZXF1aXBtZW50cyk7XHJcblxyXG4gICAgICAgICAgICBFcXVpcG1lbnRzLmZvckVhY2goQ291bnROdW1iZXJFcXVpcHQpO1xyXG4gICAgICAgICAgICBFcXVpcG1lbnRzLmZvckVhY2goRmluZEluZGV4RXZjKTtcclxuICAgICAgICAgICAgRXF1aXBtZW50cy5mb3JFYWNoKHJldHVybkluZGV4RWxlbWVudCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSlcclxuXHJcbiQoJyNhZGQtYmFzZWxpbmUtMicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMicpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcblxyXG4gICAgLy8gJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuaGlkZSgpO1xyXG4gICAgbGV0IG5hbWVfYmFzZWxpbmVfMSA9ICQoJyNzZWxlY3RfYmFzZWxpbmVfMiBvcHRpb246c2VsZWN0ZWQnKS52YWwoKTtcclxuICAgIGNvbnNvbGUubG9nKG5hbWVfYmFzZWxpbmVfMSlcclxuICAgIC8vICQoJyNjb250ZW50LW5hbWUtYmFzZWxpbmUtMScpLmFwcGVuZChcIjxoNT5cIiArIG5hbWVfYmFzZWxpbmVfMSArIFwiPC9oNT5cIilcclxuXHJcbn0pXHJcblxyXG4vLyBSZXF1ZXRlIEFKQVggcG91ciByZW1wbGlyIGxlIGZvcm11bGFpcmUgZCfDqXF1aXBlbWVudCBhdmVjIGwnZXF1aXBlbWVudCBzZWxlY3Rpb25uZXJcclxuJCgnI3Nob3ctZXF1aXBtZW50ICcpLm9uKCdjbGljaycsICcuZGVzY3JpcHRpb24gPiAuY29udGVudC1kZXNjcmlwdGlvbi1kdHIgPiBidXR0b24nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnI21vZGFsX2Jhc2VsaW5lX2VxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcubWFpbi1lcnRtcycpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICBpZEVxdWlwbWVudCA9IGV4dHJhaXROb21icmUoJCh0aGlzKVswXVtcImlkXCJdKVxyXG4gICAgdmFyICR0aGlzID0gJChcIiNmb3JtX2VxdWlwZW1lbnRfZWRpdF9iYXNlbGluZVwiKTtcclxuICAgIGxldCBkYXRhID0ge307XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LWJhc2VsaW5lLycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X1R5cGUnKS52YWwocmVzcG9uc2VbXCJ0eXBlXCJdW1wiaWRcIl0pO1xyXG4gICAgICAgICAgICBkYXRhWyQoJyNlcXVpcGVtZW50X1R5cGUnKS5hdHRyKCduYW1lJyldID0gJCgnI2VxdWlwZW1lbnRfVHlwZScpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja1N1YnR5cGVcIiwgZGF0YSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vVmlkYWdlIGNoYW1wIHNvdXN0eXBlXHJcbiAgICAgICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnLm1haW4tZXJ0bXMnKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9SZW1wbGkgaW5wdXQgYXZlYyB2YWxldXIgcmVjdSBkZSBsJ2VxdWlwZW1lbnRcclxuICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfVHlwZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9zb3VzX3R5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlW1wiU291c1R5cGVcIl0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcIlNvdXNUeXBlXCJdW1wiaWRcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfRFRSX2JvYXJkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcImRUUkJvYXJkXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfSW5kaWNlX0RUUic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJpbmRpY2VEVFJcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9OdW1fc2VyaWUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wibnVtU2VyaWVcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0Jykuc2hvdygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbi8vUmVtcGxpciBsZXMgaW5wdXRzIGF2ZWMgbGVzIG5vdXZlbGxlcyB2YWxldXJzXHJcbiQoJyNzb3VtaXNzaW9uLWVxdWlwZW1lbnQtZWRpdC1iYXNlbGluZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKSxcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG4gICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbn0pXHJcblxyXG5cclxuLy8gU291bWlzc2lvbiBmb3JtdWxhaXJlIGRlIHRyYWluXHJcbiQoJyNmb3JtX2VxdWlwZW1lbnRfZWRpdF9iYXNlbGluZScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKSxcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG5cclxuICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICB9KVxyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9lZGl0LWVxdWlwbWVudC1iYXNlbGluZS8nICsgaWRFcXVpcG1lbnQsXHJcbiAgICAgICAgdHlwZTogJHRoaXMuYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBlcXVpcGVtZW50OiBkYXRhXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWxfYmFzZWxpbmVfZXF1aXBlbWVudCcpLnNob3coKTtcclxuICAgICAgICAgICAgJCgnI2J0bi1hZGQtbnVtYmVyLXNlcmllJyArIGlkRXF1aXBtZW50KS5yZXBsYWNlV2l0aChcIjxwPlwiICsgcmVzcG9uc2UubnVtU2VyaWUgKyBcIjwvcD5cIilcclxuICAgICAgICAgICAgbmV3X2VxdWlwbWVudF9udW1fc2VyaWUucHVzaChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIG5ld19lcXVpcG1lbnRfbnVtKys7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3X2VxdWlwbWVudF9udW0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pXHJcbi8vVmFsaWRlciBsJ2luc3RhbmNlIGRlcyBlcXVpcGVtZW50c1xyXG4kKCcjdmFsaWQtYmFzZWxpbmUtdHJhaW4nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdfZXF1aXBtZW50X251bSk7XHJcbiAgICBjb25zb2xlLmxvZyh0b3RhbEVxdWlwdCk7XHJcblxyXG4gICAgaWYgKG5ld19lcXVpcG1lbnRfbnVtICE9IHRvdGFsRXF1aXB0KSB7XHJcbiAgICAgICAgYWxlcnQoJ3BsZWFzZSBlbnRlciBudW0gc2VyaWUgYmVmb3JlIGluc3RhbmNlIGJhc2VsaW5lJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IGV0Y3NJZCA9ICQoJyNldGNzaWQtbmFtZScpLnZhbCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV0Y3NJZCk7XHJcbiAgICAgICAgbGV0IGlkX3RyYWluID0gZXh0cmFpdE5vbWJyZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgICAgIGxldCBpZF9iYXNlbGluZSA9ICQoJyNzZWxlY3RfYmFzZWxpbmVfMSBvcHRpb246c2VsZWN0ZWQnKS52YWwoKTtcclxuICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvYWxzdG9tL2FkZEJhc2VsaW5lSW5zdGFuY2llcicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgaWRfdHJhaW46IGlkX3RyYWluLFxyXG4gICAgICAgICAgICAgICAgYmFzZWxpbmU6IGlkX2Jhc2VsaW5lLFxyXG4gICAgICAgICAgICAgICAgbmV3X2VxdWlwdDogbmV3X2VxdWlwbWVudF9udW1fc2VyaWUsXHJcbiAgICAgICAgICAgICAgICBldGNzSWQ6IGV0Y3NJZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9hbHN0b20vYmFzZWxpbmUtdHJhaW4vXCIgKyByZXNwb25zZS5pZGJhc2VsaW5lO1xyXG4gICAgICAgICAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSlcclxuLy8gUmVxdWV0ZSBBSkFYIHBvdXIgcmVtcGxpciBsZSBmb3JtdWxhaXJlIGQnw6lxdWlwZW1lbnQgYXZlYyBsJ2VxdWlwZW1lbnQgc2VsZWN0aW9ubmVyIGluc3RhbmNpZXJcclxuJCgnLmNhcmQnKS5vbignY2xpY2snLCAnLmVkaXQtZGVsZXRlLWVxdWlwZW1lbnQgPiBhJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJy5tYWluLWVydG1zJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG5cclxuICAgIGlkRXF1aXBtZW50ID0gZXh0cmFpdE5vbWJyZSgkKHRoaXMpWzBdW1wiY2xhc3NMaXN0XCJdWzBdKVxyXG4gICAgdmFyICR0aGlzID0gJChcIiNmb3JtX2VxdWlwZW1lbnRfZWRpdF9pbnN0YW5jZVwiKTtcclxuICAgIGxldCBkYXRhID0ge307XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LWluc3RhbmNlLycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfVHlwZScpLnZhbChyZXNwb25zZVtcInR5cGVcIl1bXCJpZFwiXSk7XHJcbiAgICAgICAgICAgIGRhdGFbJCgnI2VxdWlwZW1lbnRfVHlwZScpLmF0dHIoJ25hbWUnKV0gPSAkKCcjZXF1aXBlbWVudF9UeXBlJykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrU3VidHlwZVwiLCBkYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgLy9WaWRhZ2UgY2hhbXAgc291c3R5cGVcclxuICAgICAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvL1JlbXBsaSBpbnB1dCBhdmVjIHZhbGV1ciByZWN1IGRlIGwnZXF1aXBlbWVudFxyXG4gICAgICAgICAgICAgICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9UeXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X3NvdXNfdHlwZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VbXCJTb3VzVHlwZVwiXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiU291c1R5cGVcIl1bXCJpZFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9EVFJfYm9hcmQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiZFRSQm9hcmRcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9JbmRpY2VfRFRSJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcImluZGljZURUUlwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X051bV9zZXJpZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJudW1TZXJpZVwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuLy9Gb3JtdWxhaXJlIGQnZWRpdCBkZSBsJ8OpcXVpcGVtZW50XHJcbiQoJyNmb3JtX2VxdWlwZW1lbnRfZWRpdF9pbnN0YW5jZScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnLm1haW4tZXJ0bXMnKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyNmb3JtX2VxdWlwZW1lbnRfZWRpdCcpLmNzcyhcIm9wYWNpdHlcIiwgXCIwLjRcIik7XHJcblxyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICBsZXQgZGF0YSA9IHt9LFxyXG4gICAgICAgIGFjdGlvbjtcclxuICAgIC8vUmVtcGxpIGRhdGEgYSBwYXJ0aXIgZGVzIHZhbGV1ciBkZXMgaW5wdXRzXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKVxyXG5cclxuICAgICAgICBpZiAobmFtZSAhPSAoXCJlcXVpcGVtZW50W190b2tlbl1cIikgJiYgbmFtZSAhPSAoXCJzb3VtaXNzaW9uX2VxdWlwZW1lbnRcIikpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG4gICAgICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9lZGl0LWVxdWlwbWVudC1pbnN0YW5jZS8nICsgaWRFcXVpcG1lbnQsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgJ2VxdWlwZW1lbnQnOiBkYXRhLFxyXG4gICAgICAgICAgICBcInNvdW1pc3Npb25fZWRpdF9lcXVpcGVtZW50XCI6IHRydWUsXHJcbiAgICAgICAgICAgICdpZGVxdWlwbWVudCc6IGlkRXF1aXBtZW50XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLnNob3coKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KVxyXG5cclxuZnVuY3Rpb24gRmluZEluZGV4RXZjKGVsZW1lbnQsIGluZGV4LCBhcnJheSkge1xyXG4gICAgaW5kZXggPSBlbGVtZW50WydpZCddO1xyXG4gICAgaWYgKGVsZW1lbnRbJ3R5cGUnXVsnaWQnXSA9PSBcIjFcIiAmJiAoZWxlbWVudFsnU3RhdHVzJ10gPT0gdHJ1ZSkpIHtcclxuXHJcbiAgICAgICAgJChcIiNzaG93LWVxdWlwbWVudFwiKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVUeXBlKDQsIGVsZW1lbnRbJ3R5cGUnXVsnbmFtZSddKSk7XHJcbiAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hZGRDbGFzcyhcImRlc2NyaXB0aW9uLVN1YnR5cGVDYXJkXCIpXHJcbiAgICAgICAgaWYgKGVsZW1lbnRbJ1NvdXNUeXBlJ10gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVN1YnR5cGUoNSwgZWxlbWVudFsnU291c1R5cGUnXVsnbmFtZSddKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiY29udGVudC1kZXNjcmlwdGlvbi1kdHJcIiBpZD1cImNvbnRlbnQtZGVzY3JpcHRpb24tJyArXHJcbiAgICAgICAgICAgIGluZGV4ICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImRUUkJvYXJkXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImluZGljZURUUlwiXSArICc8L3A+JylcclxuICAgICAgICBpZiAoZWxlbWVudFsnbnVtU2VyaWUnXSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBzdHlsZT1cInBhZGRpbmc6IDJweFwiIGlkID0gXCJidG4tYWRkLW51bWJlci1zZXJpZScgKyBlbGVtZW50WydpZCddICsgJ1wiID4gQWRkIG51bWJlciBvZiBzZXJpZSA8L2J1dHRvbj4nKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFsnbnVtU2VyaWUnXSArICc8L3A+JylcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5kZXhFVkMgPSAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXR1cm5JbmRleEVsZW1lbnQoZWxlbWVudCwgaW5kZXgsIGFycmF5KSB7XHJcblxyXG5cclxuICAgIGluZGV4ID0gZWxlbWVudFsnaWQnXTtcclxuXHJcbiAgICBpZiAoKGVsZW1lbnRbJ1N0YXR1cyddID09IHRydWUpICYmIGVsZW1lbnRbJ3R5cGUnXVsnaWQnXSAhPSBcIjFcIikge1xyXG5cclxuICAgICAgICAvL1Rlc3QgbCdleGlzdGVuY2UgZGUgbGEgZGl2IGRhbnMgbGUgY2FzIG/DuSBlbGxlIGV4aXN0ZSBsYSByZW1wbGFjZSBzaSBwYXMgbGEgbWV0IGVuIHBsYWNlXHJcbiAgICAgICAgaWYgKCQoJyNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQoJyNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCkucmVwbGFjZVdpdGgoJzxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXggKyAnXCI+PC9kaXY+JylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI3Nob3ctZXF1aXBtZW50XCIpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vdGVzdCBzaSBsJ8OpcXVpcGVtZW50IGVzdCBsYSBjYXJ0ZSBvdSBub25cclxuICAgICAgICBpZiAoZWxlbWVudFsndHlwZSddWydpZCddICE9IFwiMlwiKSB7XHJcblxyXG4gICAgICAgICAgICAvL1N3aXRoIHJlcGxhY2VtZW50IGRlIGwnaWQgZHUgdHlwZSBhdmVjIHNvbiBub21cclxuICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVUeXBlKDQsIGVsZW1lbnRbJ3R5cGUnXVsnbmFtZSddKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFsnU291c1R5cGUnXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVN1YnR5cGUoNSwgZWxlbWVudFsnU291c1R5cGUnXVsnbmFtZSddKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiY29udGVudC1kZXNjcmlwdGlvbi1kdHJcIiBpZD1cImNvbnRlbnQtZGVzY3JpcHRpb24tJyArXHJcbiAgICAgICAgICAgICAgICBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZFRSQm9hcmRcIl0gKyAnPC9wPicpXHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImluZGljZURUUlwiXSArICc8L3A+JylcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRbJ251bVNlcmllJ10gPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIHN0eWxlPVwicGFkZGluZzogMnB4XCIgaWQgPSBcImJ0bi1hZGQtbnVtYmVyLXNlcmllJyArIGVsZW1lbnRbJ2lkJ10gKyAnXCIgPiBBZGQgbnVtYmVyIG9mIHNlcmllIDwvYnV0dG9uPicpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbJ251bVNlcmllJ10gKyAnPC9wPiA8YSBpZD1cImVkaXQtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+IDwvYT4gPGEgaWQ9XCJkZWxldGUtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzID0gXCJmYXMgZmEtdHJhc2gtYWx0IHBvdWJlbGxlXCI+IDwvaT48L2E+JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZUVkaXREZWxldGUoaW5kZXgpKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIC8vRWNyaXMgbGUgbm9tIGR1IHR5cGUgXCJjYXJ0ZVwiIHNvdXMgbGUgdHlwZSAgRVZDXHJcbiAgICAgICAgICAgICQoaW5kZXhFVkMpLmFwcGVuZCh3cml0ZVR5cGUoNSwgZWxlbWVudFsnU291c1R5cGUnXVsnbmFtZSddKSk7XHJcbiAgICAgICAgICAgIC8vUGFyY291cyBsZSB0eXBlIGRlIHNvdXN0eXBlIFxyXG4gICAgICAgICAgICAvLyAkKGluZGV4RVZDKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDYsIGVsZW1lbnRbJ1NvdXNUeXBlJ11bJ25hbWUnXSkpO1xyXG5cclxuICAgICAgICAgICAgJChpbmRleEVWQykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiY29udGVudC1kZXNjcmlwdGlvbi1kdHIgY29udGVudC1kZXNjcmlwdGlvbi1kdHJDYXJkXCIgaWQ9XCJjb250ZW50LWRlc2NyaXB0aW9uLScgK1xyXG4gICAgICAgICAgICAgICAgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImRUUkJvYXJkXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJpbmRpY2VEVFJcIl0gKyAnPC9wPicpXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50WydudW1TZXJpZSddID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBzdHlsZT1cInBhZGRpbmc6IDJweFwiIGlkID0gXCJidG4tYWRkLW51bWJlci1zZXJpZScgKyBlbGVtZW50WydpZCddICsgJ1wiID4gQWRkIG51bWJlciBvZiBzZXJpZSA8L2J1dHRvbj4nKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50WydudW1TZXJpZSddICsgJzwvcD4gPGEgaWQ9XCJlZGl0LScgKyBpbmRleCArICdcIj48aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPiA8L2E+IDxhIGlkPVwiZGVsZXRlLScgKyBpbmRleCArICdcIj48aSBjbGFzcyA9IFwiZmFzIGZhLXRyYXNoLWFsdCBwb3ViZWxsZVwiPiA8L2k+PC9hPicpXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZUVkaXREZWxldGUoaW5kZXgpKTtcclxuICAgICAgICAgICAgJCgnI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4KS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvdW50TnVtYmVyRXF1aXB0KGVsZW1lbnQsIGluZGV4LCBhcnJheSkge1xyXG4gICAgdG90YWxFcXVpcHQrKztcclxufVxyXG4vL0V4dHJhaXQgbGUgbm9tYnJlIGQndW5lIHN0cmVpbmdcclxuZnVuY3Rpb24gZXh0cmFpdE5vbWJyZShzdHIpIHtcclxuICAgIHJldHVybiBOdW1iZXIoc3RyLnJlcGxhY2UoL1teXFxkXS9nLCBcIlwiKSlcclxufVxyXG4vL0VjcmlzIGxlIHRpdHJlIGR1IHR5cGUgZCfDqXF1aXBlbWVudFxyXG5mdW5jdGlvbiB3cml0ZVR5cGUoc2l6ZSwgbmFtZSkge1xyXG4gICAgcmV0dXJuICc8aCcgKyBzaXplICsgJyBjbGFzcz1cImRlc2NyaXB0aW9uLVR5cGUgXCIgaWQ9XCJkZXNjcmlwdGlvbi10eXBlIFwiPicgKyBuYW1lICsgJzwvaCcgKyBzaXplICsgJz4nO1xyXG59O1xyXG4vL0VjcmlzIGxlIHRpdHJlIGR1IHNvdXN0eXBlIGQnw6lxdWlwZW1lbnRcclxuZnVuY3Rpb24gd3JpdGVTdWJ0eXBlKHNpemUsIG5hbWUpIHtcclxuICAgIHJldHVybiAnPGgnICsgc2l6ZSArICcgY2xhc3M9XCJkZXNjcmlwdGlvbi1UeXBlIFwiIGlkPVwiZGVzY3JpcHRpb24tc3ViVHlwZSBcIj4nICsgbmFtZSArICc8L2gnICsgc2l6ZSArICc+JztcclxufTtcclxuLy9FY3JpcyBsZSB0aXRyZSBkdSBzb3VzdHlwZSBkJ8OpcXVpcGVtZW50XHJcbmZ1bmN0aW9uIHdyaXRlU3VidHlwZUNhcmQoc2l6ZSwgbmFtZSkge1xyXG4gICAgcmV0dXJuICc8aCcgKyBzaXplICsgJyBjbGFzcz1cImRlc2NyaXB0aW9uLXN1YnR5cGVcIiBpZD1cImRlc2NyaXB0aW9uLXN1YlR5cGUgXCI+JyArIG5hbWUgKyAnPC9oJyArIHNpemUgKyAnPic7XHJcbn07XHJcbi8vIC8vRWNyaXQgbGVzIDIgaWNvbnMgZCdlZGl0IGV0IGRlbGV0ZVxyXG4vLyBmdW5jdGlvbiB3cml0ZUVkaXREZWxldGUoaW5kZXgpIHtcclxuLy8gICAgIHJldHVybiAnIDxwIGNsYXNzPVwiZWRpdC1kZWxldGUtZXF1aXBlbWVudFwiPiA8YSBpZD1cImVkaXQtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+IDwvYT48L3A+JztcclxuLy8gfTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9