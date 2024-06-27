let mes;

console.log("Escolha o mês do ano: ");
process.stdin.once('data', function(data) {
    mes = +data;

    switch(mes) {
        case 2:
            console.log("28 dias");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("30 dias");
            break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log("31 dias");
            break;
        default:
            console.log("Opção inválida");
            break;
        }
        process.exit();
    })