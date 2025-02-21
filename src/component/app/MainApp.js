import React from "react";
import Welcome from "../app/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../login/Login";
import LoginSuccessfull from "../login/LoginSuccessfull";
import ChatList from "../chat/ChatList";
import Logout from "../login/Logout";
import UserList from "../user/UserList";
import DocumentList from "../user/DocumentList";
import Register from "../user/Register";
import EditUser from "../user/EditUser";
import RegisterSuccessfull from "../user/RegisterSuccessfull";
import "./app.css"



export default class MainApp extends React.Component {
    render() {
        return <div style={{width:"600px"}}className="m-4">
            <BrowserRouter>
                <Routes>
                    <Route index element={<Welcome />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/loginSuccessfull" element={<LoginSuccessfull />} />
                    <Route path="/groupChat" element={<ChatList />} />
                    <Route path="/manageUsers" element={<UserList />} />
                    <Route path="/manageDocuments" element={<DocumentList />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/register" element={<Register {...this.props} />} />
                    <Route path="/editUser/:fullName/:email" element={<EditUser />} />
                    <Route path="/registerSuccessfull" element={<RegisterSuccessfull />} />
                    <Route path="/welcome" element={<Welcome />} />
                </Routes>
            </BrowserRouter>
        </div >
    }
}