function edit_user(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
             document.getElementById("error").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "http://127.0.0.1:5000/edit_user?" + get_info(), true);
    xhttp.send();
}

function create_user(){
    console.log('create');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
             document.getElementById("error").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "http://127.0.0.1:5000/create_user?" + get_info(), true);
    xhttp.send();
}

function get_info(){
    nickname = document.getElementById("nickname").value;
    firstname = document.getElementById("firstname").value;
    lastname = document.getElementById("lastname").value;
    permission = document.getElementById("permission").value;
    age = document.getElementById("age").value;
    login = document.getElementById("login").value;
    password = document.getElementById("password").value;
    id_user = document.getElementById("id_user").value;
    var url = "nickname="+nickname+"&&firstname="+firstname+"&&lastname=" +lastname+ "&&permission=" + permission+
    "&&age=" + age + "&&login=" + login + "&&password=" + password + "&&id_user=" + id_user + "&&url=" + url
    return url
}

function save(){
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    const user = urlParams.get('user');
    if (user=='create'){
         create_user();
    }
    else{
         edit_user();
    }
}


