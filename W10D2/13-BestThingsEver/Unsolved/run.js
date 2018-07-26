var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8", function(err, data) {
    if (err) {
        return console.log(err);
    }

    var parsed = data.split(",");
    for (var i = 0; i < parsed.length; i++) {
        console.log(parsed[i]);
    }
})