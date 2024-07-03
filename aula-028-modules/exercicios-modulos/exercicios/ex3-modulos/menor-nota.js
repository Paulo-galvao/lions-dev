function calcularMenorNota(listaDeNotas) {
    let menorNota = listaDeNotas[0];
    for (let i = 0; i < listaDeNotas.length; i++) {
        if(listaDeNotas[i] < menorNota) {
            menorNota = listaDeNotas[i];
        }
    }
    return menorNota;
}

module.exports = calcularMenorNota;