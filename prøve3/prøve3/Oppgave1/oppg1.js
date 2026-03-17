const skjema = document.getElementById("skjema");
const output = document.getElementById("output");

rabattkoder = ["rabatt", "lykke", "penger", "vinner"];

skjema.addEventListener("submit", function(event) {
    event.preventDefault();

    let navn = document.getElementById("navn").value;
    let etternavn = document.getElementById("etternavn").value;
    let epost = document.getElementById("epost").value;
    let passord = document.getElementById("passord").value;
    let rabatt = document.getElementById("rabatt").value;

    let rabattboolean = false;

    for (let i = 0; i < rabattkoder.length; i++) {
        const element = rabattkoder[i];
        if (element === rabatt) {
            rabattboolean = true;
            break;
        }
    }

    output.innerText = "";

    if (rabattboolean === true) {
        output.innerText = "Takk for din registrering, " + navn + ". Du har oppgitt en rabattkode og får en rabattert pris";;
    }
    else {
        output.innerText = "Takk for din registrering, " + navn;
    }
})

