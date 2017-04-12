app.controller('LoginController', ['$scope','Navbar1Values','PutQuote' ,function($scope ,Navbar1Values,PutQuote) {

  $scope.app = Navbar1Values;
  
    PutQuote.async().then(function(d) {
      $scope.PostDataResponse = d;
    });
    
  
  $scope.showHello = function() {
  window.location.reload();
            }
  
 
}]);