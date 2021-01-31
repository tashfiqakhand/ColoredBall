// Tashfiq Akhand - MightyHive Interview

//global variables
var colorRed = "Red_Counter"; 
var colorBlue = "Blue_Counter"; 
var indexR; //index counter for red
var indexB; //index counter for blue

//7 day expiry time
var d = new Date();
d.setTime(d.getTime() + (7*24*60*60*1000));
var expires = "expires=" + d.toGMTString();
 
//random number generator from 0 to max input(unknown until called)
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

window.onload = function (){ //initial window functionality
	var user = getCookie("color");
  	if (user != ""){//check if cookie variable user is not empty, proceed then
		
		if (getCookie("color") == "Blue"){ //if ball color is blue
			var c = document.createElement("span");
			c.id = "circle";
			c.className = "Blue";//staying the same ball color as previous visit
			

			if(document.cookie){//starting index counter for Blue Ball
				indexB=document.cookie.indexOf(colorBlue);
			}
			else {
				indexB = -1;
			}

			//color ball counter functionality
			var countbegin = (document.cookie.indexOf("=", indexB) + 1);
			var countend = document.cookie.indexOf(";", indexB);
			if (countend == -1) {
				countend = document.cookie.length;
			}
			var count = eval(document.cookie.substring(countbegin, countend)) + 1;

			//create cookie for occurances of the blue ball
			document.cookie=colorBlue+"="+count+"; expires=" + expires;

			//create cookie for color present
			setCookie("color","Blue");

			//initial page popup of all cookies present for the user (report)
			alert(document.cookie);

			color.appendChild(c);//adding in the ball image using DOM principles

			//printing the ball color for the user
			color.appendChild(document.createTextNode("You are now viewing a Blue Ball"));

		}
		if (getCookie("color") == "Red"){//if ball color is red
			var c = document.createElement("span");
			c.id = "circle";
			c.className="Red";//staying the same ball color as previous visit


			if(document.cookie){//starting index counter for Red Ball
				indexB=document.cookie.indexOf(colorRed);
			}
			else {
				indexR = -1;
			}


			//color ball counter functionality
			var countbegin = (document.cookie.indexOf("=", indexR) + 1);
			var countend = document.cookie.indexOf(";", indexR);
			if (countend == -1) {
				countend = document.cookie.length;
			}
			var count = eval(document.cookie.substring(countbegin, countend)) + 1;

			//create cookie for occurances of the red ball
			document.cookie=colorRed+"="+count+"; expires=" + expires;

			//create cookie for color present
			setCookie("color","Red");
			
			//initial page popup of all cookies present for the user (report)
		    alert(document.cookie);

			color.appendChild(c);//adding in the ball image using DOM principles

			//printing the ball color for the user
			color.appendChild(document.createTextNode("You are now viewing a Red Ball"));
		}
	}

	else{ //if no cookies created (first user appearence), then proceed to function colorBall()
		colorBall();
	} 
}

function colorBall(){ //50/50 chance function
	var color = document.getElementById("color"); //resorting to HTML file's id="color"

	var i = getRandomInt(99); ////random number generator from 0 to max input(99)
	if (i < 50){//if the number is between 0 to 49
		var c = document.createElement("span");
		c.id = "circle";
		c.className = "Blue"; //Blue Ball

		//Initial Counter for each Ball (Blue:1, Red:0)
		document.cookie = colorBlue+"=1; expires=" + expires;
		document.cookie = colorRed+"=0; expires=" + expires;

		//create cookie for color Blue
		setCookie("color","Blue");

		//initial page popup of all cookies present for the user (report)
		alert(document.cookie);


		color.appendChild(c);//adding in the ball image using DOM principles

		//printing the ball color for the user
		color.appendChild(document.createTextNode("You are now viewing a Blue Ball"));
	}
	else{//if the number is between 50 to 99
		var c = document.createElement("span");
		c.id = "circle";
		c.className="Red"; //Red Ball

		//Initial Counter for each Ball (Blue:0, Red:1)
		document.cookie = colorBlue+"=0; expires=" + expires;
		document.cookie = colorRed+"=1; expires=" + expires;

		//create cookie for color Blue
		setCookie("color","Red");

		//initial page popup of all cookies present for the user (report)
		alert(document.cookie);


		color.appendChild(c);//adding in the ball image using DOM principles

		//printing the ball color for the user
		color.appendChild(document.createTextNode("You are now viewing a Red Ball"));
	}
}

//cookie creater function
function setCookie(cname,cvalue) {
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//get cookie from cname
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);//decoder for special characters
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}



















