"use strict";
let extraPerTopp = 0;
let price=0;

function priceTheDessert() {
    let numScoops = document.getElementById("numScoops").value;

    if (numScoops==1) {
        price += 2.50;
    }

    else if (numScoops==2) {
        price += 3.75;
    }

    else {
        price+= 5.00;
    }

    let extraTopp = document.getElementById("extraTopp").checked;

    if (extraTopp) {
        price += 1.25;
    }

    let extraTopp2 = document.getElementById("extraTopp2").checked;

    if (extraTopp2) {
        price += 0.25;
    }

    let extraTopp3 = document.getElementById("extraTopp3").checked;

    if (extraTopp3) {
        price+= 0.75;
    }

//Total cost in the Price box

    const totalCst=document.getElementById("totalCost");
    totalCst.value= price.toFixed(2);
}
  
// Button 

window.onload = function() {

    const btn = document.getElementById("totalPrice");
    btn.onclick = priceTheDessert;

}



