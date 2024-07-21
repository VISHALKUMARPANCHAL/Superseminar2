import React, { useState } from 'react';
import logincss from '../assets/css/login.css';
import Mainlayout from '../layout/mainlayout';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from './util';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const [registerinfo, setRegisterInfo] = useState({
        name: '',
        email: '',
        mobile: '',
        address: '',
        password: '',
        cpassword: '',
        type: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterInfo({ ...registerinfo, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {  type ,name, email, mobile, address, password, cpassword} = registerinfo;
        // console.log(type);
        // if (!name || !email || !mobile || !address || !password || !cpassword) {
        //     return handleError('All fields are required');
        // }
        // const length=Object.keys(registerinfo).length;
        // for (let key in registerinfo) {
        //     if(!key){
        //         return handleError(key+' is required');
        //     }
        // }
        if (password !== cpassword) {
            return handleError('Passwords do not match');
        }
        
        try {
            const url = "http://localhost:8080/auth/register";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-type':'application/json'
                },
                body:JSON.stringify(registerinfo)
            });
            const result = await response.json();
            const {success,message,error}=result;
            console.log(result);
            if(success){
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            }
            else if (error) {
                // const details = error?.details[0].message;
                handleError(error);
            }
            else if (!success) {
                handleError(message);
            }
        } catch (error) {
            handleError(error);
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
                    <div id="container" className="right-panel-active">
                        <div className="form-container sign-up-container">
                            <form className="frm" onSubmit={handleSubmit}>
                                <h1 className="h1" id='titleregi'>Registration</h1>
                                <select name='type' value={registerinfo.type} onChange={handleChange}>
                                    <option value="select">--select--</option>
                                    <option value="Student">Student</option>
                                    <option value="Cordinator">Cordinator</option>
                                    <option value="Admin">Admin</option>
                                </select>
                                <input className="inp" type="text" name="name" value={registerinfo.name} onChange={handleChange} placeholder="Full Name" />
                                <input className="inp" type="email" name="email" value={registerinfo.email} onChange={handleChange} placeholder="Email" />
                                <input className="inp" type="text" name="mobile" value={registerinfo.mobile} onChange={handleChange} placeholder="Mobile No" />
                                <input className="inp" type="text" name="address" value={registerinfo.address} onChange={handleChange} placeholder="Address" />
                                <input className="inp" type="password" name="password" value={registerinfo.password} onChange={handleChange} placeholder="Password" />
                                <input className="inp" type="password" name="cpassword" value={registerinfo.cpassword} onChange={handleChange} placeholder="Confirm Password" />
                                <button type="submit" className="lgbtn">Register</button>
                            </form>
                        </div>
                            <ToastContainer />  
                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-left">
                                    <h1 className="h1 hello">Welcome Back!</h1>
                                    <p className="para">Already have an account? login here</p>
                                    <Link to="/login"><button className="ghost lgbtn" id="signIn">Login</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </div>
        </Mainlayout>
    );
}

export default Register;
