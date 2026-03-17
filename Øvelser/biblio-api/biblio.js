async function bibliotek(userinput) {
    let response = await fetch("https://restcountries.com/v3.1/name/"+userinput);
    let data = await response.json()
    return {
    navn: data[0].name.official,
    capital: data[0].capital[0],
    population: data[0].population,
    region: data[0].region,
    png: data[0].flags.png
    };

}

let button = document.getElementById("button");
let output = document.getElementById("output");
let userinput = document.getElementById("country")
let bilde = document.getElementById("bilde")

button.addEventListener("click", async function() {;
        output.innerText = "Laster...";

        let land = await bibliotek(userinput.value);

        output.innerText = "loading.."
        output.innerText =
            "Official name: " + land.navn + "\n" +
            "Capital: " + land.capital + "\n" +
            "Population: " + land.population.toLocaleString("nb-NO") + "\n" +
            "Region: " + land.region;

        bilde.src = ""
        bilde.src = land.png;


})


