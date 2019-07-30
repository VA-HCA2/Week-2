"use strict";
//String 

var product = {
    productId: "123",
    productName: "XYZ",
    unitPrice: 10,
    quantity: 5,
};

var str = JSON.stringify(product);
console.log(str);

// Parse to Jason

let str2 = `{ 
            "productId2" :"123",
            "productName2" :"XYZ",
            "unitPrice2" :10,
            "quantity2":5
        }`;

let product2 = JSON.parse(str2);
console.log(product2.productId2);
console.log(product2.productName2);
console.log(product2);