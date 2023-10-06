import React from 'react';
import { movies } from "./movieDummy";
import Movie from "./Components/Movie.jsx";
import "./Components/Movie.css";


function App() {

  // var testUrl = movies.results.map((movie) => `https://image.tmdb.org/t/p/w1280${movie.poster_path}`);
  // console.log(testUrl);
  
  return (
    <div className="moviePage">
      <div className="movieContainer">
            {
              movies.results.map((movie) => {
                var PosterUrl = `https://image.tmdb.org/t/p/w1280${movie.poster_path}`;
                return(
                  <Movie src={PosterUrl} alt={movie.title} v={movie.vote_average} info={movie.overview}/>

                )
              })
            }
      </div>
    </div>
    
  );
}

export default App;
