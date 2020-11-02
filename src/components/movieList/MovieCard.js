import React from "react";
import StarRatingComponent from "react-star-rating-component";
import './MovieCard.css';
import { Link } from 'react-router-dom';


const MovieCard = (props) => {

  
  return (
    <div className="movieBlock">
      <Link to={`/movieInfo/${props.id}`}>
        <div className="moviePoster">
          <img src={props.posterUrl} alt="poster"/>
        </div>
        <div className="movieTitle">
          <h2>{props.title}</h2>
        </div>
        <div className="movieRate">
          <StarRatingComponent value={props.rate} starColor="darkgoldenrod"/>
        </div>
        <div className="movieDesc">
          <h3>Description</h3>
          <p>{props.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
