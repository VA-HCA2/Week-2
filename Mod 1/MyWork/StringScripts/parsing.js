"use strict";
let fname, mName, lname;

function parseAndDisplayName(name)
 {
    let pos = name.indexOf(" ");
    fname = name.substring(0, pos);
    lname = name.substring(pos + 1);

if ( pos==-1)
     {
        fname=name;
        console.log("Name:"+fname);
        console.log("Only Name:"+fname);
    }
 // 
   /* {
       let pos = name.indexOf(" ");
       fname = name.substring(0, pos);
       mName = name.substring(pos + 1);
       lname =name.substring(mName+1)
       
       console.log("Name: " + fname + " " +mName+" "+lname);
       console.log("First Name: " + fname);
       console.log("Middle Name: " + mName);
       console.log("Last Name: " + lname);
   
    }  */

else { 
    console.log("Name: " + fname + " " + lname);
    console.log("First Name: " + fname);
    console.log("Last Name: " + lname);
   }
}

parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye")
parseAndDisplayName("Dana Lynn Wyatt")

