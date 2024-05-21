// Uso do --target "ESNEXT" ao compilar o arquivo ts

class Curso {
     canal: string;
     dono: string;
     constructor(canal:string, dono:string) {
          this.canal = canal;
          this.dono = dono;
     }
} 

let curso1 = new Curso("Curso Em Video", "Gustavo Guanabara");
console.log(curso1);
