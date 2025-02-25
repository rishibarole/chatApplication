import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import LocalStorageHandler from "../constant/LocalStorageHandler";
import { Form, Row, Col, Button } from "react-bootstrap";

function EditUser() {

    let {id} = useParams();
    console.log(id)
    const[fullName, setFullname] = useState(null);
    const[email, setEmail] = useState(null);

    useEffect(()=>{
        let users = LocalStorageHandler.getStorageData("users");
        let user = users.filter(usr=> usr.id === Number(id));
        console.log(user[0])
            setFullname(user[0].fullName);
            setEmail(user[0].email);

    },[])
    
    const navigate = useNavigate();

    let updateUser = (event) => {
        event.preventDefault();
        let userName = event.target.fullName.value;
        let email1 = event.target.email.value;
        let users = LocalStorageHandler.getStorageData("users");
        if (userName === "" && email1 === "") {
            window.alert("Enter correct values");
        } else {

            let updatedUsers = users.map((usr)=>{
                if(usr.id === Number(id)){
                    usr.fullName = userName;
                    usr.email = email1;
                    
                }
                return usr;
            });     
            LocalStorageHandler.setUpdateStorageData("users", updatedUsers);
            navigate("/manageUsers");
        }
    };
 
    return <div align="center">
       
        <div><h3>Edit User</h3></div>

        <Form action="/loginSuccessfull" method="get" onSubmit={updateUser}>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Full Name
                </Form.Label>
                <Col sm={6}>
                    <Form.Control type="text" placeholder={fullName} id="fullName" name="fullName" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Email
                </Form.Label>
                <Col sm={6}>
                    <Form.Control type="email" id="email" name="email" value={email} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Update</Button>
                </Col>
            </Form.Group>
        </Form>        
    </div>
}
export default EditUser;