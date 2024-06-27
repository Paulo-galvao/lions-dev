// const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// const numbers = [];

// rl.on('line', (number) => {
//     if(numbers.length < 5) {
//         numbers.push(+number);
        
//     } else {
//         console.log(numbers);
//         rl.close()
//     }    
// });

// rl.question("Digite um número \n" , function(number) {
//     // numbers.push(number);
//     // console.log(n1);
//     if(numbers.length < 5) {
//         numbers.push(+number);
                
//     } else {
//         console.log(numbers);
//         rl.close()
//     }  
    
// });

rl.question("Digite um número: \n" , function(n1) {
    rl.question("Digite outro: \n", (n2) => {
        if(n1 > n2) {
            console.log("O primeiro número digitado é maior!");
            rl.close();
        } else {
            console.log("O segundo número digitado é maior!");
            rl.close();
        }
    })
})