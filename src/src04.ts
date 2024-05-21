// Union types

let cursos: string[] = ["TypeScript", "JavaScript", "Java"];
cursos.push("C++");

console.log(cursos);

let valores: number[] = [];
valores.push(100);

console.log(valores);

let teste: string | number;
teste = 100;
teste = "Progrmação Orientada a Objetos";

console.log(typeof teste + " - " + teste);

let cursosENotas: (string | number)[] = ["HTML", 10, "CSS", 6.0];
console.log(cursosENotas);

