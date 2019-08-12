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
//plugs
var ListPlugs = []; //detection si le browser gère le drag&drop

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


prgbar = new ldBar("#test-progress"); //on ouvre le form pour ajouter

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
  });
}

$form.on('submit', function (e) {
  e.preventDefault();
  if ($form.hasClass('is-uploading')) return false;
  showFiles(droppedFiles);
  $form.addClass('is-uploading').removeClass('is-error');

  if (isAdvancedUpload) {
    var ajaxData = new FormData($form.get(0));

    if (droppedFiles) {
      $.each(droppedFiles, function (i, file) {
        ajaxData.append($input.attr('name'), file);
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
      },
      success: function success(data) {
        $form.addClass(data.success == true ? 'is-success' : 'is-error');
        console.log(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9iYXNlbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZXF1aXBlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZXJ0bXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90a2lyYnkvd29ya3NwYWNlL3picnlpa3QvbG9hZGluZy9wcm9qZWN0cy9sZEJhci9sb2FkaW5nLWJhci9zcmMvbG9hZGluZy1iYXIubHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90a2lyYnkvd29ya3NwYWNlL3picnlpa3QvbG9hZGluZy9wcm9qZWN0cy9sZEJhci9sb2FkaW5nLWJhci9zcmMvcHJlc2V0cy5scyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGVzdC11cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RyYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiaG92ZXIiLCJmaW5kIiwic3RvcCIsImFuaW1hdGUiLCJoZWlnaHQiLCJvcGFjaXR5IiwiaGlkZSIsImxhYmVsQ2xpa2VkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInJlbW92ZSIsImNsaWNrIiwidG9nZ2xlQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNzcyIsImFkZENsYXNzIiwiJHR5cGUiLCJhdHRyIiwiRXF1aXBtZW50cyIsImkiLCJpbmRleEVWQyIsInBvc0luZGV4IiwiUHJlc2VuY2VFVkMiLCJpZEVxdWlwbWVudCIsInRhYkluZGV4RXF1aXB0Iiwic2VsZWN0IiwiY3JlYXRlRWxlbWVudCIsInByZXZpb3VzIiwidGFiRXF1aXBlbWVudFR5cGUiLCJ0YWJFcXVpcGVtZW50U3VidHlwZSIsImRhdGEiLCJ2YWwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2hvdyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJlbXB0eSIsImZvckVhY2giLCJlbGVtZW50IiwiYXBwZW5kIiwiT3B0aW9uIiwibmFtZSIsImlkIiwiY29uc29sZSIsImxvZyIsImNoYW5nZSIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiJHRoaXMiLCJhY3Rpb24iLCJlYWNoIiwiaW5kZXgiLCJ2YWx1ZSIsInRoYXQiLCJwdXNoIiwiYWpheCIsInVybCIsInR5cGUiLCJ0YWJFcXVpcHRzIiwiYXN5bmMiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJlcnJvciIsInhociIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsImlkRXJ0bXMiLCJleHRyYWl0Tm9tYnJlIiwiZXF1aXBlbWVudCIsInJldHVybkluZGV4RWxlbWVudCIsImFsZXJ0IiwiYmFzZWxpbmVOYW1lIiwiYmFzZWxpbmUiLCJ0ZXh0IiwiaWRCYXNlbGluZSIsImhyZWYiLCJkZWxldGVFcXVpcG1lbnQiLCJkb25lIiwicmVsb2FkIiwidmVyc2lvbiIsInRyaWdnZXIiLCJhcnJheSIsImxlbmd0aCIsInJlcGxhY2VXaXRoIiwid3JpdGVUeXBlIiwid3JpdGVTdWJ0eXBlIiwid3JpdGVFZGl0RGVsZXRlIiwic3BsaWNlIiwicG9zaXRpb24iLCJzdHIiLCJOdW1iZXIiLCJyZXBsYWNlIiwic2l6ZSIsIndyaXRlU3VidHlwZUNhcmQiLCJub3QiLCIkZm9ybSIsIkxpc3RQbHVncyIsImlzQWR2YW5jZWRVcGxvYWQiLCJkaXYiLCIkaW5wdXQiLCIkbGFiZWwiLCJzaG93RmlsZXMiLCJmaWxlcyIsInByZ2JhciIsImxkQmFyIiwic3RvcFByb3BhZ2F0aW9uIiwiZHJvcHBlZEZpbGVzIiwib3JpZ2luYWxFdmVudCIsImRhdGFUcmFuc2ZlciIsImhhc0NsYXNzIiwiYWpheERhdGEiLCJGb3JtRGF0YSIsImdldCIsImZpbGUiLCJYTUxIdHRwUmVxdWVzdCIsInVwbG9hZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJsZW5ndGhDb21wdXRhYmxlIiwicGVyY2VudENvbXBsZXRlIiwibG9hZGVkIiwidG90YWwiLCJzZXQiLCJjYWNoZSIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJjb21wbGV0ZSIsImlmcmFtZU5hbWUiLCJEYXRlIiwiZ2V0VGltZSIsIiRpZnJhbWUiLCJvbmUiLCJKU09OIiwicGFyc2UiLCJjb250ZW50cyIsInJlbW92ZUF0dHIiLCIkZXJyb3JNc2ciLCJmaWxlc3QiLCJxdWVyeVNlbGVjdG9yIiwidGVtcERlc3RpbmF0aW9uIiwibmFtZUZpbGUiLCJ1cGxvYWRTdGF0dXMiLCJwYXRoIiwibm9tYnJlX3VybCIsImN1cnJlbnRfY2hvaWNlIiwiZXJ0bXNfbGVmdCIsImVydG1zX21pZGRsZSIsImVydG1zX3JpZ2h0IiwiaHRtbCIsImVxdWlwbWVudHMiLCJDb3VudE51bWJlckVxdWlwdCIsIkZpbmRJbmRleEV2YyIsIm5hbWVfYmFzZWxpbmVfMSIsIm5ld19lcXVpcG1lbnRfbnVtIiwidG90YWxFcXVpcHQiLCJuZXdfZXF1aXBtZW50X251bV9zZXJpZSIsIm51bVNlcmllIiwiaWRfdHJhaW4iLCJpZF9iYXNlbGluZSIsIm5ld19lcXVpcHQiLCJpZGJhc2VsaW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCLEMsQ0FFQTtBQUNBOzs7QUFDQUQsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQkUsS0FBbEIsQ0FBd0IsWUFBWTtBQUNoQ0YsR0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRyxJQUFSLENBQWEsY0FBYixFQUE2QkMsSUFBN0IsR0FBb0NDLE9BQXBDLENBQTRDO0FBQ3hDQyxVQUFNLEVBQUUsUUFEZ0M7QUFF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UUFBWixFQUFzQixFQUF0QixDQUFELENBQWI7QUFDSCxDLENBQ0Q7OztBQUNBLFNBQVNQLFNBQVQsQ0FBbUJRLElBQW5CLEVBQXlCcEQsSUFBekIsRUFBK0I7QUFDM0IsU0FBTyxPQUFPb0QsSUFBUCxHQUFjLG9EQUFkLEdBQXFFcEQsSUFBckUsR0FBNEUsS0FBNUUsR0FBb0ZvRCxJQUFwRixHQUEyRixHQUFsRztBQUNIOztBQUFBLEMsQ0FDRDs7QUFDQSxTQUFTUCxZQUFULENBQXNCTyxJQUF0QixFQUE0QnBELElBQTVCLEVBQWtDO0FBQzlCLFNBQU8sT0FBT29ELElBQVAsR0FBYyx1REFBZCxHQUF3RXBELElBQXhFLEdBQStFLEtBQS9FLEdBQXVGb0QsSUFBdkYsR0FBOEYsR0FBckc7QUFDSDs7QUFBQSxDLENBQ0Q7O0FBQ0EsU0FBU0MsZ0JBQVQsQ0FBMEJELElBQTFCLEVBQWdDcEQsSUFBaEMsRUFBc0M7QUFDbEMsU0FBTyxPQUFPb0QsSUFBUCxHQUFjLHlEQUFkLEdBQTBFcEQsSUFBMUUsR0FBaUYsS0FBakYsR0FBeUZvRCxJQUF6RixHQUFnRyxHQUF2RztBQUNIOztBQUFBLEMsQ0FDRDtBQUNBO0FBQ0E7QUFDQSxLOzs7Ozs7Ozs7Ozs7QUNoa0JBLHVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc2Nzcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCAnLi9lcnRtcyc7XHJcbmltcG9ydCAnLi9lcXVpcGVtZW50JztcclxuaW1wb3J0ICcuL2Jhc2VsaW5lJztcclxuaW1wb3J0ICcuL3Byb2dyZXNzQmFyJztcclxuaW1wb3J0ICcuL3Rlc3QtdXBsb2FkJztcclxuaW1wb3J0ICcuL3RyYWluJztcclxuaW1wb3J0ICcuL3BsdWcnO1xyXG5cclxuLy8gbG9hZHMgdGhlIGpxdWVyeSBwYWNrYWdlIGZyb20gbm9kZV9tb2R1bGVzXHJcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbi8vIGltcG9ydCB0aGUgZnVuY3Rpb24gZnJvbSBncmVldC5qcyAodGhlIC5qcyBleHRlbnNpb24gaXMgb3B0aW9uYWwpXHJcbi8vIC4vIChvciAuLi8pIG1lYW5zIHRvIGxvb2sgZm9yIGEgbG9jYWwgZmlsZVxyXG4kKCcucG9zdC1tb2R1bGUnKS5ob3ZlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLmZpbmQoJy5kZXNjcmlwdGlvbicpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICBoZWlnaHQ6IFwidG9nZ2xlXCIsXHJcbiAgICAgICAgb3BhY2l0eTogXCJ0b2dnbGVcIlxyXG4gICAgfSwgMzAwKTtcclxufSk7XHJcbiQoJy5wb3N0LW1vZHVsZS1mbGVldCcpLmhvdmVyKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuZmluZCgnLmRlc2NyaXB0aW9uLWZsZWV0Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgIGhlaWdodDogXCJ0b2dnbGVcIixcclxuICAgICAgICBvcGFjaXR5OiBcInRvZ2dsZVwiXHJcbiAgICB9LCAzMDApO1xyXG59KTtcclxuXHJcbiQoJy5mYS1jaGV2cm9uLWRvd24nKS5oaWRlKCk7XHJcbmxldCBsYWJlbENsaWtlZCA9IGZhbHNlO1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCdwcmUnKS5yZW1vdmUoKTtcclxuICAgICQoJy5idXR0b24tbGVmdCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuc2lkZWJhcicpLnRvZ2dsZUNsYXNzKCdmbGlwaCcpO1xyXG4gICAgfSk7XHJcbiAgICAkKCcuc2lkZWJhcicpLmhvdmVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnbWFpbicpLnJlbW92ZUNsYXNzKCdjb2wtbGctMTInKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLnJlbW92ZUNsYXNzKCdwbC01Jyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5yZW1vdmVDbGFzcygnY29sLW1kLTEyJyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoJ3RyYW5zaXRpb24nLCAnYWxsIDAuNnMgZWFzZS1pbi1vdXQnKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmFkZENsYXNzKCdtbC1zbS1hdXRvJyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5hZGRDbGFzcygnY29sLWxnLTEwJyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5hZGRDbGFzcygnY29sLW1kLTknKTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5yZW1vdmVDbGFzcygnY29sLWxnLTEwJyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5yZW1vdmVDbGFzcygnY29sLW1kLTknKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcygndHJhbnNpdGlvbicsICdhbGwgMC42cyBlYXNlLWluLW91dCcpO1xyXG4gICAgICAgICAgICAkKCdtYWluJykuYWRkQ2xhc3MoJ3BsLTUnKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmFkZENsYXNzKCdjb2wtbGctMTInKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmFkZENsYXNzKCdjb2wtbWQtMTInKTtcclxuICAgICAgICB9KVxyXG4gICAgLy8gJCgnbWFpbicpLnJlbW92ZUNsYXNzKCdtbC1zbS1hdXRvJyk7XHJcbiAgICAkKCcubmF2LWxhYmVsJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5mYS1jaGV2cm9uLWxlZnQnKS5jc3MoJ3RyYW5zZm9ybScsICdyb3RhdGV4KDQ1ZGVnKScpXHJcbiAgICB9KVxyXG5cclxuXHJcbn0pOyIsIi8vTWFzcXVhZ2UgZGUgY2VydGFpbnMgbW9kYWxlIGRlIGxhIHBhZ2VcclxuJCgnI2Zvcm11bGFpcmUtZXF1aXBtZW50JykuaGlkZSgpO1xyXG4kKCcjY29udGVudC1mb3JtLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50JykuaGlkZSgpO1xyXG4kKCcjcHJldmlvdXMtZXF1aXBtZW50JykuaGlkZSgpO1xyXG4kKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG5cclxuLy9EZWxjYXJhdGlvbiB2YXJpYWJsZVxyXG5jb25zdCAkdHlwZSA9ICQoJyNlcXVpcGVtZW50X1R5cGUnKTtcclxuJHR5cGUuYXR0cigncmVxdWlyZWQnLCAncmVxdWlyZWQnKTtcclxuXHJcbmxldCBFcXVpcG1lbnRzID0gW10sXHJcbiAgICBpID0gMCxcclxuICAgIGluZGV4RVZDID0gMCxcclxuICAgIHBvc0luZGV4ID0gMCxcclxuICAgIFByZXNlbmNlRVZDID0gZmFsc2UsXHJcbiAgICBpZEVxdWlwbWVudCA9IDAsXHJcbiAgICB0YWJJbmRleEVxdWlwdCA9IFtdXHJcbnNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksXHJcbiAgICBwcmV2aW91cyA9IFwiXCIsXHJcbiAgICB0YWJFcXVpcGVtZW50VHlwZSA9IFtcIkVWQ1wiLCBcIkNBUlRFXCIsIFwiU0VOU09SXCIsIFwiRE1JXCJdLFxyXG4gICAgdGFiRXF1aXBlbWVudFN1YnR5cGUgPSBbXCJDT1JFXCIsIFwiVFVJXCIsIFwiU0RNVVwiLCBcIlNFTlNFXCIsIFwiVFdJTlNcIl07XHJcblxyXG4vL1ZpZGFnZSBkZXMgaW5wdXRzIGF1IHJlZnJlc2ggZGUgbGEgcGFnZVxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgZGF0YSA9IHt9XHJcbiAgICBkYXRhWyR0eXBlLmF0dHIoJ25hbWUnKV0gPSAkdHlwZS52YWwoKVxyXG5cclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gJy9hbHN0b20vY3JlYXRlX2Jhc2VsaW5lJykge1xyXG4gICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tTdWJ0eXBlXCIsIGRhdGEpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIC8vVmlkYWdlIGNoYW1wIHNvdXN0eXBlXHJcbiAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5hcHBlbmQobmV3IE9wdGlvbihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICB9XHJcbiAgICAvLyAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5lbXB0eSgpO1xyXG4gICAgLy8gJCgnOmlucHV0JywgJyNmb3JtX2VxdWlwZW1lbnQnKS5ub3QoJzpidXR0b24sIDpzdWJtaXQsIDpyZXNldCwgOmhpZGRlbicpLnZhbCgnJyk7XHJcbn0pO1xyXG5cclxuLy9BSkFYIENoYW5nZW1lbnQgZGUgc291cy10eXBlIGVuIGZvbmN0aW9uIGR1IHR5cGVcclxuJHR5cGUuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBsZXQgZGF0YSA9IHt9XHJcbiAgICBkYXRhWyR0eXBlLmF0dHIoJ25hbWUnKV0gPSAkdHlwZS52YWwoKVxyXG5cclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAkLnBvc3QoXCIvYWxzdG9tL2NoZWNrU3VidHlwZVwiLCBkYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIC8vVmlkYWdlIGNoYW1wIHNvdXN0eXBlXHJcbiAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5lbXB0eSgpO1xyXG4gICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KVxyXG5cclxuLy9BSkFYIHNvdW1pc3Npb24gZm9ybXVsYWlyZSBkJ2Fqb3V0IGVxdWlwZW1lbnRcclxuJCgnI2Zvcm1fZXF1aXBlbWVudCcpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIC8vRW1ww6pjaGUgbGUgY2hhcmdlbWVudCBkZSBsYSBwYWdlIHNvaXMgZmFpdCBhdXRvbWF0aXF1ZW1lbnRcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgIGxldCBkYXRhID0ge30sXHJcbiAgICAgICAgYWN0aW9uO1xyXG4gICAgLy9SZW1wbGkgZGF0YSBhIHBhcnRpciBkZXMgdmFsZXVyIGRlcyBpbnB1dHNcclxuICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbmFtZSA9IHRoYXQuYXR0cignbmFtZScpXHJcblxyXG4gICAgICAgIGlmIChuYW1lICE9IChcImVxdWlwZW1lbnRbX3Rva2VuXVwiKSAmJiBuYW1lICE9IChcInNvdW1pc3Npb25fZXF1aXBlbWVudFwiKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoYXQudmFsKCk7XHJcbiAgICAgICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT0gJ3NvdW1pc3Npb25fZWRpdF9lcXVpcGVtZW50Jykge1xyXG4gICAgICAgICAgICBhY3Rpb24gPSBcImVkaXRcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhY3Rpb24gPSBcImFkZFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG4gICAgLy8gU2kgbGUgZm9ybXVsYWlyZSBlc3QgcG91ciBham91ZXIgdW4gbm91dmVsIGVxdWlwZW1lbnRcclxuICAgIGlmIChhY3Rpb24gPT0gXCJhZGRcIikge1xyXG4gICAgICAgIC8vUmVtcGxpcyBsZSB0YWJsZWF1IGRlcyDDqXF1aXBlbWVudHNcclxuICAgICAgICBFcXVpcG1lbnRzLnB1c2goZGF0YSk7XHJcbiAgICAgICAgLy9FZmZlY3R1cmUgbGEgcmVxdcOqdGUgYWpheCBwb3VyIGwnYWpvdXQgZCfDqXF1aXBlbWVudFxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJHRoaXMuYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgICAgIHR5cGU6ICR0aGlzLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB0YWJFcXVpcHRzOiBFcXVpcG1lbnRzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIE91IHNpIGxlIGZvcm11bGFpcmUgZXN0IHBvdXIgw6lkaXRlciB1biBlcXVpcGVtZW50IGTDqWphIGV4aXN0YW50IHN1ciBsYSBwYWdlIGRlIGwnZXJ0bXMgbGnDqSBhIGNlbHVpLWNpXHJcbiAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PSBcImVkaXRcIikge1xyXG4gICAgICAgIGxldCBpZEVydG1zID0gZXh0cmFpdE5vbWJyZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvYWxzdG9tL2VkaXQtZXF1aXBtZW50LycgKyBpZEVxdWlwbWVudCxcclxuICAgICAgICAgICAgdHlwZTogJHRoaXMuYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGVxdWlwZW1lbnQ6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICBpZEVydG1zOiBpZEVydG1zXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50JykuaGlkZSgpO1xyXG4gICAgJCgnLm1vZGFsLWZvb3RlcicpLnNob3coKTtcclxuICAgICQoJyNjcmVhdGUtZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI3Nob3ctZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI3ByZXZpb3VzLWVxdWlwbWVudCcpLmhpZGUoKTtcclxuICAgIC8vQm91Y2xlIGxlcyDDqXF1aXBlbWVudHMgZXQgbGVzIGluc3RhbGxlIGF1IGZyb250XHJcbiAgICBFcXVpcG1lbnRzLmZvckVhY2gocmV0dXJuSW5kZXhFbGVtZW50KTtcclxufSk7XHJcblxyXG5cclxuLy9WYWxpZGF0aW9uIGRlIGJhc2VsaW5lIFxyXG4kKCcjY3JlYXRlLWJhc2VsaW5lJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQoXCIjYmFzZWxpbmVfbmFtZVwiKS52YWwoKSA9PSBcIlwiKSB7XHJcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSBiYXNlbGluZSBuYW1lIFwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI3Nob3ctZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgfVxyXG5cclxufSlcclxuXHJcbmxldCBiYXNlbGluZU5hbWU7XHJcbiQoJyNmb3JtX2Jhc2VsaW5lJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG5cclxuICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbmFtZSA9IHRoYXQuYXR0cignbmFtZScpLFxyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoYXQudmFsKCk7XHJcblxyXG4gICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKG5hbWUgPT0gJ2Jhc2VsaW5lW25hbWVdJykge1xyXG5cclxuICAgICAgICAgICAgYmFzZWxpbmVOYW1lID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJHRoaXMuYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgdHlwZTogJHRoaXMuYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBiYXNlbGluZTogZGF0YVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnLnRpdGxlLWJhc2VsaW5lJykudGV4dChyZXNwb25zZS5iYXNlbGluZSlcclxuICAgICAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoJyNwcmV2aW91cy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pXHJcbi8vVmFsaWRhdGlvbiBkZSB0b3VzIGxlcyDDqXF1aXBlbWVudHMgZXQgZGUgbGEgYmFzZWxpbmVcclxuJCgnI3ZhbGlkLWFsbC1lcXVpcG1lbnRzJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoRXF1aXBtZW50cyAhPSBcIlwiKSB7XHJcbiAgICAgICAgJCgnLm1haW4tYmFzZWxpbmUnKS5jc3MoJ29wYWNpdHknLCBcIjAuNFwiKTtcclxuICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy9hbHN0b20vZmx1c2gtYWxsLWVxdWlwdCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgYmFzZWxpbmVOYW1lOiBiYXNlbGluZU5hbWUsXHJcbiAgICAgICAgICAgICAgICB0YWJFcXVpcHRzOiBFcXVpcG1lbnRzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgaWRCYXNlbGluZSA9IHJlc3BvbnNlLmJhc2VsaW5lO1xyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvYWxzdG9tL2Jhc2VsaW5lL1wiICsgaWRCYXNlbGluZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgRXF1aXBtZW50cyBiZWZvcmUgdmFsaWQnKTtcclxuICAgIH1cclxuXHJcbn0pXHJcblxyXG4vL0fDqXJlIGxlIGNsaXF1ZSBkZSBsYSBzdXBwcmVzc2lvblxyXG4kKCcjc2hvdy1lcXVpcG1lbnQnKS5vbignY2xpY2snLCAnLmVkaXQtZGVsZXRlLWVxdWlwZW1lbnQgPiBhJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcylbMF1bXCJpZFwiXVswXSA9PSBcImRcIikge1xyXG4gICAgICAgIGRlbGV0ZUVxdWlwbWVudChleHRyYWl0Tm9tYnJlKCQodGhpcylbMF1bXCJpZFwiXSkpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG4vL2NhY2hlIGxlIG1vZGFsIGQnZWRpdCBkJ2VxdWlwZW1lbnRcclxuJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5oaWRlKCk7XHJcbi8vIEdlcmUgbGEgZmVybWV0dXJlIGR1IG1vZGFsIGQnZWRpdCBkJ2VxdWlwZW1lbnRcclxuJCgnI2Nsb3NlLW1vZGFsLWZvcm0tZXF1aXBtZW50LWVkaXQnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLmhpZGUoKTtcclxuICAgICQoJy5tYWluLWVydG1zJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG59KVxyXG4vLyBcclxuLy8gUmVxdWV0ZSBBSkFYIHBvdXIgcmVtcGxpciBsZSBmb3JtdWxhaXJlIGQnw6lxdWlwZW1lbnQgYXZlYyBsJ2VxdWlwZW1lbnQgc2VsZWN0aW9ubmVyXHJcbiQoJy5jb250ZW50LWRlc2NyaXB0aW9uLWR0cicpLm9uKCdjbGljaycsICcuZWRpdC1kZWxldGUtZXF1aXBlbWVudCA+IGEnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnLm1haW4tZXJ0bXMnKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgaWRFcXVpcG1lbnQgPSBleHRyYWl0Tm9tYnJlKCQodGhpcylbMF1bXCJjbGFzc0xpc3RcIl1bMF0pXHJcbiAgICB2YXIgJHRoaXMgPSAkKFwiI2Zvcm1fZXF1aXBlbWVudF9lZGl0XCIpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vZWRpdC1lcXVpcG1lbnQvJyArIGlkRXF1aXBtZW50LFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9UeXBlJykudmFsKHJlc3BvbnNlW1widHlwZVwiXVtcImlkXCJdKTtcclxuICAgICAgICAgICAgZGF0YVskKCcjZXF1aXBlbWVudF9UeXBlJykuYXR0cignbmFtZScpXSA9ICQoJyNlcXVpcGVtZW50X1R5cGUnKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tTdWJ0eXBlXCIsIGRhdGEpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAvL1ZpZGFnZSBjaGFtcCBzb3VzdHlwZVxyXG4gICAgICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICQoJy5tYWluLWVydG1zJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vUmVtcGxpIGlucHV0IGF2ZWMgdmFsZXVyIHJlY3UgZGUgbCdlcXVpcGVtZW50XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X1R5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfc291c190eXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVtcIlNvdXNUeXBlXCJdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJTb3VzVHlwZVwiXVtcImlkXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X0RUUl9ib2FyZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJkVFJCb2FyZFwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X0luZGljZV9EVFInOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiaW5kaWNlRFRSXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfTnVtX3NlcmllJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcIm51bVNlcmllXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLnNob3coKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4vL0Zvcm11bGFpcmUgZCdlZGl0IGRlIGwnw6lxdWlwZW1lbnRcclxuJCgnI2Zvcm1fZXF1aXBlbWVudF9lZGl0Jykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcubWFpbi1lcnRtcycpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI2Zvcm1fZXF1aXBlbWVudF9lZGl0JykuY3NzKFwib3BhY2l0eVwiLCBcIjAuNFwiKTtcclxuICAgICQoXCIjd2FpdC1zcGlubmVyXCIpLmNzcyhcInotaW5kZXhcIiwgXCI5OTk5OVwiKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGRhdGEgPSB7fSxcclxuICAgICAgICBhY3Rpb247XHJcbiAgICAvL1JlbXBsaSBkYXRhIGEgcGFydGlyIGRlcyB2YWxldXIgZGVzIGlucHV0c1xyXG4gICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuYW1lID0gdGhhdC5hdHRyKCduYW1lJylcclxuXHJcbiAgICAgICAgaWYgKG5hbWUgIT0gKFwiZXF1aXBlbWVudFtfdG9rZW5dXCIpICYmIG5hbWUgIT0gKFwic291bWlzc2lvbl9lcXVpcGVtZW50XCIpKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhhdC52YWwoKTtcclxuICAgICAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vZWRpdC1lcXVpcG1lbnQvJyArIGlkRXF1aXBtZW50LFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICdlcXVpcGVtZW50JzogZGF0YSxcclxuICAgICAgICAgICAgXCJzb3VtaXNzaW9uX2VkaXRfZXF1aXBlbWVudFwiOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLnNob3coKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KVxyXG5cclxuLy9SZXF1ZXRlIEFKQVggZGUgY3LDqWF0aW9uIGRlIHZlcnNpb24gbG9naWNpZWxcclxuJCgnI2Zvcm1fdmVyc2lvbicpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnLm1haW4tYmFzZWxpbmUnKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgIGxldCBkYXRhID0ge307XHJcblxyXG4gICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuYW1lID0gdGhhdC5hdHRyKCduYW1lJyksXHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhhdC52YWwoKTtcclxuXHJcbiAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgfSlcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAkdGhpcy5hdHRyKCdhY3Rpb24nKSxcclxuICAgICAgICB0eXBlOiAkdGhpcy5hdHRyKCdtZXRob2QnKSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGlkQmFzZWxpbmU6IGV4dHJhaXROb21icmUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSxcclxuICAgICAgICAgICAgdmVyc2lvbjogZGF0YVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgJCgnI3RpdGxlLXZlcnNpb24nKS5hcHBlbmQoXCI8cD5cIiArIHJlc3BvbnNlLnZlcnNpb24gKyBcIjwvcD5cIilcclxuICAgICAgICAgICAgJCgnLm1haW4tYmFzZWxpbmUnKS5jc3MoXCJvcGFjaXR5XCIsICcxJyk7XHJcbiAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNjbG9zZS1tb2RhbC1mb3JtLXZlcnNpb24nKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSlcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJldHVybkluZGV4RWxlbWVudChlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcclxuXHJcbiAgICAvL1Rlc3QgbCdleGlzdGVuY2UgZGUgbGEgZGl2IGRhbnMgbGUgY2FzIG/DuSBlbGxlIGV4aXN0ZSBsYSByZW1wbGFjZSBzaSBwYXMgbGEgbWV0IGVuIHBsYWNlXHJcbiAgICBpZiAoJCgnI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4KS5sZW5ndGgpIHtcclxuICAgICAgICAkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLnJlcGxhY2VXaXRoKCc8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4ICsgJ1wiPjwvZGl2PicpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIjc2hvdy1lcXVpcG1lbnRcIikuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4ICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdGVzdCBzaSBsJ8OpcXVpcGVtZW50IGVzdCBsYSBjYXJ0ZSBvdSBub25cclxuICAgIGlmIChlbGVtZW50W1wiZXF1aXBlbWVudFtUeXBlXVwiXSAhPSBcIjJcIikge1xyXG4gICAgICAgIC8vU3dpdGggcmVwbGFjZW1lbnQgZGUgbCdpZCBkdSB0eXBlIGF2ZWMgc29uIG5vbVxyXG4gICAgICAgIHN3aXRjaCAoZWxlbWVudFtcImVxdWlwZW1lbnRbVHlwZV1cIl0pIHtcclxuICAgICAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlVHlwZSg0LCAwKSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFkZENsYXNzKFwiZGVzY3JpcHRpb24tU3VidHlwZUNhcmRcIilcclxuICAgICAgICAgICAgICAgIGluZGV4RVZDID0gJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiM1wiOlxyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVUeXBlKDQsIDIpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiNFwiOlxyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVUeXBlKDQsIDMpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKGVsZW1lbnRbXCJlcXVpcGVtZW50W3NvdXNfdHlwZV1cIl0pIHtcclxuICAgICAgICAgICAgY2FzZSBcIjRcIjpcclxuICAgICAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCAzKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjVcIjpcclxuICAgICAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCA0KSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb250ZW50LWRlc2NyaXB0aW9uLWR0clwiIGlkPVwiY29udGVudC1kZXNjcmlwdGlvbi0nICtcclxuICAgICAgICAgICAgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZXF1aXBlbWVudFtEVFJfYm9hcmRdXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImVxdWlwZW1lbnRbSW5kaWNlX0RUUl1cIl0gKyAnPC9wPicpXHJcbiAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZXF1aXBlbWVudFtOdW1fc2VyaWVdXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlRWRpdERlbGV0ZShpbmRleCkpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IEVxdWlwbWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChFcXVpcG1lbnRzW2ldW1wiZXF1aXBlbWVudFtUeXBlXVwiXSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICAgICAgUHJlc2VuY2VFVkMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoUHJlc2VuY2VFVkMpIHtcclxuICAgICAgICAgICAgLy9FY3JpcyBsZSBub20gZHUgdHlwZSBcImNhcnRlXCIgc291cyBsZSB0eXBlICBFVkNcclxuICAgICAgICAgICAgLy8gJChpbmRleEVWQykuYXBwZW5kKHdyaXRlVHlwZSg1LCAxKSk7XHJcbiAgICAgICAgICAgIC8vUGFyY291cyBsZSB0eXBlIGRlIHNvdXN0eXBlIFxyXG4gICAgICAgICAgICBzd2l0Y2ggKGVsZW1lbnRbXCJlcXVpcGVtZW50W3NvdXNfdHlwZV1cIl0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgJChpbmRleEVWQykuYXBwZW5kKHdyaXRlU3VidHlwZSg1LCAwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiMlwiOlxyXG4gICAgICAgICAgICAgICAgICAgICQoaW5kZXhFVkMpLmFwcGVuZCh3cml0ZVN1YnR5cGUoNSwgMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjNcIjpcclxuICAgICAgICAgICAgICAgICAgICAkKGluZGV4RVZDKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDUsIDIpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJChpbmRleEVWQykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiY29udGVudC1kZXNjcmlwdGlvbi1kdHIgY29udGVudC1kZXNjcmlwdGlvbi1kdHJDYXJkXCIgaWQ9XCJjb250ZW50LWRlc2NyaXB0aW9uLScgK1xyXG4gICAgICAgICAgICAgICAgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImVxdWlwZW1lbnRbRFRSX2JvYXJkXVwiXSArICc8L3A+JylcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZXF1aXBlbWVudFtJbmRpY2VfRFRSXVwiXSArICc8L3A+JylcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiZXF1aXBlbWVudFtOdW1fc2VyaWVdXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCh3cml0ZUVkaXREZWxldGUoaW5kZXgpKTtcclxuICAgICAgICAgICAgJCgnI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4KS5yZW1vdmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIGVudGVyIEVWQyBlcXVpcGVtZW50IGJlZm9yZScpO1xyXG4gICAgICAgICAgICAkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBFcXVpcG1lbnRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICQoJy5tb2RhbC1mb290ZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNjcmVhdGUtZXF1aXBtZW50JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjc2hvdy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vU3VwcmVzc2lvbiBkZSBsJ8OpcXVpcGVtZW50IGRhbnMgbGUgdGFibGVhdSBldCBsZSBmcm9udFxyXG5mdW5jdGlvbiBkZWxldGVFcXVpcG1lbnQocG9zaXRpb24pIHtcclxuICAgIEVxdWlwbWVudHMuc3BsaWNlKHBvc2l0aW9uLCAxKTtcclxuICAgICQoJy5kZXNjcmlwdGlvbicpLnJlbW92ZSgpO1xyXG4gICAgRXF1aXBtZW50cy5mb3JFYWNoKHJldHVybkluZGV4RWxlbWVudCk7XHJcbn1cclxuLy9FeHRyYWl0IGxlIG5vbWJyZSBkJ3VuZSBzdHJlaW5nXHJcbmZ1bmN0aW9uIGV4dHJhaXROb21icmUoc3RyKSB7XHJcbiAgICByZXR1cm4gTnVtYmVyKHN0ci5yZXBsYWNlKC9bXlxcZF0vZywgXCJcIikpXHJcbn1cclxuLy9FY3JpcyBsZSB0aXRyZSBkdSB0eXBlIGQnw6lxdWlwZW1lbnRcclxuZnVuY3Rpb24gd3JpdGVUeXBlKHNpemUsIGluZGV4KSB7XHJcbiAgICByZXR1cm4gJzxoJyArIHNpemUgKyAnIGNsYXNzPVwiZGVzY3JpcHRpb24tVHlwZSBcIiBpZD1cImRlc2NyaXB0aW9uLXR5cGUgXCI+JyArIHRhYkVxdWlwZW1lbnRUeXBlW2luZGV4XSArICc8L2gnICsgc2l6ZSArICc+JztcclxufTtcclxuLy9FY3JpcyBsZSB0aXRyZSBkdSBzb3VzdHlwZSBkJ8OpcXVpcGVtZW50XHJcbmZ1bmN0aW9uIHdyaXRlU3VidHlwZShzaXplLCBpbmRleCkge1xyXG4gICAgcmV0dXJuICc8aCcgKyBzaXplICsgJyBjbGFzcz1cImRlc2NyaXB0aW9uLVR5cGUgXCIgaWQ9XCJkZXNjcmlwdGlvbi1zdWJUeXBlIFwiPicgKyB0YWJFcXVpcGVtZW50U3VidHlwZVtpbmRleF0gKyAnPC9oJyArIHNpemUgKyAnPic7XHJcbn07XHJcbi8vRWNyaXMgbGUgdGl0cmUgZHUgc291c3R5cGUgZCfDqXF1aXBlbWVudFxyXG5mdW5jdGlvbiB3cml0ZVN1YnR5cGVDYXJkKHNpemUsIGluZGV4KSB7XHJcbiAgICByZXR1cm4gJzxoJyArIHNpemUgKyAnIGNsYXNzPVwiZGVzY3JpcHRpb24tc3VidHlwZVwiIGlkPVwiZGVzY3JpcHRpb24tc3ViVHlwZSBcIj4nICsgdGFiRXF1aXBlbWVudFN1YnR5cGVbaW5kZXhdICsgJzwvaCcgKyBzaXplICsgJz4nO1xyXG59O1xyXG4vL0Vjcml0IGxlcyAyIGljb25zIGQnZWRpdCBldCBkZWxldGVcclxuZnVuY3Rpb24gd3JpdGVFZGl0RGVsZXRlKGluZGV4KSB7XHJcbiAgICByZXR1cm4gJyA8cCBjbGFzcz1cImVkaXQtZGVsZXRlLWVxdWlwZW1lbnRcIj4gPGEgaWQ9XCJlZGl0LScgKyBpbmRleCArICdcIj48aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPiA8L2E+IDxhIGlkPVwiZGVsZXRlLScgKyBpbmRleCArICdcIj48aSBjbGFzcyA9IFwiZmFzIGZhLXRyYXNoLWFsdCBwb3ViZWxsZVwiPiA8L2k+PC9hPjwvcD4nO1xyXG59O1xyXG5cclxuLyphdSBjbGljayBkZSBsJ2FkZCBFcXVpcG1lbnQgYWZmaWNoZXIgbGUgZm9ybXVsYWlyZSBkJ2Fqb3V0IGQnw6lxdWlwZW1lbnQqL1xyXG4kKCcjY3JlYXRlLWVxdWlwbWVudCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNjcmVhdGUtZXF1aXBtZW50JykuaGlkZSgpO1xyXG4gICAgJCgnI3Nob3ctZXF1aXBtZW50JykuaGlkZSgpO1xyXG4gICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnI3ByZXZpb3VzLWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJy5tb2RhbC1mb290ZXInKS5oaWRlKCk7XHJcbiAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5lbXB0eSgpO1xyXG4gICAgJCgnOmlucHV0JywgJyNmb3JtX2VxdWlwZW1lbnQnKS5ub3QoJzpidXR0b24sIDpzdWJtaXQsIDpyZXNldCwgOmhpZGRlbicpLnZhbCgnJyk7XHJcbiAgICBwcmV2aW91cyA9IFwiZXF1aXBtZW50XCI7XHJcbn0pO1xyXG4vLyBHZXJlIGxlIGNsaWNrIGR1IHByZXZpb3VzXHJcbiQoXCIjcHJldmlvdXMtZXF1aXBtZW50XCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcjc2hvdy1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcjY3JlYXRlLWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNwcmV2aW91cy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcubW9kYWwtZm9vdGVyJykuc2hvdygpO1xyXG59KTtcclxuJCgnI2NyZWF0ZS1iYXNlbGluZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudCcpLmhpZGUoKTtcclxuICAgICQoJyNzaG93LWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNjcmVhdGUtZXF1aXBtZW50Jykuc2hvdygpO1xyXG4gICAgJCgnLm1vZGFsLWZvb3RlcicpLnNob3coKTtcclxufSlcclxuLy8gRmVybWUgbGUgbW9kYWwgZGUgZm9ybXVsYWlyZSBkJ2Fqb3V0IGQnw6lxdWlwZW1lbnRcclxuJCgnI2Nsb3NlLWVxdWlwZW1lbnQnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQnKS5oaWRlKCk7XHJcbiAgICAkKCcjc2hvdy1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbiAgICAkKCcjY3JlYXRlLWVxdWlwbWVudCcpLnNob3coKTtcclxuICAgICQoJyNwcmV2aW91cy1lcXVpcG1lbnQnKS5oaWRlKCk7XHJcbn0pIiwiLy9WYWxpZGF0aW9uIGRlIGwnZXJ0bXMgXHJcbiQoJyN2YWxpZC1lcnRtcy1uYW1lJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIiNjb250ZW50LWZvcm0tZXJ0bXNcIikuaGlkZSgpO1xyXG4gICAgJCgnI2NvbnRlbnQtZm9ybS1lcXVpcG1lbnQnKS5zaG93KCk7XHJcbn0pIiwiLy8gJCgnI2RlbGV0ZS1lcnRtcycpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbi8vICAgICAkLmFqYXgoe1xyXG4vLyAgICAgICAgIHVybDogJHRoaXMuYXR0cignYWN0aW9uJyksXHJcbi8vICAgICAgICAgdHlwZTogJHRoaXMuYXR0cignbWV0aG9kJyksXHJcbi8vICAgICAgICAgZGF0YToge30sXHJcbi8vICAgICAgICAgYXN5bmM6IHRydWUsXHJcbi8vICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4vLyAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuLy8gICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pO1xyXG5cclxuLy8gfSkiLCIkKCcjZm9ybV9wbHVnJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgbGV0IGJhc2VsaW5lID0gZXh0cmFpdE5vbWJyZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCRmb3JtKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9hZGQtcGx1ZycsXHJcbiAgICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgICAgZGF0YVR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgaWQ6IGJhc2VsaW5lXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSlcclxuXHJcbi8vRXh0cmFpdCBsZSBub21icmUgZCd1bmUgc3RyZWluZ1xyXG5mdW5jdGlvbiBleHRyYWl0Tm9tYnJlKHN0cikge1xyXG4gICAgcmV0dXJuIE51bWJlcihzdHIucmVwbGFjZSgvW15cXGRdL2csIFwiXCIpKTtcclxufSIsInJlcXVpcmUhIFwiLi9wcmVzZXRzXCI6IHtwcmVzZXRzfVxuXG5zaW1wbGUtc3RyID0gKGFycikgLT4gYXJyLmpvaW4gJydcbndyYXAgPSAoY29udGVudCkgLT4gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFwiICsgYnRvYShjb250ZW50KVxuXG5kbyAtPlxuICAgIG1ha2UgPVxuICAgICAgICBoZWFkOiAodmlld0JveCkgLT4gXCJcIlwiXG4gICAgICAgICAgICAgICAgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwidXRmLThcIj8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiI3ZpZXdCb3hcIj5cbiAgICAgICAgICAgICAgICBcIlwiXCJcblxuICAgICAgICBncmFkaWVudDogKGRpciA9IDQ1LCBkdXIgPSAxLCAuLi5jb2xvcnMpIC0+XG4gICAgICAgICAgICByZXQgPSBbQGhlYWQgXCIwIDAgMTAwIDEwMFwiXVxuICAgICAgICAgICAgbGVuID0gY29sb3JzLmxlbmd0aCAqIDQgKyAxXG4gICAgICAgICAgICBkaXIgPSBkaXIgKiBNYXRoLlBJIC8gMTgwXG4gICAgICAgICAgICBneCA9IE1hdGguY29zKGRpcikgKiogMlxuICAgICAgICAgICAgZ3kgPSBNYXRoLnNxcnQoZ3ggLSBneCAqKiAyKVxuICAgICAgICAgICAgaWYgZGlyID4gTWF0aC5QSSAqIDAuMjUgPT5cbiAgICAgICAgICAgICAgICBneSA9IE1hdGguc2luKGRpcikgKiogMlxuICAgICAgICAgICAgICAgIGd4ID0gTWF0aC5zcXJ0KGd5IC0gZ3kgKiogMilcbiAgICAgICAgICAgIHggPSBneCAqIDEwMFxuICAgICAgICAgICAgeSA9IGd5ICogMTAwXG4gICAgICAgICAgICByZXQucHVzaCBcIlwiXCI8ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9XCJncmFkaWVudFwiIHgxPVwiMFwiIHgyPVwiI2d4XCIgeTE9XCIwXCIgeTI9XCIjZ3lcIj5cIlwiXCJcbiAgICAgICAgICAgIGZvciBpIGZyb20gMCB0aWwgbGVuID0+XG4gICAgICAgICAgICAgICAgaWR4ID0gaSAqIDEwMCAvIChsZW4gLSAxKVxuICAgICAgICAgICAgICAgIHJldC5wdXNoIFwiXCJcIjxzdG9wIG9mZnNldD1cIiN7aWR4fSVcIiBzdG9wLWNvbG9yPVwiI3tjb2xvcnNbaSAlIGNvbG9ycy5sZW5ndGhdfVwiLz5cIlwiXCJcbiAgICAgICAgICAgIHJldC5wdXNoIFwiXCJcIlxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPlxuICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjQwMFwiIGhlaWdodD1cIjQwMFwiIGZpbGw9XCJ1cmwoXFwjZ3JhZGllbnQpXCI+XG4gICAgICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cInRyYW5zZm9ybVwiIHR5cGU9XCJ0cmFuc2xhdGVcIiBmcm9tPVwiLSN4LC0jeVwiXG4gICAgICAgICAgICAgICAgdG89XCIwLDBcIiBkdXI9XCIje2R1cn1zXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIvPjwvcmVjdD48L3N2Zz5cbiAgICAgICAgICAgICAgICBcIlwiXCJcbiAgICAgICAgICAgIHdyYXAgcmV0LmpvaW4oXCJcIilcblxuICAgICAgICBzdHJpcGU6IChjMT1cXCNiNGI0YjQsIGMyPVxcI2U2ZTZlNiwgZHVyID0gMSkgLT5cbiAgICAgICAgICAgIHJldCA9IFtAaGVhZCBcIjAgMCAxMDAgMTAwXCJdXG4gICAgICAgICAgICByZXQgKys9IFtcbiAgICAgICAgICAgICAgICBcIlwiXCI8cmVjdCBmaWxsPVwiI2MyXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIi8+XCJcIlwiXG4gICAgICAgICAgICAgICAgXCJcIlwiPGc+PGc+XCJcIlwiXG4gICAgICAgICAgICAgICAgW1wiXCJcIjxwb2x5Z29uIGZpbGw9XCIjYzFcIiBcIlwiXCIgK1xuICAgICAgICAgICAgICAgICBcIlwiXCJwb2ludHM9XCIjey05MCArIGkgKiAyMH0sMTAwICN7LTEwMCArIGkgKiAyMH0sXCJcIlwiICtcbiAgICAgICAgICAgICAgICAgXCJcIlwiMTAwICN7LTYwICsgaSAqIDIwfSwwICN7LTUwICsgaSAqIDIwfSwwIFwiLz5cIlwiXCIgZm9yIGkgZnJvbSAwIHRpbCAxM10uam9pbihcIlwiKVxuICAgICAgICAgICAgICAgIFwiXCJcIjwvZz48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCIgdHlwZT1cInRyYW5zbGF0ZVwiIFwiXCJcIlxuICAgICAgICAgICAgICAgIFwiXCJcImZyb209XCIwLDBcIiB0bz1cIjIwLDBcIiBkdXI9XCIje2R1cn1zXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIvPjwvZz48L3N2Zz5cIlwiXCJcbiAgICAgICAgICAgIF0uam9pbihcIlwiKVxuICAgICAgICAgICAgd3JhcCByZXRcblxuICAgICAgICBidWJibGU6IChjMSA9IFxcIzM5ZCwgYzIgPSBcXCM5Y2YsIGNvdW50ID0gMTUsIGR1ciA9IDEsIHNpemUgPSA2LCBzdz0xKSAtPlxuICAgICAgICAgICAgcmV0ID0gW0BoZWFkKFwiMCAwIDIwMCAyMDBcIiksIFwiXCJcIjxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiIGZpbGw9XCIjYzFcIi8+XCJcIlwiXVxuICAgICAgICAgICAgZm9yIGkgZnJvbSAwIHRpbCBjb3VudCA9PlxuICAgICAgICAgICAgICAgIGlkeCA9IC0oaSAvIGNvdW50KSAqIGR1clxuICAgICAgICAgICAgICAgIHggPSBNYXRoLnJhbmRvbSEgKiAxODQgKyA4XG4gICAgICAgICAgICAgICAgciA9ICggTWF0aC5yYW5kb20hICogMC43ICsgMC4zICkgKiBzaXplXG4gICAgICAgICAgICAgICAgZCA9IGR1ciAqICgxICsgTWF0aC5yYW5kb20hICogMC41KVxuICAgICAgICAgICAgICAgIHJldC5wdXNoIFtcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiPGNpcmNsZSBjeD1cIiN4XCIgY3k9XCIwXCIgcj1cIiNyXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjYzJcIiBzdHJva2Utd2lkdGg9XCIjc3dcIj5cIlwiXCJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cImN5XCIgdmFsdWVzPVwiMTkwOy0xMFwiIHRpbWVzPVwiMDsxXCIgXCJcIlwiXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcImR1cj1cIiN7ZH1zXCIgYmVnaW49XCIje2lkeH1zXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIvPlwiXCJcIlxuICAgICAgICAgICAgICAgICAgICBcIlwiXCI8L2NpcmNsZT5cIlwiXCJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiPGNpcmNsZSBjeD1cIiN4XCIgY3k9XCIwXCIgcj1cIiNyXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjYzJcIiBzdHJva2Utd2lkdGg9XCIjc3dcIj5cIlwiXCJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cImN5XCIgdmFsdWVzPVwiMzkwOzE5MFwiIHRpbWVzPVwiMDsxXCIgXCJcIlwiXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcImR1cj1cIiN7ZH1zXCIgYmVnaW49XCIje2lkeH1zXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIvPlwiXCJcIlxuICAgICAgICAgICAgICAgICAgICBcIlwiXCI8L2NpcmNsZT5cIlwiXCJcbiAgICAgICAgICAgICAgICBdLmpvaW4oXCJcIilcbiAgICAgICAgICAgIHdyYXAocmV0LmpvaW4oXCJcIikgKyBcIjwvc3ZnPlwiKVxuXG4gICAgaGFuZGxlciA9XG4gICAgICAgIHF1ZXVlOiB7fVxuICAgICAgICBydW5uaW5nOiBmYWxzZVxuICAgICAgICBtYWluOiAodGltZXN0YW1wKSAtPlxuICAgICAgICAgICAga2VlcG9uID0gZmFsc2VcbiAgICAgICAgICAgIHJlbW92ZWQgPSBbXVxuICAgICAgICAgICAgZm9yIGssZnVuYyBvZiBAcXVldWUgPT5cbiAgICAgICAgICAgICAgICByZXQgPSBmdW5jIHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgIGlmICFyZXQgPT4gcmVtb3ZlZC5wdXNoIGZ1bmNcbiAgICAgICAgICAgICAgICBrZWVwb24gPSBrZWVwb24gb3IgcmV0XG4gICAgICAgICAgICBmb3IgayxmdW5jIG9mIEBxdWV1ZSA9PiBpZiByZW1vdmVkLmluZGV4T2YoZnVuYykgPj0gMCA9PiBkZWxldGUgQHF1ZXVlW2tdXG4gICAgICAgICAgICBpZiBrZWVwb24gPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lICh+PiBAbWFpbiBpdClcbiAgICAgICAgICAgIGVsc2UgQHJ1bm5pbmcgPSBmYWxzZVxuICAgICAgICBhZGQ6IChrZXksIGYpIC0+XG4gICAgICAgICAgICBpZiAhQHF1ZXVlW2tleV0gPT4gQHF1ZXVlW2tleV0gPSBmXG4gICAgICAgICAgICBpZiAhQHJ1bm5pbmcgPT5cbiAgICAgICAgICAgICAgICBAcnVubmluZyA9IHRydWVcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKH4+IEBtYWluIGl0KVxuXG5cbiAgICB3aW5kb3cubGRCYXIgPSBsZEJhciA9IChzZWxlY3Rvciwgb3B0aW9uID0ge30pIC0+XG4gICAgICAgIHhtbG5zID0geGxpbms6IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgIHJvb3QgPSBpZiB0eXBlb2YhIHNlbGVjdG9yIGlzIFxcU3RyaW5nXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yIHNlbGVjdG9yXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHNlbGVjdG9yXG5cbiAgICAgICAgaWYgIXJvb3QubGRCYXIgPT4gcm9vdC5sZEJhciA9IEBcbiAgICAgICAgZWxzZSByZXR1cm4gcm9vdC5sZEJhclxuXG4gICAgICAgIGNscyA9IHJvb3QuZ2V0QXR0cmlidXRlKFxcY2xhc3MpIG9yICcnXG4gICAgICAgIGlmICF+Y2xzLmluZGV4T2YoJ2xkQmFyJykgPT4gcm9vdC5zZXRBdHRyaWJ1dGUgXFxjbGFzcywgXCIjY2xzIGxkQmFyXCJcbiAgICAgICAgaWQtcHJlZml4ID0gXCJsZEJhci0je01hdGgucmFuZG9tIXRvU3RyaW5nIDE2IC5zdWJzdHJpbmcgMn1cIlxuICAgICAgICBpZCA9XG4gICAgICAgICAgICBrZXk6IGlkLXByZWZpeFxuICAgICAgICAgICAgY2xpcDogXCIje2lkLXByZWZpeH0tY2xpcFwiXG4gICAgICAgICAgICBmaWx0ZXI6IFwiI3tpZC1wcmVmaXh9LWZpbHRlclwiXG4gICAgICAgICAgICBwYXR0ZXJuOiBcIiN7aWQtcHJlZml4fS1wYXR0ZXJuXCJcbiAgICAgICAgICAgIG1hc2s6IFwiI3tpZC1wcmVmaXh9LW1hc2tcIlxuICAgICAgICAgICAgbWFzay1wYXRoOiBcIiN7aWQtcHJlZml4fS1tYXNrLXBhdGhcIlxuICAgICAgICBkb21UcmVlID0gKG4sbykgLT5cbiAgICAgICAgICAgIG4gPSBuZXdOb2RlIG5cbiAgICAgICAgICAgIGZvciBrLHYgb2YgbyA9PiBpZiBrICE9IFxcYXR0ciA9PiBuLmFwcGVuZENoaWxkIGRvbVRyZWUoaywgdiBvciB7fSlcbiAgICAgICAgICAgIG4uYXR0cnMoby5hdHRyIG9yIHt9KVxuICAgICAgICAgICAgblxuICAgICAgICBuZXdOb2RlID0gKG4pIC0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5fX3Byb3RvX18uX19wcm90b19fLl9fcHJvdG9fX1xuICAgICAgICAgICAgLi50ZXh0ID0gKHQpIC0+IEBhcHBlbmRDaGlsZCBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0KVxuICAgICAgICAgICAgLi5hdHRycyA9IChvKSAtPiBmb3Igayx2IG9mIG8gPT5cbiAgICAgICAgICAgICAgICByZXQgPSAvKFteOl0rKTooW146XSspLy5leGVjKGspXG4gICAgICAgICAgICAgICAgaWYgIXJldCBvciAheG1sbnNbcmV0LjFdID0+IEBzZXRBdHRyaWJ1dGUgaywgdlxuICAgICAgICAgICAgICAgIGVsc2UgQHNldEF0dHJpYnV0ZU5TIHhtbG5zW3JldC4xXSwgaywgdlxuICAgICAgICAgICAgLi5zdHlsZXMgPSAobykgLT4gZm9yIGssdiBvZiBvID0+IEBzdHlsZVtrXSA9IHZcbiAgICAgICAgICAgIC4uYXBwZW5kID0gKG4pIC0+IEBhcHBlbmRDaGlsZCByID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TIFwiaHR0cDovL3d3dy53My5vZy8yMDAwL3N2Z1wiLCBuXG4gICAgICAgICAgICAuLmF0dHIgPSAobix2KSAtPiBpZiB2PyA9PiBAc2V0QXR0cmlidXRlIG4sIHYgZWxzZSBAZ2V0QXR0cmlidXRlIG5cbiAgICAgICAgY29uZmlnID1cbiAgICAgICAgICAgIFwidHlwZVwiOiAnc3Ryb2tlJ1xuICAgICAgICAgICAgXCJpbWdcIjogJydcbiAgICAgICAgICAgIFwicGF0aFwiOiAnTTEwIDEwTDkwIDEwTTkwIDhNOTAgMTInXG4gICAgICAgICAgICBcImZpbGwtZGlyXCI6IFxcYnR0XG4gICAgICAgICAgICBcImZpbGxcIjogXFwjMjViXG4gICAgICAgICAgICBcImZpbGwtYmFja2dyb3VuZFwiOiBcXCNkZGRcbiAgICAgICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogM1xuICAgICAgICAgICAgXCJwYXR0ZXJuLXNpemVcIjogbnVsbFxuICAgICAgICAgICAgXCJzdHJva2UtZGlyXCI6IFxcbm9ybWFsXG4gICAgICAgICAgICBcInN0cm9rZVwiOiBcXCMyNWJcbiAgICAgICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IFxcM1xuICAgICAgICAgICAgXCJzdHJva2UtdHJhaWxcIjogXFwjZGRkXG4gICAgICAgICAgICBcInN0cm9rZS10cmFpbC13aWR0aFwiOiAwLjVcbiAgICAgICAgICAgIFwiZHVyYXRpb25cIjogMVxuICAgICAgICAgICAgXCJlYXNpbmdcIjogXFxsaW5lYXJcbiAgICAgICAgICAgIFwidmFsdWVcIjogMFxuICAgICAgICAgICAgXCJpbWctc2l6ZVwiOiBudWxsXG4gICAgICAgICAgICBcImJib3hcIjogbnVsbFxuICAgICAgICAgICAgXCJzZXQtZGltXCI6IHRydWVcbiAgICAgICAgICAgIFwiYXNwZWN0LXJhdGlvXCI6IFwieE1pZFlNaWRcIlxuICAgICAgICAgICAgXCJ0cmFuc2l0aW9uLWluXCI6IGZhbHNlXG4gICAgICAgICAgICBcIm1pblwiOiAwXG4gICAgICAgICAgICBcIm1heFwiOiAxMDBcbiAgICAgICAgICAgIFwicHJlY2lzaW9uXCI6IDBcbiAgICAgICAgICAgIFwicGFkZGluZ1wiOiB1bmRlZmluZWRcblxuICAgICAgICBjb25maWdbXCJwcmVzZXRcIl0gPSByb290LmF0dHIoXCJkYXRhLXByZXNldFwiKSBvciBvcHRpb25bXCJwcmVzZXRcIl1cblxuICAgICAgICBpZiBjb25maWcucHJlc2V0P1xuICAgICAgICAgICAgIyB1c2UgdGhlIGRlZmF1bHQgcHJlc2V0XG4gICAgICAgICAgICBjb25maWcgPDw8IHByZXNldHNbY29uZmlnLnByZXNldF1cblxuICAgICAgICAjIG92ZXJ3cml0ZSBpZiB0aGVyZSBhcmUgYXJndW1lbnRzIHBhc3NlZCB2aWEgZGF0YS0qIGF0dHJpYnV0ZXNcbiAgICAgICAgZm9yIGF0dHIgb2YgY29uZmlnXG4gICAgICAgICAgICBpZiB0aGF0ID0gcm9vdC5hdHRyIFwiZGF0YS0je2F0dHJ9XCJcbiAgICAgICAgICAgICAgICBjb25maWdbYXR0cl0gPSB0aGF0XG5cbiAgICAgICAgY29uZmlnIDw8PCBvcHRpb25cbiAgICAgICAgaWYgY29uZmlnLmltZyA9PiBjb25maWcucGF0aCA9IG51bGxcblxuICAgICAgICBpcy1zdHJva2UgPSBjb25maWcudHlwZSA9PSBcXHN0cm9rZVxuICAgICAgICBwYXJzZS1yZXMgPSAodikgLT5cbiAgICAgICAgICAgIHBhcnNlciA9IC9kYXRhOmxkYmFyXFwvcmVzLChbXigpXSspXFwoKFteKV0rKVxcKS9cbiAgICAgICAgICAgIHJldCA9IHBhcnNlci5leGVjKHYpXG4gICAgICAgICAgICBpZiAhcmV0ID0+IHJldHVybiB2XG4gICAgICAgICAgICByZXQgPSBtYWtlW3JldC4xXS5hcHBseSBtYWtlLCByZXQuMi5zcGxpdChcXCwpXG4gICAgICAgIGNvbmZpZy5maWxsID0gcGFyc2UtcmVzIGNvbmZpZy5maWxsXG4gICAgICAgIGNvbmZpZy5zdHJva2UgPSBwYXJzZS1yZXMgY29uZmlnLnN0cm9rZVxuICAgICAgICBpZiBjb25maWdbXCJzZXQtZGltXCJdID09IFxcZmFsc2UgPT4gY29uZmlnW1wic2V0LWRpbVwiXSA9IGZhbHNlXG5cbiAgICAgICAgZG9tID1cbiAgICAgICAgICAgIGF0dHI6XG4gICAgICAgICAgICAgICAgXCJ4bWxuczp4bGlua1wiOiBcXGh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBjb25maWdbXCJhc3BlY3QtcmF0aW9cIl1cbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJcbiAgICAgICAgICAgIGRlZnM6XG4gICAgICAgICAgICAgICAgZmlsdGVyOlxuICAgICAgICAgICAgICAgICAgICBhdHRyOiBpZDogaWQuZmlsdGVyLCB4OiAtMSwgeTogLTEsIHdpZHRoOiAzLCBoZWlnaHQ6IDNcbiAgICAgICAgICAgICAgICAgICAgZmVNb3JwaG9sb2d5OiBhdHRyOlxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3I6IChpZiArY29uZmlnW1wiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIl0+PTAgPT4gXFxkaWxhdGUgZWxzZSBcXGVyb2RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiBNYXRoLmFicygrY29uZmlnW1wiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIl0pXG4gICAgICAgICAgICAgICAgICAgIGZlQ29sb3JNYXRyaXg6IGF0dHI6IHt2YWx1ZXM6ICcwIDAgMCAwIDEgICAgMCAwIDAgMCAxICAgIDAgMCAwIDAgMSAgICAwIDAgMCAxIDAnLCByZXN1bHQ6IFwiY21cIn1cbiAgICAgICAgICAgICAgICBtYXNrOlxuICAgICAgICAgICAgICAgICAgICBhdHRyOiBpZDogaWQubWFza1xuICAgICAgICAgICAgICAgICAgICBpbWFnZTogYXR0cjpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieGxpbms6aHJlZlwiOiBjb25maWcuaW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwidXJsKFxcIyN7aWQuZmlsdGVyfSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeDogMCwgeTogMCwgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAsIHByZXNlcnZlQXNwZWN0UmF0aW86IGNvbmZpZ1tcImFzcGVjdC1yYXRpb1wiXVxuXG4gICAgICAgICAgICAgICAgZzpcbiAgICAgICAgICAgICAgICAgICAgbWFzazpcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHI6IGlkOiBpZC5tYXNrLXBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGF0dHI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZDogY29uZmlnLnBhdGggb3IgXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFxcI2ZmZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogXFwjZmZmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcInVybChcXCMje2lkLmZpbHRlcn0pXCJcblxuICAgICAgICAgICAgICAgIGNsaXBQYXRoOlxuICAgICAgICAgICAgICAgICAgICBhdHRyOiBpZDogaWQuY2xpcFxuICAgICAgICAgICAgICAgICAgICByZWN0OiB7YXR0cjogY2xhc3M6IFxcbWFzaywgZmlsbDogXFwjMDAwfVxuICAgICAgICAgICAgICAgIHBhdHRlcm46XG4gICAgICAgICAgICAgICAgICAgIGF0dHI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQucGF0dGVybiwgcGF0dGVyblVuaXRzOiBcXHVzZXJTcGFjZU9uVXNlXG4gICAgICAgICAgICAgICAgICAgICAgICB4OjAsIHk6IDAsIHdpZHRoOiAzMDAsIGhlaWdodDogMzAwXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBhdHRyOiB4OiAwLCB5OiAwLCB3aWR0aDogMzAwLCBoZWlnaHQ6IDMwMFxuXG4gICAgICAgIHN2ZyA9IGRvbVRyZWUgXFxzdmcsIGRvbVxuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBcXGRpdlxuICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZSBcXGNsYXNzLCBcXGxkQmFyLWxhYmVsXG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQgc3ZnXG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQgdGV4dFxuXG4gICAgICAgIGdyb3VwID0gWzAsMF1cbiAgICAgICAgbGVuZ3RoID0gMFxuXG4gICAgICAgIEBmaXQgPSB+PlxuICAgICAgICAgICAgaWYgY29uZmlnW1wiYmJveFwiXSA9PlxuICAgICAgICAgICAgICBib3ggPSB0aGF0LnNwbGl0KCcgJykubWFwKC0+KyhpdC50cmltISkpXG4gICAgICAgICAgICAgIGJveCA9IHt4OiBib3guMCwgeTogYm94LjEsIHdpZHRoOiBib3guMiwgaGVpZ2h0OiBib3guM31cbiAgICAgICAgICAgIGVsc2UgYm94ID0gZ3JvdXAuMS5nZXRCQm94IVxuICAgICAgICAgICAgaWYgIWJveCBvciBib3gud2lkdGggPT0gMCBvciBib3guaGVpZ2h0ID09IDAgPT4gYm94ID0ge3g6IDAsIHk6IDAsIHdpZHRoOiAxMDAsIGhlaWdodDogMTAwfVxuICAgICAgICAgICAgZCA9IChNYXRoLm1heC5hcHBseShcbiAgICAgICAgICAgICAgbnVsbCwgPFtzdHJva2Utd2lkdGggc3Ryb2tlLXRyYWlsLXdpZHRoIGZpbGwtYmFja2dyb3VuZC1leHRydWRlXT4ubWFwKC0+Y29uZmlnW2l0XSkpXG4gICAgICAgICAgICApICogMS41XG4gICAgICAgICAgICBpZiBjb25maWdbXCJwYWRkaW5nXCJdPyA9PiBkID0gK2NvbmZpZ1tcInBhZGRpbmdcIl1cblxuICAgICAgICAgICAgc3ZnLmF0dHJzIHZpZXdCb3g6IFtib3gueCAtIGQsIGJveC55IC0gZCwgYm94LndpZHRoICsgZCAqIDIsIGJveC5oZWlnaHQgKyBkICogMl0uam9pbihcIiBcIilcbiAgICAgICAgICAgIGlmIGNvbmZpZ1tcInNldC1kaW1cIl0gPT4gPFt3aWR0aCBoZWlnaHRdPi5tYXAgfj4gaWYgIXJvb3Quc3R5bGVbaXRdIG9yIEBmaXRbaXRdID0+XG4gICAgICAgICAgICAgIHJvb3Quc3R5bGVbaXRdID0gXCIje2JveFtpdF0gKyBkICogMn1weFwiXG4gICAgICAgICAgICAgIEBmaXRbaXRdID0gdHJ1ZVxuXG4gICAgICAgICAgICByZWN0ID0gZ3JvdXAuMC5xdWVyeVNlbGVjdG9yIFxccmVjdFxuICAgICAgICAgICAgaWYgcmVjdCA9PiByZWN0LmF0dHJzIGRvXG4gICAgICAgICAgICAgICAgeDogYm94LnggLSBkLCB5OiBib3gueSAtIGQsIHdpZHRoOiBib3gud2lkdGggKyBkICogMiwgaGVpZ2h0OiBib3guaGVpZ2h0ICsgZCAqIDJcblxuICAgICAgICBpZiBjb25maWcucGF0aCA9PlxuICAgICAgICAgICAgaWYgaXMtc3Ryb2tlID0+XG4gICAgICAgICAgICAgICAgZ3JvdXAuMCA9IGRvbVRyZWUgXFxnLCBwYXRoOiBhdHRyOlxuICAgICAgICAgICAgICAgICAgICBkOiBjb25maWcucGF0aFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBcXG5vbmVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFxcYmFzZWxpbmVcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBncm91cC4wID0gZG9tVHJlZSBcXGcsIHJlY3Q6IGF0dHI6XG4gICAgICAgICAgICAgICAgICAgIHg6IDAsIHk6IDAsIHdpZHRoOiAxMDAsIGhlaWdodDogMTAwXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IFwidXJsKFxcIyN7aWQubWFzay1wYXRofSlcIiwgZmlsbDogY29uZmlnW1wiZmlsbC1iYWNrZ3JvdW5kXCJdXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcXGZyYW1lXG5cbiAgICAgICAgICAgIHN2Zy5hcHBlbmRDaGlsZCBncm91cC4wXG4gICAgICAgICAgICBncm91cC4xID0gZG9tVHJlZSBcXGcsIHBhdGg6IGF0dHI6XG4gICAgICAgICAgICAgICAgZDogY29uZmlnLnBhdGgsIGNsYXNzOiBpZiBpcy1zdHJva2UgPT4gXFxtYWlubGluZSBlbHNlIFxcc29saWRcbiAgICAgICAgICAgICAgICBcImNsaXAtcGF0aFwiOiBpZiBjb25maWcudHlwZSA9PSBcXGZpbGwgPT4gXCJ1cmwoXFwjI3tpZC5jbGlwfSlcIiBlbHNlICcnXG4gICAgICAgICAgICBzdmcuYXBwZW5kQ2hpbGQgZ3JvdXAuMVxuICAgICAgICAgICAgcGF0aDAgPSBncm91cC4wLnF1ZXJ5U2VsZWN0b3IgKGlmIGlzLXN0cm9rZSA9PiBcXHBhdGggZWxzZSBcXHJlY3QpXG4gICAgICAgICAgICBwYXRoMSA9IGdyb3VwLjEucXVlcnlTZWxlY3RvciBcXHBhdGhcbiAgICAgICAgICAgIGlmIGlzLXN0cm9rZSA9PiBwYXRoMS5hdHRycyBmaWxsOiBcXG5vbmVcblxuICAgICAgICAgICAgcGF0aW1nID0gc3ZnLnF1ZXJ5U2VsZWN0b3IgJ3BhdHRlcm4gaW1hZ2UnXG4gICAgICAgICAgICBpbWcgPSBuZXcgSW1hZ2UhXG4gICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lciBcXGxvYWQsIC0+XG4gICAgICAgICAgICAgICAgYm94ID0gaWYgY29uZmlnW1wicGF0dGVybi1zaXplXCJdID0+IHt3aWR0aDogK3RoYXQsIGhlaWdodDogK3RoYXR9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiBpbWcud2lkdGggYW5kIGltZy5oZWlnaHQgPT4ge3dpZHRoOiBpbWcud2lkdGgsIGhlaWdodDogaW1nLmhlaWdodH1cbiAgICAgICAgICAgICAgICBlbHNlIHt3aWR0aDogMzAwLCBoZWlnaHQ6IDMwMH1cbiAgICAgICAgICAgICAgICBzdmcucXVlcnlTZWxlY3RvciBcXHBhdHRlcm4gLmF0dHJzIHt3aWR0aDogYm94LndpZHRoLCBoZWlnaHQ6IGJveC5oZWlnaHR9XG4gICAgICAgICAgICAgICAgcGF0aW1nLmF0dHJzIHt3aWR0aDogYm94LndpZHRoLCBoZWlnaHQ6IGJveC5oZWlnaHR9XG4gICAgICAgICAgICBpZiAvLitcXC4uK3xeZGF0YTovLmV4ZWMoaWYgIWlzLXN0cm9rZSA9PiBjb25maWcuZmlsbCBlbHNlIGNvbmZpZy5zdHJva2UpID0+XG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGlmICFpcy1zdHJva2UgPT4gY29uZmlnLmZpbGwgZWxzZSBjb25maWcuc3Ryb2tlXG4gICAgICAgICAgICAgICAgcGF0aW1nLmF0dHJzIFwieGxpbms6aHJlZlwiOiBpbWcuc3JjICNpZiAhaXMtc3Ryb2tlID0+IGNvbmZpZy5maWxsIGVsc2UgY29uZmlnLnN0cm9rZVxuXG4gICAgICAgICAgICBpZiBpcy1zdHJva2UgPT5cbiAgICAgICAgICAgICAgICBwYXRoMC5hdHRycyBzdHJva2U6IGNvbmZpZ1tcInN0cm9rZS10cmFpbFwiXSwgXCJzdHJva2Utd2lkdGhcIjogY29uZmlnW1wic3Ryb2tlLXRyYWlsLXdpZHRoXCJdXG4gICAgICAgICAgICAgICAgcGF0aDEuYXR0cnMgZG9cbiAgICAgICAgICAgICAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogY29uZmlnW1wic3Ryb2tlLXdpZHRoXCJdXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogaWYgLy4rXFwuLit8XmRhdGE6Ly5leGVjKGNvbmZpZy5zdHJva2UpID0+IFwidXJsKFxcIyN7aWQucGF0dGVybn0pXCIgZWxzZSBjb25maWcuc3Ryb2tlXG4gICAgICAgICAgICBpZiBjb25maWcuZmlsbCBhbmQgIWlzLXN0cm9rZSA9PlxuICAgICAgICAgICAgICAgIHBhdGgxLmF0dHJzIGRvXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGlmIC8uK1xcLi4rfF5kYXRhOi8uZXhlYyhjb25maWcuZmlsbCkgPT4gXCJ1cmwoXFwjI3tpZC5wYXR0ZXJufSlcIiBlbHNlIGNvbmZpZy5maWxsXG5cbiAgICAgICAgICAgIGxlbmd0aCA9IHBhdGgxLmdldFRvdGFsTGVuZ3RoIVxuICAgICAgICAgICAgQGZpdCFcbiAgICAgICAgICAgIEBpbml0ZWQgPSB0cnVlXG4gICAgICAgIGVsc2UgaWYgY29uZmlnLmltZyA9PlxuICAgICAgICAgICAgaWYgY29uZmlnW1wiaW1nLXNpemVcIl0gPT5cbiAgICAgICAgICAgICAgICByZXQgPSBjb25maWdbXCJpbWctc2l6ZVwiXS5zcGxpdChcXCwpXG4gICAgICAgICAgICAgICAgc2l6ZSA9IHt3aWR0aDogK3JldC4wLCBoZWlnaHQ6ICtyZXQuMX1cbiAgICAgICAgICAgIGVsc2Ugc2l6ZSA9IHt3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMH1cblxuICAgICAgICAgICAgZ3JvdXAuMCA9IGRvbVRyZWUgXFxnLCByZWN0OiBhdHRyOlxuICAgICAgICAgICAgICAgIHg6IDAsIHk6IDAsIHdpZHRoOiAxMDAsIGhlaWdodDogMTAwLCBtYXNrOiBcInVybChcXCMje2lkLm1hc2t9KVwiLCBmaWxsOiBjb25maWdbXCJmaWxsLWJhY2tncm91bmRcIl1cbiAgICAgICAgICAgIHN2Zy5xdWVyeVNlbGVjdG9yICdtYXNrIGltYWdlJyAuYXR0cnMgZG9cbiAgICAgICAgICAgICAgICB3aWR0aDogc2l6ZS53aWR0aCwgaGVpZ2h0OiBzaXplLmhlaWdodFxuICAgICAgICAgICAgZ3JvdXAuMSA9IGRvbVRyZWUgXFxnLCBpbWFnZTogYXR0cjpcbiAgICAgICAgICAgICAgICB3aWR0aDogc2l6ZS53aWR0aCwgaGVpZ2h0OiBzaXplLmhlaWdodCwgeDogMCwgeTogMCwgcHJlc2VydmVBc3BlY3RSYXRpbzogY29uZmlnW1wiYXNwZWN0LXJhdGlvXCJdXG4gICAgICAgICAgICAgICAgI3dpZHRoOiAxMDAsIGhlaWdodDogMTAwLCB4OiAwLCB5OiAwLCBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBcInhNaWRZTWlkXCJcbiAgICAgICAgICAgICAgICBcImNsaXAtcGF0aFwiOiBpZiBjb25maWcudHlwZSA9PSBcXGZpbGwgPT4gXCJ1cmwoXFwjI3tpZC5jbGlwfSlcIiBlbHNlICcnXG4gICAgICAgICAgICAgICAgXCJ4bGluazpocmVmXCI6IGNvbmZpZy5pbWcsIGNsYXNzOiBcXHNvbGlkXG4gICAgICAgICAgICBpbWcgPSBuZXcgSW1hZ2UhXG4gICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lciBcXGxvYWQsIH4+XG4gICAgICAgICAgICAgICAgaWYgY29uZmlnW1wiaW1nLXNpemVcIl0gPT5cbiAgICAgICAgICAgICAgICAgICAgcmV0ID0gY29uZmlnW1wiaW1nLXNpemVcIl0uc3BsaXQoXFwsKVxuICAgICAgICAgICAgICAgICAgICBzaXplID0ge3dpZHRoOiArcmV0LjAsIGhlaWdodDogK3JldC4xfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgaW1nLndpZHRoIGFuZCBpbWcuaGVpZ2h0ID0+IHNpemUgPSB7d2lkdGg6IGltZy53aWR0aCwgaGVpZ2h0OiBpbWcuaGVpZ2h0fVxuICAgICAgICAgICAgICAgIGVsc2Ugc2l6ZSA9IHt3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMH1cbiAgICAgICAgICAgICAgICBzdmcucXVlcnlTZWxlY3RvciAnbWFzayBpbWFnZScgLmF0dHJzIGRvXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBzaXplLndpZHRoLCBoZWlnaHQ6IHNpemUuaGVpZ2h0XG4gICAgICAgICAgICAgICAgZ3JvdXAuMS5xdWVyeVNlbGVjdG9yICdpbWFnZScgLmF0dHJzIGRvXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBzaXplLndpZHRoLCBoZWlnaHQ6IHNpemUuaGVpZ2h0XG5cbiAgICAgICAgICAgICAgICBAZml0IVxuICAgICAgICAgICAgICAgIEBzZXQgdW5kZWZpbmVkLCBmYWxzZVxuICAgICAgICAgICAgICAgIEBpbml0ZWQgPSB0cnVlXG4gICAgICAgICAgICBpbWcuc3JjID0gY29uZmlnLmltZ1xuICAgICAgICAgICAgc3ZnLmFwcGVuZENoaWxkIGdyb3VwLjBcbiAgICAgICAgICAgIHN2Zy5hcHBlbmRDaGlsZCBncm91cC4xXG4gICAgICAgIHN2Zy5hdHRycyB3aWR0aDogXFwxMDAlLCBoZWlnaHQ6IFxcMTAwJSAjLCB2aWV3Qm94OiAnMCAwIDEwMCAxMDAnXG5cbiAgICAgICAgQHRyYW5zaXRpb24gPVxuICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgc3JjOiAwXG4gICAgICAgICAgICAgICAgZGVzOiAwXG4gICAgICAgICAgICB0aW1lOiB7fVxuXG4gICAgICAgICAgICBlYXNlOiAodCxiLGMsZCkgLT5cbiAgICAgICAgICAgICAgICB0ID0gdCAvIChkICogMC41KVxuICAgICAgICAgICAgICAgIGlmIHQgPCAxID0+IHJldHVybiBjICogMC41ICogdCAqIHQgKyBiXG4gICAgICAgICAgICAgICAgdCA9IHQgLSAxXG4gICAgICAgICAgICAgICAgcmV0dXJuIC1jICogMC41ICogKHQqKHQgLSAyKSAtIDEpICsgYlxuXG4gICAgICAgICAgICBoYW5kbGVyOiAodGltZSwgZG9UcmFuc2l0aW9uID0gdHJ1ZSkgLT5cbiAgICAgICAgICAgICAgICBpZiAhQHRpbWUuc3JjPyA9PiBAdGltZS5zcmMgPSB0aW1lXG4gICAgICAgICAgICAgICAgW21pbixtYXgscHJlY10gPSBbY29uZmlnW1wibWluXCJdLCBjb25maWdbXCJtYXhcIl0sMS9jb25maWdbXCJwcmVjaXNpb25cIl1dXG4gICAgICAgICAgICAgICAgW2R2LCBkdCwgZHVyXSA9IFtAdmFsdWUuZGVzIC0gQHZhbHVlLnNyYywgKHRpbWUgLSBAdGltZS5zcmMpICogMC4wMDEsICtjb25maWdbXCJkdXJhdGlvblwiXSBvciAxXVxuICAgICAgICAgICAgICAgIHYgPSBpZiBkb1RyYW5zaXRpb24gPT4gQGVhc2UoZHQsIEB2YWx1ZS5zcmMsIGR2LCBkdXIpIGVsc2UgQHZhbHVlLmRlc1xuICAgICAgICAgICAgICAgIGlmIGNvbmZpZy5wcmVjaXNpb24gPT4gdiA9IE1hdGgucm91bmQodiAqIHByZWMpIC8gcHJlY1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgZG9UcmFuc2l0aW9uID0+IHYgPSBNYXRoLnJvdW5kKHYpXG4gICAgICAgICAgICAgICAgdiA+Pz0gbWluXG4gICAgICAgICAgICAgICAgdiA8Pz0gbWF4XG4gICAgICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IHZcbiAgICAgICAgICAgICAgICBwID0gMTAwLjAgKiAodiAtIG1pbiApIC8gKCBtYXggLSBtaW4gKVxuICAgICAgICAgICAgICAgIGlmIGlzLXN0cm9rZSA9PlxuICAgICAgICAgICAgICAgICAgICBub2RlID0gcGF0aDFcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHJva2UtZGFzaGFycmF5XCI6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiBjb25maWdbXCJzdHJva2UtZGlyXCJdID09IFxccmV2ZXJzZSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjAgI3tsZW5ndGggKiAoMTAwIC0gcCkgKiAwLjAxfSAje2xlbmd0aCAqIHAgKiAwLjAxfSAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlID0+IFwiI3twICogMC4wMSAqIGxlbmd0aH0gI3soMTAwIC0gcCkgKiAwLjAxICogbGVuZ3RoICsgMX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgYm94ID0gZ3JvdXAuMS5nZXRCQm94IVxuICAgICAgICAgICAgICAgICAgICBkaXIgPSBjb25maWdbXCJmaWxsLWRpclwiXVxuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IGlmIGRpciA9PSBcXGJ0dCBvciAhZGlyID0+IGRvXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBib3gueSArIGJveC5oZWlnaHQgKiAoMTAwIC0gcCkgKiAwLjAxXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGJveC5oZWlnaHQgKiBwICogMC4wMVxuICAgICAgICAgICAgICAgICAgICAgICAgeDogYm94LngsIHdpZHRoOiBib3gud2lkdGhcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiBkaXIgPT0gXFx0dGIgPT4gZG9cbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGJveC55LCBoZWlnaHQ6IGJveC5oZWlnaHQgKiBwICogMC4wMVxuICAgICAgICAgICAgICAgICAgICAgICAgeDogYm94LngsIHdpZHRoOiBib3gud2lkdGhcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiBkaXIgPT0gXFxsdHIgPT4gZG9cbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGJveC55LCBoZWlnaHQ6IGJveC5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGJveC54LCB3aWR0aDogYm94LndpZHRoICogcCAqIDAuMDFcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiBkaXIgPT0gXFxydGwgPT4gZG9cbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGJveC55LCBoZWlnaHQ6IGJveC5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGJveC54ICsgYm94LndpZHRoICogKDEwMCAtIHApICogMC4wMVxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGJveC53aWR0aCAqIHAgKiAwLjAxXG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBzdmcucXVlcnlTZWxlY3RvciBcXHJlY3RcbiAgICAgICAgICAgICAgICBub2RlLmF0dHJzIHN0eWxlXG4gICAgICAgICAgICAgICAgaWYgZHQgPj0gZHVyID0+IGRlbGV0ZSBAdGltZS5zcmM7IHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICBzdGFydDogKHNyYywgZGVzLCBkb1RyYW5zaXRpb24pIC0+XG4gICAgICAgICAgICAgICAgQHZhbHVlIDw8PCB7c3JjLCBkZXN9XG4gICAgICAgICAgICAgICAgISEoIHJvb3Qub2Zmc2V0V2lkdGggfHwgcm9vdC5vZmZzZXRIZWlnaHQgfHwgcm9vdC5nZXRDbGllbnRSZWN0cyFsZW5ndGggKVxuICAgICAgICAgICAgICAgIGlmICFkb1RyYW5zaXRpb24gb3IgISggcm9vdC5vZmZzZXRXaWR0aCB8fCByb290Lm9mZnNldEhlaWdodCB8fCByb290LmdldENsaWVudFJlY3RzIWxlbmd0aCApID0+XG4gICAgICAgICAgICAgICAgICAgIEB0aW1lLnNyYyA9IDBcbiAgICAgICAgICAgICAgICAgICAgQGhhbmRsZXIgMTAwMCwgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgaGFuZGxlci5hZGQgaWQua2V5LCAodGltZSkgfj4gcmV0dXJuIEBoYW5kbGVyIHRpbWVcblxuICAgICAgICBAc2V0ID0gKHYsZG9UcmFuc2l0aW9uID0gdHJ1ZSkgLT5cbiAgICAgICAgICAgIHNyYyA9IEB2YWx1ZSBvciAwXG4gICAgICAgICAgICBpZiB2PyA9PiBAdmFsdWUgPSB2IGVsc2UgdiA9IEB2YWx1ZVxuICAgICAgICAgICAgZGVzID0gQHZhbHVlXG4gICAgICAgICAgICBAdHJhbnNpdGlvbi5zdGFydCBzcmMsIGRlcywgZG9UcmFuc2l0aW9uXG5cbiAgICAgICAgQHNldCAoK2NvbmZpZy52YWx1ZSBvciAwKSwgY29uZmlnW1widHJhbnNpdGlvbi1pblwiXSBvciBmYWxzZVxuICAgICAgICBAXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciBcXGxvYWQsICgtPlxuICAgICAgICBmb3Igbm9kZSBpbiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxcLmxkQmFyKSA9PlxuICAgICAgICAgIGlmICFub2RlLmxkQmFyID0+IG5vZGUubGRCYXIgPSBuZXcgbGRCYXIgbm9kZVxuICAgICksIGZhbHNlXG5cbm1vZHVsZS5leHBvcnRzID0gbGRCYXJcbiIsImV4cG9ydCBwcmVzZXRzID1cbiAgICByYWluYm93OlxuICAgICAgICBcInR5cGVcIjogJ3N0cm9rZSdcbiAgICAgICAgXCJwYXRoXCI6ICdNMTAgMTBMOTAgMTAnXG4gICAgICAgIFwic3Ryb2tlXCI6ICdkYXRhOmxkYmFyL3JlcyxncmFkaWVudCgwLDEsI2E1NTFkZiwjZmQ1MWFkLCNmZjdmODIsI2ZmYjg3NCwjZmZlYjkwKSdcbiAgICAgICAgXCJiYm94XCI6IFwiMTAgMTAgODAgMTBcIlxuICAgIGVuZXJneTpcbiAgICAgICAgXCJ0eXBlXCI6ICdmaWxsJ1xuICAgICAgICBcInBhdGhcIjogJ00xNSA1TDg1IDVBNSA1IDAgMCAxIDg1IDE1TDE1IDE1QTUgNSAwIDAgMSAxNSA1J1xuICAgICAgICBcInN0cm9rZVwiOiBcXCNmMDBcbiAgICAgICAgXCJmaWxsXCI6ICdkYXRhOmxkYmFyL3JlcyxncmFkaWVudCg0NSwyLCM0ZTksIzhmYiwjNGU5KSdcbiAgICAgICAgXCJmaWxsLWRpclwiOiBcImx0clwiXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6IFxcIzQ0NFxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDFcbiAgICAgICAgXCJiYm94XCI6IFwiMTAgNSA4MCAxMFwiXG4gICAgc3RyaXBlOlxuICAgICAgICBcInR5cGVcIjogJ2ZpbGwnXG4gICAgICAgIFwicGF0aFwiOiAnTTE1IDVMODUgNUE1IDUgMCAwIDEgODUgMTVMMTUgMTVBNSA1IDAgMCAxIDE1IDUnXG4gICAgICAgIFwic3Ryb2tlXCI6IFxcI2YwMFxuICAgICAgICBcImZpbGxcIjogJ2RhdGE6bGRiYXIvcmVzLHN0cmlwZSgjMjViLCM1OGUsMSknXG4gICAgICAgIFwiZmlsbC1kaXJcIjogXCJsdHJcIlxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZFwiOiBcXCNkZGRcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAxXG4gICAgICAgIFwiYmJveFwiOiBcIjEwIDUgODAgMTBcIlxuICAgIHRleHQ6XG4gICAgICAgIFwidHlwZVwiOiAnZmlsbCdcbiAgICAgICAgXCJpbWdcIjogXCJcIlwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiNzBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgNzAgMjBcIj48dGV4dCB4PVwiMzVcIiB5PVwiMTBcIiB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiIGRvbWluYW50LWJhc2VsaW5lPVwiY2VudHJhbFwiIGZvbnQtZmFtaWx5PVwiYXJpYWxcIj5MT0FESU5HPC90ZXh0Pjwvc3ZnPlwiXCJcIlxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDEuM1xuICAgICAgICBcInBhdHRlcm4tc2l6ZVwiOiAxMDBcbiAgICAgICAgXCJmaWxsLWRpclwiOiBcImx0clwiXG4gICAgICAgIFwiaW1nLXNpemVcIjogXCI3MCwyMFwiXG4gICAgICAgIFwiYmJveFwiOiBcIjAgMCA3MCAyMFwiXG4gICAgbGluZTpcbiAgICAgICAgXCJ0eXBlXCI6ICdzdHJva2UnXG4gICAgICAgIFwicGF0aFwiOiAnTTEwIDEwTDkwIDEwJ1xuICAgICAgICBcInN0cm9rZVwiOiBcXCMyNWJcbiAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogM1xuICAgICAgICBcInN0cm9rZS10cmFpbFwiOiBcXCNkZGRcbiAgICAgICAgXCJzdHJva2UtdHJhaWwtd2lkdGhcIjogMVxuICAgICAgICBcImJib3hcIjogXCIxMCAxMCA4MCAxMFwiXG4gICAgZmFuOlxuICAgICAgICBcInR5cGVcIjogJ3N0cm9rZSdcbiAgICAgICAgXCJwYXRoXCI6ICdNMTAgOTBBNDAgNDAgMCAwIDEgOTAgOTAnXG4gICAgICAgIFwiZmlsbC1kaXJcIjogXFxidHRcbiAgICAgICAgXCJmaWxsXCI6IFxcIzI1YlxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZFwiOiBcXCNkZGRcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAzXG4gICAgICAgIFwic3Ryb2tlLWRpclwiOiBcXG5vcm1hbFxuICAgICAgICBcInN0cm9rZVwiOiBcXCMyNWJcbiAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogXFwzXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsXCI6IFxcI2RkZFxuICAgICAgICBcInN0cm9rZS10cmFpbC13aWR0aFwiOiAwLjVcbiAgICAgICAgXCJiYm94XCI6IFwiMTAgNTAgODAgNDBcIlxuICAgIGNpcmNsZTpcbiAgICAgICAgXCJ0eXBlXCI6ICdzdHJva2UnXG4gICAgICAgIFwicGF0aFwiOiAnTTUwIDEwQTQwIDQwIDAgMCAxIDUwIDkwQTQwIDQwIDAgMCAxIDUwIDEwJ1xuICAgICAgICBcImZpbGwtZGlyXCI6IFxcYnR0XG4gICAgICAgIFwiZmlsbFwiOiBcXCMyNWJcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmRcIjogXFwjZGRkXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogM1xuICAgICAgICBcInN0cm9rZS1kaXJcIjogXFxub3JtYWxcbiAgICAgICAgXCJzdHJva2VcIjogXFwjMjViXG4gICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IFxcM1xuICAgICAgICBcInN0cm9rZS10cmFpbFwiOiBcXCNkZGRcbiAgICAgICAgXCJzdHJva2UtdHJhaWwtd2lkdGhcIjogMC41XG4gICAgICAgIFwiYmJveFwiOiBcIjEwIDEwIDgwIDgwXCJcbiAgICBidWJibGU6XG4gICAgICAgIFwidHlwZVwiOiAnZmlsbCdcbiAgICAgICAgXCJwYXRoXCI6ICdNNTAgMTBBNDAgNDAgMCAwIDEgNTAgOTBBNDAgNDAgMCAwIDEgNTAgMTAnXG4gICAgICAgIFwiZmlsbC1kaXJcIjogXFxidHRcbiAgICAgICAgXCJmaWxsXCI6ICdkYXRhOmxkYmFyL3JlcyxidWJibGUoIzM5ZCwjY2VmKSdcbiAgICAgICAgXCJwYXR0ZXJuLXNpemVcIjogXCIxNTBcIlxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZFwiOiBcXCNkZGRcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAyXG4gICAgICAgIFwic3Ryb2tlLWRpclwiOiBcXG5vcm1hbFxuICAgICAgICBcInN0cm9rZVwiOiBcXCMyNWJcbiAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogXFwzXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsXCI6IFxcI2RkZFxuICAgICAgICBcInN0cm9rZS10cmFpbC13aWR0aFwiOiAwLjVcbiAgICAgICAgXCJiYm94XCI6IFwiMTAgMTAgODAgODBcIlxuIiwiLy9kw6lmaW5pdGlvbiBkZXMgdmFyaWFibGVzXG4vL3BsdWdzXG5sZXQgTGlzdFBsdWdzID0gW11cbi8vZGV0ZWN0aW9uIHNpIGxlIGJyb3dzZXIgZ8OocmUgbGUgZHJhZyZkcm9wXG52YXIgaXNBZHZhbmNlZFVwbG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmV0dXJuICgoJ2RyYWdnYWJsZScgaW4gZGl2KSB8fCAoJ29uZHJhZ3N0YXJ0JyBpbiBkaXYgJiYgJ29uZHJvcCcgaW4gZGl2KSkgJiYgJ0Zvcm1EYXRhJyBpbiB3aW5kb3cgJiYgJ0ZpbGVSZWFkZXInIGluIHdpbmRvdztcbn0oKTtcbnZhciAkZm9ybSA9ICQoJy5ib3gnKTtcbnZhciAkaW5wdXQgICAgPSAkZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLFxuICAgICRsYWJlbCAgICA9ICRmb3JtLmZpbmQoJ2xhYmVsJyksXG4gICAgc2hvd0ZpbGVzID0gZnVuY3Rpb24oZmlsZXMpIHtcbiAgICAgICRsYWJlbC50ZXh0KGZpbGVzLmxlbmd0aCA+IDEgPyAoJGlucHV0LmF0dHIoJ2RhdGEtbXVsdGlwbGUtY2FwdGlvbicpIHx8ICcnKS5yZXBsYWNlKCAne2NvdW50fScsIGZpbGVzLmxlbmd0aCApIDogZmlsZXNbIDAgXS5uYW1lKTtcbiAgICB9O1xuLy9pZGVudGlmaWNhdGlvbiBkZSBsYSBwcm9ncmVzcyBiYXJcbnByZ2JhciA9IG5ldyBsZEJhcihcIiN0ZXN0LXByb2dyZXNzXCIpO1xuXG4vL29uIG91dnJlIGxlIGZvcm0gcG91ciBham91dGVyXG5cbiQoJyNhZGRQbHVncycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xufSk7XG5pZiAoaXNBZHZhbmNlZFVwbG9hZCkge1xuICAgIHZhciBkcm9wcGVkRmlsZXMgPSBmYWxzZTtcbiAgICAkZm9ybS5hZGRDbGFzcygnaGFzLWFkdmFuY2VkLXVwbG9hZCcpOyAvLyBsZXR0aW5nIHRoZSBDU1MgcGFydCB0byBrbm93IGRyYWcmZHJvcCBpcyBzdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXJcbiAgICAkZm9ybS5vbignZHJhZyBkcmFnc3RhcnQgZHJhZ2VuZCBkcmFnb3ZlciBkcmFnZW50ZXIgZHJhZ2xlYXZlIGRyb3AnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gICAgJGZvcm0ub24oJ2RyYWdvdmVyIGRyYWdlbnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGZvcm0uYWRkQ2xhc3MoJ2lzLWRyYWdvdmVyJyk7XG4gICAgfSk7XG4gICAgJGZvcm0ub24oJ2RyYWdsZWF2ZSBkcmFnZW5kIGRyb3AnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRmb3JtLnJlbW92ZUNsYXNzKCdpcy1kcmFnb3ZlcicpO1xuICAgIH0pO1xuICAgICRmb3JtLm9uKCdkcm9wJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZHJvcHBlZEZpbGVzID0gZS5vcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcbiAgICAgICAgJGZvcm0udHJpZ2dlcignc3VibWl0Jyk7XG4gICAgfSk7XG59XG4kZm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgaWYgKCRmb3JtLmhhc0NsYXNzKCdpcy11cGxvYWRpbmcnKSkgcmV0dXJuIGZhbHNlO1xuICAgIHNob3dGaWxlcyggZHJvcHBlZEZpbGVzICk7XG4gICAgJGZvcm0uYWRkQ2xhc3MoJ2lzLXVwbG9hZGluZycpLnJlbW92ZUNsYXNzKCdpcy1lcnJvcicpO1xuXG4gICAgaWYgKGlzQWR2YW5jZWRVcGxvYWQpIHtcbiAgICAgICAgdmFyIGFqYXhEYXRhID0gbmV3IEZvcm1EYXRhKCRmb3JtLmdldCgwKSk7XG5cbiAgICAgICAgaWYgKGRyb3BwZWRGaWxlcykge1xuICAgICAgICAgICAgJC5lYWNoKGRyb3BwZWRGaWxlcywgZnVuY3Rpb24gKGksIGZpbGUpIHtcbiAgICAgICAgICAgICAgICBhamF4RGF0YS5hcHBlbmQoJGlucHV0LmF0dHIoJ25hbWUnKSwgZmlsZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhhamF4RGF0YSk7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICcvYWxzdG9tL3VwbG9hZEZpbGUnLFxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgLypkYXRhOiB7XG4gICAgICAgICAgICAgICAgJ2ZpbGUnIDogYWpheERhdGEsXG4gICAgICAgICAgICAgICAgJ2J1Y2tldCc6ICdhcHBsaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgJ3VwbG9hZF9yZXF1ZXN0JzogXCJ1cGxvYWRcIlxuICAgICAgICAgICAgfSwqL1xuICAgICAgICAgICAgeGhyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwZXJjZW50Q29tcGxldGUgPSAoZXZ0LmxvYWRlZCAvIGV2dC50b3RhbCkgKiAxMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL0RvIHNvbWV0aGluZyB3aXRoIHVwbG9hZCBwcm9ncmVzcyBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmdiYXIuc2V0KHBlcmNlbnRDb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwZXJjZW50Q29tcGxldGUgPT0gMTAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3Rlc3QtcHJvZ3Jlc3NcIikuYWRkQ2xhc3MoJ2lzLWJsaW5rJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgIHJldHVybiB4aHI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YTphamF4RGF0YSxcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRmb3JtLnJlbW92ZUNsYXNzKCdpcy11cGxvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAkKFwiI3Rlc3QtcHJvZ3Jlc3NcIikucmVtb3ZlQ2xhc3MoJ2lzLWJsaW5rJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkZm9ybS5hZGRDbGFzcyhkYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSA/ICdpcy1zdWNjZXNzJyA6ICdpcy1lcnJvcicpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gTG9nIHRoZSBlcnJvciwgc2hvdyBhbiBhbGVydCwgd2hhdGV2ZXIgd29ya3MgZm9yIHlvdVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic29ycnkgYm9ieVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGlmcmFtZU5hbWUgID0gJ3VwbG9hZGlmcmFtZScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAkaWZyYW1lICAgPSAkKCc8aWZyYW1lIG5hbWU9XCInICsgaWZyYW1lTmFtZSArICdcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+PC9pZnJhbWU+Jyk7XG4gICAgICBcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkaWZyYW1lKTtcbiAgICAgICAgJGZvcm0uYXR0cigndGFyZ2V0JywgaWZyYW1lTmFtZSk7XG4gICAgICBcbiAgICAgICAgJGlmcmFtZS5vbmUoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoJGlmcmFtZS5jb250ZW50cygpLmZpbmQoJ2JvZHknICkudGV4dCgpKTtcbiAgICAgICAgICAkZm9ybVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy11cGxvYWRpbmcnKVxuICAgICAgICAgICAgLmFkZENsYXNzKGRhdGEuc3VjY2VzcyA9PSB0cnVlID8gJ2lzLXN1Y2Nlc3MnIDogJ2lzLWVycm9yJylcbiAgICAgICAgICAgIC5yZW1vdmVBdHRyKCd0YXJnZXQnKTtcbiAgICAgICAgICBpZiAoIWRhdGEuc3VjY2VzcykgJGVycm9yTXNnLnRleHQoZGF0YS5lcnJvcik7XG4gICAgICAgICAgJGZvcm0ucmVtb3ZlQXR0cigndGFyZ2V0Jyk7XG4gICAgICAgICAgJGlmcmFtZS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cbiQoJyN0ZXN0LXVwbG9hZCcpLm9uKFwiY2xpY2tcIiwgXCJidXR0b25cIiwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBmaWxlc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdG9yXCIpLmZpbGVzO1xuICAgIHZhciB0ZW1wRGVzdGluYXRpb24gPSBcInRlc3RcIlxuICAgIHZhciBuYW1lRmlsZSA9IFwiaW5pdFwiXG4gICAgdmFyIHVwbG9hZFN0YXR1cyA9IFwiUEVORElOR1wiXG4gICAgLy9PbiBkcmFnIGV0IGRyb3BcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6ICcvYWxzdG9tL3JlcXVlc3RGaWxlJyxcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAnYnVja2V0JzogJ2FwcGxpY2F0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRlbXBEZXN0aW5hdGlvbiA9IHJlc3BvbnNlLnBhdGhcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2Fsc3RvbS91cGxvYWRGaWxlJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAnYnVja2V0JzogJ2FwcGxpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgJ3VwbG9hZF9yZXF1ZXN0JzogXCJ1cGxvYWRcIixcbiAgICAgICAgICAgICAgICAgICAgJ2ZpbGVuYW1lJzogbmFtZUZpbGUsXG4gICAgICAgICAgICAgICAgICAgICd0ZW1wRGVzdGluYXRpb24nOiB0ZW1wRGVzdGluYXRpb25cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9hc2sgZm9yIHRoZSBzdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyBcbiIsIi8vIFZpZGFnZSBkZXMgaW5wdXRzIGF1eCBjaGFuZ2VtZW50IGRlIHNlbGVjdFxyXG4vLyAkKCdzZWxlY3RbbmFtZT1cInRyYWluc1twcm9qZWN0c11cIl0sIHNlbGVjdFtuYW1lPVwidHJhaW5zW3RyYWluVHlwZV1cIl0nKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgJCgnaW5wdXRbbmFtZT1cInRyYWluc1tuYW1lXVwiXScpLnZhbCgnJyk7XHJcbi8vIH0pO1xyXG5cclxuLypNYXNxdWFnZSBkZSBjZXJ0YWlucyDDqWxlbWVudCAqL1xyXG4kKCcjY3JlYXRlLWVydG1zLTEnKS5oaWRlKCk7XHJcbiQoJyNjcmVhdGUtZXJ0bXMtMicpLmhpZGUoKTtcclxuJChcIiNjcmVhdGUtZXJ0bXMtdHJhaW4tMVwiKS5oaWRlKCk7XHJcbiQoJyNjcmVhdGVfc291c3R5cGUnKS5oaWRlKCk7XHJcbiQoJyNjcmVhdGVfdHlwZScpLmhpZGUoKTtcclxuJCgnI21vZGFsLWJvZHknKS5oaWRlKCk7XHJcbiQoJyNtb2RhbF9iYXNlbGluZV9lcXVpcGVtZW50JykuaGlkZSgpO1xyXG4kKCcjY2xvc2UtbW9kYWwtZm9ybS1iYXNlbGluZS10cmFpbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNtb2RhbF9iYXNlbGluZV9lcXVpcGVtZW50JykuaGlkZSgpO1xyXG59KVxyXG5mb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xyXG4gICAgJCgnI2J0bi1iYXNlbGluZS0nICsgaSkuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxufVxyXG5sZXQgaWRFcXVpcG1lbnQgPSBcIlwiLFxyXG4gICAgaW5kZXhFVkM7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbm9tYnJlX3VybCA9IGV4dHJhaXROb21icmUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuXHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09ICcvYWxzdG9tL0luc3RhbmNlQmFzZWxpbmUvJyArIG5vbWJyZV91cmwpIHtcclxuXHJcbiAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAgICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja0Jhc2VsaW5lXCIsICkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIC8vUmVtcGxpc3NhZ2UgcGFyIGxlcyBlbGVtZW50IHJlw6d1IGR1IGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICQoJyNzZWxlY3RfYmFzZWxpbmVfMScpLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3NlbGVjdF9iYXNlbGluZV8yJykuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAkKCcjc2VsZWN0X2Jhc2VsaW5lXzEnKS52YWwoJycpO1xyXG4gICAgICAgICAgICAkKCcjc2VsZWN0X2Jhc2VsaW5lXzInKS52YWwoJycpO1xyXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59KVxyXG5cclxuJCgnI3NlbGVjdF90cmFpbicpLnNob3coKTtcclxuJCgnI3NlbGVjdF9sb2NvbW90aXZlJykuc2hvdygpO1xyXG5cclxubGV0IGN1cnJlbnRfY2hvaWNlID0gXCJcIixcclxuICAgIGVydG1zX2xlZnQgPSBmYWxzZSxcclxuICAgIGVydG1zX21pZGRsZSA9IGZhbHNlLFxyXG4gICAgZXJ0bXNfcmlnaHQgPSBmYWxzZTtcclxuXHJcbiQoJyNjbG9zZS1tb2RhbC1iYXNlbGluZS0xJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGVydG1zX3JpZ2h0ID09IHRydWUpIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5hZGRDbGFzcygnb2Zmc2V0LW1kLTYnKTtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5oaWRlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLmhpZGUoKTtcclxuICAgIH1cclxuICAgIGVydG1zX2xlZnQgPSBmYWxzZTtcclxufSlcclxuJCgnI2Nsb3NlLW1vZGFsLWJhc2VsaW5lLTInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5oaWRlKCk7XHJcbiAgICBlcnRtc19yaWdodCA9IGZhbHNlO1xyXG59KVxyXG4kKCcjZXJ0bXMtdHJhaW4tMScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGVydG1zX2xlZnQgPSB0cnVlO1xyXG4gICAgZXJ0bXNfbWlkZGxlID0gZmFsc2U7XHJcbiAgICAvL2wnZXJ0bXMgZGUgZ2F1Y2hlIHNlbGVjdGlvbm5lclxyXG4gICAgJCgnI2VydG1zLXRyYWluLTEnKS5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCgnI2VydG1zLXRyYWluLTInKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCgnI2xhYmVsLWJhc2VsaW5lLTEnKS50ZXh0KCdCYXNlbGluZSBsZWZ0Jyk7XHJcbiAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5yZW1vdmVDbGFzcygnb2Zmc2V0LW1kLTMnKTtcclxuICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLnNob3coKTtcclxuICAgIGlmIChlcnRtc19yaWdodCA9PSBmYWxzZSkge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLmhpZGUoKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5yZW1vdmVDbGFzcygnb2Zmc2V0LW1kLTYnKTtcclxuICAgIH1cclxuXHJcblxyXG59KTtcclxuJCgnI2VydG1zLXRyYWluLTInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBsJ2VydG1zIGR1IG1pbGlldSBzZWxlY3Rpb25uZXJcclxuICAgIGVydG1zX2xlZnQgPSBmYWxzZTtcclxuICAgIGVydG1zX3JpZ2h0ID0gZmFsc2U7XHJcbiAgICBlcnRtc19taWRkbGUgPSB0cnVlO1xyXG4gICAgJCgnI2VydG1zLXRyYWluLTInKS5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCgnI2VydG1zLXRyYWluLTEnKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCgnI2VydG1zLXRyYWluLTMnKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCgnI2xhYmVsLWJhc2VsaW5lLTEnKS50ZXh0KCdCYXNlbGluZSBtaWRsZScpO1xyXG4gICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuaGlkZSgpO1xyXG4gICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuc2hvdygpO1xyXG4gICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuYWRkQ2xhc3MoJ29mZnNldC1tZC0zJyk7XHJcblxyXG59KTtcclxuJCgnI2VydG1zLXRyYWluLTMnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBsJ2VydG1zIGRlIGRyb2l0ZSBzZWxlY3Rpb25uZXJcclxuICAgICQoJyNlcnRtcy10cmFpbi0zJykuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgIGVydG1zX3JpZ2h0ID0gdHJ1ZTtcclxuICAgIGVydG1zX21pZGRsZSA9IGZhbHNlO1xyXG4gICAgJCgnI2xhYmVsLWJhc2VsaW5lLTInKS50ZXh0KCdCYXNlbGluZSByaWdodCcpO1xyXG4gICAgaWYgKGVydG1zX2xlZnQgPT0gdHJ1ZSAmJiBlcnRtc19taWRkbGUgPT0gZmFsc2UpIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTEnKS5yZW1vdmVDbGFzcygnb2Zmc2V0LW1kLTMnKTtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5yZW1vdmVDbGFzcygnb2Zmc2V0LW1kLTYnKTtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5zaG93KCk7XHJcbiAgICB9IGVsc2UgaWYgKGVydG1zX3JpZ2h0ID09IHRydWUgJiYgZXJ0bXNfbGVmdCA9PSBmYWxzZSkge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtMycpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLmhpZGUoKTtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5hZGRDbGFzcygnb2Zmc2V0LW1kLTYnKTtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnI2VydG1zLXRyYWluLTInKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG59KTtcclxuXHJcblxyXG4kKCcjZXJ0bXMtbG9jby0xJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgZXJ0bXNfbGVmdCA9IHRydWU7XHJcbiAgICBpZiAoZXJ0bXNfcmlnaHQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMicpLnJlbW92ZUNsYXNzKCdvZmZzZXQtbWQtNicpO1xyXG4gICAgICAgICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLnNob3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuc2hvdygpO1xyXG4gICAgfVxyXG4gICAgJCgnI2xhYmVsLWJhc2VsaW5lLTEnKS50ZXh0KCdCYXNlbGluZSBsZWZ0Jyk7XHJcbiAgICAkKCcjZXJ0bXMtbG9jby0xJykuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICQoJyNlcnRtcy1sb2NvLTInKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCgnI2J0bi1iYXNlbGluZS0xJykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICQoJyNidG4tYmFzZWxpbmUtMycpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbn0pO1xyXG4kKCcjZXJ0bXMtbG9jby0yJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgZXJ0bXNfcmlnaHQgPSB0cnVlO1xyXG4gICAgJCgnI2xhYmVsLWJhc2VsaW5lLTInKS50ZXh0KCdCYXNlbGluZSByaWdodCcpO1xyXG4gICAgJCgnI2J0bi1iYXNlbGluZS0zJykuY3NzKCdvcGFjaXR5JywgJzEnKVxyXG4gICAgJCgnI2J0bi1iYXNlbGluZS0xJykuY3NzKCdvcGFjaXR5JywgJzAnKVxyXG4gICAgJCgnI2VydG1zLWxvY28tMicpLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKCcjZXJ0bXMtbG9jby0xJykucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgIGlmIChlcnRtc19sZWZ0ID09IHRydWUpIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5yZW1vdmVDbGFzcygnb2Zmc2V0LW1kLTYnKTtcclxuXHJcbiAgICAgICAgJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0yJykuc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5hZGRDbGFzcygnb2Zmc2V0LW1kLTYnKTtcclxuICAgICAgICAkKCcjY29udGVudC1mb3JtLWJhc2VsaW5lLTInKS5zaG93KCk7XHJcblxyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG4vL1JlY3VwZXJlIGxlIHNlbGVjdCBkZSBsYSBiYXNlbGluZSBldCBsZSBtZXQgZW4gdmlzdWVsXHJcbiQoJyNhZGQtYmFzZWxpbmUtMScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgIGlmIChlcnRtc19taWRkbGUpIHtcclxuICAgICAgICAkKCcjZXJ0bXMtdHJhaW4tMycpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbiAgICAgICAgJCgnI2VydG1zLXRyYWluLTEnKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG4gICAgfSBlbHNlIGlmIChlcnRtc19sZWZ0KSB7XHJcbiAgICAgICAgJCgnI2VydG1zLXRyYWluLTInKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG4gICAgfVxyXG4gICAgLy8gJCgnI2NvbnRlbnQtZm9ybS1iYXNlbGluZS0xJykuaGlkZSgpO1xyXG4gICAgbGV0IGlkQmFzZWxpbmUgPSAkKCcjc2VsZWN0X2Jhc2VsaW5lXzEgb3B0aW9uOnNlbGVjdGVkJykudmFsKCk7XHJcbiAgICAkKCcjdGl0bGVfYmFzZWxpbmVfbW9kYWwnKS5odG1sKCQoJyNzZWxlY3RfYmFzZWxpbmVfMSBvcHRpb246c2VsZWN0ZWQnKS50ZXh0KCkpO1xyXG4gICAgLy8gJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5zaG93KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vQ2hlY2tFcXVpcGVtZW50cy8nICsgaWRCYXNlbGluZSxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWxfYmFzZWxpbmVfZXF1aXBlbWVudCcpLnNob3coKTtcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcygnb3BhY2l0eScsICcwLjQnKTtcclxuICAgICAgICAgICAgbGV0IEVxdWlwbWVudHMgPSBKU09OLnBhcnNlKHJlc3BvbnNlLmVxdWlwbWVudHMpO1xyXG5cclxuICAgICAgICAgICAgRXF1aXBtZW50cy5mb3JFYWNoKENvdW50TnVtYmVyRXF1aXB0KTtcclxuICAgICAgICAgICAgRXF1aXBtZW50cy5mb3JFYWNoKEZpbmRJbmRleEV2Yyk7XHJcbiAgICAgICAgICAgIEVxdWlwbWVudHMuZm9yRWFjaChyZXR1cm5JbmRleEVsZW1lbnQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pXHJcblxyXG4kKCcjYWRkLWJhc2VsaW5lLTInKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnI2VydG1zLXRyYWluLTInKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG5cclxuICAgIC8vICQoJyNjb250ZW50LWZvcm0tYmFzZWxpbmUtMScpLmhpZGUoKTtcclxuICAgIGxldCBuYW1lX2Jhc2VsaW5lXzEgPSAkKCcjc2VsZWN0X2Jhc2VsaW5lXzIgb3B0aW9uOnNlbGVjdGVkJykudmFsKCk7XHJcbiAgICBjb25zb2xlLmxvZyhuYW1lX2Jhc2VsaW5lXzEpXHJcbiAgICAvLyAkKCcjY29udGVudC1uYW1lLWJhc2VsaW5lLTEnKS5hcHBlbmQoXCI8aDU+XCIgKyBuYW1lX2Jhc2VsaW5lXzEgKyBcIjwvaDU+XCIpXHJcblxyXG59KVxyXG5cclxuLy8gUmVxdWV0ZSBBSkFYIHBvdXIgcmVtcGxpciBsZSBmb3JtdWxhaXJlIGQnw6lxdWlwZW1lbnQgYXZlYyBsJ2VxdWlwZW1lbnQgc2VsZWN0aW9ubmVyXHJcbiQoJyNzaG93LWVxdWlwbWVudCAnKS5vbignY2xpY2snLCAnLmRlc2NyaXB0aW9uID4gLmNvbnRlbnQtZGVzY3JpcHRpb24tZHRyID4gYnV0dG9uJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJyNtb2RhbF9iYXNlbGluZV9lcXVpcGVtZW50JykuaGlkZSgpO1xyXG4gICAgJCgnLm1haW4tZXJ0bXMnKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcblxyXG4gICAgaWRFcXVpcG1lbnQgPSBleHRyYWl0Tm9tYnJlKCQodGhpcylbMF1bXCJpZFwiXSlcclxuICAgIHZhciAkdGhpcyA9ICQoXCIjZm9ybV9lcXVpcGVtZW50X2VkaXRfYmFzZWxpbmVcIik7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9lZGl0LWVxdWlwbWVudC1iYXNlbGluZS8nICsgaWRFcXVpcG1lbnQsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyBKU09OXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9UeXBlJykudmFsKHJlc3BvbnNlW1widHlwZVwiXVtcImlkXCJdKTtcclxuICAgICAgICAgICAgZGF0YVskKCcjZXF1aXBlbWVudF9UeXBlJykuYXR0cignbmFtZScpXSA9ICQoJyNlcXVpcGVtZW50X1R5cGUnKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICQucG9zdChcIi9hbHN0b20vY2hlY2tTdWJ0eXBlXCIsIGRhdGEpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAvL1ZpZGFnZSBjaGFtcCBzb3VzdHlwZVxyXG4gICAgICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9SZW1wbGlzc2FnZSBwYXIgbGVzIGVsZW1lbnQgcmXDp3UgZHUgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X3NvdXNfdHlwZScpLmFwcGVuZChuZXcgT3B0aW9uKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICQoJy5tYWluLWVydG1zJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vUmVtcGxpIGlucHV0IGF2ZWMgdmFsZXVyIHJlY3UgZGUgbCdlcXVpcGVtZW50XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCdbbmFtZV0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X1R5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfc291c190eXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVtcIlNvdXNUeXBlXCJdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJTb3VzVHlwZVwiXVtcImlkXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X0RUUl9ib2FyZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJkVFJCb2FyZFwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVpcGVtZW50X0luZGljZV9EVFInOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wiaW5kaWNlRFRSXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfTnVtX3NlcmllJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcIm51bVNlcmllXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLnNob3coKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4vL1JlbXBsaXIgbGVzIGlucHV0cyBhdmVjIGxlcyBub3V2ZWxsZXMgdmFsZXVyc1xyXG4kKCcjc291bWlzc2lvbi1lcXVpcGVtZW50LWVkaXQtYmFzZWxpbmUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgIGxldCBkYXRhID0ge307XHJcblxyXG4gICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuYW1lID0gdGhhdC5hdHRyKCduYW1lJyksXHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhhdC52YWwoKTtcclxuICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG59KVxyXG5sZXQgbmV3X2VxdWlwbWVudF9udW0gPSBcIlwiLFxyXG4gICAgdG90YWxFcXVpcHQgPSBcIlwiLFxyXG4gICAgbmV3X2VxdWlwbWVudF9udW1fc2VyaWUgPSBbXTtcclxuXHJcbi8vIFNvdW1pc3Npb24gZm9ybXVsYWlyZSBkZSB0cmFpblxyXG4kKCcjZm9ybV9lcXVpcGVtZW50X2VkaXRfYmFzZWxpbmUnKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgIGxldCBkYXRhID0ge307XHJcblxyXG4gICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuYW1lID0gdGhhdC5hdHRyKCduYW1lJyksXHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhhdC52YWwoKTtcclxuXHJcbiAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgfSlcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vZWRpdC1lcXVpcG1lbnQtYmFzZWxpbmUvJyArIGlkRXF1aXBtZW50LFxyXG4gICAgICAgIHR5cGU6ICR0aGlzLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZXF1aXBlbWVudDogZGF0YVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKFwib3BhY2l0eVwiLCAnMScpO1xyXG4gICAgICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1mb3JtLWVxdWlwZW1lbnQtZWRpdCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI21vZGFsX2Jhc2VsaW5lX2VxdWlwZW1lbnQnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoJyNidG4tYWRkLW51bWJlci1zZXJpZScgKyBpZEVxdWlwbWVudCkucmVwbGFjZVdpdGgoXCI8cD5cIiArIHJlc3BvbnNlLm51bVNlcmllICsgXCI8L3A+XCIpXHJcbiAgICAgICAgICAgIG5ld19lcXVpcG1lbnRfbnVtX3NlcmllLnB1c2gocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBuZXdfZXF1aXBtZW50X251bSsrO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSlcclxuLy9WYWxpZGVyIGwnaW5zdGFuY2UgZGVzIGVxdWlwZW1lbnRzXHJcbiQoJyN2YWxpZC1iYXNlbGluZS10cmFpbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChuZXdfZXF1aXBtZW50X251bSAhPSB0b3RhbEVxdWlwdCkge1xyXG4gICAgICAgIGFsZXJ0KCdwbGVhc2UgZW50ZXIgbnVtIHNlcmllIGJlZm9yZSBpbnN0YW5jZSBiYXNlbGluZScpXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBsZXQgaWRfdHJhaW4gPSBleHRyYWl0Tm9tYnJlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICAgICAgbGV0IGlkX2Jhc2VsaW5lID0gJCgnI3NlbGVjdF9iYXNlbGluZV8xIG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpO1xyXG4gICAgICAgICQoJ21haW4nKS5jc3MoXCJvcGFjaXR5XCIsICcwLjQnKTtcclxuICAgICAgICAkKCcjd2FpdC1zcGlubmVyJykuc2hvdygpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy9hbHN0b20vYWRkQmFzZWxpbmVJbnN0YW5jaWVyJyxcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBpZF90cmFpbjogaWRfdHJhaW4sXHJcbiAgICAgICAgICAgICAgICBiYXNlbGluZTogaWRfYmFzZWxpbmUsXHJcbiAgICAgICAgICAgICAgICBuZXdfZXF1aXB0OiBuZXdfZXF1aXBtZW50X251bV9zZXJpZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9hbHN0b20vYmFzZWxpbmUtdHJhaW4vXCIgKyByZXNwb25zZS5pZGJhc2VsaW5lO1xyXG4gICAgICAgICAgICAgICAgJCgnbWFpbicpLmNzcyhcIm9wYWNpdHlcIiwgJzEnKTtcclxuICAgICAgICAgICAgICAgICQoJyN3YWl0LXNwaW5uZXInKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSlcclxuLy8gUmVxdWV0ZSBBSkFYIHBvdXIgcmVtcGxpciBsZSBmb3JtdWxhaXJlIGQnw6lxdWlwZW1lbnQgYXZlYyBsJ2VxdWlwZW1lbnQgc2VsZWN0aW9ubmVyIGluc3RhbmNpZXJcclxuJCgnLmNvbnRlbnQtZGVzY3JpcHRpb24tZHRyLWluc3RhbmNlJykub24oJ2NsaWNrJywgJy5lZGl0LWRlbGV0ZS1lcXVpcGVtZW50ID4gYScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcubWFpbi1lcnRtcycpLmNzcyhcIm9wYWNpdHlcIiwgJzAuNCcpO1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuXHJcbiAgICBpZEVxdWlwbWVudCA9IGV4dHJhaXROb21icmUoJCh0aGlzKVswXVtcImNsYXNzTGlzdFwiXVswXSlcclxuICAgIHZhciAkdGhpcyA9ICQoXCIjZm9ybV9lcXVpcGVtZW50X2VkaXRfaW5zdGFuY2VcIik7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgJCgnI3dhaXQtc3Bpbm5lcicpLnNob3coKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2Fsc3RvbS9lZGl0LWVxdWlwbWVudC1pbnN0YW5jZS8nICsgaWRFcXVpcG1lbnQsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIEpTT05cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICQoJyNlcXVpcGVtZW50X1R5cGUnKS52YWwocmVzcG9uc2VbXCJ0eXBlXCJdW1wiaWRcIl0pO1xyXG4gICAgICAgICAgICBkYXRhWyQoJyNlcXVpcGVtZW50X1R5cGUnKS5hdHRyKCduYW1lJyldID0gJCgnI2VxdWlwZW1lbnRfVHlwZScpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgJC5wb3N0KFwiL2Fsc3RvbS9jaGVja1N1YnR5cGVcIiwgZGF0YSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vVmlkYWdlIGNoYW1wIHNvdXN0eXBlXHJcbiAgICAgICAgICAgICAgICAkKCcjZXF1aXBlbWVudF9zb3VzX3R5cGUnKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL1JlbXBsaXNzYWdlIHBhciBsZXMgZWxlbWVudCByZcOndSBkdSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2VxdWlwZW1lbnRfc291c190eXBlJykuYXBwZW5kKG5ldyBPcHRpb24oZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9SZW1wbGkgaW5wdXQgYXZlYyB2YWxldXIgcmVjdSBkZSBsJ2VxdWlwZW1lbnRcclxuICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJ1tuYW1lXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfVHlwZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9zb3VzX3R5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlW1wiU291c1R5cGVcIl0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcIlNvdXNUeXBlXCJdW1wiaWRcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfRFRSX2JvYXJkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUuaWQpLnZhbChyZXNwb25zZVtcImRUUkJvYXJkXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VxdWlwZW1lbnRfSW5kaWNlX0RUUic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHZhbHVlLmlkKS52YWwocmVzcG9uc2VbXCJpbmRpY2VEVFJcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1aXBlbWVudF9OdW1fc2VyaWUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB2YWx1ZS5pZCkudmFsKHJlc3BvbnNlW1wibnVtU2VyaWVcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWZvcm0tZXF1aXBlbWVudC1lZGl0Jykuc2hvdygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbi8vRm9ybXVsYWlyZSBkJ2VkaXQgZGUgbCfDqXF1aXBlbWVudFxyXG4kKCcjZm9ybV9lcXVpcGVtZW50X2VkaXRfaW5zdGFuY2UnKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJy5tYWluLWVydG1zJykuY3NzKFwib3BhY2l0eVwiLCAnMC40Jyk7XHJcbiAgICAkKCcjZm9ybV9lcXVpcGVtZW50X2VkaXQnKS5jc3MoXCJvcGFjaXR5XCIsIFwiMC40XCIpO1xyXG5cclxuICAgICQoJyN3YWl0LXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGRhdGEgPSB7fSxcclxuICAgICAgICBhY3Rpb247XHJcbiAgICAvL1JlbXBsaSBkYXRhIGEgcGFydGlyIGRlcyB2YWxldXIgZGVzIGlucHV0c1xyXG4gICAgJHRoaXMuZmluZCgnW25hbWVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuYW1lID0gdGhhdC5hdHRyKCduYW1lJylcclxuXHJcbiAgICAgICAgaWYgKG5hbWUgIT0gKFwiZXF1aXBlbWVudFtfdG9rZW5dXCIpICYmIG5hbWUgIT0gKFwic291bWlzc2lvbl9lcXVpcGVtZW50XCIpKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhhdC52YWwoKTtcclxuICAgICAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9hbHN0b20vZWRpdC1lcXVpcG1lbnQtaW5zdGFuY2UvJyArIGlkRXF1aXBtZW50LFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICdlcXVpcGVtZW50JzogZGF0YSxcclxuICAgICAgICAgICAgXCJzb3VtaXNzaW9uX2VkaXRfZXF1aXBlbWVudFwiOiB0cnVlLFxyXG4gICAgICAgICAgICAnaWRlcXVpcG1lbnQnOiBpZEVxdWlwbWVudFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gSlNPTlxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgJCgnI3dhaXQtc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtZm9ybS1lcXVpcGVtZW50LWVkaXQnKS5zaG93KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgKCdBamF4IHJlcXVlc3QgZmFpbGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSlcclxuXHJcbmZ1bmN0aW9uIEZpbmRJbmRleEV2YyhlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcclxuICAgIGluZGV4ID0gZWxlbWVudFsnaWQnXTtcclxuICAgIGlmIChlbGVtZW50Wyd0eXBlJ11bJ2lkJ10gPT0gXCIxXCIgJiYgKGVsZW1lbnRbJ1N0YXR1cyddID09IHRydWUpKSB7XHJcblxyXG4gICAgICAgICQoXCIjc2hvdy1lcXVpcG1lbnRcIikuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4ICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlVHlwZSg0LCBlbGVtZW50Wyd0eXBlJ11bJ25hbWUnXSkpO1xyXG4gICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYWRkQ2xhc3MoXCJkZXNjcmlwdGlvbi1TdWJ0eXBlQ2FyZFwiKVxyXG4gICAgICAgIGlmIChlbGVtZW50WydTb3VzVHlwZSddICE9IG51bGwpIHtcclxuICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDUsIGVsZW1lbnRbJ1NvdXNUeXBlJ11bJ25hbWUnXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImNvbnRlbnQtZGVzY3JpcHRpb24tZHRyXCIgaWQ9XCJjb250ZW50LWRlc2NyaXB0aW9uLScgK1xyXG4gICAgICAgICAgICBpbmRleCArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJkVFJCb2FyZFwiXSArICc8L3A+JylcclxuICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJpbmRpY2VEVFJcIl0gKyAnPC9wPicpXHJcbiAgICAgICAgaWYgKGVsZW1lbnRbJ251bVNlcmllJ10gPT0gXCJcIikge1xyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgc3R5bGU9XCJwYWRkaW5nOiAycHhcIiBpZCA9IFwiYnRuLWFkZC1udW1iZXItc2VyaWUnICsgZWxlbWVudFsnaWQnXSArICdcIiA+IEFkZCBudW1iZXIgb2Ygc2VyaWUgPC9idXR0b24+JylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbJ251bVNlcmllJ10gKyAnPC9wPicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluZGV4RVZDID0gJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmV0dXJuSW5kZXhFbGVtZW50KGVsZW1lbnQsIGluZGV4LCBhcnJheSkge1xyXG5cclxuXHJcbiAgICBpbmRleCA9IGVsZW1lbnRbJ2lkJ107XHJcblxyXG4gICAgaWYgKChlbGVtZW50WydTdGF0dXMnXSA9PSB0cnVlKSAmJiBlbGVtZW50Wyd0eXBlJ11bJ2lkJ10gIT0gXCIxXCIpIHtcclxuXHJcbiAgICAgICAgLy9UZXN0IGwnZXhpc3RlbmNlIGRlIGxhIGRpdiBkYW5zIGxlIGNhcyBvw7kgZWxsZSBleGlzdGUgbGEgcmVtcGxhY2Ugc2kgcGFzIGxhIG1ldCBlbiBwbGFjZVxyXG4gICAgICAgIGlmICgkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkKCcjZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXgpLnJlcGxhY2VXaXRoKCc8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uLWVxdWlwZW1lbnQtJyArIGluZGV4ICsgJ1wiPjwvZGl2PicpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNzaG93LWVxdWlwbWVudFwiKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb24tZXF1aXBlbWVudC0nICsgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3Rlc3Qgc2kgbCfDqXF1aXBlbWVudCBlc3QgbGEgY2FydGUgb3Ugbm9uXHJcbiAgICAgICAgaWYgKGVsZW1lbnRbJ3R5cGUnXVsnaWQnXSAhPSBcIjJcIikge1xyXG5cclxuICAgICAgICAgICAgLy9Td2l0aCByZXBsYWNlbWVudCBkZSBsJ2lkIGR1IHR5cGUgYXZlYyBzb24gbm9tXHJcbiAgICAgICAgICAgICQoXCIjZGVzY3JpcHRpb24tZXF1aXBlbWVudC1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKHdyaXRlVHlwZSg0LCBlbGVtZW50Wyd0eXBlJ11bJ25hbWUnXSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRbJ1NvdXNUeXBlJ10gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVTdWJ0eXBlKDUsIGVsZW1lbnRbJ1NvdXNUeXBlJ11bJ25hbWUnXSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKFwiI2Rlc2NyaXB0aW9uLWVxdWlwZW1lbnQtXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImNvbnRlbnQtZGVzY3JpcHRpb24tZHRyXCIgaWQ9XCJjb250ZW50LWRlc2NyaXB0aW9uLScgK1xyXG4gICAgICAgICAgICAgICAgaW5kZXggKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFtcImRUUkJvYXJkXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJpbmRpY2VEVFJcIl0gKyAnPC9wPicpXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50WydudW1TZXJpZSddID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBzdHlsZT1cInBhZGRpbmc6IDJweFwiIGlkID0gXCJidG4tYWRkLW51bWJlci1zZXJpZScgKyBlbGVtZW50WydpZCddICsgJ1wiID4gQWRkIG51bWJlciBvZiBzZXJpZSA8L2J1dHRvbj4nKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50WydudW1TZXJpZSddICsgJzwvcD4gPGEgaWQ9XCJlZGl0LScgKyBpbmRleCArICdcIj48aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPiA8L2E+IDxhIGlkPVwiZGVsZXRlLScgKyBpbmRleCArICdcIj48aSBjbGFzcyA9IFwiZmFzIGZhLXRyYXNoLWFsdCBwb3ViZWxsZVwiPiA8L2k+PC9hPicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVFZGl0RGVsZXRlKGluZGV4KSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAvL0VjcmlzIGxlIG5vbSBkdSB0eXBlIFwiY2FydGVcIiBzb3VzIGxlIHR5cGUgIEVWQ1xyXG4gICAgICAgICAgICAkKGluZGV4RVZDKS5hcHBlbmQod3JpdGVUeXBlKDUsIGVsZW1lbnRbJ1NvdXNUeXBlJ11bJ25hbWUnXSkpO1xyXG4gICAgICAgICAgICAvL1BhcmNvdXMgbGUgdHlwZSBkZSBzb3VzdHlwZSBcclxuICAgICAgICAgICAgLy8gJChpbmRleEVWQykuYXBwZW5kKHdyaXRlU3VidHlwZSg2LCBlbGVtZW50WydTb3VzVHlwZSddWyduYW1lJ10pKTtcclxuXHJcbiAgICAgICAgICAgICQoaW5kZXhFVkMpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImNvbnRlbnQtZGVzY3JpcHRpb24tZHRyIGNvbnRlbnQtZGVzY3JpcHRpb24tZHRyQ2FyZFwiIGlkPVwiY29udGVudC1kZXNjcmlwdGlvbi0nICtcclxuICAgICAgICAgICAgICAgIGluZGV4ICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPHA+JyArIGVsZW1lbnRbXCJkVFJCb2FyZFwiXSArICc8L3A+JylcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQoJzxwPicgKyBlbGVtZW50W1wiaW5kaWNlRFRSXCJdICsgJzwvcD4nKVxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFsnbnVtU2VyaWUnXSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbnRlbnQtZGVzY3JpcHRpb24tXCIgKyBpbmRleCArIFwiXCIpLmFwcGVuZCgnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgc3R5bGU9XCJwYWRkaW5nOiAycHhcIiBpZCA9IFwiYnRuLWFkZC1udW1iZXItc2VyaWUnICsgZWxlbWVudFsnaWQnXSArICdcIiA+IEFkZCBudW1iZXIgb2Ygc2VyaWUgPC9idXR0b24+JylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29udGVudC1kZXNjcmlwdGlvbi1cIiArIGluZGV4ICsgXCJcIikuYXBwZW5kKCc8cD4nICsgZWxlbWVudFsnbnVtU2VyaWUnXSArICc8L3A+IDxhIGlkPVwiZWRpdC0nICsgaW5kZXggKyAnXCI+PGkgY2xhc3M9XCJmYXMgZmEtZWRpdFwiPjwvaT4gPC9hPiA8YSBpZD1cImRlbGV0ZS0nICsgaW5kZXggKyAnXCI+PGkgY2xhc3MgPSBcImZhcyBmYS10cmFzaC1hbHQgcG91YmVsbGVcIj4gPC9pPjwvYT4nKVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gJChcIiNjb250ZW50LWRlc2NyaXB0aW9uLVwiICsgaW5kZXggKyBcIlwiKS5hcHBlbmQod3JpdGVFZGl0RGVsZXRlKGluZGV4KSk7XHJcbiAgICAgICAgICAgICQoJyNkZXNjcmlwdGlvbi1lcXVpcGVtZW50LScgKyBpbmRleCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBDb3VudE51bWJlckVxdWlwdChlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcclxuICAgIHRvdGFsRXF1aXB0Kys7XHJcbn1cclxuLy9FeHRyYWl0IGxlIG5vbWJyZSBkJ3VuZSBzdHJlaW5nXHJcbmZ1bmN0aW9uIGV4dHJhaXROb21icmUoc3RyKSB7XHJcbiAgICByZXR1cm4gTnVtYmVyKHN0ci5yZXBsYWNlKC9bXlxcZF0vZywgXCJcIikpXHJcbn1cclxuLy9FY3JpcyBsZSB0aXRyZSBkdSB0eXBlIGQnw6lxdWlwZW1lbnRcclxuZnVuY3Rpb24gd3JpdGVUeXBlKHNpemUsIG5hbWUpIHtcclxuICAgIHJldHVybiAnPGgnICsgc2l6ZSArICcgY2xhc3M9XCJkZXNjcmlwdGlvbi1UeXBlIFwiIGlkPVwiZGVzY3JpcHRpb24tdHlwZSBcIj4nICsgbmFtZSArICc8L2gnICsgc2l6ZSArICc+JztcclxufTtcclxuLy9FY3JpcyBsZSB0aXRyZSBkdSBzb3VzdHlwZSBkJ8OpcXVpcGVtZW50XHJcbmZ1bmN0aW9uIHdyaXRlU3VidHlwZShzaXplLCBuYW1lKSB7XHJcbiAgICByZXR1cm4gJzxoJyArIHNpemUgKyAnIGNsYXNzPVwiZGVzY3JpcHRpb24tVHlwZSBcIiBpZD1cImRlc2NyaXB0aW9uLXN1YlR5cGUgXCI+JyArIG5hbWUgKyAnPC9oJyArIHNpemUgKyAnPic7XHJcbn07XHJcbi8vRWNyaXMgbGUgdGl0cmUgZHUgc291c3R5cGUgZCfDqXF1aXBlbWVudFxyXG5mdW5jdGlvbiB3cml0ZVN1YnR5cGVDYXJkKHNpemUsIG5hbWUpIHtcclxuICAgIHJldHVybiAnPGgnICsgc2l6ZSArICcgY2xhc3M9XCJkZXNjcmlwdGlvbi1zdWJ0eXBlXCIgaWQ9XCJkZXNjcmlwdGlvbi1zdWJUeXBlIFwiPicgKyBuYW1lICsgJzwvaCcgKyBzaXplICsgJz4nO1xyXG59O1xyXG4vLyAvL0Vjcml0IGxlcyAyIGljb25zIGQnZWRpdCBldCBkZWxldGVcclxuLy8gZnVuY3Rpb24gd3JpdGVFZGl0RGVsZXRlKGluZGV4KSB7XHJcbi8vICAgICByZXR1cm4gJyA8cCBjbGFzcz1cImVkaXQtZGVsZXRlLWVxdWlwZW1lbnRcIj4gPGEgaWQ9XCJlZGl0LScgKyBpbmRleCArICdcIj48aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPiA8L2E+PC9wPic7XHJcbi8vIH07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==