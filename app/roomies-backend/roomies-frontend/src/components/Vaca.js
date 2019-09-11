import React, { Component } from "react";
import "./Vaca.css";

class Vaca extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deudaVaca: 405200
    };
  }
  render() {
    return (
      <div id="financial-container">
        <h1 id="numVaca">$ {this.state.deudaVaca}</h1>
      </div>
    );
  }
}

export default Vaca;
