"use strict";
let supplierCode,productNumber,size,supplier;

function getSupplierCode(scode)
{
    let supplier=scode;
    let pos1=supplier.indexOf(":");
    supplierCode=supplier.substring(0,pos1);
    console.log ("Supplier Code:"+supplierCode);
}

function getProductNumber(pNumber)
{   
    let supplier=pNumber;

    let pos1=supplier.indexOf(":");
    supplierCode=supplier.substring(0,pos1);

    let pos2=supplier.lastIndexOf("-");
    productNumber=supplier.substring(pos1+1,pos2);

    console.log("Product Number: "+productNumber);
}

function getSize(size)
{

    let supplier=size;

    let pos1=supplier.indexOf(":");
    supplierCode=supplier.substring(0,pos1);

    let pos2=supplier.lastIndexOf("-");
    productNumber=supplier.substring(pos1+1,pos2);

    size=supplier.substring(pos2+1);  

    if( size=="L")
    {
        size="(L) Supplied by Acme "
    }

    else if (size=="M")
    {
        size="(M) supplied by DI"
    }

    else
    {
        size="12 Supplied by ACE"
    }

console.log("Size: "+size); 

}

getSupplierCode("Acme:123-12");
getProductNumber("Acme:123-12");
getSize("Acme:123-12");




   