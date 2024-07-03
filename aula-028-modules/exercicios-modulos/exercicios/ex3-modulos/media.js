function calcularMedia(notas) {
    let soma = 0;
    notas.forEach(nota => {
        soma += nota;
    });
    return soma / notas.length;
}

module.exports = calcularMedia;