document.body.style.background = "red"; 

document.querySelector("h1").style.background ="blue"

document.body.style.fontFamily = "sans-serif"

document.getElementById("nickname").innerHTML = "Stef";

document.getElementById("favorites").innerHTML = "Flower- Calla Lillies";

document.getElementById("hometown").innerHTML = "San Rafael";

var listArr = document.getElementsByTagName("li"); 

for (var i = 0; i < listArr.length; i++) {
  listArr[i].className += "listitem";
}

var classArr = document.getElementsByClassName("listitem");

for (var i = 0; i <classArr.length; i++){
	classArr[i].style.color = "white";
	//changed font color to white instead of red. Assignment called for red but you can't read red font on red background.
}

var picOfMe = document.createElement("img") 

picOfMe.src = "http://i.imgur.com/O3Z7IOI.jpg"; 

picOfMe.height = "500"; 

document.body.appendChild(picOfMe); 
