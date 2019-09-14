import React, { Component } from "react";

class MenuTodos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoLists: [
        { name: "Laundry", taskNum: 5 },
        { name: "Fixes", taskNum: 2 },
        { name: "Food", taskNum: 20 },
        { name: "Bids", taskNum: 7 }
      ]
    };
  }

  renderTodosNames() {
    return this.state.todoLists.map(todolist => {
      return (
        <a
          href={todolist.name}
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
