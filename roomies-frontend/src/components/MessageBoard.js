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
          _id: 1,
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
          _id: 2,
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
          _id: 3,
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
      .then(messages => this.setState({ messages: messages }));
  }

  renderTest() {
    return this.state.messages.map(m => <h3>{m.title}</h3>);
  }

  renderMessages(){
    return this.state.messages.slice(0).reverse().map(message => {
      return <Message message={message} key={message._id} />
    })
  }

  /*

  reactionUpdate(reaction, id){
    let msg = this.state.messages.filter(message => message.id === id);
    let index = this.state.messages.indexOf(msg);
    console.log(msg);
    console.log(index);
    this.setState(prevState => {
      let msgs = {...prevState.messages};
      if(reaction === "like"){
        msgs[index].like = msgs[index].like + 1;
      } else {
        msgs[index].seen = msgs[index].seen + 1;
      }
      return {msgs};
    })
  }
  
  statusChange(id){
    let m = this.state.messages.find(message => {
      return message._id === id;
    });
    this.setState(prevState => {
      let msg = {...prevState.messages};
      let index = Object.keys(msg).map(e => {return e._id}).indexOf(m._id);
      console.log(index);
      console.log(msg);
      console.log(m);
      msg[index].status = msg[index].status === 1? 0 : 1;

      return {msg};
    })
 } 
 */
 
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
