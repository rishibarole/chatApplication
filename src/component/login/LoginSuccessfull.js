import MyNav from "../app/MyNav";

function LoginSuccessfull() {
    return <div align="center">
        <MyNav />
        <div align="center">
            <div> <h1>Login Successfull</h1> </div>
            <div> Welcome! {JSON.parse(localStorage.getItem("loggedInUser")).email}</div>
        </div>
    </div>
}

export default LoginSuccessfull;