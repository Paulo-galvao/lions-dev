const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let contador = 0;
let num1;
let num2;

console.log("Digite um número: ");
rl.on('line', (number) => {
    contador++;
    console.log("Digite outro: ");
    if(contador == 1) {
        num1 = number;
    } else if (contador == 2) {
        num2 = number;
        console.log(`Soma: ${+num1 + +num2}`);
        rl.close();
    }
      
});

// rl.question("Digite um número: \n", (n1) => {
//     console.log(`n1: ${n1}`);
//     rl.question("Digite outro: \n", (n2) => {
//         console.log(`n2: ${n2}`);
//         console.log(`Soma ${+n1 + +n2}`);
//         rl.close();
//     })
// });

