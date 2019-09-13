import React, { Component } from "react";
import Postbox from "./Postbox.js";
import Message from "./Message.js";
import "./MessageBoard.css";

class MessageBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {
          id: 1,
          type: 1,
          title : "Msg Card",
          text: "Gregorio Ospina es un increiblemente Gregorio Ospina es un Gregorio Ospina es un increiblemente pesimo hola como va wvweything increiblemente pesimo hola como va wvweything pesimo hola como va wvweything",
          date: "15/11/2019"
        },
        {
          id: 2,
          type: 2,
          title: "Payment Update",
          date: "15/11/2019",
          body: {
            action: "added",
            amount: "10000",
            description: "Payment made the the guy for the reason we talked about.",
          }
        },
        {
          id: 3,
          type: 3,
          title: "To-do list",
          text: "I created this todo in order to organize our dirt-eating days.",
          date: "15/11/2019",
          todos: [{
            item: "clean the dishes",
            status: 0
          },
          {
            item: "walk the dog",
            status: 0
          },
          {
            item: "eat dirt",
            status: 1
          }]
        }
      ]
    };
  }

  componentDidMount() {
    /*
    fetch("/data")
      .then(res => res.json())
      .then(movies => this.setState({ movies: movies }));
      */
  }

  renderTest() {
    return this.state.movies.map(m => <h3>{m.title}</h3>);
  }

  renderMessages(){
    return this.state.movies.map(movie => {
      return <Message movie={movie} key={movie.id} />
    })
  }

  render() {
    return (
      <div id="messageboard">
        <Postbox roomname={this.state.movies[0].title}/>
          <div id="cards-container">
            {this.renderMessages()}
          </div>
        </div>
    );
  }
}


export default MessageBoard;
