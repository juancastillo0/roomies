import React from 'react';
import TodoPhoto from '../images/todo_img.jpg';
import PaymntPhoto from '../images/paymnt_img.jpg';
import MsgPhoto from '../images/msg_img.jpg';



class Message extends React.Component{
  constructor(props){
    super(props);
  }
/*
  chooseImg(){
    return this.props.movie.type === 1 ? MsgPhoto : this.props.move.type === 2 ? PaymntPhoto : TodoPhoto ;
  };
*/
  
  render() {
    return(
    <div className="card text-left msg-card"> 
      <div class="msg-img-cover">
        <img className="card-img-top msg-img" src={MsgPhoto} alt={this.props.movie.imgalt}/>
      </div>
      <div className="card-body msgcardbody">
        <h4 className="card-title">{this.props.movie.title}</h4>
        <p className="card-text">{}</p>
        <a href="#" class="card-link">💚</a>
        <a href="#" class="card-link">✅</a>
      </div>
    </div>
    )};

}

const paymnt_mod = () =>{
  return (
    <>
    <div id="payment-mod">
        <h2> {() => {
          const sign = this.props.movie.body.action === "added" ? "+ " : "- ";
          return this.props.movie.body.amount + sign;
        }} </h2>
    </div> 
    <p className="card-text">{this.props.movie.body.description}</p>
    <div class="card-footer text-muted">{this.props.movie.body.date}</div>
    </>
  );
}

const todo_mod = () =>{
  return (
    <>
    
    <p className="card-text">{this.props.movie.body.description}</p>
    <div class="card-footer text-muted">{this.props.movie.body.date}</div>
    </>
  );
}


export default Message;  