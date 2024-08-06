const prompt = require('prompt-sync')();

let residencias = [];

let lastId;
if(residencias.length == 0) {
    lastId = 0;
} else {
    lastId = residencias[residencias.length -1].id;
}

function modelo() {
    const id = lastId;
    const moradores = [];
    const bairro = prompt("Em qual bairro se encontra a residência? ");
    const rua = prompt("Em qual rua se encontra a residência? ");
    const numero = prompt("Qual o número da residência? ");

    while(true) {
        const morador = prompt("Quais moradores residem no local(Ao terminar de inserir os moradores digite 0 para continuar)? ");
        if(morador == 0) {
            break;
        } else {
            moradores.push(morador);
        }
    }

    if(bairro != "" && rua != "" && numero != "" && !isNaN(numero) && moradores.length != 0) {
        return {
            id,
            bairro,
            rua,
            numero,
            moradores
        }
    } else {
        return undefined;
    }
}

function adicionarResidencia() {
    lastId++;
    const residencia  = modelo();
    if(residencia != undefined) {
        residencias.push(residencia);
        console.log("Residência adicionada com sucesso!");
    } else {
        console.log("Dados incorretos!");
    }
}

function listarResidencias() {
    if(residencias.length > 0) {
        residencias.forEach( (residencia, index ) => {
            console.log(`${index+1}. Id: ${residencia.id} \nBairro: ${residencia.bairro}\nRua: ${residencia.rua} \nNumero: ${residencia.numero} \nMoradores: ${residencia.moradores}`);
            console.log("-------------------------------------");
        })
    } else {
        console.log("Não possuímos nenhuma residência cadastrada ainda!");
    }
}

function atualizarResidencia() {
    if(residencias.length > 0) {
        listarResidencias();
        let id = +prompt("Qual o id da residência que você deseja atualizar? ");
        let findId = residencias.findIndex( residencia => residencia.id == id);
        // verificar se ID existe
        if(findId == -1) {
            console.log("Id não encontrado");
        }

        residencias.forEach((residencia, index) => {
            if(residencia.id == id) { // verificar em qual elemento se encontra o Id
                let novaResidencia = residencias[index]
                novaResidencia = modelo();
                if(novaResidencia != undefined) {
                    residencias[index].id = residencia.id; // manter o mesmo id no elemento modificado
                    console.log("Residência atualizada com sucesso");            
                } else {
                    console.log("Dados inválidos!");
                }
            }
            
        })
        
    } else {
        console.log("Não possuímos nenhuma residência cadastrada ainda!");
    }
}

function removerResidencia() {
    if(residencias.length > 0) {
        listarResidencias();
        let id = prompt("Qual residência você deseja remover(escolha pelo id)? ");
        let findId = residencias.findIndex( residencia => residencia.id == id);
        if(findId == -1) {
            console.log("Id não encontrado");
        }
        residencias.forEach((residencia, index) => {
            if(residencia.id == id) { // verificar em qual elemento se encontra o Id
                residencias.splice(residencias[index], 1);                 
                console.log("Residência removida com sucesso");       
            }
            
        })
  
    } else {
        console.log("Não possuímos nenhuma residência cadastrada ainda!");
    }
}

module.exports = {adicionarResidencia, listarResidencias, atualizarResidencia, removerResidencia};
