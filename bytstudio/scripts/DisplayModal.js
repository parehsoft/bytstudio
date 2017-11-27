
/*** DISPLAY MODAL --------------------------------------------------------------------------------------------- */

//IIFE to pass window
(function (window) {

    var ModalManipulator = {};

    var modal  = document.getElementById("myModal");
    var close  = document.querySelector(".Close");
    var close2 = document.querySelector(".ModalContent");

    ModalManipulator.displayModal = function () {
        modal.style.display = "block";
        close.onclick = function () { modal.style.display = "none"; };
        window.onclick = function (event) { if (event.target.tagName == "SECTION" || event.target == close2) { modal.style.display = "none"; } };
    };

    window.ModalManipulator = ModalManipulator;

})(window);

document.querySelector("#infoHolderImageWrapper").onclick = ModalManipulator.displayModal;
document.querySelector("#aboutUs").onclick = ModalManipulator.displayModal;