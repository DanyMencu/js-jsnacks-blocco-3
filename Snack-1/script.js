//*Snack 1
//*1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
//- Codice giocatore
//- Nome
//- Cognome
//- Età
//- Media punti fatti per partita
//- Percentuale di successo per tiri da 3 punti
//*2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
//- il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
//- la media punti fatti per partita deve essere compresa tra 0 e 50
//- la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
//*3. Stampare Nome, cognome, età e codice giocatore.
//*4. Creare un array di 10 giocatori di basket, con le regole sopra indicate
//*5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%.
const letters = 'ABCDEFGHILMNOPQRSUTVZ';
const numbers = '0123456789';


//*1.
const playerCard = [
    {
        idNumber: makeId(6),
        fistName: 'Mario',
        lastName: 'Rossi',
        age: randomNum (18, 50),
        pointsPerMatch: randomNum (0, 50),
        rateShotX3: randomNum (0, 100),
    },
    {
        idNumber: makeId(6),
        fistName: 'Luca',
        lastName: 'Mozzarella',
        age: randomNum (18, 50),
        pointsPerMatch: randomNum (0, 50),
        rateShotX3: randomNum (0, 100),
    },
    {
        idNumber: makeId(6),
        fistName: 'Franco',
        lastName: 'Battiato',
        age: randomNum (18, 50),
        pointsPerMatch: randomNum (0, 50),
        rateShotX3: randomNum (0, 100),
    },
    {
        idNumber: makeId(6),
        fistName: 'Paolo',
        lastName: 'Duzioni',
        age: 28,
        pointsPerMatch: randomNum (0, 50),
        rateShotX3: randomNum (0, 100),
    },
    {
        idNumber: makeId(6),
        fistName: 'Mattia',
        lastName: 'Viola',
        age: randomNum (18, 50),
        pointsPerMatch: randomNum (0, 50),
        rateShotX3: randomNum (0, 100),
    },
    {
        idNumber: makeId(6),
        fistName: 'Tony',
        lastName: 'Rosa',
        age: randomNum (18, 50),
        pointsPerMatch: randomNum (0, 50),
        rateShotX3: randomNum (0, 100),
    },
    {
        idNumber: makeId(6),
        fistName: 'Pietro',
        lastName: 'Neri',
        age: randomNum (18, 50),
        pointsPerMatch: randomNum (0, 50),
        rateShotX3: randomNum (0, 100),
    },
    {
        idNumber: makeId(6),
        fistName: 'James',
        lastName: 'Blu',
        age: randomNum (18, 50),
        pointsPerMatch: randomNum (0, 50),
        rateShotX3: randomNum (0, 100),
    },
    {
        idNumber: makeId(6),
        fistName: 'Lucia',
        lastName: 'Verdi',
        age: randomNum (18, 50),
        pointsPerMatch: randomNum (0, 50),
        rateShotX3: randomNum (0, 100),
    },
    {
        idNumber: makeId(6),
        fistName: 'Umberto',
        lastName: 'Bianchi',
        age: randomNum (18, 50),
        pointsPerMatch: randomNum (0, 50),
        rateShotX3: randomNum (0, 100),
    },
]
console.table(playerCard);




/***********************************************************
**FUNCTION**************************************************
************************************************************/

//Random resoult
function makeId(length) {
    let resoult = '';

    const letters = 'ABCDEFGHILMNOPQRSUTVZ';
    const numbers = '0123456789';

    for (let i=0; i < length/2; i++) {
        resoult += letters.charAt(Math. floor(Math. random() * letters. length));
        resoult += numbers.charAt(Math. floor(Math. random() * numbers. length));
    }

    return resoult;
};

//Random number generator
function randomNum (min, max) {
    return ( Math.floor( Math.random()* (max - min ) + min ) );
}
