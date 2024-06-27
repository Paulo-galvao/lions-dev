let numeros = [1,2,3,4,5];
let soma = 0;

for(let i =0; i < numeros.length; i++) {
    if(numeros[i] % 2 != 0) {
        soma += numeros[i];
    }
}
console.log(soma);

// o código está filtrando os números impares 
// e está somando eles 