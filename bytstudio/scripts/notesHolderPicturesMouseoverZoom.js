/*** IMAGE MOUSEOVER ZOOM --------------------------------------------------------------------------------------------- */
function zoomBytstudioIn() {
    var element = document.getElementById("displayImageFromInfoHolder");
    element.style.visibility = "visible";
}

function zoomBytstudioOut() {
    var element = document.getElementById("displayImageFromInfoHolder");
    element.style.visibility = "hidden";
}

document.querySelector("#infoHolderImageWrapper").onmouseover = zoomBytstudioIn;
document.querySelector("#infoHolderImageWrapper").onmouseout = zoomBytstudioOut;