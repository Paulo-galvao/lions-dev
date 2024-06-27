const prompt = require("prompt-sync")({ sigint: true });

let consulta;
let consultasLista = [];

console.log("\nOlá seja vindo, como podemos te ajudar hoje? ");

while(true) {
    // menu de entrada
    console.log(`
-----------------------------------
1. Adicionar uma nova consulta
2. Listar todas as consultas
3. Atualizar uma consulta existente
4. Cancelar uma consulta
5. Sair
-----------------------------------
    `);
    // entrada de dado opções do menu
    let opcao = prompt("Escolha uma opção ");
    
    // novo cadastro
    if(opcao == 1) {
        let nomePaciente = prompt("Nome do paciente: ");
        let nomeMedico = prompt("Nome do médico: ");
        let data = prompt("Data da consulta: ");
        let hora = prompt("Horário da consulta: ");
        adicionarConsulta(nomePaciente, nomeMedico, data, hora);
        
        
    // listagem de consultas
    } else if(opcao == 2) {
        
        if(consultasLista.length == 0) {
            console.log("\n---------------------------------------------");
            console.log("Ainda não possuímos nenhuma consulta agendada");
            console.log("---------------------------------------------");           
        } else {
            console.log("--------------------");
            console.log("Consultas agendadas:");
            console.log("");
            console.log("--------------------");
            consultasLista.forEach((consulta, index) => {
                console.log("-------------------------------------------------------------------");
                console.log(`${index + 1}. ${consulta.nomePaciente} - ${consulta.nomeMedico} - ${consulta.data} - ${consulta.hora}`);
                console.log("-------------------------------------------------------------------");
            })
        }
        
    // atualizar consulta
    } else if(opcao == 3) {
        if(consultasLista.length == 0) {
            console.log("\n---------------------------------------------");
            console.log("Ainda não possuímos nenhuma consulta agendada");
            console.log("---------------------------------------------");           
        } else {
            console.log("Atualizar consulta: ");
            console.log("Qual consulta você deseja alterar? Escolha pelo número: ");
            consultasLista.forEach((consulta, index) => {
                console.log("-------------------------------------------------------------------");
                    console.log(`${index + 1}. ${consulta.nomePaciente} - ${consulta.nomeMedico} - ${consulta.data} - ${consulta.hora}`);
                    console.log("-------------------------------------------------------------------");
            })
            let opcao = prompt();
            
            let nomePaciente = prompt("Nome do paciente: ");
            let nomeMedico = prompt("Nome do médico: ");
            let data = prompt("Data da consulta: ");
            let hora = prompt("Horário da consulta: ");
            
            
            consultasLista.forEach((consulta, index) => {
                if(opcao == index + 1) {
                    consulta.nomePaciente = nomePaciente;
                    consulta.nomeMedico = nomeMedico;
                    consulta.data = data;
                    consulta.hora = hora;
                }
            }) 
        }
        
        
            

    // excluir consulta
    } else if (opcao == 4) {
        if(consultasLista.length == 0) {
            console.log("\n---------------------------------------------");
            console.log("Ainda não possuímos nenhuma consulta agendada");
            console.log("---------------------------------------------");           
        } else {
            console.log("Atenção! Qual consulta deseja excluir? Escolha pelo número: ");
        
        consultasLista.forEach((consulta, index) => {
            console.log("-------------------------------------------------------------------");
                console.log(`${index + 1}. ${consulta.nomePaciente} - ${consulta.nomeMedico} - ${consulta.data} - ${consulta.hora}`);
                console.log("-------------------------------------------------------------------");
        })
        let opcao = prompt();

        consultasLista.forEach((consulta, index) => {
            if(opcao == index + 1) {
                consultasLista.splice(index, 1)
            }
        }) 
        }
        
    // sair do sistema
    } else if (opcao == 5) {
        console.log("Obrigado, até a próxima!");
        break;
    } else {
        console.log("----------------------------------");
        console.log(("Opção inválida :( tente novamente"));
        console.log("----------------------------------");
    }
    
}


function adicionarConsulta(nomePaciente, nomeMedico, data, hora) {
    consulta = {
        nomePaciente,
        nomeMedico,
        data,
        hora
    };
    consultasLista.push(consulta);
}

function atualizarConsulta() {
    
}