console.log("Digite os seu nome: ");
process.stdin.once('data', function(data) {
    let nome = data.toString().trim();

    console.log("Sua idade? ");
    process.stdin.once('data', function(data) {
        let idade = +data;    
        process.stdout.write(`Olá ${nome} que bom ver você por aqui, vi que você tem ${idade} anos! \n`);
        process.exit();
    })
});
