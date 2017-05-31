document.body.style.background = "red"; //document indictes to look at document. body indicates look at body? this change background color to red//

document.querySelector("h1").style.background ="blue"

document.body.style.fontFamily = "sans-serif"

document.getElementById("nickname").innerHTML = "Stef";

document.getElementById("favorites").innerHTML = "Flower- Calla Lillies";

document.getElementById("hometown").innerHTML = "San Rafael";

var listArr = document.getElementsByTagName("li"); //all items go into variable to manipulate

for (var i = 0; i < listArr.length; i++) {
  listArr[i].className += "listitem";  //To add a class to an element, without overwriting existing values, insert a space and the new class name. https://www.w3schools.com/jsref/prop_html_classname.asp
//could have just put document.getElementsByClassName("listitems")[i].style.color = "white" here bc it is the same counter instead of doing below.
  }

var classArr = document.getElementsByClassName("listitem");

for (var i = 0; i <classArr.length; i++){
	classArr[i].style.color = "white";
}

//good resource on using selectors: http://xahlee.info/js/js_get_elements.html

//for some reason, you cannot use document.getElementById( ) to manipulate font color. Ex: document.getElementById("blah").style.fontColor = "white" will not work. But font family and background will work.

var picOfMe = document.createElement("img") //you put everything in a variable if y ou want to manipulate.

picOfMe.src = "http://i.imgur.com/O3Z7IOI.jpg"; //you use variable name and .src. you can also get element by ID if it had ID https://www.w3schools.com/jsref/prop_img_src.asp

picOfMe.height = "500"; //to change size of pic

document.body.appendChild(picOfMe); //you put variable name to append.