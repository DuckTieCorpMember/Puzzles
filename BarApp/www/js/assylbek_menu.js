/**
 * Created by Assylbek on 2/9/2016.
 */
var starter_menu = angular.module('menu', []);

starter_menu.controller('menuController', function($scope)
{
  $scope.menuOpen = function() {
    console.log("Bo!");
  }
});
