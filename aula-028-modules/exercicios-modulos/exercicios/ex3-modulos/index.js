const prompt = require("prompt-sync")({sigint: true});
const calcularMedia = require("./media");
const calcularMaiorNota = require("./maior-nota");
const calcularMenorNota = require("./menor-nota");
const mostrarAprovados = require("./aprovados");
const mostrarReprovados = require("./reprovados");
const contarAprovados = require("./contar-aprovados");
const contarReprovados = require("./contar-reprovados");

const qtdNotas = prompt("Quantas notas você deseja inserir? ");
const listaDeNotas = [];

for(let i = 0; i < qtdNotas; i++) {
    let nota = +prompt(`Digite a ${i+1}ª nota: `);
    listaDeNotas.push(nota);
}

console.log(`Média entre as notas: ${calcularMedia(listaDeNotas)}
Maior nota: ${calcularMaiorNota(listaDeNotas)}
Menor nota: ${calcularMenorNota(listaDeNotas)}
Notas acima da média: ${mostrarAprovados(listaDeNotas)}
Notas abaixo da média: ${mostrarReprovados(listaDeNotas)}
Quantidade de aprovados: ${contarAprovados(listaDeNotas)}
Quantidade de reprovados: ${contarReprovados(listaDeNotas)}`);
