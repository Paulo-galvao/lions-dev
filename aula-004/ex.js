const anoAtual = new Date().getFullYear();

process.stdout.write("Qual é o seu nome? \n");
process.stdin.once('data', function(data) {
    const nome = data.toString().trim();

    process.stdout.write(`Olá ${nome}, seja bem-vindo, qual a sua idade? \n`);
    process.stdin.once('data', function(data) {

        let idade = +data;
        const anoNascimento = anoAtual - idade;
        
        process.stdout.write(`Você nasceu no ano de ${anoNascimento} \n`);

        process.stdout.write(`você possui CNH? digite 0 para não ou 1 para sim\n`);
        process.stdin.once('data', function(data) {
            const habilitado = +data;
            if (habilitado != 0 && habilitado != 1) {
                process.stdout.write("Resposta incorreta! \n");
            } else if (habilitado) {
                process.stdout.write("Você é habilitado, dirija com cuidado! \n");
            } else {
                process.stdout.write("Você não possui habilitação :( \n");
            } 
            process.exit();
        });
        
    });

});


