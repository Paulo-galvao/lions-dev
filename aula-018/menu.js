const readline = require('readline');

const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout,  
    }
);

const usuarios = [];
let i = 0;

console.log("Qual o seu nome?");
rl.on('line', function(nome) {
    usuarios[i] = {
        nome: nome,
        habilidades: []
    }
    // rl.close();
    console.log("Deseja continuar? s/n");
    rl.on('line', function(resposta) {
        if(resposta != "s") {
            console.log(usuarios);
            rl.close();
        } else {
            i++;
        }
    })


    
})