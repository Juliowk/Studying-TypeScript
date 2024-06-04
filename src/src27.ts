interface curso {
     titulo: string;
     descricao: string;
     iniciarCurso?(teste: string): void;
}

interface cursoProg extends curso {
     numAulas: number;
     maxAlunos?: number;
}

interface cursoArtes extends curso {
     numAulas: number;
     maxAlunos?: number;
}

let curso01: cursoProg;
let curso02: cursoProg;
let curso03: cursoArtes;


curso01 = { titulo: "TypeScript", descricao: "Curso de ts", numAulas: 100, maxAlunos: 50 };
curso02 = { titulo: "JavaScript", descricao: "Curso de js", numAulas: 200, maxAlunos: 80 };
curso03 = { titulo: "JavaScript", descricao: "Curso de js", numAulas: 200 };

console.log(curso01);
console.log(curso02);
console.log(curso03);


