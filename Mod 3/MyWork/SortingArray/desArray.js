// This Script sort Names and Ages in descending Order

"use strict";
let objs = [
    { name: "Dana", age: 60 },
    { name: "Natalie", age: 35 },
    { name: "Brittanny", age: 33 },
    { name: "Zachary", age: 29 },
];

function compareNamesDes(a, b) {
    if (a.name > b.name) {
        return -1;
    }
    return 1;
}


function compareAgeDes(a, b) {
    if (a.age > b.age) {
        return -1;
    }
    return 1;
} 

objs.sort(compareNamesDes);
objs.sort(compareAgeDes);

console.log(objs)