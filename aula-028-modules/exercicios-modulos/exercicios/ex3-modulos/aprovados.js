const calcularMedia = require("./media");

function mostrarAprovados(listaDeNotas) {
    const lista = [];
    for (let i = 0; i < listaDeNotas.length; i++) {
        if(listaDeNotas[i] >= calcularMedia(listaDeNotas)) {
            lista.push(listaDeNotas[i]);            
        }
    }    
    return lista;
    
}

module.exports = mostrarAprovados;