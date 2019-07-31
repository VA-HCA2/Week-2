// This Script sort Names and Ages in ascending Order

"use strict";
let objs = [
    { name: "Dana", age: 60 },
    { name: "Natalie", age: 35 },
    { name: "Brittanny", age: 33 },
    { name: "Zachary", age: 29 },
];

// Compare if it's a<b return -1

function compareNamesAscending(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    return 1;
}

function compareAgeAscending(a, b) {
    if (a.age < b.age) {
        return -1;
    }
    return 1;
}

objs.sort(compareNamesAscending);

console.log(objs)