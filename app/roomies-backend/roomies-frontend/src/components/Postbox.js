import React from 'react';
import "./MessageBoard.css";

class Postbox extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
  return (
  <div className="row" id = "postrow">
     <div id="postbtn-cluster" className="btn-group-vertical col-4" data-toggle="buttons">
      <label className="btn btn-primary active">
        <input type="radio" name="postbtn" id="btn-msg"/>
      </label>
      <label className="btn btn-primary">
        <input type="radio" name="postbtn" id="btn-todo"/>
      </label>
      <label className="btn btn-primary">
        <input type="radio" name="postbtn" id="btn-paymnt"/>
      </label>
    </div>
    <div id="postbox" className="form-group col-8">
      <label htmlFor="postbox"></label>
      <input type="text" className="form-control" name="" id="posttextbox" aria-describedby="helpId" placeholder="..."/>
      <small id="helpId" className="form-text text-muted">Post something to {this.props.roomname}</small>  
    </div>
  </div>
  );
  }
}

export default Postbox;