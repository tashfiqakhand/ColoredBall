
var colorRed = "Red_Counter";
var colorBlue = "Blue_Counter"; 
var indexR;
var indexB;
var d = new Date();
d.setTime(d.getTime() + (7*24*60*60*1000));
var expires = "expires=" + d.toGMTString();
 
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

window.onload = function (){
	var user = getCookie("color");
  	if (user != ""){
		// var nameValueArray = document.cookie.split("=");
		
		if (getCookie("color") == "Blue"){
			var c = document.createElement("span");
			c.id = "circle";
			c.className = "Blue";
			
			

			

			if(document.cookie){
				indexB=document.cookie.indexOf(colorBlue);
			}
			else {
				indexB = -1;
			}


			var countbegin = (document.cookie.indexOf("=", indexB) + 1);
			var countend = document.cookie.indexOf(";", indexB);
			if (countend == -1) {
				countend = document.cookie.length;
			}
			var count = eval(document.cookie.substring(countbegin, countend)) + 1;

			document.cookie=colorBlue+"="+count+"; expires=" + expires;



			// setCookie("color","Blue",7);
			setCookie("color","Blue");

			// alert(document.cookie);

			// setCookie("color","Blue", "occurance", 2, 7);
			   alert(document.cookie);


			// var cookie = document.cookie;
			// // If(cookie!= null && cookie!=undefined){
			// 	var imageSeen = cookie.split(";")[0].split("=")[1];
			// 	var seenCount= parseInt(cookie.split(";")[1].split("=")[1]);

			// 	//Not first time visit!!
			// 	seenCount++;


			// 	setCookie("color","Blue", "occurance", seenCount, 7);
			// 	alert(document.cookie);


			// }
			color.appendChild(c);
			color.appendChild(document.createTextNode("You are now viewing a Blue Ball"));

		}
		if (getCookie("color") == "Red"){
			var c = document.createElement("span");
			c.id = "circle";
			c.className="Red";


			if(document.cookie){
				indexB=document.cookie.indexOf(colorRed);
			}
			else {
				indexR = -1;
			}



			var countbegin = (document.cookie.indexOf("=", indexR) + 1);
			var countend = document.cookie.indexOf(";", indexR);
			if (countend == -1) {
				countend = document.cookie.length;
			}
			var count = eval(document.cookie.substring(countbegin, countend)) + 1;

			document.cookie=colorBlue+"="+count+"; expires=" + expires;
			// setCookie("color","Red",7);
			setCookie("color","Red");
			// alert(document.cookie);

			// setCookie("color","Blue", "occurance", 2, 7);
		    alert(document.cookie);


			// var cookie = document.cookie;
			// var imageSeen = cookie.split(";")[0].split("=")[1];
			// var seenCount= parseInt(cookie.split(";")[1].split("=")[1]);

			// //Not first time visit!!
			// seenCount++;


			// setCookie("color","Red", "occurance", seenCount, 7);
			// alert(document.cookie);


			color.appendChild(c);
			color.appendChild(document.createTextNode("You are now viewing a Red Ball"));
		}
	}

	else{
		colorBall();
	} 
}

function colorBall(){
	var color = document.getElementById("color");

	var i = getRandomInt(99);
	if (i < 50){
		var c = document.createElement("span");
		c.id = "circle";
		c.className = "Blue";


		   // setCookie("color","Blue",7);
		   setCookie("color","Blue");
		   alert(document.cookie);

		// setCookie("color","Blue", "occurance", 1, 7);
		// alert(document.cookie);
		document.cookie = colorBlue+"=1; expires=" + expires;
		document.cookie = colorRed+"=0; expires=" + expires;



		color.appendChild(c);
		color.appendChild(document.createTextNode("You are now viewing a Blue Ball"));
	}
	else{
		var c = document.createElement("span");
		c.id = "circle";
		c.className="Red";

		document.cookie = colorRed+"=1; expires=" + expires;
		document.cookie = colorBlue+"=0; expires=" + expires;



		   // setCookie("color","Red", 7);
		   setCookie("color","Red");
		   alert(document.cookie);

		// setCookie("color","Red", "occurance", 1, 7);
		// alert(document.cookie);



		color.appendChild(c);
		color.appendChild(document.createTextNode("You are now viewing a Red Ball"));
	}
}



// function setCookie(cname, cvalue, exdays) {
//   var d = new Date();
//   d.setTime(d.getTime() + (exdays*24*60*60*1000));
//   var expires = "expires="+ d.toUTCString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(cname) {
//   var name = cname + "=";
//   var decodedCookie = decodeURIComponent(document.cookie);
//   var ca = decodedCookie.split(';');
//   for(var i = 0; i <ca.length; i++) {
//     var c = ca[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }

// function setCookie(cname,cvalue,exdays) {
//   // var d = new Date();
//   // d.setTime(d.getTime() + (exdays*24*60*60*1000));
//   // var expires = "expires=" + d.toGMTString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

function setCookie(cname,cvalue) {
  // var d = new Date();
  // d.setTime(d.getTime() + (exdays*24*60*60*1000));
  // var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// function setCookie(cname,cvalue,visits,num,exdays) {
//   var d = new Date();
//   d.setTime(d.getTime() + (exdays*24*60*60*1000));
//   var expires = "expires=" + d.toGMTString();
//   document.cookie = cname + "=" + cvalue + ";" + visits + "=" + num + ";" + expires + ";path=/";
// }
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
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











