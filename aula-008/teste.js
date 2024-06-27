console.log("Digite o número a ser multiplicado: ");
process.stdin.on('data', function(data) {
    let x = data;    

    if(typeof x != Number) {
        console.log('erro');
    } else {
        console.log(`Tabuada do ${x}: `);
    for(i = 0; i <= 10; i++) {
        console.log(`${x} x ${i} = ${x * i}`);
    }
    process.exit();
    }

    
    
})