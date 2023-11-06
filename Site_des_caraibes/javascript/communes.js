var buttons = document.querySelectorAll("button");
var carte = document.getElementById("carte");
const API_KEY_WEATHER = "289e38b266f2cccb8c0452ec0063ac3b"
const KELVIN = -273.15

var request = new XMLHttpRequest();
request.open("GET", "../javascript/geo.json", false);
request.overrideMimeType("application/json");
request.send(null);
const jsonData = JSON.parse(request.responseText);



async function getMeteo(ville) {
    $("#openweathermap-widget-15").remove();
    await new Promise(r => setTimeout(r, 500));
    var newDiv = document.createElement('div');
    newDiv.id = 'openweathermap-widget-15';
    newDiv.classList.add('meteo'); // Ajoute la classe 'meteo'
// Sélectionnez l'élément avec l'ID "container"
    var containerElement = document.getElementById('container');
// Ajoutez la nouvelle div à l'intérieur de l'élément avec l'ID "container"
    containerElement.appendChild(newDiv);

    if (!window.myWidgetParam) {
        window.myWidgetParam = [];
    }

    window.myWidgetParam.push({
        id: 15,
        cityid: jsonData[ville.split(".")[0]].cityid,
        appid: API_KEY_WEATHER,
        units: 'metric',
        containerid: 'openweathermap-widget-15'
    });

    var script = document.createElement('script');
    script.async = false;
    script.charset = "utf-8";
    script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";

    script.onload = function () {
        console.log("")
    };

    console.log(script)

    document.body.appendChild(script);
}


buttons.forEach(function (button) {
    button.addEventListener("click", function () {

        carte.src = "../image/departements/" + button.className;
        getMeteo(button.className);
        //getMeteo2(button.className);
    });
});

/*
function getMeteo2(ville){
    $.ajax({
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?lat=" + jsonData[ville.split(".")[0]].lat + "&lon=" + jsonData[ville.split(".")[0]].lon + "&lang=fr&appid=" + API_KEY_WEATHER,
        success: function(data){
            //document.getElementById("entre_meteo").innerHTML = ville.split(".")[0]
            //document.getElementById("texte_meteo").innerHTML ="Il fait actuellement <b>"+ Math.round(data["main"].temp + KELVIN) + "°C </b>";
            //console.log(data)
            //console.log(Math.round(data["main"].temp + KELVIN))
            //console.log(data["id"])
        }
    })
}*/








