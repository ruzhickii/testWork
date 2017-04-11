import React, {Component} from "react";

class Login extends Component {
    render() {
        return (
            <div className="loginMainBlock">
                <div className="loginButton">
                    <a href="#"><i className="fa fa-key"/><span className="loginText">LOGIN</span></a>
                </div>
                <div className="contactButton">
                    <a href="#"><span className="contactText">CONTACT ME</span></a>
                </div>
            </div>
        )
    }
}

export default Login;