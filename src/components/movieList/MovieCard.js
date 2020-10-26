import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import './MovieCard.css';


const MovieCard = (props) => {

  const [description, setDescription] = useState("")
  return (
    <div className="movieBlock">
      <a href="#">
        <div className="moviePoster">
          <img src={props.posterUrl}/>
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
      </a>
    </div>
  );
};

export default MovieCard;
