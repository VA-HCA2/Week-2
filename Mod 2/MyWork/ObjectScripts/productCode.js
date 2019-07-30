"use strict";


function parsePartCode(supplier) {
   

    let pos1 = supplier.indexOf(":");
    let parsedSupplierCode = supplier.substring(0, pos1);

    let pos2 = supplier.lastIndexOf("-");
    let parsedProductNumber = supplier.substring(pos1 + 1, pos2);

    let parsedsize = supplier.substring(pos2 + 1);

    let supplierObj =
    {
        supplierCode: parsedSupplierCode,
        productNumber: parsedProductNumber,
        size: parsedsize,

    };
    return supplierObj;

}

var partCode1 = "XYZ:1234-L";
var part1 = parsePartCode(partCode1);
console.log("Supplier: "+part1.supplierCode+" Product Number: "+part1.productNumber+" Size: "+part1.size)