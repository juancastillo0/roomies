import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "../App";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomname: "",
      user: "",
      password: ""
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange1(event) {
    this.setState({ roomname: event.target.value });
  }

  handleChange2(event) {
    this.setState({ user: event.target.value });
  }

  handleChange3(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/login/${this.state.roomname}/${this.state.user}/`)
      .then(res => res.json())
      .then(data => {
        if (data[0] === undefined) {
          ReactDOM.render(
            <div class="alert alert-danger" role="alert">
              No haces parte del room o el room no existe
            </div>,
            document.getElementById("root")
          );
        } else if (
          data[0].username !== this.state.user ||
          data[0].password !== this.state.password
        ) {
          ReactDOM.render(
            <div class="alert alert-danger" role="alert">
              Usuario o contraseña incorrecta
            </div>,
            document.getElementById("root")
          );
        } else {
          ReactDOM.render(
            <App roomname={this.state.roomname} user={this.state.user} />,
            document.getElementById("root")
          );
        }
      });
  }

  render() {
    return (
      <div id="login-container">
        <div className="container-fluid" id="form-container">
          <div id="login-form-title">
            <h1 id="login-form-title-2">Roomies</h1>
          </div>
          <form>
            <div className="form-group row">
              <label htmlFor="roomName" className="col-sm-3 col-form-label">
                Room-Name
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="roomName"
                  placeholder="Room-Name"
                  value={this.state.roomname}
                  onChange={this.handleChange1}
                ></input>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="username" className="col-sm-3 col-form-label">
                Username
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  value={this.state.user}
                  onChange={this.handleChange2}
                ></input>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputPassword"
                className="col-sm-3 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-9">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange3}
                ></input>
              </div>
            </div>
            <button
              onClick={this.handleSubmit}
              type="submit"
              className="btn btn-primary"
              id="login-button"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
