let total = 0;

for (let i = 0; i < 10; i++) {
    const userNumb = parseInt(prompt(`inserisci un un numero ancora ${10 - i} volte`));
    total = userNumb + total;
}
console.log(total);
