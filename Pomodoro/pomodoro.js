let brukerTid = document.getElementById("tid");  // input-felt for minutter
let button = document.getElementById("start");

button.addEventListener("click", () => {
    let minutt = Number(brukerTid.value); // les inn minutter fra input
    let sekund = 0;

    // Oppdaterer skjermen med startverdi
    document.getElementById("output1").innerText = `${minutt}:${sekund.toString().padStart(2, "0")}`;

    // Kjør hvert sekund
    let timer = setInterval(() => {

        if (sekund === 0) {
            if (minutt === 0) {
                clearInterval(timer);
                document.getElementById("output1").innerText = "Tiden er ute!";
                return;
            } else {
                minutt--;       // trekk fra ett minutt
                sekund = 59;    // start sekundene på nytt
            }
        } else {
            sekund--;          // tell ned sekundene
        }

        // Oppdater visningen
        document.getElementById("output1").innerText = `${minutt}:${sekund.toString().padStart(2, "0")}`;

    }, 1000);
});