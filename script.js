var password=document.getElementById("password")
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
password.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }
  password.onblur = function() {
    document.getElementById("message").style.display = "none";
  }
  password.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(password.value.match(lowerCaseLetters)) {  
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }
    
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(password.value.match(upperCaseLetters)) {  
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }
  
    // Validate numbers
    var numbers = /[0-9]/g;
    if(password.value.match(numbers)) {  
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
    
    
    // Validate length
    if(password.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  }
  var submit=document.getElementById("submit")
  var repassword=document.getElementById("repassword")
  var warningmsg=document.getElementById("warningmsg")
  submit.addEventListener("click",function(event){
    
    if(password.value==repassword.value){
      warningmsg.style.color="green"
      alert("Your form is submitted")
      
    }
    else{
      warningmsg.style.color="red"
      warningmsg.textContent="Password does not matched"
      event.preventDefault()
    }

  })
  function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function myFunction2() {
    var x = document.getElementById("repassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }