//window.localStorage['post'] = JSON.stringify(post);
var savedContacts = [
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
window.localStorage['savedContacts'] = JSON.stringify(savedContacts);
//var contacts = JSON.parse(window.localStorage['savedContacts'] || '{}');

app.controller("myCtrl", ['$scope', function($scope, $route) {

  $scope.contacts = JSON.parse(window.localStorage['savedContacts'] || '{}');

  $scope.AddToContacts = function(name, comment, src)
  {
    console.log(name + " " + comment + " " + src );
    savedContacts.push({
      name: name,
      img_src: src,
      img_alt: name,
      desc: comment
    });
    console.log($scope.contacts.length);
    window.localStorage['savedContacts'] = JSON.stringify(savedContacts);
    $scope.contacts = JSON.parse(window.localStorage['savedContacts'] || '{}');
  };
}]);
