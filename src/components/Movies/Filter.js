import React from "react";
import { Navbar, Container, Form, FormControl } from "react-bootstrap";
import ReactStars from "react-stars";

const Filter = ({handleName, handleRate}) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Movie APP</Navbar.Brand>
                <ReactStars 
                count={5} 
                size={24} 
                color2={"white"}
                onChange={handleRate}
                />
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        onChange={(e) => handleName(e)}
                        className="me-2"
                        aria-label="Search"
                    />
                </Form>
            </Container>
        </Navbar>
    );
};

export default Filter;
