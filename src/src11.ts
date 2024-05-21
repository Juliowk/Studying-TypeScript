// Type Assertion

let nvalor: number;
let svalor: string;
let uvalor: unknown;

nvalor = 10;
uvalor = 10;
svalor = '20';

// console.log(typeof uvalor);
// console.log(uvalor);

// nvalor = <number>uvalor
// console.log(typeof nvalor);
// console.log(nvalor);

// svalor = <string>uvalor;
// console.log(svalor);
// console.log(typeof svalor);

// nvalor = <number><unknown>svalor;
// console.log(nvalor);
// console.log(typeof nvalor);


// nvalor = Number.parseInt(svalor);
// console.log(nvalor);
// console.log(typeof nvalor);

svalor = nvalor.toString();
console.log(svalor);
console.log(typeof svalor);
