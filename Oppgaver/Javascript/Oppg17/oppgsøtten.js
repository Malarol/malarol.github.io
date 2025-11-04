let bildeliste = ["bilde1.jpg", "bilde2.jpg", "bilde3.jpg"];
let knapPluss = document.getElementById("knapppluss");
let knappMinus = document.getElementById("knappminus")
let i = 0

function venstre() {
    if (i < bildeliste.length - 1){
        i += 1;
        document.getElementById("bilde").src = bildeliste[i]; 
    }
    else {
        i = 0;
        document.getElementById("bilde").src = bildeliste[i]; 
    }

}

function høyre() {
    if (i > 0){
        i -= 1;
        document.getElementById("bilde").src = bildeliste[i]; 
    }
    else {
        i = bildeliste.length-1;
        document.getElementById("bilde").src = bildeliste[i]; 
    }

}


knapPluss.addEventListener("click", () => {
    venstre();
})

knappMinus.addEventListener("click", () => {
    høyre();
})

document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        venstre();
      }
      if (event.key === "ArrowRight") {
        høyre();
      }
})