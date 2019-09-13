import React from 'react';
import "./MessageBoard.css";
import todoicon from '../images/todo.png';
import msgicon from '../images/todo.png';
import paymnticon from '../images/todo.png';




class Postbox extends React.Component {
  constructor(props){
    super(props);

   this.handleAdd = this.handleAdd.bind(this);
   this.handleSub = this.handleSub.bind(this);

   this.handleMsgBox = this.handleMsgBox.bind(this);
   this.handlePaymntBox = this.handlePaymntBox.bind(this);
   this.handleTodoBox = this.handleTodoBox.bind(this);

   this.state = {
     add: 1,
     postbox: this.msgBox()
   }
   
   
  }

  render(){
       
  return (
  <div className="row" id = "postrow">

    <div id="postbox" className="form-group col-10">
      <label htmlFor="postbox"></label>
      {this.state.postbox}
      
    </div>
    <div className="col-2" id="div-submit">
      <button type="button" className="btn btn-success center-block btn-lg" id="btn-submit">Send!</button>
    </div>
    <div className="btn-group row" role="group" id="postcolumn" aria-label="Type of Message"> 
       <button type="button" onClick={this.handleMsgBox} className="btn-post" id="btn-msg" >Message</button>
       <button type="button" onClick={this.handlePaymntBox} className="btn-post" id="btn-paymnt">Pay Update</button>
       <button type="button" onClick={this.handleTodoBox} className="btn-post" id="btn-todo">To-Do</button>
    </div>
    
  </div>
  );
  } 

 

  msgBox(){
    return(
      <>
        <input type="text" className="form-control" name="" id="posttextbox" aria-describedby="helpId" placeholder="..."/>
      </>
    );
  }

  paymntBox(){
    return(
      <div className="row"> 
        <div className="col-3" id="paymnt-btncolumn">
          <div className="row" >
            <button type="button" onClick={this.handleAdd} className="btn btn-success" id="btn-add"> + </button>
            <button type="button" onClick={this.handleSub} className="btn btn-danger" id="btn-add"> - </button>
            <input type="text" style={{backgroundColor: this.state.add === 0 ? "rgb(73, 190, 92)" : this.state.add === 2? "white" : "rgb(202, 66, 66)"}} id="moneybox" placeholder="        $$$"></input>
          </div>       
        </div>
        <div className="col-9" id="paymnt-box"> 
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

  handleAdd(){
    this.setState({
      add: 1,
      postbox: this.paymntBox()
    });
  }

  handleSub(){
    this.setState({
      add: 0,
      postbox: this.paymntBox()
    });
  } 

  handleMsgBox(){
    this.setState({postbox: this.msgBox()});
  }

  handleTodoBox(){
    this.setState({postbox: this.todoBox()});
  }
  
  handlePaymntBox(){
    this.setState({
      add: 1,
      postbox: this.paymntBox()
    });
  }



}



export default Postbox;