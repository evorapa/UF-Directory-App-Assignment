angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.sortType = "code";

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
        entry.code = $scope.code;
        entry.name = $scope.name;
        entry.lat = $scope.lat;
        entry.lng = $scope.lng;
        entry.address = $scope.address;
        $scope.listings.push(entry);
        $scope.entry.code = '';
        $scope.entry.name = '';
        $scope.entry.lat = '';
        $scope.entry.lng = '';
        $scope.entry.address = '';
    };
    $scope.deleteListing = function(index) {
         $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(index) {
        $scope.detailedInfo = $scope.listings[index];
    };
  }
]);

var entry = {
     code : '',
     name : '',
     coordinates : {
         lat : 0,
         lng : 0,
    },
     address : ''
};