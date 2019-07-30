"use strict";
let policyStarts=new Date("Sep 01, 2019");
let startTime=policyStarts.getTime();

let msecPerDay=1000*60*60*24;
let elapsedMilliseconds=90*msecPerDay;
let dayDiff=startTime+elapsedMilliseconds;
let endDate=new Date(dayDiff);

console.log(" Policy expires "+endDate.toString());