import React, { Component } from "react";
import "./FinancialBoard.css";

class FinancialBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: [
        {
          name: "Water",
          value: 150000,
          expdate: "12/09/2019"
        },
        {
          name: "Light",
          value: 35000,
          expdate: "12/09/2019"
        },
        {
          name: "Food",
          value: 45000,
          expdate: "12/09/2019"
        },
        {
          name: "Repairing",
          value: 45000,
          expdate: "12/09/2019"
        },
        {
          name: "Fix",
          value: 45000,
          expdate: "12/09/2019"
        }
      ]
    };
  }

  toMoney(value) {
    return value.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }

  renderBills() {
    return this.state.bills.map(bill => {
      return (
        <div
          className="card"
          data-toggle="collapse"
          data-target={"#collapseOne" + bill.name}
          aria-expanded="true"
          aria-controls="collapseOne"
          id="bill-card"
        >
          <div className="card-header" id="headingOne">
            <div className="row">
              <div className="col">
                <h2 className="mb-0" id="bill-name">
                  {bill.name}
                </h2>
              </div>
              <div className="col-7">
                <h2 className="mb-0" id="bill-value">
                  {"( $" + this.toMoney(bill.value) + " )"}
                </h2>
              </div>
            </div>
          </div>

          <div
            id={"collapseOne" + bill.name}
            className="collapse"
            aria-labelledby="headingOne"
            data-parent="#bills-accordion"
          >
            <div className="card-body">
              <div className="row">
                <div className="col-8">
                  <div className="card-footer" id="bill-card-footer">
                    {bill.expdate}
                  </div>
                </div>
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-success"
                    id="btn-pay-bill"
                  >
                    Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  totalDebt() {
    let debt = 0;
    this.state.bills.map(bill => {
      debt += bill.value;
    });
    return debt;
  }

  render() {
    return (
      <div id="debt-container">
        <div className="card text-center" id="debt-card">
          <div className="card-body">
            <h3 className="card-title">Debt</h3>
            <h1 className="card-text" id="debt">
              $ {this.toMoney(this.totalDebt())}
            </h1>
          </div>
        </div>
        <div id="bills-container">
          <div className="accordion" id="bills-accordion">
            {this.renderBills()}
          </div>
        </div>
      </div>
    );
  }
}

export default FinancialBoard;
