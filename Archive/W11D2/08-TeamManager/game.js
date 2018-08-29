var inquirer = require("inquirer");

var teamOffense = 0
var teamDefense = 0


var count = 0;
var playerArray = [];

var score = 0;

function Player(name, position, offense, defense) {
    this.name = name,
    this.position = position,
    this.offense = offense,
    this.defense = defense,
    this.goodGame = function() {
        if (Math.random()*100 < 50) {
            this.offense = this.offense * 1.15
        } else {
            this.defense = this.defense * 1.15
        }
    },
    this.badGame = function() {
        if (Math.random()*100 < 50) {
            this.offense = this.offense / 1.15
        } else {
            this.defense = this.defense / 1.15
        }
    },
    this.printStats = function() {
        console.log("Name: " + this.name);
        console.log("Position: " + this.position);
        console.log("Offense: " + this.offense);
        console.log("Defense: " + this.defense);
        console.log("Type: " + this.type);
        console.log("---------------------");
    }
}

function playGame() {
    var randomOne = (Math.random() * 19) + 1;
    var randomTwo = (Math.random() * 19) + 1;

    playerArray.forEach(function(element) {
        if (element.type == "starter") {
            teamOffense = teamOffense + element.offense;
            teamDefense = teamDefense + element.defense;
        }
    });

    if (randomOne < teamOffense) {
        score++;
        allowSub();
    }

    if (randomTwo > teamDefense) {
        score--;
        allowSub();
    }
}

function allowSub() {
    inquirer.prompt([
        {
            type: "list",
            name: "subselect",
            message: "Choose sub for next round",
            choices: playerArray
        }
    ]).then(function(answers) {

        playerArray.forEach(function(element) {
            element.type = "starter";
        });

        var newSub = playerArray.find(function(player) {
            return player.name == answers.subselect;
        });

        newSub.type = "sub"
    })
}


function register(type) {

    inquirer.prompt([
        {
            name: "name",
            message: "What is your player's name?"
        }, {
            name: "position",
            message: "What is your player's position?"
        }, {
            name: "offense",
            message: "What is your player's offense?"
        }, {
            name: "defense",
            message: "What is your player's defense?"
        }
    ]).then(function(answers) {
        var newPlayer = new Player(
            answers.name,
            answers.position,
            answers.offense,
            answers.defense
        );
        newPlayer.type = type;
        playerArray.push(newPlayer);
        count++;
        initialize();
    });
}

function initialize() {
    if (count < 2) {
        console.log("REGISTER STARTER");

        register("starter");

    } else if (count == 2) {
        console.log("REGISTER SUB");

        register("sub");

    } else {

        playerArray.forEach(function(object) {
            object.printStats();
        });
        playGame();
    }
}

initialize();
