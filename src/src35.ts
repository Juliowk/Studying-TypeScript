// let av = [10, 20, 30, 40];
// let [aa, bb, cc, dd] = [10, 20, 30, 40];

let obj = {
     cor1: "Verde",
     cor2: "Amarelo",
     cor3: "Azul",
     cor4: "Branco"
}
let { cor1, cor2, cor3, cor4 } = obj;

let [num1, num2 = 0, num3 = 0] = [10];

const Fcores = () => {
     return ["Verde", "Amarelo", "Azul", "Branco"];
}

let [c1, c2, c3, c4] = Fcores();

let texto = "Curso de TypeScript";

let [t1, t2, t3] = texto.split(" ");

console.log(t1);
console.log(t2);
console.log(t3);
// console.log(c4);
