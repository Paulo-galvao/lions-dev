let i = 0;
console.log("Digite um número: ");
process.stdin.on('data', function(data) {
    let num1 = +data;
    console.log('Digite outro: ');
    process.stdin.on('data', function(data) {
        let num2 = +data;
        i = num1 + num2;
        console.log(i);
        process.exit();
    });
});