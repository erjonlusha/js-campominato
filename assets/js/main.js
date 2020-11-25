/*Descrizione
//Il computer deve generare 16 numeri casuali tra 1 e 100.
//I numeri non possono essere duplicati
//In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//L’utente non può inserire più volte lo stesso numero.
//Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

//BONUS: (da fare solo se funziona tutto il resto)
//all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
//con difficoltà 0 => tra 1 e 100
//con difficoltà 1 =>  tra 1 e 80
//con difficoltà 2 => tra 1 e 50


/**************************     FUNZIONI    ************************/

//Random
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso 
}


// Controllo inArray se è presente il numero
function inArray(array, number){
  var i = 0;
  while (i < array.length){
    if (number === array[i]) {
      return true;
    }
    i++;
  }
}
/**************************     FUNZIONI    ************************/
  //*************Il computer deve generare 16 numeri casuali tra 1 e 100.**********************/
var numeriCpuGiocati = [];

while (numeriCpuGiocati.length !==16) {
  var numCpuRandom = getRandom(1, 100);
  if(! inArray(numeriCpuGiocati, numCpuRandom)) {
    numeriCpuGiocati.push(numCpuRandom);
  }
}
console.log(numeriCpuGiocati, numeriCpuGiocati.length); 



//**********************  In seguito deve chiedere all'utente 100-16 **************************/
var difficulty = Number(prompt("Seleziona la difficolta inserendo 0 = facile, 1 = medio, 2 = difficile"));
switch (difficulty) {
  case 0:
    var selectedDifficulty = 100;
    break;
  case 1:
    var selectedDifficulty = 80;
    break;
  case 2:
    var selectedDifficulty = 50;
    break;
  default:
    console.log("Spiacenti, il valore inserito " + difficulty + " non è valido.");
  var difficulty = Number(prompt("Seleziona la difficolta inserendo 0 = facile, 1 = medio, 2 = difficile"));
}
//console.log(difficulty, selectedDifficulty0);

var possibility = selectedDifficulty - 16, numeriUtente = [], userWin=0; 
for (var i = 0; i < 16; i++) {
    var numUserRandom = Number(prompt("Inserisci un numero da 1 a 100"));
    if (inArray(numeriCpuGiocati, numUserRandom)) {
        console.log("Hai perso!");
        break;
    }
    while (inArray(numeriUtente, numUserRandom)) {
        alert("Il numero è stato già inserito")
        var numUserRandom = Number(prompt("Inserisci un numero da 1 a 100"));

    }
    numeriUtente.push(numUserRandom);
}
console.log(numeriUtente);
console.log("Hai totalizzato " + numeriUtente.length + " punti");

if (userWin == possibility){
  console.log("Hai vinto!");
}