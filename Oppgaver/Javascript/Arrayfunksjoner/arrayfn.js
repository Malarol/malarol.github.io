
// ORDBOK DATASETT
// Dette datasettet inneholder noen ord med ulike bruksområder (ordklasser), og definisjoner

const ordbok = [
    {
        ord: "tre",
        ordklasser: [
            {
                type: "substantiv",
                definisjon: "en stor plante med stamme og greiner",
                eksempel: "De klatret opp i et høyt tre."
            },
            {
                type: "tallord",
                definisjon: "tallet som kommer etter to og før fire",
                eksempel: "Jeg har tre søstre."
            },
            {
                type: "verb",
                definisjon: "å føre noe gjennom en åpning, eller å sette foten ned",
                eksempel: "Du må tre tråden gjennom nåløyet."
            }
        ],
        popularitet: 98,
        antallBokstaver: 3
    },
    {
        ord: "rett",
        ordklasser: [
            {
                type: "adjektiv",
                definisjon: "som ikke er bøyd, som går den korteste veien",
                eksempel: "Du må tegne en rett linje."
            },
            {
                type: "substantiv",
                definisjon: "en tilberedt porsjon mat",
                eksempel: "Vi fikk servert en deilig rett til middag."
            },
            {
                type: "substantiv",
                definisjon: "lov og domstol, eller det man har krav på",
                eksempel: "Saken skal opp i retten neste uke."
            }
        ],
        popularitet: 92,
        antallBokstaver: 4
    },
    {
        ord: "sky",
        ordklasser: [
            {
                type: "substantiv",
                definisjon: "synlig masse av vanndamp som svever i luften",
                eksempel: "Det var ikke en eneste sky på himmelen."
            },
            {
                type: "adjektiv",
                definisjon: "engstelig, reservert eller redd for mennesker",
                eksempel: "Katten var veldig sky og gjemte seg under sofaen."
            },
            {
                type: "verb",
                definisjon: "å unngå noe eller noen bevisst",
                eksempel: "Han pleier å sky unna vanskelige oppgaver."
            }
        ],
        popularitet: 75,
        antallBokstaver: 3
    },
    {
        ord: "fast",
        ordklasser: [
            {
                type: "adjektiv",
                definisjon: "ikke løs, solid, stabil",
                eksempel: "Bordet står fast på gulvet."
            },
            {
                type: "adjektiv",
                definisjon: "regelmessig, permanent",
                eksempel: "Han har fast jobb."
            }
        ],
        popularitet: 72,
        antallBokstaver: 4
    },
    {
        ord: "løpe",
        ordklasser: [
            {
                type: "verb",
                definisjon: "å bevege seg raskt ved å sette det ene beinet foran det andre i rask rekkefølge",
                eksempel: "Han må løpe for å rekke bussen."
            }
        ],
        popularitet: 95,
        antallBokstaver: 4
    }
];

// Skriv ut det opprinnelige datasettet
console.log("=== ORDBOK DATASETT ===");
console.table(ordbok);

console.log("\n=== OPPGAVER ===");
console.log("Løs oppgavene under ved å bruke array-funksjoner som filter, find, map, reduce, some, every og sort.\n");

// =====================================
// OPPGAVE 1: filter
// =====================================
// Filtrer ut alle ord som har 3 eller flere ordklasser
console.log("--- OPPGAVE 1 ---");
console.log("Oppgave: Filtrer ut alle ord som har 3 eller flere ordklasser");
// Skriv koden din her:

// console.log(ordbok);

let treKlasser = ordbok.filter(element => element.ordklasser.length >= 3);
console.log(treKlasser);
    



// =====================================
// OPPGAVE 2: find
// =====================================
// Finn det første ordet som har en popularitet over 85
console.log("\n--- OPPGAVE 2 ---");
console.log("Oppgave: Finn det første ordet som har en popularitet over 85");
// Skriv koden din her:
popåttifem = ordbok.find(element => element.popularitet > 85);
console.log(popåttifem);

// =====================================
// OPPGAVE 3: map
// =====================================
// Lag et nytt array som inneholder bare ordene (strengene) fra ordbok-arrayet
console.log("\n--- OPPGAVE 3 ---");
console.log("Oppgave: Lag et nytt array med bare ordene");
// Skriv koden din her:
let string = ordbok.map(element => element.ord);
console.log(string)



