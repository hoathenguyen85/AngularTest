

app.controller("MainController", ['$scope', '$http', function($scope, $http){

  $http(
    {
      method: 'GET',
      url: 'https://michele-zonca-google-geocoding.p.mashape.com/geocode/json',
      headers: {'X-Mashape-Key': 'Aq8RN3VWDnmshWqAaThekfgTPEbap1a3Tn3jsnBYV3fjrNDyQZ',
                'Accept': 'application/json'},
      params: {
        address: '48 Wall Street, New York City, New York',
        sensor: 'true'
      }
    }).success(function(r){
      console.log('hey it semi worked');
      console.log(r);
      var l = new Location(r);
      $scope.location = l;
  })
}]);
