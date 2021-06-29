import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { Link } from 'react-router-dom';


const MovieCard = ({id, posterUrl, title, rate, description}) => {

  return (
    <div className="movieCard">
      <Link to={`/movieInfo/${id}`}>
        <div className="moviePoster">
          <img src={posterUrl || "https://northernvirginiamag.com/wp-content/uploads/2020/08/movie-popcorn.jpg"} alt="poster"/>
        </div>
        <div className="movieTitle">
          <h1>{title}</h1>
        </div>
        <div className="movieRate">
          <StarRatingComponent value={rate} starColor="#37b869"/>
        </div>
        <div className="movieDesc">
          <h3>Description</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

// MovieCard.defaultProps = {
//     posterUrl: "https://northernvirginiamag.com/wp-content/uploads/2020/08/movie-popcorn.jpg"
//   }

export default MovieCard;
