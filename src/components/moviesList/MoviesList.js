import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({movies, nameSearch}) => {
    return (
        <div className="movies">
            {movies.filter(choice => choice.title.toLowerCase().includes(nameSearch.toLowerCase())).map((movie) => <MovieCard movie={movie} key={movie.id} /> )}
        </div>
    )
}

export default MoviesList
