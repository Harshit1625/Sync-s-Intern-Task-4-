function loginFunction(e){
    var username = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var link = document.getElementById('link')

    var user = localStorage.getItem("user");
    var data = JSON.parse(user);

    if(user == null){
      alert("NO credentials !! Press OK to Continue")
      link.href = '/Login/login.html'
    }
    else if(username == data.username && pass == data.password){
        alert("Logged In !! Press OK to Continue")
    }
    else{
     alert("Wrong Password !! Press OK to Continue")
     link.href = '/Login/login.html'
    }
}