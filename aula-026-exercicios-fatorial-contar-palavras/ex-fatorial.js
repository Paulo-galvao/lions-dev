const prompt = require("prompt-sync")({ sigint: true });

let fatorial = +prompt("Digite um número para saber seu fatorial: ");
let numero = fatorial;
let resultado = 1;
let fatoriais = [];

for(let i = 0; i < fatorial; i++) {
    fatoriais.push(numero);
    numero = numero - 1;    
}

fatoriais.forEach(fat => {
    resultado *= fat;
})

console.log(`O fatorial de ${fatorial} é: ${resultado}`);