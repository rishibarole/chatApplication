import React from "react";
import { Navigate } from "react-router-dom";

export default class Logout extends React.Component {
    constructor() {
        super();
        localStorage.removeItem("loggedInUser")
        this.state = {
            redirectPage: true
        }
    }

    render() {
        const { redirectPage } = this.state;
        return <div>
            {          

                redirectPage && (
                    <Navigate to="/welcome" />
                )
            }

        </div>
    }
}

