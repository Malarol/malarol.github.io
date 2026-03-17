let skjema = document.getElementById("skjema");

skjema.addEventListener("submit", submitskjema);

function submitskjema(event) {
    event.preventDefault();
    let navn = document.getElementById("name").value;
    let alder = document.getElementById("alder").value;
    let klasse = document.getElementById("klasse").value;
    let favorittfag = document.getElementById("favorittfag").value;

    console.log(navn + alder + klasse + favorittfag)
}