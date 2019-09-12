import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import MessageBoard from "./components/MessageBoard";
import FinancialBoard from "./components/FinancialBoard";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Navbar />
        </header>

        <main>
          <div className="container-fluid" id="homecontainer">
            <div className="row">
              <div className="col">
                <Menu />
              </div>
              <div className="col-5" id="messageboard">
                <MessageBoard />
              </div>
              <div className="col" id="financialcontainer">
                <FinancialBoard />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
