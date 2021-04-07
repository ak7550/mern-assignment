const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question("Enter the number: ", num => processData(parseInt(num)));
const processData = num => {
    let row = num;
    while (row >= 0) {
        let colM = num;
        while (colM >= -num) {
            process.stdout.write(colM < row && colM > -row ? "  " : "* ");
            colM--;
        }
        console.log();
        row--;
    }
    row = 0;
    while (row <= num) {
        let colM = num;
        if (row != 0) {
            while (colM >= -num) {
                process.stdout.write(colM < row && colM > -row ? "  " : "* ");
                colM--;
            }
            console.log();
        }
        row++;
    }
    
    readline.close();
}