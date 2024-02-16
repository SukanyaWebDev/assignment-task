import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './index.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loggedIn: false
        };
    }

    handleInputChangeName = (e) => {
        const usernameFor = e.target.value
        localStorage.setItem("userName", usernameFor)
        this.setState({
            username: e.target.value
        });
    };

    handleInputChangePass = (e) => {
        this.setState({
            password: e.target.value
        });
    };



    render() {
        if (this.state.loggedIn) {
            return null; // Or any loading indicator while redirecting
        }

        return (
            <div className="login-container">
                <h2>Login </h2>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleInputChangeName}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleInputChangePass}
                />
                <Link to='/'>
                    <button onClick={this.handleLogin}>Login</button>
                </Link>
            </div>
        );
    }
}

export default Login;
