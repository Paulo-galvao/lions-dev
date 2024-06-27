const numeros = [];

console.log("Digite 15 números: ");
process.stdin.on('data', function(data) {
    numeros.push(+data);
    if(numeros.length >= 15) {
        // console.log(numeros);

        console.log("-----***-----");  
        console.log("laço for:\n")

        for(let i = 0; i < numeros.length; i++ ) {
            console.log(numeros[i]);
        }

        /* for each */
        console.log("-----***-----");
        console.log("for each:\n")

        numeros.forEach(numero => {
            console.log(numero);
        })

        console.log("-----***-----");
        console.log("while:\n")
        let x = 0;
        while(x < numeros.length) {
            console.log(numeros[x]);
            x++;
        }

        console.log("-----***-----");
        console.log("do while:\n")

        let j = 0;
        do{
            console.log(numeros[j]);
            j++;
        } while(j < numeros.length); 

        process.exit();
    }
})  