// INPUT
const firstWord = prompt("inserisci la prima parola")
const secondWord = prompt("inserisci la seconda parola")

// VARIABILI DI APPOGGIO
let long;
let short;

if (firstWord.length > secondWord.lenght) {
    long = firstWord;
    short = secondWord;
} else {
    long = secondWord;
    short = firstWord;
}

// OUTPUT
console.log(`la parola più corta è ${short}`);
console.log(`la parola più lunga è ${long}`);