async function joke() {
    let results = await fetch("https://official-joke-api.appspot.com/random_joke");
    let data = await results.json();
    return(data.setup + " " + data. punchline);
}

button = document.getElementById("button");
output = document.getElementById("output");

button.addEventListener("click", async function() {
    output.innerText = "laster..";
    output.innerText = await joke();
})


