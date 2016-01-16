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
        var entry = createEntry();
        entry.code = $scope.code;
        entry.name = $scope.name;
        entry.coordinates.latitude = parseFloat($scope.latitude);
        entry.coordinates.longitude = parseFloat($scope.longitude);
        entry.address = $scope.address;
        $scope.listings.push(entry);
        $scope.code = '';
        $scope.name = '';
        $scope.latitude = '';
        $scope.longitude = '';
        $scope.address = '';
    };
    $scope.deleteListing = function(index) {
         $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(index) {
        $scope.detailedInfo = $scope.listings[index];
    };
  }
]);

function createEntry() {
    var entry = {
         code : '',
         name : '',
         coordinates : {
             latitude : 0,
             longitude : 0
        },
         address : ''
    };
    return entry;
};