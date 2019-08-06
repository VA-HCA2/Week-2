"use strict";

function getZipCode(canadianPostalCode, zipCode)
 {
    let message;
    if(canadianPostalCode.test(zipCode)==true)
    {
        message = zipCode + " is a valid zip code";
    }
    else
    {
        message = zipCode + " is not a valid zip code";
        console.log(canadianPostalCode.test(zipCode));
    }
    return message;
    
}



window.onload = function () {
    let zipCodeInput = document.getElementById("zipCode");
    let zipCodeOutput = document.getElementById("result");
  
    let canadianPostalCode= /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
  
    const btn = document.getElementById("validateZip");
    btn.onclick = function()
    {

        let zipCode = getZipCode(canadianPostalCode, zipCodeInput.value);
        console.log(typeof zipCode);
        zipCodeOutput.value = zipCode;
        
    }

}