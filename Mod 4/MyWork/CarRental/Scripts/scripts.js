"use strict";

function rentalPrice() {
    let totalDue = 0;

    let numberofDays = document.getElementById("numOfDays").value;

    let rentalCost = 29.99 * numberofDays;

    //Options Charges

    let optionsCharges = 0

    let electronicToll = document.getElementById("electronicToll").checked;
    let tollCharge = 3.95 * numberofDays;

    if (electronicToll) {
        optionsCharges += tollCharge
    }

    let gps = document.getElementById("gps").checked;
    let gpsCharge = 2.95 * numberofDays;

    if (gps) {
        optionsCharges += gpsCharge;
    }

    let roadSide = document.getElementById("roadSide").checked;
    let roadSideCharge = 5.95 * numberofDays;

    if (roadSide) {
        optionsCharges += roadSideCharge;
    }

    //Under 25

    let surcharge = 0;
    if (document.getElementById("Yes").checked) {
        surcharge = rentalCost * 0.30;
    }
    else {
        surcharge = 0;
    }
    
       // Car Options
       let carType = document.getElementById("carType").value;
       let carCost=0;

       if (carType == "ECO") {
           carCost += 20.99
   
       }
       else if (carType == "COMP") {
           carCost += 30.99
   
       }
       else if (carType == "INTER") {
           carCost += 40.99
   
       }
       else {
           carCost += 50.99
       }   

    //Total cost in the Car Rental box

    const totalCst = document.getElementById("price");
    totalCst.value = rentalCost.toFixed(2);

    //*Option pricing
    const totalOptionCharges = document.getElementById("optionsPrice");
    totalOptionCharges.value = optionsCharges.toFixed(2);


    //*Surcharge
    const totalSubCharges = document.getElementById("surcharge");
    totalSubCharges.value = surcharge.toFixed(2);


    //Total Due:
    totalDue = rentalCost + optionsCharges + surcharge+carCost
    const total = document.getElementById("totalCost");
    total.value = totalDue.toFixed(2);


}

// Button 

window.onload = function () {

    const btn = document.getElementById("totalPrice");
    btn.onclick = rentalPrice;

}



