/* 
    par ou ímpar
*/

process.stdout.write("Digite um número para saber se ele é par ou ímpar: \n");
process.stdin.on('data', function(data) {
    const numero = parseFloat(data);
    if (numero % 2 == 0) {
        process.stdout.write("O número digitado é par! \n");
    } else {
        process.stdout.write("O número digitado é impar \n!");
    }
    process.exit();
});