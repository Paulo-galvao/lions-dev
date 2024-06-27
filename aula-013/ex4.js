console.log("Digite um valor para A: ");
process.stdin.once('data', function(data) {
    let a = parseInt(data);
    console.log("Digite um valor para B: ");
    process.stdin.once('data', function(data) {
        let b = parseInt(data);

        if(a == b) {
            let soma = a + b;
            console.log("Foi realizado a soma dos valores!");
            console.log(`O resultado da soma foi ${soma}`);
            if(soma % 2 == 0) {
                console.log("O resultado final é par");
            } else {
                console.log("O resultado final é impar");
            }

        } else {
            let multi = a * b;
            console.log("Foi realizado a multiplicação dos valores!");
            console.log(`O resultado da multiplicação foi ${multi}`);
            if(multi % 2 == 0) {
                console.log("O resultado final é par");
            } else {
                console.log("O resultado final é impar");
            }
        }

        process.exit();
    })
})