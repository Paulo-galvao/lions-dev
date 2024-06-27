const numeros = [];

console.log("Digite três números por favor!");
console.log("O primeiro: ");
process.stdin.once('data', function(data) {

    numeros.push(+data);
    console.log("O segundo:");
    process.stdin.once('data', function(data) {

        numeros.push(+data);
        console.log("O terceiro:");
        process.stdin.once('data', function(data) {
    
            numeros.push(+data);
            console.log("Aqui está o seu array de números:");
            console.log(numeros);

            const numerosModificado = [];
            for(let i = numeros.length -1; i >= 0; i--) {
                numerosModificado.push(numeros[i]);
            }

            console.log("Aqui está seu array invertido: ");
            console.log(numerosModificado);
            process.exit();
        })
    })    
})