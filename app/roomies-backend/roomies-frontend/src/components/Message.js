import React from 'react';
import TodoPhoto from '../images/todo_img.jpg';
import PaymntPhoto from '../images/paymnt_img.jpg';
import MsgPhoto from '../images/msg_img.jpg';
import like from '../images/like.png';
import seen from '../images/seen.png';





class Message extends React.Component{
  constructor(props){
    super(props);
  }
  
  
  render() {
    return(
    <div className="card text-left msg-card"> 
      <div class="msg-img-cover">
        <img className="card-img-top msg-img" id={this.agregarImgId()} src={this.chooseImg()} alt={this.props.movie.imgalt}/>
      </div>
      <div className="card-body msgcardbody">
        <h4 className="card-title">{this.props.movie.title}</h4>
        {this.choose_mod()}
      </div>
    </div>
    )};

    agregarImgId(){
      return this.props.movie.type === 1 ? "msgImg" : this.props.movie.type === 2 ? "paymntImg" : "todoImg";
    }

    chooseImg(){
      return this.props.movie.type === 1 ? MsgPhoto : this.props.movie.type === 2 ? PaymntPhoto : TodoPhoto ;
    };

  msg_mod(){
    var likebtn = {
      backgroundImage: 'url(' + like + ')'
    };
    return (
    <>
      <p>{this.props.movie.text}</p>
      <div class="row" id="reaction-row">
        <button type="button" style={{backgroundImage: `url(${like})`}} class="btn-reaction reaction-margin" ></button>
        <button type="button" style={{backgroundImage: `url(${seen})`}} class="btn-reaction reaction-margin" ></button>
        <p class="reaction-date reaction-margin">  {this.props.movie.date} </p>
      </div>
    </>
    )
  }

  paymnt_mod(){
    return (
      <>
        <div id="payment-mod">
            <h2 style={{color: this.props.movie.body.action === "added"?"rgb(73, 190, 92)":"rgb(202, 66, 66)"}}> {this.color_paymnt()} </h2>
        </div> 
        <p className="card-text">{this.props.movie.body.description}</p>
        <div class="row" id="reaction-row">
          <button type="button" style={{backgroundImage: `url(${like})`}} class="btn-reaction reaction-margin" ></button>
          <button type="button" style={{backgroundImage: `url(${seen})`}} class="btn-reaction reaction-margin" ></button>
          <p class="reaction-date reaction-margin">  {this.props.movie.date} </p>
      </div>
       </>
    );
  }

  color_paymnt(){
    const sign = this.props.movie.body.action === "added" ? "+ " : "- ";
    return sign + this.props.movie.body.amount ;
  }

  showTodos(){
    return this.props.movie.todos.map(todo =>{
        const status = todo.status === 1? "👍🏻":"🆗";
        return (
          <>
          <p style={{color: todo.status === 1? "grey" : "white"}} class="p-todo"> {todo.item} {status}  </p>
          <hr class="linea-todo"/>
          </>
        );
    })
  }

  todo_mod(){
    return (
      <>
        <div id="todo-mod">
          {this.showTodos()}
        </div> 
        <p className="card-text">{this.props.movie.text}</p>
        <div class="row" id="reaction-row">
          <button type="button" style={{backgroundImage: `url(${like})`}} class="btn-reaction reaction-margin" ></button>
          <button type="button" style={{backgroundImage: `url(${seen})`}} class="btn-reaction reaction-margin" ></button>
          <p class="reaction-date reaction-margin">  {this.props.movie.date} </p>
        </div>
      </>
    );
  }



  choose_mod(){
    const type = this.props.movie.type;
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