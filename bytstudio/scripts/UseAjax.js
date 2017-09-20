(function (global) { // IIFE
    var UseAjax = {}; // Namespace.

    function HandleResponse(request) {
        var placeHolder = document.querySelector("#contentPlaceHolder");
        var showLoading = "<span style=\"margin-left: auto; margin-right: auto;\"><img src=\"pictures/ajax-loader.gif\"></span>";
        placeHolder.innerHTML = showLoading;
        placeHolder.innerHTML = request.responseText;
    }

    UseAjax.LoadNetCurtains = function () {
        $AjaxUtils.SendGetRequest("./snippets/netCurtains.html", HandleResponse);
    };

    UseAjax.LoadCurtains = function () {
        $AjaxUtils.SendGetRequest("./snippets/curtains.html", HandleResponse);
    };

    UseAjax.LoadPelmets = function () {
        $AjaxUtils.SendGetRequest("./snippets/pelmets.html", HandleResponse);
    };

    UseAjax.LoadMattresses = function () {
        $AjaxUtils.SendGetRequest("./snippets/mattresses.html", HandleResponse);
    };

    UseAjax.LoadClothesAdjustments = function () {
        $AjaxUtils.SendGetRequest("./snippets/clothesAdjustments.html", HandleResponse);
    };

    UseAjax.LoadUpholstery = function () {
        $AjaxUtils.SendGetRequest("./snippets/upholstery.html", HandleResponse);
    };

    UseAjax.LoadCarpets = function () {
        $AjaxUtils.SendGetRequest("./snippets/carpets.html", HandleResponse);
    };

    UseAjax.LoadPvc = function () {
        $AjaxUtils.SendGetRequest("./snippets/pvc.html", HandleResponse);
    };

    UseAjax.LoadFeatherPurification = function () {
        $AjaxUtils.SendGetRequest("./snippets/featherPurification.html", HandleResponse);
    };

    UseAjax.LoadEmbroidery = function () {
        $AjaxUtils.SendGetRequest("./snippets/embroidery.html", HandleResponse);
    };

    UseAjax.LoadTentReparations = function () {
        $AjaxUtils.SendGetRequest("./snippets/tentReparations.html", HandleResponse);
    };

    UseAjax.LoadRollerBlinds = function () {
        $AjaxUtils.SendGetRequest("./snippets/rollerBlinds.html", HandleResponse);
    };

    UseAjax.LoadGardenFurniture = function () {
        $AjaxUtils.SendGetRequest("./snippets/gardenFurniture.html", HandleResponse);
    };

    UseAjax.LoadCarUpholstery = function () {
        $AjaxUtils.SendGetRequest("./snippets/carUpholstery.html", HandleResponse);
    };

    UseAjax.LoadAntiques = function () {
        $AjaxUtils.SendGetRequest("./snippets/antiques.html", HandleResponse);
    };

    global.$UseAjax = UseAjax; // Exposing the namespace.
})(window); // Calling IIFE.

document.getElementById("netCurtains").onclick = $UseAjax.LoadNetCurtains;
document.getElementById("curtains").onclick = $UseAjax.LoadCurtains;
document.getElementById("pelmets").onclick = $UseAjax.LoadPelmets;
document.getElementById("mattresses").onclick = $UseAjax.LoadMattresses;
document.getElementById("clothesAdjustments").onclick = $UseAjax.LoadClothesAdjustments;
document.getElementById("upholstery").onclick = $UseAjax.LoadUpholstery;
document.getElementById("carpets").onclick = $UseAjax.LoadCarpets;
document.getElementById("pvc").onclick = $UseAjax.LoadPvc;
document.getElementById("featherPurification").onclick = $UseAjax.LoadFeatherPurification;
document.getElementById("embroidery").onclick = $UseAjax.LoadEmbroidery;
document.getElementById("tentReparations").onclick = $UseAjax.LoadTentReparations;
document.getElementById("rollerBlinds").onclick = $UseAjax.LoadRollerBlinds;
document.getElementById("gardenFurniture").onclick = $UseAjax.LoadGardenFurniture;
document.getElementById("carUpholstery").onclick = $UseAjax.LoadCarUpholstery;
document.getElementById("antiques").onclick = $UseAjax.LoadAntiques;