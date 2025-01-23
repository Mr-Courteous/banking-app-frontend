import React, { useState } from 'react';
import Hamburger from 'hamburger-react';

function Header() {

    const [isOpen, setOpen] = useState(false)

    return (
        <>

            <div className="header">

                <img className="logo" src="images/first-bank-nigeria-icon-2048x2048-l0brwxy1.png" alt="" />



                <div className="hamb">
                    <Hamburger className="ham" toggled={isOpen} toggle={setOpen} />


                </div>





                <div className="collapse navbar-collapse" id="navbarContent">

                    <ul className="navbar">

                        <li className="nav-item">
                            <a className="nav-link active" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/register" >Register</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/services">Services</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="/Login">Login</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li> */}

                    </ul>




                </div>

            </div>
            <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-list">
                    <li className="mobile-nav-item">
                        <a className="mobile-nav-link" href="/">Home</a>
                    </li>
                    <li className="mobile-nav-item">
                        <a className="mobile-nav-link" href="/register">Register</a>
                    </li>
                    {/* <li className="mobile-nav-item">
                        <a className="mobile-nav-link" href="/services">Services</a>
                    </li> */}
                    <li className="mobile-nav-item">
                        <a className="mobile-nav-link" href="/login">Login</a>
                    </li>
                    {/* <li className="mobile-nav-item">
                        <a className="mobile-nav-link" href="/contact">Contact</a>
                    </li> */}
                </ul>
            </div>

        </>
    )
}

export default Header;