import Nav from "../app/Nav";
import { useState } from "react";

function ChatList() {
    const [chats, setChatsa] = useState((localStorage.getItem("chatList") ? JSON.parse(localStorage.getItem("chatList")) : []));

    const addChat = (event) => {
        let user = JSON.parse(localStorage.getItem("loggedInUser"));
        let message = document.getElementById("message").value;
        let dateVal = new Date();

        let userMessage = {
            dateTime: dateVal.toString(),
            user: user.fullName,
            message: message
        }

        let userMessages = localStorage.getItem("chatList") ? JSON.parse(localStorage.getItem("chatList")) : [];
        userMessages.push(userMessage);
        setChatsa(userMessages);

        localStorage.setItem("chatList", JSON.stringify(userMessages));

    }

    return <div align="center" style={{ width: "500px" }}>

        <Nav />
        <div>Group Chat</div>

        <div align="left">
            <div style={{ width: "300px", marginBottom: "15px" }}>

                {
                    chats.map((message, index) => (
                        <p>
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
            <div>
                <span>Anne Hunter</span> <span><textarea id="message" name="message" style={{ height: "30px" }}></textarea></span>
                <span><button className="btn btn-primary" onClick={addChat}>Send</button><button className="btn btn-primary">Refresh</button></span>
            </div>
        </div>
    </div>
}

export default ChatList;