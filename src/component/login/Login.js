import React from "react";
import { Navigate } from "react-router-dom";
import { Form, Row,Col, Button } from "react-bootstrap";

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            redirectPage: false
        }
    }

    validateUser = (event) => {
        event.preventDefault();
        let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
        let emailVal = event.target.email.value;
        let userFound = false;
        console.log("iterate Users", users);
        for (let user of users) {

            if (user.email === event.target.email.value && user.password === event.target.password.value) {
                userFound = true;
                localStorage.setItem("loggedInUser", JSON.stringify(user));
                this.redirect();
            }
        }
        if (userFound === false) {
            window.alert("User not registered with application!");
        }

    };

    redirect = () => {
        this.setState({
            redirectPage: true
        })
    }

    render() {
        const { redirectPage } = this.state;
        return <div align="center">
            {
                redirectPage && (
                    <Navigate to="/loginSuccessfull" />
                )
            }
            <div className="m-4"><h3>Login</h3></div>
            <Form action="/loginSuccessfull" method="get" onSubmit={this.validateUser}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="email" id="email" name="email" placeholder="Email" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="password" id="password" name="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">Login</Button>
                    </Col>
                </Form.Group>
            </Form>
           
        </div>
    }
}

