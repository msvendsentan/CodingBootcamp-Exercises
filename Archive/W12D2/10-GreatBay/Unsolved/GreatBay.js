var fs = require("fs");
var mysql = require("mysql");
var inquirer = require("inquirer");
var choice;
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "greatbay_db"
});

function newBid() {
    var itemlist = [];
    inquirer
        .prompt([
            {
                type: "list",
                message: "Select an item",
                list: itemlist,
                name: "itemselection"
            },
            {
                type: "input",
                message: "What is your bid?",
                name: "bid"
            }
        ]).then(function(answers) {
            //Pull startingbid and currentbid and store to local variables
            //If statement--check that answers.bid is > startingbid && answers.bid is > currentbid
            //If statement success--run below
            console.log("Your bid of $" + answers.bid + " was successful! You are now the highest bidder!");
            connection.query(
                "UPDATE items SET ? WHERE ?",
                [
                    {
                        currentbid: answers.bid
                    },
                    {
                        item: itemselection
                    }
                ],
                function(err, res) {
                    console.log(res.affectedRows + " bid placed!\n");
                }
            );
            connection.end();
            //If statement failure--run below
            console.log("Your bid of $" + answers.bid + " was not high enough. Pleas try again");
            connection.end();
        });
}

function newPost() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Item Name",
                name: "name"
            },
            {
                type: "input",
                message: "Item Type",
                name: "type"
            },
            {
                type: "input",
                message: "Starting Bid",
                name: "startingbid"
            },
        ]).then(function(answers) {
            connection.query(
                "INSERT INTO items SET ?",
                {
                    item: answers.name,
                    type: answers.type,
                    startingbid: answers.startingbid
                },
                function(err, res) {
                    console.log(res.affectedRows + " item inserted!\n");
                }
            );
            console.log("Thank you for posting your item!");
            connection.end();
        });
}

function init() {
    connection.connect(function(err) {
        if (err) throw err;
        var sqlCreate = "CREATE TABLE items (item VARCHAR(255) NON NULL, type VARCHAR(255) NON NULL, startingbid INTEGER(30) NON NULL, currentbid INTEGER(30) NON NULL, id INTEGER(30) AUTO_INCREMENT NON NULL, PRIMARY KEY (id)";
        connection.query(sqlCreate, function(err, result) {
            if (err) throw err;
        });
    });

    inquirer
        .prompt([
            {
                type: "list",
                message: "Would you like to POST or BID?",
                choices: ["POST AN ITEM", "BID ON AN ITEM"],
                name: "choice"
            }
        ]).then(function(answers) {
            console.log("You selected: " + answers.choice);
            if (answers.choice == "POST AN ITEM") {
                newPost();
            } else {
                newBid();
            }
        });
   
}


init();