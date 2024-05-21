"use strict";
const som = (n) => {
    let s = 0;
    n.forEach((i) => {
        s += i;
    });
    return s;
};
console.log(som([2, 4]));
