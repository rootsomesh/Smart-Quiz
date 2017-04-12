app.service('Navbar1Values',  function() {
 if( window.sessionStorage.signupname==null&&window.sessionStorage.signupemail==null)
  return {
    
      page1: 'Games',
      page2: '2',
      page3: '3',
      signup:'signup',
      login:  'login',
      quiz: 'quiz',
      rummy: 'rummy',
      cards: 'cards'
     }; 
 
 
 if(window.sessionStorage.signupname!=null&&window.sessionStorage.signupemail!=null)
  return {
     page1: 'Games',
      page2: '',
      page3: '',
      signup: window.sessionStorage.signupname,
      login: 'aa',
      quiz: 'quiz',
      rummy: 'rummy',
      cards: 'cards'
     
   };
  
  
    
});