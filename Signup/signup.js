function signup(e) {
  var username = document.getElementById("username").value;
  var pass = document.getElementById("password").value;

    var user = {
      username: username,
      password: pass,
    };

    var name = user.username;

    var json = JSON.stringify(user);
    localStorage.setItem("user", json);
  }
