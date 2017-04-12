app.factory('PutQuote', ['$http', function($http) { 
    
    var config = {
                headers : {
                   'X-Mashape-Key': '0Xfi3E8mwQmshwP5Ghdmij0u8rLWp15RiSCjsnOtLUdR0ypC6d',
                   'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;',
                   'Accept':'application/json'
                }
            };
        var promise;
    var PutQuote = {
    async: function() {
      if ( !promise ) {
       
        promise = $http.get('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous', config).then(function (response) {
        
          console.log(response);
         
          return response.data;
        });
      }
     
      return promise;
    }
  };
  return PutQuote; 
            
}]);
