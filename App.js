var textInput = document.querySelector("#text-input");
var btnTranslate = document.querySelector("#btn-translate");
var textOutput = document.querySelector("#text-output");

var url = "https://api.funtranslations.com/translate/ferb-latin.json";

function urlGenerator(input) {
    return url + "?" + "text=" + input;
}

function errorHandler(error){
    console.log("Error occured",error);
    alert("Some error occured, Try after sometime.");
}

function clickHandler() {
    var inputText = textInput.value;
    fetch(urlGenerator(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            textOutput.innerText = translatedText;
        })
        .catch(errorHandler)
    // console.log("clicked");
}

btnTranslate.addEventListener("click", clickHandler);