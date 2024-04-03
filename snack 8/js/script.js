const userInput = prompt("inserisci un numero da 1111 a 9999");
console.log(userInput.length);


console.log(typeof userInput);
let sum = 0;
for (i = 0; i < userInput.length; i++) {
    
    console.log(typeof userInput);
    sum = sum + parseInt(userInput[i]);
}
console.log(sum, typeof sum);


