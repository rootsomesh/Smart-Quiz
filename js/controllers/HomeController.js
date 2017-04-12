app.controller('HomeController', ['$scope', '$http','$sce', 'Navbar1Values','PutQuote',function($scope,$http,$sce,Navbar1Values,PutQuote) {
  
   $scope.app=Navbar1Values;
    PutQuote.async().then(function(d) {
      $scope.PostDataResponse = d;
    });
   
   
   
   
   $scope.manage= function () {
       
        if(window.sessionStorage.signupname==null)
        {
            return true;
            
        }
        else
        
        return false;
   };
   
  
  
        $scope.score = 0;
		$scope.actvQn = -1;
		$scope.actvQnAnsd = 0;
		$scope.percnt = 0;
		$scope.corr = 0;
		$scope.incorr = 0;
        
        $scope.a= 0;
        $scope.b= 1;
        $scope.e= 2;
        $scope.d= 4;
        $scope.lives= 3;
         
        var url1=["content/movies.json","content/puzzle.json","content/puzzle.json"];
       
		
        $scope.kIk = function( k ){
       if(k===0)
    {  $scope.actvQn = 0;
            $http.get(url1[ k]).then(function(quizData){
			$scope.myQn = quizData.data;
			$scope.totalQn = $scope.myQn.length;  
       
       
           
		});

}
      if(k===1)
    {   
       
             $scope.actvQn = 0;
             $http.get(url1[ k]).then(function(quizData){
			 $scope.myQn = quizData.data;
			 $scope.totalQn = $scope.myQn.length;
		});
     
}  
       
      if(k===2)
     {   
       
       
       $scope.actvQn = 0;
      $http.get(url1[ k]).then(function(quizData){
			$scope.myQn = quizData.data;
			$scope.totalQn = $scope.myQn.length;
		});
} 

if(k===4)
     {   
      $scope.actvQn = -1;
      $http.get(url1[ -1]).then(function(quizData){
			$scope.myQn = quizData.data;
			$scope.totalQn = $scope.myQn.length;
		});
} 
 };
     
   
        
       
        
       
      
		
		$scope.selctAns = function(qIndex, aIndex)
		{
			var qnStat = $scope.myQn[qIndex].qnStat;
			if ( qnStat != "ansd")
			{
				$scope.myQn[qIndex].selctdAns = aIndex;
				var correctAns = $scope.myQn[qIndex].correct;
				$scope.myQn[qIndex].correctAns = correctAns;
				if (aIndex == correctAns)
				{
					$scope.myQn[qIndex].correctness = "correct";
					$scope.score += 1;
					$scope.corr += 1;
				}
				else
				{
					$scope.myQn[qIndex].correctness = "incorrect";
					$scope.incorr += 1;
				}
				$scope.myQn[qIndex].qnStat = "ansd";
			}
			$scope.percnt = (($scope.score / $scope.totalQn) * 100);
		}
		$scope.isSelectd = function(qIndex, aIndex)
		{
			return $scope.myQn[qIndex].selctdAns == aIndex;
		}
		$scope.isCorrectd = function(qIndex, aIndex)
		{
			return $scope.myQn[qIndex].correctAns == aIndex;
		}
		$scope.cntinu = function()
		{
            if(($scope.lives-$scope.incorr)<=0)
            {
                
                document.getElementById("comment").innerHTML="Please try again";
                $scope.incorr=0;
                return $scope.actvQn = -1;}
			
            else
            return $scope.actvQn += 1;
		}
		$scope.createShareLinks = function(percnt)
		{
			var url = "http://codifydesign.com/";
			var emaillink = '<a class="btn eml" target="_blank" href="mailto:?subject= and then we\'ll type Try to beat my quiz score.&amp;body=I scored '+percnt+'% on this quiz about Saturn. Try to beat my score at '+url+'.">Email a friend </a>';
			var tweetlink = '<a class="btn twt" target="_blank" href="http://twitter.com/share?text= I scored a '+percnt+' on this quiz about Saturn.Try to beat my score at &amp;hashtags=SaturnQuize&amp;url='+url+'">Tweet a friend </a>';
			var newMarkup = emaillink + tweetlink;
			return $sce.trustAsHtml(newMarkup);
		}
  
 
    
}]);