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
/* harmony import */ var _ertms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ertms */ "./assets/js/ertms.js");
/* harmony import */ var _ertms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ertms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _equipement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equipement */ "./assets/js/equipement.js");
/* harmony import */ var _equipement__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_equipement__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baseline */ "./assets/js/baseline.js");
/* harmony import */ var _baseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_baseline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _progressBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./progressBar */ "./assets/js/progressBar.js");
/* harmony import */ var _progressBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_progressBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _test_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-upload */ "./assets/js/test-upload.js");
/* harmony import */ var _test_upload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_test_upload__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _train__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./train */ "./assets/js/train.js");
/* harmony import */ var _train__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_train__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _plug__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plug */ "./assets/js/plug.js");
/* harmony import */ var _plug__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_plug__WEBPACK_IMPORTED_MODULE_7__);







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
var labelCliked = false;
$(document).ready(function () {
  $('pre').remove();
  $('.button-left').click(function () {
    $('.sidebar').toggleClass('fliph');
  });
  $('.sidebar').hover(function () {
    $('main').removeClass('col-lg-12');
    $('main').removeClass('pl-5');
    $('main').removeClass('col-md-12');
    $('main').css('transition', 'all 0.6s ease-in-out');
    $('main').addClass('ml-sm-auto');
    $('main').addClass('col-lg-10');
    $('main').addClass('col-md-9');
  }, function () {
    $('main').removeClass('col-lg-10');
    $('main').removeClass('col-md-9');
    $('main').css('transition', 'all 0.6s ease-in-out');
    $('main').addClass('pl-5');
    $('main').addClass('col-lg-12');
    $('main').addClass('col-md-12');
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
  } else {
    console.log(window.location.pathname);
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
    $('.main-baseline').css('opacity', "0.4");
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
  $('.main-ertms').css("opacity", '1');
}); // 
// Requete AJAX pour remplir le formulaire d'équipement avec l'equipement selectionner

$('.content-description-dtr').on('click', '.edit-delete-equipement > a', function (e) {
  e.preventDefault();
  $('.main-ertms').css("opacity", '0.4');
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
}); //Formulaire d'edit de l'équipement

$('#form_equipement_edit').on('submit', function (e) {
  e.preventDefault();
  $('.main-ertms').css("opacity", '0.4');
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
  $('.main-baseline').css("opacity", '0.4');
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
      $('#title-version').append("<p>" + response.version + "</p>");
      $('.main-baseline').css("opacity", '1');
      $('#wait-spinner').hide();
      $('#close-modal-form-version').trigger('click');
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

/***/ "./assets/js/ertms.js":
/*!****************************!*\
  !*** ./assets/js/ertms.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// $('#delete-ertms').on('submit', function (e) {
//     e.preventDefault();
//     var $this = $(this);
//     $.ajax({
//         url: $this.attr('action'),
//         type: $this.attr('method'),
//         data: {},
//         async: true,
//         dataType: 'json', // JSON
//         success: function (response) {
//             console.log(response);
//         },
//         error: function (xhr, textStatus, errorThrown) {
//             ('Ajax request failed.');
//         }
//     });
// })

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
    valid = false; // Declaration d'évenement avant chargement de l apage

$('#valid-all-plug').hide(); //detection si le browser gère le drag&drop

var isAdvancedUpload = function () {
  var div = document.createElement('div');
  return ('draggable' in div || 'ondragstart' in div && 'ondrop' in div) && 'FormData' in window && 'FileReader' in window;
}();

var $form = $('.box');

var $input = $form.find('input[type="file"]'),
    $label = $form.find('label'),
    showFiles = function showFiles(files) {
  $label.text(files.length > 1 ? ($input.attr('data-multiple-caption') || '').replace('{count}', files.length) : files[0].name);
}; //identification de la progress bar


prgbar = new ldBar("#test-progress"); //ajouter un plug

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
    Plug['name_plug'] = $('#input-name-plug').val(); // Parti du traitement du drag an drop file

    if ($form.hasClass('is-uploading')) return false;
    showFiles(droppedFiles);
    $form.addClass('is-uploading').removeClass('is-error');

    if (isAdvancedUpload) {
      var ajaxData = new FormData($form.get(0));

      if (droppedFiles) {
        $.each(droppedFiles, function (i, file) {
          ajaxData.append($input.attr('name'), file);
          console.log(Plug);
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
            if (evt.lengthComputable) {
              var percentComplete = evt.loaded / evt.total * 100; //Do something with upload progress here

              prgbar.set(percentComplete);

              if (percentComplete == 100) {
                $("#test-progress").addClass('is-blink');
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
          console.log(Plug);
        },
        success: function success(data) {
          $form.addClass(data.success == true ? 'is-success' : 'is-error');
          $('#content-name-drag-plug').hide();
          $('#show-done-plug').append("<span class='content-key-name-plug'><p>" + Plug.name_plug + "</p><p>" + Plug.key_plug + "</p><a id='delete-" + Plug.key_plug + "'><i class='fas fa-trash-alt poubelle'></i></a></span>");
          console.log(ListePlug);
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
        }
      });
    }
  });
});
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
});
var new_equipment_num = "",
    totalEquipt = "",
    new_equipment_num_serie = []; // Soumission formulaire de train

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
    },
    error: function error(xhr, textStatus, errorThrown) {
      'Ajax request failed.';
    }
  });
}); //Valider l'instance des equipements

$('#valid-baseline-train').click(function () {
  if (new_equipment_num != totalEquipt) {
    alert('please enter num serie before instance baseline');
  } else {
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
        new_equipt: new_equipment_num_serie
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

$('.content-description-dtr-instance').on('click', '.edit-delete-equipement > a', function (e) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9iYXNlbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZXF1aXBlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZXJ0bXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90a2lyYnkvd29ya3NwYWNlL3picnlpa3QvbG9hZGluZy9wcm9qZWN0cy9sZEJhci9sb2FkaW5nLWJhci9zcmMvbG9hZGluZy1iYXIubHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90a2lyYnkvd29ya3NwYWNlL3picnlpa3QvbG9hZGluZy9wcm9qZWN0cy9sZEJhci9sb2FkaW5nLWJhci9zcmMvcHJlc2V0cy5scyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGVzdC11cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RyYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiaG92ZXIiLCJmaW5kIiwic3RvcCIsImFuaW1hdGUiLCJoZWlnaHQiLCJvcGFjaXR5IiwiaGlkZSIsImxhYmVsQ2xpa2VkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInJlbW92ZSIsImNsaWNrIiwidG9nZ2xlQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNzcyIsImFkZENsYXNzIiwiJHR5cGUiLCJhdHRyIiwiRXF1aXBtZW50cyIsImkiLCJpbmRleEVWQyIsInBvc0luZGV4IiwiUHJlc2VuY2VFVkMiLCJpZEVxdWlwbWVudCIsInRhYkluZGV4RXF1aXB0Iiwic2VsZWN0IiwiY3JlYXRlRWxlbWVudCIsInByZXZpb3VzIiwidGFiRXF1aXBlbWVudFR5cGUiLCJ0YWJFcXVpcGVtZW50U3VidHlwZSIsImRhdGEiLCJ2YWwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2hvdyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJlbXB0eSIsImZvckVhY2giLCJlbGVtZW50IiwiYXBwZW5kIiwiT3B0aW9uIiwibmFtZSIsImlkIiwiY29uc29sZSIsImxvZyIsImNoYW5nZSIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiJHRoaXMiLCJhY3Rpb24iLCJlYWNoIiwiaW5kZXgiLCJ2YWx1ZSIsInRoYXQiLCJwdXNoIiwiYWpheCIsInVybCIsInR5cGUiLCJ0YWJFcXVpcHRzIiwiYXN5bmMiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJlcnJvciIsInhociIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsImlkRXJ0bXMiLCJleHRyYWl0Tm9tYnJlIiwiZXF1aXBlbWVudCIsInJldHVybkluZGV4RWxlbWVudCIsImFsZXJ0IiwiYmFzZWxpbmVOYW1lIiwiYmFzZWxpbmUiLCJ0ZXh0IiwiaWRCYXNlbGluZSIsImhyZWYiLCJkZWxldGVFcXVpcG1lbnQiLCJkb25lIiwicmVsb2FkIiwidmVyc2lvbiIsInRyaWdnZXIiLCJhcnJheSIsImxlbmd0aCIsInJlcGxhY2VXaXRoIiwid3JpdGVUeXBlIiwid3JpdGVTdWJ0eXBlIiwid3JpdGVFZGl0RGVsZXRlIiwic3BsaWNlIiwicG9zaXRpb24iLCJzdHIiLCJOdW1iZXIiLCJyZXBsYWNlIiwic2l6ZSIsIndyaXRlU3VidHlwZUNhcmQiLCJub3QiLCIkZm9ybSIsIkxpc3RlUGx1ZyIsInZhbGlkIiwiaXNBZHZhbmNlZFVwbG9hZCIsImRpdiIsIiRpbnB1dCIsIiRsYWJlbCIsInNob3dGaWxlcyIsImZpbGVzIiwicHJnYmFyIiwibGRCYXIiLCJkcm9wcGVkRmlsZXMiLCJodG1sIiwic3RvcFByb3BhZ2F0aW9uIiwib3JpZ2luYWxFdmVudCIsImRhdGFUcmFuc2ZlciIsIlBsdWciLCJoYXNDbGFzcyIsImFqYXhEYXRhIiwiRm9ybURhdGEiLCJnZXQiLCJmaWxlIiwiWE1MSHR0cFJlcXVlc3QiLCJ1cGxvYWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwibGVuZ3RoQ29tcHV0YWJsZSIsInBlcmNlbnRDb21wbGV0ZSIsImxvYWRlZCIsInRvdGFsIiwic2V0IiwiY2FjaGUiLCJjb250ZW50VHlwZSIsInByb2Nlc3NEYXRhIiwiY29tcGxldGUiLCJuYW1lX3BsdWciLCJrZXlfcGx1ZyIsImlmcmFtZU5hbWUiLCJEYXRlIiwiZ2V0VGltZSIsIiRpZnJhbWUiLCJvbmUiLCJKU09OIiwicGFyc2UiLCJjb250ZW50cyIsInJlbW92ZUF0dHIiLCIkZXJyb3JNc2ciLCJmaWxlc3QiLCJxdWVyeVNlbGVjdG9yIiwidGVtcERlc3RpbmF0aW9uIiwibmFtZUZpbGUiLCJ1cGxvYWRTdGF0dXMiLCJwYXRoIiwibm9tYnJlX3VybCIsImN1cnJlbnRfY2hvaWNlIiwiZXJ0bXNfbGVmdCIsImVydG1zX21pZGRsZSIsImVydG1zX3JpZ2h0IiwiZXF1aXBtZW50cyIsIkNvdW50TnVtYmVyRXF1aXB0IiwiRmluZEluZGV4RXZjIiwibmFtZV9iYXNlbGluZV8xIiwibmV3X2VxdWlwbWVudF9udW0iLCJ0b3RhbEVxdWlwdCIsIm5ld19lcXVpcG1lbnRfbnVtX3NlcmllIiwibnVtU2VyaWUiLCJpZF90cmFpbiIsImlkX2Jhc2VsaW5lIiwibmV3X2VxdWlwdCIsImlkYmFzZWxpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxDQUFDLEdBQUdDLG1CQUFPLENBQUMsb0RBQUQsQ0FBakIsQyxDQUVBO0FBQ0E7OztBQUNBRCxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCRSxLQUFsQixDQUF3QixZQUFZO0FBQ2hDRixHQUFDLENBQUMsSUFBRCxDQUFELENBQVFHLElBQVIsQ0FBYSxjQUFiLEVBQTZCQyxJQUE3QixHQUFvQ0Ms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MkYsR0FBbEc7QUFDSDs7QUFBQSxDLENBQ0Q7O0FBQ0EsU0FBU1AsWUFBVCxDQUFzQk8sSUFBdEIsRUFBNEJwRCxJQUE1QixFQUFrQztBQUM5QixTQUFPLE9BQU9vRCxJQUFQLEdBQWMsdURBQWQsR0FBd0VwRCxJQUF4RSxHQUErRSxLQUEvRSxHQUF1Rm9ELElBQXZGLEdBQThGLEdBQXJHO0FBQ0g7O0FBQUEsQyxDQUNEOztBQUNBLFNBQVNDLGdCQUFULENBQTBCRCxJQUExQixFQUFnQ3BELElBQWhDLEVBQXNDO0FBQ2xDLFNBQU8sT0FBT29ELElBQVAsR0FBYyx5REFBZCxHQUEwRXBELElBQTFFLEdBQWlGLEtBQWpGLEdBQXlGb0QsSUFBekYsR0FBZ0csR0FBdkc7QUFDSDs7QUFBQSxDLENBQ0Q7QUFDQTtBQUNBO0FBQ0EsSzs7Ozs7Ozs7Ozs7O0FDaGtCQSx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3Njc3MvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJy4vZXJ0bXMnO1xyXG5pbXBvcnQgJy4vZXF1aXBlbWVudCc7XHJcbmltcG9ydCAnLi9iYXNlbGluZSc7XHJcbmltcG9ydCAnLi9wcm9ncmVzc0Jhcic7XHJcbmltcG9ydCAnLi90ZXN0LXVwbG9hZCc7XHJcbmltcG9ydCAnLi90cmFpbic7XHJcbmltcG9ydCAnLi9wbHVnJztcclxuXHJcbi8vIGxvYWRzIHRoZSBqcXVlcnkgcGFja2FnZSBmcm9tIG5vZGVfbW9kdWxlc1xyXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG4vLyBpbXBvcnQgdGhlIGZ1bmN0aW9uIGZyb20gZ3JlZXQuanMgKHRoZSAuanMgZXh0ZW5zaW9uIGlzIG9wdGlvbmFsKVxyXG4vLyAuLyAob3IgLi4vKSBtZWFucyB0byBsb29rIGZvciBhIGxvY2FsIGZpbGVcclxuJCgnLnBvc3QtbW9kdWxlJykuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5maW5kKCcuZGVzY3JpcHRpb24nKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgaGVpZ2h0OiBcInRvZ2dsZVwiLFxyXG4gICAgICAgIG9wYWNpdHk6IFwidG9nZ2xlXCJcclxuICAgIH0sIDMwMCk7XHJcbn0pO1xyXG4kKCcucG9zdC1tb2R1bGUtZmxlZXQnKS5ob3ZlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLmZpbmQoJy5kZXNjcmlwdGlvbi1mbGVldCcpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICBoZWlnaHQ6IFwidG9nZ2xlXCIsXHJcbiAgICAgICAgb3BhY2l0eTogXCJ0b2dnbGVcIlxyXG4gICAgfSwgMzAwKTtcclxufSk7XHJcblxyXG4kKCcuZmEtY2hldnJvbi1kb3duJykuaGlkZSgpO1xyXG5sZXQgbGFiZWxDbGlrZWQgPSBmYWxzZTtcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgncHJlJykucmVtb3ZlKCk7XHJcbiAgICAkKCcuYnV0dG9uLWxlZnQnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLnNpZGViYXInKS50b2dnbGVDbGFzcygnZmxpcGgnKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLnNpZGViYXInKS5ob3ZlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5yZW1vdmVDbGFzcygnY29sLWxnLTEyJyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5yZW1vdmVDbGFzcygncGwtNScpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykucmVtb3ZlQ2xhc3MoJ2NvbC1tZC0xMicpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKCd0cmFuc2l0aW9uJywgJ2FsbCAwLjZzIGVhc2UtaW4tb3V0Jyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5hZGRDbGFzcygnbWwtc20tYXV0bycpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykuYWRkQ2xhc3MoJ2NvbC1sZy0xMCcpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykuYWRkQ2xhc3MoJ2NvbC1tZC05Jyk7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCdtYWluJykucmVtb3ZlQ2xhc3MoJ2NvbC1sZy0xMCcpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykucmVtb3ZlQ2xhc3MoJ2NvbC1tZC05Jyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoJ3RyYW5zaXRpb24nLCAnYWxsIDAuNnMgZWFzZS1pbi1vdXQnKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmFkZENsYXNzKCdwbC01Jyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5hZGRDbGFzcygnY29sLWxnLTEyJyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5hZGRDbGFzcygnY29sLW1kLTEyJyk7XHJcbiAgICAgICAgfSlcclxuICAgIC8vICQoJ21haW4nKS5yZW1vdmVDbGFzcygnbWwtc20tYXV0bycpO1xyXG4gICAgJCgnLm5hdi1sYWJlbCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuZmEtY2hldnJvbi1sZWZ0JykuY3NzKCd0cmFuc2Zvcm0nLCAncm90YXRleCg0NWRlZyknKVxyXG4gICAgfSlcclxuXHJcblxyXG59KTsiLCIvL01hc3F1YWdlIGRlIGNlcnRhaW5zIG1vZGFsZSBkZSBsYSBwYWdlXHJcbiQoJyNmb3JtdWxhaXJlLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuJCgnI2NvbnRlbnQtZm9ybS1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuJCgnI3ByZXZpb3VzLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuXHJcbi8vRGVsY2FyYXRpb24gdmFyaWFibGVcclxuY29uc3QgJHR5cGUgPSAkKCcjZXF1aXBlbWVudF9UeXBlJyk7XHJcbiR0eXBlLmF0dHIoJ3JlcXVpcmVkJywgJ3JlcXVpcmVkJyk7XHJcblxyXG5sZXQgRXF1aXBtZW50cyA9IFtdLFxyXG4gICAgaSA9IDAsXHJcbiAgICBpbmRleEVWQyA9IDAsXHJcbiAgICBwb3NJbmRleCA9IDAsXHJcbiAgICBQcmVzZW5jZUVWQyA9IGZhbHNlLFxyXG4gICAgaWRFcXVpcG1lbnQgPSAwLFxyXG4gICAgdGFiSW5kZXhFcXVpcHQgPSBbXVxyXG5zZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLFxyXG4gICAgcHJldmlvdXMgPSBcIlwiLFxyXG4gICAgdGFiRXF1aXBlbWVudFR5cGUgPSBbXCJFVkNcIiwgXCJDQVJURVwiLCBcIlNFTlNPUlwiLCBcIkRNSVwiXSxcclxuICAgIHRhYkVxdWlwZW1lbnRTdWJ0eXBlID0gW1wiQ09SRVwiLCBcIlRVSVwiLCBcIlNETVVcIiwgXCJTRU5TRVwiLCBcIlRXSU5TXCJdO1xyXG5cclxuLy9WaWRhZ2UgZGVzIGlucHV0cyBhdSByZWZyZXNoIGRlIGxhIHBhZ2VcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGRhdGEgPSB7fVxyXG4gICAgZGF0YVskdHlwZS5hdHRyKCduYW1lJyldID0gJHR5cGUudmFsKClcclxuXHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09ICcvYWxzdG9tL2NyZWF0ZV9iYXNlbGluZScpIHtcclxuICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrU3VidHlwZVwiLCBkYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAvL1ZpZGFnZSBjaGFtcCBzb3VzdHlwZVxyXG4gICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgfVxyXG4gICAgLy8gJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuZW1wdHkoKTtcclxuICAgIC8vICQoJzppbnB1dCcsICcjZm9ybV9lcXVpcGVtZW50Jykubm90KCc6YnV0dG9uLCA6c3VibWl0LCA6cmVzZXQsIDpoaWRkZW4nKS52YWwoJycpO1xyXG59KTtcclxuXHJcbi8vQUpBWCBDaGFuZ2VtZW50IGRlIHNvdXMtdHlwZSBlbiBmb25jdGlvbiBkdSB0eXBlXHJcbiR0eXBlLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgbGV0IGRhdGEgPSB7fVxyXG4gICAgZGF0YVskdHlwZS5hdHRyKCduYW1lJyldID0gJHR5cGUudmFsKClcclxuXHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja1N1YnR5cGVcIiwgZGF0YSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAvL1ZpZGFnZSBjaGFtcCBzb3VzdHlwZVxyXG4gICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuZW1wdHkoKTtcclxuICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSlcclxuXHJcbi8vQUpBWCBzb3VtaXNzaW9uIGZvcm11bGFpcmUgZCdham91dCBlcXVpcGVtZW50XHJcbiQoJyNmb3JtX2VxdWlwZW1lbnQnKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAvL0VtcMOqY2hlIGxlIGNoYXJnZW1lbnQgZGUgbGEgcGFnZSBzb2lzIGZhaXQgYXV0b21hdGlxdWVtZW50XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICBsZXQgZGF0YSA9IHt9LFxyXG4gICAgICAgIGFjdGlvbjtcclxuICAgIC8vUmVtcGxpIGRhdGEgYSBwYXJ0aXIgZGVzIHZhbGV1ciBkZXMgaW5wdXRzXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKVxyXG5cclxuICAgICAgICBpZiAobmFtZSAhPSAoXCJlcXVpcGVtZW50W190b2tlbl1cIikgJiYgbmFtZSAhPSAoXCJzb3VtaXNzaW9uX2VxdWlwZW1lbnRcIikpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG4gICAgICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lID09ICdzb3VtaXNzaW9uX2VkaXRfZXF1aXBlbWVudCcpIHtcclxuICAgICAgICAgICAgYWN0aW9uID0gXCJlZGl0XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWN0aW9uID0gXCJhZGRcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuICAgIC8vIFNpIGxlIGZvcm11bGFpcmUgZXN0IHBvdXIgYWpvdWVyIHVuIG5vdXZlbCBlcXVpcGVtZW50XHJcbiAgICBpZiAoYWN0aW9uID09IFwiYWRkXCIpIHtcclxuICAgICAgICAvL1JlbXBsaXMgbGUgdGFibGVhdSBkZXMgw6lxdWlwZW1lbnRzXHJcbiAgICAgICAgRXF1aXBtZW50cy5wdXNoKGRhdGEpO1xyXG4gICAgICAgIC8vRWZmZWN0dXJlIGxhIHJlcXXDqnRlIGFqYXggcG91ciBsJ2Fqb3V0IGQnw6lxdWlwZW1lbnRcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICR0aGlzLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgICAgICB0eXBlOiAkdGhpcy5hdHRyKCdtZXRob2QnKSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdGFiRXF1aXB0czogRXF1aXBtZW50c1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBPdSBzaSBsZSBmb3JtdWxhaXJlIGVzdCBwb3VyIMOpZGl0ZXIgdW4gZXF1aXBlbWVudCBkw6lqYSBleGlzdGFudCBzdXIgbGEgcGFnZSBkZSBsJ2VydG1zIGxpw6kgYSBjZWx1aS1jaVxyXG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT0gXCJlZGl0XCIpIHtcclxuICAgICAgICBsZXQgaWRFcnRtcyA9IGV4dHJhaXROb21icmUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnL2Fsc3RvbS9lZGl0LWVxdWlwbWVudC8nICsgaWRFcXVpcG1lbnQsXHJcbiAgICAgICAgICAgIHR5cGU6ICR0aGlzLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBlcXVpcGVtZW50OiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgaWRFcnRtczogaWRFcnRtc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuICAgICQoJy5tb2RhbC1mb290ZXInKS5zaG93KCk7XHJcbiAgICAkKCcjY3JlYXRlLWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNzaG93LWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNwcmV2aW91cy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAvL0JvdWNsZSBsZXMgw6lxdWlwZW1lbnRzIGV0IGxlcyBpbnN0YWxsZSBhdSBmcm9udFxyXG4gICAgRXF1aXBtZW50cy5mb3JFYWNoKHJldHVybkluZGV4RWxlbWVudCk7XHJcbn0pO1xyXG5cclxuXHJcbi8vVmFsaWRhdGlvbiBkZSBiYXNlbGluZSBcclxuJCgnI2NyZWF0ZS1iYXNlbGluZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKFwiI2Jhc2VsaW5lX25hbWVcIikudmFsKCkgPT0gXCJcIikge1xyXG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgYmFzZWxpbmUgbmFtZSBcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNzaG93LWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgIH1cclxuXHJcbn0pXHJcblxyXG5sZXQgYmFzZWxpbmVOYW1lO1xyXG4kKCcjZm9ybV9iYXNlbGluZScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGF0LmF0dHIoJ25hbWUnKSxcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGF0LnZhbCgpO1xyXG5cclxuICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcblxyXG4gICAgICAgIGlmIChuYW1lID09ICdiYXNlbGluZVtuYW1lXScpIHtcclxuXHJcbiAgICAgICAgICAgIGJhc2VsaW5lTmFtZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICR0aGlzLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgIHR5cGU6ICR0aGlzLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgYmFzZWxpbmU6IGRhdGFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJy50aXRsZS1iYXNlbGluZScpLnRleHQocmVzcG9uc2UuYmFzZWxpbmUpXHJcbiAgICAgICAgICAgICQoJyNjb250ZW50LWZvcm0tZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAkKCcjcHJldmlvdXMtZXF1aXBtZW50JykuaGlkZSgpO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KVxyXG4vL1ZhbGlkYXRpb24gZGUgdG91cyBsZXMgw6lxdWlwZW1lbnRzIGV0IGRlIGxhIGJhc2VsaW5lXHJcbiQoJyN2YWxpZC1hbGwtZXF1aXBtZW50cycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKEVxdWlwbWVudHMgIT0gXCJcIikge1xyXG4gICAgICAgICQoJy5tYWluLWJhc2VsaW5lJykuY3NzKCdvcGFjaXR5JywgXCIwLjRcIik7XHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvYWxzdG9tL2ZsdXNoLWFsbC1lcXVpcHQnLFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGJhc2VsaW5lTmFtZTogYmFzZWxpbmVOYW1lLFxyXG4gICAgICAgICAgICAgICAgdGFiRXF1aXB0czogRXF1aXBtZW50c1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGlkQmFzZWxpbmUgPSByZXNwb25zZS5iYXNlbGluZTtcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2Fsc3RvbS9iYXNlbGluZS9cIiArIGlkQmFzZWxpbmU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydCgnUGxlYXNlIGVudGVyIEVxdWlwbWVudHMgYmVmb3JlIHZhbGlkJyk7XHJcbiAgICB9XHJcblxyXG59KVxyXG5cclxuLy9Hw6lyZSBsZSBjbGlxdWUgZGUgbGEgc3VwcHJlc3Npb25cclxuJCgnI3Nob3ctZXF1aXBtZW50Jykub24oJ2NsaWNrJywgJy5lZGl0LWRlbGV0ZS1lcXVpcGVtZW50ID4gYScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpWzBdW1wiaWRcIl1bMF0gPT0gXCJkXCIpIHtcclxuICAgICAgICBkZWxldGVFcXVpcG1lbnQoZXh0cmFpdE5vbWJyZSgkKHRoaXMpWzBdW1wiaWRcIl0pKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuLy9jYWNoZSBsZSBtb2RhbCBkJ2VkaXQgZCdlcXVpcGVtZW50XHJcbiQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0JykuaGlkZSgpO1xyXG4vLyBHZXJlIGxhIGZlcm1ldHVyZSBkdSBtb2RhbCBkJ2VkaXQgZCdlcXVpcGVtZW50XHJcbiQoJyNjbG9zZS1tb2RhbC1mb3JtLWVxdWlwbWVudC1lZGl0JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5oaWRlKCk7XHJcbiAgICAkKCcubWFpbi1lcnRtcycpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxufSlcclxuLy8gXHJcbi8vIFJlcXVldGUgQUpBWCBwb3VyIHJlbXBsaXIgbGUgZm9ybXVsYWlyZSBkJ8OpcXVpcGVtZW50IGF2ZWMgbCdlcXVpcGVtZW50IHNlbGVjdGlvbm5lclxyXG4kKCcuY29udGVudC1kZXNjcmlwdGlvbi1kdHInKS5vbignY2xpY2snLCAnLmVkaXQtZGVsZXRlLWVxdWlwZW1lbnQgPiBhJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJy5tYWluLWVydG1zJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG5cclxuICAgIGlkRXF1aXBtZW50ID0gZXh0cmFpdE5vbWJyZSgkKHRoaXMpWzBdW1wiY2xhc3NMaXN0XCJdWzBdKVxyXG4gICAgdmFyICR0aGlzID0gJChcIiNmb3JtX2VxdWlwZW1lbnRfZWRpdFwiKTtcclxuICAgIGxldCBkYXRhID0ge307XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfVHlwZScpLnZhbChyZXNwb25zZVtcInR5cGVcIl1bXCJpZFwiXSk7XHJcbiAgICAgICAgICAgIGRhdGFbJCgnI2VxdWlwZW1lbnRfVHlwZScpLmF0dHIoJ25hbWUnKV0gPSAkKCcjZXF1aXBlbWVudF9UeXBlJykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrU3VidHlwZVwiLCBkYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgLy9WaWRhZ2UgY2hhbXAgc291c3R5cGVcclxuICAgICAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcubWFpbi1lcnRtcycpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL1JlbXBsaSBpbnB1dCBhdmVjIHZhbGV1ciByZWN1IGRlIGwnZXF1aXBlbWVudFxyXG4gICAgICAgICAgICAgICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9UeXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X3NvdXNfdHlwZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VbXCJTb3VzVHlwZVwiXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiU291c1R5cGVcIl1bXCJpZFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9EVFJfYm9hcmQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiZFRSQm9hcmRcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9JbmRpY2VfRFRSJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcImluZGljZURUUlwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X051bV9zZXJpZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJudW1TZXJpZVwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuLy9Gb3JtdWxhaXJlIGQnZWRpdCBkZSBsJ8OpcXVpcGVtZW50XHJcbiQoJyNmb3JtX2VxdWlwZW1lbnRfZWRpdCcpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnLm1haW4tZXJ0bXMnKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyNmb3JtX2VxdWlwZW1lbnRfZWRpdCcpLmNzcyhcIm9wYWNpdHlcIiwgXCIwLjRcIik7XHJcbiAgICAkKFwiI3dhaXQtc3Bpbm5lclwiKS5jc3MoXCJ6LWluZGV4XCIsIFwiOTk5OTlcIik7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgIGxldCBkYXRhID0ge30sXHJcbiAgICAgICAgYWN0aW9uO1xyXG4gICAgLy9SZW1wbGkgZGF0YSBhIHBhcnRpciBkZXMgdmFsZXVyIGRlcyBpbnB1dHNcclxuICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbmFtZSA9IHRoYXQuYXR0cignbmFtZScpXHJcblxyXG4gICAgICAgIGlmIChuYW1lICE9IChcImVxdWlwZW1lbnRbX3Rva2VuXVwiKSAmJiBuYW1lICE9IChcInNvdW1pc3Npb25fZXF1aXBlbWVudFwiKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoYXQudmFsKCk7XHJcbiAgICAgICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAnZXF1aXBlbWVudCc6IGRhdGEsXHJcbiAgICAgICAgICAgIFwic291bWlzc2lvbl9lZGl0X2VxdWlwZW1lbnRcIjogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5zaG93KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSlcclxuXHJcbi8vUmVxdWV0ZSBBSkFYIGRlIGNyw6lhdGlvbiBkZSB2ZXJzaW9uIGxvZ2ljaWVsXHJcbiQoJyNmb3JtX3ZlcnNpb24nKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJy5tYWluLWJhc2VsaW5lJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG5cclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG5cclxuICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbmFtZSA9IHRoYXQuYXR0cignbmFtZScpLFxyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoYXQudmFsKCk7XHJcblxyXG4gICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgIH0pXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJHRoaXMuYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgdHlwZTogJHRoaXMuYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBpZEJhc2VsaW5lOiBleHRyYWl0Tm9tYnJlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSksXHJcbiAgICAgICAgICAgIHZlcnNpb246IGRhdGFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICQoJyN0aXRsZS12ZXJzaW9uJykuYXBwZW5kKFwiPHA+XCIgKyByZXNwb25zZS52ZXJzaW9uICsgXCI8L3A+XCIpXHJcbiAgICAgICAgICAgICQoJy5tYWluLWJhc2VsaW5lJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjY2xvc2UtbW9kYWwtZm9ybS12ZXJzaW9uJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZXR1cm5JbmRleEVsZW1lbnQoZWxlbWVudCwgaW5kZXgsIGFycmF5KSB7XHJcblxyXG4gICAgLy9UZXN0IGwnZXhpc3RlbmNlIGRlIGxhIGRpdiBkYW5zIGxlIGNhcyBvw7kgZWxsZSBleGlzdGUgbGEgcmVtcGxhY2Ugc2kgcGFzIGxhIG1ldCBlbiBwbGFjZVxyXG4gICAgaWYgKCQoJyNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCkubGVuZ3RoKSB7XHJcbiAgICAgICAgJCgnI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4KS5yZXBsYWNlV2l0aCgnPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCArICdcIj48L2Rpdj4nKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiI3Nob3ctZXF1aXBtZW50XCIpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3Rlc3Qgc2kgbCfDqXF1aXBlbWVudCBlc3QgbGEgY2FydGUgb3Ugbm9uXHJcbiAgICBpZiAoZWxlbWVudFtcImVxdWlwZW1lbnRbVHlwZV1cIl0gIT0gXCIyXCIpIHtcclxuICAgICAgICAvL1N3aXRoIHJlcGxhY2VtZW50IGRlIGwnaWQgZHUgdHlwZSBhdmVjIHNvbiBub21cclxuICAgICAgICBzd2l0Y2ggKGVsZW1lbnRbXCJlcXVpcGVtZW50W1R5cGVdXCJdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAgICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVR5cGUoNCwgMCkpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hZGRDbGFzcyhcImRlc2NyaXB0aW9uLVN1YnR5cGVDYXJkXCIpXHJcbiAgICAgICAgICAgICAgICBpbmRleEVWQyA9ICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjNcIjpcclxuICAgICAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlVHlwZSg0LCAyKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjRcIjpcclxuICAgICAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlVHlwZSg0LCAzKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChlbGVtZW50W1wiZXF1aXBlbWVudFtzb3VzX3R5cGVdXCJdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCI0XCI6XHJcbiAgICAgICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVN1YnR5cGUoNSwgMykpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI1XCI6XHJcbiAgICAgICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVN1YnR5cGUoNSwgNCkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiY29udGVudC1kZXNjcmlwdGlvbi1kdHJcIiBpZD1cImNvbnRlbnQtZGVzY3JpcHRpb24tJyArXHJcbiAgICAgICAgICAgIGluZGV4ICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImVxdWlwZW1lbnRbRFRSX2JvYXJkXVwiXSArICc8L3A+JylcclxuICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJlcXVpcGVtZW50W0luZGljZV9EVFJdXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImVxdWlwZW1lbnRbTnVtX3NlcmllXVwiXSArICc8L3A+JylcclxuICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZUVkaXREZWxldGUoaW5kZXgpKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBFcXVpcG1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoRXF1aXBtZW50c1tpXVtcImVxdWlwZW1lbnRbVHlwZV1cIl0gPT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgICAgIFByZXNlbmNlRVZDID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKFByZXNlbmNlRVZDKSB7XHJcbiAgICAgICAgICAgIC8vRWNyaXMgbGUgbm9tIGR1IHR5cGUgXCJjYXJ0ZVwiIHNvdXMgbGUgdHlwZSAgRVZDXHJcbiAgICAgICAgICAgIC8vICQoaW5kZXhFVkMpLmFwcGVuZCh3cml0ZVR5cGUoNSwgMSkpO1xyXG4gICAgICAgICAgICAvL1BhcmNvdXMgbGUgdHlwZSBkZSBzb3VzdHlwZSBcclxuICAgICAgICAgICAgc3dpdGNoIChlbGVtZW50W1wiZXF1aXBlbWVudFtzb3VzX3R5cGVdXCJdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiMVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICQoaW5kZXhFVkMpLmFwcGVuZCh3cml0ZVN1YnR5cGUoNSwgMCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjJcIjpcclxuICAgICAgICAgICAgICAgICAgICAkKGluZGV4RVZDKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDUsIDEpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgJChpbmRleEVWQykuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCAyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoaW5kZXhFVkMpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImNvbnRlbnQtZGVzY3JpcHRpb24tZHRyIGNvbnRlbnQtZGVzY3JpcHRpb24tZHRyQ2FyZFwiIGlkPVwiY29udGVudC1kZXNjcmlwdGlvbi0nICtcclxuICAgICAgICAgICAgICAgIGluZGV4ICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJlcXVpcGVtZW50W0RUUl9ib2FyZF1cIl0gKyAnPC9wPicpXHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImVxdWlwZW1lbnRbSW5kaWNlX0RUUl1cIl0gKyAnPC9wPicpXHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImVxdWlwZW1lbnRbTnVtX3NlcmllXVwiXSArICc8L3A+JylcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVFZGl0RGVsZXRlKGluZGV4KSk7XHJcbiAgICAgICAgICAgICQoJyNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBFVkMgZXF1aXBlbWVudCBiZWZvcmUnKTtcclxuICAgICAgICAgICAgJCgnI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4KS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgRXF1aXBtZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAkKCcubW9kYWwtZm9vdGVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjY3JlYXRlLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI3Nob3ctZXF1aXBtZW50JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQnKS5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vL1N1cHJlc3Npb24gZGUgbCfDqXF1aXBlbWVudCBkYW5zIGxlIHRhYmxlYXUgZXQgbGUgZnJvbnRcclxuZnVuY3Rpb24gZGVsZXRlRXF1aXBtZW50KHBvc2l0aW9uKSB7XHJcbiAgICBFcXVpcG1lbnRzLnNwbGljZShwb3NpdGlvbiwgMSk7XHJcbiAgICAkKCcuZGVzY3JpcHRpb24nKS5yZW1vdmUoKTtcclxuICAgIEVxdWlwbWVudHMuZm9yRWFjaChyZXR1cm5JbmRleEVsZW1lbnQpO1xyXG59XHJcbi8vRXh0cmFpdCBsZSBub21icmUgZCd1bmUgc3RyZWluZ1xyXG5mdW5jdGlvbiBleHRyYWl0Tm9tYnJlKHN0cikge1xyXG4gICAgcmV0dXJuIE51bWJlcihzdHIucmVwbGFjZSgvW15cXGRdL2csIFwiXCIpKVxyXG59XHJcbi8vRWNyaXMgbGUgdGl0cmUgZHUgdHlwZSBkJ8OpcXVpcGVtZW50XHJcbmZ1bmN0aW9uIHdyaXRlVHlwZShzaXplLCBpbmRleCkge1xyXG4gICAgcmV0dXJuICc8aCcgKyBzaXplICsgJyBjbGFzcz1cImRlc2NyaXB0aW9uLVR5cGUgXCIgaWQ9XCJkZXNjcmlwdGlvbi10eXBlIFwiPicgKyB0YWJFcXVpcGVtZW50VHlwZVtpbmRleF0gKyAnPC9oJyArIHNpemUgKyAnPic7XHJcbn07XHJcbi8vRWNyaXMgbGUgdGl0cmUgZHUgc291c3R5cGUgZCfDqXF1aXBlbWVudFxyXG5mdW5jdGlvbiB3cml0ZVN1YnR5cGUoc2l6ZSwgaW5kZXgpIHtcclxuICAgIHJldHVybiAnPGgnICsgc2l6ZSArICcgY2xhc3M9XCJkZXNjcmlwdGlvbi1UeXBlIFwiIGlkPVwiZGVzY3JpcHRpb24tc3ViVHlwZSBcIj4nICsgdGFiRXF1aXBlbWVudFN1YnR5cGVbaW5kZXhdICsgJzwvaCcgKyBzaXplICsgJz4nO1xyXG59O1xyXG4vL0VjcmlzIGxlIHRpdHJlIGR1IHNvdXN0eXBlIGQnw6lxdWlwZW1lbnRcclxuZnVuY3Rpb24gd3JpdGVTdWJ0eXBlQ2FyZChzaXplLCBpbmRleCkge1xyXG4gICAgcmV0dXJuICc8aCcgKyBzaXplICsgJyBjbGFzcz1cImRlc2NyaXB0aW9uLXN1YnR5cGVcIiBpZD1cImRlc2NyaXB0aW9uLXN1YlR5cGUgXCI+JyArIHRhYkVxdWlwZW1lbnRTdWJ0eXBlW2luZGV4XSArICc8L2gnICsgc2l6ZSArICc+JztcclxufTtcclxuLy9FY3JpdCBsZXMgMiBpY29ucyBkJ2VkaXQgZXQgZGVsZXRlXHJcbmZ1bmN0aW9uIHdyaXRlRWRpdERlbGV0ZShpbmRleCkge1xyXG4gICAgcmV0dXJuICcgPHAgY2xhc3M9XCJlZGl0LWRlbGV0ZS1lcXVpcGVtZW50XCI+IDxhIGlkPVwiZWRpdC0nICsgaW5kZXggKyAnXCI+PGkgY2xhc3M9XCJmYXMgZmEtZWRpdFwiPjwvaT4gPC9hPiA8YSBpZD1cImRlbGV0ZS0nICsgaW5kZXggKyAnXCI+PGkgY2xhc3MgPSBcImZhcyBmYS10cmFzaC1hbHQgcG91YmVsbGVcIj4gPC9pPjwvYT48L3A+JztcclxufTtcclxuXHJcbi8qYXUgY2xpY2sgZGUgbCdhZGQgRXF1aXBtZW50IGFmZmljaGVyIGxlIGZvcm11bGFpcmUgZCdham91dCBkJ8OpcXVpcGVtZW50Ki9cclxuJCgnI2NyZWF0ZS1lcXVpcG1lbnQnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjY3JlYXRlLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuICAgICQoJyNzaG93LWVxdWlwbWVudCcpLmhpZGUoKTtcclxuICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLnNob3coKTtcclxuICAgICQoJyNwcmV2aW91cy1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcubW9kYWwtZm9vdGVyJykuaGlkZSgpO1xyXG4gICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuZW1wdHkoKTtcclxuICAgICQoJzppbnB1dCcsICcjZm9ybV9lcXVpcGVtZW50Jykubm90KCc6YnV0dG9uLCA6c3VibWl0LCA6cmVzZXQsIDpoaWRkZW4nKS52YWwoJycpO1xyXG4gICAgcHJldmlvdXMgPSBcImVxdWlwbWVudFwiO1xyXG59KTtcclxuLy8gR2VyZSBsZSBjbGljayBkdSBwcmV2aW91c1xyXG4kKFwiI3ByZXZpb3VzLWVxdWlwbWVudFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50JykuaGlkZSgpO1xyXG4gICAgJCgnI3Nob3ctZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI2NyZWF0ZS1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcjcHJldmlvdXMtZXF1aXBtZW50JykuaGlkZSgpO1xyXG4gICAgJCgnLm1vZGFsLWZvb3RlcicpLnNob3coKTtcclxufSk7XHJcbiQoJyNjcmVhdGUtYmFzZWxpbmUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcjc2hvdy1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcjY3JlYXRlLWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJy5tb2RhbC1mb290ZXInKS5zaG93KCk7XHJcbn0pXHJcbi8vIEZlcm1lIGxlIG1vZGFsIGRlIGZvcm11bGFpcmUgZCdham91dCBkJ8OpcXVpcGVtZW50XHJcbiQoJyNjbG9zZS1lcXVpcGVtZW50JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50JykuaGlkZSgpO1xyXG4gICAgJCgnI3Nob3ctZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI2NyZWF0ZS1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcjcHJldmlvdXMtZXF1aXBtZW50JykuaGlkZSgpO1xyXG59KSIsIi8vVmFsaWRhdGlvbiBkZSBsJ2VydG1zIFxyXG4kKCcjdmFsaWQtZXJ0bXMtbmFtZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIjY29udGVudC1mb3JtLWVydG1zXCIpLmhpZGUoKTtcclxuICAgICQoJyNjb250ZW50LWZvcm0tZXF1aXBtZW50Jykuc2hvdygpO1xyXG59KSIsIi8vICQoJyNkZWxldGUtZXJ0bXMnKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4vLyAgICAgJC5hamF4KHtcclxuLy8gICAgICAgICB1cmw6ICR0aGlzLmF0dHIoJ2FjdGlvbicpLFxyXG4vLyAgICAgICAgIHR5cGU6ICR0aGlzLmF0dHIoJ21ldGhvZCcpLFxyXG4vLyAgICAgICAgIGRhdGE6IHt9LFxyXG4vLyAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4vLyAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuLy8gICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbi8vICAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KTtcclxuXHJcbi8vIH0pIiwiJCgnI2Zvcm1fcGx1ZycpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIGxldCBiYXNlbGluZSA9IGV4dHJhaXROb21icmUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygkZm9ybSk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vYWRkLXBsdWcnLFxyXG4gICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgIGRhdGFUeXBlOiBcInRleHRcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGlkOiBiYXNlbGluZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pXHJcblxyXG4vL0V4dHJhaXQgbGUgbm9tYnJlIGQndW5lIHN0cmVpbmdcclxuZnVuY3Rpb24gZXh0cmFpdE5vbWJyZShzdHIpIHtcclxuICAgIHJldHVybiBOdW1iZXIoc3RyLnJlcGxhY2UoL1teXFxkXS9nLCBcIlwiKSk7XHJcbn0iLCJyZXF1aXJlISBcIi4vcHJlc2V0c1wiOiB7cHJlc2V0c31cblxuc2ltcGxlLXN0ciA9IChhcnIpIC0+IGFyci5qb2luICcnXG53cmFwID0gKGNvbnRlbnQpIC0+IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxcIiArIGJ0b2EoY29udGVudClcblxuZG8gLT5cbiAgICBtYWtlID1cbiAgICAgICAgaGVhZDogKHZpZXdCb3gpIC0+IFwiXCJcIlxuICAgICAgICAgICAgICAgIDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cInV0Zi04XCI/PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIiN2aWV3Qm94XCI+XG4gICAgICAgICAgICAgICAgXCJcIlwiXG5cbiAgICAgICAgZ3JhZGllbnQ6IChkaXIgPSA0NSwgZHVyID0gMSwgLi4uY29sb3JzKSAtPlxuICAgICAgICAgICAgcmV0ID0gW0BoZWFkIFwiMCAwIDEwMCAxMDBcIl1cbiAgICAgICAgICAgIGxlbiA9IGNvbG9ycy5sZW5ndGggKiA0ICsgMVxuICAgICAgICAgICAgZGlyID0gZGlyICogTWF0aC5QSSAvIDE4MFxuICAgICAgICAgICAgZ3ggPSBNYXRoLmNvcyhkaXIpICoqIDJcbiAgICAgICAgICAgIGd5ID0gTWF0aC5zcXJ0KGd4IC0gZ3ggKiogMilcbiAgICAgICAgICAgIGlmIGRpciA+IE1hdGguUEkgKiAwLjI1ID0+XG4gICAgICAgICAgICAgICAgZ3kgPSBNYXRoLnNpbihkaXIpICoqIDJcbiAgICAgICAgICAgICAgICBneCA9IE1hdGguc3FydChneSAtIGd5ICoqIDIpXG4gICAgICAgICAgICB4ID0gZ3ggKiAxMDBcbiAgICAgICAgICAgIHkgPSBneSAqIDEwMFxuICAgICAgICAgICAgcmV0LnB1c2ggXCJcIlwiPGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPVwiZ3JhZGllbnRcIiB4MT1cIjBcIiB4Mj1cIiNneFwiIHkxPVwiMFwiIHkyPVwiI2d5XCI+XCJcIlwiXG4gICAgICAgICAgICBmb3IgaSBmcm9tIDAgdGlsIGxlbiA9PlxuICAgICAgICAgICAgICAgIGlkeCA9IGkgKiAxMDAgLyAobGVuIC0gMSlcbiAgICAgICAgICAgICAgICByZXQucHVzaCBcIlwiXCI8c3RvcCBvZmZzZXQ9XCIje2lkeH0lXCIgc3RvcC1jb2xvcj1cIiN7Y29sb3JzW2kgJSBjb2xvcnMubGVuZ3RoXX1cIi8+XCJcIlwiXG4gICAgICAgICAgICByZXQucHVzaCBcIlwiXCJcbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz5cbiAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCI0MDBcIiBmaWxsPVwidXJsKFxcI2dyYWRpZW50KVwiPlxuICAgICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiB0eXBlPVwidHJhbnNsYXRlXCIgZnJvbT1cIi0jeCwtI3lcIlxuICAgICAgICAgICAgICAgIHRvPVwiMCwwXCIgZHVyPVwiI3tkdXJ9c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiLz48L3JlY3Q+PC9zdmc+XG4gICAgICAgICAgICAgICAgXCJcIlwiXG4gICAgICAgICAgICB3cmFwIHJldC5qb2luKFwiXCIpXG5cbiAgICAgICAgc3RyaXBlOiAoYzE9XFwjYjRiNGI0LCBjMj1cXCNlNmU2ZTYsIGR1ciA9IDEpIC0+XG4gICAgICAgICAgICByZXQgPSBbQGhlYWQgXCIwIDAgMTAwIDEwMFwiXVxuICAgICAgICAgICAgcmV0ICsrPSBbXG4gICAgICAgICAgICAgICAgXCJcIlwiPHJlY3QgZmlsbD1cIiNjMlwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIvPlwiXCJcIlxuICAgICAgICAgICAgICAgIFwiXCJcIjxnPjxnPlwiXCJcIlxuICAgICAgICAgICAgICAgIFtcIlwiXCI8cG9seWdvbiBmaWxsPVwiI2MxXCIgXCJcIlwiICtcbiAgICAgICAgICAgICAgICAgXCJcIlwicG9pbnRzPVwiI3stOTAgKyBpICogMjB9LDEwMCAjey0xMDAgKyBpICogMjB9LFwiXCJcIiArXG4gICAgICAgICAgICAgICAgIFwiXCJcIjEwMCAjey02MCArIGkgKiAyMH0sMCAjey01MCArIGkgKiAyMH0sMCBcIi8+XCJcIlwiIGZvciBpIGZyb20gMCB0aWwgMTNdLmpvaW4oXCJcIilcbiAgICAgICAgICAgICAgICBcIlwiXCI8L2c+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cInRyYW5zZm9ybVwiIHR5cGU9XCJ0cmFuc2xhdGVcIiBcIlwiXCJcbiAgICAgICAgICAgICAgICBcIlwiXCJmcm9tPVwiMCwwXCIgdG89XCIyMCwwXCIgZHVyPVwiI3tkdXJ9c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiLz48L2c+PC9zdmc+XCJcIlwiXG4gICAgICAgICAgICBdLmpvaW4oXCJcIilcbiAgICAgICAgICAgIHdyYXAgcmV0XG5cbiAgICAgICAgYnViYmxlOiAoYzEgPSBcXCMzOWQsIGMyID0gXFwjOWNmLCBjb3VudCA9IDE1LCBkdXIgPSAxLCBzaXplID0gNiwgc3c9MSkgLT5cbiAgICAgICAgICAgIHJldCA9IFtAaGVhZChcIjAgMCAyMDAgMjAwXCIpLCBcIlwiXCI8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIiBmaWxsPVwiI2MxXCIvPlwiXCJcIl1cbiAgICAgICAgICAgIGZvciBpIGZyb20gMCB0aWwgY291bnQgPT5cbiAgICAgICAgICAgICAgICBpZHggPSAtKGkgLyBjb3VudCkgKiBkdXJcbiAgICAgICAgICAgICAgICB4ID0gTWF0aC5yYW5kb20hICogMTg0ICsgOFxuICAgICAgICAgICAgICAgIHIgPSAoIE1hdGgucmFuZG9tISAqIDAuNyArIDAuMyApICogc2l6ZVxuICAgICAgICAgICAgICAgIGQgPSBkdXIgKiAoMSArIE1hdGgucmFuZG9tISAqIDAuNSlcbiAgICAgICAgICAgICAgICByZXQucHVzaCBbXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcIjxjaXJjbGUgY3g9XCIjeFwiIGN5PVwiMFwiIHI9XCIjclwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI2MyXCIgc3Ryb2tlLXdpZHRoPVwiI3N3XCI+XCJcIlwiXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcIjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJjeVwiIHZhbHVlcz1cIjE5MDstMTBcIiB0aW1lcz1cIjA7MVwiIFwiXCJcIlxuICAgICAgICAgICAgICAgICAgICBcIlwiXCJkdXI9XCIje2R9c1wiIGJlZ2luPVwiI3tpZHh9c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiLz5cIlwiXCJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiPC9jaXJjbGU+XCJcIlwiXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcIjxjaXJjbGUgY3g9XCIjeFwiIGN5PVwiMFwiIHI9XCIjclwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI2MyXCIgc3Ryb2tlLXdpZHRoPVwiI3N3XCI+XCJcIlwiXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcIjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJjeVwiIHZhbHVlcz1cIjM5MDsxOTBcIiB0aW1lcz1cIjA7MVwiIFwiXCJcIlxuICAgICAgICAgICAgICAgICAgICBcIlwiXCJkdXI9XCIje2R9c1wiIGJlZ2luPVwiI3tpZHh9c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiLz5cIlwiXCJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiPC9jaXJjbGU+XCJcIlwiXG4gICAgICAgICAgICAgICAgXS5qb2luKFwiXCIpXG4gICAgICAgICAgICB3cmFwKHJldC5qb2luKFwiXCIpICsgXCI8L3N2Zz5cIilcblxuICAgIGhhbmRsZXIgPVxuICAgICAgICBxdWV1ZToge31cbiAgICAgICAgcnVubmluZzogZmFsc2VcbiAgICAgICAgbWFpbjogKHRpbWVzdGFtcCkgLT5cbiAgICAgICAgICAgIGtlZXBvbiA9IGZhbHNlXG4gICAgICAgICAgICByZW1vdmVkID0gW11cbiAgICAgICAgICAgIGZvciBrLGZ1bmMgb2YgQHF1ZXVlID0+XG4gICAgICAgICAgICAgICAgcmV0ID0gZnVuYyB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICBpZiAhcmV0ID0+IHJlbW92ZWQucHVzaCBmdW5jXG4gICAgICAgICAgICAgICAga2VlcG9uID0ga2VlcG9uIG9yIHJldFxuICAgICAgICAgICAgZm9yIGssZnVuYyBvZiBAcXVldWUgPT4gaWYgcmVtb3ZlZC5pbmRleE9mKGZ1bmMpID49IDAgPT4gZGVsZXRlIEBxdWV1ZVtrXVxuICAgICAgICAgICAgaWYga2VlcG9uID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSAofj4gQG1haW4gaXQpXG4gICAgICAgICAgICBlbHNlIEBydW5uaW5nID0gZmFsc2VcbiAgICAgICAgYWRkOiAoa2V5LCBmKSAtPlxuICAgICAgICAgICAgaWYgIUBxdWV1ZVtrZXldID0+IEBxdWV1ZVtrZXldID0gZlxuICAgICAgICAgICAgaWYgIUBydW5uaW5nID0+XG4gICAgICAgICAgICAgICAgQHJ1bm5pbmcgPSB0cnVlXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICh+PiBAbWFpbiBpdClcblxuXG4gICAgd2luZG93LmxkQmFyID0gbGRCYXIgPSAoc2VsZWN0b3IsIG9wdGlvbiA9IHt9KSAtPlxuICAgICAgICB4bWxucyA9IHhsaW5rOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgICByb290ID0gaWYgdHlwZW9mISBzZWxlY3RvciBpcyBcXFN0cmluZ1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciBzZWxlY3RvclxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzZWxlY3RvclxuXG4gICAgICAgIGlmICFyb290LmxkQmFyID0+IHJvb3QubGRCYXIgPSBAXG4gICAgICAgIGVsc2UgcmV0dXJuIHJvb3QubGRCYXJcblxuICAgICAgICBjbHMgPSByb290LmdldEF0dHJpYnV0ZShcXGNsYXNzKSBvciAnJ1xuICAgICAgICBpZiAhfmNscy5pbmRleE9mKCdsZEJhcicpID0+IHJvb3Quc2V0QXR0cmlidXRlIFxcY2xhc3MsIFwiI2NscyBsZEJhclwiXG4gICAgICAgIGlkLXByZWZpeCA9IFwibGRCYXItI3tNYXRoLnJhbmRvbSF0b1N0cmluZyAxNiAuc3Vic3RyaW5nIDJ9XCJcbiAgICAgICAgaWQgPVxuICAgICAgICAgICAga2V5OiBpZC1wcmVmaXhcbiAgICAgICAgICAgIGNsaXA6IFwiI3tpZC1wcmVmaXh9LWNsaXBcIlxuICAgICAgICAgICAgZmlsdGVyOiBcIiN7aWQtcHJlZml4fS1maWx0ZXJcIlxuICAgICAgICAgICAgcGF0dGVybjogXCIje2lkLXByZWZpeH0tcGF0dGVyblwiXG4gICAgICAgICAgICBtYXNrOiBcIiN7aWQtcHJlZml4fS1tYXNrXCJcbiAgICAgICAgICAgIG1hc2stcGF0aDogXCIje2lkLXByZWZpeH0tbWFzay1wYXRoXCJcbiAgICAgICAgZG9tVHJlZSA9IChuLG8pIC0+XG4gICAgICAgICAgICBuID0gbmV3Tm9kZSBuXG4gICAgICAgICAgICBmb3Igayx2IG9mIG8gPT4gaWYgayAhPSBcXGF0dHIgPT4gbi5hcHBlbmRDaGlsZCBkb21UcmVlKGssIHYgb3Ige30pXG4gICAgICAgICAgICBuLmF0dHJzKG8uYXR0ciBvciB7fSlcbiAgICAgICAgICAgIG5cbiAgICAgICAgbmV3Tm9kZSA9IChuKSAtPiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuX19wcm90b19fLl9fcHJvdG9fXy5fX3Byb3RvX19cbiAgICAgICAgICAgIC4udGV4dCA9ICh0KSAtPiBAYXBwZW5kQ2hpbGQgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodClcbiAgICAgICAgICAgIC4uYXR0cnMgPSAobykgLT4gZm9yIGssdiBvZiBvID0+XG4gICAgICAgICAgICAgICAgcmV0ID0gLyhbXjpdKyk6KFteOl0rKS8uZXhlYyhrKVxuICAgICAgICAgICAgICAgIGlmICFyZXQgb3IgIXhtbG5zW3JldC4xXSA9PiBAc2V0QXR0cmlidXRlIGssIHZcbiAgICAgICAgICAgICAgICBlbHNlIEBzZXRBdHRyaWJ1dGVOUyB4bWxuc1tyZXQuMV0sIGssIHZcbiAgICAgICAgICAgIC4uc3R5bGVzID0gKG8pIC0+IGZvciBrLHYgb2YgbyA9PiBAc3R5bGVba10gPSB2XG4gICAgICAgICAgICAuLmFwcGVuZCA9IChuKSAtPiBAYXBwZW5kQ2hpbGQgciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyBcImh0dHA6Ly93d3cudzMub2cvMjAwMC9zdmdcIiwgblxuICAgICAgICAgICAgLi5hdHRyID0gKG4sdikgLT4gaWYgdj8gPT4gQHNldEF0dHJpYnV0ZSBuLCB2IGVsc2UgQGdldEF0dHJpYnV0ZSBuXG4gICAgICAgIGNvbmZpZyA9XG4gICAgICAgICAgICBcInR5cGVcIjogJ3N0cm9rZSdcbiAgICAgICAgICAgIFwiaW1nXCI6ICcnXG4gICAgICAgICAgICBcInBhdGhcIjogJ00xMCAxMEw5MCAxME05MCA4TTkwIDEyJ1xuICAgICAgICAgICAgXCJmaWxsLWRpclwiOiBcXGJ0dFxuICAgICAgICAgICAgXCJmaWxsXCI6IFxcIzI1YlxuICAgICAgICAgICAgXCJmaWxsLWJhY2tncm91bmRcIjogXFwjZGRkXG4gICAgICAgICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDNcbiAgICAgICAgICAgIFwicGF0dGVybi1zaXplXCI6IG51bGxcbiAgICAgICAgICAgIFwic3Ryb2tlLWRpclwiOiBcXG5vcm1hbFxuICAgICAgICAgICAgXCJzdHJva2VcIjogXFwjMjViXG4gICAgICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBcXDNcbiAgICAgICAgICAgIFwic3Ryb2tlLXRyYWlsXCI6IFxcI2RkZFxuICAgICAgICAgICAgXCJzdHJva2UtdHJhaWwtd2lkdGhcIjogMC41XG4gICAgICAgICAgICBcImR1cmF0aW9uXCI6IDFcbiAgICAgICAgICAgIFwiZWFzaW5nXCI6IFxcbGluZWFyXG4gICAgICAgICAgICBcInZhbHVlXCI6IDBcbiAgICAgICAgICAgIFwiaW1nLXNpemVcIjogbnVsbFxuICAgICAgICAgICAgXCJiYm94XCI6IG51bGxcbiAgICAgICAgICAgIFwic2V0LWRpbVwiOiB0cnVlXG4gICAgICAgICAgICBcImFzcGVjdC1yYXRpb1wiOiBcInhNaWRZTWlkXCJcbiAgICAgICAgICAgIFwidHJhbnNpdGlvbi1pblwiOiBmYWxzZVxuICAgICAgICAgICAgXCJtaW5cIjogMFxuICAgICAgICAgICAgXCJtYXhcIjogMTAwXG4gICAgICAgICAgICBcInByZWNpc2lvblwiOiAwXG4gICAgICAgICAgICBcInBhZGRpbmdcIjogdW5kZWZpbmVkXG5cbiAgICAgICAgY29uZmlnW1wicHJlc2V0XCJdID0gcm9vdC5hdHRyKFwiZGF0YS1wcmVzZXRcIikgb3Igb3B0aW9uW1wicHJlc2V0XCJdXG5cbiAgICAgICAgaWYgY29uZmlnLnByZXNldD9cbiAgICAgICAgICAgICMgdXNlIHRoZSBkZWZhdWx0IHByZXNldFxuICAgICAgICAgICAgY29uZmlnIDw8PCBwcmVzZXRzW2NvbmZpZy5wcmVzZXRdXG5cbiAgICAgICAgIyBvdmVyd3JpdGUgaWYgdGhlcmUgYXJlIGFyZ3VtZW50cyBwYXNzZWQgdmlhIGRhdGEtKiBhdHRyaWJ1dGVzXG4gICAgICAgIGZvciBhdHRyIG9mIGNvbmZpZ1xuICAgICAgICAgICAgaWYgdGhhdCA9IHJvb3QuYXR0ciBcImRhdGEtI3thdHRyfVwiXG4gICAgICAgICAgICAgICAgY29uZmlnW2F0dHJdID0gdGhhdFxuXG4gICAgICAgIGNvbmZpZyA8PDwgb3B0aW9uXG4gICAgICAgIGlmIGNvbmZpZy5pbWcgPT4gY29uZmlnLnBhdGggPSBudWxsXG5cbiAgICAgICAgaXMtc3Ryb2tlID0gY29uZmlnLnR5cGUgPT0gXFxzdHJva2VcbiAgICAgICAgcGFyc2UtcmVzID0gKHYpIC0+XG4gICAgICAgICAgICBwYXJzZXIgPSAvZGF0YTpsZGJhclxcL3JlcywoW14oKV0rKVxcKChbXildKylcXCkvXG4gICAgICAgICAgICByZXQgPSBwYXJzZXIuZXhlYyh2KVxuICAgICAgICAgICAgaWYgIXJldCA9PiByZXR1cm4gdlxuICAgICAgICAgICAgcmV0ID0gbWFrZVtyZXQuMV0uYXBwbHkgbWFrZSwgcmV0LjIuc3BsaXQoXFwsKVxuICAgICAgICBjb25maWcuZmlsbCA9IHBhcnNlLXJlcyBjb25maWcuZmlsbFxuICAgICAgICBjb25maWcuc3Ryb2tlID0gcGFyc2UtcmVzIGNvbmZpZy5zdHJva2VcbiAgICAgICAgaWYgY29uZmlnW1wic2V0LWRpbVwiXSA9PSBcXGZhbHNlID0+IGNvbmZpZ1tcInNldC1kaW1cIl0gPSBmYWxzZVxuXG4gICAgICAgIGRvbSA9XG4gICAgICAgICAgICBhdHRyOlxuICAgICAgICAgICAgICAgIFwieG1sbnM6eGxpbmtcIjogXFxodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXG4gICAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogY29uZmlnW1wiYXNwZWN0LXJhdGlvXCJdXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiXG4gICAgICAgICAgICBkZWZzOlxuICAgICAgICAgICAgICAgIGZpbHRlcjpcbiAgICAgICAgICAgICAgICAgICAgYXR0cjogaWQ6IGlkLmZpbHRlciwgeDogLTEsIHk6IC0xLCB3aWR0aDogMywgaGVpZ2h0OiAzXG4gICAgICAgICAgICAgICAgICAgIGZlTW9ycGhvbG9neTogYXR0cjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAoaWYgK2NvbmZpZ1tcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCJdPj0wID0+IFxcZGlsYXRlIGVsc2UgXFxlcm9kZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogTWF0aC5hYnMoK2NvbmZpZ1tcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCJdKVxuICAgICAgICAgICAgICAgICAgICBmZUNvbG9yTWF0cml4OiBhdHRyOiB7dmFsdWVzOiAnMCAwIDAgMCAxICAgIDAgMCAwIDAgMSAgICAwIDAgMCAwIDEgICAgMCAwIDAgMSAwJywgcmVzdWx0OiBcImNtXCJ9XG4gICAgICAgICAgICAgICAgbWFzazpcbiAgICAgICAgICAgICAgICAgICAgYXR0cjogaWQ6IGlkLm1hc2tcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGF0dHI6XG4gICAgICAgICAgICAgICAgICAgICAgICBcInhsaW5rOmhyZWZcIjogY29uZmlnLmltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcInVybChcXCMje2lkLmZpbHRlcn0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsIHk6IDAsIHdpZHRoOiAxMDAsIGhlaWdodDogMTAwLCBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBjb25maWdbXCJhc3BlY3QtcmF0aW9cIl1cblxuICAgICAgICAgICAgICAgIGc6XG4gICAgICAgICAgICAgICAgICAgIG1hc2s6XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyOiBpZDogaWQubWFzay1wYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBhdHRyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ6IGNvbmZpZy5wYXRoIG9yIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcXCNmZmZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IFxcI2ZmZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJ1cmwoXFwjI3tpZC5maWx0ZXJ9KVwiXG5cbiAgICAgICAgICAgICAgICBjbGlwUGF0aDpcbiAgICAgICAgICAgICAgICAgICAgYXR0cjogaWQ6IGlkLmNsaXBcbiAgICAgICAgICAgICAgICAgICAgcmVjdDoge2F0dHI6IGNsYXNzOiBcXG1hc2ssIGZpbGw6IFxcIzAwMH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuOlxuICAgICAgICAgICAgICAgICAgICBhdHRyOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLnBhdHRlcm4sIHBhdHRlcm5Vbml0czogXFx1c2VyU3BhY2VPblVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgeDowLCB5OiAwLCB3aWR0aDogMzAwLCBoZWlnaHQ6IDMwMFxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogYXR0cjogeDogMCwgeTogMCwgd2lkdGg6IDMwMCwgaGVpZ2h0OiAzMDBcblxuICAgICAgICBzdmcgPSBkb21UcmVlIFxcc3ZnLCBkb21cbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgXFxkaXZcbiAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUgXFxjbGFzcywgXFxsZEJhci1sYWJlbFxuICAgICAgICByb290LmFwcGVuZENoaWxkIHN2Z1xuICAgICAgICByb290LmFwcGVuZENoaWxkIHRleHRcblxuICAgICAgICBncm91cCA9IFswLDBdXG4gICAgICAgIGxlbmd0aCA9IDBcblxuICAgICAgICBAZml0ID0gfj5cbiAgICAgICAgICAgIGlmIGNvbmZpZ1tcImJib3hcIl0gPT5cbiAgICAgICAgICAgICAgYm94ID0gdGhhdC5zcGxpdCgnICcpLm1hcCgtPisoaXQudHJpbSEpKVxuICAgICAgICAgICAgICBib3ggPSB7eDogYm94LjAsIHk6IGJveC4xLCB3aWR0aDogYm94LjIsIGhlaWdodDogYm94LjN9XG4gICAgICAgICAgICBlbHNlIGJveCA9IGdyb3VwLjEuZ2V0QkJveCFcbiAgICAgICAgICAgIGlmICFib3ggb3IgYm94LndpZHRoID09IDAgb3IgYm94LmhlaWdodCA9PSAwID0+IGJveCA9IHt4OiAwLCB5OiAwLCB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMH1cbiAgICAgICAgICAgIGQgPSAoTWF0aC5tYXguYXBwbHkoXG4gICAgICAgICAgICAgIG51bGwsIDxbc3Ryb2tlLXdpZHRoIHN0cm9rZS10cmFpbC13aWR0aCBmaWxsLWJhY2tncm91bmQtZXh0cnVkZV0+Lm1hcCgtPmNvbmZpZ1tpdF0pKVxuICAgICAgICAgICAgKSAqIDEuNVxuICAgICAgICAgICAgaWYgY29uZmlnW1wicGFkZGluZ1wiXT8gPT4gZCA9ICtjb25maWdbXCJwYWRkaW5nXCJdXG5cbiAgICAgICAgICAgIHN2Zy5hdHRycyB2aWV3Qm94OiBbYm94LnggLSBkLCBib3gueSAtIGQsIGJveC53aWR0aCArIGQgKiAyLCBib3guaGVpZ2h0ICsgZCAqIDJdLmpvaW4oXCIgXCIpXG4gICAgICAgICAgICBpZiBjb25maWdbXCJzZXQtZGltXCJdID0+IDxbd2lkdGggaGVpZ2h0XT4ubWFwIH4+IGlmICFyb290LnN0eWxlW2l0XSBvciBAZml0W2l0XSA9PlxuICAgICAgICAgICAgICByb290LnN0eWxlW2l0XSA9IFwiI3tib3hbaXRdICsgZCAqIDJ9cHhcIlxuICAgICAgICAgICAgICBAZml0W2l0XSA9IHRydWVcblxuICAgICAgICAgICAgcmVjdCA9IGdyb3VwLjAucXVlcnlTZWxlY3RvciBcXHJlY3RcbiAgICAgICAgICAgIGlmIHJlY3QgPT4gcmVjdC5hdHRycyBkb1xuICAgICAgICAgICAgICAgIHg6IGJveC54IC0gZCwgeTogYm94LnkgLSBkLCB3aWR0aDogYm94LndpZHRoICsgZCAqIDIsIGhlaWdodDogYm94LmhlaWdodCArIGQgKiAyXG5cbiAgICAgICAgaWYgY29uZmlnLnBhdGggPT5cbiAgICAgICAgICAgIGlmIGlzLXN0cm9rZSA9PlxuICAgICAgICAgICAgICAgIGdyb3VwLjAgPSBkb21UcmVlIFxcZywgcGF0aDogYXR0cjpcbiAgICAgICAgICAgICAgICAgICAgZDogY29uZmlnLnBhdGhcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogXFxub25lXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcXGJhc2VsaW5lXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZ3JvdXAuMCA9IGRvbVRyZWUgXFxnLCByZWN0OiBhdHRyOlxuICAgICAgICAgICAgICAgICAgICB4OiAwLCB5OiAwLCB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiBcInVybChcXCMje2lkLm1hc2stcGF0aH0pXCIsIGZpbGw6IGNvbmZpZ1tcImZpbGwtYmFja2dyb3VuZFwiXVxuICAgICAgICAgICAgICAgICAgICBjbGFzczogXFxmcmFtZVxuXG4gICAgICAgICAgICBzdmcuYXBwZW5kQ2hpbGQgZ3JvdXAuMFxuICAgICAgICAgICAgZ3JvdXAuMSA9IGRvbVRyZWUgXFxnLCBwYXRoOiBhdHRyOlxuICAgICAgICAgICAgICAgIGQ6IGNvbmZpZy5wYXRoLCBjbGFzczogaWYgaXMtc3Ryb2tlID0+IFxcbWFpbmxpbmUgZWxzZSBcXHNvbGlkXG4gICAgICAgICAgICAgICAgXCJjbGlwLXBhdGhcIjogaWYgY29uZmlnLnR5cGUgPT0gXFxmaWxsID0+IFwidXJsKFxcIyN7aWQuY2xpcH0pXCIgZWxzZSAnJ1xuICAgICAgICAgICAgc3ZnLmFwcGVuZENoaWxkIGdyb3VwLjFcbiAgICAgICAgICAgIHBhdGgwID0gZ3JvdXAuMC5xdWVyeVNlbGVjdG9yIChpZiBpcy1zdHJva2UgPT4gXFxwYXRoIGVsc2UgXFxyZWN0KVxuICAgICAgICAgICAgcGF0aDEgPSBncm91cC4xLnF1ZXJ5U2VsZWN0b3IgXFxwYXRoXG4gICAgICAgICAgICBpZiBpcy1zdHJva2UgPT4gcGF0aDEuYXR0cnMgZmlsbDogXFxub25lXG5cbiAgICAgICAgICAgIHBhdGltZyA9IHN2Zy5xdWVyeVNlbGVjdG9yICdwYXR0ZXJuIGltYWdlJ1xuICAgICAgICAgICAgaW1nID0gbmV3IEltYWdlIVxuICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIgXFxsb2FkLCAtPlxuICAgICAgICAgICAgICAgIGJveCA9IGlmIGNvbmZpZ1tcInBhdHRlcm4tc2l6ZVwiXSA9PiB7d2lkdGg6ICt0aGF0LCBoZWlnaHQ6ICt0aGF0fVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgaW1nLndpZHRoIGFuZCBpbWcuaGVpZ2h0ID0+IHt3aWR0aDogaW1nLndpZHRoLCBoZWlnaHQ6IGltZy5oZWlnaHR9XG4gICAgICAgICAgICAgICAgZWxzZSB7d2lkdGg6IDMwMCwgaGVpZ2h0OiAzMDB9XG4gICAgICAgICAgICAgICAgc3ZnLnF1ZXJ5U2VsZWN0b3IgXFxwYXR0ZXJuIC5hdHRycyB7d2lkdGg6IGJveC53aWR0aCwgaGVpZ2h0OiBib3guaGVpZ2h0fVxuICAgICAgICAgICAgICAgIHBhdGltZy5hdHRycyB7d2lkdGg6IGJveC53aWR0aCwgaGVpZ2h0OiBib3guaGVpZ2h0fVxuICAgICAgICAgICAgaWYgLy4rXFwuLit8XmRhdGE6Ly5leGVjKGlmICFpcy1zdHJva2UgPT4gY29uZmlnLmZpbGwgZWxzZSBjb25maWcuc3Ryb2tlKSA9PlxuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBpZiAhaXMtc3Ryb2tlID0+IGNvbmZpZy5maWxsIGVsc2UgY29uZmlnLnN0cm9rZVxuICAgICAgICAgICAgICAgIHBhdGltZy5hdHRycyBcInhsaW5rOmhyZWZcIjogaW1nLnNyYyAjaWYgIWlzLXN0cm9rZSA9PiBjb25maWcuZmlsbCBlbHNlIGNvbmZpZy5zdHJva2VcblxuICAgICAgICAgICAgaWYgaXMtc3Ryb2tlID0+XG4gICAgICAgICAgICAgICAgcGF0aDAuYXR0cnMgc3Ryb2tlOiBjb25maWdbXCJzdHJva2UtdHJhaWxcIl0sIFwic3Ryb2tlLXdpZHRoXCI6IGNvbmZpZ1tcInN0cm9rZS10cmFpbC13aWR0aFwiXVxuICAgICAgICAgICAgICAgIHBhdGgxLmF0dHJzIGRvXG4gICAgICAgICAgICAgICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IGNvbmZpZ1tcInN0cm9rZS13aWR0aFwiXVxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IGlmIC8uK1xcLi4rfF5kYXRhOi8uZXhlYyhjb25maWcuc3Ryb2tlKSA9PiBcInVybChcXCMje2lkLnBhdHRlcm59KVwiIGVsc2UgY29uZmlnLnN0cm9rZVxuICAgICAgICAgICAgaWYgY29uZmlnLmZpbGwgYW5kICFpcy1zdHJva2UgPT5cbiAgICAgICAgICAgICAgICBwYXRoMS5hdHRycyBkb1xuICAgICAgICAgICAgICAgICAgICBmaWxsOiBpZiAvLitcXC4uK3xeZGF0YTovLmV4ZWMoY29uZmlnLmZpbGwpID0+IFwidXJsKFxcIyN7aWQucGF0dGVybn0pXCIgZWxzZSBjb25maWcuZmlsbFxuXG4gICAgICAgICAgICBsZW5ndGggPSBwYXRoMS5nZXRUb3RhbExlbmd0aCFcbiAgICAgICAgICAgIEBmaXQhXG4gICAgICAgICAgICBAaW5pdGVkID0gdHJ1ZVxuICAgICAgICBlbHNlIGlmIGNvbmZpZy5pbWcgPT5cbiAgICAgICAgICAgIGlmIGNvbmZpZ1tcImltZy1zaXplXCJdID0+XG4gICAgICAgICAgICAgICAgcmV0ID0gY29uZmlnW1wiaW1nLXNpemVcIl0uc3BsaXQoXFwsKVxuICAgICAgICAgICAgICAgIHNpemUgPSB7d2lkdGg6ICtyZXQuMCwgaGVpZ2h0OiArcmV0LjF9XG4gICAgICAgICAgICBlbHNlIHNpemUgPSB7d2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDB9XG5cbiAgICAgICAgICAgIGdyb3VwLjAgPSBkb21UcmVlIFxcZywgcmVjdDogYXR0cjpcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAwLCB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCwgbWFzazogXCJ1cmwoXFwjI3tpZC5tYXNrfSlcIiwgZmlsbDogY29uZmlnW1wiZmlsbC1iYWNrZ3JvdW5kXCJdXG4gICAgICAgICAgICBzdmcucXVlcnlTZWxlY3RvciAnbWFzayBpbWFnZScgLmF0dHJzIGRvXG4gICAgICAgICAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsIGhlaWdodDogc2l6ZS5oZWlnaHRcbiAgICAgICAgICAgIGdyb3VwLjEgPSBkb21UcmVlIFxcZywgaW1hZ2U6IGF0dHI6XG4gICAgICAgICAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsIGhlaWdodDogc2l6ZS5oZWlnaHQsIHg6IDAsIHk6IDAsIHByZXNlcnZlQXNwZWN0UmF0aW86IGNvbmZpZ1tcImFzcGVjdC1yYXRpb1wiXVxuICAgICAgICAgICAgICAgICN3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCwgeDogMCwgeTogMCwgcHJlc2VydmVBc3BlY3RSYXRpbzogXCJ4TWlkWU1pZFwiXG4gICAgICAgICAgICAgICAgXCJjbGlwLXBhdGhcIjogaWYgY29uZmlnLnR5cGUgPT0gXFxmaWxsID0+IFwidXJsKFxcIyN7aWQuY2xpcH0pXCIgZWxzZSAnJ1xuICAgICAgICAgICAgICAgIFwieGxpbms6aHJlZlwiOiBjb25maWcuaW1nLCBjbGFzczogXFxzb2xpZFxuICAgICAgICAgICAgaW1nID0gbmV3IEltYWdlIVxuICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIgXFxsb2FkLCB+PlxuICAgICAgICAgICAgICAgIGlmIGNvbmZpZ1tcImltZy1zaXplXCJdID0+XG4gICAgICAgICAgICAgICAgICAgIHJldCA9IGNvbmZpZ1tcImltZy1zaXplXCJdLnNwbGl0KFxcLClcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IHt3aWR0aDogK3JldC4wLCBoZWlnaHQ6ICtyZXQuMX1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIGltZy53aWR0aCBhbmQgaW1nLmhlaWdodCA9PiBzaXplID0ge3dpZHRoOiBpbWcud2lkdGgsIGhlaWdodDogaW1nLmhlaWdodH1cbiAgICAgICAgICAgICAgICBlbHNlIHNpemUgPSB7d2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDB9XG4gICAgICAgICAgICAgICAgc3ZnLnF1ZXJ5U2VsZWN0b3IgJ21hc2sgaW1hZ2UnIC5hdHRycyBkb1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogc2l6ZS53aWR0aCwgaGVpZ2h0OiBzaXplLmhlaWdodFxuICAgICAgICAgICAgICAgIGdyb3VwLjEucXVlcnlTZWxlY3RvciAnaW1hZ2UnIC5hdHRycyBkb1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogc2l6ZS53aWR0aCwgaGVpZ2h0OiBzaXplLmhlaWdodFxuXG4gICAgICAgICAgICAgICAgQGZpdCFcbiAgICAgICAgICAgICAgICBAc2V0IHVuZGVmaW5lZCwgZmFsc2VcbiAgICAgICAgICAgICAgICBAaW5pdGVkID0gdHJ1ZVxuICAgICAgICAgICAgaW1nLnNyYyA9IGNvbmZpZy5pbWdcbiAgICAgICAgICAgIHN2Zy5hcHBlbmRDaGlsZCBncm91cC4wXG4gICAgICAgICAgICBzdmcuYXBwZW5kQ2hpbGQgZ3JvdXAuMVxuICAgICAgICBzdmcuYXR0cnMgd2lkdGg6IFxcMTAwJSwgaGVpZ2h0OiBcXDEwMCUgIywgdmlld0JveDogJzAgMCAxMDAgMTAwJ1xuXG4gICAgICAgIEB0cmFuc2l0aW9uID1cbiAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgIHNyYzogMFxuICAgICAgICAgICAgICAgIGRlczogMFxuICAgICAgICAgICAgdGltZToge31cblxuICAgICAgICAgICAgZWFzZTogKHQsYixjLGQpIC0+XG4gICAgICAgICAgICAgICAgdCA9IHQgLyAoZCAqIDAuNSlcbiAgICAgICAgICAgICAgICBpZiB0IDwgMSA9PiByZXR1cm4gYyAqIDAuNSAqIHQgKiB0ICsgYlxuICAgICAgICAgICAgICAgIHQgPSB0IC0gMVxuICAgICAgICAgICAgICAgIHJldHVybiAtYyAqIDAuNSAqICh0Kih0IC0gMikgLSAxKSArIGJcblxuICAgICAgICAgICAgaGFuZGxlcjogKHRpbWUsIGRvVHJhbnNpdGlvbiA9IHRydWUpIC0+XG4gICAgICAgICAgICAgICAgaWYgIUB0aW1lLnNyYz8gPT4gQHRpbWUuc3JjID0gdGltZVxuICAgICAgICAgICAgICAgIFttaW4sbWF4LHByZWNdID0gW2NvbmZpZ1tcIm1pblwiXSwgY29uZmlnW1wibWF4XCJdLDEvY29uZmlnW1wicHJlY2lzaW9uXCJdXVxuICAgICAgICAgICAgICAgIFtkdiwgZHQsIGR1cl0gPSBbQHZhbHVlLmRlcyAtIEB2YWx1ZS5zcmMsICh0aW1lIC0gQHRpbWUuc3JjKSAqIDAuMDAxLCArY29uZmlnW1wiZHVyYXRpb25cIl0gb3IgMV1cbiAgICAgICAgICAgICAgICB2ID0gaWYgZG9UcmFuc2l0aW9uID0+IEBlYXNlKGR0LCBAdmFsdWUuc3JjLCBkdiwgZHVyKSBlbHNlIEB2YWx1ZS5kZXNcbiAgICAgICAgICAgICAgICBpZiBjb25maWcucHJlY2lzaW9uID0+IHYgPSBNYXRoLnJvdW5kKHYgKiBwcmVjKSAvIHByZWNcbiAgICAgICAgICAgICAgICBlbHNlIGlmIGRvVHJhbnNpdGlvbiA9PiB2ID0gTWF0aC5yb3VuZCh2KVxuICAgICAgICAgICAgICAgIHYgPj89IG1pblxuICAgICAgICAgICAgICAgIHYgPD89IG1heFxuICAgICAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSB2XG4gICAgICAgICAgICAgICAgcCA9IDEwMC4wICogKHYgLSBtaW4gKSAvICggbWF4IC0gbWluIClcbiAgICAgICAgICAgICAgICBpZiBpcy1zdHJva2UgPT5cbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHBhdGgxXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3Ryb2tlLWRhc2hhcnJheVwiOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgY29uZmlnW1wic3Ryb2tlLWRpclwiXSA9PSBcXHJldmVyc2UgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIwICN7bGVuZ3RoICogKDEwMCAtIHApICogMC4wMX0gI3tsZW5ndGggKiBwICogMC4wMX0gMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSA9PiBcIiN7cCAqIDAuMDEgKiBsZW5ndGh9ICN7KDEwMCAtIHApICogMC4wMSAqIGxlbmd0aCArIDF9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGJveCA9IGdyb3VwLjEuZ2V0QkJveCFcbiAgICAgICAgICAgICAgICAgICAgZGlyID0gY29uZmlnW1wiZmlsbC1kaXJcIl1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSBpZiBkaXIgPT0gXFxidHQgb3IgIWRpciA9PiBkb1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogYm94LnkgKyBib3guaGVpZ2h0ICogKDEwMCAtIHApICogMC4wMVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBib3guaGVpZ2h0ICogcCAqIDAuMDFcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGJveC54LCB3aWR0aDogYm94LndpZHRoXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgZGlyID09IFxcdHRiID0+IGRvXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBib3gueSwgaGVpZ2h0OiBib3guaGVpZ2h0ICogcCAqIDAuMDFcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGJveC54LCB3aWR0aDogYm94LndpZHRoXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgZGlyID09IFxcbHRyID0+IGRvXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBib3gueSwgaGVpZ2h0OiBib3guaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBib3gueCwgd2lkdGg6IGJveC53aWR0aCAqIHAgKiAwLjAxXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgZGlyID09IFxccnRsID0+IGRvXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBib3gueSwgaGVpZ2h0OiBib3guaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBib3gueCArIGJveC53aWR0aCAqICgxMDAgLSBwKSAqIDAuMDFcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBib3gud2lkdGggKiBwICogMC4wMVxuICAgICAgICAgICAgICAgICAgICBub2RlID0gc3ZnLnF1ZXJ5U2VsZWN0b3IgXFxyZWN0XG4gICAgICAgICAgICAgICAgbm9kZS5hdHRycyBzdHlsZVxuICAgICAgICAgICAgICAgIGlmIGR0ID49IGR1ciA9PiBkZWxldGUgQHRpbWUuc3JjOyByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgc3RhcnQ6IChzcmMsIGRlcywgZG9UcmFuc2l0aW9uKSAtPlxuICAgICAgICAgICAgICAgIEB2YWx1ZSA8PDwge3NyYywgZGVzfVxuICAgICAgICAgICAgICAgICEhKCByb290Lm9mZnNldFdpZHRoIHx8IHJvb3Qub2Zmc2V0SGVpZ2h0IHx8IHJvb3QuZ2V0Q2xpZW50UmVjdHMhbGVuZ3RoIClcbiAgICAgICAgICAgICAgICBpZiAhZG9UcmFuc2l0aW9uIG9yICEoIHJvb3Qub2Zmc2V0V2lkdGggfHwgcm9vdC5vZmZzZXRIZWlnaHQgfHwgcm9vdC5nZXRDbGllbnRSZWN0cyFsZW5ndGggKSA9PlxuICAgICAgICAgICAgICAgICAgICBAdGltZS5zcmMgPSAwXG4gICAgICAgICAgICAgICAgICAgIEBoYW5kbGVyIDEwMDAsIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIGhhbmRsZXIuYWRkIGlkLmtleSwgKHRpbWUpIH4+IHJldHVybiBAaGFuZGxlciB0aW1lXG5cbiAgICAgICAgQHNldCA9ICh2LGRvVHJhbnNpdGlvbiA9IHRydWUpIC0+XG4gICAgICAgICAgICBzcmMgPSBAdmFsdWUgb3IgMFxuICAgICAgICAgICAgaWYgdj8gPT4gQHZhbHVlID0gdiBlbHNlIHYgPSBAdmFsdWVcbiAgICAgICAgICAgIGRlcyA9IEB2YWx1ZVxuICAgICAgICAgICAgQHRyYW5zaXRpb24uc3RhcnQgc3JjLCBkZXMsIGRvVHJhbnNpdGlvblxuXG4gICAgICAgIEBzZXQgKCtjb25maWcudmFsdWUgb3IgMCksIGNvbmZpZ1tcInRyYW5zaXRpb24taW5cIl0gb3IgZmFsc2VcbiAgICAgICAgQFxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgXFxsb2FkLCAoLT5cbiAgICAgICAgZm9yIG5vZGUgaW4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcXC5sZEJhcikgPT5cbiAgICAgICAgICBpZiAhbm9kZS5sZEJhciA9PiBub2RlLmxkQmFyID0gbmV3IGxkQmFyIG5vZGVcbiAgICApLCBmYWxzZVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxkQmFyXG4iLCJleHBvcnQgcHJlc2V0cyA9XG4gICAgcmFpbmJvdzpcbiAgICAgICAgXCJ0eXBlXCI6ICdzdHJva2UnXG4gICAgICAgIFwicGF0aFwiOiAnTTEwIDEwTDkwIDEwJ1xuICAgICAgICBcInN0cm9rZVwiOiAnZGF0YTpsZGJhci9yZXMsZ3JhZGllbnQoMCwxLCNhNTUxZGYsI2ZkNTFhZCwjZmY3ZjgyLCNmZmI4NzQsI2ZmZWI5MCknXG4gICAgICAgIFwiYmJveFwiOiBcIjEwIDEwIDgwIDEwXCJcbiAgICBlbmVyZ3k6XG4gICAgICAgIFwidHlwZVwiOiAnZmlsbCdcbiAgICAgICAgXCJwYXRoXCI6ICdNMTUgNUw4NSA1QTUgNSAwIDAgMSA4NSAxNUwxNSAxNUE1IDUgMCAwIDEgMTUgNSdcbiAgICAgICAgXCJzdHJva2VcIjogXFwjZjAwXG4gICAgICAgIFwiZmlsbFwiOiAnZGF0YTpsZGJhci9yZXMsZ3JhZGllbnQoNDUsMiwjNGU5LCM4ZmIsIzRlOSknXG4gICAgICAgIFwiZmlsbC1kaXJcIjogXCJsdHJcIlxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZFwiOiBcXCM0NDRcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAxXG4gICAgICAgIFwiYmJveFwiOiBcIjEwIDUgODAgMTBcIlxuICAgIHN0cmlwZTpcbiAgICAgICAgXCJ0eXBlXCI6ICdmaWxsJ1xuICAgICAgICBcInBhdGhcIjogJ00xNSA1TDg1IDVBNSA1IDAgMCAxIDg1IDE1TDE1IDE1QTUgNSAwIDAgMSAxNSA1J1xuICAgICAgICBcInN0cm9rZVwiOiBcXCNmMDBcbiAgICAgICAgXCJmaWxsXCI6ICdkYXRhOmxkYmFyL3JlcyxzdHJpcGUoIzI1YiwjNThlLDEpJ1xuICAgICAgICBcImZpbGwtZGlyXCI6IFwibHRyXCJcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmRcIjogXFwjZGRkXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogMVxuICAgICAgICBcImJib3hcIjogXCIxMCA1IDgwIDEwXCJcbiAgICB0ZXh0OlxuICAgICAgICBcInR5cGVcIjogJ2ZpbGwnXG4gICAgICAgIFwiaW1nXCI6IFwiXCJcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjcwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDcwIDIwXCI+PHRleHQgeD1cIjM1XCIgeT1cIjEwXCIgdGV4dC1hbmNob3I9XCJtaWRkbGVcIiBkb21pbmFudC1iYXNlbGluZT1cImNlbnRyYWxcIiBmb250LWZhbWlseT1cImFyaWFsXCI+TE9BRElORzwvdGV4dD48L3N2Zz5cIlwiXCJcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAxLjNcbiAgICAgICAgXCJwYXR0ZXJuLXNpemVcIjogMTAwXG4gICAgICAgIFwiZmlsbC1kaXJcIjogXCJsdHJcIlxuICAgICAgICBcImltZy1zaXplXCI6IFwiNzAsMjBcIlxuICAgICAgICBcImJib3hcIjogXCIwIDAgNzAgMjBcIlxuICAgIGxpbmU6XG4gICAgICAgIFwidHlwZVwiOiAnc3Ryb2tlJ1xuICAgICAgICBcInBhdGhcIjogJ00xMCAxMEw5MCAxMCdcbiAgICAgICAgXCJzdHJva2VcIjogXFwjMjViXG4gICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IDNcbiAgICAgICAgXCJzdHJva2UtdHJhaWxcIjogXFwjZGRkXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsLXdpZHRoXCI6IDFcbiAgICAgICAgXCJiYm94XCI6IFwiMTAgMTAgODAgMTBcIlxuICAgIGZhbjpcbiAgICAgICAgXCJ0eXBlXCI6ICdzdHJva2UnXG4gICAgICAgIFwicGF0aFwiOiAnTTEwIDkwQTQwIDQwIDAgMCAxIDkwIDkwJ1xuICAgICAgICBcImZpbGwtZGlyXCI6IFxcYnR0XG4gICAgICAgIFwiZmlsbFwiOiBcXCMyNWJcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmRcIjogXFwjZGRkXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogM1xuICAgICAgICBcInN0cm9rZS1kaXJcIjogXFxub3JtYWxcbiAgICAgICAgXCJzdHJva2VcIjogXFwjMjViXG4gICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IFxcM1xuICAgICAgICBcInN0cm9rZS10cmFpbFwiOiBcXCNkZGRcbiAgICAgICAgXCJzdHJva2UtdHJhaWwtd2lkdGhcIjogMC41XG4gICAgICAgIFwiYmJveFwiOiBcIjEwIDUwIDgwIDQwXCJcbiAgICBjaXJjbGU6XG4gICAgICAgIFwidHlwZVwiOiAnc3Ryb2tlJ1xuICAgICAgICBcInBhdGhcIjogJ001MCAxMEE0MCA0MCAwIDAgMSA1MCA5MEE0MCA0MCAwIDAgMSA1MCAxMCdcbiAgICAgICAgXCJmaWxsLWRpclwiOiBcXGJ0dFxuICAgICAgICBcImZpbGxcIjogXFwjMjViXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6IFxcI2RkZFxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDNcbiAgICAgICAgXCJzdHJva2UtZGlyXCI6IFxcbm9ybWFsXG4gICAgICAgIFwic3Ryb2tlXCI6IFxcIzI1YlxuICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBcXDNcbiAgICAgICAgXCJzdHJva2UtdHJhaWxcIjogXFwjZGRkXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsLXdpZHRoXCI6IDAuNVxuICAgICAgICBcImJib3hcIjogXCIxMCAxMCA4MCA4MFwiXG4gICAgYnViYmxlOlxuICAgICAgICBcInR5cGVcIjogJ2ZpbGwnXG4gICAgICAgIFwicGF0aFwiOiAnTTUwIDEwQTQwIDQwIDAgMCAxIDUwIDkwQTQwIDQwIDAgMCAxIDUwIDEwJ1xuICAgICAgICBcImZpbGwtZGlyXCI6IFxcYnR0XG4gICAgICAgIFwiZmlsbFwiOiAnZGF0YTpsZGJhci9yZXMsYnViYmxlKCMzOWQsI2NlZiknXG4gICAgICAgIFwicGF0dGVybi1zaXplXCI6IFwiMTUwXCJcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmRcIjogXFwjZGRkXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogMlxuICAgICAgICBcInN0cm9rZS1kaXJcIjogXFxub3JtYWxcbiAgICAgICAgXCJzdHJva2VcIjogXFwjMjViXG4gICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IFxcM1xuICAgICAgICBcInN0cm9rZS10cmFpbFwiOiBcXCNkZGRcbiAgICAgICAgXCJzdHJva2UtdHJhaWwtd2lkdGhcIjogMC41XG4gICAgICAgIFwiYmJveFwiOiBcIjEwIDEwIDgwIDgwXCJcbiIsIi8vZMOpZmluaXRpb24gZGVzIHZhcmlhYmxlc1xubGV0IExpc3RlUGx1ZyA9IFtdLFxuICAgIHZhbGlkID0gZmFsc2U7XG5cbi8vIERlY2xhcmF0aW9uIGQnw6l2ZW5lbWVudCBhdmFudCBjaGFyZ2VtZW50IGRlIGwgYXBhZ2VcbiQoJyN2YWxpZC1hbGwtcGx1ZycpLmhpZGUoKTtcbi8vZGV0ZWN0aW9uIHNpIGxlIGJyb3dzZXIgZ8OocmUgbGUgZHJhZyZkcm9wXG52YXIgaXNBZHZhbmNlZFVwbG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmV0dXJuICgoJ2RyYWdnYWJsZScgaW4gZGl2KSB8fCAoJ29uZHJhZ3N0YXJ0JyBpbiBkaXYgJiYgJ29uZHJvcCcgaW4gZGl2KSkgJiYgJ0Zvcm1EYXRhJyBpbiB3aW5kb3cgJiYgJ0ZpbGVSZWFkZXInIGluIHdpbmRvdztcbn0oKTtcbnZhciAkZm9ybSA9ICQoJy5ib3gnKTtcbnZhciAkaW5wdXQgPSAkZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLFxuICAgICRsYWJlbCA9ICRmb3JtLmZpbmQoJ2xhYmVsJyksXG4gICAgc2hvd0ZpbGVzID0gZnVuY3Rpb24gKGZpbGVzKSB7XG4gICAgICAgICRsYWJlbC50ZXh0KGZpbGVzLmxlbmd0aCA+IDEgPyAoJGlucHV0LmF0dHIoJ2RhdGEtbXVsdGlwbGUtY2FwdGlvbicpIHx8ICcnKS5yZXBsYWNlKCd7Y291bnR9JywgZmlsZXMubGVuZ3RoKSA6IGZpbGVzWzBdLm5hbWUpO1xuICAgIH07XG4vL2lkZW50aWZpY2F0aW9uIGRlIGxhIHByb2dyZXNzIGJhclxucHJnYmFyID0gbmV3IGxkQmFyKFwiI3Rlc3QtcHJvZ3Jlc3NcIik7XG4vL2Fqb3V0ZXIgdW4gcGx1Z1xuXG4kKCcjYWRkLWZvcm0tcGx1ZycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAvLyAkKCcjY2FyZC1jb250ZW50LXBsdWcnKS5hcHBlbmQoXCJ0ZXN0XCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKCQoJy5jb250ZW50LW5hbWUtZHJhZy1wbHVnJykpXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICQoJyNpbnB1dC1uYW1lLXBsdWcnKS52YWwoJycpO1xuXG4gICAgICAgIGRyb3BwZWRGaWxlcyA9IGZhbHNlO1xuICAgICAgICAkZm9ybS5yZW1vdmVDbGFzcygnaXMtc3VjY2VzcycpO1xuICAgICAgICAkKCcubGFiZWwtZHJvcCcpLmNzcygnZm9udC13ZWlnaHQnLCAnJyk7XG4gICAgICAgICQoJy5sYWJlbC1kcm9wJykuaHRtbCgnPHN0cm9uZz4gQ2hvb3NlIGEgZmlsZSA8L3N0cm9uZz4gPHNwYW4gY2xhc3M9XCJib3hfX2RyYWduZHJvcFwiPm9yIGRyYWcgaXQgaGVyZSA8L3NwYW4+LjwvbGFiZWw+Jyk7XG4gICAgICAgICQoJyNjb250ZW50LW5hbWUtZHJhZy1wbHVnJykuc2hvdygpO1xuICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn0pXG4vL29uIG91dnJlIGxlIGZvcm0gcG91ciBham91dGVyXG5cbiQoJyNhZGRQbHVncycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG59KTtcbmlmIChpc0FkdmFuY2VkVXBsb2FkKSB7XG4gICAgdmFyIGRyb3BwZWRGaWxlcyA9IGZhbHNlO1xuICAgICRmb3JtLmFkZENsYXNzKCdoYXMtYWR2YW5jZWQtdXBsb2FkJyk7IC8vIGxldHRpbmcgdGhlIENTUyBwYXJ0IHRvIGtub3cgZHJhZyZkcm9wIGlzIHN1cHBvcnRlZCBieSB0aGUgYnJvd3NlclxuICAgICRmb3JtLm9uKCdkcmFnIGRyYWdzdGFydCBkcmFnZW5kIGRyYWdvdmVyIGRyYWdlbnRlciBkcmFnbGVhdmUgZHJvcCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcbiAgICAkZm9ybS5vbignZHJhZ292ZXIgZHJhZ2VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkZm9ybS5hZGRDbGFzcygnaXMtZHJhZ292ZXInKTtcbiAgICB9KTtcbiAgICAkZm9ybS5vbignZHJhZ2xlYXZlIGRyYWdlbmQgZHJvcCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGZvcm0ucmVtb3ZlQ2xhc3MoJ2lzLWRyYWdvdmVyJyk7XG5cbiAgICB9KTtcbiAgICAkZm9ybS5vbignZHJvcCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGRyb3BwZWRGaWxlcyA9IGUub3JpZ2luYWxFdmVudC5kYXRhVHJhbnNmZXIuZmlsZXM7XG4gICAgICAgICRmb3JtLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgICAgICAkKCcubGFiZWwtZHJvcCcpLnRleHQoZHJvcHBlZEZpbGVzWzBdLm5hbWUpO1xuICAgICAgICAkKCcubGFiZWwtZHJvcCcpLmNzcygnZm9udC13ZWlnaHQnLCAnYm9sZCcpO1xuICAgIH0pO1xuICAgICRmb3JtLmNoYW5nZSgnZHJvcCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGRyb3BwZWRGaWxlcyA9IGUub3JpZ2luYWxFdmVudC5kYXRhVHJhbnNmZXIuZmlsZXM7XG4gICAgICAgICRmb3JtLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgIH0pO1xufVxuJGZvcm0ub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQoJyN2YWxpZC1wbHVnJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IFBsdWcgPSB7fTtcbiAgICBpZiAoJCgnI2lucHV0LW5hbWUtcGx1ZycpLnZhbCgpICE9IFwiXCIgJiYgZHJvcHBlZEZpbGVzKSB7XG5cbiAgICAgICAgJCgnI3ZhbGlkLWFsbC1wbHVnJykuc2hvdygpO1xuICAgICAgICBQbHVnWyduYW1lX3BsdWcnXSA9ICQoJyNpbnB1dC1uYW1lLXBsdWcnKS52YWwoKTtcblxuICAgICAgICAvLyBQYXJ0aSBkdSB0cmFpdGVtZW50IGR1IGRyYWcgYW4gZHJvcCBmaWxlXG4gICAgICAgIGlmICgkZm9ybS5oYXNDbGFzcygnaXMtdXBsb2FkaW5nJykpIHJldHVybiBmYWxzZTtcbiAgICAgICAgc2hvd0ZpbGVzKGRyb3BwZWRGaWxlcyk7XG4gICAgICAgICRmb3JtLmFkZENsYXNzKCdpcy11cGxvYWRpbmcnKS5yZW1vdmVDbGFzcygnaXMtZXJyb3InKTtcblxuICAgICAgICBpZiAoaXNBZHZhbmNlZFVwbG9hZCkge1xuICAgICAgICAgICAgdmFyIGFqYXhEYXRhID0gbmV3IEZvcm1EYXRhKCRmb3JtLmdldCgwKSk7XG5cbiAgICAgICAgICAgIGlmIChkcm9wcGVkRmlsZXMpIHtcbiAgICAgICAgICAgICAgICAkLmVhY2goZHJvcHBlZEZpbGVzLCBmdW5jdGlvbiAoaSwgZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICBhamF4RGF0YS5hcHBlbmQoJGlucHV0LmF0dHIoJ25hbWUnKSwgZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFBsdWcpO1xuICAgICAgICAgICAgICAgICAgICBQbHVnWydrZXlfcGx1ZyddID0gZmlsZS5uYW1lO1xuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhamF4RGF0YSk7XG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogJy9hbHN0b20vdXBsb2FkRmlsZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIC8qZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAnZmlsZScgOiBhamF4RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgJ2J1Y2tldCc6ICdhcHBsaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICd1cGxvYWRfcmVxdWVzdCc6IFwidXBsb2FkXCJcbiAgICAgICAgICAgICAgICB9LCovXG4gICAgICAgICAgICAgICAgeGhyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwZXJjZW50Q29tcGxldGUgPSAoZXZ0LmxvYWRlZCAvIGV2dC50b3RhbCkgKiAxMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9EbyBzb21ldGhpbmcgd2l0aCB1cGxvYWQgcHJvZ3Jlc3MgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZ2Jhci5zZXQocGVyY2VudENvbXBsZXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGVyY2VudENvbXBsZXRlID09IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3Rlc3QtcHJvZ3Jlc3NcIikuYWRkQ2xhc3MoJ2lzLWJsaW5rJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4aHI7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGRhdGE6IGFqYXhEYXRhLFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJGZvcm0ucmVtb3ZlQ2xhc3MoJ2lzLXVwbG9hZGluZycpO1xuICAgICAgICAgICAgICAgICAgICAkKFwiI3Rlc3QtcHJvZ3Jlc3NcIikucmVtb3ZlQ2xhc3MoJ2lzLWJsaW5rJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgTGlzdGVQbHVnLnB1c2goUGx1Zyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFBsdWcpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgJGZvcm0uYWRkQ2xhc3MoZGF0YS5zdWNjZXNzID09IHRydWUgPyAnaXMtc3VjY2VzcycgOiAnaXMtZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2NvbnRlbnQtbmFtZS1kcmFnLXBsdWcnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNzaG93LWRvbmUtcGx1ZycpLmFwcGVuZChcIjxzcGFuIGNsYXNzPSdjb250ZW50LWtleS1uYW1lLXBsdWcnPjxwPlwiICsgUGx1Zy5uYW1lX3BsdWcgKyBcIjwvcD48cD5cIiArIFBsdWcua2V5X3BsdWcgKyBcIjwvcD48YSBpZD0nZGVsZXRlLVwiICsgUGx1Zy5rZXlfcGx1ZyArIFwiJz48aSBjbGFzcz0nZmFzIGZhLXRyYXNoLWFsdCBwb3ViZWxsZSc+PC9pPjwvYT48L3NwYW4+XCIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKExpc3RlUGx1Zyk7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIExvZyB0aGUgZXJyb3IsIHNob3cgYW4gYWxlcnQsIHdoYXRldmVyIHdvcmtzIGZvciB5b3VcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb3JyeSBib2J5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGlmcmFtZU5hbWUgPSAndXBsb2FkaWZyYW1lJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgJGlmcmFtZSA9ICQoJzxpZnJhbWUgbmFtZT1cIicgKyBpZnJhbWVOYW1lICsgJ1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj48L2lmcmFtZT4nKTtcblxuICAgICAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkaWZyYW1lKTtcbiAgICAgICAgICAgICRmb3JtLmF0dHIoJ3RhcmdldCcsIGlmcmFtZU5hbWUpO1xuXG4gICAgICAgICAgICAkaWZyYW1lLm9uZSgnbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoJGlmcmFtZS5jb250ZW50cygpLmZpbmQoJ2JvZHknKS50ZXh0KCkpO1xuICAgICAgICAgICAgICAgICRmb3JtXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtdXBsb2FkaW5nJylcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKGRhdGEuc3VjY2VzcyA9PSB0cnVlID8gJ2lzLXN1Y2Nlc3MnIDogJ2lzLWVycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ3RhcmdldCcpO1xuICAgICAgICAgICAgICAgIGlmICghZGF0YS5zdWNjZXNzKSAkZXJyb3JNc2cudGV4dChkYXRhLmVycm9yKTtcbiAgICAgICAgICAgICAgICAkZm9ybS5yZW1vdmVBdHRyKCd0YXJnZXQnKTtcbiAgICAgICAgICAgICAgICAkaWZyYW1lLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydCgnUGxlYXNlIGVudGVyIG5hbWUgJiBmaWxlIHBsdWcnKVxuICAgIH1cblxuXG59KVxuXG4kKCcjdGVzdC11cGxvYWQnKS5vbihcImNsaWNrXCIsIFwiYnV0dG9uXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZmlsZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKS5maWxlcztcbiAgICB2YXIgdGVtcERlc3RpbmF0aW9uID0gXCJ0ZXN0XCJcbiAgICB2YXIgbmFtZUZpbGUgPSBcImluaXRcIlxuICAgIHZhciB1cGxvYWRTdGF0dXMgPSBcIlBFTkRJTkdcIlxuICAgIC8vT24gZHJhZyBldCBkcm9wXG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9yZXF1ZXN0RmlsZScsXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgJ2J1Y2tldCc6ICdhcHBsaWNhdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0ZW1wRGVzdGluYXRpb24gPSByZXNwb25zZS5wYXRoXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogJy9hbHN0b20vdXBsb2FkRmlsZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2J1Y2tldCc6ICdhcHBsaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICd1cGxvYWRfcmVxdWVzdCc6IFwidXBsb2FkXCIsXG4gICAgICAgICAgICAgICAgICAgICdmaWxlbmFtZSc6IG5hbWVGaWxlLFxuICAgICAgICAgICAgICAgICAgICAndGVtcERlc3RpbmF0aW9uJzogdGVtcERlc3RpbmF0aW9uXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vYXNrIGZvciB0aGUgc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsiLCIvLyBWaWRhZ2UgZGVzIGlucHV0cyBhdXggY2hhbmdlbWVudCBkZSBzZWxlY3RcclxuLy8gJCgnc2VsZWN0W25hbWU9XCJ0cmFpbnNbcHJvamVjdHNdXCJdLCBzZWxlY3RbbmFtZT1cInRyYWluc1t0cmFpblR5cGVdXCJdJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICQoJ2lucHV0W25hbWU9XCJ0cmFpbnNbbmFtZV1cIl0nKS52YWwoJycpO1xyXG4vLyB9KTtcclxuXHJcbi8qTWFzcXVhZ2UgZGUgY2VydGFpbnMgw6lsZW1lbnQgKi9cclxuJCgnI2NyZWF0ZS1lcnRtcy0xJykuaGlkZSgpO1xyXG4kKCcjY3JlYXRlLWVydG1zLTInKS5oaWRlKCk7XHJcbiQoXCIjY3JlYXRlLWVydG1zLXRyYWluLTFcIikuaGlkZSgpO1xyXG4kKCcjY3JlYXRlX3NvdXN0eXBlJykuaGlkZSgpO1xyXG4kKCcjY3JlYXRlX3R5cGUnKS5oaWRlKCk7XHJcbiQoJyNtb2RhbC1ib2R5JykuaGlkZSgpO1xyXG4kKCcjbW9kYWxfYmFzZWxpbmVfZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuJCgnI2Nsb3NlLW1vZGFsLWZvcm0tYmFzZWxpbmUtdHJhaW4nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjbW9kYWxfYmFzZWxpbmVfZXF1aXBlbWVudCcpLmhpZGUoKTtcclxufSlcclxuZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpKyspIHtcclxuICAgICQoJyNidG4tYmFzZWxpbmUtJyArIGkpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbn1cclxubGV0IGlkRXF1aXBtZW50ID0gXCJcIixcclxuICAgIGluZGV4RVZDO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IG5vbWJyZV91cmwgPSBleHRyYWl0Tm9tYnJlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSAnL2Fsc3RvbS9JbnN0YW5jZUJhc2VsaW5lLycgKyBub21icmVfdXJsKSB7XHJcblxyXG4gICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tCYXNlbGluZVwiLCApLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAkKCcjc2VsZWN0X2Jhc2VsaW5lXzEnKS5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgICAgICQoJyNzZWxlY3RfYmFzZWxpbmVfMicpLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgJCgnI3NlbGVjdF9iYXNlbGluZV8xJykudmFsKCcnKTtcclxuICAgICAgICAgICAgJCgnI3NlbGVjdF9iYXNlbGluZV8yJykudmFsKCcnKTtcclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufSlcclxuXHJcbiQoJyNzZWxlY3RfdHJhaW4nKS5zaG93KCk7XHJcbiQoJyNzZWxlY3RfbG9jb21vdGl2ZScpLnNob3coKTtcclxuXHJcbmxldCBjdXJyZW50X2Nob2ljZSA9IFwiXCIsXHJcbiAgICBlcnRtc19sZWZ0ID0gZmFsc2UsXHJcbiAgICBlcnRtc19taWRkbGUgPSBmYWxzZSxcclxuICAgIGVydG1zX3JpZ2h0ID0gZmFsc2U7XHJcblxyXG4kKCcjY2xvc2UtbW9kYWwtYmFzZWxpbmUtMScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChlcnRtc19yaWdodCA9PSB0cnVlKSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuYWRkQ2xhc3MoJ29mZnNldC1tZC02Jyk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuaGlkZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgICBlcnRtc19sZWZ0ID0gZmFsc2U7XHJcbn0pXHJcbiQoJyNjbG9zZS1tb2RhbC1iYXNlbGluZS0yJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuaGlkZSgpO1xyXG4gICAgZXJ0bXNfcmlnaHQgPSBmYWxzZTtcclxufSlcclxuJCgnI2VydG1zLXRyYWluLTEnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBlcnRtc19sZWZ0ID0gdHJ1ZTtcclxuICAgIGVydG1zX21pZGRsZSA9IGZhbHNlO1xyXG4gICAgLy9sJ2VydG1zIGRlIGdhdWNoZSBzZWxlY3Rpb25uZXJcclxuICAgICQoJyNlcnRtcy10cmFpbi0xJykuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICQoJyNlcnRtcy10cmFpbi0yJykucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICQoJyNsYWJlbC1iYXNlbGluZS0xJykudGV4dCgnQmFzZWxpbmUgbGVmdCcpO1xyXG4gICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykucmVtb3ZlQ2xhc3MoJ29mZnNldC1tZC0zJyk7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5zaG93KCk7XHJcbiAgICBpZiAoZXJ0bXNfcmlnaHQgPT0gZmFsc2UpIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5oaWRlKCk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykucmVtb3ZlQ2xhc3MoJ29mZnNldC1tZC02Jyk7XHJcbiAgICB9XHJcblxyXG5cclxufSk7XHJcbiQoJyNlcnRtcy10cmFpbi0yJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gbCdlcnRtcyBkdSBtaWxpZXUgc2VsZWN0aW9ubmVyXHJcbiAgICBlcnRtc19sZWZ0ID0gZmFsc2U7XHJcbiAgICBlcnRtc19yaWdodCA9IGZhbHNlO1xyXG4gICAgZXJ0bXNfbWlkZGxlID0gdHJ1ZTtcclxuICAgICQoJyNlcnRtcy10cmFpbi0yJykuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICQoJyNlcnRtcy10cmFpbi0xJykucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICQoJyNlcnRtcy10cmFpbi0zJykucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICQoJyNsYWJlbC1iYXNlbGluZS0xJykudGV4dCgnQmFzZWxpbmUgbWlkbGUnKTtcclxuICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLmhpZGUoKTtcclxuICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLnNob3coKTtcclxuICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLmFkZENsYXNzKCdvZmZzZXQtbWQtMycpO1xyXG5cclxufSk7XHJcbiQoJyNlcnRtcy10cmFpbi0zJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gbCdlcnRtcyBkZSBkcm9pdGUgc2VsZWN0aW9ubmVyXHJcbiAgICAkKCcjZXJ0bXMtdHJhaW4tMycpLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICBlcnRtc19yaWdodCA9IHRydWU7XHJcbiAgICBlcnRtc19taWRkbGUgPSBmYWxzZTtcclxuICAgICQoJyNsYWJlbC1iYXNlbGluZS0yJykudGV4dCgnQmFzZWxpbmUgcmlnaHQnKTtcclxuICAgIGlmIChlcnRtc19sZWZ0ID09IHRydWUgJiYgZXJ0bXNfbWlkZGxlID09IGZhbHNlKSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykucmVtb3ZlQ2xhc3MoJ29mZnNldC1tZC0zJyk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykucmVtb3ZlQ2xhc3MoJ29mZnNldC1tZC02Jyk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuc2hvdygpO1xyXG4gICAgfSBlbHNlIGlmIChlcnRtc19yaWdodCA9PSB0cnVlICYmIGVydG1zX2xlZnQgPT0gZmFsc2UpIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5yZW1vdmVDbGFzcygnb2Zmc2V0LW1kLTMnKTtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5oaWRlKCk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuYWRkQ2xhc3MoJ29mZnNldC1tZC02Jyk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgICQoJyNlcnRtcy10cmFpbi0yJykucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxufSk7XHJcblxyXG5cclxuJCgnI2VydG1zLWxvY28tMScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGVydG1zX2xlZnQgPSB0cnVlO1xyXG4gICAgaWYgKGVydG1zX3JpZ2h0ID09IHRydWUpIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5yZW1vdmVDbGFzcygnb2Zmc2V0LW1kLTYnKTtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLnNob3coKTtcclxuICAgIH1cclxuICAgICQoJyNsYWJlbC1iYXNlbGluZS0xJykudGV4dCgnQmFzZWxpbmUgbGVmdCcpO1xyXG4gICAgJCgnI2VydG1zLWxvY28tMScpLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjZXJ0bXMtbG9jby0yJykucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICQoJyNidG4tYmFzZWxpbmUtMScpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAkKCcjYnRuLWJhc2VsaW5lLTMnKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG59KTtcclxuJCgnI2VydG1zLWxvY28tMicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGVydG1zX3JpZ2h0ID0gdHJ1ZTtcclxuICAgICQoJyNsYWJlbC1iYXNlbGluZS0yJykudGV4dCgnQmFzZWxpbmUgcmlnaHQnKTtcclxuICAgICQoJyNidG4tYmFzZWxpbmUtMycpLmNzcygnb3BhY2l0eScsICcxJylcclxuICAgICQoJyNidG4tYmFzZWxpbmUtMScpLmNzcygnb3BhY2l0eScsICcwJylcclxuICAgICQoJyNlcnRtcy1sb2NvLTInKS5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCgnI2VydG1zLWxvY28tMScpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICBpZiAoZXJ0bXNfbGVmdCA9PSB0cnVlKSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykucmVtb3ZlQ2xhc3MoJ29mZnNldC1tZC02Jyk7XHJcblxyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnNob3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuYWRkQ2xhc3MoJ29mZnNldC1tZC02Jyk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuc2hvdygpO1xyXG5cclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuLy9SZWN1cGVyZSBsZSBzZWxlY3QgZGUgbGEgYmFzZWxpbmUgZXQgbGUgbWV0IGVuIHZpc3VlbFxyXG4kKCcjYWRkLWJhc2VsaW5lLTEnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICBpZiAoZXJ0bXNfbWlkZGxlKSB7XHJcbiAgICAgICAgJCgnI2VydG1zLXRyYWluLTMnKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG4gICAgICAgICQoJyNlcnRtcy10cmFpbi0xJykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuICAgIH0gZWxzZSBpZiAoZXJ0bXNfbGVmdCkge1xyXG4gICAgICAgICQoJyNlcnRtcy10cmFpbi0yJykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuICAgIH1cclxuICAgIC8vICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLmhpZGUoKTtcclxuICAgIGxldCBpZEJhc2VsaW5lID0gJCgnI3NlbGVjdF9iYXNlbGluZV8xIG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpO1xyXG4gICAgJCgnI3RpdGxlX2Jhc2VsaW5lX21vZGFsJykuaHRtbCgkKCcjc2VsZWN0X2Jhc2VsaW5lXzEgb3B0aW9uOnNlbGVjdGVkJykudGV4dCgpKTtcclxuICAgIC8vICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0Jykuc2hvdygpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL0NoZWNrRXF1aXBlbWVudHMvJyArIGlkQmFzZWxpbmUsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI21vZGFsX2Jhc2VsaW5lX2VxdWlwZW1lbnQnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoJ29wYWNpdHknLCAnMC40Jyk7XHJcbiAgICAgICAgICAgIGxldCBFcXVpcG1lbnRzID0gSlNPTi5wYXJzZShyZXNwb25zZS5lcXVpcG1lbnRzKTtcclxuXHJcbiAgICAgICAgICAgIEVxdWlwbWVudHMuZm9yRWFjaChDb3VudE51bWJlckVxdWlwdCk7XHJcbiAgICAgICAgICAgIEVxdWlwbWVudHMuZm9yRWFjaChGaW5kSW5kZXhFdmMpO1xyXG4gICAgICAgICAgICBFcXVpcG1lbnRzLmZvckVhY2gocmV0dXJuSW5kZXhFbGVtZW50KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KVxyXG5cclxuJCgnI2FkZC1iYXNlbGluZS0yJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJyNlcnRtcy10cmFpbi0yJykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuXHJcbiAgICAvLyAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5oaWRlKCk7XHJcbiAgICBsZXQgbmFtZV9iYXNlbGluZV8xID0gJCgnI3NlbGVjdF9iYXNlbGluZV8yIG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpO1xyXG4gICAgY29uc29sZS5sb2cobmFtZV9iYXNlbGluZV8xKVxyXG4gICAgLy8gJCgnI2NvbnRlbnQtbmFtZS1iYXNlbGluZS0xJykuYXBwZW5kKFwiPGg1PlwiICsgbmFtZV9iYXNlbGluZV8xICsgXCI8L2g1PlwiKVxyXG5cclxufSlcclxuXHJcbi8vIFJlcXVldGUgQUpBWCBwb3VyIHJlbXBsaXIgbGUgZm9ybXVsYWlyZSBkJ8OpcXVpcGVtZW50IGF2ZWMgbCdlcXVpcGVtZW50IHNlbGVjdGlvbm5lclxyXG4kKCcjc2hvdy1lcXVpcG1lbnQgJykub24oJ2NsaWNrJywgJy5kZXNjcmlwdGlvbiA+IC5jb250ZW50LWRlc2NyaXB0aW9uLWR0ciA+IGJ1dHRvbicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcjbW9kYWxfYmFzZWxpbmVfZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuICAgICQoJy5tYWluLWVydG1zJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG5cclxuICAgIGlkRXF1aXBtZW50ID0gZXh0cmFpdE5vbWJyZSgkKHRoaXMpWzBdW1wiaWRcIl0pXHJcbiAgICB2YXIgJHRoaXMgPSAkKFwiI2Zvcm1fZXF1aXBlbWVudF9lZGl0X2Jhc2VsaW5lXCIpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vZWRpdC1lcXVpcG1lbnQtYmFzZWxpbmUvJyArIGlkRXF1aXBtZW50LFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfVHlwZScpLnZhbChyZXNwb25zZVtcInR5cGVcIl1bXCJpZFwiXSk7XHJcbiAgICAgICAgICAgIGRhdGFbJCgnI2VxdWlwZW1lbnRfVHlwZScpLmF0dHIoJ25hbWUnKV0gPSAkKCcjZXF1aXBlbWVudF9UeXBlJykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrU3VidHlwZVwiLCBkYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgLy9WaWRhZ2UgY2hhbXAgc291c3R5cGVcclxuICAgICAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcubWFpbi1lcnRtcycpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL1JlbXBsaSBpbnB1dCBhdmVjIHZhbGV1ciByZWN1IGRlIGwnZXF1aXBlbWVudFxyXG4gICAgICAgICAgICAgICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9UeXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X3NvdXNfdHlwZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VbXCJTb3VzVHlwZVwiXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiU291c1R5cGVcIl1bXCJpZFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9EVFJfYm9hcmQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiZFRSQm9hcmRcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9JbmRpY2VfRFRSJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcImluZGljZURUUlwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X051bV9zZXJpZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJudW1TZXJpZVwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuLy9SZW1wbGlyIGxlcyBpbnB1dHMgYXZlYyBsZXMgbm91dmVsbGVzIHZhbGV1cnNcclxuJCgnI3NvdW1pc3Npb24tZXF1aXBlbWVudC1lZGl0LWJhc2VsaW5lJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG5cclxuICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbmFtZSA9IHRoYXQuYXR0cignbmFtZScpLFxyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoYXQudmFsKCk7XHJcbiAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxufSlcclxubGV0IG5ld19lcXVpcG1lbnRfbnVtID0gXCJcIixcclxuICAgIHRvdGFsRXF1aXB0ID0gXCJcIixcclxuICAgIG5ld19lcXVpcG1lbnRfbnVtX3NlcmllID0gW107XHJcblxyXG4vLyBTb3VtaXNzaW9uIGZvcm11bGFpcmUgZGUgdHJhaW5cclxuJCgnI2Zvcm1fZXF1aXBlbWVudF9lZGl0X2Jhc2VsaW5lJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG5cclxuICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbmFtZSA9IHRoYXQuYXR0cignbmFtZScpLFxyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoYXQudmFsKCk7XHJcblxyXG4gICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgIH0pXHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LWJhc2VsaW5lLycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICB0eXBlOiAkdGhpcy5hdHRyKCdtZXRob2QnKSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGVxdWlwZW1lbnQ6IGRhdGFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbF9iYXNlbGluZV9lcXVpcGVtZW50Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAkKCcjYnRuLWFkZC1udW1iZXItc2VyaWUnICsgaWRFcXVpcG1lbnQpLnJlcGxhY2VXaXRoKFwiPHA+XCIgKyByZXNwb25zZS5udW1TZXJpZSArIFwiPC9wPlwiKVxyXG4gICAgICAgICAgICBuZXdfZXF1aXBtZW50X251bV9zZXJpZS5wdXNoKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgbmV3X2VxdWlwbWVudF9udW0rKztcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pXHJcbi8vVmFsaWRlciBsJ2luc3RhbmNlIGRlcyBlcXVpcGVtZW50c1xyXG4kKCcjdmFsaWQtYmFzZWxpbmUtdHJhaW4nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAobmV3X2VxdWlwbWVudF9udW0gIT0gdG90YWxFcXVpcHQpIHtcclxuICAgICAgICBhbGVydCgncGxlYXNlIGVudGVyIG51bSBzZXJpZSBiZWZvcmUgaW5zdGFuY2UgYmFzZWxpbmUnKVxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgbGV0IGlkX3RyYWluID0gZXh0cmFpdE5vbWJyZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgICAgIGxldCBpZF9iYXNlbGluZSA9ICQoJyNzZWxlY3RfYmFzZWxpbmVfMSBvcHRpb246c2VsZWN0ZWQnKS52YWwoKTtcclxuICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvYWxzdG9tL2FkZEJhc2VsaW5lSW5zdGFuY2llcicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgaWRfdHJhaW46IGlkX3RyYWluLFxyXG4gICAgICAgICAgICAgICAgYmFzZWxpbmU6IGlkX2Jhc2VsaW5lLFxyXG4gICAgICAgICAgICAgICAgbmV3X2VxdWlwdDogbmV3X2VxdWlwbWVudF9udW1fc2VyaWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvYWxzdG9tL2Jhc2VsaW5lLXRyYWluL1wiICsgcmVzcG9uc2UuaWRiYXNlbGluZTtcclxuICAgICAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0pXHJcbi8vIFJlcXVldGUgQUpBWCBwb3VyIHJlbXBsaXIgbGUgZm9ybXVsYWlyZSBkJ8OpcXVpcGVtZW50IGF2ZWMgbCdlcXVpcGVtZW50IHNlbGVjdGlvbm5lciBpbnN0YW5jaWVyXHJcbiQoJy5jb250ZW50LWRlc2NyaXB0aW9uLWR0ci1pbnN0YW5jZScpLm9uKCdjbGljaycsICcuZWRpdC1kZWxldGUtZXF1aXBlbWVudCA+IGEnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnLm1haW4tZXJ0bXMnKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgaWRFcXVpcG1lbnQgPSBleHRyYWl0Tm9tYnJlKCQodGhpcylbMF1bXCJjbGFzc0xpc3RcIl1bMF0pXHJcbiAgICB2YXIgJHRoaXMgPSAkKFwiI2Zvcm1fZXF1aXBlbWVudF9lZGl0X2luc3RhbmNlXCIpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vZWRpdC1lcXVpcG1lbnQtaW5zdGFuY2UvJyArIGlkRXF1aXBtZW50LFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9UeXBlJykudmFsKHJlc3BvbnNlW1widHlwZVwiXVtcImlkXCJdKTtcclxuICAgICAgICAgICAgZGF0YVskKCcjZXF1aXBlbWVudF9UeXBlJykuYXR0cignbmFtZScpXSA9ICQoJyNlcXVpcGVtZW50X1R5cGUnKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tTdWJ0eXBlXCIsIGRhdGEpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAvL1ZpZGFnZSBjaGFtcCBzb3VzdHlwZVxyXG4gICAgICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vUmVtcGxpIGlucHV0IGF2ZWMgdmFsZXVyIHJlY3UgZGUgbCdlcXVpcGVtZW50XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X1R5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfc291c190eXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVtcIlNvdXNUeXBlXCJdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJTb3VzVHlwZVwiXVtcImlkXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X0RUUl9ib2FyZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJkVFJCb2FyZFwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X0luZGljZV9EVFInOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiaW5kaWNlRFRSXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfTnVtX3NlcmllJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcIm51bVNlcmllXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLnNob3coKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4vL0Zvcm11bGFpcmUgZCdlZGl0IGRlIGwnw6lxdWlwZW1lbnRcclxuJCgnI2Zvcm1fZXF1aXBlbWVudF9lZGl0X2luc3RhbmNlJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcubWFpbi1lcnRtcycpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI2Zvcm1fZXF1aXBlbWVudF9lZGl0JykuY3NzKFwib3BhY2l0eVwiLCBcIjAuNFwiKTtcclxuXHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgIGxldCBkYXRhID0ge30sXHJcbiAgICAgICAgYWN0aW9uO1xyXG4gICAgLy9SZW1wbGkgZGF0YSBhIHBhcnRpciBkZXMgdmFsZXVyIGRlcyBpbnB1dHNcclxuICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbmFtZSA9IHRoYXQuYXR0cignbmFtZScpXHJcblxyXG4gICAgICAgIGlmIChuYW1lICE9IChcImVxdWlwZW1lbnRbX3Rva2VuXVwiKSAmJiBuYW1lICE9IChcInNvdW1pc3Npb25fZXF1aXBlbWVudFwiKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoYXQudmFsKCk7XHJcbiAgICAgICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LWluc3RhbmNlLycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAnZXF1aXBlbWVudCc6IGRhdGEsXHJcbiAgICAgICAgICAgIFwic291bWlzc2lvbl9lZGl0X2VxdWlwZW1lbnRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgJ2lkZXF1aXBtZW50JzogaWRFcXVpcG1lbnRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0Jykuc2hvdygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBGaW5kSW5kZXhFdmMoZWxlbWVudCwgaW5kZXgsIGFycmF5KSB7XHJcbiAgICBpbmRleCA9IGVsZW1lbnRbJ2lkJ107XHJcbiAgICBpZiAoZWxlbWVudFsndHlwZSddWydpZCddID09IFwiMVwiICYmIChlbGVtZW50WydTdGF0dXMnXSA9PSB0cnVlKSkge1xyXG5cclxuICAgICAgICAkKFwiI3Nob3ctZXF1aXBtZW50XCIpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVR5cGUoNCwgZWxlbWVudFsndHlwZSddWyduYW1lJ10pKTtcclxuICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFkZENsYXNzKFwiZGVzY3JpcHRpb24tU3VidHlwZUNhcmRcIilcclxuICAgICAgICBpZiAoZWxlbWVudFsnU291c1R5cGUnXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCBlbGVtZW50WydTb3VzVHlwZSddWyduYW1lJ10pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb250ZW50LWRlc2NyaXB0aW9uLWR0clwiIGlkPVwiY29udGVudC1kZXNjcmlwdGlvbi0nICtcclxuICAgICAgICAgICAgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZFRSQm9hcmRcIl0gKyAnPC9wPicpXHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiaW5kaWNlRFRSXCJdICsgJzwvcD4nKVxyXG4gICAgICAgIGlmIChlbGVtZW50WydudW1TZXJpZSddID09IFwiXCIpIHtcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIHN0eWxlPVwicGFkZGluZzogMnB4XCIgaWQgPSBcImJ0bi1hZGQtbnVtYmVyLXNlcmllJyArIGVsZW1lbnRbJ2lkJ10gKyAnXCIgPiBBZGQgbnVtYmVyIG9mIHNlcmllIDwvYnV0dG9uPicpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50WydudW1TZXJpZSddICsgJzwvcD4nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbmRleEVWQyA9ICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJldHVybkluZGV4RWxlbWVudChlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcclxuXHJcblxyXG4gICAgaW5kZXggPSBlbGVtZW50WydpZCddO1xyXG5cclxuICAgIGlmICgoZWxlbWVudFsnU3RhdHVzJ10gPT0gdHJ1ZSkgJiYgZWxlbWVudFsndHlwZSddWydpZCddICE9IFwiMVwiKSB7XHJcblxyXG4gICAgICAgIC8vVGVzdCBsJ2V4aXN0ZW5jZSBkZSBsYSBkaXYgZGFucyBsZSBjYXMgb8O5IGVsbGUgZXhpc3RlIGxhIHJlbXBsYWNlIHNpIHBhcyBsYSBtZXQgZW4gcGxhY2VcclxuICAgICAgICBpZiAoJCgnI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4KS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJCgnI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4KS5yZXBsYWNlV2l0aCgnPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCArICdcIj48L2Rpdj4nKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjc2hvdy1lcXVpcG1lbnRcIikuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4ICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy90ZXN0IHNpIGwnw6lxdWlwZW1lbnQgZXN0IGxhIGNhcnRlIG91IG5vblxyXG4gICAgICAgIGlmIChlbGVtZW50Wyd0eXBlJ11bJ2lkJ10gIT0gXCIyXCIpIHtcclxuXHJcbiAgICAgICAgICAgIC8vU3dpdGggcmVwbGFjZW1lbnQgZGUgbCdpZCBkdSB0eXBlIGF2ZWMgc29uIG5vbVxyXG4gICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZVR5cGUoNCwgZWxlbWVudFsndHlwZSddWyduYW1lJ10pKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50WydTb3VzVHlwZSddICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCBlbGVtZW50WydTb3VzVHlwZSddWyduYW1lJ10pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb250ZW50LWRlc2NyaXB0aW9uLWR0clwiIGlkPVwiY29udGVudC1kZXNjcmlwdGlvbi0nICtcclxuICAgICAgICAgICAgICAgIGluZGV4ICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJkVFJCb2FyZFwiXSArICc8L3A+JylcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiaW5kaWNlRFRSXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFsnbnVtU2VyaWUnXSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgc3R5bGU9XCJwYWRkaW5nOiAycHhcIiBpZCA9IFwiYnRuLWFkZC1udW1iZXItc2VyaWUnICsgZWxlbWVudFsnaWQnXSArICdcIiA+IEFkZCBudW1iZXIgb2Ygc2VyaWUgPC9idXR0b24+JylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFsnbnVtU2VyaWUnXSArICc8L3A+IDxhIGlkPVwiZWRpdC0nICsgaW5kZXggKyAnXCI+PGkgY2xhc3M9XCJmYXMgZmEtZWRpdFwiPjwvaT4gPC9hPiA8YSBpZD1cImRlbGV0ZS0nICsgaW5kZXggKyAnXCI+PGkgY2xhc3MgPSBcImZhcyBmYS10cmFzaC1hbHQgcG91YmVsbGVcIj4gPC9pPjwvYT4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlRWRpdERlbGV0ZShpbmRleCkpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgLy9FY3JpcyBsZSBub20gZHUgdHlwZSBcImNhcnRlXCIgc291cyBsZSB0eXBlICBFVkNcclxuICAgICAgICAgICAgJChpbmRleEVWQykuYXBwZW5kKHdyaXRlVHlwZSg1LCBlbGVtZW50WydTb3VzVHlwZSddWyduYW1lJ10pKTtcclxuICAgICAgICAgICAgLy9QYXJjb3VzIGxlIHR5cGUgZGUgc291c3R5cGUgXHJcbiAgICAgICAgICAgIC8vICQoaW5kZXhFVkMpLmFwcGVuZCh3cml0ZVN1YnR5cGUoNiwgZWxlbWVudFsnU291c1R5cGUnXVsnbmFtZSddKSk7XHJcblxyXG4gICAgICAgICAgICAkKGluZGV4RVZDKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb250ZW50LWRlc2NyaXB0aW9uLWR0ciBjb250ZW50LWRlc2NyaXB0aW9uLWR0ckNhcmRcIiBpZD1cImNvbnRlbnQtZGVzY3JpcHRpb24tJyArXHJcbiAgICAgICAgICAgICAgICBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZFRSQm9hcmRcIl0gKyAnPC9wPicpXHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImluZGljZURUUlwiXSArICc8L3A+JylcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRbJ251bVNlcmllJ10gPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIHN0eWxlPVwicGFkZGluZzogMnB4XCIgaWQgPSBcImJ0bi1hZGQtbnVtYmVyLXNlcmllJyArIGVsZW1lbnRbJ2lkJ10gKyAnXCIgPiBBZGQgbnVtYmVyIG9mIHNlcmllIDwvYnV0dG9uPicpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbJ251bVNlcmllJ10gKyAnPC9wPiA8YSBpZD1cImVkaXQtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+IDwvYT4gPGEgaWQ9XCJkZWxldGUtJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzID0gXCJmYXMgZmEtdHJhc2gtYWx0IHBvdWJlbGxlXCI+IDwvaT48L2E+JylcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlRWRpdERlbGV0ZShpbmRleCkpO1xyXG4gICAgICAgICAgICAkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQ291bnROdW1iZXJFcXVpcHQoZWxlbWVudCwgaW5kZXgsIGFycmF5KSB7XHJcbiAgICB0b3RhbEVxdWlwdCsrO1xyXG59XHJcbi8vRXh0cmFpdCBsZSBub21icmUgZCd1bmUgc3RyZWluZ1xyXG5mdW5jdGlvbiBleHRyYWl0Tm9tYnJlKHN0cikge1xyXG4gICAgcmV0dXJuIE51bWJlcihzdHIucmVwbGFjZSgvW15cXGRdL2csIFwiXCIpKVxyXG59XHJcbi8vRWNyaXMgbGUgdGl0cmUgZHUgdHlwZSBkJ8OpcXVpcGVtZW50XHJcbmZ1bmN0aW9uIHdyaXRlVHlwZShzaXplLCBuYW1lKSB7XHJcbiAgICByZXR1cm4gJzxoJyArIHNpemUgKyAnIGNsYXNzPVwiZGVzY3JpcHRpb24tVHlwZSBcIiBpZD1cImRlc2NyaXB0aW9uLXR5cGUgXCI+JyArIG5hbWUgKyAnPC9oJyArIHNpemUgKyAnPic7XHJcbn07XHJcbi8vRWNyaXMgbGUgdGl0cmUgZHUgc291c3R5cGUgZCfDqXF1aXBlbWVudFxyXG5mdW5jdGlvbiB3cml0ZVN1YnR5cGUoc2l6ZSwgbmFtZSkge1xyXG4gICAgcmV0dXJuICc8aCcgKyBzaXplICsgJyBjbGFzcz1cImRlc2NyaXB0aW9uLVR5cGUgXCIgaWQ9XCJkZXNjcmlwdGlvbi1zdWJUeXBlIFwiPicgKyBuYW1lICsgJzwvaCcgKyBzaXplICsgJz4nO1xyXG59O1xyXG4vL0VjcmlzIGxlIHRpdHJlIGR1IHNvdXN0eXBlIGQnw6lxdWlwZW1lbnRcclxuZnVuY3Rpb24gd3JpdGVTdWJ0eXBlQ2FyZChzaXplLCBuYW1lKSB7XHJcbiAgICByZXR1cm4gJzxoJyArIHNpemUgKyAnIGNsYXNzPVwiZGVzY3JpcHRpb24tc3VidHlwZVwiIGlkPVwiZGVzY3JpcHRpb24tc3ViVHlwZSBcIj4nICsgbmFtZSArICc8L2gnICsgc2l6ZSArICc+JztcclxufTtcclxuLy8gLy9FY3JpdCBsZXMgMiBpY29ucyBkJ2VkaXQgZXQgZGVsZXRlXHJcbi8vIGZ1bmN0aW9uIHdyaXRlRWRpdERlbGV0ZShpbmRleCkge1xyXG4vLyAgICAgcmV0dXJuICcgPHAgY2xhc3M9XCJlZGl0LWRlbGV0ZS1lcXVpcGVtZW50XCI+IDxhIGlkPVwiZWRpdC0nICsgaW5kZXggKyAnXCI+PGkgY2xhc3M9XCJmYXMgZmEtZWRpdFwiPjwvaT4gPC9hPjwvcD4nO1xyXG4vLyB9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=