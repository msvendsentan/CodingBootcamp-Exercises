
if (process.argv[4]) {

    var operator = process.argv[2];
    var firstNumber = parseFloat(process.argv[3]);
    var secondNumber = parseFloat(process.argv[4]);
    
/*     switch (operator) {
        case "add":
            console.log(firstNumber + secondNumber);
            break;
        case "subtract":
            console.log(firstNumber - secondNumber);
            break;
        case "multiply":
            console.log(firstNumber * secondNumber);
            break;
        case "divide":
            console.log(firstNumber / secondNumber);
            break;
        case "remainder":
            console.log(firstNumber % secondNumber);
            break;
        case "exp":
            console.log(Math.pow(firstNumber, secondNumber));
    } */

    var mathVar = {
        add: function(x, y) { return x + y },
        subtract: function(x, y) { return x - y },
        multiply: function(x, y) { return x * y },
        divide: function(x, y) { return x / y },
        remainder: function(x, y) { return x % y },
        exp: function(x, y) { return Math.pow(x, y) }
    }

    console.log(mathVar[operator](firstNumber, secondNumber));

} else {

    var rightSide = process.argv[3].substr(process.argv[3].indexOf("=") + 1);
    var subtractor = process.argv[3].substr(process.argv[3].indexOf("+") + 1, process.argv[3].indexOf("=") - process.argv[3].indexOf("+") - 1);
    var divider = process.argv[3].substr(0,process.argv[3].indexOf("x"));
    console.log(rightSide);
    console.log(subtractor);
    console.log(divider);
    console.log((rightSide - subtractor) / divider);




/*     var mathVar = {
        "+": function(x, y) { return x + y },
        "-": function(x, y) { return x - y }
    } */
}
