// Functions

function logar(user: string, senha: string): void {
     console.log(`User: ${user}`);
     console.log(`Senha: ${senha}`);
}

// logar("Júlio", "123456");

function somar(n1: number, n2: number): number {
     return n1 + n2;
}

// console.log(somar(2,2));

let resultString:string = somar(21, 34).toString();
console.log(resultString);

