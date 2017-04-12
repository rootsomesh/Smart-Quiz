app.directive('signUp', function() { 
  return { 
    restrict: 'EA', 
    scope: { 
    info: '=' 
    }, 
    templateUrl: 'js/dirviews1/signup.html' ,
    link: function($scope, element, attrs)
    {

      $scope.showHello = function() {
      window.sessionStorage.signupname=document.getElementById("signupName").value;
      window.sessionStorage.signupemail=document.getElementById("signupEmail").value;
      window.location.reload();
     
            };
    
    }
    
  }; 
});