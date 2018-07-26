// process.argv will print out any command line arguments.
console.log(process.argv);

if (process.argv[2] == process.argv[3]) {
    console.log("They're the same");
} else {
    console.log("They're different");
}

console.log("Hello", process.argv[2]);
process.argv[2] = "World";
console.log("Hello", process.argv[2]);