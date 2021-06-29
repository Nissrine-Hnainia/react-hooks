import React from "react";
import StarRatingComponent from 'react-star-rating-component';



const Filter = (props) => {
  return (
    <div className="header">
      <div>
        <h1>Movie Planet</h1>
      </div>
      <div className="sub-header">
        <div className="searchMovie">
          <input
            onChange={props.handleSearch}
            type="text"
            placeholder="Hook a movie ..."
          />
        </div>
        <div className="movieRate">
          <StarRatingComponent
            name="rate1" 
            onStarClick={props.handleRate}
            emptyStarColor="#e6d1aa"
            starColor="darkgoldenrod"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
