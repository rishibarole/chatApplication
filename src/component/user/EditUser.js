import React from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function EditUser() {

    let { fullName } = useParams();
    let { email } = useParams();
    const navigate = useNavigate();

    console.log(fullName)
    
    let updateUser = (event) => {
        event.preventDefault();
        let userName = event.target.elements.fullName.value;
        let email1 = event.target.elements.email.value;
        let users = JSON.parse(localStorage.getItem("users"));
        if (userName === "" && email1 === "") {
            window.alert("Enter correct values");
        } else {          

            for (let i = 0; i < users.length; i++) {
                let user = users[i];
                if (user.fullName === fullName && user.email === email) {
                    user.fullName = userName;
                    user.email = email1;                    
                    users.splice(i, 1);
                    users.push(user);
                }
            }
            localStorage.setItem("users", JSON.stringify(users));
            navigate("/manageUsers");
        }
    };

    return <div align="center">
        <form action="" method="get" onSubmit={updateUser}>
            <table align="center" >
                <tbody align="center">
                    <tr><td colSpan="2"><h1>Login</h1></td></tr>
                    <tr><td>Full Name</td><td><input type="text" value={fullName} id="fullName" name="fullName"/></td></tr>
                    <tr><td>email</td><td><input type="text" value={email} id="email" name="email"/></td></tr>
                    <tr><td colSpan="2"><button className="btn btn-primary">Update</button></td></tr>
                </tbody>
            </table>
        </form>
    </div>

}
export default EditUser;