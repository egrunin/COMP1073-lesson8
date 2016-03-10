

// setup your IIFE (Immediately Invoked Function Expression)
(function () {

"use strict";

var Person = {
    "age": 40,
    "name": "Jack",
    "address": "1 Earth",
    "city": "Barrie",
    "province": "Ontario",
    "familyNames": [
        "Alex",
        "Sergei",
        "Igor",
        "Dima"
    ],
    "sayHello":function(){
        console.log(Person.name + "  says hello");
    }
    
}; /* var Person = new Object();  */

// Person.age = 40;

// for(var index = 0; index < Person.length; index ++);

for(var key in Person) {
    console.log(Person[key]);
    if(key === "familyNames") {
        console.log("Family Names:  ");
        console.log("++++++++++++++++++");
        for(var index=0; index < Person.familyNames.length; index++) {
            console.log("    " + Person.familyNames[index]);
        }
    } else {
        console.log(Person[key]);
    }
}

// console.log(Person.age);


/* var myVariable = "hello";
console.log("myVariable " + myVariable);

// var myArray = new Array();

//myArray[0] = "my first Greeting";
//myArray[1] = "my second Greeting";

//console.log(myArray[1]);

var myArray = [
    "Jack G",
    "1 Earth",
    "Barrie",
    "ontario",
    40,
    true
];

console.log(myArray.splice(4, 0, "416-797-8527") + "\n");
console.log('+++++++++++');

myArray[4] = "705-555-5000";

// console.log(myArray.unshift("4167978527") + "\n");
// console.log('+++++++++++');

// console.log(myArray.slice(4,1));

// console.log(myArray.pop());
// console.log(myArray.shift());

for(var index=0; index < myArray.length; indexx++) {
    console.log(myArray[index]);
} */


})();

