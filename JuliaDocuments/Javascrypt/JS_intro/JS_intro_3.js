class GeneratorList{

    constructor(list){
	this.list = list;
    }

    createList(){
	let t;
	for (let n = 0; n < this.list.length; n++){   
	    t = '<li>' + this.list[n] +'</li>';
	    document.getElementById("listMenu").insertAdjacentHTML('beforeend', t);
	}
    }
}

let listMenu = ["audio", "info", "search", "read", "write"];
let generator = new GeneratorList(listMenu);
generator.createList();

let navbar = document.getElementById("navbar");
navbar.style.overflow = 'hidden';
navbar.style.backgroundColor = '#333';
navbar.style.margin = '0%';
navbar.style.padding = '0%';


let myDrop = document.getElementById("myDropdown");
myDrop.style.margin ='0%';
myDrop.style.padding ='0%';
myDrop.style.display ='none';
myDrop.style.position ='absolute';
myDrop.style.zIndex = '1';
myDrop.style.backgroundColor =  '#4e4376';
myDrop.style.minWidth =  '160px';


function myFunction() {
    myDrop.style.display ='block';
    myDrop.addEventListener("mouseout", function() {
	myDrop.style.display ='none';
    });
      myDrop.addEventListener("mouseover", function() {
	myDrop.style.display ='block';
    });
}


//HOVER_TEXT
document.getElementById("parts").style.color = 'black';

let text = document.getElementById("parts").textContent;
let split_text = text.split(/([!,?,.])/);
let t = "<p>";
for (let i = 0; i < split_text.length; i++){
    t = t + '<span>' + split_text[i] + '</span>';
}

t = t + "</p>";

document.getElementById("parts").innerHTML = t;

let elements = document.getElementsByTagName('SPAN');

for(let i = 0; i < elements.length; i++){
    
    elements[i].addEventListener("mouseover", function() {
	elements[i].style.color = "grey";
    });

    elements[i].addEventListener("mouseout", function() {
	elements[i].style.color = "black";
    });

    elements[i].addEventListener("mousedown", function() {
	elements[i].style.color = " #3b8d99";
	elements[i].style.backgroundColor = '#4e4376';	
    });

    elements[i].addEventListener("mouseup", function() {
	elements[i].style.color = "#4e4376";
	elements[i].style.backgroundColor = '#3b8d99';
    });
}


//PARSER

let listUrls =  ["https://beef.example.com/agreement.aspx", "https://www.example.com/",
		 "https://birthday.example.com/", "http://example.org/",
		 "https://example.com/basketball/art.php", " https://amusement.example.com/badge.aspx",
		 "https://www.example.net/", "https://baby.example.com/?ants=airplane",
		 "https://www.example.com/airport?bat=blade", "https://example.com/air/air"];

let a;
for (let n = 0; n < listUrls.length; n++){   
    a = '<option>' + listUrls[n] +'</option>';
    document.getElementById("select_urls").insertAdjacentHTML('beforeend', a);
}
  
let urlButton = document.getElementById("select");
let urlList = document.getElementById("select_urls");
let outputBox = document.getElementById("output");

urlButton.addEventListener("click", function() {
  let collection = urlList.selectedOptions;
  let output = "";

    for (let i=0; i<collection.length; i++) {	
	output = collection[i].label;
    }
    
   
    let generate = new GenerateJSON(output);
    outputBox.innerHTML = generate.generate();
    
}, false);


class Parse{
    
    constructor(url){
	this.url = url;
    }

    getDomen(){
	let str = this.url.split('/');
	return str[0]+"//"+str[2];
    }

    getProtocol(){
	let str = this.url.split('/');
	return str[0];
    }

    getPath(){
	let str = this.url.split('/');
	if (str.length == 4){
	    if (str[3].includes('?') == true){
		str = str[3].split('?');
		return str[0];
	    }
	    else{
		return str[3];
	    }
	}
	else{
	    return undefined; 
	}
    }
    getParameters(){
	if (this.url.includes('?') == true){
	    let str = this.url.split('/');
	    if (str[3].includes('?') == true){
		str = str[3].split('?');
	    }
	    else{
		str = str[2].split('?');
	    }
	    str = str[1].split('&');;
	    let param = [];
	    for (let i = 0; i < str.length; i++){
		let s = str[i].split('=');
		param[i] = s;
	    }
	    return param;
	}
	else{
	    return NaN;
	}
    }
}

class GenerateJSON{
    constructor(url){
	this.url = url;
    }

    generate(){
	let create = new CreateJSON(this.url);
	let parse = new Parse(this.url);
	let columns = ["Domen name", "Protocol", "Path", "Parameters"];
	let param = parse.getParameters();
	let strings = [parse.getDomen(), parse.getProtocol(), parse.getPath()];
	return create.generate(columns, strings, param);
    }
}

class CreateJSON{
    
    constructor(url){
	this.url = url;
    }
    generate(col, rows, param){
	let i = 0;
	let j = 0;
	let str = '<pre>{\n';
	for (let i=0; i<col.length; i++){
	    if (col[i] != "Parameters"){
		str += "\t\"" + col[i] + "\":";
                str += "\"" + rows[i] + "\"\n";
	    }
	    else{
		str += "\t\"" + col[i] + "\":" + "[";
		for(let j = 0; j < param.length; j++){
		    str += "{" + "\"" + param[j][0] + "\":\"" + param[j][1] + "\"}";
		    if(j != param.length -1){
			str += ",";
		    }
		}
	    }
	}
	str += "]\n}</pre>";
	return str;	
    }
}








