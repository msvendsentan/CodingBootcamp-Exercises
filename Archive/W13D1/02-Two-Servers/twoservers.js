/*

* Using the previous example as a guide, create an app that has two web servers.
* One that listens on port 7000 and one that listens on port 7500.
* The one listening on port 7000 will always tell the user something good about themselves.
* The one listening on 7500 will always tell the user something bad about themselves.

*/

var http = require("http");

var PORTS = [7000, 7500];

function somethingNice(request, response) {
    response.end("It works! You're a wonderful person");
}

function somethingBad(request, response) {
    response.end("It works! You're overworked.");
}

http.createServer(somethingNice).listen(PORTS[0], function() {
    console.log("Server listening on: http://localhost:" + PORT1);
});

http.createServer(somethingBad).listen(PORTS[1], function() {
    console.log("Server listening on: http://localhost:" + PORT1);
});
