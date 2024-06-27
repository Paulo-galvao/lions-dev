let votosCandidato1 = 0;
let votosCandidato2 = 0;
let votosCandidato3 = 0;
let votosCandidato4 = 0;
let votosNulos = 0;
let votosBrancos = 0;
let qtdVotos = 0;

console.log("---------------------------------------");
console.log("Por favor, insira o número do seu voto:");
console.log("1-4 para os candidatos");
console.log("5 para voto nulo");
console.log("6 para voto em branco");
console.log("---------------------------------------");


process.stdin.on('data', function(data) {
    
    let voto = +data;

    if(qtdVotos >= 10) {
        console.log(`Quantidade de votos para candidato 1: ${votosCandidato1}`);
        console.log(`Quantidade de votos para candidato 2: ${votosCandidato2}`);
        console.log(`Quantidade de votos para candidato 3: ${votosCandidato3}`);
        console.log(`Quantidade de votos para candidato 4: ${votosCandidato4}`);
        console.log(`Quantidade de votos nulos: ${votosNulos}`);
        console.log(`Quantidade de votos em branco: ${votosBrancos}`);
        process.exit();
    } else {
        console.log("---------------------------------------");
        console.log("Por favor, insira o número do seu voto:");
        console.log("1-4 para os candidatos");
        console.log("5 para voto nulo");
        console.log("6 para voto em branco");
        console.log("---------------------------------------");
        if(voto == 1) {
            votosCandidato1++;
            
        } else if(voto == 2) {
            votosCandidato2++;
            
        } else if(voto == 3) {
            votosCandidato3++;
            
        } else if(voto == 4) {
            votosCandidato4++;
            
        } else if(voto == 5) {
            votosNulos++;
            
        } else if(voto == 6) {
            votosBrancos++;
            
        } else {
            votosBrancos++;
            
        }
        qtdVotos++;
    }   
    
})