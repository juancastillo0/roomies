import React, { Component } from "react";
import Home from "../images/home.png";
import Financial from "../images/financial.png";
import Todo from "../images/todo.png";
import MenuTodos from "./MenuTodos";
import "./Menu.css";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomname: this.props.roomname
    };
  }

  render() {
    return (
      <div id="menu-container">
        <div className="row">
          <div className="col-4">
            <div className="list-group" id="list-tab" role="tablist">
              <a
                className="list-group-item list-group-item-action active"
                id="list-home-list"
                data-toggle="list"
                href="#home"
                role="tab"
                aria-controls="home"
              >
                <div className="row">
                  <div className="col-2">
                    <img src={Home} className="" alt="" id="home-icon" />
                  </div>
                  <div className="col">Home</div>
                </div>
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="list-home-list"
                data-toggle="list"
                href="#filter-financial"
                role="tab"
                aria-controls="home"
              >
                <div className="row">
                  <div className="col-2">
                    <img src={Financial} alt="" id="home-icon" />
                  </div>
                  <div className="col">Finances</div>
                </div>
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="list-home-list"
                data-toggle="list"
                href="#filter-todo"
                role="tab"
                aria-controls="home"
              >
                <div className="row">
                  <div className="col-2">
                    <img src={Todo} className="" alt="" id="home-icon" />
                  </div>
                  <div className="col">Todo's</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div id="Todosbrand-container">
          <h2 id="todos-brand">- - - - - - To-do List's - - - - - -</h2>
        </div>
        <div id="todos-container">
          <MenuTodos roomname={this.state.roomname} />
        </div>
      </div>
    );
  }
}

export default Menu;
