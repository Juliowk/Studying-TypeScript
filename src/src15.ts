function fsoma(...n: number[]) {
     let s: number = 0;

     for (let en of n) {
          s += en;
     }

     // n.forEach((i) => {
     //      s += i;
     // })

     return s;
}

console.log(fsoma(2, 2, 30, 80, 500, 32));
