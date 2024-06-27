let numero = 0;

console.log("Digite um número por gentileza: ");
process.stdin.once('data', function(data) {
    numero = +data;
    console.log(`O antecessor de ${numero} é ${numero - 1} e o seu sucessor é ${numero + 1}`);
    process.exit();
})