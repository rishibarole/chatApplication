import React from "react";
import { Navigate, redirect } from "react-router-dom";
import LocalStorageHandler from "../constant/LocalStorageHandler";
export default class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectPage: false
        }

    }

    addUser = (event) => {
        event.preventDefault();
        let fullName = event.target.elements.fullName.value;
        let email = event.target.elements.email.value;
        let password = event.target.elements.password.value;
        if (fullName === "") {
            window.alert("Enter FullName");
        } else if (email === "") {
            window.alert("Enter email");
        } else if (password === "") {
            window.alert("Enter password");
        } else {
            let user = {
                id: Number(new Date()),
                fullName: fullName,
                email: email,
                password: password
            }

            let users =LocalStorageHandler.getUserData();
            users.push(user);
            LocalStorageHandler.updateUserData("users", users);
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
        return (<div>
            {
                redirectPage && (
                    <Navigate to="/registerSuccessfull" />
                )
            }

            <form action="./RegisterSuccessful.html" method="get" onSubmit={this.addUser}>
                <table align="center">
                    <tbody align="center">
                        <tr><td colSpan="2"><h1>Register</h1></td></tr>
                        <tr><td>Full Name</td><td ><input type="text" id="fullName" name="fullName" /></td></tr>
                        <tr><td>Email</td><td><input type="text" id="email" name="email" /></td></tr>
                        <tr><td>Password</td><td><input type="password" id="password" name="password" /></td></tr>
                        <tr><td>Confirm Password</td><td><input type="password" id="confirmPassword" name="confirmPassword" /></td></tr>
                        <tr><td colSpan="2" ><button className="btn btn-primary">Register</button></td></tr>
                    </tbody>
                </table>
            </form>
        </div>);
    }
}
