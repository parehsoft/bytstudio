
/*** LOGO MOUSEOVER ZOOM --------------------------------------------------------------------------------------------- */
function zoomLogoIn() {
	var message = "<img id=\"zoomedLogo\" src=\"./pictures/bytstudio-1600.jpg\">";
	var element = document.getElementById("forZoomedLogo");
	element.innerHTML = message;
}

function zoomLogoOut() {
	var element = document.getElementById("zoomedLogo");
	element.remove();
}

document.querySelector("#logoImage").onmouseover =  zoomLogoIn;
document.querySelector("#logoImage").onmouseout  = zoomLogoOut;