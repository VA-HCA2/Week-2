"use strict";
let scores = [80, 90, 100, 75, 65, 50, 95];

function displayGrades(grades) {
    var total = 0;

    for (var i = 0; i < grades.length; i++) {
        total += grades[i];
    }
    var avg = total / grades.length;
    return avg;
}

let grades = displayGrades(scores)
console.log("Average score " + grades)