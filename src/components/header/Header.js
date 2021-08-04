import React from 'react'
import {Navbar, Form, FormControl, Button, Container} from "react-bootstrap"

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Movie App</Navbar.Brand>
    <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
                </Form>
    </Container>
  </Navbar>
    )
}

export default Header
