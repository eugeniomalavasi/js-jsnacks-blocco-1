const userNumb = parseInt(prompt("inserisci un numero"));

for (i = 0; i <= userNumb; i++) {
    const numbCube = i * i * i;
    console.log(i, numbCube);
}