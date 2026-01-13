const skjema = document.getElementById("skjema");
let output = document.getElementById("output");

skjema.addEventListener("submit", hent_skjema);

function hent_skjema(event) {
    event.preventDefault();
    
    let word = document.getElementById("ord").value;
    get_def(word);
}

async function get_def(userInput) {
    output.innerHTML = "";

    let results = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + userInput);
    let data = await results.json();

    let meaningLength = data[0].meanings.length - 1;

    let headingDef = document.createElement("H3");
    headingDef.innerText = "Definitions for " + userInput.toLowerCase() + ":";
    output.appendChild(headingDef);

    for (let i = 0; i < data[0].meanings[meaningLength].definitions.length; i++) {

        const element = data[0].meanings[meaningLength].definitions[i].definition;

        let def = document.createElement("p");
        def.innerText = "Definition: " + element;
        output.appendChild(def);        
    }
}