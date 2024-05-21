"use strict";
const soma = (n1 = 0, n2 = 0) => {
    return n1 + n2;
};
const novoUser = (user, pass, nome) => {
    const dados = { user, pass, nome };
    if (dados.nome)
        console.log(`User: ${dados.user} - Pass: ${dados.pass} - Nome: ${dados.nome}`);
    else
        console.log(`User: ${dados.user} - Pass: ${dados.pass}`);
};
novoUser("Jui", "123456", "Júlio");
