const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question("Enter the maximum limit: ", num => processData(parseInt(num)));

const processData = num => {
    let start = 2, distnace = 0;
    while (start<=num) {
        process.stdout.write(start + " ");
        distnace += 4;
        start += distnace;
    }
    readline.close();
}
