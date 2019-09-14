import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <Router>
        <div id="login-container">
          <div className="container-fluid" id="form-container">
            <div id="login-form-title">
              <h1 id="login-form-title-2">Roomies</h1>
            </div>
            <form>
              <div className="form-group row">
                <label for="roomName" className="col-sm-3 col-form-label">
                  Room-Name
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="roomName"
                    placeholder="Room-Name"
                  ></input>
                </div>
              </div>
              <div className="form-group row">
                <label for="username" className="col-sm-3 col-form-label">
                  Username
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                  ></input>
                </div>
              </div>
              <div className="form-group row">
                <label for="inputPassword" className="col-sm-3 col-form-label">
                  Password
                </label>
                <div className="col-sm-9">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Password"
                  ></input>
                </div>
              </div>
              <Link to="/home">
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="login-button"
                >
                  Login
                </button>
              </Link>
            </form>
          </div>
        </div>
      </Router>
    );
  }
}

export default Login;
