const guest = ["Franco", "Mario", "Pina"];

userName = prompt("inserisci il tuo nome");
for (i = 0; i < guest.length; i ++) {
    if (userName === guest[i]) {
        alert("puoi entrare"); 
        break;
    } else {
        alert("non puoi entrare"); 
        break
    } 
}