// =====================================
// OPPGAVE 4: map (avansert)
// =====================================
// Lag et nytt array med objekter som inneholder ord og antall ordklasser
// Formatet skal være: { ord: "løpe", antallOrdklasser: 2 }
console.log("\n--- OPPGAVE 4 ---");
console.log("Oppgave: Lag array med ord og antall ordklasser");
// Skriv koden din her

console.log(ordbok);
for (let i = 0; i<ordbok.length; i++){
    let element = ordbok[i];
    let string = element.ord;
    let klasser = element.ordklasser.length;
    console.log("ord: " + string + ", ordklasser: " + klasser);
}



// =====================================
// OPPGAVE 5: reduce
// =====================================
// Beregn totalt antall ordklasser for alle ord til sammen

console.log("\n--- OPPGAVE 5 ---");
console.log("Oppgave: Beregn totalt antall ordklasser");
let antall = 0;
// Skriv koden din her:
for (let i = 0; i<ordbok.length; i++) {
    let element = ordbok[i].ordklasser.length;
    antall = antall + element;
}
console.log(antall);




// =====================================
// OPPGAVE 6: reduce (avansert)
// =====================================
// Beregn gjennomsnittlig popularitet for alle ord
console.log("\n--- OPPGAVE 6 ---");
console.log("Oppgave: Beregn gjennomsnittlig popularitet");
// Skriv koden din her:
let populer = 0;
let antl = 0;
for (let i = 0; i<ordbok.length; i = i + 1) {
    let element = ordbok[i].popularitet;
    populer = populer + element;
    antl += 1;
}
console.log(populer/antl);

    

// =====================================
// OPPGAVE 7: some
// =====================================
// Sjekk om minst ett ord kan brukes som verb
console.log("\n--- OPPGAVE 7 ---");
console.log("Oppgave: Sjekk om minst ett ord kan brukes som verb");
// Skriv koden din her:
let ordverb = [];
for (let i = 0; i < ordbok.length; i++) {
    for (let j = 0; j < ordbok[i].ordklasser.length; j++){
        let element = ordbok[i].ordklasser[j];
        if (element.type === "verb") {
            ordverb.push(ordbok[i].ord);
        }
    }
}
console.log(ordverb);

// =====================================
// OPPGAVE 8: every
// =====================================
// Sjekk om alle ord har minst 2 ordklasser
console.log("\n--- OPPGAVE 8 ---");
console.log("Oppgave: Sjekk om alle ord har minst 2 ordklasser");
// Skriv koden din her:
let merenntoordklasser = [];
for (let i = 0; i < ordbok.length; i++) {
    let element = ordbok[i].ordklasser; 
    if (element.length >= 2) {
        merenntoordklasser.push(ordbok[i].ord);
    }
}
console.log(merenntoordklasser);

// =====================================
// OPPGAVE 9: sort
// =====================================
// Sorter ordene etter popularitet (høyest først)
console.log("\n--- OPPGAVE 9 ---");
console.log("Oppgave: Sorter etter popularitet (høyest først)");
// Skriv koden din her:
let sortert = [...ordbok];

sortert.sort((a, b) => b.popularitet - a.popularitet);
sortertfullstendig = []
for (let i = 0; i < sortert.length; i++) {
    let stringelement = sortert[i].ord;
    let element = sortert[i].popularitet;
    let string = "ord: " + stringelement + " , popularitet: " + element.toString();
    sortertfullstendig.push(string);
}
console.log(sortertfullstendig);

// =====================================
// OPPGAVE 10: Kombinasjon (filter + map)
// =====================================
// Filtrer ut ord som kan brukes som adjektiv, og lag et array med bare ordene
console.log("\n--- OPPGAVE 10 ---");
console.log("Oppgave: Finn ord som kan brukes som adjektiv");
// Skriv koden din her:

let ordadjektiv = [];
for (let i = 0; i < ordbok.length; i++) {
    for (let j = 0; j < ordbok[i].ordklasser.length; j++){

        let element = ordbok[i].ordklasser[j];

        if (element.type === "adjektiv" && !ordadjektiv.includes(ordbok[i].ord)) {
            ordadjektiv.push(ordbok[i].ord);
        }
    }
}
console.log(ordadjektiv);

