// POO (Programação Orientada a Objetos)

class Compuatador {
     private id: number;
     public nome: string;
     private ram: number;
     private cpu: number;
     protected ligado: boolean;

     constructor(nome: string, ram: number, cpu: number, ligado: boolean = false) {
          this.nome = nome;
          this.ram = ram;
          this.cpu = cpu;
          this.ligado = ligado;
          this.id = 0;
     }

     info(): void {
          console.log(`
          Nome: ${this.nome}
          Ram: ${this.ram}
          CPU: ${this.cpu}
          Ligado: ${this.ligado ? "Sim" : "Não"}
          `);
     }

     ligar(): void {
          this.ligado = true;
     }

     desligar(): void {
          this.ligado = false;
     }

     upRam(quantidade: number): void {
          if (quantidade >= 0 && quantidade <= 1000)  {
               this.ram = quantidade;
          } else {
               console.log(`A quantidade ${quantidade} não é permitida`);               
          }
     }
}

const computador = new Compuatador("Meu computador", 14, 3, true);
computador.upRam(64);
computador.info();


