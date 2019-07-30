"use strict";
let bootcampStarts=new Date("July 22, 2019");
let bootcampEnds=new Date("September 6,2019");

let msecPerDay=1000*60*60*24;
let elapsedMilliseconds=bootcampEnds.getTime ()-bootcampStarts.getTime ();
let dayDiff=elapsedMilliseconds/msecPerDay;
let numDays=Math.ceil(dayDiff);

console.log(" The number of days between dates is "+numDays);