// =====================================
// OPPGAVE 11: Kombinasjon (filter + reduce)
// =====================================
// Finn totalt antall bokstaver i alle ord som har popularitet over 80
console.log("\n--- OPPGAVE 11 ---");
console.log("Oppgave: Tell bokstaver i populære ord (>80)");
// Skriv koden din her:
let over80 = []
for (let i = 0; i < ordbok.length; i++) {
    let populer = ordbok[i].popularitet;
    let ord = ordbok[i].ord;
    if (populer >= 80) {
        over80.push(ord);
    }
}

let fullstring = ""
for (let i = 0; i < over80.length; i++) {
    let element = over80[i];
    fullstring += element.toString();

}
console.log(fullstring);
splitarray = fullstring.split('');
console.log(splitarray);
console.log(splitarray.length)
// }
// let splittaarray = []
// for (let i = 0; i < over80; i++) {

// }


// =====================================
// OPPGAVE 12: Avansert (flatMap eller map + flat)
// =====================================
// Lag et array med alle definisjoner fra alle ord
// Tips: Du må kanskje bruke map og flat, eller flatMap
console.log("\n--- OPPGAVE 12 ---");
console.log("Oppgave: Lag array med alle definisjoner");
// Skriv koden din her:

let defarray = [];

for (let i = 0; i < ordbok.length; i++) {
  for (let j = 0; j < ordbok[i].ordklasser.length; j++) {
    let definisjon = ordbok[i].ordklasser[j].definisjon;
    defarray.push(definisjon);
  }
}

console.log(defarray);

// ==============================
// NYTT DATASETT: FILM-ARKIV
// ==============================
// Datasettet inneholder filmer med sjangre, roller, rating osv.

const filmArkiv = [
  {
    tittel: "Nordlys",
    aar: 2021,
    lengdeMin: 112,
    rating: 8.3,
    sjangre: ["drama", "mysterium"],
    roller: [
      { navn: "Amina", rolle: "hovedrolle" },
      { navn: "Jonas", rolle: "biperson" }
    ],
    priser: ["beste foto"],
    tilgjengelig: true
  },
  {
    tittel: "Stålbyen",
    aar: 2018,
    lengdeMin: 129,
    rating: 7.6,
    sjangre: ["action", "thriller"],
    roller: [
      { navn: "Mikael", rolle: "hovedrolle" },
      { navn: "Sara", rolle: "antagonist" }
    ],
    priser: [],
    tilgjengelig: false
  },
  {
    tittel: "Kald Kaffe",
    aar: 2023,
    lengdeMin: 94,
    rating: 6.9,
    sjangre: ["komedie"],
    roller: [
      { navn: "Emma", rolle: "hovedrolle" },
      { navn: "Noah", rolle: "biperson" },
      { navn: "Lea", rolle: "cameo" }
    ],
    priser: ["publikumspris"],
    tilgjengelig: true
  },
  {
    tittel: "Bølgelengde",
    aar: 2015,
    lengdeMin: 101,
    rating: 8.0,
    sjangre: ["sci-fi", "drama"],
    roller: [
      { navn: "Amina", rolle: "biperson" },
      { navn: "Henrik", rolle: "hovedrolle" }
    ],
    priser: ["beste manus", "beste musikk"],
    tilgjengelig: true
  },
  {
    tittel: "Taus Skog",
    aar: 2019,
    lengdeMin: 140,
    rating: 7.2,
    sjangre: ["skrekk", "mysterium"],
    roller: [
      { navn: "Sara", rolle: "hovedrolle" },
      { navn: "Jonas", rolle: "biperson" }
    ],
    priser: ["beste lyd"],
    tilgjengelig: false
  }
];

// Skriv ut datasettet
console.log("=== FILM-ARKIV ===");
console.table(filmArkiv);

console.log("\n=== OPPGAVER ===");
console.log("Løs oppgavene med array-funksjoner: filter, find, map, reduce, some, every, sort, flatMap.\n");

// =====================================
// OPPGAVE 1: filter
// =====================================
// Filtrer ut alle filmer med rating 8.0 eller høyere
console.log("--- OPPGAVE 1 ---");
console.log("Oppgave: Filtrer ut filmer med rating >= 8.0");
// Skriv koden din her:
let høgereenn8 = [];
for (let i = 0; i < filmArkiv.length; i++) {
    let element = filmArkiv[i];
    if (element.rating >= 8) {
        høgereenn8.push(element.tittel);
    }
}
console.log(høgereenn8);

