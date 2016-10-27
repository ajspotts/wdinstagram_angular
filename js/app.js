"use strict";

// (function(){
  angular
  .module("wdinstagram", [
    "ui.router"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("WdinstagramIndexController", [
    WdinstagramIndexControllerFunction
  ])
  .controller("WdinstagramShowController", [
    WdinstagramShowControllerFunction
  ])

  function RouterFunction($stateProvider){
    $stateProvider
    .state("gramIndex", {
      url: "/grams",
      templateUrl: "js/ng-views/index.html",
      controller: "WdinstagramIndexController",
      controllerAS: "vm"
    })
    .state("gramShow", {
      url: "grams/:id",
      templateUrl: "js/ng-views.show.html",
      controller: "WdinstagramShowController",
      controllerAS: "vm"
    })
  }

  function WdinstagramIndexControllerFunction(){
    this.grams = [
      {photoUrl: "Photo"},
      {author: "Author"},
      {body: "Body"}
    ]
  }
  function WdinstagramShowControllerFunction(){

  }

// })();
