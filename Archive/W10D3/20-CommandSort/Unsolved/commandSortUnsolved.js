// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

var numberArr = process.argv.slice(2);

console.log(numberArr.sort(sortNum));

function sortNum(a, b) {
    return (a - b);
}