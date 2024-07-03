function calcularMaiorNota(listaDeNotas) {
    let maiorNota = listaDeNotas[0];
    for (let i = 0; i < listaDeNotas.length; i++) {
        if (listaDeNotas[i] > maiorNota) {
            maiorNota = listaDeNotas[i];
        }
    }
    return maiorNota;
}

module.exports = calcularMaiorNota;