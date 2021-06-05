import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from "./Button";


function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick (!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src = {require('./images/logo.png').default} className="navbar-logo-img" />
                    </Link>

                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                            <Link to="/signup" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign up/Log in
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
