import React from "react";
import {Card} from "react-bootstrap"

const MovieCard = ({ movie }) => {
    return (
        <Card style={{ width: "18rem", marginBottom:"30px" }}>
            <Card.Img variant="top" src={movie.posterUrl} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    {movie.description}
                </Card.Text>
                <Card.Text>
                    {movie.rate}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default MovieCard;
