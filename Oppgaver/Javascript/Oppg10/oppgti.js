let brukerInput = document.getElementById("input");
let button = document.getElementById("button");

button.addEventListener("click", () => {
    let brukerverdi = brukerInput.value.toLowerCase();

    if (brukerverdi.includes("ski") || brukerverdi.includes("trening")) {
        document.getElementById("output").innerText = "Eg og liker d";  
        console.log("ja");
    } else {
        document.getElementById("output").innerText = "Eg liker isje d";
        console.log("nei");
    }
})