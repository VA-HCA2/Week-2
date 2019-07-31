"use strict";
let lunch=[ { item: "Steak fajitas", price: 9.95},
            { item: "Chips and Guacamole", price: 5.25},
            { item: "Sweet tea", price: 2.79}
];


function displayMeal(lunch) {
    let total = 0;

    for (let i = 0; i < lunch.length; i++) {   
        total+=lunch[i].price 
    }
    let bill = total*0.08 +(1.18*total)
    return bill;
}

let  totalBill= displayMeal(lunch)
console.log("Total Bill $" +totalBill.toFixed(2))
