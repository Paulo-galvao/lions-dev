let codigo;

console.log("Digite o código do produto: ");
process.stdin.once('data', function(data) {
    codigo = +data;

    switch(codigo) {
        case 1:
            console.log("Alimento não perecível");
            break;
        case 2:
            console.log("Alimento perecível");
            break;
        case 3:
            console.log("Vestuário");
            break;
        case 4:
            console.log("Limpeza");
            break;
        default:
            console.log("Item não encontrado");
            break;
    }
    process.exit();
}) 