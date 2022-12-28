import React,{useRef} from "react";
import { Card, Form, Button } from "react-bootstrap";

export default function Signup() {
    const emailRef=useRef()
    const passwordRef=useRef()
    const passwordConfirmRef=useRef()


    return (

        <>
            <Card className="w-25">
                <Card.Body className="p-3">
                    <h2 className="text-center">Sign Up</h2>

                    <Form>
                        <Form.Group id="email">
                            <Form.Label className="mt-1">Email</Form.Label>
                            <Form.Control
                                type="email"
                                required
                                ref={emailRef}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label className="mt-1">Password</Form.Label>
                            <Form.Control
                                type="password"
                                required
                                ref={passwordRef}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label className="mt-1">
                                Confirm Password
                            </Form.Label>
                            <Form.Control
                                type="password"
                                required
                                ref={passwordConfirmRef}
                            ></Form.Control>
                        </Form.Group>

                        <Button type="submit" className="w-100 mt-3">
                            Log In
                        </Button>
                    </Form>

                    <div className="text-center mt-3">Forgot Password?</div>
                </Card.Body>
            </Card>

            <div className="text-center mt-3">
                Already have an account? Log In
            </div>
        </>
    );
}
