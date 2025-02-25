//import { Link, Outlet } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";

function MyNav() {
    return (<>

        <Nav justify variant="tabs">
            <Nav.Item>
                <Nav.Link className="nav-links" href="/groupChat">Group Chat</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="nav-links" href="/manageUsers" >Manage Users</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="nav-links" href="/manageDocuments">Manage Documents</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="nav-links" href="/logout">Logout</Nav.Link>
            </Nav.Item>

        </Nav>
        {/* <nav style={{width:"600px"}}>

            <ul id= "ul" className="nav nav-tabs">
                <li id= "groupChat" className="nav-item">
                    <Link to="" className="nav-link"></Link>
                </li>
                <li id= "manageUsers" className="nav-item">
                    <Link to="/manageUsers" className="nav-link"></Link>
                </li>
                <li id= "manageDocuments" className="nav-item">
                    <Link to="/manageDocuments" className="nav-link"></Link>
                </li>
                <li id= "logout" className="nav-item">
                    <Link to="/logout" className="nav-link"></Link>
                </li>
            </ul>

        </nav> 
        <div>
            <Outlet />
        </div>*/}
    </>);
}
export default MyNav