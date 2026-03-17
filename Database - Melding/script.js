// Setter opp en Express-app
const express = require('express');
const app = express();

// Setter opp databasen
const Database = require('better-sqlite3');
const db = new Database('Melding.db');

// Serve statiske filer fra public-mappen
app.use(express.static('public'));

// Legg til body-parsing for skjema/JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rute som legger til en melding (klienten sender tid i format YYYY-MM-DD HH:MM:SS)
app.post('/leggMelding', (req, res) => {    
    try {
        let { person, melding, tid } = req.body;
        person = person.toString().trim();
        melding = melding.toString().trim();
        tid = tid.toString().trim();

        console.log('Mottatt melding:', { person, melding, tid });

        db.prepare('INSERT INTO melding (person, melding, tid) VALUES (?, ?, ?)')
        .run(person, melding, tid);

        return res.sendStatus(201); // viktig: avslutt responsen her
    }
    catch (err) {
        console.error('Feil ved innsending av melding:', err);
        return res.status(500).json({ error: 'Kunne ikke lagre melding' });
    }
});

// Eksempel på en rute
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Eksempel på en rute
app.get('/hentMeldinger', (req, res) => {
    const row = db.prepare('SELECT * FROM Melding').all();
    res.json(row);
});

// Åpner en viss port på serveren, og nå kjører den
app.listen(3000, () => {
    console.log('Server kjører på http://localhost:3000');
});