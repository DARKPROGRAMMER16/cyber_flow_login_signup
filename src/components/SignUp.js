import React, { Fragment, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import signup from '../images/signup.svg';

const SignUp = () => {

    const history = useHistory();

    const [userData,setUserData] = useState({
        fname:"",
        lname:"",
        title:"",
        email:"",
        phone:"",
        password:"",
    });

    let name,value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUserData({...userData, [name]:value})
    }

    const postData = async(e) => {
        e.preventDefault();

        const { fname, lname, email, phone, password, title } = userData;
        let bodyData =JSON.stringify({
                email:email, password:password, firstName:fname, lastName:lname, mobileNumber:phone, title:title
            })
            console.log(bodyData);
        const res = await fetch('https://cyberflowrest.herokuapp.com/signup',{
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: bodyData
        })

        const data = await res.json();

        if(!res.status || !data){
            window.alert("invalid registrations");
            console.log("invalid registrations");
        }
        else{
            window.alert("registration successfull");
            console.log("registration successfull");

            history.push('/login');

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
                                    <div className="signup-leftside col-12 col-lg-6">
                                        <h2 className="form-title text-center">Sign up</h2>
                                        <form method="POST" className="register-form " id="register-form">
                                            <div className="input-field">
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="fname" 
                                                    id="fname" 
                                                    value={userData.fname}
                                                    onChange={handleInputs} 
                                                    placeholder="Enter your first name"/>
                                            </div>
                                            <div className="input-field">
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="lname" 
                                                    id="lname" 
                                                    value={userData.lname}
                                                    onChange={handleInputs} 
                                                    placeholder="Enter your Last name"/>
                                            </div>
                                            <div className="input-field">
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="email" 
                                                    id="email" 
                                                    value={userData.email}
                                                    onChange={handleInputs} 
                                                    placeholder="Enter your email"/>
                                            </div>
                                            <div className="input-field">
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="phone" 
                                                    id="phone" 
                                                    value={userData.phone}
                                                    onChange={handleInputs} 
                                                    placeholder="Enter your phone"/>
                                            </div>
                                            
                                            <div className="input-field">
                                                <input 
                                                    type="password" 
                                                    className="form-control" 
                                                    name="password" 
                                                    id="password" 
                                                    value={userData.password}
                                                    onChange={handleInputs} 
                                                    placeholder="Enter your password"/>
                                            </div>
                                            <div className="input-field">
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="title" 
                                                    id="title" 
                                                    value={userData.title}
                                                    onChange={handleInputs} 
                                                    placeholder="Enter your title (Mr, Mrs, Ms)"/>
                                            </div>
                                            <input 
                                                type="submit" 
                                                name="signup" 
                                                id="signup" 
                                                value="register"
                                                className="btn btn-style w-100"
                                                onClick={postData}
                                            />
                                        </form>
                                    </div>
                                    <div className="signup-rightside col-12 col-lg-6 text-center">
                                        <figure>
                                            <img src={signup} alt="signupimg" className="img-fluid" />
                                        </figure>
                                        <NavLink to='/login' >I am already registered</NavLink>
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

export default SignUp
