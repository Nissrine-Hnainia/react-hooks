import React from 'react'
import {Card} from "react-bootstrap"

const MovieCard = ({movie}) => {
    // const myStyle ={
    //     color: "black",
    //     backgroundColor: "white"
    // }
    return (
        <Card style={{ width: '18rem', marginBottom:"40px" }}> {/* style={myStyle} */}
            <Card.Img variant="top" src={movie.posterUrl} />
            <Card.Body>
                <Card.Title> {movie.title} </Card.Title>
                <Card.Text>
                {movie.description}
                </Card.Text>
                <p> {movie.rate} </p>
            </Card.Body>
        </Card>
    )
}
//default props for posterUrl 
export default MovieCard
