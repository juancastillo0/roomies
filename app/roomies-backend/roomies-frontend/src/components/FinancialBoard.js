import React, { Component } from "react";
import "./FinancialBoard.css";
import Clock from "../images/clock.png";

class FinancialBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      debt: 400000,
      bills: [
        {
          name: "bill",
          value: 0
        }
      ]
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
              $ {this.state.debt.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            </h1>
          </div>
        </div>
        <div id="bills-container">
          <ul class="list-group">
            <li class="list-group-item">
              <div className="row">
                <img src={Clock} id="bill-status" />
                <div className="col">Water ($5000)</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FinancialBoard;
