// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Instance
var app = express();
var port = 8080;

// Handlebars for templating
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data
var icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2}
];

// Routes
app.get("/icecream/:name", function(req, res) {
    res.render("flavour", icecreams.filter(flavour => {return flavour.name == req.params.name}));

});
// Display the name, price, and awesomeness for that specific ice cream

app.get("/icecreams", function(req, res) {
    res.render("icecreams", icecreams);
});
// Loop over all ice creams and display them all to the user


app.listen(port, function() {
    console.log("Server listening on: http://localhost:" + port);
});