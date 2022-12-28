import React, { useRef } from "react";
import { Card, Form, Button } from "react-bootstrap";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();

    return (
        <>
            <Card className="w-25">
                <Card.Body className="p-3">
                    <h2 className="text-center">Log In</h2>

                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                required
                                ref={emailRef}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                required
                                ref={passwordRef}
                            ></Form.Control>
                        </Form.Group>

                        <Button className="w-100 mt-3">Log In</Button>
                    </Form>

                    <div className="text-center mt-3">Forgot Password?</div>
                </Card.Body>
            </Card>

            <div className="text-center mt-3">
                Don't have an account? Signup
            </div>
        </>
    );
}
