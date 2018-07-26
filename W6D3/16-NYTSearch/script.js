//Declare variables

var apiKey = "9930b0863493422b8074ee056f1d4236";
var queryURL;

//Placeholders for user inputs (to be joined at the end)
var searchTerm;
var pageNumber;
var nArticles; //defunct, no longer useing
var startYear;
var endYear;

//https://api.nytimes.com/svc/search/v2/articlesearch.json?trump&apikey=9930b0863493422b8074ee056f1d4236




//We need each search box to have an ID matching the following:

$("#form_submit").on("click", function(event) {
    event.preventDefault();
    searchTerm = $("#search_term").val();
    nArticles = $("#n_articles").val();  //defunct, no longer using
    startYear = $("#start_year").val();
    endYear = $("#end_year").val();
    queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=" + apiKey + "&q=" + searchTerm;
    console.log(searchTerm);
    console.log(queryURL);
    $.ajax({
		url: queryURL,
  	    method: "GET"
	}).then(function(response) {

        //code here prints responses to #results_window

        for (var i = 0; i < response.response.docs.length; i++) {
            var webURL = response.response.docs[i].web_url;
            var title = response.response.docs[i].headline.main;
            var snippet = response.response.docs[i].snippet;
            var newDiv = $("<div>")
            var newTitle = $("<a>").attr("href", webURL).html(title);
            var newDescrip = $("<p>").html(snippet);
            newDiv.append(newTitle).append(newDescrip);
            $("#results_window").prepend(newDiv);

        }

      
        

	});
  
});