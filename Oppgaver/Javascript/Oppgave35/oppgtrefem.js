let brukerMinutt = document.getElementById("minutt");
let button = document.getElementById("button");

button.addEventListener("click", () => {
    let timer = Math.floor(brukerMinutt.value/60);
    let minutt = brukerMinutt.value % 60;
    
    document.getElementById("hoved").innerText = `
    Du har sett på serier og filmer i ${brukerMinutt.value} minutter,
    det tilsvarer ${timer} timer og ${minutt} minutter.`

})