import React from "react";
import { Navigate, redirect } from "react-router-dom";
import LocalStorageHandler from "../constant/LocalStorageHandler";
import { Form, Row,Col, Button } from "react-bootstrap";
export default class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectPage: false
        }

    }

    addUser = (event) => {
        event.preventDefault();
        let fullName = event.target.fullName.value;
        let email = event.target.email.value;
        let password = event.target.password.value;
        let confirmPassword = event.target.confirmPassword.value;
        if (fullName === "") {
            window.alert("Enter FullName");
        } else if (email === "") {
            window.alert("Enter email");
        } else if (password === "") {
            window.alert("Enter password");
        } else if (confirmPassword === "") {
            window.alert("Enter Confirm password");
        } else if (password !== confirmPassword) {
            window.alert("Password and confirm Password Miss Match. Please put correct values");
        } else {
            let user = {
                id: Number(new Date()),
                fullName: fullName,
                email: email,
                password: password
            }

            let users =LocalStorageHandler.getStorageData("users");
            users.push(user);
            LocalStorageHandler.setUpdateStorageData("users", users);
            this.redirect();

        }
    }

    redirect = () => {
        this.setState({
            redirectPage: true
        })
    }

    render() {
        const { redirectPage } = this.state;
        return (<div align="center">
            {
                redirectPage && (
                    <Navigate to="/registerSuccessfull" />
                )
            }
            <div className="m-4"><h3>Register</h3></div>
            
            <Form action="/registerSuccessfull" method="get" onSubmit={this.addUser}>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Full Name
                </Form.Label>
                <Col sm={6}>
                    <Form.Control type="text" id="fullName" name="fullName" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Email
                </Form.Label>
                <Col sm={6}>
                    <Form.Control type="email" id="email" name="email"/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                    Password
                </Form.Label>
                <Col sm={6}>
                    <Form.Control type="password" id="password" name="password" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalCHNGPassword">
                <Form.Label column sm={2}>
                Confirm Password
                </Form.Label>
                <Col sm={6}>
                    <Form.Control type="password" id="confirmPassword" name="confirmPassword"/>
                </Col>
            </Form.Group>      

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Register</Button>
                </Col>
            </Form.Group>
        </Form>
          
        </div>);
    }
}
