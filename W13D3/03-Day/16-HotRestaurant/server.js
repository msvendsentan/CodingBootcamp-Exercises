// Packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// General variables
var app = express();
var port = 8080;

// Pasted from Trilogy code--data parsing?
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Reservation vars
var reservations = [
    {
        name: "Test Name",
        email: "tester@testingaccount.com",
        phone: "647-457-2818"
    }
];

var waitingList = [];

var reservationCap = 3;

// Server pages
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/index.html", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve.html", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// APIs
app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitingList);
});

app.post("/api/reservations", function(req, res) {
    if (reservations.length < reservationCap) {
        var newReservation = req.body;
        console.log(newReservation);
        reservations.push(newReservation);
        res.json(newReservation);
    } else {
        var newWaitingList = req.body;
        console.log(newWaitingList);
        waitingList.push(newWaitingList);
        res.json(newWaitingList);
    }
});

app.post("/api/delete/reservations", function(req, res) {
    reservations = [];
});

app.post("/api/delete/waitinglist", function(req, res) {
    waitingList = [];
});

app.listen(port, function() {
    console.log("App listening on port " + port);
});