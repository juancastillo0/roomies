import React, { Component } from "react";
import Postbox from "./Postbox.js";
import Message from "./Message.js";
import "./MessageBoard.css";

class MessageBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roomname: this.props.roomname,
      messages: [
        {
          id: 1,
          type: 1,
          roomname: "room-1",
          title : "Msg Card",
          text: "Gregorio Ospina es un increiblemente Gregorio Ospina es un Gregorio Ospina es un increiblemente pesimo hola como va wvweything increiblemente pesimo hola como va wvweything pesimo hola como va wvweything",
          date: "15/11/2019",
          user: "John Guerra",
          like: 3,
          seen: 5
        },
        {
          id: 2,
          type: 2,
          roomname: "room-1",
          title: "Payment Update",
          date: "15/11/2019",
          user: "John Guerra",
          like: 3,
          seen: 5,
          body: {
            action: "added",
            amount: "10000",
            description: "Payment made the the guy for the reason we talked about.",
          }
        },
        {
          id: 3,
          type: 3,
          roomname: "room-1",
          title: "To-do list",
          date: "15/11/2019",
          user: "John Guerra",
          like: 3,
          seen: 5,
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
    fetch(`/${this.state.roomname}/messages`)
      .then(res => res.json())
      .then(messages => this.setState({ messages: messages }))
      .then(console.log(this.state.messages));
  }

  renderTest() {
    return this.state.messages.map(m => <h3>{m.title}</h3>);
  }

  renderMessages(){
    return this.state.messages.map(message => {
      return <Message message={message} key={message._id} />
    })
  }

  render() {
    return (
      <div id="messageboard">
        <Postbox roomname={this.props.roomname} user={this.props.user}/>
          <div id="cards-container">
            {this.renderMessages()}
          </div>
        </div>
    );
  }
}


export default MessageBoard;
