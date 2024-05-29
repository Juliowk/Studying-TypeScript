// POO (Programação Orientada a Objetos)

class Compuatador1 {
     nome: string = "0";
     ram: number = 0;
     cpu: number = 0;
     ligado: boolean = false;
}

const meuComputador = new Compuatador1();
meuComputador.nome = "Meu computador";
console.log(meuComputador.nome);
