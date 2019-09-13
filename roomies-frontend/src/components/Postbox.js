import React from 'react';
import "./MessageBoard.css";
import todoicon from '../images/todo.png';
import msgicon from '../images/msg.png';
import paymnticon from '../images/paymnt.png';
import submit from '../images/submit.png';
import addicon from '../images/add.png';





class Postbox extends React.Component {
  constructor(props){
    super(props);

   this.handleAdd = this.handleAdd.bind(this);
   this.handleSub = this.handleSub.bind(this);

   this.handleMsgBox = this.handleMsgBox.bind(this);
   this.handlePaymntBox = this.handlePaymntBox.bind(this);
   this.handleTodoBox = this.handleTodoBox.bind(this);

   this.handleMsgChange = this.handleMsgChange.bind(this);
   this.handleMsgModSubmit = this.handleMsgModSubmit.bind(this);

   this.handlePaymntDateChange = this.handlePaymntDateChange.bind(this);
   this.handlePaymntActionClick = this.handlePaymntActionClick.bind(this);
   this.handlePaymntAmountChange = this.handlePaymntAmountChange.bind(this);
   this.handlePaymntDescriptionChange = this.handlePaymntDescriptionChange.bind(this);
   this.handlePaymntTitleChange = this.handlePaymntTitleChange.bind(this);
   this.handlePaymntSubmit = this.handlePaymntSubmit.bind(this);



   this.state = {
     add: 1,
     postbox: this.msgBox(),
     msg: "",
     date: "10/10/2010",
     body: {
       description: "",
       amount: "",
       action: "",
              
     }
   }
   
   
  }

  render(){
       
  return (
  <div className="row" id = "postrow">

    <div id="postbox" className="form-group col-12">
      {this.state.postbox}
    </div>

  </div>
  );
  } 

 

  msgBox(){
    return(
      <>
        <textarea
           className="form-control"
           onChange={this.handleMsgChange} 
           name="" id="posttextboxmsg" 
           aria-describedby="helpId" 
           placeholder="..." />
        <div className="btn-group row"  role="group" id="postcolumn" aria-label="Type of Message"> 
        <button type="button" style={{backgroundImage: `url(${msgicon})`}} onClick={this.handleMsgBox} className="btn-mode" id="btn-msg" ></button>
        <button type="button" style={{backgroundImage: `url(${paymnticon})`}} onClick={this.handlePaymntBox} className="btn-mode" id="btn-paymnt"></button>
        <button type="button" style={{backgroundImage: `url(${todoicon})`}} onClick={this.handleTodoBox} className="btn-mode" id="btn-todo"></button>
        <button type="button" style={{backgroundImage: `url(${submit})`}} className="" onClick={this.handleMsgModSubmit} id="btn-submit"></button> 
      </div>  
      </>
    );
  }

  handleMsgChange(e){
    this.setState({msg: e.target.value});
  }

  handleMsgModSubmit(){

    let jon = {
      type: 1,
      text: this.state.msg,
      date: this.getDate()
    };
    console.log(jon);
  }

  getDate(){
    let date = new Date();
    return date.getDate + "/" + date.getMonth+ "/" +date.getFullYear;
  }

