import { useState } from "react";
import "./app.css";

function Header() {
const[data,setData]= useState(window.location.href);
console.log(data);
    return <div>
        <div style={{ width: "100%", height: "50px", backgroundColor: "gray" }}>
            <div className="headerIcon">
                <div className="displayInline"><a style={{ color: "white" }} href="">logo1</a></div>
                <div className="displayInline"><a style={{ color: "white" }} href="">logo1</a></div>
                <div className="displayInline"><a style={{ color: "white" }} href="/welcome">Home</a></div>
            </div>
            <div className="headerAddress" >
            <div className="displayInline">{data}</div>
            </div>
        </div>
        
    </div>

}

export default Header;