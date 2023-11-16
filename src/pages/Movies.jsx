import React from 'react';
import Movie from '../Components/Movie.jsx'
import { movies } from "../movieDummy.js";

export const IMG_URL = "https://image.tmdb.org/t/p/w1280/"

export default function Movies() {
    return(
        <div className="moviePage">
            <div className="movieContainer">
                {movies.results.map((item) => {
                    return(
                        <Movie
                        title={item.title}
                        info={item.overview}
                        poster_path={IMG_URL + item.poster_path}
                        vote_average={item.vote_average}
                        />
                    );
                })}
            </div>
            <Movie/>
        </div>
        
    );
}