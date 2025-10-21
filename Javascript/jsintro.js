// Variabler

let antallLiv = 100;

let navn = "Mario";

let alder = 18;

const pi = Math.PI;

let arrayBilder = ["bilde1.jpg", "bilde2.jpg"];

//Skrive ut

console.log("Mitt navn er " + navn);
console.log("Pi = " + pi);
console.log(`Mitt navn er ${navn} og eg er ${alder} gammel!`);

console.table(arrayBilder);

console.warn(pi);

//alert("May include hints of peanuts")

console.log(arrayBilder[0]);

document.getElementById("utskrift").innerText = "Pi = " + pi;

let alderBruker = prompt("Hvor gammel er du");

document.getElementById("alder").innerText = "Du er " + alderBruker;

let aarstall = new Date().getFullYear();
console.log(aarstall);

if (alderBruker == 43) {
    alert("Du er 43")
} else {
    alert("Du er ikkje 43");
}

for (let index = 0; index < arrayBilder.length; index += 1) {
    console.log(arrayBilder[index]);
    
}

HelloWorld();

function HelloWorld(z) {
    if (z == "print")
        console.log("Hello World")
}

HelloWorld("print")

document.body.style.backgroundColor = "blue"
document.getElementById("utskrift").style.fontSize = "5rem"