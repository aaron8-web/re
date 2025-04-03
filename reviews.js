const apiKey = 'e2faba2d';

// Get the movie title from the URL
const params = new URLSearchParams(window.location.search);
const movieTitle = params.get('title');

console.log("Fetching movie:", movieTitle);
fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`)
  .then(res => res.json())
  .then(data => {
    if (data.Response === "True") {
      document.getElementById("movieTitle").innerText = data.Title;
      document.getElementById("moviePlot").innerText = data.Plot;
      document.getElementById("moviePoster").src = data.Poster;
    } else {
      document.getElementById("movieTitle").innerText = "Movie not found.";
    }
  })
  .catch(err => {
    console.error("Error fetching data: ", err);
  });


