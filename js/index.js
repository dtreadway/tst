//only including bootstrap css. If want to include entire lib then just do require('bootstrap')
require('bootstrap/dist/css/bootstrap.css');

// include font-awesome
require('font-awesome-webpack');

// include main less file
require('../less/main.less');

// include jquery
var $ = require('jquery');
window.jQuery = $;
window.$ = $;

var angular = require('angular');
require('angular-ui-router');
require('angular-bootstrap');
require('./app.config');

var webpackApp = angular.module('webpackApp', ['ui.router', 'ui.bootstrap']);

require('./common/services')(webpackApp);
require('./reddit/redditModule')(webpackApp);