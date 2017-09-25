(function (global) { // IIFE
    var UseAjax = {}; // Namespace.

    function ShowLoading() {
        document.querySelector("#contentPlaceHolder").innerHTML = "<div id=\"imageHolder\"><div style=\"margin-left: 49%;\"><img src=\"pictures/ajax-loader.gif\"></div></div>";
    }

    function HandleResponse(request) {
	    document.querySelector("#contentPlaceHolder").innerHTML = request.responseText;
    }

    UseAjax.LoadNetCurtains = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/netCurtains.html", HandleResponse);
    };

    UseAjax.LoadCurtains = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/curtains.html", HandleResponse);
    };

    UseAjax.LoadPelmets = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/pelmets.html", HandleResponse);
    };

    UseAjax.LoadMattresses = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/mattresses.html", HandleResponse);
    };

    UseAjax.LoadClothesAdjustments = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/clothesAdjustments.html", HandleResponse);
    };

    UseAjax.LoadUpholstery = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/upholstery.html", HandleResponse);
    };

    UseAjax.LoadCarpets = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/carpets.html", HandleResponse);
    };

    UseAjax.LoadPvc = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/pvc.html", HandleResponse);
    };

    UseAjax.LoadFeatherPurification = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/featherPurification.html", HandleResponse);
    };

    UseAjax.LoadEmbroidery = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/embroidery.html", HandleResponse);
    };

    UseAjax.LoadTentReparations = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/tentReparations.html", HandleResponse);
    };

    UseAjax.LoadRollerBlinds = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/rollerBlinds.html", HandleResponse);
    };

    UseAjax.LoadGardenFurniture = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/gardenFurniture.html", HandleResponse);
    };

    UseAjax.LoadCarUpholstery = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/carUpholstery.html", HandleResponse);
    };

    UseAjax.LoadAntiques = function () {
        ShowLoading();
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