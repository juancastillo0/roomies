import React, { Component } from "react";

class MenuTodos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roomname: this.props.roomname,
      todoLists: []
    };
  }

  componentDidMount() {
    const roomname = this.state.roomname;

    fetch(`/todolists/${roomname}/`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          todoLists: data[0].todoLists
        })
      );
  }

  random(){
    return Math.floor(Math.random()*13000);
  }

  renderTodosNames() {
    return this.state.todoLists.map(todolist => {
      return (
        <a
          key={this.random()}
          href="/"
          className="list-group-item d-flex justify-content-between align-items-center todolistmenu"
        >
          {todolist.name}
          <span className="badge badge-primary badge-pill">
            {todolist.taskNum}
          </span>
        </a>
      );
    });
  }

  render() {
    return <ul className="list-group">{this.renderTodosNames()}</ul>;
  }
}

export default MenuTodos;
