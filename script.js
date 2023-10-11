var userinfo = document.getElementById("userinfo");
var submit = document.getElementById("submit")

function myFunction() {
  var user = localStorage.getItem("user");
  var data = JSON.parse(user);
  var name = data.username;
  userinfo.innerHTML = `Hey !! ${name}`;
}

function submitted(){
  alert("Submitted Successfully!!")
}
