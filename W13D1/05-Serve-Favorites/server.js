var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

var location;

// Start our server
server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:" + PORT);
});

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

  // Capture the url the request is made to
    var path = req.url;

  // Depending on the URL, display a different HTML file.
    switch (path) {

        case "/index.html":
            location = "/index.html";
            return displayPage(path, req, res);

        case "/foods.html":
            location = "/foods.html";
            return displayPage(path, req, res);

        case "/movies.html":
            location = "/movies.html";
            return displayPage(path, req, res);

        case "/css.html":
            location = "/css.html";
            return displayPage(path, req, res);

        default:
            return display404(path, req, res);
    }
}

function displayPage(url, req, res) {
    fs.readFile(__dirname + location, function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

/* function displayRoot(url, req, res) {
    fs.readFile(__dirname + "/index.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayFoods(url, req, res) {
    fs.readFile(__dirname + "/foods.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayMovies(url, req, res) {
    fs.readFile(__dirname + "/movies.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayCss(url, req, res) {
    fs.readFile(__dirname + "/css.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
} */

function display404(url, req, res) {
  var myHTML = "<html>" +
    "<body><h1>404 Not Found </h1>" +
    "<p>The page you were looking for: " + url + " can not be found</p>" +
    "</body></html>";


  res.writeHead(404, { "Content-Type": "text/html" });


  res.end(myHTML);
}
