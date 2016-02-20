var savedContacts;

app.run(function($localstorage)
{

  savedContacts = [
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

  $localstorage.setObject('savedContacts', savedContacts);
  //console.log($localstorage.get('name'));
  //$localstorage.setObject('post', {
  //  name: 'Thoughts',
  //  text: 'Today was a good day'
  //});

  //var post = $localstorage.getObject('post');
  //console.log(post);
});
//window.localStorage['savedContacts'] = JSON.stringify(savedContacts);
//localStorage.setItem('savedContacts', savedContacts);

//app.controller("myCtrl", ['$scope', '$localstorage', '$cordovaCamera', function($scope, $localstorage, $cordovaCamera) {
app.controller("myCtrl", ['$scope', '$localstorage', function($scope, $localstorage) {


  var load = 0;
  //$scope.contacts = savedContacts;
  //window.localStorage['savedContacts'] = JSON.stringify(savedContacts);
  if( load == 0 ) {
    $scope.contacts = $localstorage.getObject('savedContacts');
    load ++;
  }

  $scope.AddToContacts = function(name, comment, src)
  {
    //console.log(name + " " + comment + " " + src );
    savedContacts.push({
      name: name,
      img_src: src,
      img_alt: name,
      desc: comment
    });
    $localstorage.setObject('savedContacts', savedContacts);
    $scope.contacts = $localstorage.getObject('savedContacts');
    //localStorage.clear();
    //window.localStorage['savedContacts'] = JSON.stringify(savedContacts);
    //$scope.contacts = JSON.parse(window.localStorage['savedContacts'] || '{}');
    //localStorage.setItem('savedContacts', savedContacts);
    console.log($scope.contacts.length);
    console.log(savedContacts.length);
  };

  //$scope.takePhoto = function () {
  //  var options = {
  //    quality: 75,
  //    destinationType: Camera.DestinationType.DATA_URL,
  //    sourceType: Camera.PictureSourceType.CAMERA,
  //    allowEdit: true,
  //    encodingType: Camera.EncodingType.JPEG,
  //    targetWidth: 300,
  //    targetHeight: 300,
  //    popoverOptions: CameraPopoverOptions,
  //    saveToPhotoAlbum: false
  //  };
  //
  //  $cordovaCamera.getPicture(options).then(function (imageData) {
  //    $scope.imgURI = "data:image/jpeg;base64," + imageData;
  //  }, function (err) {
  //    // An error occured. Show a message to the user
  //  });
  //}
}]);
