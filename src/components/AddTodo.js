import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import shortid from 'short-id';

const AddTodo = ({ addTodo }) => {
    const [show, setShow] = useState(false);

    const [input, setInput] = useState('')
    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const add = () => {
        let newTodo = {
            id: shortid.generate(),
            text: input
        }
        addTodo(newTodo)
        setInput('')
    }


    const toggle = () => {
        setShow(!show);
    };
    return (
        <>
            <Button variant="primary" onClick={toggle}>
                Add Todo
            </Button>

            <Modal show={show} onHide={toggle}>
                <Modal.Header closeButton>
                    <Modal.Title>New Todo To Add</Modal.Title>
                </Modal.Header>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Todo text</Form.Label>
                        <Form.Control type="email" 
                        placeholder="Enter something todo.." 
                        value={input}
                        onChange={(e) => handleInput(e)} />
                        
                    </Form.Group>
                </Form>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggle}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={add}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddTodo;
