let stad1 = document.getElementById("stad1");
let stad2 = document.getElementById("stad2");
let button = document.getElementById("knapp");

button.addEventListener("click", () => {
    let stad1lengde = stad1.value.length;
    let stad2lengde = stad2.value.length;

    let differanse = Math.abs(stad1lengde-stad2lengde);

document.getElementById("hoved").innerText = `
    Stednavn1: ${stad1.value}, med lengde ${stad1lengde}, og
    stednavn 2: ${stad2.value}, med lengde ${stad2lengde} og har
    ein differanse på ${differanse} antall teikn.

`
})

