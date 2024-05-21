// Funções anonimas

// const testef = (text:string="..."): void => {
//      console.log(text);     
// }

// testef("heheheh");
// testef();

const som = (n:number[]): number => {
     let s:number = 0;
     n.forEach((i) => {
          s += i;
     })
     return s;
}

console.log(som([2,4]));
