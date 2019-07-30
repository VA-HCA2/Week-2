"use strict";
function printContact(contact)
{
    console.log(contact.name);
    console.log(contact.address);
    console.log(contact.city+","+contact.state+" "+contact.zip);

}

let contact1 = {
    name: "Pursalane Faye",
    address: "121 Main Street",
    city: "Benbrook",
    state: "Texas",
    zip: 76126
};

printContact(contact1)

