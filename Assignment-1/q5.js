const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question("Enter the number: ", num => processData(parseInt(num)));

const processData = num => {
    console.log(`${num} contains ${num.toString().length} digits in it.`);
    readline.close();
}

