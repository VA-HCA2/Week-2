"use strict";
var codes=[ "K1A 0B1", "ABC 123","B3K 5X5","76126","K7H 1A6","B0J 1N0" ];
let canadianPostalCode= /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

function getZipCode(zipCode)
 {
    let message;
    if(canadianPostalCode.test(zipCode)==true)
    {
        message = zipCode + " is a valid zip code";
    }
    else
    {
        message = zipCode + " is not a valid zip code";
    }
    return message;
    
}



window.onload = function () {
    let zipCodeOutput = document.getElementById("result")
    let zipCodeInput = document.getElementById("zipCode")
    
    const btn = document.getElementById("zipCode");
    btn.onclick = function()
    {

        zipCode = getZipCode(zipCodeInput.value)

        zipCodeOutput.value = zipCode;
        
    }

}