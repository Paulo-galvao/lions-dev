let somaPares = 0;
let somaImpares = 0;
let totalPares = 0;
let totalImpares = 0;

for(let i =0; i < 1000; i++) {
    if(i % 2 == 0) {
        somaPares += i;      
        totalPares++;
    } else {
        somaImpares += i;
        totalImpares++;
    }
}

let mediaPares = somaPares/ totalPares;
let mediaImpares = somaImpares/ totalImpares;

console.log(`A soma dos números pares é ${somaPares}`);
console.log(`A soma dos números impares é ${somaImpares}`);
console.log(`O total de números pares é ${totalPares}`);
console.log(`O total de números impares é ${totalImpares}`);
console.log(`A média dos números pares é ${mediaPares}`);
console.log(`A média dos números impares é ${mediaImpares}`);

if(mediaPares > mediaImpares) {
    console.log("A média dos números pares é maior");
} else {
    console.log("A média dos números impares é maior");
}