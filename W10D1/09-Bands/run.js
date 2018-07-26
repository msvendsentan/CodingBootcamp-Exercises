var pull = require("./bands.js");

if (process.argv[2]) {
    var style = process.argv[2];
    console.log("A " + style + " band is " + pull.bands[style]);
} else {
    console.log("A punk band is " + pull.bands.punk);
    console.log("A rap band is " + pull.bands.rap);
    console.log("A classic band is " + pull.bands.classic);
}