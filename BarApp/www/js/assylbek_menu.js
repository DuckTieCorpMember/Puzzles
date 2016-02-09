/**
 * Created by Assylbek on 2/9/2016.
 */
var starter_menu = angular.module('menu', []);
var isMenuOpen = false;

starter_menu.controller('menuController', function($scope)
{
  $scope.contacts = [
    {
      name: "Tony Stark",
      img_src: cdn4.iconfinder.com/data/icons/ironman_lin/512/ironman_III.png,
      img_alt: 'iron_man',
      desc: "I already have a gf but if you are hot, come and play!"
    },
    {
      name: "Steve Rogers",
      img_src: cdn4.iconfinder.com/data/icons/superhero/400/captainamerica.png,
      img_alt: 'captain_america',
      desc: "I do not believe in that system, but friends insist, so here I am."
    },
    {
      name: "Thor",
      img_src: icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Thor-icon.png,
      img_alt: 'thor',
      desc: "Jane would kill me, but I am just testing this magical screen."
    },
    {
      name: "Hulk",
      img_src: www.iconarchive.com/download/i59024/hopstarter/superhero-avatar/Avengers-Hulk.ico,
      img_alt: 'hulk',
      desc: "I will try not to SMASH you."
    }
  ];
  $scope.menuOpen = function()
  {
    var settingDiv = document.getElementById("setting");
    var aboutDiv = document.getElementById("about");

    if( !isMenuOpen ) {
      settingDiv.innerHTML = "menu1 menu2";
      aboutDiv.innerHTML = "menu3 menu4";
      isMenuOpen = true;
    }
    else
    {
      settingDiv.innerHTML = "SETTING";
      aboutDiv.innerHTML = "ABOUT";
      isMenuOpen = false;
    }
  };
  $scope.hideMenu = function()
  {
    document.getElementById("setting").remove();
    document.getElementById("about").remove();
    document.getElementById("menu").remove();
    document.getElementById("contacts").remove();
  }
});
