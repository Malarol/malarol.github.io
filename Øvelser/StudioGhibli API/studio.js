let body = document.querySelector("body");

async function hent_data() {
    let response = await fetch("https://ghibliapi.vercel.app/films/");
    let data = await response.json();

    for (let i = 0; i < data.length; i++) {
        let element = await data[i];
        let tittel = await element.title;
        let bilde = await element.image;

        let div = document.createElement("div");
        body.appendChild(div);

        let imghtml = document.createElement("img");
        imghtml.src = bilde;
        div.appendChild(imghtml);

        let tittelhtml = document.createElement("h4");
        tittelhtml.innerText = tittel;
        div.appendChild(tittelhtml);

    }
}

hent_data()