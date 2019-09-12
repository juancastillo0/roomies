import React, { Component } from "react";
import "./FinancialBoard.css";

class FinancialBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      debt: 400000
    };
  }

  toMoney(debt) {
    if (debt.length) {
    }
  }

  render() {
    return (
      <div id="debt-container">
        <div className="card text-center" id="debt-card">
          <div className="card-body">
            <h3 className="card-title">Debt</h3>
            <h1 className="card-text" id="debt">
              {this.state.debt.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default FinancialBoard;
