let aleatorio = Math.floor(Math.random() * 10);
let numero = 0;
let tentativas = 3;

console.log(("Digite um número de 0 a 10: "));
console.log(`Tentativas restantes: ${tentativas}`);
process.stdin.on('data', function(data) {
    numero = +data;

    if(numero == aleatorio) {
        console.log("Acertou!!");
        process.exit()
    } else {
        tentativas--;
        if(tentativas != 0) {
            console.log("Escolha outro número: ");
            console.log(`Tentativas restantes: ${tentativas}`);
        } else {
            console.log("Números de tentativas esgotado! Tente novamente mais tarde");
            console.log("Gostaria de tentar novamente? s/n");
            
            process.stdin.once('data', function(data) {
                let resposta = data.toString().trim();
                if(resposta == sim) {
                    tentativas = 3;
                } else {
                    console.log("Ok então");
                    process.exit();
                }
            })
            process.exit();
        }
    }
}) 