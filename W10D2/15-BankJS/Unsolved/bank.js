var fs = require("fs");

var transaction = {
    total: function () {
        fs.readFile("bank.txt", "utf8", function(err, data) {
            if (err) {
                return console.log(err);
            }

            var totalArr = data.split(", ");
            var totalSum = 0

            totalArr.forEach(function(value) {
                totalSum = totalSum + parseFloat(value);
            });

            console.log("You have " + totalSum.toFixed(2) + " dollars.");
        });
    },
    deposit: function(x) {
        fs.appendFile("bank.txt", ", " + x, function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Deposit added!");
            }
        });
    },
    withdraw: function(x) {
        fs.appendFile("bank.txt", ", -" + x, function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Money withdrawn!");
            }
        });
    },
    lotto: function() {

        //TBD

    },
    print: function() {
        fs.readFile("bank.txt", "utf8", function(err, data) {
            if (err) {
                return console.log(err);
            }

            console.log(data);
        })
    }
}



transaction[process.argv[2]](process.argv[3]);