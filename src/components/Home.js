import React, { Fragment, useEffect } from 'react';
import { useCookies } from "react-cookie";
import { useHistory } from 'react-router-dom';

const Home = () => {

    const [cookies, setCookie] = useCookies();
    const history = useHistory();

    useEffect(() => {
        if(!cookies.user){
            window.alert("login first")
            history.push('/login');
        }
    }, [])


    return (
        <Fragment>
            <div className="home-page text-center">
                <p className="main-hero-para2">Welcome</p>
                <h1 className="main-heading">We are the MERN developers</h1>
            </div>
        </Fragment>
    )
}

export default Home
