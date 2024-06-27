const listaHobbies = [];
let resposta = '';

console.log("Me diga seu hobbie ou digite 'sair' se não quiser dizer nada:");
process.stdin.once('data', function(data) {
    if(data.toString().trim() == "sair") {
        process.exit();
    } else {
        listaHobbies.push(data.toString().trim());
        console.log("Me diga outro hobbie, se não quiser falar mais nada, digite 'sair'");
        
        process.stdin.on('data', function(data) {
            resposta = data.toString().trim();

            if(resposta == "sair") {
                console.log("Aqui estão seus hobbies: ");
                listaHobbies.forEach( (hobbie, index) => {
                    console.log(`${index + 1}. ${hobbie}`);
                } )
                process.exit();
            } else {
                console.log("Me diga outro hobbie, se não quiser falar mais nada, digite 'sair'");
                listaHobbies.push(resposta);
            }
        })
    }
})
