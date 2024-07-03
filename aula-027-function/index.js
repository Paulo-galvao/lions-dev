let num1 = 10;
let num2 = 11;

// let soma = num1 + num2;

// console.log(soma);

function somar(num1, num2) {
    let resultado = num1 + num2;
    return resultado;
}

function multiplicar(numeros) {
    let result;
    numeros.forEach(numero => {
        result *= numero;
    }) 
    return result;
}



console.log(multiplicar([2,5,10]));