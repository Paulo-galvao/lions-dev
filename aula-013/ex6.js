console.log("Digite o valor do produto: ");
process.stdin.once('data', function(data) {
    let pagamento = +data;

    console.log("Escolha a condição de pagamento:")
    console.log("1.A vista com 15% de desconto;");
    console.log("2.A vista no cŕedito com 10% de desconto;");
    console.log("3.Parcelado em duas vezes, sem desconto e sem juros;");
    console.log("4.Parcelado em três vezes ou mais com juros de 10%.");
        
    process.stdin.on('data', function(data) {
        
        
        let condicao = +data;
        if(condicao >= 0 && condicao <=4) {
            if(condicao == 1) {
                console.log("A vista com 15% de desconto");
                console.log(`Valor final com desconto: ${pagamento - pagamento*15/100}`);
    
            } else if(condicao == 2) {
                console.log("A vista no cŕedito com 10% de desconto");
                console.log(`Valor final com desconto: ${pagamento - pagamento*10/100}`);
                    
            } else if(condicao == 3) {
                console.log("Pacelado em duas vezes sem desconto");
                console.log(`Valor final: ${pagamento}`);    
    
            } else if(condicao == 4) {
                console.log("Parcelado em três vezes ou mais com juros de 10%");
                console.log(`Valor final com juros: ${pagamento + pagamento*10/100}`);
                
            }
            process.exit();
        } else {
            console.log("Opção incorreta!");
            console.log("Escolha a condição de pagamento:")
            console.log("1.A vista com 15% de desconto;");
            console.log("2.A vista no cŕedito com 10% de desconto;");
            console.log("3.Parcelado em duas vezes, sem desconto e sem juros;");
            console.log("4.Parcelado em três vezes ou mais com juros de 10%.");
        }
            
        }) 
    
})