/* TODO:

  1. Make a reusable function for creating a table body in index.html with the results from your MongoDB query
  Each row should have info for one animal.

  2. Make two AJAX functions that fire when users click the two buttons on index.html.
      a. When the user clicks the Weight button, the table should display the animal data sorted by weight.
      b. When the user clicks the Name button, the table should display the animal data sorted by name.

  Good luck!

  *Hint*: We don't want to keep adding to the table with each button click. We only want to show the new results.
  What can we do to the table to accomplish this?

  *Bonus*: Write code to set an 'active' state on the column header. It should make the color sorted-by column red.
  *Bonus*: Add additional ways to sort (e.g. by class or number of legs)
*/

$("#name-sort").on("click", function() {
  $.getJSON("/name", function(data) {
    displayResults(data);
  });
});

$("#weight-sort").on("click", function() {
  $.getJSON("/weight", function(data) {
    displayResults(data)
  });
});

// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in data (JSON) and creates a table body
function displayResults(data) {

  $("tbody").empty();

  data.forEach(function(element) {
    console.log(element);

    let newRow = $("<tr>");
    newRow
      .append("<td>" + element.name + "</td>")
      .append("<td>" + element.numLegs + "</td>")
      .append("<td>" + element.class + "</td>")
      .append("<td>" + element.weight + "</td>")
      .append("<td>" + element.whatIWouldReallyCallIt + "</td>");
    
    $("tbody").append(newRow);
  });
}

$.getJSON("/all", function(data) {
  // Call our function to generate a table body
  console.log(data);
  displayResults(data);
});
