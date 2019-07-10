import '../scss/app.scss';
import './train';
import './ertms';
import './equipement';

// loads the jquery package from node_modules
const $ = require('jquery');

// import the function from greet.js (the .js extension is optional)
// ./ (or ../) means to look for a local file
var greet = require('./greet');

let Routing = require('../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router');
let Routes = require('./js_routes.json');

Routing.setRoutingData(Routes);