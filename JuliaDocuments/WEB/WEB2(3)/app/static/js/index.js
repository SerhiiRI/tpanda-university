function show_info(per){
     if (per == 'rcdu'){
          render_admin('admin')
     }
     else if(per == 'ru'){
          render_admin('servicer')
     }
     else{
          render_user()
     }
}

function render_table(){
    var list_value = [];
    list_value.push("login");
    list_value.push("password");
    list_value.push("nickname");
    list_value.push("firstname");
    list_value.push("lastname");
    list_value.push("permission");
    list_value.push("age");
    list_value.push("id_user");
    var h = "<input type=\"button\" value=\"Show\" onclick=\"return show()\">";
    for (var i=0; i<list_value.length; i++){
        h += "<input type = \"checkbox\" id = \"" + list_value[i] + "\" name=\"col\" value = \"" + list_value[i] + "\">";
        h += "<label>"+list_value[i]+"</label>"
    }
    document.getElementById("choose_table").innerHTML = h;
}

function render_user(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
              var list_logins = JSON.parse(this.responseText);
              var html = "<ul>";
              for (var i=0; i < list_logins.length; i++) {
                   html += "<li><label>" + list_logins[i] + "</label></li>";
              }
              html += "</ul>";
              html += "<input type=\"button\" value=\"Logout\" onclick=\"return logout()\">";
              document.getElementById("form").innerHTML = html;
        }
    };
    url = "http://127.0.0.1:5000/users_logins";
    xhttp.open("GET", url, true);
    xhttp.send();
}

function render_admin(per){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
              var list_logins = JSON.parse(this.responseText);
              var html = "<ul>";
              for (var i=0; i < list_logins.length; i++) {
                   html += "<li><input type = \"checkbox\" id = \"" + list_logins[i] +
                   "\" name=\"box\" value = \"" + list_logins[i] + "\">";
                   html += '<a href=edit?user=' + list_logins[i] + '>' + "  Edit  " + "</a>";
                   html += "<label>" + list_logins[i] + "</label></li>";
              }
              html += "</ul>";
              html += "<input type=\"button\" value=\"Logout\" onclick=\"return logout()\">";
              if (per == 'admin'){
                   html += "<input type=\"button\" value=\"Refresh\" onclick=\"return refresh('admin')\">";
              }
              else{
                   html += "<input type=\"button\" value=\"Refresh\" onclick=\"return refresh('servicer')\">";
              }
              html += "<input type=\"button\" value=\"Select none\" onclick=\"return select_none()\">";
              html += "<input type=\"button\" value=\"Select all\" onclick=\"return select_all()\">";
              if (per=='admin'){
                   html += "<input type=\"button\" value=\"Delete\" onclick=\"return delete_us()\">";
                   html += "<input type=\"button\" value=\"Create\" onclick=\"return create()\">";
              }
              document.getElementById("form").innerHTML = html;
              render_table()
        }
    };
    url = "http://127.0.0.1:5000/users_logins";
    xhttp.open("GET", url, true);
    xhttp.send();
}

function logout(){
    window.location = "http://127.0.0.1:5000/";
}

function create(){
    window.location = "http://127.0.0.1:5000/edit?user=create";
}

function delete_us(){
    if (getCheckedList('box').length!=0){
         url = "http://127.0.0.1:5000/checked_users_delete?users=";
         url += getCheckedList('box');
         var xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                   console.log(this.responseText);
              }
         };
         xhttp.open("GET", url, true);
         xhttp.send();
    }
    else{
         console.log('Empty checkboxes!!');
    }
}

function select_all(){
    checkboxes_checked('box', true);
}

function select_none(){
    checkboxes_checked('box', false);
}

function refresh(per){
    checkboxes_checked('box', false);
    checkboxes_checked('col', false);
    render_admin(per);
}

function checkboxes_checked(name, ch){
    var checkboxes_us = document.getElementsByName(name);
         for (var checkbox of checkboxes_us) {
              if (ch==false){
                   checkbox.checked = false;
              }
              else{
                   checkbox.checked = true;
              }
         }
}

function getCheckedList(name){
var checkboxes_us = document.getElementsByName(name);
    list_checked = []
    for (var checkbox of checkboxes_us) {
         if (checkbox.checked){
              list_checked.push(checkbox.value)
         }
    }
    return list_checked
}


function generate_table(data, list_col){
    var html = "<table border=\"1\" cellpadding=\"4\">";
    html += "<tr>"
    for (var i=0; i<list_col.length; i++) {
       html += "<td>" + list_col[i] +"</td>";
    }
    html += "</tr>"

    for (var i=0; i<data.length; i++){
      html += "<tr>"
      for(var j=0; j<list_col.length; j++){
          html += "<td>" + data[i][list_col[j]] + "</td>"
      }
      html += "</tr>"
    }
    html += "</table>"
    document.getElementById("table").innerHTML = html;
}


function show(){
    if (getCheckedList('box').length!=0&&getCheckedList('col').length!=0){
        url = "http://127.0.0.1:5000/checked_users?users=";
        url += getCheckedList('box');
        url += "&&col=";
        url += getCheckedList('col');

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
             if (this.readyState == 4 && this.status == 200) {
                  console.log(this.responseText);
                  var data = JSON.parse(this.responseText);
                  generate_table(data, getCheckedList('col'));
        }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
    else{
        console.log('Empty checkboxes!!');
        document.getElementById("table").innerHTML = '';
    }
}


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
          var per = this.responseText;
          show_info(per);
    }
};
url = "http://127.0.0.1:5000/session_user"
xhttp.open("GET", url, true);
xhttp.send();



