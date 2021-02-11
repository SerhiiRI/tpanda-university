
let listImg = [ "\"space.jpg\"", "\"sun.jpg\"", "\"fire.jpg\"", "\"space2.jpg\""];
let modal = document.getElementById('myModal');

modal.style.padding = '8%';
modal.style.display = 'none';
modal.style.position =  'fixed';
modal.style.zIndex =  '1';
modal.style.top =  '0';
modal.style.left =  '0';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.margin = '0%';
modal.style.overflow = ' auto'; 
modal.style.backgroundColor = 'rgb(0,0,0)'; 
modal.style.backgroundColor = 'rgba(0,0,0,0.7)'; 

function addImages(){
    let t;
    for (let n = 0; n < listImg.length; n++){   
	t = '<img id = \"image\"  src=' + listImg[n] +'height=\"400px\">';
	document.getElementById("images").insertAdjacentHTML('beforeend', t);
    }
}

document.getElementById("images").style.padding = '3%';

addImages();

let elements = document.getElementsByTagName('img');

for(let i = 0; i < elements.length; i++){
    elements[i].addEventListener("click", function() {
	console.log(elements[i]);
	let t;
	t = '<img id = \"image\" onclick=\"closeImage()\" src=' + listImg[i] +'height=\"700px\" width=\"700px\">';
	document.getElementById("addImg").innerHTML = t;
	modal.style.display = "block";
    });
}


function closeImage(){
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
