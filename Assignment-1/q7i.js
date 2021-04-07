const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question("Enter the number: ", num => processData(parseInt(num)));
const processData = num => {
    const arr = new Array(num - 1), big=[];
    let row = 0;
    while (row < num) {
        const ar = [];
        arr.fill(num - row, row);
        arr.forEach(x => {
            process.stdout.write(x + " ")
            ar.push(x);
        });
        process.stdout.write(num - row + " ");
        ar.push(num - row);
        arr.reverse().forEach(x => {
            process.stdout.write(x + " ")
            ar.push(x);
        });
        arr.reverse();
        row++;
        console.log();
        big.push(ar);
    }
    // big.forEach(x => console.log(x));
    big.pop();
    while (big.length!=0) {
        const arr = big.pop();
        arr.forEach(x => process.stdout.write(x + " "));
        console.log();
    }

    readline.close();
}