// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

var inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "username"
        },
        {
            type: "password",
            message: "Does your password match the secret password?",
            name: "password"
        },
        {
            type: "list",
            message: "Choose from these potato chip brands.",
            choices: ["Lay's", "Doritos", "Miss Vickies", "Ruffles", "Pringles"],
            name: "chips"
        },
        {
            type: "checkbox",
            message: "What's your favourite flavour?",
            choices: ["Ketchup", "Barbecue", "All Dressed", "Sour Cream & Onion", "Dill Pickle", "Salt & Vinegar", "Original"],
            name: "flavours"
        },
        {
            type: "confirm",
            message: "Are you sure about your selections?",
            name: "confirm",
            default: true
        }
    ])
    .then(function(inquirerResponse) {
        if (inquirerResponse.confirm && inquirerResponse.password == "1234") {
            console.log(inquirerResponse.username + ", you had the right password. Here's what you said:");
            console.log("Your password was: " + inquirerResponse.password);
            console.log("Your chip selection was: " + inquirerResponse.chips);
            console.log("Your flavour selection was: " + inquirerResponse.flavours);
        } else {
            console.log("We're sorry. Your password didn't match, or you didn't confirm.");
        }
    })
