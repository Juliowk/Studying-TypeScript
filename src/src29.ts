function f_teste<T, U>(valor: T, r: U): U {
     return r;
}

// console.log(f_teste(10, true));

class C_teste<T> {
     public valor: T;
     constructor(valor:T) {
          this.valor = valor;
     }
}


const ct1 = new C_teste<number>(10);
console.log(ct1.valor);
