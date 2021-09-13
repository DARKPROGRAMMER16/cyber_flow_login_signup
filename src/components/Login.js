import React, { Fragment, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { useCookies } from "react-cookie";
import login from '../images/login.svg'

const Login = () => {

    const history = useHistory();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [cookies, setCookie] = useCookies(["user"]);

    const loginUser = async(e) => {
        e.preventDefault();

        const res = await fetch('https://cyberflowrest.herokuapp.com/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password})
        });

        const data = await res.json();
        console.log(data.result.accessToken);
        setCookie("user", data.result.accessToken,{
            path:"/"
        })

        if(!res.status || !data){
            window.alert("invalid credentials");
        }
        else{
            window.alert("login successfull");
            history.push('/');
        }
    }

    return (
        <Fragment>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="row">
                            <div className="col-12 col-lg-10 mx-auto">
                                <div className="row">
                                    <div className="signup-rightside col-12 col-lg-6 text-center">
                                        <figure>
                                            <img src={login} alt="signupimg" className="img-fluid" />
                                        </figure>
                                        <NavLink to='/signup' >Create an Account</NavLink>
                                    </div>
                                    <div className="signup-leftside col-12 col-lg-6">
                                        <div className="login-form">
                                            <h2 className="form-title text-center">Log In</h2>
                                            <form method="POST" className="register-form" id="register-form">
                                                <div className="input-field">
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        name="email" 
                                                        id="email"  
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        placeholder="Enter your email"/>
                                                </div>
                                                <div className="input-field">
                                                    <input 
                                                        type="password" 
                                                        className="form-control" 
                                                        name="password" 
                                                        id="password" 
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)} 
                                                        placeholder="Enter your password"/>
                                                </div>
                                                <input 
                                                    type="submit" 
                                                    name="login" 
                                                    id="login" 
                                                    value="log in"
                                                    className="btn btn-style w-100"
                                                    onClick={loginUser}
                                                />
                                            </form>
                                            <div className="row">
                                                <div className="col-6 mx-auto mt-5">
                                                    <div className="row login-icons">
                                                        <div className="col-4 text-center">
                                                            <i className="fab fa-google-plus-square" id="google"></i>
                                                        </div>
                                                        <div className="col-4 text-center">
                                                        <i className="fab fa-facebook-square" id="facebook"></i>
                                                        </div>
                                                        <div className="col-4 text-center">
                                                            <i className="fab fa-apple"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Login
