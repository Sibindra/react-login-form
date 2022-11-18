import React from "react";
import { Button,Card, Form} from "react-bootstrap";

// bootstarp css import
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function LoginContainer() {
    return (
        <Card style={{
            padding:"1vw",
            height:"40vh",
        }}>
            <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
            </Form>
        </Card>
    );
}
