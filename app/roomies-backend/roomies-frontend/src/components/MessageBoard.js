import React, { Component } from "react";

class MessageBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    fetch("/data")
      .then(res => res.json())
      .then(movies => this.setState({ movies: movies }));
  }

  renderTest() {
    return this.state.movies.map(m => <h3>{m.title}</h3>);
  }

  render() {
    return (
      <div>
        <h1>Aqui va el message board</h1>
        {this.renderTest()}
      </div>
    );
  }
}

export default MessageBoard;
