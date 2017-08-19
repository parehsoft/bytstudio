/*** PICTURE ROTATION ------------------------------------------------------------------------------------------------ */

/* IIFE to create fake namespace*/
(function (window) {
    var PictureRotator = {};

    var imageCount = 15; // private variables
    var imageNumber = 1;

    PictureRotator.switchImage = function () {
        var message = "<img src=\"./pictures/" + imageNumber + ".jpg\" width=\"auto\" height=\"auto\">";
        document.getElementById("forPictureRotation").innerHTML = message;

        if (imageNumber < imageCount) {
            imageNumber += 1;
        }
        else {
            imageNumber = 1;
        }
    }

    window.PictureRotator = PictureRotator;

})(window);

setInterval("PictureRotator.switchImage()", 9000);