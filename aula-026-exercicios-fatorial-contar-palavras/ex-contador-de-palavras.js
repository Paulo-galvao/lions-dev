const prompt = require("prompt-sync")({ sigint: true });

let texto = prompt("Me conte uma história! ");
let palavras = texto.split(" ");
let numeroDePalavras = palavras.length;
let palavrasCopia = [...palavras];

// console.log(numeroDePalavras);

for(let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i];
    console.log(palavra);
    
}

