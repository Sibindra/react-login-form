import React from "react";
import { Button, Card, Form } from "react-bootstrap";

// bootstarp css import
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function LoginContainer() {
    const [user, setUser] = React.useState({ email: "", password: "" });

    function handleChange(event) {
        setUser((prevUser) => {
            return {
                ...prevUser,
                [event.target.name]: event.target.value,
            };
        });
    }


    function handleSubmit(event){
        event.preventDefault();

        if(user.email==="test@test.com" && user.password==="1234"){
            console.log("match")
        }else{
            console.log("no match")
        }
        // console.log(user);
    }

    return (
        <Card
            style={{
                padding: "1vw",
                height: "40vh",
            }}
        >
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                    />
                </Form.Group>

                <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </Card>
    );
}
