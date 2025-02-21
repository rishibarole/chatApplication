import { Link, Outlet } from 'react-router-dom';

function Nav() {
    return (<>
        <nav style={{width:"600px"}}>

            <ul id= "ul" className="nav nav-tabs">
                <li id= "groupChat" className="nav-item">
                    <Link to="/groupChat" className="nav-link">Group Chat</Link>
                </li>
                <li id= "manageUsers" className="nav-item">
                    <Link to="/manageUsers" className="nav-link">Manage Users</Link>
                </li>
                <li id= "manageDocuments" className="nav-item">
                    <Link to="/manageDocuments" className="nav-link">Manage Documents</Link>
                </li>
                <li id= "logout" className="nav-item">
                    <Link to="/logout" className="nav-link">Logout</Link>
                </li>
            </ul>

        </nav>
        <div>
            <Outlet />
        </div>
    </>);
}
export default Nav