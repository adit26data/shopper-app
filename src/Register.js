import React from 'react';
import { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import User from './user'; // import User class from user.js

const FIRST_NAME_REGEX = /^[a-zA-Z][a-zA-Z0-0-_]{3,23}$/;
const EMAIL_REGEX = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const mongoose = require('mongoose');
function Register() {
    const navigate = useNavigate();
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        const result = FIRST_NAME_REGEX.test(user);
        setValidName(result);
    }, [user]);

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setEmailFocus(true);
        setValidEmail(result);
    }, [email]);

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const newUser = new User({
                firstName: user,
                email: email,
                password: pwd,
            });
            await axios.post('http://localhost:5000/register', {
                firstName: user,
                email: email,
                password: (pwd),
            });
            console.log("Success")
            navigate('/')

        } catch (err) {
            console.error(err);
            console.log('Something went wrong. Please try again.');
        }
    };


    return (
        <div className="wrapper">
            <div className="form-left">
                <h2 className="text-uppercase">Welcome to Shopper!</h2 >
                <p>
                    To enter the world of amazing fashion please fill the sign up form or signup with Google!
                </p>
                <p className="text">
                    <span>Assurance:</span>
                    All you data will be kept secure and safe from outside interference
                </p>
                <div className="form-field">
                    <Link to="/"><input type="submit" className="account" value="Have an Account?" /></Link>
                </div>
            </div >
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <form className="form-right" onSubmit={handleSubmit}>
                <h2 className="text-uppercase">Registration form</h2>
                <div className="login-row row">
                    <div className="col-sm-6 mb-3">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text"
                            id="first_name"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                            className="input-field" />
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            4 to 24 characters must.No spaces<br />
                        </p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            className="input-field"
                            name="email"
                            id="email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            autoComplete='off'
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="emailnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)} />
                        <p id="emailnote" className={emailFocus && !validEmail ? "instructions" : "offscreen"}>
                            13 to 24 characters.<br />
                            Must contain @<br />
                        </p>
                    </div>
                    <div className="login-row row">
                        <div className="col-sm-6 mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                name="pwd"
                                id="password"
                                className="input-field"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                                aria-invalid={validPwd ? "false" : "true"}
                                aria-describedby="pwdnote"
                                onFocus={() => setPwdFocus(true)}
                                onBlur={() => setPwdFocus(false)} />
                            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                8 to 24 characters.<br />
                                Must include uppercase and lowercase letters, a number and a special character.<br />
                            </p>
                        </div>
                        <div className="col-sm-6 mb-3">
                            <label htmlFor="cpwd">Confirm Password</label>
                            <input type="password" name="cpwd" id="cpwd" className="input-field" onChange={(e) => setMatchPwd(e.target.value)}
                                value={matchPwd}
                                required
                                aria-invalid={validMatch ? "false" : "true"}
                                aria-describedby="confirmnote"
                                onFocus={() => setMatchFocus(true)}
                                onBlur={() => setMatchFocus(false)} />
                            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>Must match the first password input field.</p>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="option">I agree to the <a href="#">Terms and Conditions</a>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="form-field">
                        <button
                            type='submit'
                            className="register"
                            name="register"
                            disabled={!validName || !validPwd || !validMatch ? true : false}>Register</button>
                    </div>
                </div>
            </form>
        </div >
    )
}
export default Register