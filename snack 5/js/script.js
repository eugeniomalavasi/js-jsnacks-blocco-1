const oddElments = [];
for (i = 0; i < 69
    ; i++) {
    userNumber = parseInt(prompt("inserisci un numero"))
    if (userNumber % 2 !== 0) {
        oddElments.push(userNumber);
    }
}
console.log(`i numeri dispari inseriti sono ${oddElments}`);