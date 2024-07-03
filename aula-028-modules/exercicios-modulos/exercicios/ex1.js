const prompt = require("prompt-sync")({sigint: true});

const qtdNotas = prompt("Quantas notas você deseja inserir? ");
const listaDeNotas = [];

for(let i = 0; i < qtdNotas; i++) {
    let nota = +prompt(`Digite a ${i+1}ª nota: `);
    listaDeNotas.push(nota);
}
   
function calcularMedia(notas) {
    let soma = 0;
    notas.forEach(nota => {
        soma += nota;
    });
    return soma / notas.length;
}

console.log(calcularMedia(listaDeNotas));