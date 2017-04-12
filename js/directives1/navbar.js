app.directive('appInfo', function() { 
  return { 
   
   restrict: 'E', 
   scope:false,
   templateUrl:'js/dirviews1/navbar.html',
   
    
  link: function (scope, iElement, iAttrs) 
  {
      
      
      if(window.sessionStorage.signupname!=null)
       {scope.linkEnabled = true;}
      if(window.sessionStorage.signupname==null)
       {scope.linkEnabled = false;}
        
       
   document.getElementById("signup").addEventListener("click", function(event) {
          if(scope.linkEnabled) {
            event.preventDefault();
          }
        });
        
        $('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });
       
  }
      
  }; 
});

