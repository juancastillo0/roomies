import React, { Component } from "react";
import Logo from "../images/logo.png";
import Avatar from "../images/avatar.png";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.user
    };
  }
  render() {
    return (
      <nav className="navbar fixed-top" id="menubar">
        <a className="navbar-brand" href="/#" id="navbar">
          <img
            src={Logo}
            className="d-inline-block align-top"
            alt="navbarlogo"
            id="logo"
          />
          Roomies
        </a>
        <div className="navbar-text" id="username-container">
          <div className="row">
            <div className="col-auto">
              <img src={Avatar} alt="" id="avatar" />
            </div>
            <div className="col-auto">
              <h2 id="username">{this.state.username}</h2>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
