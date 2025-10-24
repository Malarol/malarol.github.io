let brukerinput = document.getElementById("in");
let knapp = document.getElementById("knapp");

knapp.addEventListener("click", () => {
    let brukerAlder = Number(brukerinput.value)
    if (brukerAlder < 16) {
        document.getElementById("out").innerText = "Du kan ikkje ta førerkort";
    }
    else if (brukerAlder >= 16 && brukerAlder < 18){
        document.getElementById("out").innerText = "Du kan ta mopedlappen";
    }
    else if (brukerAlder >= 18 && brukerAlder < 21){
        document.getElementById("out").innerText = "Du kan ta mopedlappen og billappen";
    }
    else if (brukerAlder >= 21 && brukerAlder < 24){
        document.getElementById("out").innerText = "Du kan ta mopedlappen, billappen og lastebillappen";

    }
    else if (brukerAlder >= 24 && brukerAlder < 70) {
        document.getElementById("out").innerText = "Du kan ta alle lappen, dette innebærer mopedlappen, billappen, lastebillappen og busslappen";
}
    else if (brukerAlder >= 70) {
        document.getElementById("out").innerText = "Du kan ta alle lappen, men du bør teste deg";
    }
})