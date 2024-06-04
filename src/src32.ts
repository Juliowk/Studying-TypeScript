namespace Veiculos {
     enum Cores { "Preto", "Branco", "Vermelho", "Amarelo", "Azul", "Prata" };
     abstract class Carro {
          private nome: string;
          private motor: Motores.Motor;
          private cor: string;

          constructor(nome: string, motor: Motores.Motor, cor: Cores) {
               this.nome = nome;
               this.motor = motor;
               this.cor = Cores[cor];
          }



          public Ligar() {
               this.motor.Setligado = true;
          }

          public Desligar() {
               this.motor.Setligado = false;
          }

          public get getCor(): string {
               return this.cor;
          }


          public get getNome(): string {
               return this.nome;
          }


          public get EstaLigado(): string {
               return (this.motor.getLigado ? "Sim" : "Não");
          }


          public get getPotencia(): number {
               return this.motor.getPotencia;
          }
     }

     export class CarroEsportivo extends Carro {
          constructor(nome: string, cor: Cores) {
               super(nome, new Motores.Motor(6, 300, new Motores.Turbo(100)), cor);
          }
     }

     export class CarroPopular extends Carro {
          constructor(nome: string, cor: Cores) {
               super(nome, new Motores.Motor(6, 300), cor);
          }
     }
}

namespace Motores {

     export class Turbo {
          public potencia: number;
          constructor(potencia: number) {
               this.potencia = potencia;
          }

          public get getPotencia(): number {
               return this.potencia;
          }

     }

     export class Motor {
          private ligado: boolean;
          private cilindros: number;
          private potencia: number;

          constructor(potencia: number, cilindros: number, turbo?: Turbo) {
               this.potencia = potencia;
               this.cilindros = cilindros;
               this.ligado = false;
               this.potencia = potencia + (turbo ? turbo.potencia : 0)
          }


          public set Setligado(ligado: boolean) {
               this.ligado = ligado;
          }


          public get getLigado(): boolean {
               return this.ligado;
          }


          public get getPotencia(): number {
               return this.potencia;
          }


          public get getCilindros(): number {
               return this.cilindros;
          }

     }
}

const carro1 = new Veiculos.CarroEsportivo("Civi Type R", 0);
const carro2 = new Veiculos.CarroEsportivo("Kwid", 0);

carro1.Ligar();
console.log(carro1.EstaLigado);
console.log(carro1.getNome);
console.log(carro1.getCor);
console.log(carro1.getPotencia);
