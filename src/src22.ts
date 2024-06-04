// // Herança

// class Conta {
//      protected numero: number;
//      protected titular: string;
//      private saldoConta: number

//      constructor(titular: string) {
//           this.numero = this.gerarNumeroConta();
//           this.titular = titular;
//           this.saldoConta = 0;
//      }

//      private gerarNumeroConta(): number {
//           return Math.floor(Math.random() * 100000) + 1;
//      }

//      protected info() {
//           console.log(`Titular: ${this.titular}`);
//           console.log(`Número: ${this.numero}`);
//      }

//      public saldo(): number {
//           return this.saldoConta;
//      }

//      protected deposito(valor: number): void {
//           this.saldoConta += valor;
//      }

//      protected saque(valor: number) {
//           if (valor <= this.saldoConta) {
//                this.saldoConta -= valor;
//           } else {
//                console.log(`Salfo insuficiente`);
//           }
//      }
// }

// class ContaPF extends Conta {
//      cpf: number;

//      constructor(cpf: number, titular: string) {
//           super(titular);
//           this.cpf = cpf;
//      }

//      info() {
//           console.log(`TIPO: PF`);
//           super.info();
//           console.log(`CPF: ${this.cpf}`);
//           console.log(`---------------------------`);
//      }

//      public deposito(valor: number): void {
//           if (valor > 1000) {
//                console.log(`Valor acima do permitido`);               
//           } else {
//                super.deposito(valor);
//           }
//      }
// }

// class ContaPJ extends Conta {
//      cnpj: number;

//      constructor(cnpj: number, titular: string) {
//           super(titular);
//           this.cnpj = cnpj;
//      }

//      info() {
//           console.log(`TIPO: PJ`);
//           super.info();
//           console.log(`CNPJ: ${this.cnpj}`);
//           console.log(`---------------------------`);
//      }

//      public deposito(valor: number): void {
//           if (valor > 10000) {
//                console.log(`Valor acima do permitido`);               
//           } else {
//                super.deposito(valor);
//           }
//      }
// }

// const conta01 = new ContaPF(71027499450, "Júlio");
// const conta02 = new ContaPJ(71027499450, "João");

// // conta01.info();
// // conta02.info();

// conta01.deposito(1000);
// conta02.deposito(10000);
// console.log(`Conta1: Saldo - ${conta01.saldo()}`);
// console.log(`Conta2: Saldo - ${conta02.saldo()}`);