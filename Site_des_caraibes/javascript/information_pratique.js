const NB_RUBRIQUE = 4;
const NB_QUESTIONS_MAX = 10;

var btn1 = document.getElementById("rub-1");
var btn2 = document.getElementById("rub-2");
var btn3 = document.getElementById("rub-3");
var btn4 = document.getElementById("rub-4");

var rubrique1 = document.getElementById("rubrique-1");
var rubrique2 = document.getElementById("rubrique-2");
var rubrique3 = document.getElementById("rubrique-3");
var rubrique4 = document.getElementById("rubrique-4");

rubrique1.style.display = "none";
rubrique2.style.display = "none";
rubrique3.style.display = "none";
rubrique4.style.display = "none";

btn1.addEventListener("click", function () {
    rubrique1.style.display = "block";
    rubrique2.style.display = "none";
    rubrique3.style.display = "none";
    rubrique4.style.display = "none";
});

btn2.addEventListener("click", function () {
    rubrique1.style.display = "none";
    rubrique2.style.display = "block";
    rubrique3.style.display = "none";
    rubrique4.style.display = "none";
});

btn3.addEventListener("click", function () {
    rubrique1.style.display = "none";
    rubrique2.style.display = "none";
    rubrique3.style.display = "block";
    rubrique4.style.display = "none";
});

btn4.addEventListener("click", function () {
    rubrique1.style.display = "none";
    rubrique2.style.display = "none";
    rubrique3.style.display = "none";
    rubrique4.style.display = "block";
});

var toutesLesReponses = []

function cacher() {
    for (let k = 0; k < toutesLesReponses.length; k++) {
        console.log(toutesLesReponses[k])
        toutesLesReponses[k].style.display = "none";
    }
}

for (let i = 1; i <= NB_RUBRIQUE; i++) {
    for (let j = 1; j <= NB_QUESTIONS_MAX; j++) {
        console.log("q-" + i + "-" + j)
        let question = document.getElementsByClassName("q-" + i + "-" + j);
        let reponse = document.getElementsByClassName("r-" + i + "-" + j);
        try {
            reponse[0].style.display = "none";
            question[0].style.cursor = "pointer";
            question[0].style.fontWeight = "bolder";
            question[0].addEventListener("click", function () {
                cacher()
                reponse[0].style.display = "block";
            });
            toutesLesReponses.push(reponse[0]);
        } catch (e) {
            console.log("");
        }
    }
}