import React from "react";
import MovieCard from "./MovieCard.js";

const MovieList = (props) => {
  return (
    <div className="movieList">
      {props.movies.map((movie) => (
        <MovieCard
          title={movie.title}
          id={movie.id}
          rate={movie.rate}
          description={movie.description}
          posterUrl={movie.posterUrl}
          trailer={movie.trailer}
        />
      ))}
    </div>
  );
};

export default MovieList;
