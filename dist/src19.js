"use strict";
class Compuatador {
    id;
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu, ligado = false) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = ligado;
        this.id = 0;
    }
    info() {
        console.log(`
          Nome: ${this.nome}
          Ram: ${this.ram}
          CPU: ${this.cpu}
          Ligado: ${this.ligado ? "Sim" : "Não"}
          `);
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    upRam(quantidade) {
        if (quantidade >= 0 && quantidade <= 1000) {
            this.ram = quantidade;
        }
        else {
            console.log(`A quantidade ${quantidade} não é permitida`);
        }
    }
}
const computador = new Compuatador("Meu computador", 14, 3, true);
computador.upRam(64);
computador.info();
