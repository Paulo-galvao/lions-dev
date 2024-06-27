let array = [0, 1, 2, 3, 4, 5];

const alunos = [
    {nome: "igor", idade: 21},
    {nome: "felipe", idade: 19},
    {nome: "ana", idade: 17},
    {nome: "pedro", idade: 42}
];

let contador = 0;
alunos.forEach( (aluno) => {
    if( aluno.idade < 18) {
        console.log(`O aluno(a) ${aluno.nome} é menor de idade!`);
        contador++;
    }
})

if(contador == 0) {
    console.log("A turma não tem alunos menores de idade");
} else if (contador == 1) {
    console.log(`A turma tem ${contador} aluno menor de idade`);
} else {
    console.log(`A turma tem ${contador} alunos menores de idade`);
}

// for(let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// array.forEach( function(numero) {
//     console.log(numero);
// });

// let horas = new Array(5).fill(0);
// console.log(horas);