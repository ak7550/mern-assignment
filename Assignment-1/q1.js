const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`What's the credit of the campus leader ? `, credit => {
    if (credit < 4500) console.log("Rising Star");
    if (credit <= 4500 && credit < 6000) console.log("Mega leader");
    if (credit <= 6000 && credit < 7500) console.log("Gega leader");
    if (credit <= 7500) console.log("Tera leader");
    readline.close();
});