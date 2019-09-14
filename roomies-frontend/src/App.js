import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import MessageBoard from "./components/MessageBoard";
import FinancialBoard from "./components/FinancialBoard";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomname: this.props.roomname,
      user: this.props.user
    };
  }
  render() {
    return (
      <div>
        <header>
          <Navbar user={this.state.user} />
        </header>

        <main>
          <div className="container-fluid" id="menucontainer">
            <div className="row">
              <div className="col">
                <Menu />
              </div>
              <div className="col-5" id="messageboard">
                <MessageBoard />
              </div>
              <div className="col" id="financialcontainer">
                <FinancialBoard
                  roomname={this.state.roomname}
                  user={this.state.user}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
