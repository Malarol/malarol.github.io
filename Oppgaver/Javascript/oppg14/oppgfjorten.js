let brukerinput = document.getElementById("in");
let riktigtall = Math.floor(Math.random() * 10) + 1;
let knapp = document.getElementById("bolin");
let giOppKnapp = document.getElementById("giopp");

knapp.addEventListener("click", () => {
    let gjett = Number(brukerinput.value);

    if (gjett > riktigtall) {
        document.getElementById("output").innerText = "Det riktige tallet er lavere";
    } else if (gjett < riktigtall) {
        document.getElementById("output").innerText = "Det riktige tallet er høyere";
    } else {
        document.getElementById("output").innerText = "Du gjettet riktig!";
    }
});

giOppKnapp.addEventListener("click", () => {
    document.getElementById("output").innerText = `Det riktige tallet var ${riktigtall}`;
});