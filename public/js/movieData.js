$(function() {
    $("#button").click(function(){
        var titleSubmitted = $("#titleField").val();
        getMovieData(titleSubmitted);
    })
})

function getMovieData(title) {
    $.ajax("http://www.omdbapi.com/?t=" + title).done(function(movie){
        if(movie.Response == 'False') {
            $("#title").text("No Movie Found");
            $("#rating").text("");
            $("#poster").html("");
            $("#noImgText").text("No Image");
            $("#released").text("");
            $("#actors").text("");
            $("#plot").text("");
        }
        else {
            $("#title").text(movie.Title);
            $("#rating").text("Rated " + movie.Rated);
            $("#poster").html('<img src="' + movie.Poster + '" alt="Poster">');
            $("#noImgText").text("");
            $("#released").text("Released on " + movie.Released);
            $("#actors").text("Actors: " + movie.Actors);
            $("#plot").text("Plot: " + movie.Plot);
        }
    })
}