process.stdout.write("Qual é a sua idade?");
process.stdin.once('data', function(data){
    const idade = +data;
    if(idade < 18) {
        process.stdout.write("Você ainda nao pode tirar habilitação! \n");
    } else {
        process.stdout.write("Você já pode tirar habiltação! \n");
    }
    process.exit();
});