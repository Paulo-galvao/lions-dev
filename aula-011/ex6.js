const numeros = [];

for(let i = 0; i <= 70; i++) {
    if(i % 7 == 0) {
        numeros.push(i);
    }
}

console.log(numeros);
// const numeros = [0, 7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

console.log("Digite um número por favor: ");
process.stdin.once('data', function(data) {
    let numeroUsuario = +data;
    checarNumero(numeroUsuario, numeros);    
    console.log("O número digitado está fora da lista\nTente Novamente: ");

    process.stdin.on('data', function(data) {
        numeroUsuario = +data;
        checarNumero(numeroUsuario, numeros); 
        console.log("O número digitado está fora da lista\nTente Novamente: ");
    })
    
})

function checarNumero(numeroUsuario, array) {
    array.forEach( numero => {
        if(numeroUsuario == numero) {
            console.log("O número esta contido na lista");
            process.exit();
        }
    })
}
