import React, { Component } from "react";
import "./FinancialBoard.css";

class FinancialBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      roomname: this.props.roomname,
      bills: []
    };
  }

  componentDidMount() {
    const username = this.state.user;
    const roomname = this.state.roomname;

    fetch(`/${roomname}/${username}/debt`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          bills: data[0].bills
        })
      );
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
      return (debt += bill.value);
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
