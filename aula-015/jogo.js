let key = Math.floor(Math.random() * 10);
let numero = 0;
let contador = 1;

console.log("Vamos começar! Digite um número de 0 a 9: ");

process.stdin.on('data', function(data) {
    numero = +data;

    if(numero == key) {
        console.log("Acertou!!");
        console.log("Tentativas: " + contador);
        process.exit();
    } else {
        console.log("Número incorreto! Tente Novamente!");
        contador++;
    }

})