/*
    exercício do café
*/

process.stdout.write("Você gosta de café? digite 0 para não ou 1 para sim \n");
process.stdin.once('data', function(data) {
    const gostaDeCafe = parseFloat(data);
    if(gostaDeCafe != 0 && gostaDeCafe != 1) {
        process.stdout.write("Resposta incorreta! \n")
    } else if ( gostaDeCafe ) {
        process.stdout.write("Você tem bom gosto! \n");
    } else {
        process.stdout.write("Que pena! \n");
    }
    process.exit();
})