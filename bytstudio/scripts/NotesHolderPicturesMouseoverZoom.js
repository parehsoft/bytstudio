/*** IMAGE MOUSEOVER ZOOM --------------------------------------------------------------------------------------------- */

function zoomBytstudioIn() {
    var element = document.getElementById("displayImageFromInfoHolder");
    if (element != null) { element.style.visibility = "visible"; }
}

function zoomBytstudioOut() {
    var element = document.getElementById("displayImageFromInfoHolder");
    if (element != null) { element.style.visibility = "hidden"; }
}

document.querySelector("#infoHolderImageWrapper").onmouseover = zoomBytstudioIn;
document.querySelector("#infoHolderImageWrapper").onmouseout = zoomBytstudioOut;