// =====================================
// OPPGAVE 2: find
// =====================================
// Finn den første filmen som er kortere enn 100 minutter
console.log("\n--- OPPGAVE 2 ---");
console.log("Oppgave: Finn første film med lengdeMin < 100");
// Skriv koden din her:


for (let i = 0; i < filmArkiv.length; i++) {
    let element = filmArkiv[i];
    if (element.lengdeMin < 100) {
        console.log(element.tittel);
        break
    }
}


// =====================================
// OPPGAVE 3: map
// =====================================
// Lag et nytt array med bare titlene
console.log("\n--- OPPGAVE 3 ---");
console.log("Oppgave: Lag et array med bare titlene");
// Skriv koden din her:
let filmer = [];
for (let i = 0; i < filmArkiv.length; i++) {
    let element = filmArkiv[i];
    filmer.push(element.tittel);
}
console.log(filmer);

// =====================================
// OPPGAVE 4: map (avansert)
// =====================================
// Lag et nytt array med objekter: { tittel: "...", antallSjangre: X }
console.log("\n--- OPPGAVE 4 ---");
console.log("Oppgave: Lag array med tittel og antall sjangre");
// Skriv koden din her
for (let i = 0; i < filmArkiv.length; i++) {
    let element = filmArkiv[i];
    console.log("Tittel: " + element.tittel + " antallSjangre: " + element.sjangre.length);
}

// =====================================
// OPPGAVE 5: reduce
// =====================================
// Finn total spilletid (sum av lengdeMin) for alle filmer
console.log("\n--- OPPGAVE 5 ---");
console.log("Oppgave: Finn total spilletid (sum lengdeMin)");
// Skriv koden din her:
let sum = 0;
for (let i = 0; i < filmArkiv.length; i++) {
    let element = filmArkiv[i];
    sum = sum + element.lengdeMin;
}
console.log(sum);

// =====================================
// OPPGAVE 6: reduce (avansert)
// =====================================
// Finn gjennomsnittlig rating for alle filmer
console.log("\n--- OPPGAVE 6 ---");
console.log("Oppgave: Finn gjennomsnittlig rating");
// Skriv koden din her:
let ntl = 0;
let nysum = 0;

for (let i = 0; i < filmArkiv.length; i++) {
    let element = filmArkiv[i].rating;
    nysum += element;
    ntl += 1;
}
console.log(nysum/ntl);

// =====================================
// OPPGAVE 7: some
// =====================================
// Sjekk om minst én film har sjangeren "sci-fi"
console.log("\n--- OPPGAVE 7 ---");
console.log('Oppgave: Finn ut om minst én film er "sci-fi"');
// Skriv koden din her:

let scistring = "ingen sci fi";
for (let i = 0; i < filmArkiv.length; i++) {
    let element = filmArkiv[i].sjangre;
    if (element.includes("sci-fi")) {
        scistring = "Eksisterer sci fi";
    }
}
console.log(scistring);

// =====================================
// OPPGAVE 8: every
// =====================================
// Sjekk om alle filmer har minst 1 sjanger
console.log("\n--- OPPGAVE 8 ---");
console.log("Oppgave: Sjekk om alle filmer har minst 1 sjanger");
// Skriv koden din her:
let sjangrelean = "Alle filmer har minst 1 sjanger";
for (let i = 0; i < filmArkiv.length; i++) {
    let element = filmArkiv[i].sjangre.length;
    if (element < 1) {
        sjangrelean = "Alle filmer har ikkje minst 1 sjanger";
    }
}
console.log(sjangrelean);
// =====================================
// OPPGAVE 9: sort
// =====================================
// Sorter filmer etter år (nyeste først)
console.log("\n--- OPPGAVE 9 ---");
console.log("Oppgave: Sorter etter år (nyeste først)");
// Skriv koden din her:

// =====================================
// OPPGAVE 10: Kombinasjon (filter + map)
// =====================================
// Filtrer ut filmer som er tilgjengelige (tilgjengelig === true)
// og lag et array med bare titler
console.log("\n--- OPPGAVE 10 ---");
console.log("Oppgave: Finn titler på tilgjengelige filmer");
// Skriv koden din her:

