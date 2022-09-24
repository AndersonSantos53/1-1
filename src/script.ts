
  class Cliente {
    private idade: number;
    private nome: string;
    private cpf: number;
   
    constructor (idade:number , nome:string , cpf: number) {
  
      this.idade = idade;
      this.nome = nome;
      this.cpf = cpf;
    }
  
}

const cliente = new Cliente (11,'anderson',1)

console.log(cliente)
  
 
