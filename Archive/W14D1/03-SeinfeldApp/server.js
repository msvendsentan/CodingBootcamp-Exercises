var express = require("express");
var mysql = require("mysql");

var app = express();

var port = 8080;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", 
    password: "password",
    database: "seinfeld_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

app.get("/", function(req, res) {
    
});

app.get("/cast", function(req, res) {
    connection.query("SELECT * FROM actors ORDER BY id ASC", function(err, result) {
        console.log(result);
    });
    res.send("Success!");
});

app.get("/coolness-chart", function(req, res) {
    connection.query("SELECT * FROM actors ORDER BY coolness_points DESC", function(err, result) {
        console.log(result);
    });
    res.send("Success!");
});

app.get("/attitude-chart/:att", function(req, res) {
    var attitude = req.params.att;
    connection.query(
        "SELECT * FROM ACTORS WHERE ?",
        {
            attitude: attitude
        },
        function(err, result) {
            console.log(result);
        }
    );
    res.send("Success!");
});

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
});



app.listen(port, function() {
    console.log("Server listening on: http://localhost:" + port);
});