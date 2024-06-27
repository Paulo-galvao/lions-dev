console.log('Qual o seu nome? ');
process.stdin.once('data', function(data) {
    let nome = data.toString().trim();

    console.log('Qual a sua idade? ');
    process.stdin.once('data', function(data) {
        let idade = +data;
        
        console.log('Você tem CNH? sim/nao');
        process.stdin.once('data', function(data) {
            let habilitado = data.toString().trim();
            if(habilitado == 'sim') {
                habilitado = true;
            } else if(habilitado = 'nao') {
                habilitado = false;
            }
            
            let pessoa = {
                nome: nome,
                idade: idade,
                habilitado: habilitado,
            }

            if(pessoa.habilitado) {
                console.log(`${pessoa.nome}, ${pessoa.idade} anos, possui CNH e já pode dirigir`);
            } else {
                console.log(`${pessoa.nome}, ${pessoa.idade} anos, não tem CNH, portanto não pode dirigir`);
            }
            
            process.exit();
        })
    })

})