function atualizarResidencia() {
    if(residencias.length > 0) {
        listarResidencias();
        let id = prompt("Qual o id da residência que você deseja atualizar? ");
        
        if(id > 0 && id <= residencias.length) {
            
            let novaResidencia = modelo();
            if(novaResidencia != undefined) {
                residencias[indice] = novaResidencia;
                console.log("Residência atualizada com sucesso!");
            } else {
                console.log("Dados inválidos!");
            }
        } else {
            console.log(("Valor de índice não encontrado!"));
        }
    } else {
        console.log("Não possuímos nenhuma residência cadastrada ainda!");
    }
}