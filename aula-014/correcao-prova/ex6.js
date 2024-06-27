let notas = [7.5, 8, 6, 9.5, 5, 8.5, 7.0, 10, 6.5, 9];

//a

let soma = 0;
let media  = 0;

for (let i = 0; i < notas.length; i++) {
    // console.log(notas[i]); 
    soma += notas[i];
}
media = soma/notas.length;

console.log(media);

//b

let maiorNota = 0;
let menorNota = notas[0];

for (let i = 0; i < notas.length; i++) {
    // console.log(notas[i]); 
    if(notas[i] > maiorNota) {
        maiorNota = notas[i];
    }
    if(notas[i] < menorNota) {
        menorNota = notas[i];
    }
}

console.log(maiorNota);
console.log(menorNota);

//c

let acimaMedia = 0;

for (let i = 0; i < notas.length; i++) {
    // console.log(notas[i]); 
    if(notas[i] > media) {
        acimaMedia++;
    }    
}

console.log(acimaMedia);

//d
notas.push(8.0);
console.log(notas);

//e

let abaixoMedia = 0;
for (let i = 0; i < notas.length; i++) {
    // console.log(notas[i]); 
    if(notas[i] < 6) {
        abaixoMedia++;
    }
}
console.log(abaixoMedia);