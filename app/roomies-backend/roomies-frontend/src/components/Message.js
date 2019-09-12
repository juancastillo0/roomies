import React from 'react';

class Message extends React.Component{
  constructor(props){
    super(props);
  }
  
  render() {

    return(
    <div className="card text-left msg-card"> 
      <div class="msg-img-cover">
        <img className="card-img-top msg-img" src={this.props.movie.imgsrc} alt={this.props.movie.imgalt}/>
      </div>
      <div className="card-body msgcardbody">
        <h4 className="card-title">{this.props.movie.title}</h4>
        <p className="card-text">{this.props.movie.body}</p>
        <a href="#" class="card-link">💚</a>
        <a href="#" class="card-link">✅</a>
      </div>
    </div>
    )};
}

export default Message;  