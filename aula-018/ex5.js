const readline = require('readline');

const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout,  
    }
);

rl.question("Escolha qual escala você quer usar: \nk - kelvin \nc - celsius \nf - fahrenheit \n", function(escala) {
    
    rl.question("Qual o valor da temperatura? \n", function(temperatura) {
        parseFloat(temperatura);
        if(escala == "k") {
            let c = temperatura - 273.15;
            let f = c * 1.8 + 32;
            console.log(`Temperatura em graus Celsius: ${c.toFixed(3)}`);
            console.log(`Temperatura em graus Farenheit: ${f.toFixed(3)}`);
        } else if (escala == "c") {
            let f = (temperatura * 1.8) + 32;
            let k = +temperatura + 273.15;
            console.log(`Temperatura em graus Farenheit: ${f.toFixed(3)}`);
            console.log(`Temperatura em Kelvin: ${k.toFixed(3)}`);
        } else if(escala = "f") {
            let c = (temperatura - 32)/ 1.8;
            let k = c + 273.15;
            console.log(`Temperatura em graus Celsius: ${c.toFixed(3)}`);
            console.log(`Temperatura em Kelvin: ${k.toFixed(3)}`);
        } else {
            console.log("Opção indisponível");
        }
        rl.close();
    })
})

