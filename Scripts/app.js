

// setup your IIFE (Immediately Invoked Function Expression)
(function () {

"use strict";

var myVariable = "hello";
console.log("myVariable " + myVariable);

// var myArray = new Array();

//myArray[0] = "my first Greeting";
//myArray[1] = "my second Greeting";

//console.log(myArray[1]);

var myArray = [
    "Jack G",
    "1 Earth",
    "Barrie",
    40,
    true
];

console.log(myArray.slice(4,1));

for(var index=0; index < myArray.length; indexx++) {
    console.log(myArray[index]);
}


})();

