//HELLO  WORLD TO CONSOLE
console.log( 'Hello world!' );
console.log( 'Julie Burmych');

//TREE TO CONSOLE
let num = 8;
let star = "";

function pattern_1 (n, m) {
    star += "<pre>";
    for (let i = 0; i < m; i++) star += "*"
    star += "</pre>";
    if (n == m) return star;
    else return pattern_1(n, m+1);
}

let m = 0;
star1 = pattern_1(num, m);
console.log(star1);
console.log(' ');

star = "";

function pattern_2 (n) {
  
    star += "<pre>";
    for (let i = 0; i < n; i++) star += "*";
    star += '</pre>';

    if (n == 0) return star;
    else return pattern_2(n - 1);
    
}

star2 = pattern_2(num);
console.log(star2);
console.log(' ');

function pattern_3 (n) {
    let m = n;
    let k;
    star = '';
    for (let i = 1; i <= n; i++)  
    {
	star+='<pre>';
	for (let j = 1; j <= m-1; j++){
	    star+=' ';
	}
	for (let k = 1; k <= 2*i-1; k++){
	    
        if (k == 1 || k == 2*i-1 || i == n)  
	    star+='*';
        else  
	    star+=' ';
	}
	m--;
	star += '</pre>';
    }
    return star;
}

star3 = pattern_3(num);
console.log(star3);
console.log(' ');

function pattern_4 (n) {
    let m = 1;
    let k;
    star = '';
    for (let i = n; i >= 1; i--)  
    {
	star += '<pre>';

	for (let j = 1; j<m; j++){
	    star += ' ';
	}
	for (let k = 1; k <= 2*i-1; k++){
	    
        if(k == 1 || k == 2*i-1 || i == n)  
	    star += '*';
        else  
	    star += ' ';
	}
	m++;
	star+='<\pre>';
    }
    return star
}

star4 = pattern_4(num);
console.log(star4);
console.log(' ');

//TREE TO DIV
document.getElementById("pattern1").innerHTML = star1;
document.getElementById("pattern2").innerHTML = star2;
document.getElementById("pattern3").innerHTML = star3;
document.getElementById("pattern4").innerHTML = star4;


//inc/dec
function increment() {
      document.getElementById('demoInput').stepUp();
   }
function decrement() {
      document.getElementById('demoInput').stepDown();
   }

//TO DO LIST
document.getElementById("addList").onclick = function() {
    let text = document.getElementById("input").value; 
    let li = "<li>" + text + "</li>";
    document.getElementById("list").insertAdjacentHTML('beforeend', li);
    document.getElementById("input").value = ""; 
}

//REVERT
function reverseString(str) {
    let splitString = str.split("");//ділить на ерей стрінгів
    let reverseArray = splitString.reverse();//перший елемент-стає останнім і навпаки
    let joinArray = reverseArray.join("");//зєднює всі елементи
    return joinArray;
}

let textRev = document.getElementById('textToReverse').textContent;

console.log(textRev);

a=reverseString(textRev);

let Rev = document.getElementById("textReverse");
Rev.innerHTML = a; 


//PROGRESS
let counter = 0;
function update() {
    counter = 0;
    let width1 = 1;
    let width2 = 1;
    let width3 = 1;
    
    let element1 = document.getElementById("myprogressBar1");    
    let element2 = document.getElementById("myprogressBar2");
    let element3 = document.getElementById("myprogressBar3");
     
    
    let identity1 = setInterval(scene1, 10);
    let identity2 = setInterval(scene2, 50);
    let identity3 = setInterval(scene3, 100);
    
    function scene1() { 
	if (width1 >= 100) { 
	    clearInterval(identity1);
	    counter++;
	    document.getElementById("refreshProgress").value = '(' + counter+')/(3)';
	    
	} else { 
	    width1++;  
	    element1.style.width = width1 + '%';  
	    element1.innerHTML = width1 * 1  + '%';
	} 
    }

     function scene2() { 
	if (width2 >= 100) { 
	    clearInterval(identity2);
	    counter++;
	    document.getElementById("refreshProgress").value = '(' + counter+')/(3)' 
	} else { 
	    width2++;  
	    element2.style.width = width2 + '%';  
	    element2.innerHTML = width2 * 1  + '%';
	}
     }

     function scene3() { 
	if (width3 >= 100) { 
	    clearInterval(identity3);
	    counter++;
	    document.getElementById("refreshProgress").value = '(' + counter+')/(3)'
	} else {
	    width3++;
	    element3.style.width = width3 + '%';  
	    element3.innerHTML = width3 * 1  + '%'; 
	} 
     }
}


// //PROGRESS

// let counter = 0;
// function update() {
//     counter = 0;
//     let width1 = 1;
//     let width2 = 1;
//     let width3 = 1;
    
//     let element1 = document.getElementById("myprogressBar1");    
//     let element2 = document.getElementById("myprogressBar2");
//     let element3 = document.getElementById("myprogressBar3");

  
//     let identity1 = setInterval(() => scene(element1, width1), 100);
//     setTimeout(() => { clearInterval(identity1); scene(element1, width1); }, 10000);

//     // let identity2 = setInterval(() => scene(element2), 100);
//     // setTimeout(() => { clearInterval(identity2); scene(element2); width=0; }, 5000);

//     // let identity3 = setInterval(() => scene(element3), 100);
//     // setTimeout(() => { clearInterval(identity3); scene(element3); width=0; }, 1000);


//     function scene(element, width) { 
// 	if (width >= 100) { 
// 	    counter++;
// 	    document.getElementById("refreshProgress").value = '(' + counter+')/(3)';
	    
// 	} else {
// 	    width++;
// 	    element.style.width = width + '%';  
// 	    element.innerHTML = width * 1  + '%';
// 	} 
//     }
// }



//LOAD PAGE
let listColors = ["00a8a5", "b3079c", "7b968f", "decd31", "a35f5b"];

let id = setInterval(setColor, 1000);

let n = 0;

function setColor(){
    if(n >= listColors.length){
	clearInterval(id);
    }
    else{
	let t = '<li id =\'' +listColors[n] +'\'>#' + listColors[n]+'</li>';
	document.getElementById("listColors").insertAdjacentHTML('beforeend', t);

	let l = document.getElementById(listColors[n]);
	l.style.backgroundColor = '#'+ listColors[n];
	n++;
    }
}

//SPINNER
let idSpin = setInterval(spin, 100);
let sp ="->";
let count = 0;
let randomNum = Math.floor(Math.random() * 20);
console.log(randomNum);

function spin() {
    if (count% 10 == 0){
	sp = "";
    }
    if (count==randomNum*10){
	clearInterval(idSpin);
	sp = "<p>TRASHPANDA</p>";
	document.getElementById("spinner").innerHTML = sp;
    }
    document.getElementById("spinner").innerHTML = sp;
    sp = sp + "->";
    count++;
}


  



