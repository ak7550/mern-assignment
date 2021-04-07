const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question("Enter the number: ", num => processData(parseInt(num)));

const processData = num => {
    let row = 1;
    while (row <= num) {
        let col = 0;
        while (col++ < row)
            process.stdout.write("* ");
        console.log();
        row++;
    }
    readline.close();
}