for (let i = 0; i < filmArkiv.length; i++) {
    let element = filmArkiv[i];
    if (element.tilgjengelig === true) {
        console.log(element.tittel);
    }
}

// =====================================
// OPPGAVE 11: Kombinasjon (filter + reduce)
// =====================================
// Finn totalt antall priser for filmer med rating over 7.5
console.log("\n--- OPPGAVE 11 ---");
console.log("Oppgave: Tell totalt antall priser for filmer med rating > 7.5");
// Skriv koden din her:
let priser = 0
for (let i = 0; i < filmArkiv.length; i++) {
    let element = filmArkiv[i];
    if (element.rating >= 7.5) {
        priser += element.priser.length;
    }
}
console.log(priser);

// =====================================
// OPPGAVE 12: Avansert (flatMap)
// =====================================
// Lag et array med alle skuespillernavn (roller[].navn) uten duplikater
// Tips: flatMap + Set
console.log("\n--- OPPGAVE 12 ---");
console.log("Oppgave: Lag array med alle skuespillernavn uten duplikater");
// Skriv koden din her:
skuespillere = []
for (let i = 0; i < filmArkiv.length; i++) {
    for (let j = 0; j < filmArkiv[i].roller.length; j++) {
        let element = filmArkiv[i];
        let skuespllerelement = element.roller[j];
        if (!skuespillere.includes(skuespllerelement.navn)) {
            skuespillere.push(skuespllerelement.navn);
        }
    }
}
console.log(skuespillere);

let alfabetsortert = [];
for (let i = 0; i < filmArkiv.length; i++) {
    alfabetsortert.push(filmArkiv[i].tittel);
}

alfabetsortert.sort();
console.log(alfabetsortert);

// =========================================================================================
// ORDBOK: EKSEMPLER PÅ SORT
// =========================================================================================

console.log("\n=======================");
console.log("ORDBOK: SORT-EKSEMPLER");
console.log("=======================\n");

// 1) Alfabetisk sort (A–Å) på "ord"
{
  // Lag kopi først for å ikke endre originalen:
  const alfabetisk = copy(ordbok).sort((a, b) => compareTextASC(a.ord, b.ord));

  console.log("1) Alfabetisk A–Å (ord):");
  console.log(alfabetisk.map(x => x.ord));
}

// 2) Alfabetisk sort (Å–A) på "ord"
{
  const omvendt = copy(ordbok).sort((a, b) => compareTextDESC(a.ord, b.ord));

  console.log("\n2) Alfabetisk Å–A (ord):");
  console.log(omvendt.map(x => x.ord));
}

// 3) Sorter etter antall bokstaver (flest først). Ved likt: alfabetisk A–Å
{
  const etterLengde = copy(ordbok).sort((a, b) => {
    // Primærkriterium: antallBokstaver DESC
    const diff = compareNumberDESC(a.antallBokstaver, b.antallBokstaver);
    if (diff !== 0) return diff;

    // Tie-breaker: alfabetisk ASC
    return compareTextASC(a.ord, b.ord);
  });

  console.log("\n3) Flest bokstaver først, ved likt alfabetisk:");
  console.log(etterLengde.map(x => `${x.ord} (${x.antallBokstaver})`));
}

// 4) Sorter etter antall ordklasser (flest først). Ved likt: popularitet (høyest først)
{
  const etterKlasser = copy(ordbok).sort((a, b) => {
    const diffKlasser = compareNumberDESC(a.ordklasser.length, b.ordklasser.length);
    if (diffKlasser !== 0) return diffKlasser;

    // Tie-breaker: popularitet DESC
    return compareNumberDESC(a.popularitet, b.popularitet);
  });

  console.log("\n4) Flest ordklasser først, ved likt høyest popularitet:");
  console.log(etterKlasser.map(x => `${x.ord} (klasser=${x.ordklasser.length}, pop=${x.popularitet})`));
}

// 5) Custom: verb først, så resten. Innen gruppa: alfabetisk
{
  const verbFørst = copy(ordbok).sort((a, b) => {
    const aVerb = harVerb(a);
    const bVerb = harVerb(b);

    // Gruppér på boolean:
    // Hvis aVerb=true og bVerb=false => a før b => return -1
    if (aVerb !== bVerb) return aVerb ? -1 : 1;

    // Innen gruppa: alfabetisk
    return compareTextASC(a.ord, b.ord);
  });

  console.log("\n5) Verb først, deretter resten, alfabetisk innen gruppa:");
  console.log(verbFørst.map(x => `${x.ord} (verb=${harVerb(x)})`));
}

