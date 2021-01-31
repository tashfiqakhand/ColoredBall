
 
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
			setCookie("color","Blue",7);
			alert(document.cookie);
			color.appendChild(c);
			color.appendChild(document.createTextNode("You are now viewing a Blue Ball"));

		}
		if (getCookie("color") == "Red"){
			var c = document.createElement("span");
			c.id = "circle";
			c.className="Red";
			setCookie("color","Red",7);
			alert(document.cookie);
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
		setCookie("color","Blue",7);
		alert(document.cookie);
		color.appendChild(c);
		color.appendChild(document.createTextNode("You are now viewing a Blue Ball"));
	}
	else{
		var c = document.createElement("span");
		c.id = "circle";
		c.className="Red";
		setCookie("color","Red",7);
		alert(document.cookie);
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

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
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











