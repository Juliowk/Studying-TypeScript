"use strict";
var Veiculos;
(function (Veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["Preto"] = 0] = "Preto";
        Cores[Cores["Branco"] = 1] = "Branco";
        Cores[Cores["Vermelho"] = 2] = "Vermelho";
        Cores[Cores["Amarelo"] = 3] = "Amarelo";
        Cores[Cores["Azul"] = 4] = "Azul";
        Cores[Cores["Prata"] = 5] = "Prata";
    })(Cores || (Cores = {}));
    ;
    class Carro {
        nome;
        motor;
        cor;
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        Ligar() {
            this.motor.Setligado = true;
        }
        Desligar() {
            this.motor.Setligado = false;
        }
        get getCor() {
            return this.cor;
        }
        get getNome() {
            return this.nome;
        }
        get EstaLigado() {
            return (this.motor.getLigado ? "Sim" : "Não");
        }
        get getPotencia() {
            return this.motor.getPotencia;
        }
    }
    class CarroEsportivo extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(6, 300, new Motores.Turbo(100)), cor);
        }
    }
    Veiculos.CarroEsportivo = CarroEsportivo;
    class CarroPopular extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(6, 300), cor);
        }
    }
    Veiculos.CarroPopular = CarroPopular;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        potencia;
        constructor(potencia) {
            this.potencia = potencia;
        }
        get getPotencia() {
            return this.potencia;
        }
    }
    Motores.Turbo = Turbo;
    class Motor {
        ligado;
        cilindros;
        potencia;
        constructor(potencia, cilindros, turbo) {
            this.potencia = potencia;
            this.cilindros = cilindros;
            this.ligado = false;
            this.potencia = potencia + (turbo ? turbo.potencia : 0);
        }
        set Setligado(ligado) {
            this.ligado = ligado;
        }
        get getLigado() {
            return this.ligado;
        }
        get getPotencia() {
            return this.potencia;
        }
        get getCilindros() {
            return this.cilindros;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const carro1 = new Veiculos.CarroEsportivo("Civi Type R", 0);
const carro2 = new Veiculos.CarroEsportivo("Kwid", 0);
carro1.Ligar();
console.log(carro1.EstaLigado);
console.log(carro1.getNome);
console.log(carro1.getCor);
console.log(carro1.getPotencia);
