var buttons = document.querySelectorAll("button");
var carte = document.getElementById("carte");

buttons.forEach(function (button) {
    button.addEventListener("mouseover", function () {
        carte.src = "../image/departements/" + button.className;
    });


    button.addEventListener("mouseleave", function () {
        carte.src = "../image/departements/vierge.png";
    });
});

