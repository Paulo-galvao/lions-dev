const prompt = require("prompt-sync")({sigint: true});

const numero = prompt("Digite um número para saber o seu fatorial: ");

function calcularFatorial(valor) {
    let fatorial = 1;
    for(let i = valor; i > 0; i--) {
        fatorial *= i;
    }
    return fatorial;
}

console.log(calcularFatorial(numero));