// *********************************************************************************
// TO DO:
// 1. Display all chirps on page load
// 2. Add new chirp to database and prepend to existing chirps
// *********************************************************************************

// When the page loads, grab and display all of our chirps
$(document).ready(function() {
    $.get("/api/all", function(data) {
        console.log(data);
        if (data.length !== 0) {

            for (var i = 0; i < data.length; i++) {
        
              var row = $("<div>");
              row.addClass("chirp");
        
              row.append("<p>" + data[i].author + " chirped.. </p>");
              row.append("<p>" + data[i].chirp + "</p>");
              row.append("<p>At " + moment(data[i].timecreated).format("h:mma on dddd") + "</p>");
        
              $("#chirp-area").prepend(row);
        
            }
        
        }
    });
   


// When user chirps
    $("#submit").on("click", function(event) {
        event.preventDefault();
        let author = $("#author").val().trim();
        let chirp = $("#chirp").val().trim();
        $.post("/api/new", {author: author, chirp: chirp}, function() {
            console.log("testing!");
            $("#author").val("");
            $("#chirp").val("");
            let row = $("<div>");
            row.addClass("chirp");
      
            row.append("<p>" + author + " chirped: </p>");
            row.append("<p>" + chirp + "</p>");

            $("#chirp-area").prepend(row);
        })
    });
});
