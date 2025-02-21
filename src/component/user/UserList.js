import React from "react";
import "./user.css";
import Nav from "../app/Nav";
import { Link } from "react-router-dom";

export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: JSON.parse(localStorage.getItem("users"))
        }
    }

    componentDidMount() {
        this.updateStateObject();
    }

    deleteUser = user => e => {

        console.log(user);

        if (window.confirm("Are you sure?")) {
            console.log(user);

            for (let i = 0; i < this.state.users.length; i++) {
                if (this.state.users[i].fullName === user.fullName) {
                    this.state.users.splice(i, 1);
                    console.log(this.state.users);
                    localStorage.setItem("users", JSON.stringify(this.state.users))
                    this.updateStateObject();
                }
            }

        }
        return;
    };

    updateStateObject = () => {
        this.setState({
            users: JSON.parse(localStorage.getItem("users"))
        })
    };
    render() {
        return <>
        <div align="center">
            <Nav />
            <div align="center" className="userList">
                <table border="1" className="table table-striped table-hover">
                    <thead id="head">
                        <tr>
                            <th>Name</th>
                            <th>User Email Id</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.users ?
                            this.state.users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.fullName}</td>
                                    <td>{user.email}</td>
                                    <td><Link className="btn btn-link" to={`/editUser/${user.fullName}/${user.email}`}>Edit</Link>|<button className="btn btn-link" onClick={this.deleteUser(user)}>Delete</button></td>
                                </tr>
                            ))
                            : ""
                        }

                    </tbody>
                </table>
            </div>
            </div>
        </>
    }
}