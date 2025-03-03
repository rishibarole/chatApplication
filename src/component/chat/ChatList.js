import MyNav from "../app/MyNav";
import { useState } from "react";
import { Toast, Card, Row, Col, Form } from "react-bootstrap";
import LocalStorageHandler from "../constant/LocalStorageHandler";

function ChatList() {
    const [chats, setChatsa] = useState(LocalStorageHandler.getStorageData("chatList"));

    const addChat = (event) => {
        let user = LocalStorageHandler.getStorageData("loggedInUser");
        let message = document.getElementById("message").value;
        let dateVal = new Date();

        let userMessage = {
            dateTime: dateVal.toString(),
            user: user.fullName,
            message: message
        }

        let userMessages = LocalStorageHandler.getStorageData("chatList");
        userMessages.push(userMessage);
        setChatsa(userMessages);

        LocalStorageHandler.setUpdateStorageData("chatList", userMessages);

    }

    return <div align="center">

        <MyNav />


        <Toast style={{ width: "auto" }}>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto" align="center">Group Chat</strong>

            </Toast.Header>
            <Toast.Body align="left" >
                <div style={{ marginBottom: "15px" }}>

                    {
                        chats.map((message, index) => (
                            <p key={index}>
                                <span style={{ marginRight: "5px" }}>{message.dateTime} :</span>
                                <span style={{ marginRight: "5px" }}>{message.user} :</span>
                                <span style={{ marginRight: "5px" }}>{message.message}</span>

                            </p>
                        ))
                    }

                    <table>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </Toast.Body>
        </Toast>
        <Card>
            <Card.Body align="left">
                <Row>
                    <Col xs="auto">
                        <Form.Label column="lg" lg={20}>
                            Large Text
                        </Form.Label>
                    </Col>
                    <Col xs="auto">
                        <Form.Control as="textarea" id="message" name="message" rows={1} />
                    </Col>
                    <Col xs="auto">
                        <span><button className="btn btn-primary m-2" onClick={addChat}>Send</button><button className="btn btn-primary m-2">Refresh</button></span>
                    </Col>
                </Row>

            </Card.Body>
        </Card>
    </div>
}

export default ChatList;