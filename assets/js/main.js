/*Descrizione
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50
Consigli del giorno:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante 
Le validazioni e i controlli possiamo farli anche in un secondo momento.
Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve… */


/*function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso 
}*/

// removed = numeriGiocabili.splice(3, 1);

/**************************     FUNZIONI    ************************/

//Random
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso 
}

/**************************     FUNZIONI    ************************/

var numeriGiocabili = [1, 3, 4, 7, 8, 10];
  for (var i=0, num=1; i < 10; i++, num++) {
      var numeriGiocabili = numeriGiocabili.push(1);
  }

//*************Il computer deve generare 16 numeri casuali tra 1 e 100.********************/

var i=0, numeriCpuGiocati;
do {
    for (var j=0; j < 10; j++) {
      if (numeriCpuGiocati === numeriGiocabili[j]) {
       numeriCpuGiocati = getRandom(1, 10);
      }
    }
    console.log(numeriCpuGiocati);    
    // istruzione per interrompere cicli
    i++; 
} while (i < 6);