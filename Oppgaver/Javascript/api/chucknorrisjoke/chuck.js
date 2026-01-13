async function chuckJoke() {
    let response = await fetch("https://api.chucknorris.io/jokes/random");
    let data = await response.json();
//   console.log(data.value)
    return data.value;   
}
//joke();


button = document.getElementById("button");
jokeout = document.getElementById("joke");

button.addEventListener("click", async () => {
    jokeout.innerText = ""
    jokeout.innerText = await chuckJoke()
})
