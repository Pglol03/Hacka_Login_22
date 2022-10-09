import React from "react";
import "./LoginPage.css"

const LoginPage = () => {
    return(
        <div className = "cover">
            <h1>Login</h1>
            <input type="text" placeholder = "username" />
            <input type="password" placeholder = "password" />
            <div className="LoginButton">
                Login
            </div>
            <p className="Text">Or Login Using</p>
            <div className="LoginDir">
                <div className="Facbook"></div>
                <div className="Google"></div>
            </div>

        </div>

    )
}
export default LoginPage