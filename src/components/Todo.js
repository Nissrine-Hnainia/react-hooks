import React from "react";
import {Form} from "react-bootstrap"

const Todo = ({ todo }) => {
    return (
        <Form style={{width:"40%", margin:"auto"}}>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label={todo.text} />
            </Form.Group>
        </Form>
    );
};

export default Todo;
