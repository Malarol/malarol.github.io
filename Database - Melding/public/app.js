const utskrift = document.getElementById('utskrift');
const skjema = document.getElementById('skjema');
const navnEl = document.getElementById('navn');
const meldingEl = document.getElementById('melding');

async function skrivUtMeldinger() {
    const response = await fetch('/hentMeldinger');
    const meldinger = await response.json();
    utskrift.innerHTML = '';
    for (let melding of meldinger) {
        const div = document.createElement('div');
        div.innerHTML = "[" + melding.tid + "]<br> " + melding.person + ": " + melding.melding;
        utskrift.appendChild(div);
    }
}

skrivUtMeldinger();

skjema.addEventListener('submit', sendMelding);

async function sendMelding(e) {
    // SPA - single page application = forhindre full sideoppdatering
    e.preventDefault();

    const person = navnEl.value.trim();
    const melding = meldingEl.value.trim(); 
    let tid = new Date().toISOString().replace('T', ' ').substring(0, 19); // NB: To-do: Bør oppdateres til riktig lokal tid
    // console.log("tid = " + tid);

    const res = await fetch('/leggMelding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ person, melding, tid })
    });

    skrivUtMeldinger();
    meldingEl.value = '';
}