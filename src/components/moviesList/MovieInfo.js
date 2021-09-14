import React from 'react'
import { Card, Button } from 'react-bootstrap'

const MovieInfo = ({movies, match, history}) => {
    const movie = movies.find(el => el.id == match.params.id)
    return (
        <Card style={{ width: '18rem', marginBottom:"40px" }}> 
            <iframe width="650" height="500" src={movie.trailer} title="YouTube video player" />
            <Card.Body>
                <Card.Title> {movie.title} </Card.Title>
                <Card.Text>
                {movie.description}
                </Card.Text>
                <p> {movie.rate} </p>
            </Card.Body>
            <Button onClick={()=> history.goBack()}>go back</Button>
        </Card>
    )
}

export default MovieInfo
