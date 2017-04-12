app.controller('RegisterController', ['$scope','Navbar1Values','PutQuote',  function($scope,Navbar1Values,PutQuote) {
    $scope.app = Navbar1Values;
    
      PutQuote.async().then(function(d) {
      $scope.PostDataResponse = d;
    });
    
    $scope.details = {
     signupName: 'jhon doe',
     signupEmail: 'mayank@gmail.com'
     };
   
  
}]);