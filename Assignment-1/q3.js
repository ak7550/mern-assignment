const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const processInput = str => {
    const num = str.split(" ").map(x => parseInt(x.trim()));
    console.log(`GCD is: ${getGCD(num[0], num[1])}`);
    readline.close();
}

const getGCD = (a, b) => (a % b == 0) ? b : getGCD(b, a % b);


readline.question(`Enter the value of a and b: `, str => processInput(str));
