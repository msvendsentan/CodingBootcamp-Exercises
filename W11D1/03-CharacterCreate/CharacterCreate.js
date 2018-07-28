var inquirer = require("inquirer");


function Character(name, profession, gender, age, strength, hp) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hp = hp;
    this.PrintStats = function() {
        console.log("Name: " + this.name);
        console.log("Profession: " + this.profession);
        console.log("Gender: " + this.gender);
        console.log("Age: " + this.age);
        console.log("Strength: " + this.strength);
        console.log("Hit Points: " + this.hp);
    }
    this.IsAlive = function() {
        if (this.hp > 0) {
            console.log(this.name + " is still alive!");
        } else {
            console.log(this.name + " is dead!");
        }
    }
}

var Sarah = new Character("Sarah", "Ranger", "Female", 26, 12, 120);
Sarah.PrintStats();

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your character's name?",
            name: "charname"
        },
        {
            type: "list",
            message: "What is your character's profession?",
            choices: ["Knight", "Ranger", "Mage", "Cleric"],
            name: "profession"
        },
        {
            type: "list",
            message: "What is your character's gender?",
            choices: ["Male", "Female"],
            name: "gender"
        },
        {
            type: "input",
            message: "What is your character's age?",
            name: "age"
        },
        {
            type: "input",
            message: "What is your character's strength?",
            name: "strength"
        },
        {
            type: "input",
            message: "What is your character's HP?",
            name: "hp"
        }
    ])
    .then(function(response) {
        response.charname = new Character(
            response.charname,
            response.profession,
            response.gender,
            response.age,
            response.strength,
            response.hp
        ) 
        console.log("Character created!");
        response.charname.PrintStats();
    })