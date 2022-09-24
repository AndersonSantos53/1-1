var Cliente = /** @class */ (function () {
    function Cliente(idade, nome, cpf) {
        this.idade = idade;
        this.nome = nome;
        this.cpf = cpf;
    }
    return Cliente;
}());
var cliente = new Cliente(11, 'anderson', 1);
console.log(cliente);
