import React, { Component } from "react";
import "./FinancialBoard.css";

class FinancialBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      debt: 405200
    };
  }
  render() {
    return (
      <div id="financial-container">
        <h1>Debt:</h1>
        <h1 id="debt">$ {this.state.debt}</h1>
      </div>
    );
  }
}

export default FinancialBoard;
