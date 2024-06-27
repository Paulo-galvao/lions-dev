const readline = require('readline');

const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout,  
    }
);

const usuarios = [];

rl.question("Qual o seu nome? \n", function(nome) {
    usuarios[0] = {
        nome: nome,
        habilidades: []
    };
    console.log("Insira uma habilidade sua: ");
    rl.on('line', function(hab) {

        if(usuarios[0].habilidades.length < 3) {
            console.log("Adicione mais uma: ");
            usuarios[0].habilidades.push(hab);           

        } else {
            console.log(usuarios);
            rl.close();
        }
    })
    
})
