angular.module('templates', []);
window.App = angular.module('SlidePlayer', ['ngRoute', 'ngAnimate', 'ui.codemirror', 'templates']);

window.App.config(function($animateProvider){
  $animateProvider.classNameFilter(/^((?!col-md).)*$/);
});