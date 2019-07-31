"use strict";

let menu = 
[
    [
        { item: "Sausage and Egg Biscuit", price: 3.49 },
        { item: "Waffles and Juice", price: 4.49 },
        { item: "Tacos and Coffee", price: 5.49 }
    ],

    [
    { item: "Rice and Steak", price: 8.49 },
    { item: "Soup and pasta", price: 7.49 },
    { item: "Burger and fries", price: 3.49 },
    { item: "Salad and juice", price: 6.49 }
    ],

    [
    { item: "Veggies and Salad", price: 4.49 },
    { item: "Pizza and Soda", price: 5.49 },
    { item: "Soup and Juice", price: 2.49 },
    { item: "Pasta and Salad", price: 7.49 },
    { item: "Soup", price: 2.49 }
    ]
]

let meal=1

if (meal==0)
{

console.log("Breakfast Menu")
}

else if (meal==1)
{
 console.log("Lunch Menu")   
}

else 
{
    console.log("Dinner Menu")
}

let menuChoice=menu[meal].length;

for (let i = 0; i < menuChoice; i++) {
    console.log(menu[meal][i].item);
}



