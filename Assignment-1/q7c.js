const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question("Enter the number: ", num => processData(parseInt(num)));

const processData = num => {
    let row = 1;
    while (row <= num) {
        let col = num;
        while (col > row) {
            process.stdout.write("  ");
            col--;
        }
        col = 1;
        while (col <= row) {
            process.stdout.write(col + " ");
            col++;
        }
        col = row-1;
        while (col >= 1) {
            process.stdout.write(col + " ");
            col--;
        }
        console.log();
        row++;
    }
    readline.close();
}
