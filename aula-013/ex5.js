console.log("Vamos calcular seu IMC!!");
console.log("Por favor, comece digitando o seu peso: ");
process.stdin.once('data', function(data) {
    let peso = +data;

    console.log("Agora a sua altura em cm: ");
    process.stdin.once('data', function(data) {
        let altura = +data / 100;
        let imc = peso/ (altura**2);

        if(imc <= 18.5) {
            console.log("O seu peso está abaixo do ideal");
        } else if (imc > 18.5 && imc <= 24.9) {
            console.log("O seu peso está dentro do ideal");
        } else if (imc > 24.9 && imc <= 29.9) {
            console.log("O seu peso está levemente acima do ideal");
        } else if (imc > 29.9 && imc <= 34.9) {
            console.log("Cuidado! Você está com Obesidade grau I");
        } else if(imc > 34.9 && imc <= 39.9) {
            console.log("Cuidado! Você está com Obesidade grau II(severa)");
        } else {
            console.log("Cuidado! Você está com Obesidade grau III(mórbida)");
        }

        process.exit();
    })

})