console.log("Digite um valor para A:");
process.stdin.once('data', function(data) {
    let a = +data;

    console.log("Digite um valor para B:");
    process.stdin.once('data', function(data) {
        let b = +data;

        console.log("Digite um valor para C:");
        process.stdin.once('data', function(data) {
            let c = +data;
            let soma = a + b;

            console.log(`A soma entre a e b é ${soma}`);
            if(soma > c) {
                console.log("A soma entre esses números é maior do que c");
            } else if(soma < c) {
                console.log("A soma entre esses números é menor do que c");
            } else {
                console.log("A soma entre esses números é igual a c");
            }
            process.exit();
        })

    })

})