const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout,  
    }
);

let soma = 0;

// console.log("Digite um número: ");
// rl.on("line", function(num1) {
//     console.log("Digite outro: ");
//     rl.on("line", function(num2) {
//         soma = +num1 + +num2;
//         console.log(soma);
//         rl.close();
//     })
// })

