INPUT
// creare due prompt
const first_nmb = parseInt(prompt("inserisci il primo numero"));
const second_nmb = parseInt(prompt("inserisci il secondo numero"));

if (first_nmb > second_nmb) {
    console.log("è più grande il primo");
} else if (first_nmb === second_nmb) {
    console.log("sono uguali");
} else {
    console.log("è più grande il secondo");
}

