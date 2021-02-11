class User {
    
    constructor(login, passw, money){
	this.login = login;
	this.passw = passw;
	this.money = money;
    }
    
    getLogin(){
	return `${this.login}`;
    }
    
    getPass(){
	return `${this.passw}`;
    }
    
    getMoney(){
	return this.money;
    }
    
    setMoney(money){
	this.money = money;
    }
}


class Repo {
    
    constructor(){
	this.userList = [];
	this.userList.push(new User('rosa', '0000', 200));
	this.userList.push(new User('anna', '1111', 300));
	this.userList.push(new User('bob', '2222', 4000));
	this.userList.push(new User('julie', '1234', 5000));
    }
    
    search(username, password){
	let num;
	for(let i=0; i<this.userList.length; i++){
	    if ( username == this.userList[i].getLogin() && password == this.userList[i].getPass()){
		num = i;
	    }
	}
	return num;
    }

    searchByName(username){
	let num;
	for(let i=0; i<this.userList.length; i++){
	    if ( username == this.userList[i].getLogin()){
		num = i;
	    }
	}
	return num;
    }

    getBalance(n){
	return this.userList[n].getMoney();
    }
    
    getMoney(money, n){
	if(this.userList[n].getMoney() >= money){
	    this.userList[n].setMoney(this.userList[n].getMoney()-money);
	    return true;
	}
	else{
	    return false;
	}
    }

    setMoney(money, n){
	this.userList[n].setMoney(this.userList[n].getMoney()+money);
    }
}


let repo = new Repo();

document.getElementById("newForm").hidden = true;
document.getElementById("value").hidden = true;
document.getElementById("name_us").hidden = true;

function timerShow(){
    
    let timerSh = document.getElementById("timer");
    timeSec = parseInt(120);
    
    timer = setInterval(function () {
	seconds = timeSec;
	if (timeSec <= 0) {
            clearInterval(timer);
	    document.getElementById("newForm").hidden = true;
	    document.getElementById("form_id").hidden = false;
	} else { 
            let strTimer = seconds;
            timerSh.innerHTML ="Time: " +  strTimer + "s";
	}
	--timeSec; 
    }, 1000)
}


let attempt = 3;
let num;
let money;

function validate(){
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    num = repo.search(username, password);
    
    if(num == undefined){
	attempt --;
	alert("You have "+attempt+" attempt;");
	if( attempt == 0){
	    document.getElementById("username").disabled = true;
	    document.getElementById("password").disabled = true;
	    document.getElementById("submit").disabled = true;
	    return false;
	}
    }    
    else{
	alert ("Login successfully");
	document.getElementById("form_id").hidden = true;
	document.getElementById("newForm").hidden = false;
	timerShow();
	return false;
    } 
}


function balance(){
    document.getElementById("resault").innerHTML = repo.getBalance(num);
    document.getElementById("value").hidden = true;
    document.getElementById("name_us").hidden = true;
}


function logKeyValue(e){

    if(e.keyCode==13){

	let moneystr = value.value;
	money = parseInt(moneystr, 10);

	if (money > 0){
	    let b = repo.getMoney(money, num);
	    if (b == true){
		document.getElementById("resault").innerHTML = "Success!)";
	    }
	    else {
		document.getElementById("resault").innerHTML = "Not enough money";
	    }
	}
	else{
	    document.getElementById("resault").innerHTML = "Invalid input"
	}   
    }
}


function setMoney(){
    
    let value = document.getElementById("value");
    value.hidden = true;
  
    let nameUser = document.getElementById("name_us");
    nameUser.hidden = false;

    nameUser.addEventListener('keydown', logKeyName);

    function logKeyName(e){
	if(e.keyCode==13){
	    let namestr = nameUser.value;
	    let k = repo.searchByName(namestr);
	    if (k == undefined){
		document.getElementById("resault").innerHTML = "Invalid input";
	    }
	    else{
		document.getElementById("resault").innerHTML = "Success!)";
		value.hidden = false;
		value.addEventListener('keydown', logKeyValue);
		let moneys = value.value;
		money = parseInt(moneys, 10);
		repo.setMoney(money, k);
	    }
	}
    }
}


function getMoney(){

    let value = document.getElementById("value");
    value.hidden = false;
    document.getElementById("name_us").hidden = true;
    value.addEventListener('keydown', logKeyValue);

}

function logout(){
    document.getElementById("form_id").hidden = false;
    document.getElementById("newForm").hidden = true;
    clearInterval(timer);
}


