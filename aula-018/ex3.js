const usuarios = [
    {
        nome: "Douglas",
        habilidades: ["Javascript", "ReactJS", "Redux"],
    },
    {
        nome: "Elton",
        habilidades: ["PHP", "Ruby on Rails", "Laravel"],
    }
];

const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.question("Qual o seu nome? \n", (nome) => {
    if(nome.toLowerCase() == "douglas") {
        console.log(`O usuário ${usuarios[0].nome} possui as seguintes habilidades: ${usuarios[0].habilidades}`);
    } else if(nome.toLowerCase() == "elton") {
        console.log(`O usuário ${usuarios[1].nome} possui as seguintes habilidades: ${usuarios[1].habilidades}`);
    }
    rl.close();
})