"use strict";
function fsoma(...n) {
    let s = 0;
    for (let en of n) {
        s += en;
    }
    return s;
}
console.log(fsoma(2, 2, 30, 80, 500, 32));
