async function chuckJoke() {
    let response = await fetch("https://api.chucknorris.io/jokes/random");
    let data = await response.json();
//   console.log(data.value)
    return data.value;   
}
//joke();

async function dadJoke() {
    let response = await fetch("https://icanhazdadjoke.com/");
    let data = await response.json();
    console.log(data);
}

dadJoke();

// button = document.getElementById("button");
// jokeout = document.getElementById("joke");

// button.addEventListener("click", async () => {
//     jokeout.innerText = ""
//     jokeout.innerText = await chuckJoke()
// })
