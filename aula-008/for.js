// for(let i = 100; i <=200; i++) {
//     if(i % 2 != 0) {
//         console.log(i);
//     }
// }

// console.log("Digite o número a ser multiplicado: ");
// process.stdin.on('data', function(data) {
//     let x = +data;    
  
//     console.log(`Tabuada do ${x}: `);
//     for(i = 0; i <= 10; i++) {
//         console.log(`${x} x ${i} = ${x * i}`);
//     }
//     process.exit();
    
// })

// process.stdin.on('data', function(data) {

// })

let soma = 0;
let pares = 0;
let impares = 0;
let somaDivisiveisPorTres = 0;
let divisiveisPorTres = 0;

for(let i = 0; i < 1000; i++) {
    if(i % 2 != 0) {
        soma += i;
        impares++;
    }

    if(i % 2 == 0) {
        pares++;
    }

    if(i % 3 == 0) {        
        somaDivisiveisPorTres += i;
        divisiveisPorTres++;
    }
}

console.log(`Soma dos números ímpares: ${soma}`);
console.log(`Quantidade de números pares: ${pares}`);
console.log(`Quantidade de números ímpares: ${impares}`);
console.log(`Média aritmética dos números divisiveis por 3: ${somaDivisiveisPorTres / divisiveisPorTres}`);