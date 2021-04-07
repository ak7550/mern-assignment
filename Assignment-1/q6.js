const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question("Enter the number: ", num => processData(parseInt(num)));

const processData = num => {
    console.log(`Reverse of ${num} is: ${num.toString().split("").reverse().join("")}`);
    readline.close();
}

