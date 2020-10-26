import React from 'react';
import MovieCard from './MovieCard.js';
import './MovieList.css';


const MovieList =(props)=> {
    
    return (
        <div className="movie-ctnr">
            {props.movies.map((movie)=>
            (<MovieCard title={movie.title} rate={movie.rate} description={movie.description} posterUrl={movie.posterUrl}/>))
            }
        </div>
    )
};

export default MovieList;