

// setup your IIFE (Immediately Invoked Function Expression)
(function () {

    "use strict";
    var output = "";
    var firstParagraph = document.getElementById("firstParagraph");

    // Instantiate new xhr object
    var request = new XMLHttpRequest();
    request.open('GET','../person.txt', true);
    request.addEventListener('readystatechange', function(){
        if(request.readyState === 4){
            var Person = {}; /* var Person = new Object();  */

            Person = JSON.parse(request.responseText);
            
            Person.sayHello = function() {
                output += "<br><hr><br>" + Person.name + " says hello";
            }
            
            for(var key in Person) {
    
                // check if key is familyNames array
                if(key === "familyNames") {
                    output += "<br>Family Names:  <br>";
                    output += "<hr><br>";
                    output += "<ul>";
                    for(var index=0; index < Person.familyNames.length; index++) {
                        output += "<li>" + Person.familyNames[index] + "</li>";
                    } // for loop
                    output += "</ul>";
                } // if statemnt
                
                // check if the key is the sayHello Method
                else if (key === "sayHello") {
                    Person.sayHello();
                }// else if
                
                // for all other cases do the following
                else {
                    output += Person[key] + "<br>";
                } // else statemnt
                
            } // for in

            firstParagraph.innerHTML = output;
            
        }
    })

})();


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

