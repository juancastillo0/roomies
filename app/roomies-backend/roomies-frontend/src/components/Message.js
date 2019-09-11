import React from 'react';

class Message extends React.Component{
  constructor(props){
    super(props);
  }
  
  render() {

    return(
    <div className="card text-left msg-card"> 
      <img className="card-img-top" src={this.props.movie.imgsrc} alt={this.props.movie.imgalt}/>
      <div className="card-body">
        <h4 className="card-title">{this.props.movie.title}</h4>
        <p className="card-text">{this.props.movie.body}</p>
      </div>
    </div>
    )};
}

export default Message; 