let frase = "";

console.log("Digite uma frase: ");
process.stdin.once('data', function(data) {
    frase = data.toString().trim();
    let caracteres = frase.replace(/\s/g, "").length;
    console.log(`Quantidade de caracteres da frase: ${caracteres}`);
    if(caracteres % 2 == 0) {
        console.log("A frase tem um número par de caracteres no total!");
    } else {
        console.log("A frase tem um número ímpar de caracteres no total!");
    }
    process.exit();
})