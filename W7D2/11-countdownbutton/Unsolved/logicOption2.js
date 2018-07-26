// Initialize Firebase (YOUR OWN APP)
var config = {
  apiKey: "AIzaSyBlVD93rjuOeTK8HQS9ouaL8ASMR8pJl_E",
  authDomain: "utor-coding-bootcamp-sample.firebaseapp.com",
  databaseURL: "https://utor-coding-bootcamp-sample.firebaseio.com",
  projectId: "utor-coding-bootcamp-sample",
  storageBucket: "utor-coding-bootcamp-sample.appspot.com",
  messagingSenderId: "640941872842"
};
firebase.initializeApp(config);

// Set Initial Counter
var initialValue = 100;

var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
firebase.database().ref().on("value", function(snapshot) {




  // Print the initial data to the console.
  console.log(snapshot.val());


  // Change the html to reflect the initial value.
  $("#click-value").text(snapshot.val().clickCount)


  // Change the clickCounter to match the data in the database
  clickCounter = snapshot.val().clickCount;


  // Log the value of the clickCounter
  console.log(clickCounter);


  // Change the HTML Value


  // If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;


  // Alert User and reset the counter


  // Save new value to Firebase
  firebase.database().ref().set({
    clickCount: clickCounter
  });


  // Log the value of clickCounter
  console.log(clickCounter);


});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;


  // Save new value to Firebase
  firebase.database().ref().set({
    clickCount : clickCounter
  });


  // Log the value of clickCounter
  console.log(clickCounter);


  // Change the HTML Values

});
