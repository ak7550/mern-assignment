const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question("Enter the number: ", num => processData(parseInt(num)));

const processData = num => {
    let row = 1;
    while (row <= 2 * num - 1) {
        let col = num;
        while (col > row / 2 + 1) {
            process.stdout.write("  ");
            col--;
        }
        col *= - 1;
        let count = 0;
        while (Math.abs(col) <= row) {
            process.stdout.write(Math.abs(col) + " ");
            col--;
            count++;
        }
        col = Math.abs(col)-2;
        while (count < row) {
            process.stdout.write(Math.abs(col) + " ");
            count++;
            col--;
        }
        
        row += 2;
        console.log();
    }

    readline.close();
}
// not solved
