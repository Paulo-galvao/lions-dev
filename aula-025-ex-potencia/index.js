const prompt = require("prompt-sync")({ sigint: true });

let base = parseFloat(prompt("Qual a base da operação? "));
let expoente = parseFloat(prompt("Qual o expoente? "));
let resultado = 0;

resultado = Math.pow(base, expoente);

console.log(resultado);