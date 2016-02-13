app.controller("myCtrl", ['$scope', function($scope) {
  $scope.contacts = [
    {
      name: "Tony Stark",
      img_src: "img/ironman_III.png",
      img_alt: 'iron_man',
      desc: "I already have a gf but if you are hot, come and play!"
    },
    {
      name: "Steve Rogers",
      img_src: "img/captainamerica.png",
      img_alt: 'captain_america',
      desc: "I do not believe in that system, but friends insist, so here I am."
    },
    {
      name: "Thor",
      img_src: "img/Avengers-Thor-icon.png",
      img_alt: 'thor',
      desc: "Jane would kill me, but I am just testing this magical screen."
    },
    {
      name: "Hulk",
      img_src: "img/hulk.png",
      img_alt: 'hulk',
      desc: "I will try not to SMASH you."
    }
  ];
  $scope.AddToContacts = function()
  {
    console.log("Bo@");
  }
}]);
