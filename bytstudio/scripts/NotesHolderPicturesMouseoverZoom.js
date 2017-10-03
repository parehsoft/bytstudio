/*** IMAGE MOUSEOVER ZOOM --------------------------------------------------------------------------------------------- */

function zoomBytstudioIn() {
    var element = document.getElementById("displayImageFromInfoHolder");
    if (element != null) { element.style.display = "block"; }
}

function zoomBytstudioOut() {
    var element = document.getElementById("displayImageFromInfoHolder");
    if (element != null) { element.style.display = "none"; }
}

document.querySelector("#infoHolderImageWrapper").onmouseover = zoomBytstudioIn;
document.querySelector("#infoHolderImageWrapper").onmouseout = zoomBytstudioOut;
document.querySelector("#logoImage").onmouseover = zoomBytstudioIn;
document.querySelector("#logoImage").onmouseout  = zoomBytstudioOut;