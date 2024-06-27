let cont1 = 0;
let cont2 = 0;
let cont3 = 0;
let cont4 = 0;

console.log("Digite dez número entre 0 e 100, separados por vírgula: ");
process.stdin.once('data', function(data) {
    let resposta = data.toString().trim();
    resposta = resposta.split(",");
    for(let i = 0; i < resposta.length; i++) {
        if(+resposta[i] >= 0 && +resposta[i] <= 25) {
            cont1++;
        }
        if(+resposta[i] >= 26 && +resposta[i] <= 50) {
            cont2++;
        }
        if(+resposta[i] >= 51 && +resposta[i] <= 75) {
            cont3++;
        }
        if(+resposta[i] >= 76 && +resposta[i] <= 100) {
            cont4++;
        }
    }
    console.log(`Números entre 0 e 25: ${cont1}`);
    console.log(`Números entre 26 e 50: ${cont2}`);
    console.log(`Números entre 51 e 75: ${cont3}`);
    console.log(`Números entre 76 e 100: ${cont4}`);
    process.exit();
})