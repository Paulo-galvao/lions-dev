const numeros = [];

for(let i = 0; i < 10; i++) {
    numeros.push(Math.floor(Math.random() * 100));
}

let pares = [];
let impares = [];
let maior = numeros[0];
let menor = numeros[0];
let intervalo1 = [];
let intervalo2 = [];
let intervalo3 = [];
let intervalo4 = [];
let intervalo5 = [];

console.log("------------------------------------");
console.log(`Seu array é: \n${numeros}`);
console.log("------------------------------------");

numeros.forEach(numero => {
    if(numero % 2 == 0) {
        pares.push(numero);
    } else {
        impares.push(numero);
    }

    if(numero > maior) {
        maior = numero;
    }
    if(numero < menor) {
        menor = numero;
    }
    if(numero >= 0 && numero <= 20) {
        intervalo1.push(numero);
    } else if(numero >= 21 && numero <= 40) {
        intervalo2.push(numero);
    } else if(numero >= 41 && numero <= 60) {
        intervalo3.push(numero);
    } else if(numero >= 61 && numero <= 80) {
        intervalo4.push(numero);
    } else {
        intervalo5.push(numero);
    }
})

console.log(`Números pares: ${pares}`);
console.log("------------------------------------");
console.log(`Números impares: ${impares}`);
console.log("------------------------------------");
console.log(`Maior número: ${maior}`);
console.log("------------------------------------");
console.log(`Menor número: ${menor}`);
console.log("------------------------------------");
console.log(`Números entre 0 e 20: ${intervalo1}`);
console.log("------------------------------------");
console.log(`Números entre 21 e 40: ${intervalo2}`);
console.log("------------------------------------");
console.log(`Números entre 41 e 60: ${intervalo3}`);
console.log("------------------------------------");
console.log(`Números entre 61 e 80: ${intervalo4}`);
console.log("------------------------------------");
console.log(`Números entre 81 e 100: ${intervalo5}`);
