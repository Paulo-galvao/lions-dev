const numeros = [];
const pares = [];
const impares = [];
let maiorNumero = 0;
let menorNumero = 0;

console.log("Digite 15 números: ");
process.stdin.on('data', function(data) {
    numeros.push(+data);
    if(numeros.length < 15) {
        console.log("Digite outro: ");
    } else {

        for(let i = 0; i < numeros.length; i++) {
            if(numeros[i] % 2 == 0) {
                pares.push(numeros[i]);
            } else {
                impares.push(numeros[i]);
            }
        }

        console.log("Lista de números pares:");
        pares.forEach(num => {
            console.log(num);
        })

        console.log("Lista de números ímpares:");
        impares.forEach(num => {
            console.log(num);
        })

        menorNumero = numeros[0];
        numeros.forEach(numero => {
            if(numero > maiorNumero) {
                maiorNumero = numero;
            }
            
            if(numero < menorNumero) {
                menorNumero = numero;
            }
        })        

        console.log(`Quantidade de números pares na lista: ${pares.length}`);
        console.log(`Quantidade de números ímpares na lista: ${impares.length}`);
        console.log(`Maior número da lista: ${maiorNumero}`);
        console.log(`Menor número da lista: ${menorNumero}`);

        process.exit();

    }
})