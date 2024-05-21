// Objetos

let dados = {
     nome: "Júlio",
     idade: 17,
     status: "A",
     ola:() => {
          console.log("Opá, bl?");          
     },
     info: (p:string) => {
          console.log(`Eae ${p}`);
          
     }
}

console.log(typeof dados);
console.log(dados.nome);
dados.ola();
dados.info(dados.nome);