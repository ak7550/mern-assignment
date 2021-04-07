const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question("Enter the number: ", num => processData(parseInt(num)));
const processData = num => {
    let row = 0, arr = [];
    arr.push(1);
    while (row <= num) {
        arr.forEach(x => process.stdout.write(x + " "));
        // arr.push(0);
        arr.unshift(0);
        let i = 0;
        while (i < arr.length - 1) {
            arr[i] = arr[i] + arr[i + 1];
            i++;
        } 
        row++;
        console.log();
    }
    readline.close();
}
