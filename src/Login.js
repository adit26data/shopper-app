import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Login.css'
import axios from 'axios'
import { useRef, useState, useEffect } from 'react'
import { Link, useNavigate, useHistory } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [email, setEmail] = useState('');
    const [emailFocus, setEmailFocus] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setErrMsg('error!');
    }, [user, email, pwd])
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .fetch('/login', { email: email, password: pwd })
            .then((response) => {
                // Handle the response from the server
                if (response.data.error) {
                    console.error(response.data.error);
                    setErrMsg(response.data.error);
                } else {
                    // Handle success case
                    navigate('/home');
                }
            })
            .catch((error) => {
                console.error(error);
                setErrMsg('Failed to login');
            });
    }
    return (
        <div className="main-login">
            <section className="main-page">
                <div className="login-container container-fluid h-custom">
                    <div className="login-back row d-flex justify-content-center align-items-center h-100">
                        <h1 className="header-main">Shopper!</h1>
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="Sample image" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form action="/" method="POST">
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                    <button type="button" className="btn btn1 btn-floating mx-1">
                                        <i className="fab fa-google"><GoogleIcon /></i>
                                    </button>

                                    <button type="button" className="btn btn2 btn-floating mx-1">
                                        <i className="fab fa-facebook"><FacebookIcon /></i>
                                    </button>

                                    <button type="button" className="btn btn3 btn-floating mx-1">
                                        <i className="fab fa-linkedin-in"><InstagramIcon /></i>
                                    </button>
                                </div>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="or text-center fw-bold mx-3 mb-0">Or</p>
                                </div>
                                <div onSubmit={handleSubmit} className="form-outline mb-4">
                                    <input type="email"
                                        id="email form3Example3"
                                        autoComplete="off"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        className=" form-control form-control-lg"
                                        placeholder="Enter a valid email address"
                                        required
                                        onFocus={() => setEmailFocus(true)}
                                        onBlur={() => setEmailFocus(false)} />
                                    <label htmlFor="email" className="form-label" for="form3Example3">Email address</label>
                                </div>
                                <div onSubmit={handleSubmit} className="form-outline mb-3">
                                    <input type="password"
                                        id="password form3Example4"
                                        className="form-control form-control-lg"
                                        placeholder="Enter password"
                                        onChange={(e) => setPwd(e.target.value)}
                                        value={pwd}
                                        required
                                        onFocus={() => setPwdFocus(true)}
                                        onBlur={() => setPwdFocus(false)} />
                                    <label htmlFor="password" className="form-label" for="form3Example4">Password</label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" for="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <Link to="/home"><button type="submit" className="btn btn-primary btn-lg">Login</button></Link>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/register"><a href=""
                                        className="link-light">Register</a></Link></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div >
                <div
                    className="footer-login d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5">
                    <div className="text-white mb-3 mb-md-0">
                        Copyright © 2020. All rights reserved.
                    </div>
                </div>
            </section >
        </div >
    )
}
export default Login