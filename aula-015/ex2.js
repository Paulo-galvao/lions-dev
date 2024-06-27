let estacao;

console.log("Escolha uma estação do ano: ");

process.stdin.once('data', function(data) {
    estacao = data.toString().trim();

    switch(estacao) {
        case "outono":
            console.log("Outono: março a junho");
            break;
        case "inverno":
            console.log("Inverno: junho a setembro");
            break;
        case "primavera":
            console.log("Primavera: setembro a dezembro");
            break;
        case "verao":
            console.log("Verão: dezembro a fevereiro");
            break;
        default:
            console.log("Estação não encontrada");
            break;
    }
    process.exit();
}) 