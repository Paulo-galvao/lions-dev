const mostrarReprovados = require("./reprovados");

function contarReprovados(listaDeNotas) {
    let reprovados = 0;
    mostrarReprovados(listaDeNotas).forEach(aluno => {
        reprovados++;
    }); 
    return reprovados;
}

module.exports = contarReprovados;