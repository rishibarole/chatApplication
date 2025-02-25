import React from "react";
import MyNav from "../app/MyNav";
import { Link } from "react-router-dom";
import LocalStorageHandler from "../constant/LocalStorageHandler";

export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: LocalStorageHandler.getStorageData("users")
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
                    LocalStorageHandler.setUpdateStorageData("users", this.state.users);                     
                    this.updateStateObject();
                }
            }

        }
        return;
    };

    updateStateObject = () => {
        this.setState({
            users: LocalStorageHandler.getStorageData("users")
        })
    };
    render() {
        return <>
        <div align="center">
            <MyNav />
            <div align="center">
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
                                    <td><Link className="btn btn-link" to={`/editUser/${user.id}`}>Edit</Link>|<button className="btn btn-link" onClick={this.deleteUser(user)}>Delete</button></td>
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