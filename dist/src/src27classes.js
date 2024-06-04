"use strict";
class Conta {
    numero;
    titular;
    saldoConta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número: ${this.numero}`);
    }
    get saldo() {
        return this.saldoConta;
    }
    set saldo(saldoConta) {
        this.saldoConta = saldoConta;
    }
    deposito(valor) {
        this.saldoConta += valor;
    }
    saque(valor) {
        if (valor < 0) {
            console.log(`Valor inválifo`);
        }
        else if (valor <= this.saldoConta) {
            this.saldoConta -= valor;
        }
        else {
            console.log(`Salfo insuficiente`);
        }
    }
}
class ContaPF extends Conta {
    taxaCalculo = 0;
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    CalcularTributo(valor) {
        return valor * this.taxaCalculo;
    }
    info() {
        console.log(`TIPO: PF`);
        super.info();
        console.log(`CPF: ${this.cpf}`);
        console.log(`---------------------------`);
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log(`Valor acima do permitido`);
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 1000) {
            console.log(`Valor de saque acima do permitido`);
        }
        else {
            super.saque(valor);
        }
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
    info() {
        console.log(`TIPO: PJ`);
        super.info();
        console.log(`CNPJ: ${this.cnpj}`);
        console.log(`---------------------------`);
    }
    deposito(valor) {
        if (valor > 10000) {
            console.log(`Valor acima do permitido`);
        }
        else {
            super.deposito(valor);
        }
    }
}
const conta01 = new ContaPF(71027499450, "Júlio");
const conta02 = new ContaPJ(71027499450, "João");
conta01.deposito(1000);
conta01.deposito(1000);
conta02.deposito(10000);
console.log(`Conta1: Saldo - ${conta01.saldo}`);
console.log(`Conta2: Saldo - ${conta02.saldo}`);
