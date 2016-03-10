"use strict";

// setup your IIFE (Immediately Invoked Function Expression)
(function () {

    if (document.getElementById("about") != null) {
        console.log("About Page");
    } else if (document.getElementById("projects") != null) {
        console.log("Projects Page");
    } else if (document.getElementById("contact") != null) {
        console.log("Contact Page");
        //declare variables and create a reference to form elements
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        var checkMeOut= document.getElementById("checkMeOut");
        var submitButton = document.getElementById("submitButton");
        submitButton.pre

        // checkbox event listener
        checkMeOut.addEventListener("change", function () {

            if (checkMeOut.checked) {
                console.log("It's checked");
            } else {
                console.log("It's unchecked");
            } // end else
        }); // end addEventListener
        
        submitButton.addEventListener("click", function(event){
            event.preventDefault();
            console.log("Email: " + email.value);
            console.log("Password: " + password.value);
        });
        
        
    } // end else if

    /* Ari's Solution
    
    var filePath = location.pathname;
    filePath = filePath.substring(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.'));
    switch (filePath) {
        case "index":
            console.log("About Page");
            break;
        case "projects":
            console.log("Projects Page");
            break;
        case "contact":
            console.log("Contact Page");
            var checkMeOut;

            checkMeOut = document.getElementById("checkMeOut");
            console.log(checkMeOut);

            checkMeOut.addEventListener("change", function () {

                if (checkMeOut.checked) {
                    console.log("It's checked");
                } else {
                    console.log("It's unchecked");
                } // end else

            }); // end addEventListener
            break;

    }
    
    */




})();

