"use strict";
let nums = [6, 7, 4, 8, 9, 34, 2, 3];

function findMaxNum() {
    let max = 0
    for (let i = 0; i < nums.length;i++) {
        if (nums[i] > max) {
            max = nums[i]
        }
    }
    return max;
}

let max=findMaxNum(nums)
console.log("Max number:"+max)

