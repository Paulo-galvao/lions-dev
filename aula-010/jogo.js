let key = Math.floor(Math.random() * 10);
let resposta = 0;
let tentativas = 1;

console.log("Digite um número de 0 a 9");
process.stdin.once('data', function(data) {
    resposta = +data;
    
    if(resposta == key) {
        console.log(`Fim de jogo! Você venceu!! \nTentativas: ${tentativas}`);
        process.exit();
    } else {
        console.log("Resposta incorreta!");
        console.log("Digite outro número de 0 a 9");
        process.stdin.on('data', function(data) {
            resposta = +data;
            if(resposta == key) {
                tentativas++
                console.log(`Fim de jogo! Você venceu!! \nTentativas ${tentativas}`);
                process.exit();
            } else {
                tentativas++
                console.log("Resposta incorreta!");
                console.log("Digite outro número de 0 a 9");
            }
        })
    }
}) 