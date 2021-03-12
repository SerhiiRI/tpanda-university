var str = "Hello World!";
var result = str.fontcolor("green");
document.getElementById("demo").innerHTML = result;


function login(){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                  document.getElementById("demo").innerHTML = this.responseText;
                  if(this.responseText=="false"){
                       document.getElementById("error").innerHTML = "Error!! Invalid input!!";
                  }
                  else{
                       document.getElementById("error").innerHTML = "";
                       window.location = "http://127.0.0.1:5000/index?login=" + document.getElementById("login").value;
                  }
            }
      };
      url = "http://127.0.0.1:5000/js_login?"
      url += "login=" + document.getElementById("login").value + "&&"
      url += "password=" + document.getElementById("password").value
      xhttp.open("GET", url, true);
      xhttp.send();
}