/*
    calcular média e nota maior
*/

let prova1 = '';
let prova2 = '';
let prova3 = '';
let notas = [];

console.log('Digite a primeira nota: ');
process.stdin.once('data', function(data) {
    prova1 = parseFloat(data);

    console.log('Digite a segunda nota: ');
    process.stdin.once('data', function(data) {
        prova2 = parseFloat(data);

        console.log('Digite a terceira nota: ');
        process.stdin.once('data', function(data) {
            prova3 = parseFloat(data);
            notas.push(prova1);
            notas.push(prova2);
            notas.push(prova3);     
            // console.log(notas);            

            // calculo das médias
            let media = (notas[0] + notas[1] + notas[2]) / notas.length;
            console.log(`\nA média das notas do aluno é: ${media} \n`);
            
            // maior nota 
            if(prova1 > prova2 && prova1 > prova3) {
                console.log('A primeira prova teve a maior nota');
            } else if (prova2 > prova1 && prova2 > prova3) {
                console.log('A segunda prova teve a maior nota');
            } else if (prova3 > prova1 && prova3 > prova2) {
                console.log('A terceira prova teve a maior nota');
            }

            // menor nota
            if(prova1 < prova2 && prova1 < prova3) {
                console.log('A primeira prova teve a menor nota');
            } else if (prova2 < prova1 && prova2 < prova3) {
                console.log('A segunda prova teve a menor nota');
            } else if (prova3 < prova1 && prova3 < prova2) {
                console.log('A terceira prova teve a menor nota');
            }

            process.exit();
        })
    })
})



