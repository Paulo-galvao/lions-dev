let key = 9;
let c = 0;
let number = 0;
console.log('Digite um número de 1 a 10');

process.stdin.on('data', function(data) {
    c++;
    number = +data;
    
})
