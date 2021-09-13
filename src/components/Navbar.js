import React, { Fragment,useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [show, setShow] = useState(false);

  return (
    <Fragment>
        <section className="navbar-bg">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                <NavLink className="navbar-brand" to="/">
                    Cosmic
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setShow(!show)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link"  to="/">
                        Home
                        </NavLink>
                    </li>
                    </ul>
                    <form className="d-flex">
                    <button className="btn btn-style" type="submit">
                        <NavLink className="nav-link" to="/signup">Sign up</NavLink>
                    </button>
                    <button className="btn btn-style btn-style-border" type="submit">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </button>
                    </form>
                </div>
                </div>
            </nav>
        </section>
    </Fragment>
  );
};

export default Navbar;
