console.log("Escolha um mês do ano: ");

process.stdin.once('data', function(data) {
    let mes = data.toString().trim();

    switch(mes) {
        case "dezembro":
        case "janeiro":
        case "fevereiro":
            console.log(`O mês de ${mes} se encontra no verão`);
            break;
        case "março":
        case "abril":
        case "maio":
            console.log(`O mês de ${mes} se encontra no outono`);
            break;
        case "junho":
        case "julho":
        case "agosto":
            console.log(`O mês de ${mes} se encontra no inverno`);
            break;
        case "setembro":
        case "outubro":
        case "novembro":
            console.log(`O mês de ${mes} se encontra na primavera`);
            break;
        default:
            console.log("Mês não encontrado ");
            break;
    }
    process.exit();
})
