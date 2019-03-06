function getGifs(tvShow) {
    var apiKey = "tLC5wdsRsEW81kHVkoiKffxQvePJDnFc";
    var searchTerm = tvShow;
    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + searchTerm + "&limit=25&offset=1&rating=PG-13&lang=en";

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
            var p = $("<p>");
            p.text("Rated: " + response.data[i].rating);
            var img = $("<img>");
            img.attr("src", response.data[i].images.original.url);
            $("#gif-holder").append(p, img);
        }
    });
}

getGifs("friends");

function makeButtons() {
    var shows = ["friends", "farscape", "x-files", "buffy"];
    // loop through an array of strings
    // for each element in the array 
    for(var i = 0; i < shows.length; i++) {
        // make a new button 
        var btn = $("<button>");
        // and a value of the title of the show 
        btn.text(shows[i]);
        // with a data-attribute of data-title
        btn.attr("data-title", shows[i]);
        // add the class of btn btn-success
        btn.addClass("btn btn-success show-btn");

        // append the new button the #buttons div
        $("#buttons").append(btn);
    }
}
makeButtons();

// listen for the click .show-btn
$(document).on("click", ".show-btn", function(event){
    console.log("clicked on a btn");
    // clear gifs from the previous page 
    $("#gif-holder").empty();

    // get the buttons data-attribute value
     var show = $(this).attr("data-title");
     console.log(show);

    // call the function with that value
    // add new gifs
    getGifs(show);
});