// 6) Popularitet ASC, men “under 80” alltid bakerst
{
  const popMedRegel = copy(ordbok).sort((a, b) => {
    // Først: “under 80” til slutt (som en gruppe)
    const aLav = a.popularitet < 80;
    const bLav = b.popularitet < 80;

    if (aLav !== bLav) return aLav ? 1 : -1; // aLav=true => a bakerst

    // Innen gruppa: popularitet ASC
    return compareNumberASC(a.popularitet, b.popularitet);
  });

  console.log("\n6) Popularitet lavest først, men <80 alltid bakerst:");
  console.log(popMedRegel.map(x => `${x.ord} (pop=${x.popularitet})`));
}


// =========================================================================================
// FILMARKIV: EKSEMPLER PÅ SORT
// =========================================================================================

console.log("\n========================");
console.log("FILMARKIV: SORT-EKSEMPLER");
console.log("========================\n");

// 7) Sorter etter år (nyeste først)
{
  const nyeste = copy(filmArkiv).sort((a, b) => compareNumberDESC(a.aar, b.aar));

  console.log("7) År nyeste først:");
  console.log(nyeste.map(f => `${f.aar} - ${f.tittel}`));
}

// 8) Sorter etter rating (høyest først). Ved likt: år (nyeste først)
{
  const ratingSåÅr = copy(filmArkiv).sort((a, b) => {
    const diffRating = compareNumberDESC(a.rating, b.rating);
    if (diffRating !== 0) return diffRating;

    return compareNumberDESC(a.aar, b.aar);
  });

  console.log("\n8) Rating høyest først, ved likt nyeste først:");
  console.log(ratingSåÅr.map(f => `${f.rating} (${f.aar}) - ${f.tittel}`));
}

// 9) Sorter etter antall roller (flest først)
{
  const flestRoller = copy(filmArkiv).sort((a, b) => compareNumberDESC(a.roller.length, b.roller.length));

  console.log("\n9) Flest roller først:");
  console.log(flestRoller.map(f => `${f.tittel} (roller=${f.roller.length})`));
}

// 10) Tilgjengelige først, så utilgjengelige. Innen gruppa: kortest først
{
  const tilgjengeligSåLengde = copy(filmArkiv).sort((a, b) => {
    // Gruppér på boolean:
    if (a.tilgjengelig !== b.tilgjengelig) return a.tilgjengelig ? -1 : 1;

    // Innen gruppa: lengdeMin ASC
    return compareNumberASC(a.lengdeMin, b.lengdeMin);
  });

  console.log("\n10) Tilgjengelige først, så utilgjengelige. Kortest først innen gruppa:");
  console.log(tilgjengeligSåLengde.map(f => `${f.tittel} (tilg=${f.tilgjengelig}, min=${f.lengdeMin})`));
}

// 11) Sorter etter antall priser (flest først). Ved likt: rating DESC. Ved likt: tittel ASC
{
  const priserSåRatingSåTittel = copy(filmArkiv).sort((a, b) => {
    const diffPriser = compareNumberDESC(a.priser.length, b.priser.length);
    if (diffPriser !== 0) return diffPriser;

    const diffRating = compareNumberDESC(a.rating, b.rating);
    if (diffRating !== 0) return diffRating;

    return compareTextASC(a.tittel, b.tittel);
  });

  console.log("\n11) Flest priser først, ved likt høyest rating, ved likt alfabetisk tittel:");
  console.log(priserSåRatingSåTittel.map(f => `${f.tittel} (priser=${f.priser.length}, rating=${f.rating})`));
}

// 12) Avansert: sorter etter antall unike skuespillere (flest først)
{
  const flestUnike = copy(filmArkiv).sort((a, b) => {
    return compareNumberDESC(unikeSkuespillereCount(a), unikeSkuespillereCount(b));
  });

  console.log("\n12) Flest unike skuespillere først:");
  console.log(flestUnike.map(f => `${f.tittel} (unike=${unikeSkuespillereCount(f)})`));
}



