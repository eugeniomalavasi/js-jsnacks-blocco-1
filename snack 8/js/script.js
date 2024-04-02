const userInput = parseInt(prompt("inserisci un numero da 1111 a 9999"));
console.log(userInput);

if (userInput < 1111 || userInput > 9999) {
    alert("numero inserito incorretto")
} else {
    for (i = 0; i < userInput.lenght; i++) {
        const numb = userInput[i]; 
        console.log(numb);
}
}

