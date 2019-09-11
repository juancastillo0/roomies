import React, { Component } from 'react';
import Logo from "../images/logo.png";
import './Navbar.css';

class Navbar extends Component {
    state = {}
    render() {
        return (
            <header>
                <nav className="navbar navbar-fixed-top" id="menubar">
                    <a className="navbar-brand" href="/#">
                        <img src={Logo} className="d-inline-block align-top" alt="" id="logo" />
                        Roomies
                    </a>
                </nav>
            </header>
        );
    }
}

export default Navbar;