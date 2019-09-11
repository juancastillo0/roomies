import React from 'react';
import "./MessageBoard.css";

class Postbox extends React.Component {
  constructor(props){
    super(props);

   // this.handlePostboxChange = this.handlePostboxChange.bind(this);


  }
  render(){
  return (
  <div className="row" id = "postrow">
     <div className="btn-group-vertical col-2" role="group" aria-label="Type of Message">
       <button type="button" onClick={this.handlePostboxChange.bind(this)} className="btn btn-dark btn-post btn-sm" id="btn-msg">Message</button>
       <button type="button" className="btn btn-dark btn-post btn-sm" id="btn-paymnt">Pay Update</button>
       <button type="button" className="btn btn-dark btn-post btn-sm" id="btn-todo">To-Do</button>
    </div>
    <div id="postbox" className="form-group col-6">
      <label htmlFor="postbox"></label>
      {this.todoBox()}
    </div>
    <div className="col-2">
      <button type="button" className="btn btn-success center-block btn-lg" id="btn-submit">Send!</button>
    </div>
  </div>
  );
  }

  msgBox(){
    return(
      <>
        <input type="text" className="form-control" name="" id="posttextbox" aria-describedby="helpId" placeholder="..."/>
        <small id="helpId" className="form-text text-muted">Post something to {this.props.roomname}</small>  
      </>
    );
  }

  paymntBox(){
    return(
      <div class="row"> 
        <div className="col-3">
          <div className="row">
            <button type="button" className="btn btn-success" id="btn-add"> + </button>
            <button type="button" className="btn btn-danger" id="btn-add"> - </button>
            <input type="text" id="moneybox" placeholder="$$$"></input>
          </div>       
        </div>
        <div className="col-9"> 
          <input type="text" className="form-control" id="posttextbox" aria-describedby="helpId" placeholder="..."/>
        </div>
      </div>
    );
  }

  todoBox(){
    return (
      <>
        <div className="row" id="box-todoadd"> 
          <div className="col-10" >
            <input type="text" id="todobox" placeholder=" clean the dishes..."/>
          </div>
          <div className="col-2">
            <button type="button"  id="btn-addtodo" className="btn btn-primary"> + </button>
          </div>
        </div>
        <div className="row">
          <textarea readOnly id="box-donetodo" value=""/>
        </div>
      </>
    );

  }

  handlePostboxChange(){
    console.log("this is ", this);
  }

}



export default Postbox;