"use strict";
const months=["January","February","March","April","June","July",
             "August", "September","October","November","December"];

const days=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday","Sunday"]       
let d= new Date();
let monthName= months[d.getMonth()]
let dayName= days[d.getDay()]
console.log(d.getDate()+"-"+monthName+"-"+d.getFullYear()+"("+dayName+")");