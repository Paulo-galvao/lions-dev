
console.log("Qual o seu nome?");
process.stdin.once('data',  function(data) {
    let nome = data.toString().trim();

    console.log("Qual a sua idade?");
    process.stdin.once('data',  function(data) {
        let idade = +data;

        console.log("Qual curso frequenta?");
        process.stdin.once('data',  function(data) {
            let curso = data.toString().trim();
            const aluno = {
                nome: nome,
                idade: idade,
                curso: curso,
            }
            console.log(aluno);
            process.exit();
        }) 

    }) 

}) 