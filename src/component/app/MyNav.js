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
    </>);
}
export default MyNav