  paymntBox(){
    return(
      <>
      <div class="row" id="todo-titlerow" >
          <div className="col-6">
            <input type="text" id="todo-titlebox" onChange={this.handlePaymntTitleChange} placeholder=" title..."/>
          </div>
          <div className="col-6">
          <input type="date" id="start" name="trip-start"
            min="2018-01-01" max="2018-12-31"
            onChange={this.handlePaymntDateChange}/>
          </div>
      </div>
      <div className="row"> 
        <div className="col-12" id="paymnt-box"> 
          <input type="text" className="form-control"  onChange={this.handlePaymntDescriptionChange} id="posttextbox" aria-describedby="helpId" placeholder="..."/>
          <div className="row" id="some-padding">
            <div className="col-7"  id="moneycol">
              <input type="text" onChange={this.handlePaymntAmountChange} style={{borderColor: this.state.add === 0 ? "rgb(73, 190, 92)" : this.state.add === 2? "white" : "rgb(202, 66, 66)"}} id="moneybox" placeholder="        $$$"></input>
            </div>
            <div className="col-5" id="moneybtncol" >
              <button type="button" onClick={this.handlePaymntActionClick} value="added" className="btn-add" id=""> + </button> 
              <button type="button" onClick={this.handlePaymntActionClick} value="sub" className="btn-add" id="minus"> - </button>              
            </div>         
          </div>       
        </div>
        
      </div>
      <div className="btn-group row"  role="group" id="postcolumn" aria-label="Type of Message"> 
       <button type="button" style={{backgroundImage: `url(${msgicon})`}} onClick={this.handleMsgBox} className="btn-mode" id="btn-msg" ></button>
       <button type="button" style={{backgroundImage: `url(${paymnticon})`}} onClick={this.handlePaymntBox} className="btn-mode" id="btn-paymnt"></button>
       <button type="button" style={{backgroundImage: `url(${todoicon})`}} onClick={this.handleTodoBox} className="btn-mode" id="btn-todo"></button>
       <button type="button" style={{backgroundImage: `url(${submit})`}} onClick={this.handlePaymntSubmit} className="" id="btn-submit"></button> 
      </div>  
      </>
    );
  }

  handlePaymntTitleChange(e){
    /*
    this.setState({title: e.target.value});
    */
  }
  handlePaymntDateChange(e){
    let date = ""; /*e.target.value;*/
    let parts = date.split("-");
    let fdate = parts[2]+"/"+parts[1]+"/"+parts[0];
    this.setState({date: fdate});
  }

  handlePaymntDescriptionChange(e){
    this.setState(prevState => {
      let body = {...prevState.body};
      console.log(e.target);/*
      body.description = e.target.value;*/
      return {body};      
    })
  }

  handlePaymntAmountChange(e){
    this.setState(prevState => {
      let body = {...prevState.body};
      body.amount = "added";
      return {body};      
    })
  }

  handlePaymntActionClick(e){
    this.setState(prevState => {
      let body = {...prevState.body};/*
      body.action = e.target.value;*/
      return {body};      
    })
  }

  handlePaymntSubmit(){
    let action = "added";
    let jon = {
      movie:{
          type: 2,
          title: this.state.title,
          date: action === "added"? this.getDate(): this.state.date, 
          body: {
            action: action,
            amount: this.state.body.amount,
            description: this.state.body.description,
          }
    }}
    console.log(jon);
  }

  todoBox(){
    return (
      <>
        <div class="row" id="todo-titlerow">
          <input type="text" id="todo-titlebox" placeholder=" title..."/>
        </div>
        <div className="row" id="box-todoadd"> 
          <div className="col-10" id="addtodocol">
            <input type="text" id="todobox" placeholder=" clean the dishes..."/>
          </div>
          <div className="col-2" id="addtodorow">
            <button type="button"  style={{backgroundImage: `url(${addicon})`}} id="btn-todoadd"></button>
          </div>
        </div>
        <div className="row">
          <textarea readOnly id="box-donetodo" value=""/>
        </div>
        <div className="btn-group row"  role="group" id="postcolumn" aria-label="Type of Message"> 
       <button type="button" style={{backgroundImage: `url(${msgicon})`}} onClick={this.handleMsgBox} className="btn-mode" id="btn-msg" ></button>
       <button type="button" style={{backgroundImage: `url(${paymnticon})`}} onClick={this.handlePaymntBox} className="btn-mode" id="btn-paymnt"></button>
       <button type="button" style={{backgroundImage: `url(${todoicon})`}} onClick={this.handleTodoBox} className="btn-mode" id="btn-todo"></button>
       <button type="button" style={{backgroundImage: `url(${submit})`}} className="" id="btn-submit"></button> 
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