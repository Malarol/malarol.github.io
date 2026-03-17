let knapper = document.getElementById("knapper");

async function hentdata() {
    let response = await fetch("https://www.anapioficeandfire.com/api/books");
    data = await response.json();

    for (let i = 0; i < data.length; i++) {
        let element = await data[i].name;

        let button = document.createElement("button");
        let output = document.getElementById("output");
        knapper.appendChild(button);
        button.id = element;


        button.innerText = element;

        button.addEventListener("click", async function() {
            output.innerHTML = "";
            let name = await data[i].name;
            let aarstall = await data[i].released;
            let aarstallsort = aarstall.slice(0, 4);
            let sider = await data[i].numberOfPages;
            let p = document.createElement("p");
            output.appendChild(p);

            p.innerText = "navn: " + name + ", aarstall: " + aarstallsort + ", sider: " + sider;       
        })
    
    }

}
hentdata();










// let boktitler = [];
// function titler() {
//     for (let )
// }

