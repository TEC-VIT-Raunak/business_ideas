// var database = firebase.database();

$(document).ready(function() {
    function disablePrev() { window.history.forward() }
    window.onload = disablePrev();
    window.onpageshow = function(evt) { if (evt.persisted) disableBack() }
 });
 const submit = ()=>{
    let emailId = document.getElementById('email').value
    let passwd = document.getElementById('password').value
    let token
   //  console.log(emailId, passwd)
   $.ajax({
       type: "POST",
       url: "http://localhost:3000/users/login",
       data: JSON.stringify({
           "email": emailId,
           "password": passwd
       }),
       crossDomain: true,
       dataType: "json",
       contentType: "application/json",
       success: function (response) {
           
           token = response.token
           console.log(token)
          
           localStorage.setItem('user', JSON.stringify(response))
           document.cookie=token
           // localStorag.setItem('')
           location.href='/companies'
       }
   });
    
            
    
 }
