// Herança

class Conta {
     public numero: number;
     public titular: string;

     constructor(titular: string) {
          this.numero = this.gerarNumeroConta();
          this.titular = titular;
     }

     gerarNumeroConta():number {
          return Math.floor(Math.random()*100000)+1;
     }
}

class ContaPF extends Conta {
     cpf: number;

     constructor(cpf:number, titular: string) {
          super(titular);
          this.cpf = cpf;
     }
}

class ContaPJ extends Conta {
     cnpj: number;

     constructor(cnpj:number, titular: string) {
          super(titular);
          this.cnpj = cnpj;
     }
}

const conta01 = new ContaPF(71027499450, "Júlio");
const conta02 = new ContaPJ(71027499450, "João");
console.log(`CPF: ${conta01.cpf} - Numero: ${conta01.numero} - Titular: ${conta01.titular}`);
console.log(`CNPJ: ${conta02.cnpj} - Numero: ${conta02.numero} - Titular: ${conta02.titular}`);
