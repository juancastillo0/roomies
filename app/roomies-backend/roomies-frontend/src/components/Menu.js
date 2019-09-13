import React, { Component } from "react";
import Home from "../images/home.png";
import Financial from "../images/financial.png";
import Todo from "../images/todo.png";
import "./Menu.css";

class Menu extends Component {
  state = {};
  render() {
    return (
      <div id="menu-container">
        <div class="row">
          <div class="col-4">
            <div class="list-group" id="list-tab" role="tablist">
              <a
                class="list-group-item list-group-item-action active"
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
                class="list-group-item list-group-item-action"
                id="list-home-list"
                data-toggle="list"
                href="#filter-financial"
                role="tab"
                aria-controls="home"
              >
                <div className="row">
                  <div className="col-2">
                    <img src={Financial} className="" alt="" id="home-icon" />
                  </div>
                  <div className="col">Financial</div>
                </div>
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-home-list"
                data-toggle="list"
                href="#list-home"
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
      </div>
    );
  }
}

export default Menu;
