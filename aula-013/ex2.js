let notas = [];
let total = 0;
console.log("Olá! Digite o seu nome por favor: ");

process.stdin.once('data', function(data) {
    let nome = data.toString().trim();

    console.log("Digite a primeira nota:");
    process.stdin.on('data', function(data) {
        
        notas.push(+data);

        if(notas.length >= 4) {
            
            notas.forEach(nota => {
                total += nota;
            })

            let media = total / 4;
            if(media >= 7) {
                console.log(`Parabéns ${nome}, você está aprovado!`);
            } else {
                console.log(`Que pena ${nome}, você não atingiu a média!`);
            }
            process.exit();
        } else {
            console.log("Digite outra:");
        }
    })
})