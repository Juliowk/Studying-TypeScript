"use strict";
function f_teste(valor, r) {
    return r;
}
class C_teste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
const ct1 = new C_teste(10);
console.log(ct1.valor);
