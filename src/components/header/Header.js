import React from 'react'
import {Navbar, Form, FormControl, Container} from "react-bootstrap"

const Header = ({handleSearch}) => {
    return (
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Pet Shop</Navbar.Brand>
    <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                    onChange={handleSearch}
                />
                {/* <Button variant="outline-success">Search</Button> */}
                </Form>
    </Container>
  </Navbar>
    )
}

export default Header
