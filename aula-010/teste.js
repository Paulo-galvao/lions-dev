// const cpf = "08973564978";
// const novoCpf = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4");
// console.log(novoCpf);

function formatarCpf(cpf) {
    return cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4");
}
console.log("Digite seu cpf");

process.stdin.once('data', function(data) {
    console.log(formatarCpf(data.toString().trim()));
    process.exit();
})
