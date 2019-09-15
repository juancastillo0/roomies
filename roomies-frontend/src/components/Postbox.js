import React from 'react';
import "./MessageBoard.css";
import todoicon from '../images/todo.png';
import msgicon from '../images/msg.png';
import paymnticon from '../images/paymnt.png';
import submit from '../images/submit.png';
import addicon from '../images/add.png';
import TodoPreview from './TodoPreview.js'





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

   this.handleTodoAddBtnClick = this.handleTodoAddBtnClick.bind(this);
   this.handleTodoAreaChange = this.handleTodoAreaChange.bind(this);
   this.handleTodoDoneArea = this.handleTodoDoneArea.bind(this);
   this.handleTodoTitleChange = this.handleTodoTitleChange.bind(this);

   this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
   this.postMsg = this.postMsg.bind(this);
   this.redoTodoPrint = this.redoTodoPrint.bind(this);
 
   this.state = {
     add: 1,
     postbox: this.msgBox(),
     temptodo: "",
     todoprint: "",
     text: "",
     date: "10/10/2010",
     body: {
       description: "",
       amount: "",
       action: "",
     },
     todos: [{
       item: "",
       status: 0
     }]
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
    this.setState({text: e.target.value});
  }

  handleMsgModSubmit(){

    let json = {
      type: 1,
      roomname: this.props.roomname,
      user: this.props.user,
      like: 0,
      seen: 0,
      text: this.state.text,
      date: this.getDate()
    };
    this.postMsg(JSON.stringify(json));

  }

  getDate(){
    let date = new Date();
    return date.getDate() + "/" + date.getMonth() + "/" +date.getFullYear();
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
    e.persist();
    this.setState({title: e.target.value});
  }
  handlePaymntDateChange(e){
    e.persist();
    let date = e.target.value;
    let parts = date.split("-");
    let fdate = parts[2]+"/"+parts[1]+"/"+parts[0];
    this.setState({date: fdate});
  }

  handlePaymntDescriptionChange(e){
    e.persist();
    this.setState(prevState => {
      let body = {...prevState.body};
      body.description = e.target.value;
      return {body};      
    })
  }

  handlePaymntAmountChange(e){
    e.persist();
    this.setState(prevState => {
      let body = {...prevState.body};
      body.amount = e.target.value;
      return {body};      
    })
  }

  handlePaymntActionClick(e){
    e.persist();
    this.setState(prevState => {
      let body = {...prevState.body};
      body.action = e.target.value;
      return {body};      
    })
  }

  handlePaymntSubmit(){
    let action = this.state.action;
    let json = {
          type: 2,
          roomname: this.props.roomname,
          user: this.props.user,
          title: this.state.title,
          date: action === "added"? this.getDate(): this.state.date, 
          like: 0,
          seen: 0,
          body: this.state.body
    };
    console.log(json);
    this.postMsg(JSON.stringify(json));
  }


  todoBox(){
    return (
      <>
        <div class="row" id="todo-titlerow">
          <input type="text" onChange={this.handleTodoTitleChange} id="todo-titlebox" placeholder=" title..."/>
        </div>
        <div className="row" id="box-todoadd"> 
          <div className="col-10" id="addtodocol">
            <input type="text" id="todobox" onChange={this.handleTodoAreaChange} placeholder=" clean the dishes..."/>
          </div>
          <div className="col-2" id="addtodorow">
            <button type="button"  style={{backgroundImage: `url(${addicon})`}} onClick={this.handleTodoAddBtnClick} id="btn-todoadd"></button>
          </div>
        </div>
        <TodoPreview content={this.state.todoprint}/>
        <div className="btn-group row"  role="group" id="postcolumn" aria-label="Type of Message"> 
       <button type="button" style={{backgroundImage: `url(${msgicon})`}} onClick={this.handleMsgBox} className="btn-mode" id="btn-msg" ></button>
       <button type="button" style={{backgroundImage: `url(${paymnticon})`}} onClick={this.handlePaymntBox} className="btn-mode" id="btn-paymnt"></button>
       <button type="button" style={{backgroundImage: `url(${todoicon})`}} onClick={this.handleTodoBox} className="btn-mode" id="btn-todo"></button>
       <button type="button" style={{backgroundImage: `url(${submit})`}} onClick={this.handleTodoSubmit} className="" id="btn-submit"></button> 
      </div>  
      </>
    );
    
  }
  
    
  handleTodoTitleChange(e){
    e.persist();
    this.setState({title: e.target.value});
  }

  handleTodoAreaChange(e){
    e.persist();
    this.setState({temptodo: e.target.value});
  }
  
postMsg(msg){
  console.log(msg);
  fetch(`/message/${this.props.roomname}`, {
    method: 'post',
    headers: {"Content-Type" : "application/json"},
    body: msg })
    .then(res => {
      console.log(res);
    });
}

  handleTodoSubmit(e){
    let _date = this.getDate();
    let json = {
      type: 3,
      roomname: this.props.roomname,
      user: this.props.user,
      title: this.state.title,
      date: _date, 
      like: 0,
      seen: 0,
      todos: this.state.todos
  };
  this.postMsg(JSON.stringify(json));
}


  handleTodoAddBtnClick(e){
    e.persist();
    this.setState(prevState => {
      let temptodo = this.state.temptodo; 
      let todos = [...prevState.todos, {item: temptodo, state: 0}];
      return {todos};
    });
    
    this.redoTodoPrint();
  }

  redoTodoPrint(){
    let str;
    this.state.todos.map(todo => {
        str = str + "- " + todo.item + "\n";
    })
    this.setState({todoprint: str});
    console.log(this.state.todoprint);
  }

  handleTodoDoneArea(e){
    return this.state.todos.map(todo => {
      return (
        <p className="pre-todo"> - {todo.item} </p>
      );
    })

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