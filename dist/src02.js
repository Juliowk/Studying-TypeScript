"use strict";
class Curso {
    canal;
    dono;
    constructor(canal, dono) {
        this.canal = canal;
        this.dono = dono;
    }
}
let curso1 = new Curso("Curso Em Video", "Gustavo Guanabara");
console.log(curso1);
