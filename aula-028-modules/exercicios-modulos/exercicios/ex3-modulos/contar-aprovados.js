const mostrarAprovados = require("./aprovados");

function contarAprovados(listaDeNotas) {
    let aprovados = 0;
    mostrarAprovados(listaDeNotas).forEach(aluno => {
        aprovados++;
    }); 
    return aprovados;
}

module.exports = contarAprovados;