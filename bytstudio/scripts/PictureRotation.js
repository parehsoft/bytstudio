/*** PICTURE ROTATION ------------------------------------------------------------------------------------------------ */

/* IIFE to create fake namespace*/
(function (window) {
    var PictureRotator = {};

    var imageCount = 15; // private variables
    var imageNumber = 1;

    PictureRotator.switchImage = function () {
        var message = "<img src=\"./pictures/" + imageNumber + ".jpg\" width=\"auto\" height=\"auto\">";
        var element = document.getElementById("forPictureRotation");
        if (element != null) {
            element.innerHTML = message;
            if (imageNumber < imageCount) {
                imageNumber += 1;
            }
            else {
                imageNumber = 1;
            }
        }        
    }

    function onClickRotation() {
        var message = "<img src=\"./pictures/" + imageNumber + ".jpg\" width=\"auto\" height=\"auto\">";
        var element = document.getElementById("forPictureRotation");
        if (element != null) { element.innerHTML = message; }
    }

    var rotationStatus = true;

    var miliseconds = 9000;
    var rotationTime = setInterval("PictureRotator.switchImage()", miliseconds);

    PictureRotator.toggleRotation = function (event) {
        if (rotationStatus === true) {
            rotationStatus = false;
            document.getElementById("toggleRotation").innerHTML = "Toggle rotation, current status: off";
        }
        else {
            rotationStatus = true;
            document.getElementById("toggleRotation").innerHTML = "Toggle rotation, current status: on";
        }

        if (rotationStatus === true) { rotationTime = setInterval("PictureRotator.switchImage()", miliseconds); }
        else { clearInterval(rotationTime); }
    }

    var classImageArrowsElement = document.getElementsByClassName("ImageArrows");

    PictureRotator.dispayButtons = function (event) {
        var i;
        for (i = 0; i < classImageArrowsElement.length; i++) {
            classImageArrowsElement[i].style.display = "block";
        }
    }

    PictureRotator.hideButtons = function (event) {
        var i;
        for (i = 0; i < classImageArrowsElement.length; i++) {
            classImageArrowsElement[i].style.display = "none";
        }
    }

    PictureRotator.leftArrowClicked = function (event) {
        clearInterval(rotationTime);
        imageNumber--;
        if (imageNumber < 1) { imageNumber = imageCount; }
        onClickRotation();
        document.getElementById("toggleRotation").innerHTML = "Toggle rotation, current status: off";
    }

    PictureRotator.rightArrowClicked = function (event) {
        clearInterval(rotationTime);
        imageNumber++;
        if (imageNumber > imageCount) { imageNumber = 1; }
        onClickRotation();
        
        document.getElementById("toggleRotation").innerHTML = "Toggle rotation, current status: off";
    }

    // Expose namespace to window object.
    window.PictureRotator = PictureRotator;

})(window);



document.getElementById("toggleRotation").onclick = PictureRotator.toggleRotation;

document.getElementById("imageHolder").onmouseover = PictureRotator.dispayButtons;
document.getElementById("imageHolder").onmouseout  = PictureRotator.hideButtons;

document.getElementById("leftArrow").onclick  = PictureRotator.leftArrowClicked;
document.getElementById("rightArrow").onclick = PictureRotator.rightArrowClicked;