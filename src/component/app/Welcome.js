import React from "react";
import { Navigate } from "react-router-dom";

export default class Welcome extends React.Component{

    constructor(props){
        super(props)
        this.state={
            redirectLogin:false,
            redirectRegister:false
        }
    }

     callLogin = () =>{        
        this.setState({
            redirectLogin: true
        }
     )
    };

    callRegister = () =>{
        
        this.setState({
            redirectRegister: true
        })
    };
    render(){  
        const {redirectLogin, redirectRegister}=this.state;      
        return <div>
            {
                redirectLogin &&
                    <Navigate to="/login"/>
               
            }
             {
                redirectRegister &&
                    <Navigate to="/register"/>
               
            }

        <table align='center'>
                <tbody align="center">
                    <tr><td><h1>Welcome to User Modle</h1></td></tr>
                    <tr><td>Existing User</td></tr>
                    <tr><td><button className="btn btn-primary" onClick={this.callLogin}>Login</button></td></tr>
                    <tr><td>New User</td></tr>
                    <tr><td><button className="btn btn-primary" onClick={this.callRegister}>Register</button></td></tr>
                </tbody>
            </table>
    </div>

    }
    
}