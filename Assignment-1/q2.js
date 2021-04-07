const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const getInterest = (amt, rate, time) => (amt * rate * time) / 100;
const processInput = str => {
    const num = str.split(" ").map(x => parseInt(x.trim()));
    const amount = num[0], rate = num[1], time = num[2];
    console.log(`Simple interest is: ${getInterest(amount, rate, time)}`);
    readline.close();
}

readline.question(`Enter the Amount, rate of Interest and time: `, str => processInput(str));



