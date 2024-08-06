const prompt = require('prompt-sync')();
const {adicionarResidencia, listarResidencias, atualizarResidencia, removerResidencia} = require('./crud.js');

while(true) {

    console.log(`Olá seja bem-vindo! O que deseja fazer hoje?
1. Criar uma nova residência;
2. Listar residências existentes;
3. Atualizar uma residência existente;
4. Remover uma residência existente;
0. Sair`);

    const opcao = +prompt();

    switch(opcao) {
        case 1:
            adicionarResidencia();
            break;
        case 2:
            listarResidencias();
            break;
        case 3:
            atualizarResidencia();
            break;
        case 4:
            removerResidencia();
            break;
        case 0:
            console.log("Ok, até mais!")
            return;
        default:
            console.log("Opção não encontrada!");
            break;
            
    }

}