import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const AddMovie = ({ add }) => {
    const [show, setShow] = useState(false);

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rate, setRate] = useState("")
    const [posterUrl, setPosterUrl] = useState("https://wholefully.com/wp-content/uploads/2017/06/movie-theatre-popcorn-800x1200-720x540.jpg")

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleRate = (e) => {
        setRate(e.target.value)
    }

    const handlePoster = (e) => {
        setPosterUrl(e.target.value)
    }

    const toggle = () => {
        setShow(!show);
    };

    const handleAdd = () => {
        let newMovie = {
            title,
            description,
            rate,
            posterUrl
        }
        add(newMovie)
    }
    return (
        <div className="add">
            <Button variant="primary" style={{padding:"40px"}} onClick={toggle}>
                Add new movie
            </Button>

            <Modal show={show} onHide={toggle}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control //input
                                type="text"
                                placeholder="Enter title"
                                value={title}
                                onChange={(e) => handleTitle(e)}
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicDescription"
                        >
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter description"
                                value={description}
                                onChange={(e) => handleDescription(e)}
                            />
                        </Form.Group>
                        
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicRate"
                        >
                            <Form.Label>Rate</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter rate"
                                value={rate}
                                onChange={(e) => handleRate(e)}
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPosterUrl"
                        >
                            <Form.Label>PosterUrl</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter image"
                                value={posterUrl}
                                onChange={(e) => handlePoster(e)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggle}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleAdd()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddMovie;
