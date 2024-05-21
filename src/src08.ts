// Enum

enum dias {
     domingo = 0,
     segunda = 1,
     terça = 2,
     quarta = 3,
     quinta = 4,
     sexta = 5,
     sabado = 6
}

// console.log(dias.domingo);
// console.log(dias['segunda']);
// console.log(dias[1]);

const d = new Date();
// console.log(dias[d.getDay()]);

enum cores {
     branco = "#fff",
     preto = "#000",
     vermelho = "#f00",
     verde = "#0f0",
     azul = "#00f",
}

// console.log(cores.verde);
// console.log(cores["branco"]);

enum tipousuario {
     User = 10,
     Admin = 100,
     Super = 1000
}

// console.log(tipousuario.Super);

let tp: tipousuario = tipousuario.Super;
console.log(tp);

