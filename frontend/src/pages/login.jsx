import React, { useState } from 'react';
import logincss from '../assets/css/login.css';
import Mainlayout from '../layout/mainlayout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { handleError, handleSuccess } from './util';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
    
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        const copyLoginInfo = { ...loginInfo };
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        // if(!email){
        //     handleError('Email is require');
        // }
        // else if(!password){
        //     handleError('Password is require');
        // }
        try {
            const url = `http://localhost:8080/auth/login`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            const { success, message, jwtToken, name, error } = result;
            console.log(result);

            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);
                setTimeout(() => {
                    navigate('/')
                }, 2000)
            } else if (error) {
                // const details = error?.details[0].message;
                handleError(error);
            } else if (!success) {
                handleError(message);
            }
            console.log(result);
        } catch (err) {
            handleError(err);
        }
    }
    return (
        <Mainlayout>
            <div>
                <head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Login</title>
                    <link rel="stylesheet" href={logincss} />
                </head>
                <body id='loginbody'>
                    <div id="container">
                        <div className="form-container sign-in-container">
                            <form className="frm" onSubmit={handleSubmit}>
                                <h1 className="h1">Login</h1>
                                <input className="inp" type="email" name="email" value={loginInfo.email} onChange={handleChange} placeholder="Email" />
                                <input className="inp" type="password" name="password" value={loginInfo.password} onChange={handleChange} placeholder="Password" />
                               
                                <a id='ancor' href="#">Forgot your password?</a>
                                <button className="lgbtn">login</button>
                            </form>
                        </div>
                        <ToastContainer/>
                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-right">
                                    <h1 className="h1 hello">Hello, Friend!</h1>
                                    <p className="para">New user? create account from here</p>
                                    <Link to="/register"><button className="ghost lgbtn" id="signUp" >Register</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </body >
            </div >
        </Mainlayout>
    );
}

export default Login;