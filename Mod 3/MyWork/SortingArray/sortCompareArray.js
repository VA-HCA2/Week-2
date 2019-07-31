// This script get the median number 
"use strict";
let scores = [80, 90, 100, 75, 65, 50, 95];

function displayGrades(scores) {
    var total = 0;

    for (var i = 0; i < scores.length; i++) {
        total += grades[i];
    }
    var avg = total / scores.length;
    return avg;
}

scores.sort(function (a, b) {
    if (a < b) {
        return -1;
    }
    return 1;
});

function getMedian(scores) {

    // Get the median number from an even array 

    if (scores.length % 2 == 0) 
        {
            var med = scores.length / 2;
            let median=(scores[med-1] + scores[med])/2
            return median;
        }

    else
// Get the median number from an odd array 
        var med = Math.floor(scores.length / 2);
        let median=scores[med]
        return median;
}


let medianNumber=getMedian(scores);
console.log("Median Number:"+medianNumber)
 