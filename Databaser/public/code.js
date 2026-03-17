async function get_data() {
    const respone = await fetch("http://localhost:3000/api/fjell_info");
    const data = await respone.json();
    return data;
}

const body = document.querySelector("body");

async function dom() {
    const data = await get_data();

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        let navn = element.fjellnavn;
        let hoyde = element.hoyde;
        let beskrivelse = element.beskrivelse;
        let foto = element.foto;

        let div = document.createElement("div");
        body.appendChild(div);

        let htmlnavn = document.createElement("h3");
        htmlnavn.innerText = navn;

        let htmlhoyde = document.createElement("p");
        htmlhoyde.innerText = hoyde;

        let htmlbeskrivelse = document.createElement("p")
        htmlbeskrivelse.innerText = beskrivelse

        let img = document.createElement("img");
        img.src = "Bilder/" + foto;

        div.appendChild(htmlnavn);
        div.appendChild(img);
        div.appendChild(htmlhoyde);
        div.appendChild(htmlbeskrivelse); 
    }
}

dom();