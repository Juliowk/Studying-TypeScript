const soma = (n1: number = 0, n2: number = 0): number => {
     return n1 + n2
}

// console.log(soma(20, 20));

const novoUser = (user: string, pass: string, nome?: string): void => {
     const dados = { user, pass, nome };
     if (dados.nome)
          console.log(`User: ${dados.user} - Pass: ${dados.pass} - Nome: ${dados.nome}`);
     else
          console.log(`User: ${dados.user} - Pass: ${dados.pass}`);
}

novoUser("Jui", "123456", "Júlio");