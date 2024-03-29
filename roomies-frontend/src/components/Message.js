import React from 'react';
import TodoPhoto from '../images/todo_img.jpg';
import PaymntPhoto from '../images/paymnt_img.jpg';
import MsgPhoto from '../images/msg_img.jpg';
import like from '../images/like.png';
import seen from '../images/seen.png';





class Message extends React.Component{
  constructor(props){
    super(props);

    this.forceTheUpdate = this.forceTheUpdate.bind(this);

    this.state={
      like: props.message.like,
      seen: props.message.seen
    }
  }
  
  
  render() {
    return(
    <div className="card text-left msg-card"> 
      <div className="msg-img-cover">
        <img className="card-img-top msg-img" id={this.agregarImgId()} src={this.chooseImg()} alt={this.props.message.imgalt}/>
      </div>
      <div className="card-body msgcardbody">
        {this.choose_mod()}
      </div>
    </div>
    )};

    agregarImgId(){
      return this.props.message.type === 1 ? "msgImg" : this.props.message.type === 2 ? "paymntImg" : "todoImg";
    }

    chooseImg(){
      return this.props.message.type === 1 ? MsgPhoto : this.props.message.type === 2 ? PaymntPhoto : TodoPhoto ;
    };

  msg_mod(){

    return (
    <>
      <h4 className="card-title">{this.props.message.user}</h4>
      <p>{this.props.message.text}</p>
      <div className="row" id="reaction-row">
        <button type="button" onClick={this.updateLike.bind(this)} style={{backgroundImage: `url(${like})`}} className="btn-reaction reaction-margin" id="like" ></button>
        <label htmlFor="like" id="reaction-label">{this.state.like}</label>
        <button type="button" onClick={this.updateSeen.bind(this)} style={{backgroundImage: `url(${seen})`}} className="btn-reaction reaction-margin" id="seen" ></button>
        <label htmlFor="seen" id="reaction-label">{this.state.seen}</label>
        <p className="reaction-date reaction-margin">  {this.props.message.date} </p>
      </div>
    </>
    )
  }

  updateLike(e){
    e.persist();
    this.setState({like: this.state.like + 1})
  }

  updateSeen(e){
    e.persist();
    this.setState({seen: this.state.seen + 1})
  }

  paymnt_mod(){
    return (
      <>
        <h4 className="card-title">{this.props.message.user}</h4>
        <div id="payment-mod">
            <h2 style={{color: this.props.message.body.action === "added"?"rgb(73, 190, 92)":"rgb(202, 66, 66)"}}> {this.color_paymnt()} </h2>
        </div> 
        <p className="card-text">{this.props.message.body.description}</p>
        <div className="row" id="reaction-row">
          <button type="button" onClick={this.updateLike.bind(this)} style={{backgroundImage: `url(${like})`}} className="btn-reaction reaction-margin" id="like" ></button>
          <label htmlFor="like" id="reaction-label">{this.state.like}</label>
          <button type="button" onClick={this.updateSeen.bind(this)} style={{backgroundImage: `url(${seen})`}} className="btn-reaction reaction-margin" id="seen" ></button>
          <label htmlFor="seen" id="reaction-label">{this.state.seen}</label>
          <p className="reaction-date reaction-margin">  {this.props.message.date} </p>
      </div>
       </>
    );
  }

  color_paymnt(){
    const sign = this.props.message.body.action === "added" ? "+ " : "- ";
    return sign + this.props.message.body.amount ;
  }

  updateStatus(e){

    let value = e.target.value;
    this.props.message.todos.map(function(todo){
      if(todo.item === value){
        todo.status = todo.status === 1? 0: 1;
      }
      return 0;
    })
    this.forceTheUpdate();
  }

  forceTheUpdate(){
    this.forceUpdate();
  }

  random(){
    return Math.floor(Math.random()*87000);
  }

  showTodos(){
    return this.props.message.todos.slice(0).reverse().map(todo =>{
        const status = todo.status === 1? "👍🏻":"🆗";
        return (
          <>
          <button  type="button" style={{color: todo.status === 1? "grey" : "white"}} onClick={this.updateStatus.bind(this)} className="p-todo" value={todo.item}> {todo.item} {status}  </button>
          <hr className="linea-todo"/>
          </>
        );
    })
  }

  todo_mod(){
    return (
      <>
        <h4 className="card-title">{this.props.message.title}</h4>
        <div id="todo-mod">
          {this.showTodos()}
        </div> 
        <div className="row" id="reaction-row">
          <button type="button" onClick={this.updateLike.bind(this)} style={{backgroundImage: `url(${like})`}} className="btn-reaction reaction-margin" id="like" ></button>
          <label htmlFor="like" id="reaction-label">{this.state.like}</label>
          <button type="button" onClick={this.updateSeen.bind(this)} style={{backgroundImage: `url(${seen})`}} className="btn-reaction reaction-margin" id="seen" ></button>
          <label htmlFor="seen" id="reaction-label">{this.state.seen}</label>
          <p className="reaction-date reaction-margin">  {this.props.message.date} </p>
        </div>
      </>
    );
  }



  choose_mod(){
    const type = this.props.message.type;
    if(type === 3)
    {
      return this.todo_mod();
    }
    else if(type === 2){
      return this.paymnt_mod();
    }
    else if(type === 1){
      return this.msg_mod();
    }  
  }


}





export default Message;  